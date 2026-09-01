'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Plus, Trash2, Edit, Save, X, Calendar, Euro, FileText } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

interface Expense {
  id: string;
  name: string;
  month: number | null;
  year: number;
  price: number;
  created_at: string;
}

export function ExpensesTab() {
  const t = useTranslations();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    month: '',
    year: new Date().getFullYear().toString(),
    price: '',
  });

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const res = await fetch('/api/expenses');
      const data = await res.json();
      setExpenses(data.expenses || []);
    } catch (error) {
      console.error('Error loading expenses:', error);
      toast.error(t.admin.dashboard.expenses?.loadError || 'Failed to load expenses');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      month: '',
      year: new Date().getFullYear().toString(),
      price: '',
    });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleSave = async () => {
    if (!formData.name || !formData.year || !formData.price) {
      toast.error('Name, Year, and Price are required'); // Kept simple
      return;
    }

    setIsLoading(true);
    try {
      const url = editingId ? `/api/expenses/${editingId}` : '/api/expenses';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          month: formData.month ? parseInt(formData.month) : null,
          year: parseInt(formData.year),
          price: parseFloat(formData.price),
        }),
      });

      if (res.ok) {
        await loadExpenses();
        resetForm();
        toast.success(editingId 
          ? (t.admin.dashboard.expenses?.updateSuccess || 'Expense updated') 
          : (t.admin.dashboard.expenses?.addSuccess || 'Expense added'));
      } else {
        const error = await res.json();
        toast.error(error.error || t.admin.dashboard.expenses?.operationError || 'Operation failed');
      }
    } catch (error) {
      console.error('Error saving expense:', error);
      toast.error(t.admin.dashboard.expenses?.operationError || 'Operation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t.admin.dashboard.expenses?.deleteConfirm || 'Are you sure you want to delete this expense?')) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/expenses/${id}`, { method: 'DELETE' });
      if (res.ok) {
        await loadExpenses();
        toast.success(t.admin.dashboard.expenses?.deleteSuccess || 'Expense deleted');
      } else {
        toast.error(t.admin.dashboard.expenses?.operationError || 'Failed to delete expense');
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
      toast.error(t.admin.dashboard.expenses?.operationError || 'Failed to delete expense');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (expense: Expense) => {
    setEditingId(expense.id);
    setFormData({
      name: expense.name,
      month: expense.month ? expense.month.toString() : '',
      year: expense.year.toString(),
      price: expense.price.toString(),
    });
    setIsAdding(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-serif font-semibold text-zinc-900">{t.admin.dashboard.expenses?.title || 'Expenses'}</h2>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9D7F5F] text-white hover:bg-[#8B6F47] transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            {t.admin.dashboard.expenses?.addExpense || 'Add Expense'}
          </button>
        )}
      </div>

      {isAdding && (
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-zinc-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{editingId ? (t.admin.dashboard.expenses?.editExpense || 'Edit Expense') : (t.admin.dashboard.expenses?.addExpense || 'Add Expense')}</h3>
            <button onClick={resetForm} className="p-2 hover:bg-zinc-100 rounded-lg">
              <X className="w-5 h-5 text-zinc-500" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">{t.admin.dashboard.expenses?.name || 'Name'} *</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-[#9D7F5F] focus:border-transparent"
                placeholder="e.g. Toilet paper"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">{t.admin.dashboard.expenses?.month || 'Month (optional)'}</label>
              <input
                type="number"
                min="1"
                max="12"
                value={formData.month}
                onChange={e => setFormData(p => ({ ...p, month: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-[#9D7F5F] focus:border-transparent"
                placeholder="1-12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">{t.admin.dashboard.expenses?.year || 'Year'} *</label>
              <input
                type="number"
                value={formData.year}
                onChange={e => setFormData(p => ({ ...p, year: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-[#9D7F5F] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">{t.admin.dashboard.expenses?.price || 'Price (€)'} *</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={e => setFormData(p => ({ ...p, price: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:ring-[#9D7F5F] focus:border-transparent"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#9D7F5F] text-white hover:bg-[#8B6F47] transition-colors"
            >
              <Save className="w-4 h-4" /> {t.admin.dashboard.expenses?.save || 'Save'}
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-2 rounded-lg border border-zinc-300 hover:bg-zinc-50"
            >
              {t.admin.dashboard.expenses?.cancel || 'Cancel'}
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg border border-zinc-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.expenses?.name || 'Name'}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.expenses?.year || 'Year'}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.expenses?.month ? t.admin.dashboard.expenses.month.split(' ')[0] : 'Month'}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.expenses?.price || 'Price'}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.expenses?.actions || 'Actions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                    {t.admin.dashboard.expenses?.noExpenses || 'No expenses found'}
                  </td>
                </tr>
              ) : (
                expenses.map(expense => (
                  <tr key={expense.id} className="hover:bg-zinc-50">
                    <td className="px-6 py-4 text-sm text-zinc-900 font-medium">{expense.name}</td>
                    <td className="px-6 py-4 text-sm text-zinc-600">{expense.year}</td>
                    <td className="px-6 py-4 text-sm text-zinc-600">{expense.month || '-'}</td>
                    <td className="px-6 py-4 text-sm text-zinc-900 font-medium">€{expense.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(expense)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(expense.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
