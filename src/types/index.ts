export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type Stat = {
  value: string;
  label: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
