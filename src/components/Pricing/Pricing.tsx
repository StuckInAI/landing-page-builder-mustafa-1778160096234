import { Check, X } from 'lucide-react';
import clsx from 'clsx';
import styles from './Pricing.module.css';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for personal projects and getting started.',
    features: [
      '3 projects',
      '100 GB bandwidth',
      'Community support',
      'Basic analytics',
      'Shared infrastructure',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Everything you need to build and scale serious applications.',
    features: [
      'Unlimited projects',
      '1 TB bandwidth',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      'Preview environments',
      'Team collaboration',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Dedicated infrastructure and white-glove support for large teams.',
    features: [
      'Everything in Pro',
      'Unlimited bandwidth',
      'Dedicated support',
      'SLA guarantee',
      'SSO & SAML',
      'Custom integrations',
      'Audit logs',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Pricing</span>
          <h2 className={styles.heading}>
            Simple, transparent
            <br />
            <span className={styles.highlight}>pricing for everyone</span>
          </h2>
          <p className={styles.subheading}>
            Start free, upgrade when you need to. No hidden fees, no surprises.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} className={clsx(styles.card, plan.highlighted && styles.highlighted)}>
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{plan.price}</span>
                  {plan.period && <span className={styles.period}>{plan.period}</span>}
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.id === 'starter' && (
                  <li className={clsx(styles.featureItem, styles.disabled)}>
                    <X size={16} className={styles.xIcon} />
                    <span>Preview environments</span>
                  </li>
                )}
              </ul>

              <a
                href="#"
                className={clsx(styles.ctaBtn, plan.highlighted && styles.ctaBtnHighlighted)}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
