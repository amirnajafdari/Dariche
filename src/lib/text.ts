const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text and turns *word* into <strong>word</strong>. Used for headline emphasis. */
export const rich = (s: string) => escape(s).replace(/\*([^*]+)\*/g, '<strong>$1</strong>');

/** Plain version of a rich headline, for meta tags and aria labels. */
export const plain = (s: string | string[]) => (Array.isArray(s) ? s.join(' ') : s).replace(/\*/g, '');

/** "£1,950" in either language */
export const price = (amount: number, lang: 'fa' | 'en') => {
  const s = `£${amount.toLocaleString('en-GB')}`;
  return lang === 'fa' ? s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]).replace(/,/g, '٬') : s;
};
