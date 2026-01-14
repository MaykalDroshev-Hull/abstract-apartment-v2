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
        const data = await response.json();
        setReviews(data.reviews);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [language]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F2ED]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9D7F5F]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 mb-6">
            {t.reviews.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
            {t.reviews.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">
              {t.reviews.sectionTitle}
            </h2>
            <p className="text-lg text-zinc-600">
              {t.reviews.sectionSubtitle}
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 relative"
                style={{
                  transform: `rotate(${Math.random() * 4 - 2}deg) translateY(${Math.random() * 10}px)`,
                }}
              >
                {/* Profile Photo */}
                {review.profilePhotoUrl && (
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={review.profilePhotoUrl}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400 text-lg">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="text-zinc-700 italic mb-4 text-center">
                  "{review.review}"
                </blockquote>

                {/* Author and Date */}
                <div className="text-center">
                  <div className="font-semibold text-zinc-900 mb-1">{review.name}</div>
                  <div className="text-sm text-zinc-500">{review.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* More Reviews Text */}
          <div className="text-center mb-12">
            <p className="text-lg font-medium text-zinc-700">
              {t.reviews.moreReviewsText}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJmagARgAlqRQR7AK38FlCyTE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#4285f4] hover:bg-[#357ae8] text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Image
                src="/Images/Reviews/GoogleLogo.png"
                alt="Google Reviews"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              {t.reviews.readMore}
            </a>

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJmagARgAlqRQR7AK38FlCyTE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#34a853] hover:bg-[#2c8c46] text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Image
                src="/Images/Reviews/5Stars.png"
                alt="Leave a review"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              {t.reviews.leaveReview}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}