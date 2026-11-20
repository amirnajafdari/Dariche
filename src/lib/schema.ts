import { href, langMeta, type Lang } from '@/i18n';
import { site } from '@/data/site';
import type { QA, Service } from '@/data/services';
import { categoryName, type Post } from '@/data/blog';
import {
  oneOffServices,
  monthlyPackages,
  getServicePricing,
  type ServicePricingItem,
} from '@/data/pricing';

const abs = (path: string) => new URL(path, site.url).toString();
const orgId = `${site.url}/#organization`;

const buildOffer = (item: ServicePricingItem, lang: Lang) => {
  const url = abs(`${href(lang, 'pricing')}${item.anchor}`);
  if (item.kind === 'monthly') {
    return {
      '@type': 'Offer',
      name: item.name[lang],
      description: item.note[lang],
      url,
      priceCurrency: 'GBP',
      price: item.price,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: item.price,
        priceCurrency: 'GBP',
        unitCode: 'MON',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: 1,
          unitCode: 'MON',
        },
      },
    };
  }
  return {
    '@type': 'Offer',
    name: item.name[lang],
    description: item.note[lang],
    url,
    priceCurrency: 'GBP',
    price: item.price,
  };
};

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
  priceRange: '£49–£699',
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

export const serviceSchema = (s: Service, lang: Lang) => {
  const pricing = getServicePricing(s.slug);
  const offers = pricing ? pricing.items.map((item) => buildOffer(item, lang)) : undefined;
  return {
    '@type': 'Service',
    name: s.name[lang],
    serviceType: s.name.en,
    description: s.seo.description[lang],
    url: abs(href(lang, s.slug)),
    provider: { '@id': orgId },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    inLanguage: langMeta[lang].hreflang,
    ...(offers ? { offers: offers.length === 1 ? offers[0] : offers } : {}),
  };
};

export const pricingCatalogSchema = (lang: Lang) => ({
  '@type': 'OfferCatalog',
  name: lang === 'fa' ? 'تعرفه‌های دریچه' : 'Daricheh Pricing',
  url: abs(href(lang, 'pricing')),
  inLanguage: langMeta[lang].hreflang,
  itemListElement: [
    {
      '@type': 'OfferCatalog',
      name: lang === 'fa' ? 'خدمات یک‌باره' : 'One-off Services',
      itemListElement: oneOffServices.map((s) => ({
        '@type': 'Offer',
        name: s.title[lang],
        description: s.summary[lang],
        url: abs(`${href(lang, 'pricing')}#${s.id}`),
        priceCurrency: 'GBP',
        price: s.price,
        itemOffered: {
          '@type': 'Service',
          name: s.title[lang],
          provider: { '@id': orgId },
        },
      })),
    },
    {
      '@type': 'OfferCatalog',
      name: lang === 'fa' ? 'پکیج‌های ماهانه' : 'Monthly Packages',
      itemListElement: monthlyPackages.map((p) => ({
        '@type': 'Offer',
        name: p.fullName[lang],
        description: p.features[lang].join(' · '),
        url: abs(`${href(lang, 'pricing')}#${p.id}`),
        priceCurrency: 'GBP',
        price: p.price,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: p.price,
          priceCurrency: 'GBP',
          unitCode: 'MON',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: 1,
            unitCode: 'MON',
          },
        },
        itemOffered: {
          '@type': 'Service',
          name: p.fullName[lang],
          provider: { '@id': orgId },
        },
      })),
    },
  ],
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

export const articleSchema = (post: Post) => {
  const pageUrl = abs(href(post.lang, `blog/${post.slug}`));
  const authorName = post.author?.en ?? 'Alireza';
  const kw = [
    ...(post.seo?.primaryKeyword ? [post.seo.primaryKeyword] : []),
    ...(post.seo?.secondaryKeywords ?? []),
    ...(post.tags ?? []),
  ];
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo?.description ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: langMeta[post.lang].hreflang,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    image: abs(post.cover?.src ?? site.ogImage),
    articleSection: categoryName(post.category, post.lang),
    ...(kw.length ? { keywords: [...new Set(kw)].join(', ') } : {}),
    author: {
      '@type': 'Person',
      name: authorName,
      url: abs(href(post.lang, 'about')),
    },
    publisher: { '@id': orgId },
  };
};

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
