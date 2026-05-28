import type { IndustryContentDefinition } from "../types";

export const techContent = {
  heading: "Overbase for tech consulting",
  screenshots: {
    setup: {
      src: "/screenshots/consulting1.png",
      alt: "Overbase add data source modal showing supported data source categories.",
      width: 2226,
      height: 1500,
    },
    opportunityGroups: [
      {
        emailFormat: {
          src: "/screenshots/tech2.png",
          alt: "Overbase generated opportunity email preview.",
          width: 2348,
          height: 1560,
        },
        opportunityEmail: {
          src: "/screenshots/tech3.png",
          alt: "Gmail opportunity email showing an attached insurance renewal report from Overbase.",
          width: 1408,
          height: 677,
        },
      },
    ],
  },
} satisfies IndustryContentDefinition;
