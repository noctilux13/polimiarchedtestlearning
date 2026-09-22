import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import MovementDetail from './pages/MovementDetail';
import ArtistDetail from './pages/ArtistDetail';
import ArtworkDetail from './pages/ArtworkDetail';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import SettingsPage from './pages/Settings';
import GlobalExplorer from './pages/GlobalExplorer';
import AIFloatingAssistant from './components/AIFloatingAssistant';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
          <div className="card" style={{ maxWidth: '560px', margin: '0 auto', padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>页面渲染出现异常</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              {this.state.error?.message || '组件在加载或运行时发生错误'}
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => { this.setState({ hasError: false, error: null }); window.location.hash = '#/'; }}
              >
                返回首页
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => window.location.reload()}
              >
                重新加载页面
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent() {
  const location = useLocation();
  const isExplorer = location.pathname === '/explorer';

  return (
    <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main className={`container ${isExplorer ? 'container-explorer' : ''}`} style={{ flex: 1, width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorer" element={<GlobalExplorer />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/movement/:id" element={<MovementDetail />} />
            <Route path="/artist/:movementId/:id" element={<ArtistDetail />} />
            <Route path="/artwork/:movementId/:artistId/:id" element={<ArtworkDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </ErrorBoundary>
      </main>

      {/* Global AI Floating Assistant */}
      <AIFloatingAssistant />

      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <div className="container" style={{ padding: 0 }}>
          西方现当代艺术史与欧洲经典建筑史研习平台
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
