import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, Geist_Mono } from "next/font/google";
import { brand, images } from "@/content/site";
import { I18nProvider } from "@/components/ui/I18nProvider";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — Performance Engineering`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Precision-engineered motorcycle performance components, shaped by engineering discipline and motorsport. Shop online or access the dealer and distributor portal.",
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: `${brand.name} — Performance Engineering`,
    description:
      "Precision-engineered motorcycle performance components, shaped by engineering discipline and motorsport.",
    images: [{ url: images.heroLever.src, width: 1200, height: 630, alt: `${brand.name}` }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070707",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${mono.variable} antialiased`}>
      <body className="min-h-screen bg-ink text-bone">
        <noscript>
          <style>{`.reveal,.line-inner,.wipe,.wipe>.wipe-inner,.draw-x,.draw-y{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
