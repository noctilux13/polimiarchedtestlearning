import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { AppContext } from '../context/AppContext';
import { questionBankService } from '../services/questionBankService';
import { getQuizQuestions } from '../data/artData';
import { generateAiQuizFromContent } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import {
  Brain,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Award,
  ArrowRight,
  Landmark,
  Palette,
  Clock,
  Eye,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

export default function Quiz() {
  const { apiKey, addQuizScore, t, language } = useContext(AppContext);
  const isZh = !language || language.startsWith('zh');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiGenerated, setAiGenerated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showBilingual, setShowBilingual] = useState(false);

  const DOMAIN_CATEGORIES = [
    { key: 'all', label: isZh ? '全部考点 (All)' : 'All Domains', icon: Brain },
    { key: 'chronology', label: isZh ? '年代序列 (Chronology)' : 'Chronology', icon: Clock },
    { key: 'visual_id', label: isZh ? '图像识别 (Visual ID)' : 'Visual ID', icon: Eye },
    { key: 'avant_garde', label: isZh ? '20世纪先锋 (Avant-Garde)' : 'Avant-Garde', icon: Layers },
    { key: 'artist_movement', label: isZh ? '流派归属 (Movements)' : 'Movements', icon: Palette },
    { key: 'renaissance_classical', label: isZh ? '文艺复兴与古典 (Classical)' : 'Classical', icon: Landmark },
  ];

  useEffect(() => {
    loadQuestions(selectedCategory);
  }, [selectedCategory]);

  const loadQuestions = (cat = 'all', count = 10) => {
    try {
      const effectiveCount = count > 0 ? count : 10;
      let rawQs = [];

      if (cat === 'all') {
        rawQs = questionBankService.getAllQuestions();
      } else if (['chronology', 'visual_id', 'avant_garde', 'artist_movement', 'renaissance_classical'].includes(cat)) {
        rawQs = questionBankService.getQuestionsByDomain(cat);
      } else if (cat === 'architecture' || cat === 'art') {
        rawQs = getQuizQuestions(cat);
      } else {
        rawQs = questionBankService.getAllQuestions();
      }

      // Shuffle and clamp to requested count
      const shuffled = [...rawQs].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, Math.min(effectiveCount, rawQs.length));

      setQuestions(selected);
      setCurrentIdx(0);
      setScore(0);
      setSelectedOption(null);
      setShowExplanation(false);
      setFinished(false);
      setAiGenerated(false);
      setErrorMsg('');
    } catch (err) {
      console.error('Failed to load quiz questions:', err);
      // Fallback to legacy built-in questions
      const fallback = getQuizQuestions('all');
      setQuestions(fallback.slice(0, 10));
    }
  };

  const handleGenerateAiQuiz = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const promptContext = selectedCategory === 'chronology'
        ? 'focus on chronological progression of European architectural epochs and artistic movements'
        : selectedCategory === 'visual_id'
        ? 'focus on artwork visual analysis, author identification, Mondrian, Miro, Pollock, Duchamp'
        : 'focus on 20th century avant-garde architecture, Bauhaus, Futurism, and Renaissance masters';
      
      const aiQs = await generateAiQuizFromContent(promptContext, 5);
      if (Array.isArray(aiQs) && aiQs.length > 0) {
        setQuestions(aiQs);
        setCurrentIdx(0);
        setScore(0);
        setSelectedOption(null);
        setShowExplanation(false);
        setFinished(false);
        setAiGenerated(true);
      } else {
        throw new Error('Invalid AI response format');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(isZh ? 'AI 考题生成遇到问题，已为您自动加载官方 ARCHED 真题题库。' : 'AI generation failed. Loaded official ARCHED question bank.');
      loadQuestions(selectedCategory);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOption = (idx) => {
    if (selectedOption !== null || !questions[currentIdx]) return;
    setSelectedOption(idx);
    setShowExplanation(true);

    const isCorrect = idx === questions[currentIdx].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      const total = questions.length;
      const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
      if (typeof addQuizScore === 'function') {
        addQuizScore(percentage);
      }
      setFinished(true);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (e) {
        // Confetti non-fatal
      }
    }
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <Sparkles size={32} className="animate-spin" style={{ color: 'var(--accent-blue)', marginBottom: '1rem', display: 'inline-block' }} />
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
          {isZh ? 'AI 正在组卷 ARCHED 考题...' : 'Generating AI ARCHED Quiz...'}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
          {isZh ? '正在从西方现当代艺术史与欧洲经典建筑知识库中提取重点考点。' : 'Synthesizing key exam topics from art & architecture history syllabus.'}
        </p>
      </div>
    );
  }

  // Finished / Results Screen
  if (finished) {
    const total = questions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    return (
      <MouseSpotlight>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="container"
          style={{ maxWidth: '640px', textAlign: 'center', padding: '3rem 1.5rem' }}
        >
          <div className="card-editorial" style={{ padding: '2.8rem 2rem' }}>
            <Award size={48} style={{ color: 'var(--accent-ochre)', marginBottom: '1rem' }} />
            <h1 style={{ fontSize: '2.1rem', marginBottom: '0.35rem' }}>
              {isZh ? '测验完成！' : 'Quiz Completed!'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '1.8rem' }}>
              {percentage === 100
                ? (isZh ? '卓越绝伦！🏆 满分通过，掌握扎实！' : 'Flawless! 🏆 Perfect Score!')
                : percentage >= 70
                ? (isZh ? '表现优异！🎉 核心考点掌握良好。' : 'Great Job! 🎉 Excellent Recall!')
                : (isZh ? '再接再厉！建议回顾错题与重点流派知识点。👍' : 'Keep reviewing key points and historical context! 👍')}
            </p>

            <div style={{ backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.6rem', marginBottom: '1.8rem', border: '1px solid var(--border-hairline)' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 600, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                {score} <span style={{ fontSize: '1.3rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', fontWeight: 400 }}>/ {total}</span>
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 550, color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                {isZh ? '正确率' : 'Accuracy'}: <strong style={{ color: 'var(--text-primary)' }}>{percentage}%</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                className="btn btn-outline"
                onClick={() => loadQuestions(selectedCategory)}
                whileHover={{ scale: 1.025, y: -1 }}
                whileTap={{ scale: 0.975 }}
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <RotateCcw size={14} /> {isZh ? '重新测验' : 'Retry Quiz'}
              </motion.button>
              <motion.button
                className="btn btn-primary"
                onClick={handleGenerateAiQuiz}
                whileHover={{ scale: 1.025, y: -1 }}
                whileTap={{ scale: 0.975 }}
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <Sparkles size={14} /> {isZh ? 'AI 针对性出题' : 'AI Targeted Quiz'}
              </motion.button>
              <Link
                to="/simulator"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', borderRadius: 'var(--radius-pill)' }}
              >
                <Landmark size={14} /> {isZh ? '全真 ARCHED 模考' : 'ARCHED Simulator'}
              </Link>
              <Link
                to="/dashboard"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', borderRadius: 'var(--radius-pill)' }}
              >
                {isZh ? '查看学习看板' : 'View Dashboard'}
              </Link>
            </div>
          </div>
        </motion.div>
      </MouseSpotlight>
    );
  }

  const currentQ = questions[currentIdx];
  if (!currentQ) return null;

  // Resolve bilingual content
  const promptZh = currentQ.questionZh || currentQ.question || currentQ.text || '';
  const promptEn = currentQ.questionEn || currentQ.question || currentQ.text || '';
  const activePrompt = isZh ? promptZh : (promptEn || promptZh);

  const rawOptionsZh = currentQ.optionsZh || currentQ.options || [];
  const rawOptionsEn = currentQ.optionsEn || currentQ.options || [];
  const activeOptions = isZh ? rawOptionsZh : (rawOptionsEn.length ? rawOptionsEn : rawOptionsZh);

  const activeExplanation = isZh
    ? (currentQ.explanationZh || currentQ.explanation || '请参考历史背景与大纲解析。')
    : (currentQ.explanationEn || currentQ.explanation || 'Refer to the historical syllabus context.');

  const hasImage = Boolean(currentQ.image || currentQ.fallbackImage);

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="container"
        style={{ maxWidth: '780px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="chip chip-terracotta" style={{ marginBottom: '0.45rem' }}>
              <Brain size={11} /> {isZh ? 'ARCHED 专项练习' : 'ARCHED Practice Quiz'}
            </div>
            <h1 style={{ fontSize: '1.85rem', margin: 0 }}>
              {isZh ? '知识掌握度自测' : 'Knowledge Mastery Check'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
              {isZh ? '官方米理建筑与艺术史大纲五大板块专项题库' : 'Polimi ARCHED Syllabus 5 Core Knowledge Domains'}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setShowBilingual(!showBilingual)}
              style={{ borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
              title="Toggle Bilingual Prompts"
            >
              {showBilingual ? (isZh ? '单语显示' : 'Single Language') : (isZh ? '中英双语' : 'Bilingual')}
            </button>
            <motion.button
              className="btn btn-primary"
              onClick={handleGenerateAiQuiz}
              disabled={loading}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.975 }}
              style={{ borderRadius: 'var(--radius-pill)', fontSize: '0.82rem' }}
            >
              <Sparkles size={13} /> {isZh ? 'AI 动态出题' : 'AI Quiz'}
            </motion.button>
          </div>
        </div>

        {/* Category / Domain Selector */}
        <div
          className="tab-bar"
          style={{
            marginBottom: '1.5rem',
            borderRadius: 'var(--radius-pill)',
            padding: '4px',
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}
        >
          {DOMAIN_CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                className={`tab-item ${isActive ? 'active' : ''}`}
                style={{ borderRadius: 'var(--radius-pill)', padding: '6px 14px', flexShrink: 0 }}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {isActive && (
                  <motion.div
                    layoutId="quiz-domain-indicator"
                    className="tab-indicator"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                    transition={{ type: 'spring', bounce: 0.16, duration: 0.42 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  {Icon && <Icon size={12} />}
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {errorMsg && (
          <div style={{ backgroundColor: 'var(--accent-terracotta-subtle)', color: 'var(--accent-terracotta)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', border: '1px solid var(--accent-terracotta-border)' }}>
            <AlertCircle size={14} /> {errorMsg}
          </div>
        )}

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="card-editorial"
            style={{ padding: '2.2rem' }}
          >
            {/* Header / Badges */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-tertiary)', fontSize: '0.82rem', fontWeight: 550, marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)' }}>
                  {isZh ? '题目' : 'Question'} {currentIdx + 1} / {questions.length}
                </span>
                {currentQ.domain && (
                  <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
                    {currentQ.domain}
                  </span>
                )}
                {currentQ.difficulty && (
                  <span className="chip chip-neutral" style={{ fontSize: '0.72rem' }}>
                    Diff: {currentQ.difficulty}
                  </span>
                )}
              </div>
              <span className="chip chip-ochre">
                {isZh ? '当前得分' : 'Score'}: {score}
              </span>
            </div>

            {/* Visual Stimulus Container (if question has image) */}
            {hasImage && (
              <div
                style={{
                  marginBottom: '1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-hairline)',
                  maxHeight: '340px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px'
                }}
              >
                <img
                  src={currentQ.image || currentQ.fallbackImage}
                  alt={currentQ.questionEn || 'Visual stimulus'}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '320px',
                    objectFit: 'contain',
                    borderRadius: 'var(--radius-xs)'
                  }}
                  onError={(e) => {
                    if (currentQ.fallbackImage && e.target.src !== currentQ.fallbackImage) {
                      e.target.src = currentQ.fallbackImage;
                    }
                  }}
                />
              </div>
            )}

            {/* Question Text */}
            <h2 style={{ fontSize: '1.22rem', marginBottom: showBilingual ? '0.5rem' : '1.6rem', lineHeight: '1.6', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              {activePrompt}
            </h2>

            {/* Bilingual Secondary Text */}
            {showBilingual && (
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.6rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                {isZh ? promptEn : promptZh}
              </p>
            )}

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.6rem' }}>
              {activeOptions.map((opt, idx) => {
                let optStyle = {
                  justifyContent: 'space-between',
                  padding: '0.9rem 1.25rem',
                  fontSize: '0.92rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'left',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-primary)'
                };

                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctAnswer;

                if (selectedOption !== null) {
                  if (isCorrect) {
                    optStyle.backgroundColor = 'var(--accent-sage-subtle)';
                    optStyle.borderColor = 'var(--accent-sage-border)';
                    optStyle.color = 'var(--accent-sage)';
                  } else if (isSelected) {
                    optStyle.backgroundColor = 'var(--accent-terracotta-subtle)';
                    optStyle.borderColor = 'var(--accent-terracotta-border)';
                    optStyle.color = 'var(--accent-terracotta)';
                  }
                }

                // Bilingual secondary option text if enabled
                const secondaryOpt = showBilingual
                  ? (isZh ? rawOptionsEn[idx] : rawOptionsZh[idx])
                  : null;

                return (
                  <motion.button
                    key={idx}
                    type="button"
                    className="btn"
                    style={optStyle}
                    onClick={() => handleSelectOption(idx)}
                    disabled={selectedOption !== null}
                    whileHover={selectedOption === null ? { x: 3, transition: { type: 'spring', stiffness: 450, damping: 25 } } : {}}
                    whileTap={selectedOption === null ? { scale: 0.99 } : {}}
                  >
                    <div>
                      <span><strong>{String.fromCharCode(65 + idx)}.</strong> {opt}</span>
                      {secondaryOpt && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '2px', paddingLeft: '1.2rem' }}>
                          {secondaryOpt}
                        </div>
                      )}
                    </div>
                    {selectedOption !== null && isCorrect && <CheckCircle2 size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />}
                    {selectedOption !== null && isSelected && !isCorrect && <XCircle size={18} style={{ color: 'var(--accent-terracotta)', flexShrink: 0 }} />}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation & Review Feedback */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.1rem', marginTop: '1.1rem' }}
              >
                <div style={{ marginBottom: '1.35rem', backgroundColor: 'var(--bg-subtle)', padding: '1.1rem 1.3rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-blue)', fontWeight: 650, marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <HelpCircle size={13} /> {isZh ? '考点解析与学术背景：' : 'Academic Explanation & Historical Context:'}
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: '1.65' }}>
                    {activeExplanation}
                  </div>
                  {showBilingual && (currentQ.explanationEn || currentQ.explanationZh) && (
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginTop: '0.5rem', borderTop: '1px dashed var(--border-subtle)', paddingTop: '0.5rem', fontStyle: 'italic' }}>
                      {isZh ? currentQ.explanationEn : currentQ.explanationZh}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <motion.button
                    className="btn btn-primary"
                    onClick={handleNextQuestion}
                    whileHover={{ scale: 1.025, y: -1 }}
                    whileTap={{ scale: 0.975 }}
                    style={{ borderRadius: 'var(--radius-pill)' }}
                  >
                    <span>{currentIdx + 1 === questions.length ? (isZh ? '查看测验结果' : 'View Results') : (isZh ? '下一题' : 'Next Question')}</span>
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </MouseSpotlight>
  );
}
