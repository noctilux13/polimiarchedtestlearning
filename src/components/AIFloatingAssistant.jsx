import React, { useState, useContext, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Bot,
  X,
  Send,
  Loader2,
  Sparkles,
  Trash2,
  Copy,
  Check,
  Compass,
  Terminal,
  ShieldCheck,
  Database,
  Sliders,
  Play,
  RotateCcw,
  Wifi,
  WifiOff,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { AppContext } from '../context/AppContext';
import {
  processAgentMessage,
  executeSandboxedTool,
  getAISettings,
  getPracticeConfig
} from '../services/aiAgentService';

const EASE = [0.16, 1, 0.3, 1];

export default function AIFloatingAssistant() {
  const navigate = useNavigate();
  const {
    apiKey,
    t,
    isAiOpen,
    setIsAiOpen,
    aiContextData,
    setAiContextData,
    chatHistory,
    setChatHistory,
    clearChatHistory
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isOnline, setIsOnline] = useState(() => (typeof navigator !== 'undefined' ? navigator.onLine : true));
  const [pendingConfirm, setPendingConfirm] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const aiSettings = getAISettings();
  const hasValidKey = Boolean(apiKey || aiSettings.apiKey);
  const activeMode = isOnline && hasValidKey ? 'online' : 'offline_fallback';

  // Greeting if history is empty
  const defaultGreeting = t
    ? t(
        'assistant.greeting',
        '您好！我是您的 ARCHED 建筑与艺术史智能助教。我可在本地沙箱中直接为您查询题库、分析五大考纲考点、定制模考参数，或通过大模型进行深度学术对话！'
      )
    : '您好！我是您的 ARCHED 建筑与艺术史智能助教。我可在本地沙箱中直接为您查询题库、分析考纲考点、定制模考参数！';

  const displayMessages = chatHistory.length > 0 ? chatHistory : [
    {
      role: 'assistant',
      content: defaultGreeting,
      mode: 'fallback_offline',
      timestamp: Date.now()
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [displayMessages, isAiOpen]);

  const handleSend = async (customPrompt = null) => {
    const textToSend = (customPrompt || inputValue).trim();
    if (!textToSend || isLoading) return;

    const newHistory = [
      ...chatHistory,
      { role: 'user', content: textToSend, timestamp: Date.now() }
    ];
    setChatHistory(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await processAgentMessage(textToSend, {
        context: aiContextData
      });

      const nextMsg = {
        role: 'assistant',
        content: response.content || response.text || response.message || '',
        mode: response.mode || (hasValidKey && isOnline ? 'online' : 'fallback_offline'),
        toolUsed: response.toolUsed || null,
        toolArgs: response.toolArgs || null,
        toolResult: response.toolResult || null,
        fallbackNotice: response.fallbackNotice || null,
        timestamp: Date.now()
      };

      setChatHistory([...newHistory, nextMsg]);

      // If user prompted reset bank, check if confirmation modal should be offered
      if (/重置题库|恢复出厂/i.test(textToSend) && !/确认/i.test(textToSend)) {
        setPendingConfirm({
          action: 'reset_question_bank',
          title: '确认将题库恢复出厂设置？',
          description: '此操作将清空所有用户及 AI 生成的自定义题目，恢复为官方 320 道 ARCHED 经典母题。'
        });
      }
    } catch (err) {
      setChatHistory([
        ...newHistory,
        {
          role: 'assistant',
          content: `【助教沙箱提示】系统运行发生异常: ${err.message}`,
          mode: 'fallback_offline',
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmAction = async (action) => {
    if (action === 'reset_question_bank') {
      setIsLoading(true);
      try {
        const res = await executeSandboxedTool('reset_question_bank', { confirm: true });
        setChatHistory(prev => [
          ...prev,
          {
            role: 'assistant',
            content: res.message || '题库已成功重置恢复至官方 320 道 ARCHED 经典母题！',
            mode: 'fallback_offline',
            toolUsed: 'reset_question_bank',
            timestamp: Date.now()
          }
        ]);
      } catch (e) {
        setChatHistory(prev => [
          ...prev,
          {
            role: 'assistant',
            content: `重置失败: ${e.message}`,
            mode: 'fallback_offline',
            timestamp: Date.now()
          }
        ]);
      } finally {
        setIsLoading(false);
        setPendingConfirm(null);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleClearHistory = () => {
    if (window.confirm(t ? t('assistant.clearConfirm', '确认清空与助教的所有对话记录？') : 'Clear all chat history?')) {
      clearChatHistory();
    }
  };

  const QUICK_PROMPTS = [
    { label: '📊 考纲五大领域统计', prompt: '题库概况与统计', icon: Database },
    { label: '🔍 检索蒙德里安与包豪斯', prompt: '搜索关于蒙德里安的题目', icon: Compass },
    { label: '⏱️ 模考设为 20题/30分钟', prompt: '设置模拟考题数为 20 题，时限 30 分钟', icon: Sliders },
    { label: '✨ 生成一道文艺复兴考题', prompt: '生成一道文艺复兴与透视法考题', icon: Sparkles },
    { label: '⚠️ 重置恢复官方母题', prompt: '恢复出厂重置题库', icon: RotateCcw }
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isAiOpen && (
          <motion.button
            className="btn btn-primary"
            style={{
              position: 'fixed',
              right: '24px',
              bottom: '24px',
              borderRadius: 'var(--radius-pill)',
              height: '46px',
              padding: '0 18px',
              boxShadow: 'var(--shadow-card-hover)',
              zIndex: 998,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.84rem',
              fontWeight: 550,
            }}
            onClick={() => setIsAiOpen(true)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.04, y: -2, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <Bot size={17} style={{ color: 'var(--accent-blue-subtle)' }} />
            <span>{t ? t('assistant.title', 'AI 助教') : 'AI 助教'}</span>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: activeMode === 'online' ? 'var(--accent-sage)' : 'var(--text-tertiary)',
                marginLeft: '-2px'
              }}
              title={activeMode === 'online' ? '在线模型模式' : '离线规则沙箱模式'}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isAiOpen && (
          <motion.div
            style={{
              position: 'fixed',
              right: '20px',
              bottom: '20px',
              width: '440px',
              maxWidth: 'calc(100vw - 32px)',
              height: '640px',
              maxHeight: 'calc(100vh - 40px)',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-float)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            {/* Header */}
            <div
              style={{
                padding: '0.9rem 1.2rem',
                borderBottom: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-blue-subtle)',
                  border: '1px solid var(--accent-blue-border)',
                  color: 'var(--accent-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Bot size={17} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                      {t ? t('assistant.title', 'ARCHED AI 助教') : 'ARCHED AI 助教'}
                    </span>
                    {/* Status Badge */}
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '2px 7px',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        backgroundColor: activeMode === 'online' ? 'var(--accent-sage-subtle)' : 'var(--bg-canvas)',
                        color: activeMode === 'online' ? 'var(--accent-sage)' : 'var(--text-secondary)',
                        border: `1px solid ${activeMode === 'online' ? 'var(--accent-sage-border)' : 'var(--border-hairline)'}`
                      }}
                      title={activeMode === 'online' ? '在线智能连接模式' : '100% 离线规则沙箱模式'}
                    >
                      {activeMode === 'online' ? (
                        <>
                          <Wifi size={10} />
                          <span>在线 ({aiSettings.provider || 'Gemini'})</span>
                        </>
                      ) : (
                        <>
                          <WifiOff size={10} />
                          <span>离线沙箱</span>
                        </>
                      )}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: '1px' }}>
                    {aiContextData ? `研读焦点: ${aiContextData.title || ''}` : '安全沙箱工具调用与考纲辅导'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {chatHistory.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="btn-icon"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-tertiary)',
                      cursor: 'pointer',
                      padding: '5px',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title={t ? t('assistant.clearHistory', '清空历史') : '清空历史'}
                  >
                    <Trash2 size={14} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsAiOpen(false)}
                  className="btn-icon"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '5px',
                    borderRadius: 'var(--radius-xs)',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="关闭"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Context Badge Banner if prefilled */}
            {aiContextData && (
              <div style={{
                padding: '7px 14px',
                backgroundColor: 'var(--accent-blue-subtle)',
                borderBottom: '1px solid var(--accent-blue-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.74rem',
                color: 'var(--accent-blue)'
              }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  🎯 研读对象: <strong>{aiContextData.title}</strong> ({aiContextData.artistName})
                </span>
                <button
                  type="button"
                  onClick={() => setAiContextData(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', fontSize: '0.72rem', textDecoration: 'underline' }}
                >
                  清除
                </button>
              </div>
            )}

            {/* Messages Scroll Area */}
            <div
              style={{
                flex: 1,
                padding: '1.1rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
              }}
            >
              {displayMessages.map((msg, idx) => {
                const isUser = msg.role === 'user';
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isUser ? 'flex-end' : 'flex-start',
                      position: 'relative'
                    }}
                  >
                    {/* Tool execution badge if tool was called */}
                    {!isUser && msg.toolUsed && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '3px 8px',
                          marginBottom: '5px',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--accent-blue-subtle)',
                          border: '1px solid var(--accent-blue-border)',
                          color: 'var(--accent-blue)',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          letterSpacing: '0.02em'
                        }}
                      >
                        <Terminal size={11} />
                        <span>[Tool Called: <code>{msg.toolUsed}</code>]</span>
                        <ShieldCheck size={11} style={{ color: 'var(--accent-sage)' }} title="沙箱安全验证通过" />
                      </div>
                    )}

                    {/* Message Bubble */}
                    <div
                      style={{
                        maxWidth: '88%',
                        padding: '0.85rem 1.05rem',
                        borderRadius: isUser ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                        backgroundColor: isUser ? 'var(--accent-primary)' : 'var(--bg-subtle)',
                        color: isUser ? '#fff' : 'var(--text-primary)',
                        fontSize: '0.88rem',
                        lineHeight: '1.68',
                        border: isUser ? 'none' : '1px solid var(--border-hairline)',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}
                    >
                      {msg.content}
                    </div>

                    {/* Practice Quick-Apply Card if practice config was updated */}
                    {!isUser && msg.toolUsed === 'configure_practice_settings' && (
                      <div
                        style={{
                          marginTop: '6px',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--accent-blue-border)',
                          display: 'flex',
                          gap: '8px',
                          alignItems: 'center',
                          flexWrap: 'wrap'
                        }}
                      >
                        <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Sliders size={12} /> 模考偏好已就绪:
                        </span>
                        <button
                          type="button"
                          onClick={() => { setIsAiOpen(false); navigate('/simulator'); }}
                          className="btn btn-primary"
                          style={{ padding: '3px 9px', fontSize: '0.74rem', borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          <Play size={10} /> 前往模拟考场
                        </button>
                        <button
                          type="button"
                          onClick={() => { setIsAiOpen(false); navigate('/quiz'); }}
                          className="btn btn-outline"
                          style={{ padding: '3px 9px', fontSize: '0.74rem', borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          极速测验
                        </button>
                      </div>
                    )}

                    {!isUser && msg.content !== defaultGreeting && (
                      <button
                        type="button"
                        onClick={() => handleCopy(msg.content, idx)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-tertiary)',
                          fontSize: '0.68rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                          marginTop: '3px',
                          padding: '2px 4px'
                        }}
                        title={t ? t('assistant.copy', '复制') : '复制'}
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check size={11} style={{ color: 'var(--accent-sage)' }} />
                            <span style={{ color: 'var(--accent-sage)' }}>已复制</span>
                          </>
                        ) : (
                          <>
                            <Copy size={11} />
                            <span>复制</span>
                          </>
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}

              {/* Action Confirmation Card if pending */}
              {pendingConfirm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--accent-terracotta-subtle)',
                    border: '1.5px solid var(--accent-terracotta-border)',
                    margin: '8px 0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-terracotta)', fontWeight: 600, fontSize: '0.86rem', marginBottom: '4px' }}>
                    <AlertTriangle size={15} />
                    <span>{pendingConfirm.title}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0 0 10px 0' }}>
                    {pendingConfirm.description}
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => handleConfirmAction(pendingConfirm.action)}
                      className="btn btn-primary"
                      style={{
                        padding: '4px 12px',
                        fontSize: '0.76rem',
                        backgroundColor: 'var(--accent-terracotta)',
                        borderColor: 'var(--accent-terracotta)',
                        color: '#fff',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      确认执行
                    </button>
                    <button
                      type="button"
                      onClick={() => setPendingConfirm(null)}
                      className="btn btn-outline"
                      style={{ padding: '4px 12px', fontSize: '0.76rem', borderRadius: 'var(--radius-pill)' }}
                    >
                      取消
                    </button>
                  </div>
                </motion.div>
              )}

              {isLoading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-tertiary)', fontSize: '0.8rem', padding: '0.5rem 0' }}>
                  <Loader2 size={15} className="animate-spin" style={{ color: 'var(--accent-blue)' }} />
                  <span>沙箱执行与分析中...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div style={{
              padding: '7px 12px',
              borderTop: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--bg-surface)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}>
              {QUICK_PROMPTS.map((qp, qidx) => {
                const Icon = qp.icon;
                return (
                  <button
                    key={qidx}
                    type="button"
                    onClick={() => handleSend(qp.prompt || qp.label)}
                    disabled={isLoading}
                    style={{
                      padding: '4px 9px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-hairline)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.72rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={11} style={{ color: 'var(--accent-blue)' }} />
                    <span>{qp.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Input Area */}
            <div
              style={{
                padding: '0.8rem',
                borderTop: '1px solid var(--border-hairline)',
                backgroundColor: 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <textarea
                ref={inputRef}
                className="input-field"
                placeholder={t ? t('assistant.placeholder', '输入指令（如「题库概况」、「设置模拟考20题」、「搜索蒙德里安」）...') : '输入指令...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                style={{
                  flex: 1,
                  resize: 'none',
                  minHeight: '40px',
                  maxHeight: '80px',
                  padding: '9px 13px',
                  fontSize: '0.88rem',
                  lineHeight: '1.4',
                  borderRadius: 'var(--radius-pill)'
                }}
              />
              <motion.button
                className="btn btn-primary"
                style={{
                  height: '40px',
                  width: '40px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  flexShrink: 0
                }}
                onClick={() => handleSend()}
                disabled={isLoading || !inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="发送 (Enter)"
              >
                <Send size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
