export type CareersPageLink = {
  label: string;
  href: string;
};

export type CareersPageContent = {
  title: string;
  paragraphs: readonly string[];
  links: readonly CareersPageLink[];
  closingParagraphs: readonly string[];
};

export const careersPageContent = {
  title: "Careers at Overbase",
  paragraphs: [
    "We only hire engineers. We hire 99.9th percentile most smart people. And we never hire anyone who has experience",
    "Reach out if you're an engineering undergrad at MIT or Stanford. Or a CS undergrad at IIT Bombay/Delhi with an AIR of 1 - 50 in the JEE",
  ],
  links: [
    {
      label: "Product Engineer 1 - USA",
      href: "https://drive.google.com/file/d/1rCa5Q-wEGkV5wYfdNe4tH1Yn8pFnr3WE/view",
    },
    {
      label: "Product Engineer 1 - India",
      href: "https://drive.google.com/file/d/11chLFScixDu3RtAG5jKFw6UphwMp4FMF/view",
    },
  ],
  closingParagraphs: [
    "Overbase is a forward deployed company. We relocate as a group to wherever customers need us most and work together from there",
    "Our comp is well below market and we keep a 997 work schedule. Working here only makes sense if you're focused on pursuing excellence. And if you care deeply about collaborating with your intellectual peers",
  ],
} as const satisfies CareersPageContent;
