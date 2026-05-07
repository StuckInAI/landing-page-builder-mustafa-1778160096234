import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import styles from './AuthPage.module.css';

export default function TwoFactorPage() {
  const { verify2FA, twoFactorPending } = useAuthStore();
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!twoFactorPending) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (token.length !== 6 || !/^\d+$/.test(token)) {
      setError('Please enter a valid 6-digit code');
      return;
    }
    setLoading(true);
    try {
      const success = await verify2FA(token);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } catch {
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.iconWrap} style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)' }}>
              <Shield size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <h1 className={styles.title}>Two-Factor Authentication</h1>
            <p className={styles.subtitle}>
              Enter the 6-digit code from your authenticator app to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Verification Code</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                placeholder="000000"
                value={token}
                onChange={(e) => setToken(e.target.value.replace(/\D/g, ''))}
                className={styles.input}
                autoFocus
              />
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button
              type="submit"
              disabled={loading || token.length !== 6}
              className={styles.submitBtn}
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </form>

          <div className={styles.footer}>
            <Link to="/login" className={styles.backLink}>
              <ArrowLeft size={14} />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
