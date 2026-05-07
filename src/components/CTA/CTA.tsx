import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.inner}>
          <div className={styles.iconWrap}>
            <Bot size={28} fill="currentColor" />
          </div>
          <h2 className={styles.heading}>
            Ready to build with
            <br />
            <span className={styles.highlight}>AI agents?</span>
          </h2>
          <p className={styles.description}>
            Join thousands of developers already using AgentAI to generate code,
            run tests, and ship faster. Start for free — no credit card required.
          </p>
          <div className={styles.actions}>
            <Link to="/register" className={styles.primaryBtn}>
              Start building for free
              <ArrowRight size={18} />
            </Link>
            <Link to="/login" className={styles.secondaryBtn}>
              Sign in
            </Link>
          </div>
          <p className={styles.disclaimer}>
            Free forever on Starter. Upgrade anytime. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
