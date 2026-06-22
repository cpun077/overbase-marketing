import {
  homeIndustries,
  type HomeIndustry,
  type HomeIndustryId,
} from "../../industryContent";

const renewalOpportunityEmail = `Hi Stephen,

A whitespace analysis for the Exterra renewal is attached.

We identified new policies worth $400,000 which you might propose at your renewal meeting next month.

Each proposed policy has a benchmark. Those were calculated with data from Allianz and Chubb. The right people from both carriers are CCed.`;

const lawFirmOpportunityEmail = `Hi Shayne,
Hi Laura,

An activist hedge fund bought a 5% stake in ADP.

You might want to see if this could be relevant to one of your attorneys, Shayne. And to one of your bankers, Laura.

Discussion in a Bloomberg forum:
https://blinks.bloomberg.com/rooms/IB_ROOM_ID_98725`;

const governmentRelationsOpportunityEmail = `Hi Ray,

Check out this new proposed tax credit program in Arizona:
https://azleg.gov/active-bills/5858hggj

The bill will be voted on in two weeks and there might be an opportunity to help Plug Power submit comments during rulemaking. Plug Power has 2 factories in Arizona.

Jackson Reinstein knows Plug Power's VP Strategy. And Sagar Agrawal knows their COO.`;

const consultingOpportunityEmail = `Hey Alex,

You're working the pitch for JPMC and Jack London (CCed) in our NYC office pitched them JPMC.

I attached the PDF of the final proposal Jack submitted to them. As well as other docs which might give useful context for your pitch.

There's also a proposal our partner Thoughtworks submitted to them last month.`;

const accountingOpportunityEmail = `Hi Ethan,

You have a meeting with Juan Mendoza at PepsiCo. Nicolas wants us to "bring the firm" to client meetings where we can.

Consider inviting Ajay Agrawal from the Sustainability & ESG Assurance team. He can help PepsiCo look at their data pipelines for upcoming climate disclosure rules.

The Food and Beverage sector has seen more ESG reporting requirements lately, and PepsiCo has been buying new carbon-accounting and tracking software.`;

const opportunityEmailByIndustryId = {
  insurance: renewalOpportunityEmail,
  law: lawFirmOpportunityEmail,
  "government-relations": governmentRelationsOpportunityEmail,
  consulting: consultingOpportunityEmail,
  accounting: accountingOpportunityEmail,
} as const satisfies Record<HomeIndustryId, string>;

export type OpportunityIndustry = HomeIndustry & {
  email: string;
};

export type OpportunityIndustryId = HomeIndustryId;

export const opportunityIndustries = homeIndustries.map((industry) => ({
  ...industry,
  email: opportunityEmailByIndustryId[industry.id],
})) satisfies readonly OpportunityIndustry[];
