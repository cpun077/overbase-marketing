export type AboutPageContent = {
  title: string;
  paragraphs: readonly string[];
  careersLink: {
    leadIn: string;
    label: string;
    href: string;
  };
};

export const aboutPageContent = {
  title: 'About',
  paragraphs: [
    'We are machine learning engineers who have been building sales tech together for over 10 years',
    'We work exclusively with the best and most client-focused professional services firms',
    'We believe business software should be invisible. And we believe that sales tech should let companies be more client-focused rather than distract them from what truly matters'
  ],
  careersLink: {
    leadIn: "If you'd like to join us, check out",
    label: 'our open roles',
    href: '/careers'
  }
} as const satisfies AboutPageContent;
