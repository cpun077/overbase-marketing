type IndustryScreenshot = {
  src: string;
  alt: string;
};

type IndustryPageSection = {
  heading: string;
  body: string;
  screenshot: IndustryScreenshot;
};

export type IndustryPageSectionGroup = {
  id: string;
  label: string;
  sections: readonly IndustryPageSection[];
};

export type IndustryPageContent = {
  heading: string;
  introParagraphs: readonly string[];
  sectionSelectorLabel?: string;
  sectionGroups: readonly [IndustryPageSectionGroup, ...IndustryPageSectionGroup[]];
};

const setupScreenshot = {
  src: '/screenshots/Screenshot%202.png',
  alt: 'Overbase format setup showing configurable questions for an opportunity email.'
} satisfies IndustryScreenshot;

const emailPreviewScreenshot = {
  src: '/screenshots/Screenshot%201.png',
  alt: 'Overbase generated opportunity email preview.'
} satisfies IndustryScreenshot;

const rulesScreenshot = {
  src: '/screenshots/Screenshot%203.png',
  alt: 'Overbase workflow showing rules, data sources, and feedback controls.'
} satisfies IndustryScreenshot;

const industryPages = {
  insurance: {
    heading: 'Overbase for insurance teams',
    introParagraphs: [
      'Insurance teams already discuss useful sales context in renewal meetings, broker updates, carrier conversations, policy reviews, and CRM notes.',
      'Overbase helps turn that context into a practical internal opportunity email, so the right producer, broker, carrier contact, or specialist can decide whether there is a useful next step.'
    ],
    sectionSelectorLabel: 'See how Overbase is used by',
    sectionGroups: [
      {
        id: 'brokers',
        label: 'Brokers',
        sections: [
          {
            heading: 'Answer quick questions',
            body: 'Overbase can watch for cues around upcoming renewals, coverage gaps, client changes, benchmark differences, and carrier appetite. The format can be tuned around the questions a broker or producer already asks before a renewal conversation.',
            screenshot: setupScreenshot
          },
          {
            heading: 'Design your email format',
            body: 'When the context is strong enough, Overbase can assemble a concise email with the account, renewal timing, relevant policy area, supporting benchmark or carrier detail, and the people who may need to be involved.',
            screenshot: emailPreviewScreenshot
          },
          {
            heading: 'Set rules and link data',
            body: 'Brokerage teams can adjust which systems matter, which signals should be ignored, and how producer feedback changes future suggestions. That makes the workflow easier to trust than a broad alert feed.',
            screenshot: rulesScreenshot
          }
        ]
      },
      {
        id: 'carriers',
        label: 'Carriers',
        sections: [
          {
            heading: 'Answer quick questions',
            body: 'Overbase can watch for cues across broker updates, appetite conversations, loss trends, renewal plans, and policy benchmarks. The format can be tuned around the questions a carrier team needs answered before engaging a broker or account.',
            screenshot: setupScreenshot
          },
          {
            heading: 'Design your email format',
            body: 'When the context is strong enough, Overbase can assemble a concise email with the broker or account, relevant line of business, supporting appetite or benchmark detail, and the underwriting or distribution contact who may need to weigh in.',
            screenshot: emailPreviewScreenshot
          },
          {
            heading: 'Set rules and link data',
            body: 'Carrier teams can adjust rules around appetite, region, broker relationship, approved data sources, and feedback from distribution or underwriting so suggestions stay grounded in real capacity.',
            screenshot: rulesScreenshot
          }
        ]
      }
    ]
  },
  law: {
    heading: 'Overbase for law firms',
    introParagraphs: [
      'Law firms often have useful growth signals distributed across client meetings, recordings, matter notes, CRM updates, and conversations with bankers or other advisers.',
      'Overbase turns those signals into a restrained internal opportunity email that helps attorneys decide whether a client event deserves follow-up.'
    ],
    sectionGroups: [
      {
        id: 'overview',
        label: 'Overview',
        sections: [
          {
            heading: 'Answer quick questions',
            body: 'Overbase can look for context such as ownership changes, financing activity, executive transitions, disputes, regulatory pressure, or conversations where another practice might be relevant.',
            screenshot: setupScreenshot
          },
          {
            heading: 'Design your email format',
            body: 'The generated email can summarize the event, identify the client or prospect, include the source context, and suggest the attorney, banker, or practice contact who may be best placed to evaluate it.',
            screenshot: emailPreviewScreenshot
          },
          {
            heading: 'Set rules and link data',
            body: 'Rules and feedback let teams narrow the workflow by practice, relationship owner, data source, client sensitivity, and what counts as a useful introduction rather than a generic cross-sell prompt.',
            screenshot: rulesScreenshot
          }
        ]
      }
    ]
  },
  finance: {
    heading: 'Overbase for finance teams',
    introParagraphs: [
      'Coverage teams hear relevant signals in client meetings, market discussions, CRM notes, research workflows, and conversations with legal, product, or industry specialists.',
      'Overbase helps organize that context into internal opportunity emails that are specific enough for a banker or coverage lead to evaluate quickly.'
    ],
    sectionGroups: [
      {
        id: 'overview',
        label: 'Overview',
        sections: [
          {
            heading: 'Answer quick questions',
            body: 'Overbase can be configured around signals such as activist activity, refinancing windows, acquisition intent, capital structure changes, industry pressure, or a client asking repeated questions about a product area.',
            screenshot: setupScreenshot
          },
          {
            heading: 'Design your email format',
            body: 'The email can include the client, relevant event, supporting source, potential specialist, and why the signal might matter now, without asking teams to dig through scattered notes first.',
            screenshot: emailPreviewScreenshot
          },
          {
            heading: 'Set rules and link data',
            body: 'Teams can shape rules around coverage ownership, product relevance, approved data sources, and feedback from bankers so the workflow becomes more precise over time.',
            screenshot: rulesScreenshot
          }
        ]
      }
    ]
  },
  consulting: {
    heading: 'Overbase for consulting firms',
    introParagraphs: [
      'Consulting firms often spot client needs in account meetings, partner conversations, delivery reviews, transcripts, and CRM notes before those needs become a formal scope discussion.',
      'Overbase helps convert that context into an internal opportunity email that makes cross-practice collaboration easier to evaluate.'
    ],
    sectionGroups: [
      {
        id: 'overview',
        label: 'Overview',
        sections: [
          {
            heading: 'Answer quick questions',
            body: 'Overbase can look for repeated client needs, upcoming meetings, delivery risks, industry changes, partner technology signals, or situations where another practice may be helpful.',
            screenshot: setupScreenshot
          },
          {
            heading: 'Design your email format',
            body: 'The email can summarize the client context, explain why a specialist may be relevant, include the meeting or note that triggered the suggestion, and leave room for the account owner to decide.',
            screenshot: emailPreviewScreenshot
          },
          {
            heading: 'Set rules and link data',
            body: 'Rules can reflect account plans, practice boundaries, client preferences, partner programs, and feedback from relationship owners so suggestions stay grounded in how the firm works.',
            screenshot: rulesScreenshot
          }
        ]
      }
    ]
  },
  tech: {
    heading: 'Overbase for tech teams',
    introParagraphs: [
      'Tech teams hear buying signals in implementation calls, support escalations, partner meetings, architecture reviews, recordings, and CRM activity.',
      'Overbase turns that context into internal opportunity emails that help account teams decide whether a modernization, integration, security, or services conversation is worth pursuing.'
    ],
    sectionGroups: [
      {
        id: 'overview',
        label: 'Overview',
        sections: [
          {
            heading: 'Answer quick questions',
            body: 'Overbase can be configured around phrases and patterns such as legacy systems, migration blockers, authentication issues, cloud cost pressure, partner mentions, or repeated implementation friction.',
            screenshot: setupScreenshot
          },
          {
            heading: 'Design your email format',
            body: 'The generated email can include the account, the technical signal, links back to recordings or notes, and the specialist or partner contact who may be relevant.',
            screenshot: emailPreviewScreenshot
          },
          {
            heading: 'Set rules and link data',
            body: 'Teams can tune rules by product area, partner, region, account tier, data source, and feedback so Overbase notices the cues that match the actual sales motion.',
            screenshot: rulesScreenshot
          }
        ]
      }
    ]
  },
  marketing: {
    heading: 'Overbase for marketing teams',
    introParagraphs: [
      'Marketing and agency teams often hear useful signals in client calls, platform partner conversations, commerce reviews, SEO audits, migration planning, CRM notes, and account updates.',
      'Overbase turns those signals into internal opportunity emails that help account leads and specialists decide whether there is a timely service need.'
    ],
    sectionGroups: [
      {
        id: 'overview',
        label: 'Overview',
        sections: [
          {
            heading: 'Answer quick questions',
            body: 'Overbase can be tuned around signals such as site migration, commerce replatforming, CRM cleanup, analytics changes, SEO risk, paid media shifts, or partner-platform activity.',
            screenshot: setupScreenshot
          },
          {
            heading: 'Design your email format',
            body: 'The email can summarize the client, the signal, where it appeared, which specialist could help, and why the timing may matter for the account team.',
            screenshot: emailPreviewScreenshot
          },
          {
            heading: 'Set rules and link data',
            body: 'Rules and feedback help teams avoid noisy alerts by narrowing suggestions to the services, platforms, partners, and client situations that actually fit the agency motion.',
            screenshot: rulesScreenshot
          }
        ]
      }
    ]
  }
} as const satisfies Record<string, IndustryPageContent>;

type IndustryPageId = keyof typeof industryPages;

const isIndustryPageId = (industryId: string): industryId is IndustryPageId =>
  industryId in industryPages;

export const getIndustryPageContent = (industryId: string): IndustryPageContent | null => {
  if (!isIndustryPageId(industryId)) {
    return null;
  }

  return industryPages[industryId];
};
