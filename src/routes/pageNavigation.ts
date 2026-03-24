export type NavPage = 'landing' | 'services' | 'reviews' | 'dashboard' | 'booking';

const pageToPathMap: Record<NavPage, string> = {
  landing: '/',
  services: '/services',
  reviews: '/reviews',
  dashboard: '/dashboard',
  booking: '/booking',
};

export const pageToPath = (page: string): string => {
  return pageToPathMap[page as NavPage] ?? '/';
};

export const pathToPage = (pathname: string): NavPage => {
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/reviews')) return 'reviews';
  if (pathname.startsWith('/dashboard')) return 'dashboard';
  if (pathname.startsWith('/booking')) return 'booking';
  return 'landing';
};
