import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import { useAuthStore } from '@/store/authStore';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setScrolled(window.scrollY > 20);
    };
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={clsx(styles.navbar, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Zap size={22} className={styles.logoIcon} />
          <span>AgentAI</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className={styles.loginBtn}>Dashboard</Link>
              <button onClick={handleLogout} className={styles.ctaBtn}>Log out</button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.loginBtn}>Log in</Link>
              <Link to="/register" className={styles.ctaBtn}>Get Started</Link>
            </>
          )}
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className={styles.loginBtn}>Dashboard</Link>
                <button onClick={handleLogout} className={styles.ctaBtn}>Log out</button>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.loginBtn}>Log in</Link>
                <Link to="/register" className={styles.ctaBtn}>Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
