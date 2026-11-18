"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { LOCALE_COOKIE, defaultLocale, dictionaries, isLocale, type Dict, type Locale } from "@/content/i18n";

/**
 * Language lives in a cookie and is read on the client, so every page stays statically prerendered.
 * The server (and first paint) render English; non-English visitors switch right after hydration.
 */
const listeners = new Set<() => void>();

function readLocale(): Locale {
  const match = document.cookie.split("; ").find((c) => c.startsWith(`${LOCALE_COOKIE}=`));
  const value = match?.split("=")[1];
  return isLocale(value) ? value : defaultLocale;
}

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => void listeners.delete(cb);
};

export function setLocale(next: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  listeners.forEach((cb) => cb());
}

const I18nContext = createContext<{ locale: Locale; t: Dict }>({ locale: defaultLocale, t: dictionaries[defaultLocale] });

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, () => defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <I18nContext.Provider value={{ locale, t: dictionaries[locale] }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
