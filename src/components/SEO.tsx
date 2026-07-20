import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  faqs?: FAQ[];
  breadcrumbs?: BreadcrumbItem[];
  noIndex?: boolean;
  serviceSchema?: {
    name: string;
    description: string;
    provider?: string;
    areaServed?: string;
  };
}

const SITE_NAME = "Next Tab Agency";
const BASE_URL = "https://nexttabagency.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.webp`;

/**
 * Per-page SEO metadata injector.
 * Handles <title>, <meta description>, Open Graph, Twitter Card,
 * FAQ schema, BreadcrumbList schema, and Service schema per route.
 * The global LocalBusiness + WebSite schema live in index.html.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  faqs,
  breadcrumbs,
  noIndex,
  serviceSchema,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  // Ensure canonical always uses trailing slash to match prerendered directory structure
  // e.g. /about → https://nexttabagency.com/about/  (avoids 301 redirect in GSC)
  const rawPath = canonical ?? '';
  const normalizedPath =
    rawPath === '' || rawPath === '/'
      ? ''
      : rawPath.endsWith('/')
        ? rawPath
        : `${rawPath}/`;
  const canonicalUrl = `${BASE_URL}${normalizedPath || '/'}`;

  const image = ogImage ?? DEFAULT_OG_IMAGE;

  /* Build JSON-LD blocks */
  const schemas: object[] = [];

  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  if (serviceSchema) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceSchema.name,
      description: serviceSchema.description,
      provider: {
        "@type": "LocalBusiness",
        name: serviceSchema.provider ?? SITE_NAME,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brisbane",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
      },
      areaServed: serviceSchema.areaServed ?? "Australia",
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-AU" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nexttabagency" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {schemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
        </script>
      )}
    </Helmet>
  );
}
