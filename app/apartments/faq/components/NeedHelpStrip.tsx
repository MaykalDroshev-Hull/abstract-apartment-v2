'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

interface NeedHelpStripProps {
  title: string;
  description: string;
  callText: string;
  emailText: string;
  phoneNumbers: Array<{ phone: string; name: string }>;
  email: string;
}

export function NeedHelpStrip({ title, description, callText, emailText, phoneNumbers, email }: NeedHelpStripProps) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8">
      <h3 className="text-2xl font-serif text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Phone Numbers */}
        <div className="flex-1 flex flex-col sm:flex-row gap-3">
          {phoneNumbers.map((number, index) => (
            <Link
              key={index}
              href={`tel:${number.phone}`}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9D7F5F]" />
              <span className="flex-1">
                <span className="block text-xs text-zinc-500">{number.name}</span>
                <span className="block">{number.phone}</span>
              </span>
            </Link>
          ))}
        </div>
        
        {/* Email */}
        <Link
          href={`mailto:${email}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-colors"
        >
          <Mail className="w-4 h-4 text-[#9D7F5F]" />
          <span>{emailText}</span>
        </Link>
      </div>
    </div>
  );
}

