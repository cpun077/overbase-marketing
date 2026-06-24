import type { PortalAuthRoute } from '$lib/portalAuthLinks';
import { industryNavigationItems } from '$lib/industries/industryNavigation';

export type NavLinkItem = {
  label: string;
  href: string;
};

export const mobilePrimaryNavItems = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Survey', href: '/annual-survey' },
] satisfies NavLinkItem[];

export const industryNavItems = industryNavigationItems.map(({ label, href }) => ({
  label,
  href,
})) satisfies NavLinkItem[];

export const desktopPrimaryNavItems = mobilePrimaryNavItems;

export const authNavItems = [
  { label: 'Log in', authRoute: 'login', variant: 'secondary' },
  { label: 'Join', authRoute: 'join', variant: 'primary' },
] satisfies { label: string; authRoute: PortalAuthRoute; variant: 'primary' | 'secondary' }[];
