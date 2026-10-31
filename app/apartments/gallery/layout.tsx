import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getApartmentGalleryJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Photo Gallery – Abstract Apartment & Studio in Paralia Ofriniou, Greece",
  description: "Browse photos of Abstract Apartment and Abstract Studio in Paralia Ofriniou: bright bedrooms, open living area, modern kitchen, spacious outdoor BBQ terrace, and nearby Aegean beaches.",
  path: "/apartments/gallery",
  property: "apartments",
  aiSummary: "Interior and exterior photo gallery of Abstract Apartment and Abstract Studio at Martini 7, Paralia Ofriniou (Costa Ofrynio), Greece — featuring the open-plan living & dining room, fully equipped kitchen, two double bedrooms, large furnished BBQ terrace, studio interior, and sandy Aegean beach 2 minutes away.",
  keywords: [
      "Abstract Apartment Paralia Ofriniou photos gallery",
      "снимки Апартамент и Студио Абстракт Паралия Офринио",
      "φωτογραφίες Abstract Apartment Παραλία Οφρυνίου"
  ],
  ogImage: "/Images/Gallery/BigTerrace.jpg",
  ogAlt: "Spacious furnished terrace at Abstract Apartment in Paralia Ofriniou",
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
            { name: "Photo Gallery", path: "/apartments/gallery" },
          ]),
          getApartmentGalleryJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
