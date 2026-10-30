import React, { useState, useEffect, useContext, useCallback } from 'react';
import { motion } from 'framer-motion';
import { artData } from '../data/artData';
import { questionBankService } from '../services/questionBankService';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import {
  RotateCw,
  ArrowLeft,
  ArrowRight,
  Shuffle,
  Layers,
  Palette,
  Landmark,
  Sparkles,
  Check,
  BookmarkCheck,
  BookmarkPlus
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function Flashcards() {
  const { language } = useContext(AppContext);
  const isZh = !language || language.startsWith('zh');

  const [activeDeckType, setActiveDeckType] = useState('arched'); // 'arched' | 'artworks'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState(() => new Set());
  const [reviewCards, setReviewCards] = useState(() => new Set());
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchCurrentX, setTouchCurrentX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchCurrentY, setTouchCurrentY] = useState(null);

  // ARCHED question cards conversion
  const getArchedCards = (category) => {
    let raw = [];
    if (category === 'all') {
      raw = questionBankService.getAllQuestions();
    } else {
      raw = questionBankService.getQuestionsByDomain(category);
    }

    return raw.map(q => ({
      id: q.id,
      cardType: 'arched',
      domain: q.domain,
      subCategory: q.subCategory,
      era: q.era,
      frontZh: q.questionZh,
      frontEn: q.questionEn,
      backZh: `${q.optionsZh[q.correctAnswer]}\n\n${q.explanationZh}`,
      backEn: `${q.optionsEn[q.correctAnswer]}\n\n${q.explanationEn}`,
      correctOptionZh: q.optionsZh[q.correctAnswer],
      correctOptionEn: q.optionsEn[q.correctAnswer],
      explanationZh: q.explanationZh,
      explanationEn: q.explanationEn,
      image: q.image,
      fallbackImage: q.fallbackImage,
      tags: q.tags || [],
      difficulty: q.difficulty || 2
    }));
  };

  // Legacy artwork visual cards
  const getArtworkCards = (category) => {
    let pool = artData;
    if (category !== 'all') pool = artData.filter(m => m.category === category);
    return pool.flatMap(m =>
      m.artists.flatMap(a =>
        a.artworks.map(w => ({
          id: w.id,
          cardType: 'artwork',
          title: w.title,
          artistName: a.name,
          artistEnglish: a.englishName,
          movementName: m.name,
          category: m.category,
          date: w.date,
          location: w.location,
          notes: w.notes,
          knowledgePoints: w.knowledgePoints || [],
          frontZh: `请识别这件${m.category === 'architecture' ? '经典建筑地标' : '艺术名作'}的作者与流派背景`,
          frontEn: `Identify the artist/architect and movement of this ${m.category === 'architecture' ? 'landmark' : 'artwork'}`,
          backZh: `${w.title} (${a.name} / ${a.englishName}, ${w.date})\n流派：${m.name}\n${w.notes || ''}`,
          backEn: `${w.title} (${a.englishName}, ${w.date})\nMovement: ${m.name}\n${w.notes || ''}`,
          artworkId: w.id
        }))
      )
    );
  };

  const [cards, setCards] = useState(() => getArchedCards('all'));

  const CATEGORIES = activeDeckType === 'arched'
    ? [
        { key: 'all', label: isZh ? '全部考点 (210)' : 'All Syllabus' },
        { key: 'chronology', label: isZh ? '年代序列' : 'Chronology' },
        { key: 'visual_id', label: isZh ? '图像识别' : 'Visual ID' },
        { key: 'avant_garde', label: isZh ? '20世纪先锋' : 'Avant-Garde' },
        { key: 'artist_movement', label: isZh ? '流派归属' : 'Movements' },
        { key: 'renaissance_classical', label: isZh ? '文艺复兴与古典' : 'Classical' },
      ]
    : [
        { key: 'all', label: isZh ? '全部作品' : 'All Works' },
        { key: 'art', label: isZh ? '艺术名作' : 'Art Movements', icon: Palette },
        { key: 'architecture', label: isZh ? '经典建筑' : 'Architecture', icon: Landmark },
      ];

  const handleDeckTypeChange = (type) => {
    setActiveDeckType(type);
    setSelectedCategory('all');
    const newCards = type === 'arched' ? getArchedCards('all') : getArtworkCards('all');
    setCards(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const newCards = activeDeckType === 'arched' ? getArchedCards(cat) : getArtworkCards(cat);
    setCards(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = useCallback(() => {
    if (cards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const handlePrev = useCallback(() => {
    if (cards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const handleShuffle = () => {
    if (cards.length === 0) return;
    setIsFlipped(false);
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  // Spaced Repetition Mastery Tracking
  const toggleMastered = (cardId) => {
    setMasteredCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
        // Remove from review if mastered
        setReviewCards(r => {
          const nextR = new Set(r);
          nextR.delete(cardId);
          return nextR;
        });
      }
      return next;
    });
  };

  const toggleReview = (cardId) => {
    setReviewCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
        // Remove from mastered if needs review
        setMasteredCards(m => {
          const nextM = new Set(m);
          nextM.delete(cardId);
          return nextM;
        });
      }
      return next;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(f => !f);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Handlers for Mobile & Tablet Responsiveness
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    setTouchStartX(clientX);
    setTouchCurrentX(clientX);
    setTouchStartY(clientY);
    setTouchCurrentY(clientY);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null || !e.touches || e.touches.length === 0) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    setTouchCurrentX(currentX);
    setTouchCurrentY(currentY);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchCurrentX === null) {
      setTouchStartX(null);
      setTouchCurrentX(null);
      setTouchStartY(null);
      setTouchCurrentY(null);
      return;
    }
    const deltaX = touchCurrentX - touchStartX;
    const deltaY = (touchCurrentY !== null && touchStartY !== null) ? (touchCurrentY - touchStartY) : 0;
    const SWIPE_THRESHOLD = 50;

    // Only trigger horizontal card navigation if horizontal displacement clearly exceeds vertical scrolling
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > SWIPE_THRESHOLD) {
        // Swiped right -> go to previous card
        handlePrev();
      } else if (deltaX < -SWIPE_THRESHOLD) {
        // Swiped left -> go to next card
        handleNext();
      }
    }
    setTouchStartX(null);
    setTouchCurrentX(null);
    setTouchStartY(null);
    setTouchCurrentY(null);
  };

  const currentCard = cards.length > 0 ? cards[currentIndex] : null;
  const isCurrentMastered = currentCard && masteredCards.has(currentCard.id);
  const isCurrentReview = currentCard && reviewCards.has(currentCard.id);

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="container"
        style={{ maxWidth: '840px' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <div className="chip chip-terracotta" style={{ marginBottom: '0.65rem' }}>
            <Layers size={11} /> {isZh ? '3D 记忆抽认卡' : '3D Study Flashcards'}
          </div>
          <h1 style={{ marginBottom: '0.35rem', fontSize: '2rem' }}>
            {isZh ? '沉浸式大纲核心记忆卡' : 'Interactive Knowledge Flashcards'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.2rem' }}>
            {isZh ? (
              <>点击卡片或按 <strong>空格键</strong> 翻转 · 按 <strong>← →</strong> 或<strong>左右滑动</strong>快速切题</>
            ) : (
              <>Tap card or press <strong>Space</strong> to flip · Press <strong>← →</strong> or <strong>swipe</strong> to navigate</>
            )}
          </p>

          {/* Mode Selector (ARCHED Syllabus vs Artwork Gallery) */}
          <div style={{ display: 'inline-flex', padding: '4px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-hairline)', marginBottom: '1.1rem' }}>
            <button
              type="button"
              className={`btn ${activeDeckType === 'arched' ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: 'var(--radius-pill)', padding: '5px 16px', fontSize: '0.82rem', border: 'none' }}
              onClick={() => handleDeckTypeChange('arched')}
            >
              <Sparkles size={13} /> {isZh ? 'ARCHED 考纲考点卡 (210)' : 'ARCHED Syllabus Cards'}
            </button>
            <button
              type="button"
              className={`btn ${activeDeckType === 'artworks' ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: 'var(--radius-pill)', padding: '5px 16px', fontSize: '0.82rem', border: 'none' }}
              onClick={() => handleDeckTypeChange('artworks')}
            >
              <Palette size={13} /> {isZh ? '名作视觉图集卡' : 'Artwork Visual Cards'}
            </button>
          </div>

          {/* Domain / Category Tabs */}
          <div
            className="tab-bar"
            style={{
              borderRadius: 'var(--radius-pill)',
              padding: '4px',
              display: 'flex',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  className={`tab-item ${isActive ? 'active' : ''}`}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '6px 14px', flexShrink: 0 }}
                  onClick={() => handleCategoryChange(cat.key)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="flashcard-tab-indicator"
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
        </div>

        {/* Spaced Repetition Session Progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '640px', margin: '0 auto 1rem auto', padding: '0 0.5rem', fontSize: '0.82rem', color: 'var(--text-tertiary)', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            {isZh ? '进度：' : 'Card: '}
            <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              {cards.length > 0 ? currentIndex + 1 : 0}
            </strong> / {cards.length}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{ color: 'var(--accent-sage)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <BookmarkCheck size={13} /> {isZh ? '已掌握' : 'Mastered'}: <strong>{masteredCards.size}</strong>
            </span>
            <span style={{ color: 'var(--accent-ochre)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <BookmarkPlus size={13} /> {isZh ? '待复习' : 'Review'}: <strong>{reviewCards.size}</strong>
            </span>
          </div>
        </div>

        {cards.length > 0 && currentCard ? (
          <div>
            {/* 3D Flip Card Container with Touch Gestures */}
            <div
              style={{
                perspective: '1200px',
                margin: '0 auto',
                maxWidth: '640px',
                height: '460px',
                cursor: 'pointer',
                touchAction: 'pan-y'
              }}
              onClick={() => setIsFlipped(!isFlipped)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Front Face */}
                <div
                  className="card"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-card-hover)',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span className="chip chip-blue">
                        {currentCard.domain || currentCard.category || 'Core Question'}
                      </span>
                      {currentCard.subCategory && (
                        <span className="chip chip-neutral" style={{ fontSize: '0.72rem' }}>
                          {currentCard.subCategory}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      #{currentIndex + 1}
                    </span>
                  </div>

                  {/* Image Stimulus on Front (if available) */}
                  {(currentCard.image || currentCard.artworkId) ? (
                    <div
                      style={{
                        height: '210px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        backgroundColor: 'var(--bg-subtle)',
                        margin: '0.65rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        border: '1px solid var(--border-hairline)'
                      }}
                    >
                      {currentCard.artworkId ? (
                        <ArtworkImage
                          artworkId={currentCard.artworkId}
                          alt="Identify this work"
                          fit="contain"
                          className="w-full h-full"
                        />
                      ) : (
                        <img
                          src={currentCard.image || currentCard.fallbackImage}
                          alt="Visual question card"
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            if (currentCard.fallbackImage && e.target.src !== currentCard.fallbackImage) {
                              e.target.src = currentCard.fallbackImage;
                            }
                          }}
                        />
                      )}
                    </div>
                  ) : null}

                  {/* Front Prompt Text */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0.5rem 0' }}>
                    <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
                      {isZh ? currentCard.frontZh : (currentCard.frontEn || currentCard.frontZh)}
                    </h2>
                    {(currentCard.frontEn && isZh) && (
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-tertiary)', marginTop: '0.45rem', fontStyle: 'italic', margin: '0.4rem 0 0 0' }}>
                        {currentCard.frontEn}
                      </p>
                    )}
                  </div>

                  <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <RotateCw size={13} style={{ color: 'var(--accent-blue)' }} />
                    {isZh ? '轻触卡片或按空格键揭晓答案与深度考点' : 'Tap card or press Space to reveal answer'}
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="card"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-card-hover)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    overflowY: 'auto'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <span className="chip chip-green">
                        <Check size={11} /> {isZh ? '正确答案 / Answer' : 'Correct Answer'}
                      </span>
                      {currentCard.era && (
                        <span className="chip chip-ochre">{currentCard.era}</span>
                      )}
                    </div>

                    {/* Answer Highlight */}
                    <div style={{ backgroundColor: 'var(--accent-sage-subtle)', border: '1px solid var(--accent-sage-border)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.1rem' }}>
                      <div style={{ fontSize: '1.18rem', fontWeight: 650, color: 'var(--accent-sage)', lineHeight: '1.45' }}>
                        {isZh
                          ? (currentCard.correctOptionZh || currentCard.title || currentCard.backZh)
                          : (currentCard.correctOptionEn || currentCard.title || currentCard.backEn)}
                      </div>
                      {(currentCard.correctOptionEn && isZh) && (
                        <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                          {currentCard.correctOptionEn}
                        </div>
                      )}
                    </div>

                    {/* Academic Explanation */}
                    <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                      <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-blue)', fontWeight: 650, marginBottom: '0.35rem' }}>
                        {isZh ? '深度考点与学术解析：' : 'Syllabus Explanation & Context:'}
                      </div>
                      <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: '1.65', color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
                        {isZh
                          ? (currentCard.explanationZh || currentCard.notes || currentCard.backZh)
                          : (currentCard.explanationEn || currentCard.notes || currentCard.backEn)}
                      </p>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '0.8rem' }}>
                    <RotateCw size={13} style={{ color: 'var(--accent-sage)' }} />
                    {isZh ? '轻触卡片翻回正面' : 'Tap card to flip back'}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation & Spaced Repetition Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '640px', margin: '1.8rem auto 0 auto', flexWrap: 'wrap', gap: '0.75rem' }}>
              {/* Mastery Action Buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  className={`btn ${isCurrentReview ? 'btn-primary' : 'btn-outline'}`}
                  onClick={(e) => { e.stopPropagation(); toggleReview(currentCard.id); }}
                  style={{
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.45rem 1rem',
                    fontSize: '0.82rem',
                    backgroundColor: isCurrentReview ? 'var(--accent-ochre)' : undefined,
                    borderColor: 'var(--accent-ochre)'
                  }}
                >
                  <BookmarkPlus size={13} /> {isCurrentReview ? (isZh ? '已加入复习' : 'In Review') : (isZh ? '需复习' : 'Need Review')}
                </button>
                <button
                  type="button"
                  className={`btn ${isCurrentMastered ? 'btn-primary' : 'btn-outline'}`}
                  onClick={(e) => { e.stopPropagation(); toggleMastered(currentCard.id); }}
                  style={{
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.45rem 1rem',
                    fontSize: '0.82rem',
                    backgroundColor: isCurrentMastered ? 'var(--accent-sage)' : undefined,
                    borderColor: 'var(--accent-sage)'
                  }}
                >
                  <BookmarkCheck size={13} /> {isCurrentMastered ? (isZh ? '已完全掌握' : 'Mastered!') : (isZh ? '标为掌握' : 'Mark Mastered')}
                </button>
              </div>

              {/* Deck Navigation Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <motion.button
                  className="btn btn-outline"
                  onClick={handlePrev}
                  whileHover={{ scale: 1.025, y: -1 }}
                  whileTap={{ scale: 0.975 }}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 0.9rem' }}
                >
                  <ArrowLeft size={14} /> {isZh ? '上一张' : 'Prev'}
                </motion.button>
                <motion.button
                  className="btn btn-outline"
                  onClick={handleShuffle}
                  whileHover={{ scale: 1.025, y: -1 }}
                  whileTap={{ scale: 0.975 }}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 0.9rem' }}
                  title="Shuffle deck"
                >
                  <Shuffle size={14} />
                </motion.button>
                <motion.button
                  className="btn btn-primary"
                  onClick={handleNext}
                  whileHover={{ scale: 1.025, y: -1 }}
                  whileTap={{ scale: 0.975 }}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '0.45rem 1rem' }}
                >
                  <span>{isZh ? '下一张' : 'Next'}</span>
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-tertiary)' }}>
            {isZh ? '未检索到符合条件的卡片' : 'No flashcards found for selected criteria'}
          </div>
        )}
      </motion.div>
    </MouseSpotlight>
  );
}
