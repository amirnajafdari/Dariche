import type { Localized } from '@/i18n';
import type { ServiceSlug } from './services';

/**
 * City landing pages — intentionally EMPTY at launch.
 *
 * Add an entry only when there is genuine search demand (check Search Console / keyword data first),
 * and write unique copy for each. Never generate pages in bulk.
 *
 * Each entry builds /fa/<service>/<city>/ and /en/<service>/<city>/ using the service template,
 * e.g. { service: 'web-design', city: 'london', ... } → /fa/web-design/london/
 *
 * Example:
 * {
 *   service: 'web-design',
 *   city: 'london',
 *   cityName: { fa: 'لندن', en: 'London' },
 *   title: { fa: 'طراحی سایت ایرانی در لندن | دریچه', en: 'Web Design for Iranian Businesses in London | Daricheh' },
 *   description: { fa: '…', en: '…' },
 *   intro: { fa: '…', en: '…' },
 *   searchPhrases: ['tarahi site london'],
 * }
 */
export interface LocationPage {
  service: ServiceSlug;
  city: string;
  cityName: Localized;
  title: Localized;
  description: Localized;
  /** Unique local copy shown under the hero. Required — no templated filler. */
  intro: Localized;
  searchPhrases?: string[];
}

export const locationPages: LocationPage[] = [];
