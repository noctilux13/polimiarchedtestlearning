import React, { useContext, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { callAiService } from '../services/aiService';
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
  Monitor
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const THEME_OPTIONS = [
  { key: 'light', labelKey: 'settings.themeLight', fallback: '日间明亮', icon: Sun, desc: '经典白底画廊与灰黑微光' },
  { key: 'dark', labelKey: 'settings.themeDark', fallback: '夜间深邃', icon: Moon, desc: '黑曜石夜幕与月白手电光束' },
  { key: 'auto', labelKey: 'settings.themeAuto', fallback: '跟随系统', icon: Monitor, desc: '自动适配操作系统的明暗偏好' },
];

const PROVIDER_PRESETS = [
  {
    name: 'Groq (Qwen 3.8)',
    endpoint: 'https://api.groq.com/openai/v1',
    model: 'qwen/qwen3.8-27b',
    hint: 'gsk_... (qwen/qwen3.8-27b 旗舰中文解析)'
  },
  {
    name: 'Groq (GPT-OSS 120B)',
    endpoint: 'https://api.groq.com/openai/v1',
    model: 'openai/gpt-oss-120b',
    hint: 'gsk_... (openai/gpt-oss-120b / openai/gpt-oss-20b)'
  },
  {
    name: 'DeepSeek',
    endpoint: 'https://api.deepseek.com/v1',
    model: 'deepseek-chat',
    hint: 'sk-... (deepseek-chat / deepseek-reasoner)'
  },
  {
    name: 'Claude',
    endpoint: 'https://api.anthropic.com/v1',
    model: 'claude-3-5-sonnet-20241022',
    hint: 'sk-ant-... (claude-3-5-sonnet-20241022)'
  },
  {
    name: 'OpenAI',
    endpoint: 'https://api.openai.com/v1',
    model: 'gpt-4o-mini',
    hint: 'sk-... (gpt-4o / gpt-4o-mini)'
  },
  {
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

  const [inputKey, setInputKey] = useState(apiKey || '');
  const [inputEndpoint, setInputEndpoint] = useState(apiEndpoint || 'https://api.deepseek.com/v1');
  const [inputModel, setInputModel] = useState(apiModel || 'deepseek-chat');
  const [inputWorkerUrl, setInputWorkerUrl] = useState(cfWorkerUrl || '');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const importFileRef = useRef(null);

  const customList = Object.values(customImages || {});

  const handleKeyChange = (val) => {
    setInputKey(val);
    const trimmed = val.trim();
    if (trimmed.startsWith('gsk_')) {
      if (inputEndpoint.includes('deepseek.com') || !inputEndpoint) {
        setInputEndpoint('https://api.groq.com/openai/v1');
        setInputModel('qwen/qwen3.8-27b');
      }
    } else if (trimmed.startsWith('sk-ant-')) {
      if (!inputEndpoint.includes('anthropic.com')) {
        setInputEndpoint('https://api.anthropic.com/v1');
        setInputModel('claude-3-5-sonnet-20241022');
      }
    } else if (trimmed.startsWith('sk-or-')) {
      if (inputEndpoint.includes('deepseek.com')) {
        setInputEndpoint('https://openrouter.ai/api/v1');
        setInputModel('deepseek/deepseek-r1');
      }
    }
  };

  const handleApplyPreset = (preset) => {
    setInputEndpoint(preset.endpoint);
    setInputModel(preset.model);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setApiKey(inputKey.trim());
    setApiEndpoint(inputEndpoint.trim());
    setApiModel(inputModel.trim());
    setCfWorkerUrl(inputWorkerUrl.trim());
    setTestResult({
      success: true,
      message: t ? t('settings.saveSuccess', 'Settings saved successfully!') : 'Settings saved successfully!'
    });
  };

  const handleTestApi = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      setApiKey(inputKey.trim());
      setApiEndpoint(inputEndpoint.trim());
      setApiModel(inputModel.trim());
      setCfWorkerUrl(inputWorkerUrl.trim());

      const response = await callAiService({
        prompt: 'Say "AI connection successful!" in under 5 words.',
      });

      setTestResult({
        success: true,
        message: `Connection successful: "${response.trim()}"`
      });
    } catch (err) {
      setTestResult({
        success: false,
        message: `Connection test failed: ${err.message}`
      });
    } finally {
      setTesting(false);
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
            <SettingsIcon size={12} /> {t ? t('nav.settings', 'Settings') : 'System Settings'}
          </div>
          <h1 style={{ marginBottom: '0.4rem' }}>{t ? t('settings.title', 'Preferences & Configuration') : 'Preferences & Configuration'}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
            {t ? t('settings.subtitle', 'Configure multi-language options, AI models, API keys, and custom image overrides.') : 'Configure language, AI model endpoints, API keys, and custom image overrides.'}
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
              {t ? t('settings.themeTitle', 'Appearance & Theme') : 'Appearance & Theme'}
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            {t ? t('settings.themeSubtitle', 'Toggle between daylight gallery mode and nighttime museum exhibition spotlight mode.') : 'Toggle between daylight gallery mode and nighttime museum exhibition spotlight mode.'}
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
              {t ? t('settings.languageTitle', 'Interface Language') : 'Interface Language'}
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            {t ? t('settings.languageDesc', 'Switch seamlessly between Chinese, English, Italian, and Spanish.') : 'Switch seamlessly between Chinese, English, Italian, and Spanish.'}
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
              {t ? t('settings.aiConfigTitle', 'AI Model & API Configuration') : 'AI Model & API Configuration'}
            </h2>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', marginBottom: '1.35rem' }}>
            {t ? t('settings.aiConfigDesc', 'Supports Groq (Qwen 3.8 / GPT-OSS), DeepSeek, Claude, OpenAI, and custom OpenAI-compatible endpoints.') : 'Supports Groq, DeepSeek, Claude, OpenAI, and OpenRouter.'}
          </p>

          {/* Quick Provider Presets */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', marginBottom: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 650 }}>
              快速配置预设 / Quick Provider Presets
            </div>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
              {PROVIDER_PRESETS.map((p) => {
                const isActive = inputEndpoint === p.endpoint && inputModel === p.model;
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
            {/* API Key Input */}
            <div style={{ marginBottom: '1.35rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Key size={14} style={{ color: 'var(--accent-blue)' }} />
                {t ? t('settings.apiKeyLabel', 'API Key') : 'API Key'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiKeyHint', 'Stored locally in your browser (e.g. Groq gsk_..., DeepSeek sk-..., Claude sk-ant-...).') : 'Stored locally in browser.'}
              </p>
              <input
                type="password"
                className="input-field"
                placeholder="gsk_... / sk-..."
                value={inputKey}
                onChange={(e) => handleKeyChange(e.target.value)}
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
              {inputKey.trim().startsWith('gsk_') && (
                <div style={{ marginTop: '0.45rem', fontSize: '0.76rem', color: 'var(--accent-sage)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={13} />
                  <span>已自动适配 Groq 超高速大模型引擎 (Qwen 3.8 / GPT-OSS 120B)</span>
                </div>
              )}
            </div>

            {/* API Endpoint Base URL */}
            <div style={{ marginBottom: '1.35rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Server size={14} style={{ color: 'var(--accent-sage)' }} />
                {t ? t('settings.apiEndpointLabel', 'API Endpoint (Base URL)') : 'API Endpoint (Base URL)'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiEndpointHint', 'e.g. https://api.groq.com/openai/v1 or https://api.deepseek.com/v1') : 'Base URL of the AI provider API.'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="https://api.groq.com/openai/v1"
                value={inputEndpoint}
                onChange={(e) => setInputEndpoint(e.target.value)}
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
            </div>

            {/* Model Name */}
            <div style={{ marginBottom: '1.35rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Cpu size={14} style={{ color: 'var(--accent-ochre)' }} />
                {t ? t('settings.apiModelLabel', 'Model Name') : 'Model Name'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiModelHint', 'e.g. qwen/qwen3.8-27b, openai/gpt-oss-120b, deepseek-chat, claude-3-5-sonnet-20241022') : 'Model identifier.'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="qwen/qwen3.8-27b"
                value={inputModel}
                onChange={(e) => setInputModel(e.target.value)}
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
            </div>

            {/* Cloudflare Worker Proxy URL */}
            <div style={{ marginBottom: '1.6rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Globe size={14} style={{ color: 'var(--accent-terracotta)' }} />
                {t ? t('settings.proxyUrlLabel', 'Custom CORS Proxy URL (Optional)') : 'Custom CORS Proxy URL (Optional)'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.proxyUrlHint', 'Optional Cloudflare Worker URL if direct browser requests are blocked by CORS.') : 'Optional Cloudflare Worker or reverse proxy URL.'}
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
                {t ? t('settings.saveSettings', 'Save Configuration') : 'Save Configuration'}
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
                    <span>{t ? t('settings.testingConnection', 'Testing connection...') : 'Testing connection...'}</span>
                  </>
                ) : (
                  <span>{t ? t('settings.testConnection', 'Test AI Connection') : 'Test AI Connection'}</span>
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
                  {t ? t('settings.customImagesTitle', 'Custom Image Overrides') : 'Custom Image Overrides'} ({customList.length})
                </h2>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', margin: '0.3rem 0 0 0' }}>
                {t ? t('settings.customImagesDesc', 'Manage locally uploaded custom artist portraits and artwork images.') : 'Manage locally uploaded custom images.'}
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
                <Upload size={12} /> {t ? t('settings.importConfig', 'Import Config') : 'Import Config'}
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
                    <Download size={12} /> {t ? t('settings.exportBackup', 'Export Backup') : 'Export Backup'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => { if (window.confirm(t ? t('settings.clearAllCustomConfirm', '确认清空所有自定义替换的图片？') : 'Clear all custom images?')) clearAllOverrides(); }}
                    style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem', color: 'var(--accent-terracotta)', borderRadius: 'var(--radius-pill)' }}
                  >
                    <RotateCcw size={12} /> {t ? t('settings.clearAllCustom', 'Clear All') : 'Clear All'}
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
              {t ? t('settings.emptyCustomImages', 'No custom image overrides yet. Click "Replace" on any artist or artwork page to upload!') : 'No custom image overrides yet.'}
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
                      {item.targetType === 'artist' ? (t ? t('settings.artistAvatarType', 'Artist Avatar') : 'Artist Avatar') : (t ? t('settings.artworkImageType', 'Artwork Photo') : 'Artwork Photo')}
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
                    title={t ? t('settings.restoreTooltip', 'Restore default image') : 'Restore default image'}
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
              {t ? t('settings.workerTemplateTitle', 'Cloudflare Worker CORS Reverse Proxy Template') : 'Cloudflare Worker CORS Reverse Proxy Template'}
            </h3>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.85rem' }}>
            {t ? t('settings.workerTemplateDesc', 'Deploy the following snippet to Cloudflare Workers for free CORS reverse proxying:') : 'Deploy the following snippet to Cloudflare Workers for free CORS reverse proxying:'}
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
    const upstreamHost = env.UPSTREAM_HOST || "https://api.groq.com";
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
