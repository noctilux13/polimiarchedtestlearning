import React, { useState, useEffect, useContext } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';
import { AppContext } from '../context/AppContext';
import embeddedArtworksCache from '../data/artworksCache.json';

/**
 * Architectural & Classical Art Offline SVG Placeholder
 * Responsive vector motif depicting a classical Roman Arch with pediment & keystone.
 * 100% offline, zero network dependencies, theme-adaptive via CSS variables.
 */
export const ArchedOfflinePlaceholder = ({ 
  title = 'ARCHED 研考视觉文献',
  subTitle = '离线视觉参考 (Offline Fallback)',
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`arched-offline-placeholder flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '140px',
        backgroundColor: 'var(--bg-subtle, #f8fafc)',
        color: 'var(--text-tertiary, #94a3b8)',
        borderRadius: 'inherit',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
      role="img"
      aria-label={`${title} - ${subTitle}`}
    >
      <svg 
        viewBox="0 0 120 100" 
        width="60" 
        height="50" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.75"
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ opacity: 0.65, marginBottom: '0.65rem' }}
        aria-hidden="true"
      >
        {/* Plinth / Stylobate steps */}
        <line x1="12" y1="92" x2="108" y2="92" strokeWidth="2.5" />
        <line x1="18" y1="87" x2="102" y2="87" />
        
        {/* Left Pier & Capital */}
        <rect x="24" y="38" width="13" height="49" rx="1" fill="currentColor" fillOpacity="0.08" />
        <line x1="21" y1="38" x2="40" y2="38" strokeWidth="2" />
        
        {/* Right Pier & Capital */}
        <rect x="83" y="38" width="13" height="49" rx="1" fill="currentColor" fillOpacity="0.08" />
        <line x1="80" y1="38" x2="99" y2="38" strokeWidth="2" />
        
        {/* Classical Roman Arch with Inner Molding */}
        <path d="M 37 42 A 23 23 0 0 1 83 42" fill="none" strokeWidth="2" />
        <path d="M 43 42 A 17 17 0 0 1 77 42" fill="none" strokeDasharray="2 2.5" opacity="0.6" />
        
        {/* Keystone (Clavis) */}
        <polygon points="56,18 64,18 62,25 58,25" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
        
        {/* Classical Entablature & Pediment */}
        <line x1="16" y1="26" x2="104" y2="26" strokeWidth="2.5" />
        <polygon points="20,26 60,10 100,26" fill="currentColor" fillOpacity="0.06" strokeWidth="2" />
        
        {/* Perspective Horizon / Oculus */}
        <circle cx="60" cy="18" r="2.5" fill="currentColor" opacity="0.4" />
      </svg>

      <span 
        style={{
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          color: 'var(--text-secondary, #475569)',
          textAlign: 'center',
          lineHeight: 1.35,
          maxWidth: '90%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
        title={title}
      >
        {title}
      </span>

      <span 
        style={{
          fontSize: '0.68rem',
          color: 'var(--text-tertiary, #94a3b8)',
          marginTop: '0.4rem',
          padding: '2px 8px',
          borderRadius: '9999px',
          backgroundColor: 'var(--bg-surface, #ffffff)',
          border: '1px solid var(--border-hairline, rgba(148, 163, 184, 0.2))',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }} />
        {subTitle}
      </span>
    </div>
  );
};

/**
 * Enhanced ArtworkImage Component
 * Supports direct URLs (src/imageUrl/image), local fallbacks (fallbackSrc/fallbackImage),
 * legacy artworkId caching, seamless shimmer skeletons, and responsive offline SVG placeholders.
 */
export const ArtworkImage = ({ 
  artworkId,
  src,
  imageUrl,
  image,
  fallbackSrc,
  fallbackImage,
  alt,
  title,
  className = '', 
  imageClassName = '',
  fit = 'cover', // 'cover' | 'contain' | 'auto'
  style = {},
  imageStyle = {},
  showMetaBadge = false,
  sourceUrl,
  onLoad,
  onError
}) => {
  const { resolveArtworkUrl } = useContext(AppContext) || {};

  // Resolve primary and secondary URL candidates
  const directUrl = src || imageUrl || image;
  const secondaryUrl = fallbackSrc || fallbackImage;

  const cachedData = artworkId ? embeddedArtworksCache?.[artworkId] : null;
  const cachedRawUrl = cachedData?.image_url || (artworkId ? `/images/artworks/${artworkId}.jpg` : '');
  const cachedDefaultUrl = cachedRawUrl ? getAssetUrl(cachedRawUrl) : '';

  // Priority 1: Check user custom override in IndexedDB for this artworkId
  const customOverride = resolveArtworkUrl && artworkId ? resolveArtworkUrl(artworkId, null) : null;

  // Primary URL candidate: Priority 1 (custom override) -> Priority 2 (direct URL) -> Priority 3 (cached artworkId)
  const initialPrimaryUrl = customOverride || (directUrl ? getAssetUrl(directUrl) : cachedDefaultUrl) || '';

  // Fallback candidate: explicit fallbackSrc has priority, then cached artworkId if directUrl was primary
  const initialFallbackUrl = secondaryUrl 
    ? getAssetUrl(secondaryUrl) 
    : (directUrl && cachedDefaultUrl && cachedDefaultUrl !== initialPrimaryUrl ? cachedDefaultUrl : '');

  const [currentSrc, setCurrentSrc] = useState(initialPrimaryUrl);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(!initialPrimaryUrl);

  // Synchronize when inputs change
  useEffect(() => {
    const nextPrimary = customOverride || (directUrl ? getAssetUrl(directUrl) : cachedDefaultUrl) || '';
    setCurrentSrc(nextPrimary);
    setHasTriedFallback(false);
    setLoaded(false);
    setError(!nextPrimary);
  }, [customOverride, directUrl, cachedDefaultUrl]);

  const handleImageLoad = (e) => {
    setLoaded(true);
    setError(false);
    if (onLoad) onLoad(e);
  };

  const handleImageError = (e) => {
    if (!hasTriedFallback && initialFallbackUrl && initialFallbackUrl !== currentSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(initialFallbackUrl);
      setLoaded(false); // Retain .image-shimmer skeleton while fallback is attempted!
      return;
    }
    setError(true);
    setLoaded(false);
    if (onError) onError(e);
  };

  const displayTitle = title || alt || cachedData?.titleZh || cachedData?.title || '经典艺术与建筑历史文献';
  const displaySubTitle = hasTriedFallback 
    ? '网络文献不可用，本地备用已就绪' 
    : (!initialPrimaryUrl ? '未指定文献图源 (No Image Source)' : '离线视觉参考 (Offline Fallback)');

  // Fallback state: render classical architectural SVG placeholder
  if (!currentSrc || error) {
    return (
      <ArchedOfflinePlaceholder 
        title={displayTitle}
        subTitle={displaySubTitle}
        className={className}
        style={style}
      />
    );
  }

  const resolvedFit = className.includes('object-contain') ? 'contain' : (className.includes('object-cover') ? 'cover' : fit);

  // Authoritative data source badge link
  const effectiveSourceUrl = sourceUrl || cachedData?.source_url || (currentSrc.startsWith('http') ? currentSrc : null);

  return (
    <div 
      className={`relative group overflow-hidden ${!loaded ? 'image-shimmer' : ''} ${className}`}
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'var(--bg-subtle, #f8fafc)',
        ...style 
      }}
    >
      <img
        src={currentSrc}
        alt={alt || displayTitle}
        className={`${imageClassName} transition-all duration-500 ease-out`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: resolvedFit,
          objectPosition: 'center',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.98)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          ...imageStyle
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
      />
      
      {showMetaBadge && effectiveSourceUrl && loaded && (
        <div 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            zIndex: 2,
            transition: 'opacity 0.2s ease'
          }}
          className="opacity-0 group-hover:opacity-100"
        >
          <a
            href={effectiveSourceUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill, 9999px)',
              backgroundColor: 'rgba(0,0,0,0.72)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 500,
              textDecoration: 'none'
            }}
            onClick={(e) => e.stopPropagation()}
            title="查看公有领域 / 博物馆权威文献"
          >
            <CheckCircle2 size={12} style={{ color: '#34d399' }} />
            <span>权威源</span>
            <ExternalLink size={10} style={{ opacity: 0.7 }} />
          </a>
        </div>
      )}
    </div>
  );
};

export default ArtworkImage;
