/**
 * Central content + routing for the homepage.
 *
 * ⚠️ PLACEHOLDER CONTENT — per the project brief, no certifications, specs,
 * racing results, dates, customers or history are invented. Everything marked
 * `TODO(content)` must be replaced with approved copy/data/assets.
 */

export const brand = {
  // TODO(content): replace with the real brand name and logo asset.
  name: "MotoTech",
  tagline: "Performance Engineering",
  // TODO(content): approved one-line brand description for the footer.
  description: "Precision-engineered motorcycle performance components, shaped by engineering discipline and motorsport.",
};

export const routes = {
  // TODO(routes): point at the real shop and B2B portal URLs.
  shop: "/shop",
  b2b: "/b2b-portal",
  company: "/company",
  history: "/company/history",
  innovation: "/innovation",
  motorsport: "/motorsport",
  products: "/products",
  news: "/news",
  whereToBuy: "/where-to-buy",
  contact: "/contact",
  privacy: "/privacy",
  cookies: "/cookies",
  legal: "/legal",
};

export const nav = [
  { label: "Company", href: routes.company },
  { label: "Innovation", href: routes.innovation },
  { label: "Products", href: routes.products },
  { label: "Motorsport", href: routes.motorsport },
  { label: "News", href: routes.news },
  { label: "Contact", href: routes.contact },
];

// TODO(content): confirm the supported languages.
export const languages = [
  { code: "EN", label: "English" },
  { code: "IT", label: "Italiano" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
];

export const principles = [
  { k: "Performance", v: "Judged where it matters: at the limit, under load." },
  { k: "Engineering", v: "Every part begins as a question of material and tolerance." },
  { k: "Precision", v: "Consistency is a manufacturing decision, not a claim." },
  { k: "Heritage", v: "What survives testing is what we keep." },
  { k: "Innovation", v: "Progress measured on the bench before the track." },
];

// TODO(content): replace labels/values with real, approved technical data.
export const engineering = [
  { k: "Research & Development", v: "Concept, simulation and validation under one roof.", value: "Data TBC" },
  { k: "Precision manufacturing", v: "Controlled processes from raw material to finished part.", value: "Data TBC" },
  { k: "Materials & technology", v: "Selected for performance, tested for consistency.", value: "Data TBC" },
  { k: "Quality", v: "Inspection built into every stage, not added at the end.", value: "Data TBC" },
];

/**
 * Every photograph used on the site, in one place. Swap a file or its alt text here and it updates everywhere.
 * Alt text describes what is actually visible in each photo.
 */
export const images = {
  heroLever: { src: "/images/lever-dark-hero.webp", alt: "Black racing-style brake lever and master cylinder on a handlebar against a dark studio background" },
  bikeBlue: { src: "/images/bike-blue-front.webp", alt: "Custom motorcycle with a carbon-fibre fairing and a purple brake caliper, lit in blue studio light" },
  wheelBlue: { src: "/images/wheel-blue-caliper.webp", alt: "Close-up of a purple brake caliper, wavy brake disc and carbon-fibre front fender" },
  wheelRed: { src: "/images/wheel-red-caliper.webp", alt: "Front wheel with a magenta brake caliper and drilled disc in red studio light" },
  bikeRear: { src: "/images/bike-rear-custom.webp", alt: "Rear three-quarter view of a custom motorcycle with leather seat, exhaust and a purple-tinted rear brake" },
  caliperPortrait: { src: "/images/caliper-black-portrait.webp", alt: "Black brake caliper with white lettering on a motorcycle fork, braided brake line above" },
  caliperWide: { src: "/images/caliper-black-wide.webp", alt: "Black brake caliper and braided brake line on a motorcycle with a bronze wheel" },
  caliperOffroad: { src: "/images/caliper-offroad.webp", alt: "Black brake caliper with red lettering on a motorcycle with knobbly tyres and purple spokes" },
  leverOrange: { src: "/images/lever-orange-tank.webp", alt: "Black brake lever and master cylinder on a handlebar above a grey and orange fuel tank" },
  leverDark: { src: "/images/lever-dark-wide.webp", alt: "Black adjustable brake lever and handlebar controls against a dark background" },
  masterCylinder: { src: "/images/master-cylinder.webp", alt: "Machined brake master cylinder and lever on a handlebar, dark studio background" },
  leverTank: { src: "/images/lever-tank-wide.webp", alt: "Black folding brake lever and handlebar controls over a black and orange motorcycle tank" },
} as const;

export const families = [
  { slug: "road", name: "Road / Performance", text: "Control and feel for every day on the road.", image: images.bikeBlue.src, heroPosition: "object-[center_38%]", href: `${routes.products}/road` },
  { slug: "off-road", name: "Off-Road", text: "Engineered for loose surfaces and long days.", image: images.caliperOffroad.src, heroPosition: "object-[center_48%]", href: `${routes.products}/off-road` },
  { slug: "racing", name: "Racing", text: "Track-focused components developed in competition.", image: images.caliperPortrait.src, heroPosition: "object-[center_45%]", href: `${routes.products}/racing` },
  { slug: "custom", name: "Custom", text: "Tailored builds for riders who specify their own.", image: images.bikeRear.src, heroPosition: "object-[center_62%]", href: `${routes.products}/custom` },
];

// TODO(content): replace with verified motorsport facts (teams, titles, partners).
export const motorsportStats = [
  { k: "Teams", v: "—" },
  { k: "Championships", v: "—" },
  { k: "Partnerships", v: "—" },
];

export const socials = [
  // TODO(content): real social profile URLs.
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

/**
 * News articles. Intentionally empty: no articles were supplied.
 * Add real entries and the homepage section and /news grid render automatically.
 * NOTE: cards link to `/news/[slug]` — create that route when the first article is added.
 */
export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, e.g. "2026-01-31" */
  date: string;
  image: string;
  imageAlt: string;
};
export const news: NewsArticle[] = [];

/** TODO(content): real contact details. `null` renders a styled "to be supplied" placeholder. */
export const contact: { address: string | null; email: string | null; phone: string | null } = {
  address: null,
  email: null,
  phone: null,
};

/** TODO(content): real founding facts for the Company page. */
export const companyFacts = [
  { k: "Founded", v: "—" },
  { k: "Headquarters", v: "—" },
  { k: "Team", v: "—" },
  { k: "Markets", v: "—" },
];

export const legalPages = {
  [routes.privacy]: { title: "Privacy", note: "Privacy policy" },
  [routes.cookies]: { title: "Cookies", note: "Cookie policy" },
  [routes.legal]: { title: "Legal", note: "Legal notice" },
} as const;
