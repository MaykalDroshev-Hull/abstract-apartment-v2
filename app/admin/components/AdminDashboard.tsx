'use client';

import { useState, useEffect } from 'react';
import { format, parseISO, isAfter } from 'date-fns';
import { toast } from 'react-toastify';
import { LogOut, Plus, Calendar, Users, Euro, MessageSquare, Edit, Trash2, Save, X, Home } from 'lucide-react';
import { useTranslations } from '@/app/lib/translations';

interface Booking {
  BookingID: number;
  CheckInDT: string;
  CheckOutDT: string;
  FullPrice: number | null;
  PaidPrice: number | null;
  Comments: string | null;
  apartmentid: number;
  Customer: {
    FirstName: string | null;
    LastName: string | null;
    Telephone: string | null;
  } | null;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const t = useTranslations();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isAddingBooking, setIsAddingBooking] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);

  const [formData, setFormData] = useState({
    CheckInDT: '',
    CheckOutDT: '',
    FirstName: '',
    LastName: '',
    Telephone: '',
    FullPrice: '',
    PaidPrice: '',
    Comments: '',
    apartmentid: '1', // Default to Apartment
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const res = await fetch('/api/bookings?apartmentid=1');
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error('Error loading bookings:', error);
      toast.error(t.admin.dashboard.loadError, {
        position: 'top-center',
        style: { background: '#dc2626', color: 'white' }
      });
    }
  };

  const requiredFields = ['CheckInDT', 'CheckOutDT', 'FirstName', 'LastName', 'Telephone', 'FullPrice', 'PaidPrice'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const fieldErrorMap: Record<string, string> = {
      CheckInDT: t.admin.dashboard.validation.checkInRequired,
      CheckOutDT: t.admin.dashboard.validation.checkOutRequired,
      FirstName: t.admin.dashboard.validation.firstNameRequired,
      LastName: t.admin.dashboard.validation.lastNameRequired,
      Telephone: t.admin.dashboard.validation.telephoneRequired,
      FullPrice: t.admin.dashboard.validation.fullPriceRequired,
      PaidPrice: t.admin.dashboard.validation.paidPriceRequired,
    };

    for (const field of requiredFields) {
      const value = formData[field as keyof typeof formData];
      if (!value || String(value).trim() === '') {
        newErrors[field] = fieldErrorMap[field] || t.admin.dashboard.form.required;
      }
    }

    // Validate date logic
    if (formData.CheckInDT && formData.CheckOutDT) {
      const checkIn = new Date(formData.CheckInDT);
      const checkOut = new Date(formData.CheckOutDT);
      if (checkOut <= checkIn) {
        newErrors.CheckOutDT = t.admin.dashboard.form.checkOutAfterCheckIn;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      CheckInDT: '',
      CheckOutDT: '',
      FirstName: '',
      LastName: '',
      Telephone: '',
      FullPrice: '',
      PaidPrice: '',
      Comments: '',
      apartmentid: '1',
    });
    setErrors({});
    setIsAddingBooking(false);
    setEditingBooking(null);
  };

  const handleAddBooking = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, apartmentid: 1 }),
      });

      if (res.ok) {
        await loadBookings();
        resetForm();
        toast.success(t.admin.dashboard.addSuccess, {
          position: 'top-center',
          style: { background: '#16a34a', color: 'white' }
        });
      } else {
        const error = await res.json();
        toast.error(error.error || t.admin.dashboard.addError, {
          position: 'top-center',
          style: { background: '#dc2626', color: 'white' }
        });
      }
    } catch (error) {
      console.error('Error adding booking:', error);
      toast.error(t.admin.dashboard.addError, {
        position: 'top-center',
        style: { background: '#dc2626', color: 'white' }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditBooking = (booking: Booking) => {
    setEditingBooking(booking);
    setFormData({
      CheckInDT: booking.CheckInDT ? format(parseISO(booking.CheckInDT), 'yyyy-MM-dd') : '',
      CheckOutDT: booking.CheckOutDT ? format(parseISO(booking.CheckOutDT), 'yyyy-MM-dd') : '',
      FirstName: booking.Customer?.FirstName || '',
      LastName: booking.Customer?.LastName || '',
      Telephone: booking.Customer?.Telephone || '',
      FullPrice: booking.FullPrice?.toString() || '',
      PaidPrice: booking.PaidPrice?.toString() || '',
      Comments: booking.Comments || '',
      apartmentid: booking.apartmentid?.toString() || '1',
    });
    setErrors({});
  };

  const handleSaveEdit = async () => {
    if (!validateForm() || !editingBooking) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/bookings/${editingBooking.BookingID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newCheckInDT: formData.CheckInDT,
          newCheckOutDT: formData.CheckOutDT,
          FullPrice: parseFloat(formData.FullPrice) || null,
          PaidPrice: parseFloat(formData.PaidPrice) || null,
          Comments: formData.Comments,
          apartmentid: parseInt(formData.apartmentid),
        }),
      });

      if (res.ok) {
        await loadBookings();
        resetForm();
        toast.success(t.admin.dashboard.updateSuccess, {
          position: 'top-center',
          style: { background: '#16a34a', color: 'white' }
        });
      } else {
        const error = await res.json();
        toast.error(error.error || t.admin.dashboard.updateError, {
          position: 'top-center',
          style: { background: '#dc2626', color: 'white' }
        });
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      toast.error(t.admin.dashboard.updateError, {
        position: 'top-center',
        style: { background: '#dc2626', color: 'white' }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteBooking = async (bookingId: number) => {
    if (!confirm(t.admin.dashboard.deleteConfirm)) {
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await loadBookings();
        toast.success(t.admin.dashboard.deleteSuccess, {
          position: 'top-center',
          style: { background: '#16a34a', color: 'white' }
        });
      } else {
        const error = await res.json();
        toast.error(error.error || t.admin.dashboard.deleteError, {
          position: 'top-center',
          style: { background: '#dc2626', color: 'white' }
        });
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      toast.error('Failed to delete booking', {
        position: 'top-center',
        style: { background: '#dc2626', color: 'white' }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      onLogout();
      toast.success(t.admin.login.logoutSuccess, {
        position: 'top-center',
        style: { background: '#16a34a', color: 'white' }
      });
    } catch (error) {
      console.error('Logout error:', error);
      // Still logout on client side even if server request fails
      onLogout();
    }
  };

  const getOverlappingBookingIDs = () => {
    const overlappingIDs = new Set<number>();
    for (let i = 0; i < bookings.length; i++) {
      for (let j = i + 1; j < bookings.length; j++) {
        const a = bookings[i];
        const b = bookings[j];

        const aStart = parseISO(a.CheckInDT);
        const aEnd = parseISO(a.CheckOutDT);
        const bStart = parseISO(b.CheckInDT);
        const bEnd = parseISO(b.CheckOutDT);

        const overlaps = aStart < bEnd && aEnd > bStart;

        if (overlaps) {
          overlappingIDs.add(a.BookingID);
          overlappingIDs.add(b.BookingID);
        }
      }
    }
    return overlappingIDs;
  };

  const overlappingIDs = getOverlappingBookingIDs();
  const filteredBookings = showAll
    ? bookings
    : bookings.filter(b => isAfter(parseISO(b.CheckOutDT), new Date()));

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-serif font-semibold text-zinc-900">
              {t.admin.dashboard.title}
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              {t.admin.dashboard.logout}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add/Edit Form */}
        {(isAddingBooking || editingBooking) && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-zinc-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-semibold text-zinc-900">
                {editingBooking ? t.admin.dashboard.editBooking : t.admin.dashboard.addBooking}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Apartment Selection */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <Home className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.apartment} *
                </label>
                <select
                  value={formData.apartmentid}
                  onChange={(e) => setFormData(prev => ({ ...prev, apartmentid: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
                >
                  <option value="1">{t.admin.dashboard.form.apartmentOptions.apartment}</option>
                  <option value="2">{t.admin.dashboard.form.apartmentOptions.studio}</option>
                </select>
              </div>

              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.checkIn} *
                </label>
                <input
                  type="date"
                  value={formData.CheckInDT}
                  onChange={(e) => setFormData(prev => ({ ...prev, CheckInDT: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors ${
                    errors.CheckInDT ? 'border-red-300' : 'border-zinc-300'
                  }`}
                />
                {errors.CheckInDT && (
                  <p className="mt-1 text-sm text-red-600">{errors.CheckInDT}</p>
                )}
              </div>

              {/* Check-out Date */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.checkOut} *
                </label>
                <input
                  type="date"
                  value={formData.CheckOutDT}
                  onChange={(e) => setFormData(prev => ({ ...prev, CheckOutDT: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors ${
                    errors.CheckOutDT ? 'border-red-300' : 'border-zinc-300'
                  }`}
                />
                {errors.CheckOutDT && (
                  <p className="mt-1 text-sm text-red-600">{errors.CheckOutDT}</p>
                )}
              </div>

              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.firstName} *
                </label>
                <input
                  type="text"
                  value={formData.FirstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, FirstName: e.target.value }))}
                  disabled={!!editingBooking}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors disabled:bg-zinc-50 disabled:text-zinc-500 ${
                    errors.FirstName ? 'border-red-300' : 'border-zinc-300'
                  }`}
                  placeholder="Enter first name"
                />
                {errors.FirstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.FirstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.lastName} *
                </label>
                <input
                  type="text"
                  value={formData.LastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, LastName: e.target.value }))}
                  disabled={!!editingBooking}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors disabled:bg-zinc-50 disabled:text-zinc-500 ${
                    errors.LastName ? 'border-red-300' : 'border-zinc-300'
                  }`}
                  placeholder="Enter last name"
                />
                {errors.LastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.LastName}</p>
                )}
              </div>

              {/* Telephone */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  {t.admin.dashboard.form.telephone} *
                </label>
                <input
                  type="tel"
                  value={formData.Telephone}
                  onChange={(e) => setFormData(prev => ({ ...prev, Telephone: e.target.value }))}
                  disabled={!!editingBooking}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors disabled:bg-zinc-50 disabled:text-zinc-500 ${
                    errors.Telephone ? 'border-red-300' : 'border-zinc-300'
                  }`}
                  placeholder="Enter telephone number"
                />
                {errors.Telephone && (
                  <p className="mt-1 text-sm text-red-600">{errors.Telephone}</p>
                )}
              </div>

              {/* Full Price */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <Euro className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.fullPrice} *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.FullPrice}
                  onChange={(e) => setFormData(prev => ({ ...prev, FullPrice: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors ${
                    errors.FullPrice ? 'border-red-300' : 'border-zinc-300'
                  }`}
                  placeholder="0.00"
                />
                {errors.FullPrice && (
                  <p className="mt-1 text-sm text-red-600">{errors.FullPrice}</p>
                )}
              </div>

              {/* Paid Price */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <Euro className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.paidPrice} *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.PaidPrice}
                  onChange={(e) => setFormData(prev => ({ ...prev, PaidPrice: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors ${
                    errors.PaidPrice ? 'border-red-300' : 'border-zinc-300'
                  }`}
                  placeholder="0.00"
                />
                {errors.PaidPrice && (
                  <p className="mt-1 text-sm text-red-600">{errors.PaidPrice}</p>
                )}
              </div>

              {/* Comments */}
              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  {t.admin.dashboard.form.comments}
                </label>
                <textarea
                  value={formData.Comments}
                  onChange={(e) => setFormData(prev => ({ ...prev, Comments: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors resize-none"
                  placeholder="Additional notes..."
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={editingBooking ? handleSaveEdit : handleAddBooking}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9D7F5F] text-white font-medium transition-colors hover:bg-[#8B6F47] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    {editingBooking ? t.admin.dashboard.saveChanges : t.admin.dashboard.addBooking}
                  </>
                )}
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-700 font-medium transition-colors hover:bg-zinc-50"
              >
                {t.admin.dashboard.cancel}
              </button>
            </div>
          </div>
        )}

        {/* Bookings List */}
        <div className="bg-white rounded-lg shadow-lg border border-zinc-200">
          <div className="p-6 border-b border-zinc-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-semibold text-zinc-900">
                {showAll ? t.admin.dashboard.allBookings : t.admin.dashboard.upcomingBookings}
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  {showAll ? t.admin.dashboard.showUpcoming : t.admin.dashboard.showAll}
                </button>
                {!isAddingBooking && !editingBooking && (
                  <button
                    onClick={() => setIsAddingBooking(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9D7F5F] text-white hover:bg-[#8B6F47] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    {t.admin.dashboard.addBooking}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.apartment}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.guest}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.contact}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.checkIn}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.checkOut}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.price}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.paid}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.remaining}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.comments}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">{t.admin.dashboard.table.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.BookingID}
                    className={`hover:bg-zinc-50 ${overlappingIDs.has(booking.BookingID) ? 'bg-red-50' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-900">
                        {Number(booking.apartmentid) === 1
                          ? (t.admin.dashboard.form.apartmentOptions?.apartment || 'Abstract Apartment')
                          : (t.admin.dashboard.form.apartmentOptions?.studio || 'Abstract Studio')
                        }
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-zinc-900">
                        {booking.Customer?.FirstName} {booking.Customer?.LastName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-600">
                        {booking.Customer?.Telephone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-900">
                        {format(parseISO(booking.CheckInDT), 'MMM dd, yyyy')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-900">
                        {format(parseISO(booking.CheckOutDT), 'MMM dd, yyyy')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-900">
                        {booking.FullPrice ? `€${booking.FullPrice}` : '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-900">
                        {booking.PaidPrice ? `€${booking.PaidPrice}` : '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-900">
                        {(() => {
                          const fullPrice = booking.FullPrice || 0;
                          const paidPrice = booking.PaidPrice || 0;
                          const remaining = Math.round(fullPrice - paidPrice);
                          return remaining > 0 ? `€${remaining}` : remaining < 0 ? `-€${Math.abs(remaining)}` : '€0';
                        })()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-600 max-w-xs truncate">
                        {booking.Comments || '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditBooking(booking)}
                          className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                          title="Edit booking"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteBooking(booking.BookingID)}
                          className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                          title="Delete booking"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredBookings.length === 0 && (
                  <tr>
                    <td colSpan={10} className="px-6 py-12 text-center text-zinc-500">
                      {t.admin.dashboard.noBookings}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center gap-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#9D7F5F]"></div>
            <span className="text-zinc-900">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}