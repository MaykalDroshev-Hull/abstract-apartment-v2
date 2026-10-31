import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { buildPageMetadata, getBreadcrumbJsonLd, getHouseGuideJsonLd } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: "Attractions Near Golets, Lovech & Troyan – Abstract Guest House Guide",
  description: "Discover 11 natural wonders and historic landmarks near Abstract Guest House: Krushuna Waterfalls, Devetashka Cave, Lake Sopot, Iskar-Panega Eco-Trail, Lovech Covered Bridge, and Kavuka Waterfall.",
  path: "/house/guide",
  property: "house",
  aiSummary: "11 top attractions near Abstract Guest House in Golets: 1) Kavuka Waterfall (2 km), 2) Golets Village Lakes (1.5 km), 3) Lake Sopot / Sopot Dam (15 km), 4) Tabashka Cave (24 km), 5) Lovech Covered Bridge, Varosha & Fortress (25 km), 6) Lovech Zoo (26 km), 7) Dupkata Rock Arch at Aglen (28 km), 8) Sostra Roman Fortress (30 km), 9) Iskar-Panega Eco-Trail (35 km), 10) Devetashka Cave (45 km), 11) Krushuna Waterfalls (55 km).",
  keywords: [
      "забележителности около Голец Ловеч и Троян",
      "къща за гости близо до Крушунски водопади и Деветашка пещера",
      "къща за гости близо до язовир Сопот и екопътека Искър Панега",
      "водопад Кавука Голец Покрит мост Ловеч Состра",
      "things to do near Lovech Troyan Krushuna Waterfalls Devetashka Cave",
      "αξιοθέατα Λόβετς Τρογιάν καταρράκτες Κρουσούνα σπήλαιο Ντεβετάκι"
  ],
  ogImage: "/Images/House/courtyard-pool-from-porch.jpg",
  ogAlt: "View from the wooden veranda across the green courtyard at Abstract Guest House",
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
            { name: "Local Attractions Guide", path: "/house/guide" },
          ]),
          getHouseGuideJsonLd(),
        ]}
      />
      {children}
    </>
  );
}
