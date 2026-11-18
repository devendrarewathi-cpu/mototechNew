/**
 * UI translations for the four languages in the brief: English, Italian, Spanish, German.
 * English wording for the two commercial buttons is client-supplied and exact.
 * TODO(content): have a native speaker approve the IT / ES / DE copy before launch.
 */

export const locales = ["en", "it", "es", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "locale";

export const isLocale = (v: string | undefined): v is Locale => !!v && (locales as readonly string[]).includes(v);

export type Dict = {
  skip: string;
  menuOpen: string;
  menuClose: string;
  nav: { company: string; innovation: string; products: string; motorsport: string; news: string; contact: string };
  shop: string;
  b2bShort: string;
  hero: {
    eyebrow: string;
    title: [string, string, string];
    text: string;
    privateQuestion: string;
    shopCta: string;
    dealerQuestion: string;
    b2bCta: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    privateText: string;
    dealerText: string;
  };
  footer: { rights: string; top: string };
};

export const dictionaries: Record<Locale, Dict> = {
  en: {
    skip: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    nav: { company: "Company", innovation: "Innovation", products: "Products", motorsport: "Motorsport", news: "News", contact: "Contact" },
    shop: "Shop here",
    b2bShort: "B2B portal",
    hero: {
      eyebrow: "Performance / Engineering / Motorsport",
      title: ["Engineering", "performance.", "On two wheels."],
      text: "High-performance components, advanced engineering and a racing DNA, designed for riders, teams and professionals around the world.",
      privateQuestion: "Are you a private customer?",
      shopCta: "Shop here",
      dealerQuestion: "Are you a dealer or distributor?",
      b2bCta: "Access the B2B portal",
    },
    cta: {
      eyebrow: "Choose your route",
      heading: "Two ways in.",
      privateText: "Browse the range and order directly.",
      dealerText: "Trade pricing, ordering and resources for partners.",
    },
    footer: { rights: "All rights reserved.", top: "Top" },
  },
  it: {
    skip: "Vai al contenuto",
    menuOpen: "Apri il menu",
    menuClose: "Chiudi il menu",
    nav: { company: "Azienda", innovation: "Innovazione", products: "Prodotti", motorsport: "Motorsport", news: "News", contact: "Contatti" },
    shop: "Acquista qui",
    b2bShort: "Portale B2B",
    hero: {
      eyebrow: "Prestazioni / Ingegneria / Motorsport",
      title: ["Ingegneria", "della performance.", "Su due ruote."],
      text: "Componenti ad alte prestazioni, ingegneria avanzata e DNA racing, progettati per piloti, team e professionisti di tutto il mondo.",
      privateQuestion: "Sei un cliente privato?",
      shopCta: "Acquista qui",
      dealerQuestion: "Sei un rivenditore o un distributore?",
      b2bCta: "Accedi al portale B2B",
    },
    cta: {
      eyebrow: "Scegli il tuo percorso",
      heading: "Due modi per entrare.",
      privateText: "Scopri la gamma e ordina direttamente.",
      dealerText: "Prezzi, ordini e risorse dedicati ai partner.",
    },
    footer: { rights: "Tutti i diritti riservati.", top: "Su" },
  },
  es: {
    skip: "Saltar al contenido",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    nav: { company: "Empresa", innovation: "Innovación", products: "Productos", motorsport: "Motorsport", news: "Noticias", contact: "Contacto" },
    shop: "Compra aquí",
    b2bShort: "Portal B2B",
    hero: {
      eyebrow: "Rendimiento / Ingeniería / Motorsport",
      title: ["Ingeniería", "de rendimiento.", "Sobre dos ruedas."],
      text: "Componentes de alto rendimiento, ingeniería avanzada y ADN racing, diseñados para pilotos, equipos y profesionales de todo el mundo.",
      privateQuestion: "¿Eres un cliente particular?",
      shopCta: "Compra aquí",
      dealerQuestion: "¿Eres un concesionario o distribuidor?",
      b2bCta: "Accede al portal B2B",
    },
    cta: {
      eyebrow: "Elige tu camino",
      heading: "Dos formas de entrar.",
      privateText: "Descubre la gama y pide directamente.",
      dealerText: "Precios, pedidos y recursos para socios comerciales.",
    },
    footer: { rights: "Todos los derechos reservados.", top: "Arriba" },
  },
  de: {
    skip: "Zum Inhalt springen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    nav: { company: "Unternehmen", innovation: "Innovation", products: "Produkte", motorsport: "Motorsport", news: "News", contact: "Kontakt" },
    shop: "Hier kaufen",
    b2bShort: "B2B-Portal",
    hero: {
      eyebrow: "Leistung / Technik / Motorsport",
      title: ["Ingenieurskunst", "für Leistung.", "Auf zwei Rädern."],
      text: "Hochleistungskomponenten, fortschrittliche Technik und Racing-DNA – entwickelt für Fahrer, Teams und Profis auf der ganzen Welt.",
      privateQuestion: "Sind Sie Privatkunde?",
      shopCta: "Hier kaufen",
      dealerQuestion: "Sind Sie Händler oder Distributor?",
      b2bCta: "Zum B2B-Portal",
    },
    cta: {
      eyebrow: "Wählen Sie Ihren Weg",
      heading: "Zwei Wege hinein.",
      privateText: "Sortiment entdecken und direkt bestellen.",
      dealerText: "Händlerpreise, Bestellung und Ressourcen für Partner.",
    },
    footer: { rights: "Alle Rechte vorbehalten.", top: "Nach oben" },
  },
};
