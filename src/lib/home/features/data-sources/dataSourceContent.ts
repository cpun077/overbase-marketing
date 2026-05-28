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
