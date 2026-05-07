import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import styles from './AuthPage.module.css';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuthStore();
  const navigate = useNavigate();

  const passwordStrength = (): { level: number; label: string; color: string } => {
    if (password.length === 0) return { level: 0, label: '', color: '' };
    if (password.length < 6) return { level: 1, label: 'Weak', color: '#ef4444' };
    if (password.length < 10) return { level: 2, label: 'Fair', color: '#f59e0b' };
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password))
      return { level: 4, label: 'Strong', color: '#22c55e' };
    return { level: 3, label: 'Good', color: '#00d4aa' };
  };

  const strength = passwordStrength();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Link to="/" className={styles.logo}>
            <Zap size={20} className={styles.logoIcon} />
            <span>AgentAI</span>
          </Link>
          <h1 className={styles.title}>Create your account</h1>
          <p className={styles.subtitle}>Start building with AI agents for free</p>
        </div>

        {error && (
          <div className={styles.errorBanner}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrap}>
              <input
                type={showPass ? 'text' : 'password'}
                className={styles.input}
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPass(!showPass)}
                tabIndex={-1}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {strength.level > 0 && (
              <div className={styles.strengthBar}>
                <div className={styles.strengthTrack}>
                  {[1, 2, 3, 4].map((lvl) => (
                    <div
                      key={lvl}
                      className={styles.strengthSegment}
                      style={{
                        background: lvl <= strength.level ? strength.color : 'var(--color-border)',
                      }}
                    />
                  ))}
                </div>
                <span style={{ color: strength.color }} className={styles.strengthLabel}>
                  {strength.label}
                </span>
              </div>
            )}
          </div>

          <div className={styles.terms}>
            <CheckCircle size={14} className={styles.termsIcon} />
            <span>By registering, you agree to our Terms of Service and Privacy Policy</span>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? <span className={styles.spinner} /> : 'Create account'}
          </button>
        </form>

        <p className={styles.switchText}>
          Already have an account?{' '}
          <Link to="/login" className={styles.switchLink}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
