/**
 * Navigation configuration
 */

import type { NavigationLink } from '../types';

export const MAIN_NAVIGATION: NavigationLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAVIGATION = {
  main: [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal#privacy' },
    { label: 'Terms of Service', href: '/legal#terms' },
  ],
  social: [
    { platform: 'LinkedIn', url: 'https://linkedin.com' },
    { platform: 'Dribbble', url: 'https://dribbble.com' },
    { platform: 'Behance', url: 'https://behance.net' },
    { platform: 'Twitter', url: 'https://twitter.com' },
  ],
};
