/** Central SEO configuration for PT Mustika Galuh Cakrawala. */

export const SITE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  "https://ptmgc.co.id";

export const SITE_NAME = "PT Mustika Galuh Cakrawala";
export const SITE_SHORT_NAME = "MGC";
export const SITE_TAGLINE = "Trading & Construction Partner";
export const SITE_LOCALE = "en_ID";

export const SEO_DEFAULTS = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "PT Mustika Galuh Cakrawala (MGC) is an Indonesian trading and construction company delivering procurement, engineering, and project management for industrial, commercial, and infrastructure clients.",
  keywords: [
    "PT Mustika Galuh Cakrawala",
    "MGC",
    "trading company Indonesia",
    "construction company Indonesia",
    "procurement services",
    "engineering support",
    "project management",
    "industrial construction",
    "government contractor Indonesia",
    "Karawang construction",
  ].join(", "),
  ogDescription:
    "Reliable procurement, engineering support, and construction services for enterprise and government clients across Indonesia.",
  twitterDescription:
    "Indonesian trading & construction partner — procurement, engineering, and disciplined project delivery at scale.",
  themeColor: "#163B73",
  ogImage: "/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    "PT Mustika Galuh Cakrawala — Building Enduring Infrastructure. Delivering Trust. Request a Consultation.",
} as const;

/**
 * OG image design criteria (Open Graph / social preview standard)
 *
 * Canvas: 1200 × 630 px (1.91:1) — Facebook, LinkedIn, WhatsApp, X summary_large_image
 * Safe zone: keep logo, headline, and CTA inside central 80% (96 px margins) to avoid platform crop
 * File: JPEG ≤ 300 KB preferred, max 8 MB; sRGB color profile
 *
 * Layout zones:
 * - Left 28%: logo on white circular badge (brand seal, transparent PNG source)
 * - Center-right: eyebrow (gold) → H1 headline (white + gold accent) → subcopy (muted)
 * - Lower center-right: CTA pill button — gold fill (#D39B35), navy text (#163B73), 6 px radius
 * - Footer strip: domain URL in muted tone
 *
 * CTA button (visual in static OG image):
 * - Label: "Request a Consultation" (matches site primary CTA)
 * - Min touch target proportions: height ≥ 48 px, horizontal padding ≥ 28 px
 * - Non-interactive in OG file; real CTA lives on landing page after click-through
 *
 * Background: navy gradient (#0F284E → #163B73), 8 px gold accent bar left edge
 * Typography: bold sans-serif headline stack; high contrast (WCAG AA on navy)
 */
export const OG_IMAGE_DESIGN = {
  width: 1200,
  height: 630,
  aspectRatio: "1.91:1",
  safeMarginPx: 96,
  cta: {
    label: "Request a Consultation",
    background: "#D39B35",
    text: "#163B73",
    borderRadius: 6,
    minHeight: 48,
  },
  colors: {
    navy: "#163B73",
    navyDeep: "#0F284E",
    gold: "#D39B35",
    white: "#FFFFFF",
    muted: "#C8D2E1",
  },
} as const;

export const COMPANY = {
  legalName: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  email: "info@ptmgc.co.id",
  phone: "+62-267-4871905",
  address: {
    streetAddress: "Ruko Gading Elok 1 No. 21, Karawang Wetan",
    addressLocality: "Karawang",
    postalCode: "41314",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  geo: {
    latitude: -6.3225,
    longitude: 107.3378,
  },
  openingHours: "Mo-Fr 08:00-17:00",
  areaServed: "Indonesia",
  foundingDescription: "Indonesian trading and construction company",
  services: [
    "Trading Solutions",
    "Construction Services",
    "Engineering Support",
    "Project Management",
  ],
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = SITE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildOrganizationJsonLd() {
  const { address, geo } = COMPANY;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.legalName,
    alternateName: COMPANY.alternateName,
    url: SITE_URL,
    logo: absoluteUrl("/logo-mgc.png"),
    image: absoluteUrl(SEO_DEFAULTS.ogImage),
    description: SEO_DEFAULTS.description,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: COMPANY.areaServed,
    knowsAbout: COMPANY.services,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: SITE_URL,
    description: SEO_DEFAULTS.description,
    inLanguage: SITE_LOCALE,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY.legalName,
    image: absoluteUrl(SEO_DEFAULTS.ogImage),
    url: SITE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    openingHours: COMPANY.openingHours,
    address: {
      "@type": "PostalAddress",
      ...COMPANY.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...COMPANY.geo,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export type HeadMeta = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildHeadMeta({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  path = "/",
  ogImage = SEO_DEFAULTS.ogImage,
  noIndex = false,
}: HeadMeta = {}) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "keywords", content: SEO_DEFAULTS.keywords },
      { name: "author", content: SITE_NAME },
      { name: "creator", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" },
      { name: "googlebot", content: noIndex ? "noindex, nofollow" : "index, follow" },
      { name: "theme-color", content: SEO_DEFAULTS.themeColor },
      { name: "color-scheme", content: "light" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "application-name", content: SITE_SHORT_NAME },

      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: SEO_DEFAULTS.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:locale", content: SITE_LOCALE },
      { property: "og:image", content: imageUrl },
      { property: "og:image:secure_url", content: imageUrl },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: String(SEO_DEFAULTS.ogImageWidth) },
      { property: "og:image:height", content: String(SEO_DEFAULTS.ogImageHeight) },
      { property: "og:image:alt", content: SEO_DEFAULTS.ogImageAlt },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: SEO_DEFAULTS.twitterDescription },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: SEO_DEFAULTS.ogImageAlt },

      { name: "geo.region", content: "ID-JB" },
      { name: "geo.placename", content: "Karawang" },
      { name: "geo.position", content: `${COMPANY.geo.latitude};${COMPANY.geo.longitude}` },
      { name: "ICBM", content: `${COMPANY.geo.latitude}, ${COMPANY.geo.longitude}` },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          buildOrganizationJsonLd(),
          buildWebSiteJsonLd(),
          buildLocalBusinessJsonLd(),
        ]),
      },
    ],
  };
}
