import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "./components/ClientWrapper";

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
  title: "Abstract Apartment - Luxury Beachfront Villa in Paralia Ofriniou",
  description: "Abstract Apartment offers luxury beachfront accommodation in Paralia Ofriniou, Greece. Book your perfect stay in our spacious apartment or cozy studio.",
  keywords: "Abstract Apartment, Paralia Ofriniou, Greece, beachfront villa, holiday rental, vacation rental, apartment rental, studio rental, Halkidiki, accommodation",
  authors: [{ name: "Abstract Apartment" }],
  creator: "Abstract Apartment",
  publisher: "Abstract Apartment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['bg_BG', 'el_GR'],
    url: 'https://abstractapartment.com',
    siteName: 'Abstract Apartment',
    title: 'Abstract Apartment - Luxury Beachfront Villa in Paralia Ofriniou',
    description: 'Experience luxury beachfront living at Abstract Apartment in Paralia Ofriniou, Greece. Spacious apartment and cozy studio with stunning sea views.',
    images: [
      {
        url: '/Images/Gallery/KitchenArea.jpg',
        width: 1200,
        height: 630,
        alt: 'Abstract Apartment - Luxury Beachfront Villa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abstract Apartment - Luxury Beachfront Villa in Paralia Ofriniou',
    description: 'Experience luxury beachfront living at Abstract Apartment in Paralia Ofriniou, Greece.',
    images: ['/Images/Gallery/KitchenArea.jpg'],
  },
  alternates: {
    canonical: 'https://abstractapartment.com',
    languages: {
      'en-US': 'https://abstractapartment.com',
      'bg-BG': 'https://abstractapartment.com',
      'el-GR': 'https://abstractapartment.com',
    },
  },
  metadataBase: new URL('https://abstractapartment.com'),
  verification: {
    // Add Google Search Console verification if needed
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force light mode immediately before page renders
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                document.documentElement.style.colorScheme = 'light';
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-[#F5F2ED]`}
        style={{ backgroundColor: '#F5F2ED', color: '#171717' }}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
