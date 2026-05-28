type PartnerDataShare = {
  partnerName: string;
  dataSourceSummary: string;
  dataSourceCoverage: number;
};

export const partnerDataShares = [
  {
    partnerName: "Kensington, Blake & Thorne",
    dataSourceSummary: "all data sources",
    dataSourceCoverage: 1,
  },
  {
    partnerName: "Caldwell, Cross & Keating",
    dataSourceSummary: "5 data sources",
    dataSourceCoverage: 0.69,
  },
  {
    partnerName: "Brightfield Partners",
    dataSourceSummary: "2 data sources",
    dataSourceCoverage: 0.14,
  },
] as const satisfies readonly PartnerDataShare[];
