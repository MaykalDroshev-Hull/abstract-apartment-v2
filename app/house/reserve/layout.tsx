import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Book Abstract Guest House – Exclusive Whole-House Reservation in Golets",
  description: "Reserve the entire Abstract Guest House in Golets, Lovech Province for your group of up to 14 guests. Check estimated stay cost and request direct booking confirmation from the hosts.",
  path: "/house/reserve",
  property: "house",
  aiSummary: "Direct commission-free online reservation form for renting the entire Abstract Guest House in Golets, Bulgaria (up to 14 guests). Instant weekday (€300/night) and weekend (€350/night) price calculation and direct confirmation by hosts Kristina (+359 878 112 454 / Viber) & Kameliya Ivanova.",
  keywords: [
      "резервация Къща за гости Абстракт Голец",
      "резервирай цяла къща за гости Ловеч Троян",
      "директна резервация къща с джакузи и басейн",
      "book Abstract Guest House Golets direct reservation",
      "whole house vacation rental booking Bulgaria",
      "κράτηση Ξενώνας Abstract Γκόλετς"
  ],
  ogImage: "/Images/House/house-facade-pool-courtyard.jpg",
  ogAlt: "Book Abstract Guest House – entire private estate with heated pool and spa",
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
            { name: "Book the House", path: "/house/reserve" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
