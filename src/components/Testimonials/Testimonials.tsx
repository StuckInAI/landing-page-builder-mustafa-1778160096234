import styles from './Testimonials.module.css';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'AgentAI cut our sprint time in half. The code generation agent understands context so well that we barely need to edit the output.',
    author: 'Sarah Chen',
    role: 'Senior Engineer @ Vercel',
    avatar: 'SC',
  },
  {
    id: '2',
    text: 'The agentic testing feature is a game changer. It writes tests I would have missed and simulates edge cases automatically.',
    author: 'Marcus Johnson',
    role: 'CTO @ StartupXYZ',
    avatar: 'MJ',
  },
  {
    id: '3',
    text: 'Finally a platform that understands developer workflow. From prompt to PR-ready code in minutes, not hours.',
    author: 'Priya Patel',
    role: 'Lead Developer @ Stripe',
    avatar: 'PP',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.heading}>
            Loved by
            <br />
            <span className={styles.highlight}>developers</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <p className={styles.quote}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <p className={styles.authorName}>{t.author}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
