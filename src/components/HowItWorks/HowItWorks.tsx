import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Create a project & choose your agent',
    description: 'Sign up, create a project, and select from our multi-purpose agents: Code Generator, Test Agent, Code Reviewer, Debugger, or Refactoring Agent.',
  },
  {
    num: '02',
    title: 'Describe your intent in plain English',
    description: 'Type a natural language prompt describing what you want to build, fix, or test. No special syntax required — just describe the outcome you need.',
  },
  {
    num: '03',
    title: 'Agents generate & test your code',
    description: 'Our orchestration layer routes your prompt to the right agents, which generate code, write tests, review quality, and simulate test runs — automatically.',
  },
  {
    num: '04',
    title: 'Review, share, and iterate',
    description: 'Review results in the interactive editor, share code snippets to Twitter or LinkedIn, and iterate with follow-up prompts until your solution is perfect.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>How It Works</span>
          <h2 className={styles.heading}>
            From prompt to production
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
