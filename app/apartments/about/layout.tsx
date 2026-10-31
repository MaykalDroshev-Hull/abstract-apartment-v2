import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "About Us & Our Story – Abstract Apartment Paralia Ofriniou",
  description: "Meet hosts Kristina and Nikola and learn the story behind Abstract Apartment — a welcoming beachfront retreat in Paralia Ofriniou (Costa Ofrynio), Greece.",
  path: "/apartments/about",
  property: "apartments",
  aiSummary: "Hosted by Nikola (Niki) and Kristina (Kika), Abstract Apartment in Paralia Ofriniou was created as a clean, walkable, family-friendly seaside home just 2 minutes from the Aegean Sea beach and local Greek tavernas.",
  keywords: [
      "about Abstract Apartment Paralia Ofriniou hosts Niki and Kika",
      "за нас Апартамент Абстракт Офринио домакини Ники и Кика",
      "σχετικά με το Abstract Apartment Παραλία Οφρυνίου οικοδεσπότες"
  ],
  ogImage: "/Images/Gallery/LivingArea1.jpg",
  ogAlt: "Abstract Apartment living space in Paralia Ofriniou, Greece",
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
            { name: "About Us", path: "/apartments/about" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
