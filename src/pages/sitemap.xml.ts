import type { APIRoute } from 'astro';
import { href, langMeta, languages, type Lang } from '@/i18n';
import { site, visible } from '@/data/site';
import { services } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { posts, translationOf } from '@/data/blog';
import { locationPages } from '@/data/locations';
import { legalNav } from '@/data/navigation';

/** A sitemap entry: one URL per language that exists, linked with hreflang. */
type Entry = Partial<Record<Lang, string>>;

const both = (path: string): Entry => Object.fromEntries(languages.map((l) => [l, href(l, path)]));

export const GET: APIRoute = () => {
  const entries: Entry[] = [
    both(''),
    both('services'),
    ...services.map((s) => both(s.slug)),
    ...locationPages.map((l) => both(`${l.service}/${l.city}`)),
    both('work'),
    // sample case studies are noindex — keep them out until they are real
    ...caseStudies.filter((c) => !c.sample).map((c) => both(`work/${c.slug}`)),
    both('pricing'),
    both('about'),
    both('blog'),
    both('contact'),
    ...legalNav.map((l) => both(`legal/${l.slug}`)),
  ];

  // Posts: only languages that actually have the article
  const seen = new Set<string>();
  for (const p of visible(posts)) {
    if (seen.has(p.key + p.lang)) continue;
    const entry: Entry = { [p.lang]: href(p.lang, `blog/${p.slug}`) };
    const tr = translationOf(p);
    if (tr && (site.showSampleContent || !tr.sample)) {
      entry[tr.lang] = href(tr.lang, `blog/${tr.slug}`);
      seen.add(tr.key + tr.lang);
    }
    seen.add(p.key + p.lang);
    entries.push(entry);
  }

  const abs = (p: string) => new URL(p, site.url).toString();
  const urls = entries.flatMap((entry) => {
    const langs = Object.keys(entry) as Lang[];
    const alternates =
      langs.length > 1
        ? [
            ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${langMeta[l].hreflang}" href="${abs(entry[l]!)}"/>`),
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(entry[site.xDefaultLang] ?? entry[langs[0]]!)}"/>`,
          ].join('\n')
        : '';
    return langs.map((l) => `  <url>\n    <loc>${abs(entry[l]!)}</loc>\n${alternates}\n  </url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
