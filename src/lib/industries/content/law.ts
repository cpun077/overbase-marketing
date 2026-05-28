import type { IndustryContentDefinition } from "../types";

export const lawContent = {
  heading: "Overbase for law firms",
  screenshots: {
    setup: {
      src: "/screenshots/law1.png",
      alt: "Overbase add data source modal showing supported data source categories.",
      width: 2216,
      height: 1470,
    },
    opportunityGroups: [
      {
        emailFormat: {
          src: "/screenshots/law2.png",
          alt: "Overbase generated opportunity email preview.",
          width: 2348,
          height: 1560,
        },
        opportunityEmail: {
          src: "/screenshots/law3.png",
          alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
          width: 1408,
          height: 677,
        },
      },
    ],
  },
} satisfies IndustryContentDefinition;
