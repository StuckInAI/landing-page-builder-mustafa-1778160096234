import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const footerLinks = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Projects', href: '/dashboard' },
      { label: 'Settings', href: '/settings' },
      { label: 'API Reference', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <Zap size={20} className={styles.logoIcon} />
              <span>AgentAI</span>
            </Link>
            <p className={styles.tagline}>
              The prompt-based coding platform powered by multi-purpose AI agents for developers.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className={styles.social} aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className={styles.social} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            {footerLinks.map((col) => (
              <div key={col.heading} className={styles.col}>
                <h4 className={styles.colHeading}>{col.heading}</h4>
                <ul className={styles.colLinks}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className={styles.colLink}>{link.label}</Link>
                      ) : (
                        <a href={link.href} className={styles.colLink}>{link.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} AgentAI, Inc. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built with ❤️ for developers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
