import React from 'react';

export default function Header({ onOpenBooking }) {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[620px] bg-transparent backdrop-blur-xl rounded-full border border-slate-300/50 px-5 py-3 flex items-center justify-center gap-8 md:gap-12 shadow-[0_8px_32px_rgba(0,0,0,0.03)] select-none">
      
      {/* Left: Circular Logo & Brand name */}
      <div className="flex items-center gap-2.5">
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-xl shrink-0">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
            <path d="M9 6h6"></path>
            <path d="M14.7 12.3a2.5 2.5 0 0 1-3.4-3.4"></path>
            <path d="M10 13l-3 3"></path>
          </svg>
        </div>
        <span className="text-slate-800 font-extrabold text-base tracking-tight select-none">
          Applifix<span className="text-blue-500">.</span>
        </span>
      </div>
      
      {/* Middle: Navigation Links */}
      <nav className="hidden sm:flex items-center gap-6 md:gap-8">
        <a 
          href="#repairs" 
          className="text-slate-600 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Repairs
        </a>
        <a 
          href="#pricing" 
          className="text-slate-600 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Pricing
        </a>
        <a 
          href="#support" 
          className="text-slate-600 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Support
        </a>
      </nav>
      
      {/* Right: CTA Booking Button */}
      <button 
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2 rounded-full text-xs md:text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]"
        onClick={onOpenBooking}
      >
        Book Repair
      </button>
      
    </header>
  );
}
