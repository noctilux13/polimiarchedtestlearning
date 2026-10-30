import React, { useState, useEffect, useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { questionBankService } from '../services/questionBankService';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import {
  Clock,
  Flag,
  Award,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Landmark,
  ListOrdered,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];
const EXAM_DURATION_SECONDS = 30 * 60; // 30 minutes for 20 questions
const TOTAL_EXAM_QUESTIONS = 20;

export default function ExamSimulator() {
  const { language } = useContext(AppContext);
  const isZh = !language || language.startsWith('zh');

  // Exam Stages: 'config' | 'in_progress' | 'submitted'
  const [examStage, setExamStage] = useState('config');
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: optionIndex }
  const [flaggedQuestions, setFlaggedQuestions] = useState(() => new Set());
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(EXAM_DURATION_SECONDS);
  const [examResult, setExamResult] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'incorrect' | 'flagged'

  const timerRef = useRef(null);
  const userAnswersRef = useRef(userAnswers);
  useEffect(() => {
    userAnswersRef.current = userAnswers;
  }, [userAnswers]);

  const handleAutoSubmitRef = useRef();

  // Initialize and start exam
  const handleStartExam = () => {
    const examSet = questionBankService.getRandomExamSet(TOTAL_EXAM_QUESTIONS);
    setQuestions(examSet);
    setCurrentIdx(0);
    setUserAnswers({});
    userAnswersRef.current = {};
    setFlaggedQuestions(new Set());
    setTimeLeftSeconds(EXAM_DURATION_SECONDS);
    setExamResult(null);
    setShowSubmitModal(false);
    setExamStage('in_progress');
  };

  // Countdown Timer
  useEffect(() => {
    if (examStage !== 'in_progress') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmitRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStage]);

  // Handle Option Select (deferred evaluation)
  const handleSelectOption = (questionId, optionIdx) => {
    if (examStage !== 'in_progress') return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  // Toggle Flag Question
  const handleToggleFlag = (questionId) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  // Calculate Polimi ARCHED Score (+1.5 correct, -0.25 wrong, 0 omitted)
  const calculateExamScore = (answers = userAnswersRef.current) => {
    let correctCount = 0;
    let wrongCount = 0;
    let omittedCount = 0;
    const domainStats = {};

    questions.forEach(q => {
      const domain = q.domain || 'general';
      if (!domainStats[domain]) {
        domainStats[domain] = { total: 0, correct: 0, wrong: 0, omitted: 0 };
      }
      domainStats[domain].total++;

      const selected = answers ? answers[q.id] : undefined;
      if (selected === undefined || selected === null) {
        omittedCount++;
        domainStats[domain].omitted++;
      } else if (selected === q.correctAnswer) {
        correctCount++;
        domainStats[domain].correct++;
      } else {
        wrongCount++;
        domainStats[domain].wrong++;
      }
    });

    // Polimi formula: +1.5 for correct, -0.25 penalty for wrong, 0 for omitted
    const rawScore = (correctCount * 1.5) - (wrongCount * 0.25);
    const finalScore = parseFloat(Math.max(0, rawScore).toFixed(2));
    const maxScore = TOTAL_EXAM_QUESTIONS * 1.5; // 30.0 points
    const percentage = Math.round((Math.max(0, rawScore) / maxScore) * 100);

    return {
      rawScore,
      score: finalScore,
      maxScore,
      percentage,
      correctCount,
      wrongCount,
      omittedCount,
      domainStats,
      timeTakenSeconds: EXAM_DURATION_SECONDS - timeLeftSeconds,
      date: new Date().toISOString()
    };
  };

  const executeSubmission = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const result = calculateExamScore(userAnswersRef.current);
    setExamResult(result);
    setExamStage('submitted');
    setShowSubmitModal(false);

    // Save to LocalStorage exam history
    try {
      const stored = globalThis.localStorage.getItem('progress') || '{"examHistory": []}';
      const progress = JSON.parse(stored);
      progress.examHistory = progress.examHistory || [];
      const examRecord = {
        date: result.date,
        score: result.score,
        maxScore: result.maxScore,
        totalQuestions: TOTAL_EXAM_QUESTIONS,
        correctCount: result.correctCount,
        wrongCount: result.wrongCount,
        omittedCount: result.omittedCount,
        domainStats: result.domainStats
      };
      progress.examHistory.push(examRecord);
      globalThis.localStorage.setItem('progress', JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not save exam progress to LocalStorage:', e);
    }

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch {
      // Confetti non-fatal
    }
  };

  const handleAutoSubmit = () => {
    executeSubmission();
  };

  useEffect(() => {
    handleAutoSubmitRef.current = handleAutoSubmit;
  });

  // Format Time MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ==========================================
  // VIEW 1: Config & Introduction
  // ==========================================
  if (examStage === 'config') {
    return (
      <MouseSpotlight>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="container"
          style={{ maxWidth: '780px', padding: '2rem 1.5rem' }}
        >
          <div className="card-editorial" style={{ padding: '2.8rem 2.4rem' }}>
            <div className="chip chip-ochre" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Landmark size={13} /> {isZh ? '米兰理工建筑考研真题仿真' : 'Politecnico di Milano ARCHED Standard'}
            </div>

            <h1 style={{ fontSize: '2.2rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>
              {isZh ? 'ARCHED 艺术与建筑史全真模拟考场' : 'ARCHED Official Simulated Exam'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {isZh ? (
                <>严格遵循意大利教育部及米兰理工大学建筑系（ARCHED / Test ARCHED）入学考试标准，涵盖5大核心考纲板块，实施官方计分规则与倒计时闭卷压力测试。</>
              ) : (
                <>Conforms strictly to the official Polimi ARCHED exam rules: 20 questions, 30 minutes, negative scoring penalties, and complete syllabus domain balance.</>
              )}
            </p>

            {/* Exam Parameters Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '2.2rem' }}>
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                  {isZh ? '考题规模' : 'Question Count'}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 650, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                  20 {isZh ? '道考题' : 'Questions'}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {isZh ? '五大板块各4题严格均衡' : '4 questions per domain'}
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                  {isZh ? '考试限时' : 'Time Limit'}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 650, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                  30:00
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {isZh ? '平均 90 秒 / 题，支持答题板跳转' : '90s per question average'}
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                  {isZh ? 'Polimi 官方计分制' : 'Official Scoring Model'}
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 650, color: 'var(--accent-terracotta)', fontFamily: 'var(--font-mono)' }}>
                  +1.5 / -0.25 / 0
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {isZh ? '答对+1.5，答错倒扣0.25，不答得0' : 'Correct: +1.5, Wrong: -0.25, Omit: 0'}
                </div>
              </div>
            </div>

            {/* Syllabus Coverage Summary */}
            <div style={{ marginBottom: '2.4rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>
                {isZh ? '五大考纲知识板块分布 (Syllabus Coverage)' : 'Syllabus Domain Distribution'}
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li><strong>Chronology (年代序列):</strong> 欧洲历史建筑与现代艺术运动时间线排列</li>
                <li><strong>Visual ID (图像识别):</strong> 艺术名作与建筑地标视觉分析及作者归属</li>
                <li><strong>Avant-Garde (20世纪先锋):</strong> 未来主义、包豪斯、立体主义与现代建筑宣言</li>
                <li><strong>Movements (流派归属):</strong> 核心大师艺术流派归属与理论主张</li>
                <li><strong>Classical (文艺复兴与古典):</strong> 伯鲁涅列斯基、帕拉弟奥、米开朗基罗与巴洛克巨匠</li>
              </ul>
            </div>

            {/* Action Button */}
            <div style={{ textAlign: 'center' }}>
              <motion.button
                className="btn btn-primary"
                onClick={handleStartExam}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{ borderRadius: 'var(--radius-pill)', padding: '0.85rem 2.8rem', fontSize: '1.05rem', fontWeight: 600 }}
              >
                <Clock size={16} /> {isZh ? '开始 ARCHED 全真模考' : 'Start ARCHED Exam'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </MouseSpotlight>
    );
  }

  // ==========================================
  // VIEW 2: In-Progress Exam Environment
  // ==========================================
  const currentQ = questions[currentIdx];
  const isTimeCritical = timeLeftSeconds < 300; // < 5 minutes
  const answeredCount = Object.keys(userAnswers).length;
  const isCurrentFlagged = currentQ && flaggedQuestions.has(currentQ.id);

  if (examStage === 'in_progress' && currentQ) {
    const promptZh = currentQ.questionZh || currentQ.prompt || '';
    const promptEn = currentQ.questionEn || currentQ.prompt || '';
    const activePrompt = isZh ? promptZh : (promptEn || promptZh);

    const rawOptionsZh = currentQ.optionsZh || currentQ.options || [];
    const rawOptionsEn = currentQ.optionsEn || currentQ.options || [];
    const activeOptions = isZh ? rawOptionsZh : (rawOptionsEn.length ? rawOptionsEn : rawOptionsZh);

    return (
      <div className="container" style={{ maxWidth: '1100px', padding: '1.5rem 1rem' }}>
        {/* Top Control Bar with Countdown Timer */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-sm)',
            padding: '1rem 1.4rem',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 'var(--shadow-card)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="chip chip-terracotta" style={{ fontWeight: 650 }}>
              ARCHED SIMULATOR
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {isZh ? '已完成' : 'Answered'}: <strong>{answeredCount} / {questions.length}</strong>
            </span>
          </div>

          {/* Countdown Timer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '1.25rem',
              fontWeight: 700,
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: isTimeCritical ? 'var(--accent-terracotta-subtle)' : 'var(--bg-subtle)',
              color: isTimeCritical ? 'var(--accent-terracotta)' : 'var(--text-primary)',
              border: isTimeCritical ? '1px solid var(--accent-terracotta-border)' : '1px solid var(--border-hairline)'
            }}
          >
            <Clock size={18} className={isTimeCritical ? 'animate-pulse' : ''} />
            <span>{formatTime(timeLeftSeconds)}</span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowSubmitModal(true)}
              style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 1.3rem', fontSize: '0.88rem' }}
            >
              {isZh ? '交卷 (Submit)' : 'Submit Exam'}
            </button>
          </div>
        </div>

        {/* Main Grid: Question Card (Left) & Question Status Palette (Right) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '1.5rem', alignItems: 'start' }}>
          
          {/* Question Card */}
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.24, ease: EASE }}
            className="card-editorial"
            style={{ padding: '2rem' }}
          >
            {/* Meta Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="chip chip-neutral" style={{ fontFamily: 'var(--font-mono)', fontWeight: 650 }}>
                  Question {currentIdx + 1} / {questions.length}
                </span>
                <span className="chip chip-blue" style={{ fontSize: '0.74rem' }}>
                  {currentQ.domain}
                </span>
              </div>

              {/* Flag / Review Toggle Button */}
              <button
                type="button"
                className={`btn ${isCurrentFlagged ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => handleToggleFlag(currentQ.id)}
                style={{
                  borderRadius: 'var(--radius-pill)',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.78rem',
                  backgroundColor: isCurrentFlagged ? 'var(--accent-ochre)' : undefined,
                  borderColor: isCurrentFlagged ? 'var(--accent-ochre)' : undefined
                }}
              >
                <Flag size={12} /> {isCurrentFlagged ? (isZh ? '已标记存疑' : 'Flagged') : (isZh ? '标记待复查' : 'Mark for Review')}
              </button>
            </div>

            {/* Visual Stimulus Image (if available) */}
            {(currentQ.image || currentQ.fallbackImage) && (
              <div
                style={{
                  height: '240px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-subtle)',
                  marginBottom: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-hairline)',
                  padding: '6px'
                }}
              >
                <img
                  src={currentQ.image || currentQ.fallbackImage}
                  alt={currentQ.questionEn || 'Visual question'}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    if (currentQ.fallbackImage && e.target.src !== currentQ.fallbackImage) {
                      e.target.src = currentQ.fallbackImage;
                    }
                  }}
                />
              </div>
            )}

            {/* Question Text */}
            <h2 style={{ fontSize: '1.2rem', lineHeight: '1.6', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              {activePrompt}
            </h2>

            {/* Options Matrix */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {activeOptions.map((opt, idx) => {
                const isSelected = userAnswers[currentQ.id] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    className="btn"
                    onClick={() => handleSelectOption(currentQ.id, idx)}
                    style={{
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      padding: '0.95rem 1.25rem',
                      fontSize: '0.92rem',
                      borderRadius: 'var(--radius-sm)',
                      border: isSelected ? '2px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                      backgroundColor: isSelected ? 'var(--accent-blue-subtle)' : 'var(--bg-surface)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    <strong style={{ marginRight: '10px', color: isSelected ? 'var(--accent-blue)' : 'var(--text-secondary)' }}>
                      {String.fromCharCode(65 + idx)}.
                    </strong>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Next / Prev Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                disabled={currentIdx === 0}
                style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 1.1rem' }}
              >
                <ArrowLeft size={14} /> {isZh ? '上一题' : 'Prev'}
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  if (currentIdx + 1 < questions.length) {
                    setCurrentIdx(prev => prev + 1);
                  } else {
                    setShowSubmitModal(true);
                  }
                }}
                style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 1.3rem' }}
              >
                <span>{currentIdx + 1 === questions.length ? (isZh ? '完成作答并交卷' : 'Submit Exam') : (isZh ? '下一题' : 'Next')}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Question Status Palette Matrix (答题卡矩阵) */}
          <div
            className="card"
            style={{
              padding: '1.25rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-sm)',
              position: 'sticky',
              top: '80px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 650, marginBottom: '0.85rem' }}>
              <ListOrdered size={15} />
              <span>{isZh ? '答题状态矩阵 (Palette)' : 'Question Palette'}</span>
            </div>

            {/* Palette Grid (Numbers 1..20) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginBottom: '1.2rem' }}>
              {questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = flaggedQuestions.has(q.id);
                const isCurrent = currentIdx === idx;

                let btnBg = 'var(--bg-subtle)';
                let btnBorder = 'var(--border-hairline)';
                let btnColor = 'var(--text-secondary)';

                if (isAnswered) {
                  btnBg = 'var(--accent-sage-subtle)';
                  btnBorder = 'var(--accent-sage-border)';
                  btnColor = 'var(--accent-sage)';
                }

                if (isFlagged) {
                  btnBg = 'var(--accent-ochre-subtle)';
                  btnBorder = 'var(--accent-ochre-border)';
                  btnColor = 'var(--accent-ochre)';
                }

                if (isCurrent) {
                  btnBorder = '2px solid var(--accent-blue)';
                  btnColor = 'var(--text-primary)';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    style={{
                      height: '38px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--radius-xs)',
                      border: btnBorder,
                      backgroundColor: btnBg,
                      color: btnColor,
                      fontSize: '0.82rem',
                      fontWeight: 650,
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-ochre)',
                          position: 'absolute',
                          top: '3px',
                          right: '3px'
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Status Legend */}
            <div style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)', display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid var(--border-hairline)', paddingTop: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', backgroundColor: 'var(--accent-sage-subtle)', border: '1px solid var(--accent-sage-border)', borderRadius: '2px' }} />
                <span>{isZh ? '已作答' : 'Answered'} ({answeredCount})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-hairline)', borderRadius: '2px' }} />
                <span>{isZh ? '未作答' : 'Unanswered'} ({questions.length - answeredCount})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', backgroundColor: 'var(--accent-ochre-subtle)', border: '1px solid var(--accent-ochre-border)', borderRadius: '2px' }} />
                <span>{isZh ? '已标记存疑' : 'Flagged'} ({flaggedQuestions.size})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '1rem'
            }}
          >
            <div
              className="card"
              style={{
                maxWidth: '460px',
                width: '100%',
                padding: '2rem',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-modal)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem' }}>
                {isZh ? '确认提交 ARCHED 试卷？' : 'Confirm Exam Submission'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.4rem' }}>
                {isZh ? (
                  <>您已作答 <strong>{answeredCount} / {questions.length}</strong> 道题，尚有 <strong>{questions.length - answeredCount}</strong> 道题未作答。提交后将立即按照米理官方规则计算成绩与各板块诊断报告。</>
                ) : (
                  <>You have answered {answeredCount} out of {questions.length} questions. Omitted questions will receive 0 points.</>
                )}
              </p>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setShowSubmitModal(false)}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 1.1rem' }}
                >
                  {isZh ? '继续作答' : 'Continue Exam'}
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={executeSubmission}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 1.3rem' }}
                >
                  {isZh ? '确认交卷' : 'Submit Now'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // VIEW 3: Post-Exam Diagnostic Results
  // ==========================================
  if (examStage === 'submitted' && examResult) {
    const { score, maxScore, percentage, correctCount, wrongCount, omittedCount, domainStats } = examResult;

    // Filter review questions
    const filteredQuestions = questions.filter(q => {
      const userAns = userAnswers[q.id];
      if (reviewFilter === 'incorrect') {
        return userAns !== undefined && userAns !== q.correctAnswer;
      }
      if (reviewFilter === 'omitted') {
        return userAns === undefined;
      }
      if (reviewFilter === 'flagged') {
        return flaggedQuestions.has(q.id);
      }
      return true;
    });

    return (
      <MouseSpotlight>
        <div className="container" style={{ maxWidth: '920px', padding: '2rem 1.2rem' }}>
          {/* Results Summary Card */}
          <div className="card-editorial" style={{ padding: '2.5rem 2rem', textAlign: 'center', marginBottom: '2rem' }}>
            <Award size={48} style={{ color: 'var(--accent-ochre)', marginBottom: '0.85rem' }} />
            <h1 style={{ fontSize: '2.1rem', marginBottom: '0.35rem', fontFamily: 'var(--font-serif)' }}>
              {isZh ? 'ARCHED 模拟考试评估报告' : 'ARCHED Performance Diagnostic'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '1.8rem' }}>
              {isZh ? '依据 Polimi ARCHED 官方加减分公式与考纲五大知识板块全面评估' : 'Evaluated under Polimi official scoring model: +1.5 / -0.25 / 0'}
            </p>

            {/* Score Big Badge */}
            <div style={{ backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.8rem', maxWidth: '480px', margin: '0 auto 1.8rem auto', border: '1px solid var(--border-hairline)' }}>
              <div style={{ fontSize: '3.4rem', fontWeight: 650, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                {score} <span style={{ fontSize: '1.3rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', fontWeight: 400 }}>/ {maxScore.toFixed(1)} pts</span>
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 550, color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                {isZh ? '得分率' : 'Score Percentage'}: <strong style={{ color: 'var(--text-primary)' }}>{percentage}%</strong>
              </div>
            </div>

            {/* Stats Breakdown Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '580px', margin: '0 auto 2rem auto' }}>
              <div style={{ padding: '0.85rem', backgroundColor: 'var(--accent-sage-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-sage-border)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-sage)' }}>{correctCount}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{isZh ? '正确 (+1.5分/题)' : 'Correct (+1.5)'}</div>
              </div>
              <div style={{ padding: '0.85rem', backgroundColor: 'var(--accent-terracotta-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-terracotta-border)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-terracotta)' }}>{wrongCount}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{isZh ? '错误 (-0.25分/题)' : 'Wrong (-0.25)'}</div>
              </div>
              <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>{omittedCount}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{isZh ? '未答 (0分)' : 'Omitted (0)'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleStartExam}
                style={{ borderRadius: 'var(--radius-pill)', padding: '0.6rem 1.8rem' }}
              >
                <RotateCcw size={14} /> {isZh ? '再测一次 (新考题卷)' : 'Retake New Exam'}
              </button>
              <Link
                to="/dashboard"
                className="btn btn-outline"
                style={{ borderRadius: 'var(--radius-pill)', padding: '0.6rem 1.6rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <BarChart3 size={14} /> {isZh ? '查看学习进度看板' : 'View Dashboard'}
              </Link>
            </div>
          </div>

          {/* Domain Breakdown Section */}
          <div className="card-editorial" style={{ padding: '1.8rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChart3 size={16} /> {isZh ? '各考纲板块得分与表现分析' : 'Domain Performance Analysis'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {Object.entries(domainStats).map(([dom, stats]) => {
                const domCorrect = stats.correct;
                const domTotal = stats.total;
                const domPct = domTotal > 0 ? Math.round((domCorrect / domTotal) * 100) : 0;
                return (
                  <div key={dom} style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{dom}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {isZh ? '正确' : 'Correct'}: {stats.correct} / {stats.total} · {isZh ? '错' : 'Wrong'}: {stats.wrong} · {isZh ? '弃' : 'Omit'}: {stats.omitted}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: '7px', backgroundColor: 'var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${domPct}%`, height: '100%', backgroundColor: domPct >= 75 ? 'var(--accent-sage)' : domPct >= 50 ? 'var(--accent-ochre)' : 'var(--accent-terracotta)', borderRadius: '4px' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question-by-Question Detailed Review */}
          <div className="card-editorial" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.8rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
                {isZh ? '全卷考题详尽学术解析 (Question Review)' : 'Question Academic Review'}
              </h3>

              {/* Review Filter Tabs */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  className={`btn ${reviewFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setReviewFilter('all')}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.35rem 0.85rem', fontSize: '0.78rem' }}
                >
                  {isZh ? '全部' : 'All'} ({questions.length})
                </button>
                <button
                  type="button"
                  className={`btn ${reviewFilter === 'incorrect' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setReviewFilter('incorrect')}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.35rem 0.85rem', fontSize: '0.78rem' }}
                >
                  {isZh ? '错题' : 'Incorrect'} ({wrongCount})
                </button>
                <button
                  type="button"
                  className={`btn ${reviewFilter === 'flagged' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setReviewFilter('flagged')}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.35rem 0.85rem', fontSize: '0.78rem' }}
                >
                  {isZh ? '标记' : 'Flagged'} ({flaggedQuestions.size})
                </button>
              </div>
            </div>

            {/* List of reviewed questions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {filteredQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                const isOmitted = userAns === undefined;

                return (
                  <div
                    key={q.id}
                    style={{
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1.25rem',
                      backgroundColor: 'var(--bg-surface)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="chip chip-neutral" style={{ fontWeight: 650 }}>
                          #{idx + 1}
                        </span>
                        <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
                          {q.domain}
                        </span>
                        {flaggedQuestions.has(q.id) && (
                          <span className="chip chip-ochre" style={{ fontSize: '0.72rem' }}>
                            <Flag size={10} /> {isZh ? '标记' : 'Flagged'}
                          </span>
                        )}
                      </div>

                      {/* Result Pill */}
                      {isCorrect ? (
                        <span className="chip chip-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={13} /> {isZh ? '正确 (+1.5)' : 'Correct (+1.5)'}
                        </span>
                      ) : isOmitted ? (
                        <span className="chip chip-neutral">
                          {isZh ? '未答 (0.0)' : 'Omitted (0.0)'}
                        </span>
                      ) : (
                        <span className="chip chip-terracotta" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <XCircle size={13} /> {isZh ? '错误 (-0.25)' : 'Wrong (-0.25)'}
                        </span>
                      )}
                    </div>

                    <h4 style={{ fontSize: '1.02rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: '1.55', marginBottom: '0.85rem' }}>
                      {isZh ? (q.questionZh || q.prompt) : (q.questionEn || q.prompt)}
                    </h4>

                    {/* Options status */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '0.9rem' }}>
                      {(isZh ? q.optionsZh : q.optionsEn || q.optionsZh).map((opt, optIdx) => {
                        const isThisCorrect = optIdx === q.correctAnswer;
                        const isThisUserAns = userAns === optIdx;

                        let rowBg = 'transparent';
                        let rowColor = 'var(--text-secondary)';
                        if (isThisCorrect) {
                          rowBg = 'var(--accent-sage-subtle)';
                          rowColor = 'var(--accent-sage)';
                        } else if (isThisUserAns && !isThisCorrect) {
                          rowBg = 'var(--accent-terracotta-subtle)';
                          rowColor = 'var(--accent-terracotta)';
                        }

                        return (
                          <div
                            key={optIdx}
                            style={{
                              padding: '6px 10px',
                              borderRadius: 'var(--radius-xs)',
                              backgroundColor: rowBg,
                              color: rowColor,
                              fontSize: '0.86rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <span>
                              <strong>{String.fromCharCode(65 + optIdx)}.</strong> {opt}
                            </span>
                            {isThisCorrect && <span style={{ fontWeight: 650, fontSize: '0.78rem' }}>✓ 正确选项</span>}
                            {isThisUserAns && !isThisCorrect && <span style={{ fontWeight: 650, fontSize: '0.78rem' }}>✗ 您的选择</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-xs)', fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: '1.6', borderLeft: '3px solid var(--accent-blue)' }}>
                      <strong>{isZh ? '考点解析：' : 'Explanation: '}</strong>
                      {isZh ? q.explanationZh : q.explanationEn}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MouseSpotlight>
    );
  }

  return null;
}
