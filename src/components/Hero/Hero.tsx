import { ArrowRight, Play, Star } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <Star size={12} fill="currentColor" />
          <span>Trusted by 50,000+ developers worldwide</span>
        </div>

        <h1 className={styles.heading}>
          Build Faster,
          <br />
          <span className={styles.highlight}>Ship Smarter</span>
        </h1>

        <p className={styles.description}>
          The all-in-one platform that supercharges your development workflow.
          From idea to production in record time — with zero compromise on quality.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>
            Start for free
            <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className={styles.secondaryBtn}>
            <span className={styles.playIcon}>
              <Play size={14} fill="currentColor" />
            </span>
            See how it works
          </a>
        </div>

        <div className={styles.meta}>
          <div className={styles.avatars}>
            {['A', 'B', 'C', 'D'].map((l) => (
              <div key={l} className={styles.avatar}>{l}</div>
            ))}
          </div>
          <div className={styles.metaText}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span>4.9/5 from 2,000+ reviews</span>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.dots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.cardTitle}>dashboard.tsx</span>
          </div>
          <div className={styles.codeBlock}>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>1</span>
              <span className={styles.kw}>import</span>
              <span className={styles.normal}> &#123; Launchpad &#125; </span>
              <span className={styles.kw}>from</span>
              <span className={styles.str}> 'launchpad'</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>2</span>
              <span className={styles.normal}>&nbsp;</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>3</span>
              <span className={styles.kw}>export default function</span>
              <span className={styles.fn}> App</span>
              <span className={styles.normal}>() &#123;</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>4</span>
              <span className={styles.normal}>&nbsp;&nbsp;</span>
              <span className={styles.kw}>return</span>
              <span className={styles.normal}> &lt;</span>
              <span className={styles.tag}>Launchpad</span>
              <span className={styles.normal}> /&gt;</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>5</span>
              <span className={styles.normal}>&#125;</span>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.statusDot} />
            <span>Deployed in 1.2s</span>
            <span className={styles.cardBadge}>✓ Live</span>
          </div>
        </div>
      </div>
    </section>
  );
}
