import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Apartment & Studio Details – Abstract Apartment Paralia Ofriniou, Greece",
  description: "Explore rooms and amenities at Abstract Apartment & Studio in Paralia Ofriniou, Greece: 2 minutes walk to the beach, AC in every room, full kitchen, large BBQ terrace, fast Wi-Fi, and private parking.",
  path: "/apartments/details",
  property: "apartments",
  aiSummary: "Two air-conditioned holiday units at Martini 7, Paralia Ofriniou, Greece (2 min walk to beach): 1) Abstract Apartment (sleeps up to 6: 2 double bedrooms + living room sofa bed, full kitchen, washing machine, Smart TV + bedroom TVs, large furnished outdoor terrace with built-in BBQ, private parking space) and 2) Abstract Studio (double bed + sofa bed, kitchenette, private bathroom, AC, TV, Wi-Fi, balcony).",
  keywords: [
      "Abstract Apartment details amenities Paralia Ofriniou",
      "2 bedroom apartment Paralia Ofriniou BBQ terrace washing machine parking",
      "Abstract Studio Costa Ofrynio kitchenette AC",
      "удобства Апартамент Абстракт Офринио 2 спални барбекю паркинг",
      "παροχές διαμέρισμα και στούντιο Παραλία Οφρυνίου μπάρμπεκιου πάρκινγκ"
  ],
  ogImage: "/Images/Gallery/LivingArea1.jpg",
  ogAlt: "Open-plan living and dining room at Abstract Apartment in Paralia Ofriniou",
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
            { name: "Apartment & Studio Details", path: "/apartments/details" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
