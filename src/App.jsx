import React, { useState, useEffect } from 'react';
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
        <div className="left-column">
          <Header onOpenBooking={openBooking} />
          <Hero onOpenBooking={openBooking} />
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
