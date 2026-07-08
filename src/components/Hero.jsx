import React from 'react';
import RotatingMockup from './RotatingMockup';

export default function Hero({ onOpenBooking }) {
  const handleScrollToVideo = () => {
    const element = document.getElementById('video-action');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          iPhone Screen Repair in India
        </h1>
        <p className="hero-subtitle">
          Expert repairs. Genuine parts. Same-day service. We specialize in restoration of screens, glass replacement, and battery health for your premium devices.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={onOpenBooking}>
            Book Repair Now
          </button>
          <button className="btn-secondary" onClick={handleScrollToVideo}>
            Watch Live Repairs
          </button>
        </div>
      </div>
      
      <RotatingMockup />
    </section>
  );
}
