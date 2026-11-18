import type { Localized } from '@/i18n';
import type { ImageAsset } from './caseStudies';

export interface Testimonial {
  id: string;
  /** true = placeholder. Real reviews only — never invent quotes. */
  sample?: boolean;
  name: Localized;
  business: Localized;
  quote: Localized;
  image?: ImageAsset;
  caseStudy?: string;
}

// SAMPLE CONTENT — placeholders until real client reviews are collected.
export const testimonials: Testimonial[] = [
  {
    id: 'sample-1',
    sample: true,
    name: { fa: 'نام مشتری', en: 'Client name' },
    business: { fa: 'نام بیزینس، شهر', en: 'Business name, City' },
    quote: {
      fa: 'اینجا جای نظر واقعی یکی از مشتری‌هاست. بعد از اولین پروژه‌ها، با حرف‌های خودشون جایگزین می‌شه.',
      en: "This space is for a real client's words. It will be replaced once the first projects are live.",
    },
  },
  {
    id: 'sample-2',
    sample: true,
    name: { fa: 'نام مشتری', en: 'Client name' },
    business: { fa: 'نام بیزینس، شهر', en: 'Business name, City' },
    quote: {
      fa: 'نظر دوم هم همین‌طور. ترجیح می‌دیم این قسمت خالی بمونه تا اینکه یه نظر ساختگی اینجا باشه.',
      en: "Same for this one. We'd rather leave this empty than fill it with something made up.",
    },
  },
];

export const getTestimonial = (id?: string) => testimonials.find((t) => t.id === id);
