'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/lib/translations';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Send, 
  ExternalLink,
} from 'lucide-react';

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.277 3.277" className={className} aria-hidden="true">
      <path d="M1.678 2.21c-.228.003-.476-.003-.724-.018-.026-.003-.04.01-.056.026l-.194.215c-.01.01-.02.03-.038.023s-.01-.028-.01-.043v-.18c.003-.046-.008-.07-.06-.07a1.26 1.26 0 0 1-.194-.023c-.22-.05-.368-.17-.39-.422-.01-.11-.018-.217 0-.327A.43.43 0 0 1 .402.999C.73.945 1.06.927 1.39.922l1.036.023a3.25 3.25 0 0 1 .496.064c.197.04.33.192.348.396a1.48 1.48 0 0 1-.005.353.41.41 0 0 1-.253.33c-.125.054-.258.072-.39.082l-.94.038z" fill="#7c529e"/>
      <g fill="#fff">
        <path d="M.834 1.874c.046 0 .1-.043.115-.087s-.015-.06-.04-.08C.89 1.692.87 1.68.852 1.666.813 1.638.777 1.638.75 1.682c-.015.026-.038.026-.06.015-.064-.03-.115-.074-.146-.14C.53 1.528.53 1.5.56 1.48c.015-.01.033-.023.03-.05-.003-.03-.077-.136-.107-.146a.05.05 0 0 0-.038 0c-.07.023-.1.082-.072.148.082.205.23.345.43.432.013.005.026.005.03.008zm-.148-.6c-.01.003-.033-.008-.033.015 0 .015.018.013.03.015a.24.24 0 0 1 .233.24c.003.013-.003.033.015.036s.015-.02.015-.033a.28.28 0 0 0-.261-.274zm1.06.302v-.217c0-.043.015-.08.064-.08s.06.033.06.077v.028c0 .066 0 .066.06.05a.17.17 0 0 1 .207.084c.05.092.054.184 0 .276s-.156.12-.248.064c-.015-.01-.02-.015-.033.003-.018.026-.046.028-.074.015s-.036-.038-.036-.07zm.304.08c0-.07-.038-.12-.09-.123s-.095.046-.095.115.038.12.09.123.095-.046.095-.115zm-.765.003l.107-.29.018-.046c.015-.036.04-.056.082-.04s.05.05.036.09l-.125.325-.054.136c-.01.026-.028.046-.06.05-.036 0-.054-.02-.064-.05l-.18-.455c-.015-.04-.008-.077.038-.092s.066.013.082.05l.118.325zm1.17.036h-.11c-.028 0-.03.013-.018.033.023.043.09.06.146.04.02-.008.038-.018.06-.028.028-.015.054-.013.072.015s.008.056-.018.074c-.082.056-.17.074-.263.036s-.128-.115-.128-.21c-.003-.123.082-.22.192-.233s.212.066.233.182c.013.064-.005.087-.072.09zm-.054-.082c.01 0 .023.003.033 0 .02-.003.05.013.056-.01.008-.03-.018-.054-.043-.066-.036-.018-.07-.015-.1.013-.015.015-.033.033-.026.056s.03.008.05.01c.01 0 .02-.003.03-.003z"/>
        <path d="M.834 1.874C.826 1.87.816 1.87.803 1.866.6 1.78.455 1.638.373 1.434c-.028-.07 0-.125.072-.148a.05.05 0 0 1 .038 0c.03.01.105.115.107.146.003.023-.015.036-.03.05-.03.02-.03.046-.018.077a.27.27 0 0 0 .146.141c.023.01.046.01.06-.015.028-.043.064-.04.102-.015a.45.45 0 0 1 .056.041c.026.02.056.036.04.08s-.07.087-.115.087zm1.828-.228v-.153c0-.028.01-.05.036-.06s.056-.01.074.013.023.013.036 0c.018-.015.04-.023.067-.02s.046.02.05.05-.005.05-.028.056c-.105.026-.12.097-.11.19a.41.41 0 0 1-.003.097c-.005.038-.028.06-.067.06s-.054-.028-.056-.064v-.164zm-1.09.02V1.52c0-.04.018-.066.06-.066s.06.026.06.064v.294c0 .04-.02.067-.06.067s-.06-.028-.06-.07zm-.887-.394a.28.28 0 0 1 .261.274c0 .013.005.033-.015.033s-.015-.02-.015-.036a.24.24 0 0 0-.233-.24c-.013-.003-.03 0-.03-.015.003-.023.023-.013.033-.015zm1.018.074c-.005.038-.023.064-.064.066s-.07-.028-.07-.066.033-.072.07-.07.06.028.064.07z"/>
        <path d="M.875 1.52c-.003.01.005.028-.013.03-.023.003-.018-.018-.02-.03-.015-.09-.046-.123-.138-.143-.013-.003-.033 0-.03-.02s.023-.013.036-.01c.092.01.166.087.166.174z"/>
        <path d="M.806 1.505c0 .01 0 .023-.015.026-.01 0-.015-.008-.018-.018C.77 1.475.75 1.454.71 1.45.7 1.447.688 1.444.693 1.43c.003-.01.013-.01.023-.01.043-.003.09.043.09.087z"/>
      </g>
    </svg>
  );
}

export default function HouseContactPage() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '8-10',
    dates: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const content = {
    bg: {
      eyebrow: 'ВРЪЗКА С ДОМАКИНИТЕ',
      title: 'Контакти и запитвания',
      subtitle: 'Ще се радваме да отговорим на всички ваши въпроси, да проверим наличност за желаните от вас дати или да ви съдействаме с организирането на вашето събитие.',
      kristinaName: 'Кристина Иванова',
      kristinaRole: 'Домакин и резервации',
      kameliyaName: 'Камелия Иванова',
      kameliyaRole: 'Домакин и настаняване',
      viberBtn: 'Пишете по Viber',
      emailHeading: 'Имейл за запитвания',
      addressTitle: 'Точен адрес',
      addressText: 'с. Голец, ул. Васил Левски, Община Угърчин, Област Ловеч, България',
      mapsBtn: 'Отвори в Google Maps',
      formTitle: 'Изпратете директно запитване',
      formSubtitle: 'Попълнете формата и ще ви върнем отговор с детайли за наличност и цени.',
      nameLabel: 'Вашето име:',
      namePlaceholder: 'Иван Иванов',
      phoneLabel: 'Телефон за връзка:',
      emailLabel: 'Имейл адрес:',
      emailPlaceholder: 'ivan@primer.bg',
      guestsLabel: 'Очакван брой гости (до 14):',
      guestOptions: {
        opt1: '1 - 4 гости',
        opt2: '5 - 8 гости',
        opt3: '8 - 10 гости',
        opt4: '11 - 14 гости (пълен капацитет)',
      },
      datesLabel: 'Желани дати (настаняване / напускане):',
      datesPlaceholder: 'напр. 15.08 - 18.08 (3 нощувки)',
      messageLabel: 'Вашето съобщение или специални изисквания:',
      messagePlaceholder: 'Напишете вашия въпрос, час на пристигане или имате ли домашни любимци...',
      submitBtn: 'Изпрати запитване',
      successTitle: 'Благодарим за вашето запитване!',
      successText: 'Ще се свържем с вас възможно най-скоро за потвърждение.',
      newMsgBtn: 'Изпрати ново съобщение',
      mapHeading: 'Къде се намираме?',
      mapSubheading: 'с. Голец, Община Угърчин, Област Ловеч • На 1 ч. и 40 мин. от София, 23 мин. от Ловеч и Троян',
      mapLang: 'bg',
      mapIframeTitle: 'Местоположение на Къща за гости „Абстракт“ в с. Голец, област Ловеч, България',
    },
    el: {
      eyebrow: 'ΕΠΙΚΟΙΝΩΝΙΑ ΜΕ ΤΟΥΣ ΟΙΚΟΔΕΣΠΟΤΕΣ',
      title: 'Επικοινωνία και κρατήσεις',
      subtitle: 'Είμαστε στη διάθεσή σας για οποιαδήποτε απορία, έλεγχο διαθεσιμότητας ή οργάνωση της διαμονής σας.',
      kristinaName: 'Κριστίνα Ιβάνοβα',
      kristinaRole: 'Οικοδεσπότης & Κρατήσεις',
      kameliyaName: 'Καμέλια Ιβάνοβα',
      kameliyaRole: 'Οικοδεσπότης & Διαμονή',
      viberBtn: 'Μήνυμα στο Viber',
      emailHeading: 'Email επικοινωνίας',
      addressTitle: 'Διεύθυνση',
      addressText: 'Χωριό Γκόλετς, Οδός Βασίλ Λέφσκι, Δήμος Ουγκάρτσιν, Επαρχία Λόβετς, Βουλγαρία',
      mapsBtn: 'Άνοιγμα στο Google Maps',
      formTitle: 'Στείλτε μας μήνυμα',
      formSubtitle: 'Συμπληρώστε τη φόρμα και θα σας απαντήσουμε με λεπτομέρειες διαθεσιμότητας και τιμών.',
      nameLabel: 'Ονοματεπώνυμο:',
      namePlaceholder: 'Γιώργος Παπαδόπουλος',
      phoneLabel: 'Τηλέφωνο:',
      emailLabel: 'Email:',
      emailPlaceholder: 'name@example.com',
      guestsLabel: 'Αριθμός επισκεπτών (έως 14):',
      guestOptions: {
        opt1: '1 - 4 επισκέπτες',
        opt2: '5 - 8 επισκέπτες',
        opt3: '8 - 10 επισκέπτες',
        opt4: '11 - 14 επισκέπτες (πλήρης χωρητικότητα)',
      },
      datesLabel: 'Επιθυμητές ημερομηνίες:',
      datesPlaceholder: 'π.χ. 15.08 - 18.08 (3 διανυκτερεύσεις)',
      messageLabel: 'Το μήνυμά σας:',
      messagePlaceholder: 'Γράψτε την ερώτησή σας, την ώρα άφιξης ή αν ταξιδεύετε με κατοικίδια...',
      submitBtn: 'Αποστολή',
      successTitle: 'Ευχαριστούμε για το μήνυμά σας!',
      successText: 'Θα επικοινωνήσουμε σύντομα μαζί σας.',
      newMsgBtn: 'Αποστολή νέου μηνύματος',
      mapHeading: 'Πού βρισκόμαστε;',
      mapSubheading: 'Χωριό Γκόλετς, Δήμος Ουγκάρτσιν, Επαρχία Λόβετς • 1 ώρα & 40 λεπτά από τη Σόφια, 23 λεπτά από Λόβετς και Τρογιάν',
      mapLang: 'el',
      mapIframeTitle: 'Τοποθεσία Ξενώνα Abstract στο χωριό Γκόλετς, Επαρχία Λόβετς, Βουλγαρία',
    },
    en: {
      eyebrow: 'DIRECT HOST CONTACT',
      title: 'Get in Touch & Bookings',
      subtitle: 'We are here to answer your questions, check availability for your preferred dates, or assist with planning your mountain escape.',
      kristinaName: 'Kristina Ivanova',
      kristinaRole: 'Co-Host & Reservations',
      kameliyaName: 'Kameliya Ivanova',
      kameliyaRole: 'Co-Host & Guest Care',
      viberBtn: 'Message on Viber',
      emailHeading: 'Inquiries Email',
      addressTitle: 'Property Location',
      addressText: 'Golets Village, ul. Vasil Levski, Ugarchin Municipality, Lovech Province, Bulgaria',
      mapsBtn: 'Open in Google Maps',
      formTitle: 'Send Direct Inquiry',
      formSubtitle: 'Fill out the form below and we will reply promptly with availability and pricing details.',
      nameLabel: 'Your Full Name:',
      namePlaceholder: 'John Smith',
      phoneLabel: 'Phone Number:',
      emailLabel: 'Email Address:',
      emailPlaceholder: 'name@example.com',
      guestsLabel: 'Estimated Guest Count (up to 14):',
      guestOptions: {
        opt1: '1 - 4 guests',
        opt2: '5 - 8 guests',
        opt3: '8 - 10 guests',
        opt4: '11 - 14 guests (full capacity)',
      },
      datesLabel: 'Desired Dates (Check-in / Check-out):',
      datesPlaceholder: 'e.g. Aug 15 - Aug 18 (3 nights)',
      messageLabel: 'Your Message or Special Inquiries:',
      messagePlaceholder: 'Share your questions, estimated arrival time, or let us know if you are bringing pets...',
      submitBtn: 'Send Inquiry',
      successTitle: 'Thank You for Reaching Out!',
      successText: 'We have received your message and will reply promptly.',
      newMsgBtn: 'Send Another Message',
      mapHeading: 'Where to Find Us',
      mapSubheading: 'Golets Village, Ugarchin Municipality, Lovech Province • 1h 40m from Sofia, 23m from Lovech & Troyan',
      mapLang: 'en',
      mapIframeTitle: 'Abstract Guest House Location in Golets, Lovech Province, Bulgaria',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#5B7A3A]/10 text-[#5B7A3A] mb-3">
            {t.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Host Cards & Info (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kristina Card */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900">{t.kristinaName}</h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A3A] mt-0.5">
                    {t.kristinaRole}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center" aria-hidden="true">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+359878112454"
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-800 hover:text-[#5B7A3A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                  <span>+359 878 112 454</span>
                </a>
                <a
                  href="viber://chat?number=%2B359878112454"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#7c529e]/10 text-[#7c529e] text-xs font-bold hover:bg-[#7c529e]/20 transition-colors"
                >
                  <ViberIcon className="w-4 h-4" />
                  <span>{t.viberBtn}</span>
                </a>
              </div>
            </div>

            {/* Kameliya Card */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900">{t.kameliyaName}</h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A3A] mt-0.5">
                    {t.kameliyaRole}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#5B7A3A]/10 text-[#5B7A3A] flex items-center justify-center" aria-hidden="true">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+359889226794"
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-800 hover:text-[#5B7A3A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                  <span>+359 889 226 794</span>
                </a>
              </div>
            </div>

            {/* General Contacts Card */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#5B7A3A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">{t.emailHeading}</h3>
                  <a
                    href="mailto:abstract.apartments@gmail.com"
                    className="text-sm font-semibold text-zinc-800 hover:text-[#5B7A3A] transition-colors break-all"
                  >
                    abstract.apartments@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-100">
                <MapPin className="w-5 h-5 text-[#5B7A3A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">{t.addressTitle}</h3>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    {t.addressText}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/2p3M23H97QCURvqN7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-[#5B7A3A] hover:underline"
                  >
                    <span>{t.mapsBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center my-auto" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{t.successTitle}</h3>
                <p className="text-zinc-600 text-sm max-w-md mx-auto mb-6">{t.successText}</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
                >
                  {t.newMsgBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-1">
                    {t.formTitle}
                  </h2>
                  <p className="text-xs text-zinc-500">
                    {t.formSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="house-contact-name" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.nameLabel}</label>
                    <input
                      id="house-contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="house-contact-phone" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.phoneLabel}</label>
                    <input
                      id="house-contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+359 888 123 456"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="house-contact-email" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.emailLabel}</label>
                    <input
                      id="house-contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="house-contact-guests" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.guestsLabel}</label>
                    <select
                      id="house-contact-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50 bg-white"
                    >
                      <option value="1-4">{t.guestOptions.opt1}</option>
                      <option value="5-8">{t.guestOptions.opt2}</option>
                      <option value="8-10">{t.guestOptions.opt3}</option>
                      <option value="11-14">{t.guestOptions.opt4}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="house-contact-dates" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.datesLabel}</label>
                  <input
                    id="house-contact-dates"
                    name="dates"
                    type="text"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    placeholder={t.datesPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                  />
                </div>

                <div>
                  <label htmlFor="house-contact-message" className="block text-xs font-bold text-zinc-700 mb-1.5">{t.messageLabel}</label>
                  <textarea
                    id="house-contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A3A]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#5B7A3A] text-white font-medium text-sm hover:bg-[#4d6831] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{t.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Embed Card */}
        <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900">
                {t.mapHeading}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                {t.mapSubheading}
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/2p3M23H97QCURvqN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B7A3A] text-white text-xs font-semibold hover:bg-[#4d6831] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>{t.mapsBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 relative">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46797.77660232497!2d24.5200!3d43.0800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a976f62bbfdd49%3A0xa00a014cd0ea340!2zNTAyNSDQk9C-0LvQtdGG!5e0!3m2!1s${t.mapLang}!2sbg!4v1700000000000!5m2!1s${t.mapLang}!2sbg`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.mapIframeTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
