# Minimalist Design Tokens & Component Recipes

## 1. CSS Design Tokens Template

```css
:root {
  /* Color Palette - Light Mode */
  --bg-main: #f9fafb;
  --bg-surface: #ffffff;
  --bg-subtle: #f3f4f6;
  
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #9ca3af;
  
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-focus: #111827;
  
  --accent-primary: #18181b;
  --accent-contrast: #ffffff;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing Scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;

  /* Radius & Shadows */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --shadow-subtle: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-float: 0 12px 32px -8px rgba(0, 0, 0, 0.08);

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-main: #09090b;
    --bg-surface: #121316;
    --bg-subtle: #1c1d22;
    
    --text-primary: #f4f4f5;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    
    --border-subtle: rgba(255, 255, 255, 0.08);
    --border-focus: #ffffff;
    
    --accent-primary: #ffffff;
    --accent-contrast: #09090b;
    
    --shadow-subtle: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-float: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
  }
}
```

---

## 2. Minimalist UI Components

### A. Minimal Button
```html
<button class="btn-primary">Get Started</button>
<button class="btn-secondary">Learn More</button>

<style>
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent-contrast);
  background-color: var(--accent-primary);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background var(--transition-fast), border-color var(--transition-fast);
}

.btn-secondary:hover {
  background-color: var(--bg-subtle);
  border-color: var(--text-muted);
}
</style>
```

### B. Clean Card Component
```html
<div class="minimal-card">
  <span class="badge">Architecture</span>
  <h3 class="card-title">Clean Systems Design</h3>
  <p class="card-desc">Building resilient, low-latency microservices with zero external cruft.</p>
  <div class="card-meta">5 min read · Aug 2026</div>
</div>

<style>
.minimal-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.minimal-card:hover {
  border-color: rgba(0, 0, 0, 0.18);
  box-shadow: var(--shadow-float);
}

.badge {
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-meta {
  margin-top: auto;
  padding-top: var(--space-md);
  font-size: 0.75rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-subtle);
}
</style>
```
