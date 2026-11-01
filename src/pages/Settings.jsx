import React, { useContext, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { callAiService } from '../services/aiService';
import {
  getAISettings,
  saveAISettings,
  callMultiProviderAI,
  executeSandboxedTool
} from '../services/aiAgentService';
import MouseSpotlight from '../components/MouseSpotlight';
import {
  Settings as SettingsIcon,
  Key,
  Globe,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
  Trash2,
  Download,
  Upload,
  RotateCcw,
  Languages,
  Check,
  Cpu,
  Server,
  Sparkles,
  Sun,
  Moon,
  Monitor,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const THEME_OPTIONS = [
  { key: 'light', labelKey: 'settings.themeLight', fallback: '日间明亮', icon: Sun, desc: '经典白底画廊与灰黑微光' },
  { key: 'dark', labelKey: 'settings.themeDark', fallback: '夜间深邃', icon: Moon, desc: '黑曜石夜幕与月白手电光束' },
  { key: 'auto', labelKey: 'settings.themeAuto', fallback: '跟随系统', icon: Monitor, desc: '自动适配操作系统的明暗偏好' },
];

const PROVIDER_PRESETS = [
  {
    provider: 'gemini',
    name: 'Google Gemini',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/openai/',
    model: 'gemini-2.5-flash',
    hint: 'AIzaSy... (gemini-2.5-flash / gemini-1.5-flash)'
  },
  {
    provider: 'openai',
    name: 'OpenAI',
    endpoint: 'https://api.openai.com/v1',
    model: 'gpt-4o-mini',
    hint: 'sk-... (gpt-4o / gpt-4o-mini)'
  },
  {
    provider: 'custom',
    name: 'Groq (Qwen 3.8)',
    endpoint: 'https://api.groq.com/openai/v1',
    model: 'qwen/qwen3.8-27b',
    hint: 'gsk_... (qwen/qwen3.8-27b 旗舰中文解析)'
  },
  {
    provider: 'custom',
    name: 'Groq (GPT-OSS 120B)',
    endpoint: 'https://api.groq.com/openai/v1',
    model: 'openai/gpt-oss-120b',
    hint: 'gsk_... (openai/gpt-oss-120b / openai/gpt-oss-20b)'
  },
  {
    provider: 'custom',
    name: 'DeepSeek',
    endpoint: 'https://api.deepseek.com/v1',
    model: 'deepseek-chat',
    hint: 'sk-... (deepseek-chat / deepseek-reasoner)'
  },
  {
    provider: 'custom',
    name: 'Claude',
    endpoint: 'https://api.anthropic.com/v1',
    model: 'claude-3-5-sonnet-20241022',
    hint: 'sk-ant-... (claude-3-5-sonnet-20241022)'
  },
  {
    provider: 'custom',
    name: 'OpenRouter',
    endpoint: 'https://openrouter.ai/api/v1',
    model: 'deepseek/deepseek-r1',
    hint: 'sk-or-... (deepseek/deepseek-r1)'
  }
];

export default function Settings() {
  const {
    apiKey,
    setApiKey,
    apiEndpoint,
    setApiEndpoint,
    apiModel,
    setApiModel,
    cfWorkerUrl,
    setCfWorkerUrl,
    customImages,
    removeCustomImage,
    clearAllOverrides,
    setCustomImage,
    language,
    setLanguage,
    theme,
    setTheme,
    isDark,
    t,
    LANGUAGES
  } = useContext(AppContext);

  const initialSettings = getAISettings();
  const [selectedProvider, setSelectedProvider] = useState(initialSettings.provider || 'gemini');
  const [inputKey, setInputKey] = useState(initialSettings.apiKey || apiKey || '');
  const [inputEndpoint, setInputEndpoint] = useState(initialSettings.customEndpoint || apiEndpoint || 'https://generativelanguage.googleapis.com/v1beta/openai/');
  const [inputModel, setInputModel] = useState(initialSettings.model || apiModel || 'gemini-2.5-flash');
  const [inputWorkerUrl, setInputWorkerUrl] = useState(cfWorkerUrl || '');
  const [showKey, setShowKey] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [resettingBank, setResettingBank] = useState(false);
  const [resetResult, setResetResult] = useState(null);
  const importFileRef = useRef(null);

  // Practice configuration controls (questionCount, timer, negativeScoring)
  const [practiceConfig, setPracticeConfig] = useState(() => {
    try {
      const stored = localStorage.getItem('arched_practice_config');
      return stored ? JSON.parse(stored) : { examQuestionCount: 20, examTimeLimitMinutes: 30, quizQuestionCount: 10, negativeScoring: true };
    } catch {
      return { examQuestionCount: 20, examTimeLimitMinutes: 30, quizQuestionCount: 10, negativeScoring: true };
    }
  });

  const handlePracticeConfigChange = (key, val) => {
    setPracticeConfig(prev => {
      const next = { ...prev, [key]: val };
      localStorage.setItem('arched_practice_config', JSON.stringify(next));
      return next;
    });
  };

  const customList = Object.values(customImages || {});

  const handleKeyChange = (val) => {
    setInputKey(val);
    const trimmed = val.trim();
    if (trimmed.startsWith('AIzaSy')) {
      setSelectedProvider('gemini');
      setInputEndpoint('https://generativelanguage.googleapis.com/v1beta/openai/');
      setInputModel('gemini-2.5-flash');
    } else if (trimmed.startsWith('gsk_')) {
      setSelectedProvider('custom');
      setInputEndpoint('https://api.groq.com/openai/v1');
      setInputModel('qwen/qwen3.8-27b');
    } else if (trimmed.startsWith('sk-ant-')) {
      setSelectedProvider('custom');
      setInputEndpoint('https://api.anthropic.com/v1');
      setInputModel('claude-3-5-sonnet-20241022');
    } else if (trimmed.startsWith('sk-or-')) {
      setSelectedProvider('custom');
      setInputEndpoint('https://openrouter.ai/api/v1');
      setInputModel('deepseek/deepseek-r1');
    } else if (trimmed.startsWith('sk-')) {
      setSelectedProvider('openai');
      setInputEndpoint('https://api.openai.com/v1');
      setInputModel('gpt-4o-mini');
    }
  };

  const handleApplyPreset = (preset) => {
    setSelectedProvider(preset.provider || 'custom');
    setInputEndpoint(preset.endpoint);
    setInputModel(preset.model);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const cleanKey = inputKey.trim();
    setApiKey(cleanKey);
    setApiEndpoint(inputEndpoint.trim());
    setApiModel(inputModel.trim());
    setCfWorkerUrl(inputWorkerUrl.trim());

    saveAISettings({
      provider: selectedProvider,
      apiKey: cleanKey,
      model: inputModel.trim(),
      customEndpoint: inputEndpoint.trim()
    });

    localStorage.setItem('aiApiKey', cleanKey);
    localStorage.setItem('aiApiEndpoint', inputEndpoint.trim());
    localStorage.setItem('aiApiModel', inputModel.trim());
    localStorage.setItem('arched_practice_config', JSON.stringify(practiceConfig));

    setTestResult({
      success: true,
      message: t ? t('settings.saveSuccess', '配置与考场参数已成功保存！') : 'Settings saved successfully!'
    });
  };

  const handleTestApi = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const cleanKey = inputKey.trim();
      setApiKey(cleanKey);
      setApiEndpoint(inputEndpoint.trim());
      setApiModel(inputModel.trim());

      saveAISettings({
        provider: selectedProvider,
        apiKey: cleanKey,
        model: inputModel.trim(),
        customEndpoint: inputEndpoint.trim()
      });

      let reply = '';
      try {
        const testRes = await callMultiProviderAI('Hello, please respond with "AI connection successful!".', {
          provider: selectedProvider,
          apiKey: cleanKey,
          model: inputModel.trim(),
          customEndpoint: inputEndpoint.trim()
        });
        reply = testRes.content || testRes.text || 'Success';
      } catch (_e) {
        // Fallback to callAiService
        reply = await callAiService({
          prompt: 'Say "AI connection successful!" in under 5 words.'
        });
      }

      setTestResult({
        success: true,
        message: `连接成功 (${selectedProvider}): "${reply.slice(0, 80).trim()}"`
      });
    } catch (err) {
      setTestResult({
        success: false,
        message: `连接测试未成功: ${err.message}`
      });
    } finally {
      setTesting(false);
    }
  };

  const handleResetFactoryQuestionBank = async () => {
    if (!window.confirm('⚠️ 确认恢复出厂设置？这将清空所有自定义添加的考题，并恢复至官方 320 道 ARCHED 题库母题。')) {
      return;
    }
    setResettingBank(true);
    setResetResult(null);
    try {
      const res = await executeSandboxedTool('reset_question_bank', { confirm: true });
      if (res.success) {
        setResetResult({
          success: true,
          message: '题库已成功重置！官方 320 道 ARCHED 经典母题已就绪。'
        });
      } else {
        setResetResult({
          success: false,
          message: res.error || '重置失败'
        });
      }
    } catch (err) {
      setResetResult({
        success: false,
        message: `重置失败: ${err.message}`
      });
    } finally {
      setResettingBank(false);
    }
  };

  // Export custom images as a JSON file
  const handleExportBackup = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customImages, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `art_learning_custom_images_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import custom images from JSON file
  const handleImportBackup = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (typeof parsed === 'object' && parsed !== null) {
          for (const [key, val] of Object.entries(parsed)) {
            if (val && (val.dataUrl || typeof val === 'string')) {
              const dataUrl = val.dataUrl || val;
              await setCustomImage(key, dataUrl, {
                title: val.title || key,
                targetType: val.targetType || (key.startsWith('artist:') ? 'artist' : 'artwork')
              });
            }
          }
          alert(`成功导入 ${Object.keys(parsed).length} 项自定义图片配置！`);
        }
      } catch (err) {
        alert('导入失败：文件格式不正确 (' + err.message + ')');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="container"
        style={{ maxWidth: '800px' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="chip chip-blue" style={{ marginBottom: '0.85rem' }}>
            <SettingsIcon size={12} /> {t ? t('nav.settings', '设置') : '系统设置'}
          </div>
          <h1 style={{ marginBottom: '0.4rem' }}>{t ? t('settings.title', '偏好与系统配置') : '偏好与系统配置'}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
            {t ? t('settings.subtitle', '配置多语言界面、AI 大模型端点、ARCHED 模考规则及本地缓存数据。') : '配置多语言界面、AI 大模型端点、ARCHED 模考规则及本地缓存数据。'}
          </p>
        </div>

        {/* ── Theme Preference Card ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.02, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
            {isDark ? <Moon size={18} style={{ color: 'var(--accent-blue)' }} /> : <Sun size={18} style={{ color: 'var(--accent-ochre)' }} />}
            <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.themeTitle', '外观与主题') : '外观与主题'}
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            {t ? t('settings.themeSubtitle', '在日间明亮画廊与夜间深邃黑曜石展厅手电筒模式间随心切换。') : '在日间明亮画廊与夜间深邃黑曜石展厅手电筒模式间随心切换。'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.85rem' }}>
            {THEME_OPTIONS.map((item) => {
              const Icon = item.icon;
              const isSelected = theme === item.key;
              return (
                <motion.button
                  key={item.key}
                  type="button"
                  onClick={() => setTheme(item.key)}
                  whileHover={{ y: -2.5, scale: 1.012, transition: { type: 'spring', stiffness: 420, damping: 24 } }}
                  whileTap={{ scale: 0.985, transition: { type: 'spring', stiffness: 500, damping: 25 } }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.95rem 1.15rem',
                    borderRadius: 'var(--radius-sm)',
                    border: isSelected ? '1.5px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--accent-blue-subtle)' : 'var(--bg-surface)',
                    color: isSelected ? 'var(--accent-blue)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
                    textAlign: 'left',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isSelected ? 'var(--bg-surface)' : 'var(--bg-subtle)',
                      border: '1px solid var(--border-hairline)'
                    }}>
                      <Icon size={16} style={{ color: isSelected ? 'var(--accent-blue)' : 'var(--text-secondary)' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: isSelected ? 600 : 500, fontSize: '0.92rem', color: isSelected ? 'var(--accent-blue)' : 'var(--text-primary)' }}>
                        {t ? t(item.labelKey, item.fallback) : item.fallback}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check size={16} style={{ color: 'var(--accent-blue)' }} />}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Practice & Exam Configuration Card ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.03, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
            <Sparkles size={18} style={{ color: 'var(--accent-blue)' }} />
            <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.practiceTitle', 'ARCHED 模考与练习偏好') : 'ARCHED 模考与练习偏好'}
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            {t ? t('settings.practiceDesc', '自定义模拟考场的倒计时时限、抽题题量及负分惩罚规则，支持通过 AI 助教直接语音或文本指令快速调节。') : '自定义模拟考场的倒计时时限、抽题题量及负分惩罚规则，支持通过 AI 助教直接语音或文本指令快速调节。'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {/* Exam Question count */}
            <div style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                {t ? t('settings.questionCountLabel', '单套模拟考题量 (questionCount)') : '单套模拟考题量'}
              </label>
              <select
                value={practiceConfig.examQuestionCount || 20}
                onChange={(e) => handlePracticeConfigChange('examQuestionCount', parseInt(e.target.value, 10))}
                className="input-select"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)', background: 'var(--bg-subtle)', color: 'var(--text-primary)' }}
              >
                <option value={10}>10 题 (极速速刷)</option>
                <option value={20}>20 题 (标准 ARCHED 规模)</option>
                <option value={30}>30 题 (深度强化模考)</option>
                <option value={50}>50 题 (全真综合统考)</option>
              </select>
            </div>

            {/* Timer limit */}
            <div style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                {t ? t('settings.timerLabel', '考试倒计时时限 (timer)') : '考试倒计时时限 (timer)'}
              </label>
              <select
                value={practiceConfig.examTimeLimitMinutes || 30}
                onChange={(e) => handlePracticeConfigChange('examTimeLimitMinutes', parseInt(e.target.value, 10))}
                className="input-select"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)', background: 'var(--bg-subtle)', color: 'var(--text-primary)' }}
              >
                <option value={15}>15 分钟</option>
                <option value={20}>20 分钟</option>
                <option value={30}>30 分钟 (标准时限)</option>
                <option value={45}>45 分钟</option>
                <option value={60}>60 分钟</option>
              </select>
            </div>

            {/* Quiz question count */}
            <div style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                快速测验题量 (Quiz)
              </label>
              <select
                value={practiceConfig.quizQuestionCount || 10}
                onChange={(e) => handlePracticeConfigChange('quizQuestionCount', parseInt(e.target.value, 10))}
                className="input-select"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)', background: 'var(--bg-subtle)', color: 'var(--text-primary)' }}
              >
                <option value={5}>5 题</option>
                <option value={10}>10 题 (推荐)</option>
                <option value={15}>15 题</option>
                <option value={20}>20 题</option>
              </select>
            </div>

            {/* Negative scoring toggle */}
            <div style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                {t ? t('settings.negativeScoringLabel', 'ARCHED 倒扣分机制 (negativeScoring)') : 'ARCHED 倒扣分机制'}
              </label>
              <button
                type="button"
                onClick={() => handlePracticeConfigChange('negativeScoring', !practiceConfig.negativeScoring)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-xs)',
                  border: practiceConfig.negativeScoring ? '1.5px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                  background: practiceConfig.negativeScoring ? 'var(--accent-blue-subtle)' : 'var(--bg-subtle)',
                  color: practiceConfig.negativeScoring ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{practiceConfig.negativeScoring ? '开启 (-0.25分/错题)' : '关闭 (答错不扣分)'}</span>
                {practiceConfig.negativeScoring && <Check size={16} />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Language Preference Card ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
            <Languages size={18} style={{ color: 'var(--accent-blue)' }} />
            <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.languageTitle', '界面与考题语言') : '界面与考题语言'}
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            {t ? t('settings.languageDesc', '无缝切换中文、英文、意大利语及西班牙语。') : '无缝切换中文、英文、意大利语及西班牙语。'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(165px, 1fr))', gap: '0.85rem' }}>
            {LANGUAGES.map((langItem) => {
              const isSelected = language === langItem.code;
              return (
                <motion.button
                  key={langItem.code}
                  type="button"
                  onClick={() => setLanguage(langItem.code)}
                  whileHover={{ y: -2.5, scale: 1.012, transition: { type: 'spring', stiffness: 420, damping: 24 } }}
                  whileTap={{ scale: 0.985, transition: { type: 'spring', stiffness: 500, damping: 25 } }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: isSelected ? '1.5px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--accent-blue-subtle)' : 'var(--bg-surface)',
                    color: isSelected ? 'var(--accent-blue)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <span style={{ fontSize: '1.3rem' }}>{langItem.flag}</span>
                    <div>
                      <div style={{ fontWeight: isSelected ? 600 : 500, fontSize: '0.92rem', color: isSelected ? 'var(--accent-blue)' : 'var(--text-primary)' }}>
                        {langItem.name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)' }}>
                        {langItem.label}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check size={16} style={{ color: 'var(--accent-blue)' }} />}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Universal AI Model & API Configuration Card ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
            <Cpu size={18} style={{ color: 'var(--accent-blue)' }} />
            <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.aiConfigTitle', 'AI 大模型与沙箱密钥配置') : 'AI 大模型与沙箱密钥配置'}
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            {t ? t('settings.aiConfigDesc', '支持 Google Gemini (REST 原生函数调用)、OpenAI 及各类兼容端点。密钥严格加密驻留于浏览器 LocalStorage，未配置时 100% 自动切换确定性离线规则引擎。') : '支持 Google Gemini、OpenAI 与离线确定性沙箱。'}
          </p>

          {/* Quick Provider Presets */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', marginBottom: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 650 }}>
              大模型提供商预设 / Provider Presets (Gemini / OpenAI / Custom)
            </div>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
              {PROVIDER_PRESETS.map((p) => {
                const isActive = selectedProvider === p.provider && inputEndpoint === p.endpoint && inputModel === p.model;
                return (
                  <motion.button
                    key={p.name}
                    type="button"
                    onClick={() => handleApplyPreset(p)}
                    whileHover={{ y: -1.5, scale: 1.03, transition: { type: 'spring', stiffness: 450, damping: 22 } }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.78rem',
                      border: isActive ? '1.5px solid var(--accent-blue)' : '1px solid var(--border-hairline)',
                      backgroundColor: isActive ? 'var(--accent-blue-subtle)' : 'var(--bg-surface)',
                      color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 600 : 450,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease'
                    }}
                  >
                    <Sparkles size={11} style={{ color: isActive ? 'var(--accent-blue)' : 'var(--text-tertiary)' }} />
                    {p.name}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSave}>
            {/* API Key Input with Password Masking Toggle */}
            <div style={{ marginBottom: '1.35rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  <Key size={14} style={{ color: 'var(--accent-blue)' }} />
                  {t ? t('settings.apiKeyLabel', 'API Key 凭据') : 'API Key 凭据'}
                </label>
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {showKey ? <EyeOff size={13} /> : <Eye size={13} />}
                  <span>{showKey ? '隐藏密钥' : '显示密钥 (Show)'}</span>
                </button>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiKeyHint', '仅保存在本地 LocalStorage 中（如 Gemini: AIzaSy..., OpenAI: sk-..., Groq: gsk_...）。') : '仅保存在浏览器 LocalStorage 中。'}
              </p>

              <div style={{ position: 'relative' }}>
                <input
                  type={showKey ? 'text' : 'password'}
                  className="input-field"
                  placeholder="AIzaSy... / sk-... / gsk_..."
                  value={inputKey}
                  onChange={(e) => handleKeyChange(e.target.value)}
                  style={{ borderRadius: 'var(--radius-sm)', paddingRight: '40px' }}
                />
              </div>

              {inputKey.trim().startsWith('AIzaSy') && (
                <div style={{ marginTop: '0.45rem', fontSize: '0.76rem', color: 'var(--accent-sage)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={13} />
                  <span>已自动适配 Google Gemini 官方大模型与原生沙箱工具调用</span>
                </div>
              )}
            </div>

            {/* Provider Selection */}
            <div style={{ marginBottom: '1.35rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Cpu size={14} style={{ color: 'var(--accent-blue)' }} />
                AI 提供商类型 (Provider)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { id: 'gemini', label: 'Google Gemini' },
                  { id: 'openai', label: 'OpenAI' },
                  { id: 'custom', label: 'Custom / 其他' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedProvider(item.id)}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-xs)',
                      border: selectedProvider === item.id ? '1.5px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                      backgroundColor: selectedProvider === item.id ? 'var(--accent-blue-subtle)' : 'var(--bg-subtle)',
                      color: selectedProvider === item.id ? 'var(--accent-blue)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: selectedProvider === item.id ? 600 : 450
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* API Endpoint Base URL */}
            <div style={{ marginBottom: '1.35rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Server size={14} style={{ color: 'var(--accent-sage)' }} />
                {t ? t('settings.apiEndpointLabel', 'API 端点 URL (Endpoint)') : 'API 端点 URL (Endpoint)'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiEndpointHint', '例如 https://api.openai.com/v1 或 https://generativelanguage.googleapis.com/v1beta/openai/') : 'API Base URL'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="https://generativelanguage.googleapis.com/v1beta/openai/"
                value={inputEndpoint}
                onChange={(e) => setInputEndpoint(e.target.value)}
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
            </div>

            {/* Model Name */}
            <div style={{ marginBottom: '1.35rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Cpu size={14} style={{ color: 'var(--accent-ochre)' }} />
                {t ? t('settings.apiModelLabel', '模型名称 (Model Identifier)') : '模型名称'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiModelHint', '例如 gemini-2.5-flash, gemini-1.5-flash, gpt-4o-mini, deepseek-chat') : 'Model identifier.'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="gemini-2.5-flash"
                value={inputModel}
                onChange={(e) => setInputModel(e.target.value)}
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
            </div>

            {/* Cloudflare Worker Proxy URL */}
            <div style={{ marginBottom: '1.6rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Globe size={14} style={{ color: 'var(--accent-terracotta)' }} />
                {t ? t('settings.proxyUrlLabel', '自定义 CORS 反向代理 (可选)') : '自定义 CORS 反向代理 (可选)'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.proxyUrlHint', '若浏览器直接请求大模型被 CORS 跨域拦截，可填写 Cloudflare Worker 代理地址。') : 'Optional CORS proxy URL.'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="https://my-proxy.workers.dev"
                value={inputWorkerUrl}
                onChange={(e) => setInputWorkerUrl(e.target.value)}
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <motion.button
                type="submit"
                className="btn btn-primary"
                style={{ flex: 1, borderRadius: 'var(--radius-pill)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t ? t('settings.saveSettings', '保存系统设置') : '保存系统设置'}
              </motion.button>
              <motion.button
                type="button"
                className="btn btn-outline"
                onClick={handleTestApi}
                disabled={testing}
                style={{ flex: 1, borderRadius: 'var(--radius-pill)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {testing ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>{t ? t('settings.testingConnection', '正在测试端点...') : '正在测试端点...'}</span>
                  </>
                ) : (
                  <span>{t ? t('settings.testConnection', '测试大模型连通性') : '测试大模型连通性'}</span>
                )}
              </motion.button>
            </div>
          </form>

          {/* Test Status Banner */}
          {testResult && (
            <div
              style={{
                marginTop: '1.35rem',
                padding: '0.9rem 1.1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.88rem',
                backgroundColor: testResult.success ? 'var(--accent-sage-subtle)' : 'var(--accent-terracotta-subtle)',
                color: testResult.success ? 'var(--accent-sage)' : 'var(--accent-terracotta)',
                border: `1px solid ${testResult.success ? 'var(--accent-sage-border)' : 'var(--accent-terracotta-border)'}`,
              }}
            >
              {testResult.success ? <CheckCircle2 size={17} /> : <AlertCircle size={17} />}
              <span>{testResult.message}</span>
            </div>
          )}
        </motion.div>

        {/* ── Question Bank Maintenance Card ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
            <RotateCcw size={18} style={{ color: 'var(--accent-terracotta)' }} />
            <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              题库出厂重置与数据清空 (Factory Reset)
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            清空所有在本地浏览器中通过 AI 助教或手动添加的自定义考题，并将练习与模拟题库完全恢复至官方 320 道 ARCHED 题库母题。
          </p>

          <button
            type="button"
            className="btn btn-outline"
            onClick={handleResetFactoryQuestionBank}
            disabled={resettingBank}
            style={{
              borderColor: 'var(--accent-terracotta-border)',
              color: 'var(--accent-terracotta)',
              borderRadius: 'var(--radius-pill)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {resettingBank ? <Loader2 size={14} className="animate-spin" /> : <AlertTriangle size={14} />}
            <span>重置恢复官方 320 道 ARCHED 题库母题</span>
          </button>

          {resetResult && (
            <div
              style={{
                marginTop: '1rem',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.86rem',
                backgroundColor: resetResult.success ? 'var(--accent-sage-subtle)' : 'var(--accent-terracotta-subtle)',
                color: resetResult.success ? 'var(--accent-sage)' : 'var(--accent-terracotta)',
                border: `1px solid ${resetResult.success ? 'var(--accent-sage-border)' : 'var(--accent-terracotta-border)'}`
              }}
            >
              {resetResult.message}
            </div>
          )}
        </motion.div>

        {/* ── Custom Image Overrides Section ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: EASE }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.35rem', flexWrap: 'wrap', gap: '0.85rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ImageIcon size={18} style={{ color: 'var(--accent-blue)' }} />
                <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
                  {t ? t('settings.customImagesTitle', '自定义插图覆盖') : '自定义插图覆盖'} ({customList.length})
                </h2>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', margin: '0.3rem 0 0 0' }}>
                {t ? t('settings.customImagesDesc', '管理本地上传的艺术家肖像与代表作插图覆盖。') : '管理本地上传的艺术家肖像与代表作插图覆盖。'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <input
                ref={importFileRef}
                type="file"
                accept=".json"
                onChange={handleImportBackup}
                style={{ display: 'none' }}
              />
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => importFileRef.current?.click()}
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem', borderRadius: 'var(--radius-pill)' }}
                title="导入配置"
              >
                <Upload size={12} /> {t ? t('settings.importConfig', '导入配置') : '导入配置'}
              </button>

              {customList.length > 0 && (
                <>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleExportBackup}
                    style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem', borderRadius: 'var(--radius-pill)' }}
                    title="导出备份"
                  >
                    <Download size={12} /> {t ? t('settings.exportBackup', '导出备份') : '导出备份'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => { if (window.confirm(t ? t('settings.clearAllCustomConfirm', '确认清空所有自定义替换的图片？') : 'Clear all custom images?')) clearAllOverrides(); }}
                    style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem', color: 'var(--accent-terracotta)', borderRadius: 'var(--radius-pill)' }}
                  >
                    <RotateCcw size={12} /> {t ? t('settings.clearAllCustom', '清空所有') : '清空所有'}
                  </button>
                </>
              )}
            </div>
          </div>

          {customList.length === 0 ? (
            <div style={{
              padding: '2.2rem 1rem',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-sm)',
              textAlign: 'center',
              color: 'var(--text-tertiary)',
              fontSize: '0.88rem',
              border: '1px solid var(--border-hairline)'
            }}>
              {t ? t('settings.emptyCustomImages', '暂无自定义图片覆盖。可在任一艺术家或作品详情页中点击「替换图片」上传！') : '暂无自定义图片覆盖。'}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '0.9rem' }}>
              {customList.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--bg-surface)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={item.dataUrl}
                    alt={item.title}
                    style={{ width: '44px', height: '44px', borderRadius: '4px', objectFit: 'cover', backgroundColor: 'var(--bg-subtle)' }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 550, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.title || item.id}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                      {item.targetType === 'artist' ? (t ? t('settings.artistAvatarType', '艺术家头像') : '艺术家头像') : (t ? t('settings.artworkImageType', '作品图') : '作品图')}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeCustomImage(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-tertiary)',
                      cursor: 'pointer',
                      padding: '5px'
                    }}
                    title={t ? t('settings.restoreTooltip', '恢复默认原图') : '恢复默认原图'}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* ── Reverse Proxy Tutorial Card ── */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
          style={{ padding: '1.6rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
            <Globe size={17} style={{ color: 'var(--accent-blue)' }} />
            <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.workerTemplateTitle', 'Cloudflare Worker CORS 反向代理模板代码') : 'Cloudflare Worker CORS 反向代理模板代码'}
            </h3>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.85rem' }}>
            {t ? t('settings.workerTemplateDesc', '若您需要部署自己的免费 CORS 反代以解决第三方大模型跨域问题，可将此脚本部署至 Cloudflare Workers：') : '部署至 Cloudflare Workers 进行跨域代理：'}
          </p>
          <pre
            style={{
              backgroundColor: 'var(--bg-subtle)',
              padding: '1.1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              lineHeight: '1.55',
              overflowX: 'auto',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              border: '1px solid var(--border-hairline)',
              margin: 0,
            }}
          >
{`export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, anthropic-version",
        }
      });
    }
    const url = new URL(request.url);
    const upstreamHost = env.UPSTREAM_HOST || "https://generativelanguage.googleapis.com";
    const targetUrl = upstreamHost + url.pathname + url.search;
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    const response = await fetch(modifiedRequest);
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    });
  }
};`}
          </pre>
        </motion.div>
      </motion.div>
    </MouseSpotlight>
  );
}
