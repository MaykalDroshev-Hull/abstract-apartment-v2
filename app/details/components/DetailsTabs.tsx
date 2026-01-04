'use client';

interface DetailsTabsProps {
  tabs: Array<{ key: string; label: string }>;
  activeTab: string;
  onTabChange: (key: string) => void;
}

export function DetailsTabs({ tabs, activeTab, onTabChange }: DetailsTabsProps) {
  return (
    <div className="mb-8">
      <div className="flex gap-2 border-b border-zinc-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === tab.key
                ? 'text-[#9D7F5F] border-b-2 border-[#9D7F5F]'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

