import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Reserve Your Stay – Abstract Apartment & Studio Paralia Ofriniou",
  description: "Submit a direct reservation request for Abstract Apartment (up to 6 guests), Abstract Studio (up to 2 guests), or both units together in Paralia Ofriniou, Greece.",
  path: "/apartments/reserve",
  property: "apartments",
  aiSummary: "Direct online reservation wizard for Abstract Apartment (up to 6 guests), Abstract Studio (up to 2 guests), or Both Units Combined in Paralia Ofriniou, Greece — featuring live date availability verification and automatic 7+1 free night discount calculation.",
  keywords: [
      "book Abstract Apartment Paralia Ofriniou direct online reservation",
      "резервация Апартамент и Студио Абстракт Офринио Гърция",
      "online κράτηση Abstract Apartment Παραλία Οφρυνίου"
  ],
  ogImage: "/Images/Gallery/LivingArea1.jpg",
  ogAlt: "Reserve Abstract Apartment in Paralia Ofriniou, Greece",
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
            { name: "Reserve Your Stay", path: "/apartments/reserve" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
