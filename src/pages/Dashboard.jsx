import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import { generateStudyReport } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { Trophy, BookOpen, Heart, Sparkles, Bot, Loader2, RotateCcw, AlertCircle, ChevronRight, CheckCircle2, Award } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function Dashboard() {
  const { progress, resetProgress, apiKey, t } = useContext(AppContext);
  const [report, setReport] = useState('');
  const [loadingReport, setLoadingReport] = useState(false);
  const [errorReport, setErrorReport] = useState('');

  const allArtworks = artData.flatMap(m =>
    m.artists.flatMap(a =>
      a.artworks.map(w => ({
        ...w,
        artistName: a.name,
        artistId: a.id,
        movementName: m.name,
        movementId: m.id
      }))
    )
  );

  const totalArtworks = allArtworks.length;
  const viewedCount = (progress.viewedArtworks || []).length;
  const viewPercentage = Math.round((viewedCount / totalArtworks) * 100) || 0;
  const masteryPercentage = Math.round(progress.masteryLevel || 0);
  const favoritedArtworks = allArtworks.filter(w => (progress.favorites || []).includes(w.id));

  const handleGenerateReport = async () => {
    setLoadingReport(true);
    setErrorReport('');
    try {
      const res = await generateStudyReport(progress);
      setReport(res);
    } catch (err) {
      setErrorReport(err.message || (t ? t('dashboard.emptyFavorites', 'Report generation failed. Please check API settings.') : 'Report generation failed. Please check API settings.'));
    } finally {
      setLoadingReport(false);
    }
  };

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="container"
        style={{ maxWidth: '940px' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="chip chip-blue" style={{ marginBottom: '0.85rem' }}>
            <Award size={12} /> {t ? t('nav.dashboard', 'Dashboard') : 'Study Dashboard'}
          </div>
          <h1 style={{ marginBottom: '0.4rem' }}>{t ? t('dashboard.title', 'Study & Research Progress') : 'Study & Research Progress'}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', maxWidth: '580px', margin: '0 auto' }}>
            {t ? t('dashboard.subtitle', 'Track your study coverage across 16 movements, 55 masters, and 135 architectural landmarks & art masterworks.') : 'Track your study coverage across movements, masters, and landmarks.'}
          </p>
        </div>

        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.4rem', marginBottom: '2.5rem' }}>
          {/* Coverage */}
          <motion.div
            className="card card-highlight-blue"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06, ease: EASE }}
            whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span className="chip chip-blue"><BookOpen size={11} /> {t ? t('dashboard.viewedCount', 'Catalog Coverage') : 'Catalog Coverage'}</span>
              <span style={{ fontSize: '0.86rem', color: 'var(--accent-blue)', fontWeight: 650 }}>{viewPercentage}%</span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 600, fontFamily: 'var(--font-serif)', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
              {viewedCount} <span style={{ fontSize: '1.1rem', color: 'var(--text-tertiary)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>/ {totalArtworks}</span>
            </div>
            <div style={{ marginTop: '1.1rem' }}>
              <div style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', height: '5px', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${viewPercentage}%` }}
                  transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                  style={{ backgroundColor: 'var(--accent-blue)', height: '100%', borderRadius: 'var(--radius-pill)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Mastery */}
          <motion.div
            className="card card-highlight-sage"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: EASE }}
            whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span className="chip chip-green"><Trophy size={11} /> {t ? t('dashboard.masteryRate', 'Exam Mastery') : 'Exam Mastery'}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{(progress.quizScores || []).length} {t ? t('dashboard.quizCount', 'quizzes') : 'quizzes'}</span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 600, fontFamily: 'var(--font-serif)', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
              {masteryPercentage}%
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '1.1rem', lineHeight: '1.5' }}>
              {t ? t('dashboard.masteryDesc', 'Calculated from quiz scores and study exploration coverage.') : 'Calculated from quiz scores and study exploration coverage.'}
            </p>
          </motion.div>
        </div>

        {/* Favorites */}
        <div style={{ marginBottom: '2.8rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.2rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-hairline)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 500 }}>
              {t ? t('dashboard.favoritesTitle', 'Saved Collection') : 'Saved Collection'} <span style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)' }}>({favoritedArtworks.length})</span>
            </h2>
          </div>
          {favoritedArtworks.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.1rem' }}>
              {favoritedArtworks.map((w, idx) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(0.1 + idx * 0.03, 0.3), ease: EASE }}
                  whileHover={{ y: -4, scale: 1.015, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
                >
                  <Link to={`/artwork/${w.movementId}/${w.artistId}/${w.id}`}>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', padding: '0.9rem' }}>
                      <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--bg-subtle)', flexShrink: 0 }}>
                        <ArtworkImage artworkId={w.id} alt={w.title} className="w-full h-full object-cover" />
                      </div>
                      <div style={{ overflow: 'hidden' }}>
                        <h4 style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                          {w.title}
                        </h4>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)' }}>{w.artistName} · {w.movementName}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {t ? t('dashboard.emptyFavorites', 'No saved works yet. Click "Save" on any artwork page to curate your collection!') : 'No saved works yet. Click "Save" on any artwork page to curate your collection!'}
            </div>
          )}
        </div>

        {/* AI Report */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2.8rem' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16, ease: EASE }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: 'var(--accent-blue-subtle)',
                border: '1px solid var(--accent-blue-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-blue)'
              }}>
                <Bot size={18} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', margin: 0 }}>AI Personalized Study Diagnosis</h2>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>Weak-point analysis, memory reinforcement, & exam readiness</div>
              </div>
            </div>

            <motion.button
              className="btn btn-primary"
              onClick={handleGenerateReport}
              disabled={loadingReport}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.975 }}
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              {loadingReport ? (
                <><Loader2 size={13} className="animate-spin" /> <span>Generating Report...</span></>
              ) : (
                <><Sparkles size={13} /> <span>Generate AI Report</span></>
              )}
            </motion.button>
          </div>

          {errorReport && (
            <div style={{ color: 'var(--accent-terracotta)', fontSize: '0.84rem', margin: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <AlertCircle size={14} /> {errorReport}
            </div>
          )}

          {report ? (
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.35rem', borderRadius: 'var(--radius-sm)', marginTop: '0.8rem', whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: '0.92rem', border: '1px solid var(--border-hairline)' }}>
              {report}
            </div>
          ) : (
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.35rem', borderRadius: 'var(--radius-sm)', marginTop: '0.5rem', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.84rem', border: '1px solid var(--border-hairline)' }}>
              Click "Generate AI Report" for a personalized learning diagnostic based on your viewed modules and quiz records.
            </div>
          )}
        </motion.div>

        {/* Reset */}
        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.5rem' }}>
          <motion.button
            className="btn btn-outline"
            onClick={() => { if (window.confirm(t ? t('dashboard.clearConfirm', 'Reset all progress?') : 'Reset all progress?')) resetProgress(); }}
            style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', borderRadius: 'var(--radius-pill)' }}
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.975 }}
          >
            <RotateCcw size={13} /> {t ? t('dashboard.clearProgress', 'Reset All Study Records') : 'Reset All Study Records'}
          </motion.button>
        </div>
      </motion.div>
    </MouseSpotlight>
  );
}
