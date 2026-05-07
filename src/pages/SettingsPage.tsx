import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', padding: '2rem' }}>
      <Link
        to="/dashboard"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--color-text-muted)',
          marginBottom: '2rem',
          textDecoration: 'none',
        }}
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>
      <h1 style={{ color: 'var(--color-text)', fontSize: '2rem', fontWeight: 700 }}>
        Settings
      </h1>
      <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
        Account and application settings will appear here.
      </p>
    </div>
  );
}
