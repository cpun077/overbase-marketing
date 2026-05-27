export type PortalAuthRoute = 'login' | 'join';

const PORTAL_ORIGIN = 'https://portal.overbase.app';
const MARKETING_ORIGIN = 'https://overbase.app';

function isSafeRelativePath(path: string) {
  return path.startsWith('/') && !path.startsWith('//');
}

export function createMarketingReturnHref(path: string) {
  if (!isSafeRelativePath(path)) {
    return new URL('/', MARKETING_ORIGIN).href;
  }

  return new URL(path, MARKETING_ORIGIN).href;
}

export function createPortalAuthHref(route: PortalAuthRoute, marketingReturnHref: string) {
  const url = new URL(`/${route}`, PORTAL_ORIGIN);
  url.searchParams.set('returnTo', marketingReturnHref);
  return url.href;
}

export function createPortalAuthHrefForPath(route: PortalAuthRoute, marketingPath: string) {
  return createPortalAuthHref(route, createMarketingReturnHref(marketingPath));
}

export function createPortalAuthHrefForCurrentPage(route: PortalAuthRoute, pageUrl: URL, hash = '') {
  const returnPath = `${pageUrl.pathname}${pageUrl.search}${hash}`;
  return createPortalAuthHref(route, createMarketingReturnHref(returnPath));
}
