import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getApartmentGuideJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Paralia Ofriniou Local Guide: Beaches, Taverns & Day Trips – Abstract Apartment",
  description: "Curated local guide to Paralia Ofriniou (Costa Ofrynio), Kavala, Amphipolis, beaches, seaside taverns, walks, and essential phone contacts for guests of Abstract Apartment.",
  path: "/apartments/guide",
  property: "apartments",
  aiSummary: "Local travel guide for Paralia Ofriniou (Costa Ofrynio), Greece: sandy beaches & beach bars 2 minutes away, seafood tavernas, bakeries, Lion of Amphipolis (10 min), Ammolofoi Sand Dunes (35 min), Kavala & Philippi UNESCO site (45 min), Aggitis & Alistrati caves (45 min), plus searchable local emergency, pharmacy, taxi, and restaurant phone numbers.",
  keywords: [
      "Paralia Ofriniou travel guide beaches taverns things to do Costa Ofrynio",
      "day trips from Paralia Ofriniou Amphipolis Ammolofoi Kavala caves",
      "пътеводител Паралия Офринио плажове таверни забележителности Амфиполис Амолофи Кавала",
      "οδηγός Παραλία Οφρυνίου παραλίες ταβέρνες Αμφίπολη Αμμόλοφοι Καβάλα"
  ],
  ogImage: "/Images/Gallery/BigTerrace.jpg",
  ogAlt: "Local travel guide to Paralia Ofriniou and Costa Ofrynio, Greece",
  siteName: "Abstract Apartment",
});

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        data={[
          getBreadcrumbJsonLd([
            { name: "Abstract Apartment", path: "/apartments" },
            { name: "Local Guide", path: "/apartments/guide" },
          ]),
          getApartmentGuideJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
