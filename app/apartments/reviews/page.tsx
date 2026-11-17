'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLanguage } from '@/app/lib/translations';

interface Review {
  name: string;
  review: string;
  date: string;
  rating: number;
  profilePhotoUrl: string | null;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = useTranslations();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?locale=${language}`);

        if (!response.ok) {
          console.error('API response not OK:', response.status, response.statusText);
        }

        const data = await response.json();

        if (Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        } else if (data.error) {
          console.error('API Error but no reviews fallback:', data.error);
          setReviews([]);
        } else {
          console.warn('Unexpected API response format - no reviews array:', data);
          setReviews([]);
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setReviews([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [language]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F2ED]" role="status" aria-label="Loading reviews">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9D7F5F]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 mb-6 text-balance">
              {t.reviews.hero.title}
            </h1>
              <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto text-pretty">
                {t.reviews.hero.subtitle}
              </p>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4 text-balance">
                    {t.reviews.sectionTitle}
                  </h2>
                    <p className="text-lg text-zinc-600 text-pretty max-w-2xl mx-auto">
                      {t.reviews.sectionSubtitle}
                    </p>
                  </div>

                  {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      {reviews && reviews.length > 0 ? reviews.map((review, index) => (
                        <div
                          key={index}
                          className="bg-white/80 backdrop-blur-xs rounded-2xl border border-zinc-300/80 p-6 shadow-xs hover:border-[#9D7F5F]/40 transition-colors relative"
                        >
                          {/* Profile Photo */}
                          {review.profilePhotoUrl && (
                              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs">
                                <Image
                                  src={review.profilePhotoUrl}
                                  alt={`Reviewer profile photo of ${review.name}`}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                )}

                              {/* Rating Stars */}
                              <div className="flex justify-center mb-4">
                                <div
                                  role="img"
                                  aria-label={`${review.rating} out of 5 stars`}
                                  className="flex text-amber-500 text-lg gap-0.5"
                                >
                                  <span aria-hidden="true">
                                    {'★'.repeat(review.rating)}
                                    {'☆'.repeat(5 - review.rating)}
                                  </span>
                                </div>
                              </div>

                              {/* Review Text */}
                                <blockquote className="text-zinc-700 mb-4 text-center text-pretty leading-relaxed">
                                  “{review.review}”
                                </blockquote>

                                {/* Author and Date */}
                                  <div className="text-center pt-3 border-t border-zinc-200/80">
                                    <div className="font-semibold text-zinc-900 mb-0.5">{review.name}</div>
                                    <div className="text-sm text-zinc-600 tabular-nums">{review.date}</div>
                                  </div>
                                </div>
                                )) : (
                                <div className="col-span-full text-center py-12">
                                  <p className="text-lg text-zinc-600">No reviews available at this time.</p>
                                </div>
            )}
                            </div>

          {/* More Reviews Text */}
                          <div className="text-center mb-12">
                              <p className="text-lg font-medium text-zinc-700 text-pretty">
                                {t.reviews.moreReviewsText}
                              </p>
                          </div>

                          {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                              <a
                                href="https://search.google.com/local/reviews?placeid=ChIJmagARgAlqRQR7AK38FlCyTE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-7 py-3.5 bg-[#4285f4] hover:bg-[#357ae8] text-white font-semibold rounded-xl transition-colors shadow-xs hover:shadow-sm"
                              >
                                <Image
                                  src="/Images/Reviews/GoogleLogo.png"
                                  alt="Google Reviews logo"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>{t.reviews.readMore}</span>
                              </a>

                              <a
                                href="https://search.google.com/local/writereview?placeid=ChIJmagARgAlqRQR7AK38FlCyTE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-7 py-3.5 bg-[#34a853] hover:bg-[#2c8c46] text-white font-semibold rounded-xl transition-colors shadow-xs hover:shadow-sm"
                              >
                                <Image
                                  src="/Images/Reviews/5Stars.png"
                                  alt="Five-star Google rating icon"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>{t.reviews.leaveReview}</span>
                              </a>
                            </div>
                          </div>
                        </section>
    </div>
                    );
}
