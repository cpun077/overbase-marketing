import {
  BankIcon,
  DesktopTowerIcon,
  HandshakeIcon,
  MegaphoneIcon,
  ScalesIcon,
  UmbrellaIcon,
} from "phosphor-svelte";
import { industryNavigationItems, type IndustryId } from "$lib/industries/industryNavigation";
import type { Component } from "svelte";

export const homeIndustries = [
  {
    ...industryNavigationItems[0],
    icon: UmbrellaIcon,
    heroProofLabel: "See how commercial brokers use Overbase",
  },
  {
    ...industryNavigationItems[1],
    icon: ScalesIcon,
    heroProofLabel: "See how law firms use Overbase",
  },
  {
    ...industryNavigationItems[2],
    icon: BankIcon,
    heroProofLabel: "See how bankers use Overbase",
  },
  {
    ...industryNavigationItems[3],
    icon: HandshakeIcon,
    heroProofLabel: "See how consulting firms use Overbase",
  },
  {
    ...industryNavigationItems[4],
    icon: DesktopTowerIcon,
    heroProofLabel: "See how tech consulting firms use Overbase",
  },
  {
    ...industryNavigationItems[5],
    icon: MegaphoneIcon,
    heroProofLabel: "See how agencies use Overbase",
  },
] as const satisfies ReadonlyArray<{
  id: IndustryId;
  label: string;
  href: string;
  icon: Component;
  heroProofLabel: string;
}>;

export type HomeIndustry = (typeof homeIndustries)[number];
export type HomeIndustryId = HomeIndustry["id"];
