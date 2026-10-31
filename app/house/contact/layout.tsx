import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getHouseContactJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Hosts & Inquiries – Abstract Guest House Golets",
  description: "Contact Kristina (+359 878 112 454 / Viber) and Kameliya Ivanova (+359 889 226 794) directly for availability, event inquiries, and bookings at Abstract Guest House in Golets, Bulgaria.",
  path: "/house/contact",
  property: "house",
  aiSummary: "Direct host contacts for Abstract Guest House (ul. Vasil Levski, Golets, Lovech Province, Bulgaria): Kristina Ivanova (+359 878 112 454, Phone & Viber), Kameliya Ivanova (+359 889 226 794), email abstract.apartments@gmail.com.",
  keywords: [
      "контакти телефон Къща за гости Абстракт Голец",
      "Кристина Иванова Камелия Иванова резервации Голец Viber",
      "contact Abstract Guest House Golets phone Viber email",
      "επικοινωνία τηλέφωνο Ξενώνας Abstract Γκόλετς"
  ],
  ogImage: "/Images/House/courtyard-pool-dusk-lantern.jpg",
  ogAlt: "Contact Abstract Guest House in Golets, Lovech Province",
  siteName: "Abstract Guest House",
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
            { name: "Abstract Guest House", path: "/house" },
            { name: "Contact Hosts", path: "/house/contact" },
          ]),
          getHouseContactJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
