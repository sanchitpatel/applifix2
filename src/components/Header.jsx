import React from 'react';

export default function Header({ onOpenBooking }) {
  return (
    <header className="site-header">
      <div className="logo">
        {/* Custom SVG logo icon representing repair/screen service */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <path d="M9 6h6"></path>
          {/* Subtle wrench symbol overlay */}
          <path d="M14.7 12.3a2.5 2.5 0 0 1-3.4-3.4"></path>
          <path d="M10 13l-3 3"></path>
        </svg>
        <span>Applifix</span>India
      </div>
      
      <nav>
        <ul className="nav-links">
          <li><a href="#repairs">Repairs</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
      
      <button className="btn-header-cta" onClick={onOpenBooking}>
        Book Repair
      </button>
    </header>
  );
}
