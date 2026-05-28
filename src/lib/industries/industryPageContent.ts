type IndustryScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type IndustryPageSection = {
  heading: string;
  body: string;
  screenshot: IndustryScreenshot;
};

export type IndustryPageContent = {
  heading: string;
  introParagraphs: readonly string[];
  sections: readonly IndustryPageSection[];
};

type IndustryScreenshots = readonly [
  setup: IndustryScreenshot,
  emailFormat: IndustryScreenshot,
  opportunityEmail: IndustryScreenshot,
];

type IndustryPageMetadata = {
  heading: string;
  screenshots: IndustryScreenshots;
};

const sharedIntroParagraphs = [
  "Selling with ecosystem partners should create a steady stream of warm, high-fit opportunities that are easier to start and faster to close",
  "But in practice, partnerships rarely work cleanly. Coordination is hard, overlap is hidden, and incentives get in the way. Overbase changes that",
] as const;

const sharedSectionCopy = [
  {
    screenshotIndex: 0,
    heading: "Share data",
    body: "Both you and your partners securely share sales data from wherever it lives. You stay in full control of what accesses what data",
  },
  {
    screenshotIndex: 1,
    heading: "Design email formats",
    body: "Pick what insight you want your team to receive by email. Then design custom email formats that perfectly match how your team is already selling",
  },
  {
    screenshotIndex: 2,
    heading: "Get opportunities by email",
    body: "Your team receives emails with actionable revenue opportunities right in their inbox. Nicely packaged up and with the right people CCed",
  },
] as const satisfies readonly {
  screenshotIndex: 0 | 1 | 2;
  heading: string;
  body: string;
}[];

const buildSections = (
  screenshots: IndustryScreenshots,
): readonly IndustryPageSection[] =>
  sharedSectionCopy.map((section) => ({
    heading: section.heading,
    body: section.body,
    screenshot: screenshots[section.screenshotIndex],
  }));

const industryPages = {
  insurance: {
    heading: "Overbase for insurance",
    screenshots: [
      {
        src: "/screenshots/insurance1.png",
        alt: "Overbase add data source modal showing supported data source categories.",
        width: 2378,
        height: 1620,
      },
      {
        src: "/screenshots/Screenshot%201.png",
        alt: "Overbase generated opportunity email preview.",
        width: 2348,
        height: 1308,
      },
      {
        src: "/screenshots/email.png",
        alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
        width: 1408,
        height: 1190,
      },
    ],
  },
  law: {
    heading: "Overbase for law firms",
    screenshots: [
      {
        src: "/screenshots/law1.png",
        alt: "Overbase add data source modal showing supported data source categories.",
        width: 2378,
        height: 1570,
      },
      {
        src: "/screenshots/Screenshot%201.png",
        alt: "Overbase generated opportunity email preview.",
        width: 2348,
        height: 1308,
      },
      {
        src: "/screenshots/email.png",
        alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
        width: 1408,
        height: 1190,
      },
    ],
  },
  finance: {
    heading: "Overbase for finance",
    screenshots: [
      {
        src: "/screenshots/finance1.png",
        alt: "Overbase add data source modal showing supported data source categories.",
        width: 2378,
        height: 1620,
      },
      {
        src: "/screenshots/Screenshot%201.png",
        alt: "Overbase generated opportunity email preview.",
        width: 2348,
        height: 1308,
      },
      {
        src: "/screenshots/email.png",
        alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
        width: 1408,
        height: 1190,
      },
    ],
  },
  consulting: {
    heading: "Overbase for consulting firms",
    screenshots: [
      {
        src: "/screenshots/consulting1.png",
        alt: "Overbase add data source modal showing supported data source categories.",
        width: 2378,
        height: 1620,
      },
      {
        src: "/screenshots/Screenshot%201.png",
        alt: "Overbase generated opportunity email preview.",
        width: 2348,
        height: 1308,
      },
      {
        src: "/screenshots/email.png",
        alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
        width: 1408,
        height: 1190,
      },
    ],
  },
  tech: {
    heading: "Overbase for tech consulting",
    screenshots: [
      {
        src: "/screenshots/consulting1.png",
        alt: "Overbase add data source modal showing supported data source categories.",
        width: 2378,
        height: 1620,
      },
      {
        src: "/screenshots/Screenshot%201.png",
        alt: "Overbase generated opportunity email preview.",
        width: 2348,
        height: 1308,
      },
      {
        src: "/screenshots/email.png",
        alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
        width: 1408,
        height: 1190,
      },
    ],
  },
  marketing: {
    heading: "Overbase for agencies",
    screenshots: [
      {
        src: "/screenshots/marketing1.png",
        alt: "Overbase add data source modal showing supported data source categories.",
        width: 2378,
        height: 1620,
      },
      {
        src: "/screenshots/Screenshot%201.png",
        alt: "Overbase generated opportunity email preview.",
        width: 2348,
        height: 1308,
      },
      {
        src: "/screenshots/email.png",
        alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
        width: 1408,
        height: 1190,
      },
    ],
  },
} as const satisfies Record<string, IndustryPageMetadata>;

type IndustryPageId = keyof typeof industryPages;

const isIndustryPageId = (industryId: string): industryId is IndustryPageId =>
  industryId in industryPages;

export const getIndustryPageContent = (
  industryId: string,
): IndustryPageContent | null => {
  if (!isIndustryPageId(industryId)) {
    return null;
  }

  const page = industryPages[industryId];

  return {
    heading: page.heading,
    introParagraphs: sharedIntroParagraphs,
    sections: buildSections(page.screenshots),
  };
};
