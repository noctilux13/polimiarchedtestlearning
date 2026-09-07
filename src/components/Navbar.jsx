import React, { useContext, useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { Compass, History, Brain, Award, Settings as SettingsIcon, Globe, ChevronDown, Check, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const { t, language, setLanguage, LANGUAGES, isDark, toggleTheme } = useContext(AppContext);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef(null);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  const NAV_ITEMS = [
    { to: '/', label: t('nav.overview', '全景'), icon: Compass, end: true },
    { to: '/timeline', label: t('nav.timeline', '时间轴'), icon: History },
    { to: '/quiz', label: t('nav.quiz', '测验'), icon: Brain },
    { to: '/dashboard', label: t('nav.dashboard', '看板'), icon: Award },
    { to: '/settings', label: t('nav.settings', '设置'), icon: SettingsIcon },
  ];

  // Determine which nav item is active
  const activeIndex = NAV_ITEMS.findIndex(item => {
    if (item.end) return location.pathname === item.to;
    return location.pathname.startsWith(item.to);
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <NavLink to="/" className="nav-brand" style={{ textDecoration: 'none' }}>
        <span className="nav-brand-badge"></span>
        <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{t('nav.brand', 'Art & Architecture')}</span>
      </NavLink>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        {/* Navigation Links */}
        <div className="nav-links">
          {NAV_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="nav-link"
                style={{
                  color: isActive ? 'var(--text-primary)' : undefined,
                  fontWeight: isActive ? 550 : undefined,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-indicator"
                    className="nav-indicator"
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                  />
                )}
                <Icon size={14} style={{ position: 'relative', zIndex: 1 }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Night / Light Mode Toggle Button */}
        <motion.button
          type="button"
          className="btn btn-outline"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          style={{
            width: '32px',
            height: '32px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
          title={isDark ? (t('settings.lightMode') || '切换为日间明亮模式') : (t('settings.darkMode') || '切换为夜间深邃模式')}
          aria-label="Toggle Night Mode"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'dark' : 'light'}
              initial={{ opacity: 0, rotate: -40, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 40, scale: 0.7 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {isDark ? (
                <Moon size={14} style={{ color: '#cbd5e1' }} />
              ) : (
                <Sun size={14} style={{ color: '#d97706' }} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Language Selector Dropdown */}
        <div ref={langMenuRef} style={{ position: 'relative' }}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setShowLangMenu(!showLangMenu)}
            style={{
              padding: '0.35rem 0.65rem',
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: showLangMenu ? 'var(--bg-subtle)' : 'var(--bg-surface)'
            }}
            title={t('nav.language', '选择语言 / Select Language')}
          >
            <Globe size={13} style={{ color: 'var(--text-secondary)' }} />
            <span>{currentLang.flag}</span>
            <span style={{ fontWeight: 550 }}>{currentLang.name}</span>
            <ChevronDown size={11} style={{ opacity: 0.6, transform: showLangMenu ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
          </button>

          <AnimatePresence>
            {showLangMenu && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  right: 0,
                  zIndex: 100,
                  minWidth: '140px',
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-hairline)',
                  boxShadow: 'var(--shadow-modal)',
                  padding: '4px',
                  overflow: 'hidden'
                }}
              >
                {LANGUAGES.map((langItem) => {
                  const isSelected = language === langItem.code;
                  return (
                    <button
                      key={langItem.code}
                      type="button"
                      onClick={() => {
                        setLanguage(langItem.code);
                        setShowLangMenu(false);
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        padding: '7px 10px',
                        borderRadius: 'var(--radius-xs)',
                        border: 'none',
                        backgroundColor: isSelected ? 'var(--bg-subtle)' : 'transparent',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: isSelected ? 600 : 400,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'; }}
                      onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>{langItem.flag}</span>
                        <span>{langItem.label}</span>
                      </div>
                      {isSelected && <Check size={13} style={{ color: 'var(--accent-primary)' }} />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
