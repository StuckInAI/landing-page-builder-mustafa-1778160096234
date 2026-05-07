import { ArrowRight, Zap } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.inner}>
          <div className={styles.iconWrap}>
            <Zap size={28} fill="currentColor" />
          </div>
          <h2 className={styles.heading}>
            Ready to launch
            <br />
            <span className={styles.highlight}>your next project?</span>
          </h2>
          <p className={styles.description}>
            Join 50,000+ developers already building on Launchpad.
            Start for free — no credit card required.
          </p>
          <div className={styles.actions}>
            <a href="#pricing" className={styles.primaryBtn}>
              Get started for free
              <ArrowRight size={18} />
            </a>
            <a href="#" className={styles.secondaryBtn}>
              Talk to sales
            </a>
          </div>
          <p className={styles.disclaimer}>
            Free forever on Starter. Upgrade anytime. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
