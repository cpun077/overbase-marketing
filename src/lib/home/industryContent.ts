import {
  BankIcon,
  DesktopTowerIcon,
  HandshakeIcon,
  MegaphoneIcon,
  ScalesIcon,
  UmbrellaIcon,
} from "phosphor-svelte";
import type { Component } from "svelte";

export const homeIndustries = [
  {
    id: "insurance",
    label: "Insurance",
    icon: UmbrellaIcon,
    heroProofLabel: "See how commercial brokers use Overbase",
  },
  {
    id: "law",
    label: "Law",
    icon: ScalesIcon,
    heroProofLabel: "See how law firms use Overbase",
  },
  {
    id: "finance",
    label: "Finance",
    icon: BankIcon,
    heroProofLabel: "See how bankers use Overbase",
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: HandshakeIcon,
    heroProofLabel: "See how consulting firms use Overbase",
  },
  {
    id: "tech",
    label: "Tech",
    icon: DesktopTowerIcon,
    heroProofLabel: "See how tech consulting firms use Overbase",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: MegaphoneIcon,
    heroProofLabel: "See how agencies use Overbase",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  label: string;
  icon: Component;
  heroProofLabel: string;
}>;

export type HomeIndustry = (typeof homeIndustries)[number];
export type HomeIndustryId = HomeIndustry["id"];

export const getIndustryHref = (industryId: HomeIndustryId) =>
  `/industries/${industryId}`;
