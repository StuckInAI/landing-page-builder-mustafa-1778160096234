import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();

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
        Project {id}
      </h1>
      <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
        Project details and agent interactions will appear here.
      </p>
    </div>
  );
}
