'use client';

import { useState } from 'react';
import { useTranslations } from '@/app/lib/translations';

export function ContactForm() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Question',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.required;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.invalidEmail;
    }
    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Form is just UI for now - show success message
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Question',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-whitebg-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-zinc-200border-zinc-700">
      <h2
        className="text-2xl sm:text-3xl font-bold text-zinc-900text-zinc-50 mb-6"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {t.contact.form.title}
      </h2>

      {isSubmitted && (
        <div className="mb-6 p-4 rounded-lg bg-green-50bg-green-900/20 border border-green-200border-green-800 text-green-800text-green-200">
          {t.contact.form.successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700text-zinc-300 mb-2">
            {t.contact.form.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.name
                ? 'border-red-300border-red-700'
                : 'border-zinc-300border-zinc-600'
            } bg-whitebg-zinc-900 text-zinc-900text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors`}
            placeholder={t.contact.form.namePlaceholder}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700text-zinc-300 mb-2">
            {t.contact.form.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.email
                ? 'border-red-300border-red-700'
                : 'border-zinc-300border-zinc-600'
            } bg-whitebg-zinc-900 text-zinc-900text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors`}
            placeholder={t.contact.form.emailPlaceholder}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700text-zinc-300 mb-2">
            {t.contact.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-zinc-300border-zinc-600 bg-whitebg-zinc-900 text-zinc-900text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
            placeholder={t.contact.form.phonePlaceholder}
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-zinc-700text-zinc-300 mb-2">
            {t.contact.form.subject}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-zinc-300border-zinc-600 bg-whitebg-zinc-900 text-zinc-900text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors"
          >
            {t.contact.form.subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700text-zinc-300 mb-2">
            {t.contact.form.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.message
                ? 'border-red-300border-red-700'
                : 'border-zinc-300border-zinc-600'
            } bg-whitebg-zinc-900 text-zinc-900text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#9D7F5F] focus:border-transparent transition-colors resize-none`}
            placeholder={t.contact.form.messagePlaceholder}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600text-red-400">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-[#9D7F5F] text-white font-medium text-sm hover:bg-[#8B6F47] transition-colors"
        >
          {t.contact.form.submit}
        </button>
      </form>
    </div>
  );
}

