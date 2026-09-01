'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { useLanguage } from '@/app/lib/translations';

interface StatsData {
  allTime: { revenue: number; expenses: number; profit: number };
  byYear: Record<string, { revenue: number; expenses: number; profit: number }>;
  byMonth: Record<string, { revenue: number; expenses: number; profit: number }>;
}

export function StatisticsTab() {
  const { t, language } = useLanguage();
  const [stats, setStats] = useState<StatsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await fetch('/api/statistics');
      const data = await res.json();
      setStats(data.stats);
    } catch (error) {
      console.error('Error loading statistics:', error);
      toast.error(t.admin.dashboard.statistics?.error || 'Failed to load statistics');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">{t.admin.dashboard.statistics?.loading || 'Loading statistics...'}</div>;
  }

  if (!stats) {
    return <div className="text-center py-12 text-red-500">{t.admin.dashboard.statistics?.error || 'Failed to load statistics'}</div>;
  }

  const formatCurrency = (val: number) => `€${val.toFixed(2)}`;

  const StatCard = ({ title, revenue, expenses, profit }: { title: string; revenue: number; expenses: number; profit: number }) => (
    <div className="bg-white rounded-lg shadow border border-zinc-200 p-6">
      <h3 className="text-lg font-semibold text-zinc-900 mb-4">{title}</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-zinc-500 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" /> {t.admin.dashboard.statistics?.revenue || 'Revenue'}
          </span>
          <span className="font-medium text-green-600">{formatCurrency(revenue)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-zinc-500 flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-red-500" /> {t.admin.dashboard.statistics?.expenses || 'Expenses (Inc. Cleaning)'}
          </span>
          <span className="font-medium text-red-600">{formatCurrency(expenses)}</span>
        </div>
        <div className="pt-4 border-t border-zinc-100 flex justify-between items-center">
          <span className="font-medium text-zinc-900 flex items-center gap-2">
            <DollarSign className="w-4 h-4" /> {t.admin.dashboard.statistics?.profit || 'Profit'}
          </span>
          <span className={`text-lg font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(profit)}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <StatCard 
            title={t.admin.dashboard.statistics?.allTime || 'All Time Overview'} 
            revenue={stats.allTime.revenue} 
            expenses={stats.allTime.expenses} 
            profit={stats.allTime.profit} 
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-serif font-semibold text-zinc-900 mb-4">{t.admin.dashboard.statistics?.byYear || 'By Year'}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(stats.byYear)
            .sort(([a], [b]) => b.localeCompare(a))
            .map(([year, data]) => (
              <StatCard 
                key={year}
                title={year}
                {...data}
              />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-serif font-semibold text-zinc-900 mb-4">{t.admin.dashboard.statistics?.byMonth || 'By Month'}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(stats.byMonth)
            .sort(([a], [b]) => b.localeCompare(a))
            .map(([monthStr, data]) => {
              const [y, m] = monthStr.split('-');
              const date = new Date(parseInt(y), parseInt(m) - 1);
              const localeMap: Record<string, string> = { en: 'en-US', bg: 'bg-BG', el: 'el-GR' };
              const title = date.toLocaleString(localeMap[language] || 'default', { month: 'long', year: 'numeric' });
              return (
                <StatCard 
                  key={monthStr}
                  title={title}
                  {...data}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}
