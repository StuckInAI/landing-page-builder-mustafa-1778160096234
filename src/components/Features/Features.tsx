import { Zap, Shield, Globe, Code2, BarChart3, Layers } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    id: '1',
    Icon: Zap,
    title: 'Blazing Fast Performance',
    description: 'Optimized infrastructure ensures sub-second response times and 99.99% uptime SLA across all regions.',
    color: '#6c63ff',
  },
  {
    id: '2',
    Icon: Shield,
    title: 'Enterprise-grade Security',
    description: 'SOC2 Type II certified with end-to-end encryption, SSO, and advanced role-based access control.',
    color: '#00d4aa',
  },
  {
    id: '3',
    Icon: Globe,
    title: 'Global Edge Network',
    description: 'Deploy to 200+ edge locations worldwide. Your users always connect to the nearest node automatically.',
    color: '#8b5cf6',
  },
  {
    id: '4',
    Icon: Code2,
    title: 'Developer-First DX',
    description: 'Git-based workflows, CLI tools, and API-first design so your team can move at the speed of thought.',
    color: '#f59e0b',
  },
  {
    id: '5',
    Icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Built-in observability with live dashboards, error tracking, and performance insights out of the box.',
    color: '#ec4899',
  },
  {
    id: '6',
    Icon: Layers,
    title: 'Seamless Integrations',
    description: '300+ native integrations with your favorite tools. Slack, GitHub, Linear, Jira, and more.',
    color: '#06b6d4',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Features</span>
          <h2 className={styles.heading}>
            Everything you need to
            <br />
            <span className={styles.highlight}>build great products</span>
          </h2>
          <p className={styles.subheading}>
            A complete platform built for modern development teams who demand
            the best tools without the operational overhead.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}30` }}
              >
                <feature.Icon size={22} color={feature.color} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
