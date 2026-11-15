import { href, langMeta, type Lang } from '@/i18n';
import { site } from '@/data/site';
import type { QA, Service } from '@/data/services';
import type { Post } from '@/data/blog';

const abs = (path: string) => new URL(path, site.url).toString();
const orgId = `${site.url}/#organization`;

export const organization = (lang: Lang) => ({
  '@type': 'Organization',
  '@id': orgId,
  name: site.name.en,
  alternateName: site.name.fa,
  legalName: site.legalName,
  url: site.url,
  logo: abs('/logo.png'),
  email: site.contact.email,
  telephone: site.contact.phoneHref,
  description: site.description[lang],
  sameAs: site.social.map((s) => s.url),
});

export const professionalService = (lang: Lang) => ({
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#studio`,
  name: site.name[lang],
  url: abs(href(lang)),
  image: abs(site.ogImage),
  telephone: site.contact.phoneHref,
  email: site.contact.email,
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  priceRange: '££',
  knowsLanguage: ['fa', 'en-GB'],
  parentOrganization: { '@id': orgId },
});

export const website = (lang: Lang) => ({
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name[lang],
  inLanguage: [langMeta.fa.hreflang, langMeta.en.hreflang],
  publisher: { '@id': orgId },
});

export const serviceSchema = (s: Service, lang: Lang) => ({
  '@type': 'Service',
  name: s.name[lang],
  serviceType: s.name.en,
  description: s.seo.description[lang],
  url: abs(href(lang, s.slug)),
  provider: { '@id': orgId },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  inLanguage: langMeta[lang].hreflang,
});

/** Only emit when the questions and answers are visible on the page. */
export const faqSchema = (items: QA[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const articleSchema = (post: Post) => ({
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.updated ?? post.date,
  inLanguage: langMeta[post.lang].hreflang,
  mainEntityOfPage: abs(href(post.lang, `blog/${post.slug}`)),
  image: abs(post.cover?.src ?? site.ogImage),
  author: { '@id': orgId },
  publisher: { '@id': orgId },
});

export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
