'use client';

import { useEffect, useRef, useState } from 'react';
import { Footprints, ExternalLink } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    google: any;
    gm_authFailure?: () => void;
  }
}

interface MapWithRouteProps {
  origin: string;
  destination: string;
  originPlaceId?: string;
  destinationPlaceId?: string;
  destinationLat?: number;
  destinationLng?: number;
  mapTitle: string;
  beachWalk?: {
    title: string;
    time: string;
    description: string;
    getDirections: string;
    beachMapsUrl: string;
  };
  onError?: () => void;
}

export function MapWithRoute({ origin, destination, originPlaceId, destinationPlaceId, destinationLat, destinationLng, beachWalk, onError }: MapWithRouteProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const scriptLoadedRef = useRef(false);
  const routePolylineRef = useRef<any>(null);
  const originMarkerRef = useRef<any>(null);
  const destinationMarkerRef = useRef<any>(null);

  useEffect(() => {
    // Get API key from environment variable
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setError('Google Maps API key is not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment variables.');
      console.error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set');
      return;
    }

    // Check if script is already loaded
    if (window.google && window.google.maps) {
      setMapLoaded(true);
      return;
    }

    // Prevent loading script multiple times
    if (scriptLoadedRef.current) {
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // Wait for it to load
      const checkGoogle = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkGoogle);
          setMapLoaded(true);
        }
      }, 100);
      
      return () => clearInterval(checkGoogle);
    }

    scriptLoadedRef.current = true;

    // Set up auth failure handler
    window.gm_authFailure = () => {
      setError('Google Maps authentication failed. Please check your API key.');
      console.error('Google Maps authentication failed');
    };

    // Load Google Maps script with unique callback name
    const callbackName = `initGoogleMap_${Date.now()}`;
    
    // Create callback function
    (window as any)[callbackName] = () => {
      setMapLoaded(true);
      delete (window as any)[callbackName];
    };

    // Load Google Maps script with required libraries
    // Note: 'directions' is not a separate library, it's part of the core API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry&loading=async&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    
    script.onerror = () => {
      setError('Failed to load Google Maps script. Please check your API key and network connection.');
      console.error('Failed to load Google Maps script');
      scriptLoadedRef.current = false;
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup callback
      if ((window as any)[callbackName]) {
        delete (window as any)[callbackName];
      }
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google || !window.google.maps) return;

    // Initialize map
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 16,
      center: { lat: 40.7631274, lng: 23.9069595 }, // Default center (apartment location)
      mapTypeControl: false,
      fullscreenControl: true,
      streetViewControl: false,
      zoomControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }],
        },
      ],
    });

    mapInstanceRef.current = map;

    // Create DirectionsService
    const directionsService = new window.google.maps.DirectionsService();

    // Calculate and display route using Place IDs if available (more reliable)
    const routeRequest: any = {
      travelMode: window.google.maps.TravelMode.WALKING,
      provideRouteAlternatives: false,
      optimizeWaypoints: false,
    };

    // Use Place IDs if provided, otherwise use address strings
    if (originPlaceId) {
      routeRequest.origin = { placeId: originPlaceId };
    } else {
      routeRequest.origin = origin;
    }

    // Use coordinates if provided, then Place ID, otherwise address string
    if (destinationLat !== undefined && destinationLng !== undefined) {
      routeRequest.destination = { lat: destinationLat, lng: destinationLng };
    } else if (destinationPlaceId) {
      routeRequest.destination = { placeId: destinationPlaceId };
    } else {
      routeRequest.destination = destination;
    }

    directionsService.route(
      routeRequest,
      (result: any, status: any) => {
        if (status === 'OK' && result) {
          
          // Clear previous polyline and markers if they exist
          if (routePolylineRef.current) {
            routePolylineRef.current.setMap(null);
          }
          if (originMarkerRef.current) {
            originMarkerRef.current.setMap(null);
          }
          if (destinationMarkerRef.current) {
            destinationMarkerRef.current.setMap(null);
          }
          
          // Get the route path from the result
          const route = result.routes[0];
          
          // Build path from overview_path or from legs/steps
          let path: any[] = [];
          
          if (route.overview_path && route.overview_path.length > 0) {
            path = route.overview_path;
          } else {
            // Build path from legs and steps if overview_path is not available
            route.legs.forEach((leg: any) => {
              if (leg.steps) {
                leg.steps.forEach((step: any) => {
                  if (step.path) {
                    path = path.concat(step.path);
                  }
                });
              }
            });
          }
          
          // Try to decode overview_polyline if path is empty
          if (path.length === 0 && route.overview_polyline && route.overview_polyline.points && window.google.maps.geometry && window.google.maps.geometry.encoding) {
            try {
              path = window.google.maps.geometry.encoding.decodePath(route.overview_polyline.points);
            } catch (decodeError) {
              console.error('Error decoding polyline:', decodeError);
            }
          }
          
          // Create a polyline with dots along the route
          if (path.length > 0) {
            try {
              routePolylineRef.current = new window.google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: '#4285F4',
                strokeWeight: 5,
                strokeOpacity: 0.8,
                icons: [
                  {
                    icon: {
                      path: window.google.maps.SymbolPath.CIRCLE,
                      scale: 6,
                      fillColor: '#4285F4',
                      fillOpacity: 1,
                      strokeColor: '#ffffff',
                      strokeWeight: 2,
                    },
                    offset: '0%',
                    repeat: '25px',
                  },
                ],
                map: map,
              });
            } catch (error) {
              console.error('Error creating polyline:', error);
              setError(`Failed to draw route: ${error}`);
            }
          }
          
          // Add custom markers for origin and destination
          if (route.legs && route.legs.length > 0) {
            const leg = route.legs[0];
            
            // Origin marker (Apartment)
            if (leg.start_location) {
              originMarkerRef.current = new window.google.maps.Marker({
                position: leg.start_location,
                map: map,
                title: 'Abstract Apartment',
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                  scaledSize: new window.google.maps.Size(32, 32),
                },
              });
            }
            
            // Destination marker (Beach)
            if (leg.end_location) {
              destinationMarkerRef.current = new window.google.maps.Marker({
                position: leg.end_location,
                map: map,
                title: destination,
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  scaledSize: new window.google.maps.Size(32, 32),
                },
              });
            }
          }

          // Fit map to show entire route
          const bounds = new window.google.maps.LatLngBounds();
          result.routes[0].legs.forEach((leg: any) => {
            bounds.extend(leg.start_location);
            bounds.extend(leg.end_location);
          });
          map.fitBounds(bounds);
          setError(null); // Clear any previous errors
        } else {
          console.error('Directions request failed:', status, result);
          const errorMessage = status === 'ZERO_RESULTS' 
            ? 'No route found between the locations'
            : status === 'NOT_FOUND'
            ? 'One or both locations could not be found'
            : status === 'REQUEST_DENIED'
            ? 'Directions API request denied. Please check your API key permissions.'
            : `Failed to calculate route: ${status}`;
          setError(errorMessage);
          
          // Trigger fallback callback if provided
          if (onError && (status === 'REQUEST_DENIED' || status === 'OVER_QUERY_LIMIT')) {
            onError();
          }
          
          // Still show the map even if route fails
          // Set map center between the locations
          if (originPlaceId && destinationPlaceId) {
            // Use geocoding to get coordinates if route fails
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ placeId: originPlaceId }, (results: any, status: any) => {
              if (status === 'OK' && results[0]) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(16);
              }
            });
          }
        }
      }
    );
    

    // Cleanup function
    return () => {
      // Clean up custom polyline and markers
      if (routePolylineRef.current) {
        routePolylineRef.current.setMap(null);
        routePolylineRef.current = null;
      }
      if (originMarkerRef.current) {
        originMarkerRef.current.setMap(null);
        originMarkerRef.current = null;
      }
      if (destinationMarkerRef.current) {
        destinationMarkerRef.current.setMap(null);
        destinationMarkerRef.current = null;
      }
    };
  }, [mapLoaded, origin, destination, originPlaceId, destinationPlaceId, destinationLat, destinationLng]);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Walking Time Overlay - Bottom Right */}
      {beachWalk && mapLoaded && !error && (
        <div className="absolute bottom-4 right-4 z-10">
          <Link
            href={beachWalk.beachMapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 bg-white/95bg-zinc-900/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-blue-100border-blue-900/50 hover:shadow-xl hover:bg-whitehover:bg-zinc-900 transition-all"
          >
            <div className="p-2 sm:p-2.5 rounded-lg bg-blue-100bg-blue-900/50 group-hover:bg-blue-200group-hover:bg-blue-800/50 transition-colors">
              <Footprints className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-medium text-zinc-600text-zinc-400 leading-tight">
                {beachWalk.title}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold text-blue-600text-blue-400">
                  {beachWalk.time}
                </span>
                <span className="text-xs sm:text-sm text-zinc-500text-zinc-500">
                  {beachWalk.description}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-400text-zinc-500 group-hover:text-blue-600group-hover:text-blue-400 transition-colors flex-shrink-0" />
          </Link>
        </div>
      )}
      
      {!mapLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-200bg-zinc-800">
          <div className="text-zinc-600text-zinc-400">Loading map...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-200bg-zinc-800">
          <div className="text-sm text-red-600text-red-400 p-4 text-center max-w-md">
            {error}
            <br />
            <span className="text-xs mt-2 block">
              The map will fall back to the embedded version.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}