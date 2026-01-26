import { NextRequest, NextResponse } from 'next/server';

// Mock reviews data (used as fallback)
const mockReviews = [
  {
    author_name: 'Svetoslav Todorov',
    text: 'We had a great stay here as four friends on a trip. What a great place to be in. It has great living space comfortable beds fully equipped kitchen and a washing machine which was very useful. The apartment is located about 300 metres from the beach. The parking was free and easy. Had everything we needed.',
    time: Date.now() / 1000 - 86400 * 30, // 30 days ago
    rating: 5,
    profile_photo_url: null
  },
  {
    author_name: 'Ivan Ivanov',
    text: 'Beautiful apartment! Clean, spacious and very well equipped - has everything you need for a comfortable stay. The location is excellent - just a 2 minute walk from the beach, but at the same time in a quiet and peaceful place.',
    time: Date.now() / 1000 - 86400 * 60, // 60 days ago
    rating: 5,
    profile_photo_url: null
  },
  {
    author_name: 'Maria Georgieva',
    text: 'Perfect location, amazing hosts, beautiful apartment. We enjoyed our stay very much and would definitely come back. Highly recommended!',
    time: Date.now() / 1000 - 86400 * 15, // 15 days ago
    rating: 5,
    profile_photo_url: null
  }
];

export async function GET(request: NextRequest) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'bg'; // fallback to 'bg' if not provided

  // Helper function to format reviews
  const formatReviews = (reviews: any[]) => {
    return reviews.map((r: any) => ({
      name: r.author_name,
      review: r.text,
      date: new Date(r.time * 1000).toLocaleDateString(locale === 'en' ? 'en-US' : 'bg-BG'),
      rating: r.rating,
      profilePhotoUrl: r.profile_photo_url || null,
    }));
  };

  // Debug: Check if API key is available
  if (!apiKey) {
    console.error('Google Maps API key not found, using mock data');
    return NextResponse.json({ reviews: formatReviews(mockReviews) });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmagARgAlqRQR7AK38FlCyTE&key=${apiKey}&language=${locale}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Debug: Log the API response
    console.log('Google Places API response:', {
      status: response.status,
      hasResult: !!data.result,
      reviewCount: data.result?.reviews?.length || 0,
      errorMessage: data.error_message || 'No error message',
      statusCode: data.status
    });

    // Check if Google API returned an error
    if (data.status === 'REQUEST_DENIED' || data.status === 'INVALID_REQUEST' || data.status === 'OVER_QUERY_LIMIT' || data.error_message) {
      console.warn('Google Places API error, using mock data:', data.error_message || data.status);
      return NextResponse.json({ reviews: formatReviews(mockReviews) });
    }

    // If no reviews from Google API, use mock data for development
    let reviews = data.result?.reviews || [];

    if (reviews.length === 0) {
      console.log('No reviews from Google API, using mock data');
      reviews = mockReviews;
    }
    
    return NextResponse.json({ reviews: formatReviews(reviews) });
  } catch (error) {
    console.error('API Error:', error);
    // Return mock reviews even on error so the page doesn't break
    return NextResponse.json({ reviews: formatReviews(mockReviews) });
  }
}
