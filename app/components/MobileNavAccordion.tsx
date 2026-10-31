'use client';

import { ChevronDown } from 'lucide-react';
import { MenuSection } from '@/app/lib/translations/types';
import * as Icons from 'lucide-react';
import Link from 'next/link';

interface MobileNavAccordionProps {
  idPrefix?: string;
  label: string;
  sections: MenuSection[];
  isOpen: boolean;
  onToggle: () => void;
  onItemClick?: () => void;
}

function getIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.Circle;
}

export function MobileNavAccordion({
  idPrefix = 'mobile-accordion',
  label,
  sections,
  isOpen,
  onToggle,
  onItemClick,
}: MobileNavAccordionProps) {
  const btnId = `${idPrefix}-btn`;
  const panelId = `${idPrefix}-panel`;

  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button
        id={btnId}
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-4 text-left rounded-lg hover:bg-zinc-50 transition-colors min-h-[44px]"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="text-base font-semibold text-zinc-900">{label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`w-5 h-5 text-zinc-600 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div id={panelId} role="region" aria-labelledby={btnId} className="pb-4 pt-2">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6 last:mb-0">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9D7F5F] mb-3 px-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const Icon = getIcon(item.icon);
                  const isExternal = item.href.startsWith('http');

                  return (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        onClick={onItemClick}
                        className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-zinc-50 active:bg-zinc-100 transition-colors group min-h-[44px]"
                      >
                        <div className="mt-0.5 flex-shrink-0" aria-hidden="true">
                          <Icon className="w-4 h-4 text-zinc-600 group-hover:text-[#9D7F5F] transition-colors" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-zinc-900 group-hover:text-[#9D7F5F] transition-colors">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-xs text-zinc-600 mt-1 leading-relaxed">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
