import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getApartmentDirectionsJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Directions & Getting Here – Abstract Apartment (Martini 7, Paralia Ofriniou)",
  description: "Driving directions, GPS coordinates, and travel distances to Abstract Apartment at Martini 7, Paralia Ofriniou 640 08, Greece.",
  path: "/apartments/getting-here",
  property: "apartments",
  aiSummary: "Exact address: Martini 7, Paralia Ofriniou 640 08, Kavala Region, Greece (GPS: 40.7745, 23.9038). Easy highway access via Egnatia Odos (A2), ~3.5 hours drive from Sofia via Kulata–Promachonas border, ~1 hour from Thessaloniki or Kavala Airport, 2 minutes flat walk to the beach, with private parking for the Apartment.",
  keywords: [
      "directions to Martini 7 Paralia Ofriniou 640 08 Greece GPS",
      "how to get to Paralia Ofriniou from Sofia Thessaloniki Kavala",
      "адрес и маршрут до Апартамент Абстракт Паралия Офринио от София през Кулата",
      "οδηγίες πρόσβασης Martini 7 Παραλία Οφρυνίου 640 08"
  ],
  ogImage: "/Images/Gallery/BigTerrace.jpg",
  ogAlt: "Directions to Abstract Apartment in Paralia Ofriniou, Greece",
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
            { name: "Getting Here", path: "/apartments/getting-here" },
          ]),
          getApartmentDirectionsJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
