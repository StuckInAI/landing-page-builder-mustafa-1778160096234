import { ArrowRight, Play, Star, Bot, Cpu, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          <Bot size={12} />
          <span>Multi-agent AI coding platform for developers</span>
        </div>

        <h1 className={styles.heading}>
          Code Smarter with
          <br />
          <span className={styles.highlight}>Agentic AI</span>
        </h1>

        <p className={styles.description}>
          Describe what you want to build. Our multi-purpose AI agents generate production-ready code,
          write comprehensive tests, review your codebase, and debug issues — all from a single prompt.
        </p>

        <div className={styles.actions}>
          <Link to="/register" className={styles.primaryBtn}>
            Start building for free
            <ArrowRight size={18} />
          </Link>
          <a href="#how-it-works" className={styles.secondaryBtn}>
            <span className={styles.playIcon}>
              <Play size={14} fill="currentColor" />
            </span>
            See how it works
          </a>
        </div>

        <div className={styles.agentBadges}>
          <div className={styles.agentBadge}>
            <Bot size={14} className={styles.agentIcon} style={{ color: '#6c63ff' }} />
            <span>Code Generation</span>
          </div>
          <div className={styles.agentBadge}>
            <TestTube size={14} className={styles.agentIcon} style={{ color: '#00d4aa' }} />
            <span>Agentic Testing</span>
          </div>
          <div className={styles.agentBadge}>
            <Cpu size={14} className={styles.agentIcon} style={{ color: '#f59e0b' }} />
            <span>Code Review & Debug</span>
          </div>
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
            <span>4.9/5 from 2,000+ developer reviews</span>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.dots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.cardTitle}>AgentAI — Code Generator</span>
          </div>
          <div className={styles.codeBlock}>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>▶</span>
              <span className={styles.str}>"Build a REST API with auth, rate limiting, and Swagger docs"</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}> </span>
              <span className={styles.normal}>&nbsp;</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>🤖</span>
              <span className={styles.kw}>Agent:</span>
              <span className={styles.normal}> Analyzing prompt...</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}> </span>
              <span className={styles.fn}>✓ Scaffolding Express server</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}> </span>
              <span className={styles.fn}>✓ Generating JWT auth middleware</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}> </span>
              <span className={styles.fn}>✓ Adding rate limiter</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}> </span>
              <span className={styles.fn}>✓ Writing Swagger/OpenAPI spec</span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}> </span>
              <span className={styles.tag}>✓ Generating 24 test cases</span>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.statusDot} />
            <span>Generated in 3.2s</span>
            <span className={styles.cardBadge}>✓ Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
