import { Bot, Shield, TestTube, Code2, Share2, Layers } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    id: '1',
    Icon: Bot,
    title: 'Multi-Purpose AI Agents',
    description: 'Specialized agents for code generation, testing, review, debugging, and refactoring — all orchestrated from a single prompt.',
    color: '#6c63ff',
  },
  {
    id: '2',
    Icon: Code2,
    title: 'Prompt-to-Code Pipeline',
    description: 'Describe your intent in plain English. Our agents understand context, language, and best practices to produce production-ready code.',
    color: '#00d4aa',
  },
  {
    id: '3',
    Icon: TestTube,
    title: 'Agentic Testing',
    description: 'Agents automatically generate unit, integration, and edge-case tests for your code — and simulate running them with detailed reports.',
    color: '#8b5cf6',
  },
  {
    id: '4',
    Icon: Shield,
    title: '2FA & Enterprise Security',
    description: 'TOTP-based two-factor authentication, encrypted sessions, and role-based access control to keep your projects safe.',
    color: '#f59e0b',
  },
  {
    id: '5',
    Icon: Share2,
    title: 'Social Media Integrations',
    description: 'Share generated code snippets, test results, and insights directly to Twitter and LinkedIn with one click.',
    color: '#ec4899',
  },
  {
    id: '6',
    Icon: Layers,
    title: 'Project Dashboard',
    description: 'Manage all your projects, review agent interaction history, track test results, and monitor agent runs in one place.',
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
            <span className={styles.highlight}>build with AI agents</span>
          </h2>
          <p className={styles.subheading}>
            A complete agentic platform built for developers who want to move faster
            without sacrificing code quality or security.
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
