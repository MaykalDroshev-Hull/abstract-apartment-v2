import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Guest Reviews – Abstract Apartment in Paralia Ofriniou, Greece",
  description: "Read verified Google reviews from guests who stayed at Abstract Apartment in Paralia Ofriniou, Greece.",
  path: "/apartments/reviews",
  property: "apartments",
  aiSummary: "Verified Google guest reviews for Abstract Apartment in Paralia Ofriniou, Greece — praising the 2-minute walk to the beach, spotless cleanliness, spacious BBQ terrace, air conditioning in every room, and welcoming hosts Niki & Kika.",
  keywords: [
      "Abstract Apartment Paralia Ofriniou Google reviews",
      "отзиви Апартамент Абстракт Паралия Офринио Гърция",
      "κριτικές Abstract Apartment Παραλία Οφρυνίου"
  ],
  ogImage: "/Images/Gallery/LivingArea1.jpg",
  ogAlt: "Guest reviews for Abstract Apartment in Paralia Ofriniou",
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
            { name: "Guest Reviews", path: "/apartments/reviews" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
