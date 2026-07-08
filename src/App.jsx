import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import VideoPlayer from './components/VideoPlayer';
import TrustReviews from './components/TrustReviews';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import ScrollVideoDemo from './components/ScrollVideoDemo';
import Lenis from 'lenis';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll momentum
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easeOut
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Run Lenis animation frame loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const handleScrollPush = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(5 * window.innerHeight, {
        duration: 7.0, // Majestic, cinematic slow-scroll through all video frames
        easing: (t) => 1 - Math.pow(1 - t, 3) // easeOutQuart: Fast initial pickup, smooth slow deceleration
      });
    } else {
      window.scrollTo({ top: 5 * window.innerHeight, behavior: 'smooth' });
    }
  };

  // Check if we're on the demo page
  const isDemo = window.location.pathname === '/demo' || window.location.search.includes('demo');

  // If demo mode, show only the scroll video demo
  if (isDemo) {
    return <ScrollVideoDemo />;
  }

  return (
    <div className="app-container">
      <main>
        {/* Top Branding & Hero Section */}
        <div className="left-column hero-container">
          <Header onOpenBooking={openBooking} />
          <Hero onOpenBooking={openBooking} />
          <div
            className="scroll-indicator-label"
            onClick={handleScrollPush}
          >
            <span>scroll while we fix your iphone</span>
            <span className="scroll-indicator-arrow">↓</span>
          </div>
        </div>

        {/* Scroll-Driven Feature Showcase (Full Screen) */}
        <ScrollVideoDemo onOpenBooking={openBooking} />

        {/* Action, Services, and Reviews */}
        <div className="left-column" style={{ marginTop: 0 }}>
          <VideoPlayer />
          <FeaturedServices onOpenBooking={openBooking} />
          <TrustReviews />
        </div>
      </main>

      {/* Footer: Spans full width at the bottom of the page */}
      <Footer />

      {/* Booking Modal (Shared glassmorphism popup) */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
