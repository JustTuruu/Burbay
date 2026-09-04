import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { images } from "@/lib/images";

import "./globals.css";

/** Геометр sans-serif — кирилл (Ө, Ү) бүрэн дэмждэг. */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://burbay.mn"; // TODO: бодит домэйноор солино
const title = "BURBAY — Тансаг зэрэглэлийн хүүхдийн тэрэг, автомашины суудал";
const description =
  "Burbay — Монгол дахь албан ёсны дистрибьютер. Тансаг зэрэглэлийн хүүхдийн тэрэг, автомашины суудал, гэрийн хэрэгсэл, дагалдах хэрэгслийн албан ёсны танилцуулга.";

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
        width: 1200,
        height: 630,
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
    <html lang="mn" suppressHydrationWarning className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {/*
          JS ажиллаж байгааг тэмдэглэнэ. Scroll animation-ууд зөвхөн энэ
          үед идэвхжих тул JS унтарсан тохиолдолд контент бүрэн харагдана.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
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
