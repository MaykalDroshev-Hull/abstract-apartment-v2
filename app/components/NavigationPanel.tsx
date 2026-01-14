'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as Icons from 'lucide-react';
import { MenuSection, FeaturedCard } from '@/app/lib/translations/types';

interface NavigationPanelProps {
  sections: MenuSection[];
  featuredCard?: FeaturedCard;
  onClose?: () => void;
}

// Icon mapping function
function getIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.Circle;
}

export function NavigationPanel({ sections, featuredCard, onClose }: NavigationPanelProps) {

  // Reviews now link to dedicated page instead of home page section

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-zinc-200 py-6 px-8 z-[100] pointer-events-auto" data-navigation-panel>
      <div className="flex gap-8">
        {/* Left side - Sections */}
        <div className={`flex-1 grid ${featuredCard ? 'grid-cols-3' : 'grid-cols-3'} gap-8`}>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9D7F5F] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const Icon = getIcon(item.icon);
                  const isExternal = item.href.startsWith('http');

                  return (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="group block relative z-[110] pointer-events-auto"
                        onClick={() => {
                          // Close menu when navigating to internal links
                          if (!isExternal && onClose) {
                            onClose();
                          }
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <Icon className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-zinc-900 group-hover:text-zinc-700 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-zinc-600 mt-1 leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Right side - Featured Card */}
        {featuredCard && (
          <div className="w-80 flex-shrink-0">
            <div className="rounded-lg overflow-hidden bg-zinc-50 border border-zinc-200">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={featuredCard.image}
                  alt={featuredCard.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base text-zinc-900 mb-2">
                  {featuredCard.title}
                </h3>
                <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                  {featuredCard.description}
                </p>
                <Link
                  href={featuredCard.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#9D7F5F] hover:text-[#8B6F47] transition-colors relative z-[110] pointer-events-auto"
                >
                  {featuredCard.ctaText} →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

