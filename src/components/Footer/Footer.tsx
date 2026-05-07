import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
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
    heading: 'Developers',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'CLI', href: '#' },
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
            <a href="#" className={styles.logo}>
              <Zap size={20} className={styles.logoIcon} />
              <span>Launchpad</span>
            </a>
            <p className={styles.tagline}>
              The platform that helps teams build faster and ship smarter.
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
                      <a href={link.href} className={styles.colLink}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Launchpad, Inc. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built with ❤️ for developers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
