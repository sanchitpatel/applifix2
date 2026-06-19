import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import VideoPlayer from './components/VideoPlayer';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import TrustReviews from './components/TrustReviews';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="app-container">
      {/* Left Column: Branding, Hero copy, Slider, Services */}
      <main className="left-column">
        <Header onOpenBooking={openBooking} />
        
        <Hero onOpenBooking={openBooking} />
        
        <FeaturedServices onOpenBooking={openBooking} />
      </main>

      {/* Right Column: Video action, Before/After grid, reviews and warranty badges */}
      <aside className="right-column">
        <VideoPlayer />
        
        <BeforeAfterGallery />
        
        <TrustReviews />
      </aside>

      {/* Footer: Spans full width at the bottom of the page */}
      <Footer />

      {/* Booking Modal (Shared glassmorphism popup) */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
