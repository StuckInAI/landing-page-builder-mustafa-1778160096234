import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import clsx from 'clsx';
import styles from './Navbar.module.css';
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

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setScrolled(window.scrollY > 20);
    };
  }

  return (
    <header className={clsx(styles.navbar, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <Zap size={22} className={styles.logoIcon} />
          <span>Launchpad</span>
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#" className={styles.loginBtn}>Log in</a>
          <a href="#pricing" className={styles.ctaBtn}>Get Started</a>
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
            <a href="#" className={styles.loginBtn}>Log in</a>
            <a href="#pricing" className={styles.ctaBtn}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
