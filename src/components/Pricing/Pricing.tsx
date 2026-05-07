import { Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Pricing.module.css';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    billingPeriod: 'forever',
    description: 'Perfect for side projects and experimentation.',
    features: [
      '3 projects',
      '50 agent runs / month',
      'Code generation agent',
      'Community support',
      '100 MB storage',
    ],
    ctaLabel: 'Get started free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    billingPeriod: 'month',
    description: 'For professional developers who ship fast.',
    features: [
      'Unlimited projects',
      '2,000 agent runs / month',
      'All 5 agent types',
      'Priority support',
      '10 GB storage',
      'Social sharing integrations',
      'Advanced analytics',
    ],
    highlighted: true,
    ctaLabel: 'Start Pro trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    billingPeriod: 'month',
    description: 'For teams and organizations at scale.',
    features: [
      'Everything in Pro',
      'Unlimited agent runs',
      'Custom agent workflows',
      'SSO & SAML',
      'Dedicated success manager',
      'SLA guarantee',
      '99.99% uptime',
    ],
    ctaLabel: 'Contact sales',
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
            <span className={styles.highlight}>pricing</span>
          </h2>
          <p className={styles.subheading}>
            Start for free. Upgrade when you need more power.
            No hidden fees, no surprises.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(styles.card, plan.highlighted && styles.cardHighlighted)}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>
                  <Zap size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}
              <div className={styles.cardTop}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>/{plan.billingPeriod}</span>
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/register"
                className={clsx(styles.cta, plan.highlighted && styles.ctaHighlighted)}
              >
                {plan.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
