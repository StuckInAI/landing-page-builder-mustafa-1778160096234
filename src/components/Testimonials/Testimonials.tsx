import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'NovaTech',
    avatar: 'SC',
    quote: 'Launchpad cut our deployment time by 80%. We went from spending hours on ops to focusing entirely on building features. It\'s been a game-changer for our team.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Williams',
    role: 'Lead Engineer',
    company: 'Stackrise',
    avatar: 'MW',
    quote: 'The DX is unparalleled. Auto-preview environments for every PR alone saved us weeks of back-and-forth with QA. I recommend Launchpad to every engineering team I talk to.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya Patel',
    role: 'VP Engineering',
    company: 'Flowbase',
    avatar: 'PP',
    quote: 'Security compliance was our biggest concern. Launchpad\'s SOC2 certification and built-in RBAC made our security audit a breeze. Couldn\'t be happier.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.heading}>
            Loved by teams
            <br />
            <span className={styles.highlight}>around the world</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <Quote size={28} className={styles.quoteIcon} />
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role} at {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsRow}>
          {[
            { value: '50K+', label: 'Developers' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '200+', label: 'Edge Locations' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
