import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "./components/ClientWrapper";
import { StructuredData } from "./components/StructuredData";
import { SITE_URL, getGlobalWebsiteJsonLd } from "./lib/seo";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abstract Apartment (Paralia Ofriniou, Greece) & Abstract Guest House (Golets, Bulgaria)",
  description:
    "Direct holiday bookings with Abstract Hospitality: beachfront Abstract Apartment & Studio 2 minutes from the sea in Paralia Ofriniou, Greece, and private whole-house Abstract Guest House with year-round outdoor hot jacuzzi, sauna & heated pool in Golets, Bulgaria.",
  keywords: [
    "Abstract Apartment",
    "Paralia Ofriniou",
    "Costa Ofrynio",
    "beachfront apartment Greece",
    "Апартамент Абстракт Офринио",
    "διαμέρισμα Παραλία Οφρυνίου",
    "Abstract Guest House",
    "Къща за гости Абстракт",
    "къща за гости Голец",
    "къща за гости с джакузи и басейн Ловеч Троян",
    "Ξενώνας Abstract Γκόλετς",
    "private spa villa Bulgaria 14 guests",
  ].join(", "),
  authors: [{ name: "Abstract Hospitality" }],
  creator: "Abstract Hospitality",
  publisher: "Abstract Hospitality",
  category: "Travel & Vacation Rentals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bg_BG", "el_GR"],
    url: SITE_URL,
    siteName: "Abstract Apartment & Abstract Guest House",
    title: "Abstract Apartment (Greece) & Abstract Guest House (Bulgaria)",
    description:
      "Beachfront holiday apartment & studio in Paralia Ofriniou, Greece, plus exclusive whole-house Bulgarian Revival spa villa in Golets, Bulgaria.",
    images: [
      {
        url: "/Images/Gallery/KitchenArea.jpg",
        width: 1200,
        height: 630,
        alt: "Abstract Apartment – Beachfront Holiday Accommodation in Paralia Ofriniou, Greece",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abstract Apartment (Greece) & Abstract Guest House (Bulgaria)",
    description:
      "Beachfront holiday apartment & studio in Paralia Ofriniou, Greece, plus private Balkan Revival spa guest house in Golets, Bulgaria.",
    images: ["/Images/Gallery/KitchenArea.jpg"],
  },
  metadataBase: new URL(SITE_URL),
  other: {
    bingbot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    perplexitybot: "index, follow, max-snippet:-1, max-image-preview:large",
    gptbot: "index, follow",
    "oai-searchbot": "index, follow",
    claudebot: "index, follow",
    "google-extended": "index, follow",
    "tdm-reservation": "0",
    "ai:llms-txt": `${SITE_URL}/llms.txt`,
    "ai:llms-full-txt": `${SITE_URL}/llms-full.txt`,
    "ai:languages": "en, bg, el",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM Summary & Sitemap (llms.txt)"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="Complete LLM Knowledge Base (llms-full.txt)"
        />
        <link rel="llms-txt" href="/llms.txt" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force light mode immediately before page renders
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                document.documentElement.style.colorScheme = 'light';
                
                // Hide body until React hydrates with correct language
                // This prevents showing English text from SSR
                try {
                  var savedLanguage = localStorage.getItem('language');
                  if (savedLanguage && (savedLanguage === 'bg' || savedLanguage === 'el')) {
                    // Mark that we need to wait for React hydration
                    document.documentElement.setAttribute('data-wait-hydration', 'true');
                  }
                } catch(e) {
                  // localStorage might not be available
                }
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html[data-wait-hydration="true"] body {
              visibility: hidden;
            }
            html[data-hydrated="true"] body {
              visibility: visible;
            }
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-[#F5F2ED]`}
        style={{ backgroundColor: "#F5F2ED", color: "#171717" }}
      >
        <StructuredData data={getGlobalWebsiteJsonLd()} />
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
