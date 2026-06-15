import './StatusPanel.css';

function StatusPanel({ status }) {
  if (!status) {
    return (
      <div className="status-panel">
        <h3>System Status</h3>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="status-panel">
      <h3>System Components</h3>
      <div className="component-list">
        {Object.entries(status.components).map(([name, state]) => (
          <div key={name} className="component-item">
            <span className="component-name">{name.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span className={`component-status ${state}`}>{state}</span>
          </div>
        ))}
      </div>
      <div className="system-info">
        <p>Version: {status.version}</p>
        <p>Uptime: {Math.floor(status.uptime)}s</p>
      </div>
    </div>
  );
}

export default StatusPanel;
