import { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import StatusPanel from './components/StatusPanel';
import './styles/App.css';

function App() {
  const [systemStatus, setSystemStatus] = useState(null);

  useEffect(() => {
    // Fetch system status on mount
    fetch('/api/jarvis/status')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSystemStatus(data.data);
        }
      })
      .catch(err => console.error('Failed to fetch status:', err));
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🤖 JARVIS</h1>
        <p>AI Operating System</p>
        {systemStatus && (
          <div className="status-indicator">
            <span className={`status-dot ${systemStatus.status}`}></span>
            <span>{systemStatus.status.toUpperCase()}</span>
          </div>
        )}
      </header>
      
      <main className="app-main">
        <ChatInterface />
        <StatusPanel status={systemStatus} />
      </main>
      
      <footer className="app-footer">
        <p>Secure • Adaptive • Multilingual</p>
      </footer>
    </div>
  );
}

export default App;
