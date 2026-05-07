export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  Icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  title: string;
  description: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface AgentRun {
  id: string;
  projectId: string;
  prompt: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  result?: string;
  createdAt: string;
}
