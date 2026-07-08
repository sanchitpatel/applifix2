import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ onOpenBooking }) {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[85%] max-w-[600px] bg-white/40 backdrop-blur-xl rounded-full border border-slate-300/50 px-4 py-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.03)] select-none">
      
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
        <span className="text-slate-800 font-extrabold text-xl tracking-tight select-none">
          APPLIFIX<span className="text-blue-500 text-lg">.</span>
        </span>
      </div>
      
      {/* Middle: Navigation Links */}
      <nav className="hidden sm:flex items-center gap-6 md:gap-8">
        <a 
          href="#repairs" 
          className="text-slate-700 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Repairs
        </a>
        <a 
          href="#pricing" 
          className="text-slate-700 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Store
        </a>
        <a 
          href="#support" 
          className="text-slate-700 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors duration-200"
        >
          Support
        </a>
      </nav>
      
      {/* Right: CTA Booking Button */}
      <motion.button 
        onClick={onOpenBooking}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-5 py-2 min-h-[40px] text-xs md:text-sm font-semibold border-none outline-none text-white rounded-[25px] transition-[box-shadow,opacity] duration-200 ease-out focus:outline-none flex items-center justify-center gap-1.5 whitespace-nowrap will-change-transform transform-gpu antialiased subpixel-antialiased"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
          boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5), inset 2px 2px 5px rgba(16, 34, 66, 0.45), inset -2px -2px 5px rgba(137, 180, 255, 0.48)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4), inset 3px 3px 7px rgba(16, 34, 66, 0.48), inset -3px -3px 7px rgba(137, 180, 255, 0.8)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5), inset 2px 2px 5px rgba(16, 34, 66, 0.45), inset -2px -2px 5px rgba(137, 180, 255, 0.48)';
        }}
      >
        Book Repair
      </motion.button>
      
    </header>
  );
}
