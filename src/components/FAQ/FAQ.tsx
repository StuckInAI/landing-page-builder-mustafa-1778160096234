import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import styles from './FAQ.module.css';
import type { FAQ as FAQType } from '@/types';

const faqs: FAQType[] = [
  {
    id: '1',
    question: 'How does Launchpad compare to other deployment platforms?',
    answer: 'Launchpad combines deployment, monitoring, and collaboration into a single unified platform. Unlike competitors that focus only on hosting, we provide end-to-end tooling from code to production, with integrated analytics and automatic scaling.',
  },
  {
    id: '2',
    question: 'Can I migrate my existing projects to Launchpad?',
    answer: 'Yes! We offer a one-click migration tool that supports projects from Vercel, Netlify, Heroku, AWS, and more. Our team also provides white-glove migration support for Enterprise customers with zero downtime.',
  },
  {
    id: '3',
    question: 'What frameworks and languages does Launchpad support?',
    answer: 'We support all major frameworks including React, Next.js, Vue, Nuxt, Angular, SvelteKit, Astro, and more. For backend services, we support Node.js, Python, Go, Ruby, PHP, Rust, and any Docker-based workload.',
  },
  {
    id: '4',
    question: 'Is there a free plan available?',
    answer: 'Yes! Our Starter plan is free forever with 3 projects and 100 GB of bandwidth. No credit card required. You can upgrade to Pro or Enterprise as your needs grow.',
  },
  {
    id: '5',
    question: 'How does Launchpad handle scaling and traffic spikes?',
    answer: 'Launchpad auto-scales your application instantly based on traffic. Our edge network distributes load across 200+ locations worldwide. You pay only for what you use, with no manual scaling configuration required.',
  },
  {
    id: '6',
    question: 'What kind of support do you offer?',
    answer: 'Starter plans get community forum support. Pro plans get priority email and chat support with 24-hour response times. Enterprise customers get a dedicated success manager, SLA guarantees, and 24/7 phone support.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.heading}>
            Frequently asked
            <br />
            <span className={styles.highlight}>questions</span>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={clsx(styles.item, isOpen && styles.itemOpen)}>
                <button
                  className={styles.question}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
                  />
                </button>
                {isOpen && (
                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
