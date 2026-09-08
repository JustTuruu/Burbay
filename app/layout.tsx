import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { images } from "@/lib/images";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://burbay.mn";
const title = "BURBAY Mongolia — Хамтдаа туулах гайхалтай аялал";
const description =
  "BURBAY брэндийн Монгол дахь албан ёсны төлөөлөгч. Хүүхдийн тэрэг, машины суудал, манеж, дагалдах хэрэгслийн танилцуулга. Бөөний захиалга, хамтын ажиллагаа, үнийн санал.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — BURBAY Mongolia",
  },
  description,
  keywords: [
    "Burbay",
    "хүүхдийн тэрэг",
    "автомашины суудал",
    "тансаг зэрэглэлийн хүүхдийн тэрэг",
    "Монгол",
    "Улаанбаатар",
  ],
  applicationName: "BURBAY Mongolia",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: siteUrl,
    siteName: "BURBAY Mongolia",
    title,
    description,
    images: [
      {
        url: images.hero.src,
        width: 1500,
        height: 1500,
        alt: images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.hero.src],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
        >
          Үндсэн контент руу очих
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
