// Language system. Persian is primary; English (UK) is secondary.
// Finglish is deliberately NOT a language here — it lives only in SEO data (see src/data/seo.ts).

export const languages = ['fa', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'fa';

/** A value that exists in both languages. Every CMS-facing field uses this shape. */
export type Localized<T = string> = Record<Lang, T>;

export const langMeta: Record<Lang, { dir: 'rtl' | 'ltr'; htmlLang: string; hreflang: string; ogLocale: string; label: string }> = {
  fa: { dir: 'rtl', htmlLang: 'fa', hreflang: 'fa', ogLocale: 'fa_IR', label: 'FA' },
  en: { dir: 'ltr', htmlLang: 'en-GB', hreflang: 'en-GB', ogLocale: 'en_GB', label: 'EN' },
};

export const otherLang = (lang: Lang): Lang => (lang === 'fa' ? 'en' : 'fa');

export const isLang = (value: unknown): value is Lang => languages.includes(value as Lang);

/** Build a localised path with trailing slash, e.g. href('fa', 'web-design') → /fa/web-design/ */
export function href(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const [base, hash] = clean.split('#');
  const url = base ? `/${lang}/${base}/` : `/${lang}/`;
  return hash ? `${url}#${hash}` : url;
}

/** Persian digits for display. Data stays in Latin digits. */
export function num(lang: Lang, value: string | number): string {
  const s = String(value);
  if (lang !== 'fa') return s;
  return s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]).replace(/,/g, '٬');
}

export const getStaticLangPaths = () => languages.map((lang) => ({ params: { lang } }));

export function formatDate(lang: Lang, iso: string): string {
  return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
}
