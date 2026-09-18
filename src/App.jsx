import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          
          <main className="container" style={{ flex: 1 }}>
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
          </main>

          {/* Global AI Floating Assistant */}
          <AIFloatingAssistant />

          <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <div className="container" style={{ padding: 0 }}>
              西方现当代艺术史与欧洲经典建筑史研习平台
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
