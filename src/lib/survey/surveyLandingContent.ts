export type SurveyLandingLink = {
  label: string;
  href: string;
};

export type SurveyLandingContent = {
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
  introParagraph: string;
  industrySection: {
    heading: string;
    paragraphs: readonly string[];
  };
  methodologySection: {
    heading: string;
    paragraphsBeforeList: readonly string[];
    firmCriteria: readonly string[];
    closingParagraph: string;
  };
  previousListsSection: {
    heading: string;
    description: string;
    links: readonly SurveyLandingLink[];
  };
};

export const surveyLandingContent = {
  metaDescription:
    "Overbase survey of the most innovative CMOs in professional services firms for 2027.",
  hero: {
    eyebrow: "Survey",
    title: "Survey has started for the most innovative CMOs of 2027",
    description:
      "Every year, Overbase surveys the marketing teams in the best professional services firms to find out who are the most innovative CMOs in each industry according to their peers.",
    image: {
      src: "/cmos/group.avif",
      alt: "Innovative CMO survey",
    },
  },
  introParagraph:
    "Every year, Overbase surveys the marketing teams of the best professional services firms to find the most innovative CMOs in each industry.",
  industrySection: {
    heading: "Most innovative CMOs in each industry",
    paragraphs: [
      "Overbase surveys marketing teams from the best insurance brokerages, law firms, government relations firms, consulting firms and accounting firms.",
      "Then we publish a list of the most innovative CMOs in each industry.",
    ],
  },
  methodologySection: {
    heading: "Criteria and methodology",
    paragraphsBeforeList: [
      "We send our survey to each firm's marketing team. Our list is entirely based on the responses to this survey.",
      "We only survey marketing teams from the best firms in each industry:",
    ],
    firmCriteria: [
      "Business Insurance Top 100 insurance brokerages",
      "AmLaw 100 law firms",
      "Top 50 government relations firms by lobbying revenue",
      "Tier 1 and Tier 2 strategy consulting firms",
      "Accounting Today Top 100 accounting firms",
    ],
    closingParagraph:
      "Nothing but survey results from peers is taken into account. And there's no way to request a survey, ask for a firm to be included or nominate a CMO.",
  },
  previousListsSection: {
    heading: "Last year's lists",
    description:
      "+1,200 marketers from the best professional services firms answered our survey last year. Check out last year's lists for each industry.",
    links: [
      {
        label: "Last year's insurance brokerage CMOs ->",
        href: "/annual-survey/2026-insurance-cmos",
      },
      {
        label: "Last year's law firm CMOs ->",
        href: "/annual-survey/2026-law-firm-cmos",
      },
      {
        label: "Last year's government relations firm CMOs ->",
        href: "#",
      },
      {
        label: "Last year's consulting firm CMOs ->",
        href: "#",
      },
      {
        label: "Last year's accounting firm CMOs ->",
        href: "#",
      },
    ],
  },
} as const satisfies SurveyLandingContent;
