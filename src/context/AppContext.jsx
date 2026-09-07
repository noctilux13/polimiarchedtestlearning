import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getAllCustomImages, saveCustomImage, deleteCustomImage, clearAllCustomImages } from '../utils/imageStorage';
import { translations, LANGUAGES } from '../i18n/translations';
import { localizedContent } from '../data/localizedContent';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialKey = localStorage.getItem('aiApiKey') || localStorage.getItem('groqApiKey') || '';
  const [apiKey, setApiKey] = useState(initialKey);
  const [apiEndpoint, setApiEndpoint] = useState(() => {
    const saved = localStorage.getItem('aiApiEndpoint');
    if (saved) return saved;
    if (initialKey.startsWith('gsk_')) return 'https://api.groq.com/openai/v1';
    return 'https://api.deepseek.com/v1';
  });
  const [apiModel, setApiModel] = useState(() => {
    const saved = localStorage.getItem('aiApiModel');
    if (saved && !saved.includes('llama3') && !saved.includes('llama-3.3') && !saved.includes('llama-3.1') && !saved.includes('mixtral') && !saved.includes('gemma')) return saved;
    if (initialKey.startsWith('gsk_')) return 'openai/gpt-oss-120b';
    return 'deepseek-chat';
  });
  const [cfWorkerUrl, setCfWorkerUrl] = useState(localStorage.getItem('cfWorkerUrl') || '');
  const [language, setLanguageState] = useState(() => localStorage.getItem('app_lang') || 'zh');
  
  const [theme, setThemeState] = useState(() => localStorage.getItem('app_theme') || 'light');
  const [systemIsDark, setSystemIsDark] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setSystemIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resolvedTheme = theme === 'auto' ? (systemIsDark ? 'dark' : 'light') : theme;
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('app_theme', newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = (prev === 'dark' || (prev === 'auto' && systemIsDark)) ? 'light' : 'dark';
      localStorage.setItem('app_theme', next);
      return next;
    });
  }, [systemIsDark]);

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem('app_lang', lang);
  }, []);

  // Translation helper function for UI strings
  const t = useCallback((path, fallback = '') => {
    const langDict = translations[language] || translations.zh;
    const parts = path.split('.');
    let current = langDict;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Fallback to English, then Chinese, then provided fallback
        let fallbackVal = translations.en;
        for (const p of parts) {
          if (fallbackVal && typeof fallbackVal === 'object' && p in fallbackVal) {
            fallbackVal = fallbackVal[p];
          } else {
            fallbackVal = null;
            break;
          }
        }
        return fallbackVal || fallback || path;
      }
    }
    return typeof current === 'string' ? current : (fallback || path);
  }, [language]);

  // Content localization helper for dynamic entities (movements, artists, artworks)
  const l = useCallback((item, field, category = 'artworks') => {
    if (!item) return '';
    
    // Check in localizedContent dictionary for current language
    const currentDict = localizedContent[language] || (language === 'zh-TW' ? localizedContent.zh : null);
    if (currentDict) {
      if (currentDict[category] && currentDict[category][item.id] && currentDict[category][item.id][field]) {
        return currentDict[category][item.id][field];
      }
      if (currentDict[item.id] && currentDict[item.id][field]) {
        return currentDict[item.id][field];
      }
    }

    // If not found, check English dictionary
    if (language !== 'en' && localizedContent.en) {
      const enDict = localizedContent.en;
      if (enDict[category] && enDict[category][item.id] && enDict[category][item.id][field]) {
        return enDict[category][item.id][field];
      }
    }

    // Direct object property fallbacks
    return item[`${field}_${language}`] || item[`${field}_zh`] || item[`${field}_en`] || item[field] || '';
  }, [language]);

  const lArray = useCallback((item, field, category = 'artworks') => {
    if (!item) return [];
    
    const currentDict = localizedContent[language] || (language === 'zh-TW' ? localizedContent.zh : null);
    if (currentDict) {
      if (currentDict[category] && currentDict[category][item.id] && currentDict[category][item.id][field]) {
        return currentDict[category][item.id][field];
      }
      if (currentDict[item.id] && currentDict[item.id][field]) {
        return currentDict[item.id][field];
      }
    }

    if (language !== 'en' && localizedContent.en) {
      const enDict = localizedContent.en;
      if (enDict[category] && enDict[category][item.id] && enDict[category][item.id][field]) {
        return enDict[category][item.id][field];
      }
    }

    return item[`${field}_${language}`] || item[`${field}_zh`] || item[`${field}_en`] || item[field] || [];
  }, [language]);

  const [progress, setProgress] = useState(() => {
    const defaults = {
      viewedArtworks: [],
      favorites: [],
      quizScores: [],
      masteryLevel: 0
    };
    try {
      const saved = localStorage.getItem('artProgress');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaults, ...parsed };
      }
    } catch (e) {
      // corrupted localStorage, reset
    }
    return defaults;
  });

  const [customImages, setCustomImages] = useState({});

  // Load custom images from IndexedDB on startup
  useEffect(() => {
    getAllCustomImages().then(map => {
      if (map && Object.keys(map).length > 0) {
        setCustomImages(map);
      }
    }).catch(err => {
      console.warn('Failed to load custom images:', err);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('aiApiKey', apiKey);
    localStorage.setItem('groqApiKey', apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem('aiApiEndpoint', apiEndpoint);
  }, [apiEndpoint]);

  useEffect(() => {
    localStorage.setItem('aiApiModel', apiModel);
  }, [apiModel]);

  useEffect(() => {
    localStorage.setItem('cfWorkerUrl', cfWorkerUrl);
  }, [cfWorkerUrl]);

  useEffect(() => {
    localStorage.setItem('artProgress', JSON.stringify(progress));
  }, [progress]);

  const markArtworkViewed = (id) => {
    if (!(progress.viewedArtworks || []).includes(id)) {
      setProgress(prev => ({
        ...prev,
        viewedArtworks: [...prev.viewedArtworks, id]
      }));
    }
  };

  const toggleFavorite = (id) => {
    setProgress(prev => {
      const isFav = prev.favorites.includes(id);
      return {
        ...prev,
        favorites: isFav ? prev.favorites.filter(item => item !== id) : [...prev.favorites, id]
      };
    });
  };

  const addQuizScore = (scorePercentage) => {
    setProgress(prev => {
      const newScores = [...prev.quizScores, scorePercentage];
      const avg = Math.round(newScores.reduce((a, b) => a + b, 0) / newScores.length);
      return {
        ...prev,
        quizScores: newScores,
        masteryLevel: avg
      };
    });
  };

  const resetProgress = () => {
    const fresh = { viewedArtworks: [], favorites: [], quizScores: [], masteryLevel: 0 };
    setProgress(fresh);
    localStorage.setItem('artProgress', JSON.stringify(fresh));
  };

  // Custom image handlers
  const setCustomImage = useCallback(async (id, dataUrl, meta = {}) => {
    const record = await saveCustomImage(id, dataUrl, meta);
    const cleanId = id.replace(/^(artwork|artist):/, '');
    const fullId = meta.targetType ? `${meta.targetType}:${cleanId}` : id;

    setCustomImages(prev => ({
      ...prev,
      [id]: record,
      [cleanId]: record,
      [fullId]: record
    }));
    return record;
  }, []);

  const removeCustomImage = useCallback(async (id) => {
    const cleanId = id.replace(/^(artwork|artist):/, '');
    await deleteCustomImage(id);
    await deleteCustomImage(`artwork:${cleanId}`);
    await deleteCustomImage(`artist:${cleanId}`);
    await deleteCustomImage(cleanId);
    
    setCustomImages(prev => {
      const next = { ...prev };
      delete next[id];
      delete next[cleanId];
      delete next[`artwork:${cleanId}`];
      delete next[`artist:${cleanId}`];
      return next;
    });
  }, []);

  const clearAllOverrides = useCallback(async () => {
    await clearAllCustomImages();
    setCustomImages({});
  }, []);

  // Fast helper to resolve an image URL with custom override priority
  const resolveArtworkUrl = useCallback((artworkId, defaultUrl) => {
    if (!artworkId) return defaultUrl;
    const custom = customImages[`artwork:${artworkId}`] || customImages[artworkId];
    return custom?.dataUrl || defaultUrl;
  }, [customImages]);

  const resolveArtistAvatar = useCallback((artistId, defaultUrl) => {
    if (!artistId) return defaultUrl;
    const custom = customImages[`artist:${artistId}`] || customImages[artistId];
    return custom?.dataUrl || defaultUrl;
  }, [customImages]);

  // Global AI Floating Assistant & Chat Memory state
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiContextData, setAiContextData] = useState(null);
  const [chatHistory, setChatHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('ai_chat_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ai_chat_history', JSON.stringify(chatHistory));
    } catch (e) {
      console.warn('Failed to persist chat history:', e);
    }
  }, [chatHistory]);

  const clearChatHistory = useCallback(() => {
    setChatHistory([]);
    try {
      localStorage.removeItem('ai_chat_history');
    } catch (e) {}
  }, []);

  const openAiAssistant = useCallback((contextInfo = null, initialPrompt = '') => {
    if (contextInfo) {
      setAiContextData(contextInfo);
    }
    setIsAiOpen(true);
  }, []);

  return (
    <AppContext.Provider value={{
      apiKey,
      setApiKey,
      apiEndpoint,
      setApiEndpoint,
      apiModel,
      setApiModel,
      cfWorkerUrl,
      setCfWorkerUrl,
      language,
      setLanguage,
      theme,
      setTheme,
      isDark,
      toggleTheme,
      t,
      l,
      lArray,
      LANGUAGES,
      progress,
      markArtworkViewed,
      toggleFavorite,
      addQuizScore,
      resetProgress,
      customImages,
      setCustomImage,
      removeCustomImage,
      clearAllOverrides,
      resolveArtworkUrl,
      resolveArtistAvatar,
      isAiOpen,
      setIsAiOpen,
      aiContextData,
      setAiContextData,
      chatHistory,
      setChatHistory,
      clearChatHistory,
      openAiAssistant
    }}>
      {children}
    </AppContext.Provider>
  );
};
