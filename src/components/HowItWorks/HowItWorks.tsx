import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Connect your repository',
    description: 'Link your GitHub, GitLab, or Bitbucket repository in seconds. We automatically detect your project type and configure everything for you.',
  },
  {
    num: '02',
    title: 'Configure your pipeline',
    description: 'Choose from 50+ pre-built templates or customize your build, test, and deploy pipeline with a simple YAML configuration file.',
  },
  {
    num: '03',
    title: 'Deploy with confidence',
    description: 'Every push triggers an automated pipeline. Preview environments for every PR, instant rollbacks, and zero-downtime deployments.',
  },
  {
    num: '04',
    title: 'Monitor and scale',
    description: 'Real-time metrics, alerts, and auto-scaling ensure your application always performs at its best, no matter the traffic.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>How It Works</span>
          <h2 className={styles.heading}>
            From zero to production
            <br />
            <span className={styles.highlight}>in four simple steps</span>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.numBubble}>{step.num}</div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
