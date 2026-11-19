const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text and turns *word* into <strong>word</strong>. Used for headline emphasis. */
export const rich = (s: string) => escape(s).replace(/\*([^*]+)\*/g, '<strong>$1</strong>');

/** Plain version of a rich headline, for meta tags and aria labels. */
export const plain = (s: string | string[]) => (Array.isArray(s) ? s.join(' ') : s).replace(/\*/g, '');

/** Formats a GBP integer amount consistently across both languages, e.g. "£399". */
export const price = (amount: number, _lang?: 'fa' | 'en') => `£${amount.toLocaleString('en-GB')}`;
