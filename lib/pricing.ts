export interface PricingTier {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: {
    requests: string;
    rateLimit: string;
    apis: string;
    support: string;
    sla: string;
  };
  popular?: boolean;
  cta: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Free",
    price: {
      monthly: 0,
      annual: 0,
    },
    features: {
      requests: "100/month",
      rateLimit: "10/min",
      apis: "All 9",
      support: "Community",
      sla: "—",
    },
    cta: "Get Started",
  },
  {
    name: "Starter",
    price: {
      monthly: 29,
      annual: 232, // 20% discount
    },
    features: {
      requests: "5,000/month",
      rateLimit: "60/min",
      apis: "All 9",
      support: "Email",
      sla: "—",
    },
    popular: true,
    cta: "Contact Us",
  },
  {
    name: "Pro",
    price: {
      monthly: 99,
      annual: 792, // 20% discount
    },
    features: {
      requests: "25,000/month",
      rateLimit: "300/min",
      apis: "All 9",
      support: "Priority",
      sla: "99.9%",
    },
    cta: "Contact Us",
  },
  {
    name: "Enterprise",
    price: {
      monthly: 0, // Custom pricing
      annual: 0,
    },
    features: {
      requests: "Unlimited",
      rateLimit: "Custom",
      apis: "All 9",
      support: "Dedicated",
      sla: "Custom",
    },
    cta: "Contact Us",
  },
];

export const PRICING_FAQ = [
  {
    question: "What happens when I exceed my plan's request limit?",
    answer: "Requests will return a 429 error (rate limited). You can upgrade your plan at any time to increase your limits, or wait for the next billing cycle.",
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee on all paid plans. Contact us if you're not satisfied.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards through Stripe. Enterprise customers can pay by invoice.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees, ever. The price you see is the price you pay.",
  },
  {
    question: "How does the API key work across all services?",
    answer: "One API key gives you access to all 9 APIs. Your request limits and rate limits are shared across all APIs.",
  },
];