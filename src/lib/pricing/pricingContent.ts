export type PricingPlan = {
  price: string;
  priceLabel: string;
  name: string;
  description: string;
  ctaLabel: string;
  benefits: readonly string[];
};

export type PricingFaqItem = {
  question: string;
  answer: string;
};

export type PricingPageContent = {
  title: string;
  intro: string;
  plan: PricingPlan;
  faqHeading: string;
  faqItems: readonly PricingFaqItem[];
};

export const pricingPageContent = {
  title: "Pricing",
  intro:
    "Our pricing is success based. Pay 5% of the net new revenue we help you generate. And only pay after you get paid",
  plan: {
    price: "5%",
    priceLabel: "of revenue",
    name: "Success based",
    description:
      "Pay 5% of the revenue we help you generate and only pay after you get paid",
    ctaLabel: "Join now",
    benefits: [
      "Unlimited users and unlimited use",
      "Add any and all data sources",
      "Invite as many partners as you want",
    ],
  },
  faqHeading: "Frequently Asked Questions",
  faqItems: [
    {
      question: "Wait, what's your price again?",
      answer:
        "We charge 5% of the net new revenue we help generate. You only pay after you get paid and everything else is free",
    },
    {
      question: "Do my partners pay anything?",
      answer:
        "No. Your ecosystem partners can share any data with you for free through Overbase. They would only pay if they selected to receive revenue opportunities",
    },
    {
      question: "How does success-based pricing work?",
      answer:
        "You pay 5% of the net new revenue we generate together, and you only pay after you get paid. Revenue is attributed by your team in a self-reported way. Typically, companies need to be referred by one of their partners and share their CRM data with us to qualify",
    },
    {
      question: "Are there any upfront costs at all?",
      answer:
        "Some companies pay $25,000 for a proof of concept. You need to share your CRM data to qualify for success-based pricing. Some companies prefer to get familiar with our tech before sharing their CRM data. In these cases, you can pay $25,000 for a proof of concept before transitioning to success-based pricing",
    },
  ],
} as const satisfies PricingPageContent;
