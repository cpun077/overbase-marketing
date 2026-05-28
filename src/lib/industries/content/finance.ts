import type { IndustryContentDefinition } from "../types";

export const financeContent = {
  heading: "Overbase for finance",
  screenshots: {
    setup: {
      src: "/screenshots/finance1.png",
      alt: "Overbase add data source modal showing supported data source categories.",
      width: 2226,
      height: 1498,
    },
    opportunityGroups: [
      {
        emailFormat: {
          src: "/screenshots/Screenshot%201.png",
          alt: "Overbase generated opportunity email preview.",
          width: 2348,
          height: 1308,
        },
        opportunityEmail: {
          src: "/screenshots/finance3.png",
          alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
          width: 1408,
          height: 677,
        },
      },
    ],
  },
} satisfies IndustryContentDefinition;
