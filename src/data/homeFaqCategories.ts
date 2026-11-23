import type { Lang, Localized } from '@/i18n';
import type { QA } from './services';
import { homeFaqs } from './faqs';
import { persianHomeFaqs } from './persianHome';

export interface HomeFaqCategory {
  id: string;
  label: Localized;
  items: QA[];
}

// Reference the original answers so the visible FAQs and FAQPage schema stay in sync.
// Every existing homepage question appears once, in its most relevant category.
export function getHomeFaqCategories(lang: Lang): HomeFaqCategory[] {
  const items = lang === 'fa' ? persianHomeFaqs : homeFaqs.en;
  const groups = [
    { id: 'web-design', label: { fa: 'طراحی سایت', en: 'Web Design' }, indices: lang === 'fa' ? [2, 3, 8] : [2, 3, 7] },
    { id: 'pricing', label: { fa: 'تعرفه‌ها و پکیج‌ها', en: 'Pricing & Packages' }, indices: [0, 1] },
    { id: 'seo', label: { fa: 'سئو و گوگل', en: 'SEO & Google' }, indices: lang === 'fa' ? [4, 6, 7] : [4, 6] },
    { id: 'support', label: { fa: 'همکاری و پشتیبانی', en: 'Working With Us' }, indices: lang === 'fa' ? [5, 9] : [5] },
  ];
  return groups.map(({ indices, ...category }) => ({ ...category, items: indices.map((index) => items[index]) }));
}
