import React, { useState, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { getAssetUrl } from '../utils/assetUrl';
import {
  History,
  Calendar,
  Layers,
  Landmark,
  Palette,
  ArrowRight,
  ArrowUpDown,
  Clock,
  Sparkles,
  ChevronRight,
  User,
  Compass
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function Timeline() {
  const { t, l, lArray, resolveArtistAvatar } = useContext(AppContext);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' = 900 -> 2025, 'desc' = 2025 -> 900

  const FILTER_OPTIONS = [
    { key: 'all', label: t ? t('timeline.all', 'All Overview') : 'All Overview', icon: Layers },
    { key: 'art', label: t ? t('timeline.art', 'Art Movements') : 'Art Movements', icon: Palette },
    { key: 'architecture', label: t ? t('timeline.architecture', 'Architecture') : 'Architecture', icon: Landmark },
  ];

  const sortedMovements = useMemo(() => {
    const list = [...artData].sort((a, b) => {
      const orderA = a.chronologicalOrder || a.startYear || 9999;
      const orderB = b.chronologicalOrder || b.startYear || 9999;
      return sortOrder === 'asc' ? orderA - orderB : orderB - orderA;
    });
    return list;
  }, [sortOrder]);

  const filteredMovements = useMemo(() => {
    if (selectedFilter === 'all') return sortedMovements;
    return sortedMovements.filter(m => m.category === selectedFilter);
  }, [sortedMovements, selectedFilter]);

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="container"
        style={{ maxWidth: '980px', paddingBottom: '5rem' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="chip chip-ochre" style={{ marginBottom: '0.85rem' }}>
            <History size={12} /> {t ? t('nav.timeline', 'Timeline') : 'Chronological Timeline'}
          </div>
          <h1 style={{ marginBottom: '0.5rem' }}>
            {t ? t('timeline.title', 'Chronological Evolution') : 'Chronological Evolution'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', maxWidth: '640px', margin: '0 auto 1.8rem auto', lineHeight: '1.65' }}>
            {t ? t('timeline.subtitle', '从罗马式、哥特式、文艺复兴到现代主义与当代建筑，全景串联欧洲艺术与建筑发展史。') : 'Explore historical evolution spanning Romanesque, Gothic, Renaissance, Rationalism, High-Tech, and Contemporary Architecture.'}
          </p>

          {/* Filter Tab Bar & Sort Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="tab-bar" style={{ display: 'inline-flex', borderRadius: 'var(--radius-pill)', padding: '4px' }}>
              {FILTER_OPTIONS.map((tab) => {
                const Icon = tab.icon;
                const isActive = selectedFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    className={`tab-item ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(tab.key)}
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px', borderRadius: 'var(--radius-pill)', padding: '6px 16px' }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="timeline-filter-indicator"
                        className="tab-indicator"
                        style={{ borderRadius: 'var(--radius-pill)' }}
                        transition={{ type: 'spring', bounce: 0.16, duration: 0.42 }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Icon size={13} style={{ color: isActive ? (tab.key === 'architecture' ? 'var(--accent-sage)' : 'var(--accent-blue)') : 'inherit' }} />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sort Order Toggle */}
            <motion.button
              type="button"
              className="btn btn-outline"
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              style={{
                borderRadius: 'var(--radius-pill)',
                padding: '6px 14px',
                fontSize: '0.82rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'var(--bg-surface)'
              }}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
            >
              <ArrowUpDown size={13} style={{ color: 'var(--accent-ochre)' }} />
              <span>{sortOrder === 'asc' ? '年代正序 (900 → 2025)' : '年代倒序 (2025 → 900)'}</span>
            </motion.button>
          </div>
        </div>

        {/* Timeline Rail & Nodes */}
        <div style={{ position: 'relative', marginTop: '2.5rem' }}>
          {/* Vertical Center Track Line */}
          <div
            style={{
              position: 'absolute',
              left: '27px',
              top: '15px',
              bottom: '20px',
              width: '2px',
              backgroundColor: 'var(--border-subtle)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
            <AnimatePresence mode="popLayout">
              {filteredMovements.map((movement, index) => {
                const isArch = movement.category === 'architecture';
                const artistsList = movement.artists || [];
                const allWorks = artistsList.flatMap(a => (a.artworks || []).map(w => ({ ...w, artistId: a.id, artistName: a.name })));
                const previewWorks = allWorks.slice(0, 3);
                const startYearDisplay = movement.startYear || (movement.years?.match(/\d{3,4}/)?.[0] || '—');

                return (
                  <motion.div
                    key={movement.id}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.25), ease: EASE }}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.4rem',
                      zIndex: 1
                    }}
                  >
                    {/* Milestone Bead Indicator */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-surface)',
                        border: `2px solid ${isArch ? 'var(--accent-sage-border)' : 'var(--accent-blue-border)'}`,
                        boxShadow: 'var(--shadow-card)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        zIndex: 2
                      }}
                    >
                      {isArch ? (
                        <Landmark size={16} style={{ color: 'var(--accent-sage)' }} />
                      ) : (
                        <Palette size={16} style={{ color: 'var(--accent-blue)' }} />
                      )}
                      <span style={{ fontSize: '0.62rem', fontWeight: 650, color: 'var(--text-secondary)', marginTop: '2px' }}>
                        {startYearDisplay}
                      </span>
                    </div>

                    {/* Timeline Event Card */}
                    <motion.div
                      className={`card-editorial ${isArch ? 'card-highlight-sage' : 'card-highlight-blue'}`}
                      whileHover={{ y: -4, scale: 1.008, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                      style={{
                        flex: 1,
                        padding: '1.4rem 1.5rem',
                      }}
                    >
                      {/* Top Header Row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                            <span className={isArch ? 'chip chip-green' : 'chip chip-blue'} style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                              {isArch ? (t ? t('movement.archMovement', 'Architecture') : 'Architecture') : (t ? t('movement.artMovement', 'Art Movement') : 'Art Movement')}
                            </span>
                            <span className="chip chip-ochre" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                              <Calendar size={11} /> {movement.years}
                            </span>
                            {movement.era && (
                              <span className="chip chip-purple" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                                <Compass size={10} /> {movement.era}
                              </span>
                            )}
                          </div>

                          <h2 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                            {movement.englishName} <span style={{ fontSize: '0.96rem', fontWeight: 400, color: 'var(--text-secondary)' }}>({movement.name})</span>
                          </h2>
                        </div>

                        <Link
                          to={`/movement/${movement.id}`}
                          className="btn btn-outline"
                          style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-pill)' }}
                        >
                          <span>{t ? t('timeline.exploreMovement', 'Explore') : 'Explore'}</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: '0.88rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                        {l ? l(movement, 'description', 'movements') : movement.description}
                      </p>

                      {/* Key Features Chips */}
                      {movement.keyFeatures && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                          {(lArray ? lArray(movement, 'keyFeatures', 'movements') : movement.keyFeatures).slice(0, 4).map((feat, fidx) => (
                            <span
                              key={fidx}
                              style={{
                                fontSize: '0.74rem',
                                padding: '3px 9px',
                                borderRadius: 'var(--radius-xs)',
                                backgroundColor: 'var(--bg-subtle)',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border-hairline)'
                              }}
                            >
                              • {feat}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Masters & Representative Works Section */}
                      <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {/* Representative Figures */}
                        <div>
                          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-tertiary)', fontWeight: 650, marginBottom: '0.6rem' }}>
                            {t ? t('timeline.keyMasters', 'Representative Figures') : 'Representative Figures'} ({artistsList.length})
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {artistsList.map(artist => {
                              const resolvedAvatar = resolveArtistAvatar(artist.id, getAssetUrl(artist.avatar));
                              return (
                                <motion.div
                                  key={artist.id}
                                  whileHover={{ y: -2, scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Link
                                    to={`/artist/${movement.id}/${artist.id}`}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      padding: '3px 9px',
                                      borderRadius: 'var(--radius-pill)',
                                      backgroundColor: 'var(--bg-subtle)',
                                      border: '1px solid var(--border-hairline)',
                                      textDecoration: 'none',
                                      color: 'var(--text-primary)',
                                      fontSize: '0.76rem',
                                      transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease'
                                    }}
                                  >
                                    <img
                                      src={resolvedAvatar}
                                      alt={artist.name}
                                      style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }}
                                      loading="lazy"
                                      decoding="async"
                                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                    <span style={{ fontWeight: 500 }}>{artist.englishName || artist.name}</span>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Representative Works Thumbnails */}
                        {previewWorks.length > 0 && (
                          <div>
                            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-tertiary)', fontWeight: 650, marginBottom: '0.6rem' }}>
                              {t ? t('timeline.representativeWorks', 'Key Artworks & Landmarks') : 'Key Artworks & Landmarks'}
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              {previewWorks.map((work) => (
                                <motion.div
                                  key={work.id}
                                  whileHover={{ y: -3, scale: 1.04 }}
                                  whileTap={{ scale: 0.97 }}
                                >
                                  <Link
                                    to={`/artwork/${movement.id}/${work.artistId}/${work.id}`}
                                    style={{
                                      width: '68px',
                                      height: '68px',
                                      borderRadius: 'var(--radius-sm)',
                                      overflow: 'hidden',
                                      backgroundColor: 'var(--bg-subtle)',
                                      border: '1px solid var(--border-hairline)',
                                      position: 'relative',
                                      display: 'block'
                                    }}
                                    title={`${work.titleEn || work.title} (${work.artistName})`}
                                  >
                                    <ArtworkImage artworkId={work.id} alt={work.title} fit="cover" />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </MouseSpotlight>
  );
}
