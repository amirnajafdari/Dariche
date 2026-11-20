import type { Localized } from '@/i18n';
import type { ImageAsset } from './caseStudies';

export interface Founder {
  id: string;
  name: Localized;
  initials: string;
  role: Localized;
  /** Short line for the about page only — no long biographies */
  bio: Localized;
  photo?: ImageAsset;
  /** CSS object-position for framing inside the arched portrait window */
  photoPosition?: string;
  links?: { label: string; url: string }[];
}

export const founders: Founder[] = [
  {
    id: 'amir',
    name: { fa: 'امیر', en: 'Amir' },
    initials: 'A',
    role: { fa: 'هم‌بنیان‌گذار · طراحی و برند', en: 'Co-founder · Design & brand' },
    bio: {
      fa: 'طراحی رو در بریتانیا خونده و بیشتر از هر چیزی به جزئیات حساسه؛ تایپوگرافی، فاصله‌ها، و اینکه یه صفحه چه حسی می‌ده.',
      en: 'Studied design in the UK and cares most about the details: typography, spacing, and how a page feels.',
    },
    photo: {
      src: '/images/founders/amir.webp',
      alt: { fa: 'امیر، هم‌بنیان‌گذار دریچه', en: 'Amir, co-founder of Daricheh' },
      width: 576,
      height: 1024,
    },
    photoPosition: 'center 45%',
  },
  {
    id: 'alireza',
    name: { fa: 'علیرضا', en: 'Alireza' },
    initials: 'A',
    role: { fa: 'هم‌بنیان‌گذار · وب و سئو', en: 'Co-founder · Web & SEO' },
    bio: {
      fa: 'اون هم طراحی رو در بریتانیا خونده، ولی همیشه دوست داشته بدونه پشت صحنه چی می‌گذره؛ از کد تا اینکه گوگل یه صفحه رو چطور می‌بینه.',
      en: "Also studied design in the UK, but always wanted to know what happens behind the scenes — from code to how Google reads a page.",
    },
    photo: {
      src: '/images/founders/alireza.webp',
      alt: { fa: 'علیرضا، هم‌بنیان‌گذار دریچه', en: 'Alireza, co-founder of Daricheh' },
      width: 576,
      height: 1024,
    },
    photoPosition: 'center 45%',
  },
];
