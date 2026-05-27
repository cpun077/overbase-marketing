import {
  ChartLineUpIcon,
  CloudIcon,
  GraphIcon,
  GoogleLogoIcon,
  MicrosoftExcelLogoIcon,
  MicrosoftOutlookLogoIcon,
  MicrosoftTeamsLogoIcon,
  PhoneCallIcon,
  SignatureIcon,
  SlackLogoIcon,
  SnowflakeIcon,
  UserListIcon,
} from "phosphor-svelte";
import type { Component } from "svelte";

type DataSourceItem = {
  label: string;
  icon: Component;
};

type PartnerDataShare = {
  partnerName: string;
  dataSourceSummary: string;
  dataSourceCoverage: number;
};

export const dataSourceItems = [
  { label: "Salesforce", icon: CloudIcon },
  { label: "Outlook", icon: MicrosoftOutlookLogoIcon },
  { label: "Snowflake", icon: SnowflakeIcon },
  { label: "Gong", icon: PhoneCallIcon },
  { label: "Excel", icon: MicrosoftExcelLogoIcon },
  { label: "Slack", icon: SlackLogoIcon },
  { label: "Bloomberg", icon: ChartLineUpIcon },
  { label: "DocuSign", icon: SignatureIcon },
  { label: "Teams", icon: MicrosoftTeamsLogoIcon },
  { label: "Gmail", icon: GoogleLogoIcon },
  { label: "HubSpot", icon: GraphIcon },
  { label: "ZoomInfo", icon: UserListIcon },
] as const satisfies readonly DataSourceItem[];

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
