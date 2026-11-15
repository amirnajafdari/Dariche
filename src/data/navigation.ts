import type { Localized } from '@/i18n';
import type { ServiceSlug } from './services';

export interface NavItem {
  label: Localized;
  /** Path without language prefix. '' = home */
  path?: string;
  /** Opens the services menu instead of linking */
  menu?: 'services';
}

export const mainNav: NavItem[] = [
  { label: { fa: 'خانه', en: 'Home' }, path: '' },
  { label: { fa: 'خدمات', en: 'Services' }, menu: 'services' },
  { label: { fa: 'نمونه‌کارها', en: 'Work' }, path: 'work' },
  { label: { fa: 'تعرفه‌ها', en: 'Pricing' }, path: 'pricing' },
  { label: { fa: 'درباره ما', en: 'About' }, path: 'about' },
  { label: { fa: 'مقالات', en: 'Journal' }, path: 'blog' },
];

/** Order of the services menu and footer list */
export const serviceMenu: ServiceSlug[] = ['web-design', 'seo', 'local-seo', 'ecommerce', 'website-redesign', 'website-support'];

export const footerNav: NavItem[] = [
  { label: { fa: 'خدمات', en: 'Services' }, path: 'services' },
  { label: { fa: 'نمونه‌کارها', en: 'Work' }, path: 'work' },
  { label: { fa: 'تعرفه‌ها', en: 'Pricing' }, path: 'pricing' },
  { label: { fa: 'درباره ما', en: 'About' }, path: 'about' },
  { label: { fa: 'مقالات', en: 'Journal' }, path: 'blog' },
  { label: { fa: 'تماس', en: 'Contact' }, path: 'contact' },
];

export const legalNav: { slug: 'privacy' | 'cookies' | 'terms'; label: Localized }[] = [
  { slug: 'privacy', label: { fa: 'حریم خصوصی', en: 'Privacy Policy' } },
  { slug: 'cookies', label: { fa: 'کوکی‌ها', en: 'Cookie Policy' } },
  { slug: 'terms', label: { fa: 'شرایط استفاده', en: 'Terms' } },
];
