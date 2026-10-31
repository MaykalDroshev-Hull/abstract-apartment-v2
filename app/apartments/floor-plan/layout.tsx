import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Floor Plans – Abstract Apartment & Abstract Studio Paralia Ofriniou",
  description: "View architectural floor plans and room layouts for Abstract Apartment and Abstract Studio at Martini 7, Paralia Ofriniou, Greece.",
  path: "/apartments/floor-plan",
  property: "apartments",
  aiSummary: "Architectural room layouts for Abstract Apartment (2 separate double bedrooms, open living/kitchen area with sofa bed, private bathroom, large outdoor BBQ dining terrace) and Abstract Studio (open sleeping/kitchenette area, private bathroom, balcony) at Martini 7, Paralia Ofriniou.",
  keywords: [
      "Abstract Apartment floor plan layout Paralia Ofriniou",
      "разпределение план Апартамент и Студио Абстракт Офринио",
      "κάτοψη διαμερίσματος Abstract Apartment Παραλία Οφρυνίου"
  ],
  ogImage: "/Images/Gallery/LivingArea1.jpg",
  ogAlt: "Floor plan and room layout of Abstract Apartment in Paralia Ofriniou",
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
            { name: "Floor Plans", path: "/apartments/floor-plan" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
