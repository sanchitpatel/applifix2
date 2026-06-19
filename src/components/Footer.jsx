import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="support">
      <div className="footer-grid">
        <div className="footer-info">
          <div className="logo" style={{ border: 'none', padding: 0 }}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
              <path d="M9 6h6"></path>
              <path d="M14.7 12.3a2.5 2.5 0 0 1-3.4-3.4"></path>
              <path d="M10 13l-3 3"></path>
            </svg>
            <span>Applifix</span>India
          </div>
          
          <p className="footer-desc">
            Your trusted destination for premium smartphone and smartwatch repairs. We specialize in glass restorations, screen fixes, battery swaps, and motherboard microsoldering.
          </p>

          <div className="footer-contacts">
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Patiala, Punjab, India</span>
            </div>

            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:+917986863776">+91 7986863776</a>
            </div>

            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:applifyservicecenter@gmail.com">applifyservicecenter@gmail.com</a>
            </div>
          </div>

          <div className="footer-socials">
            {/* Instagram */}
            <a href="https://www.instagram.com/applifix_india/?hl=en" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"></line>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="https://youtube.com/@applify5080?si=61Jei2eder7yggaa" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/917986863776" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.244 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.114-2.875-6.973-1.856-1.859-4.335-2.88-6.972-2.882-5.437 0-9.863 4.42-9.867 9.864-.001 1.73.457 3.418 1.328 4.908l-.307 1.12 1.157-.303zm12.385-6.666c-.302-.152-1.785-.881-2.062-.982-.277-.1-.478-.151-.679.151-.202.302-.782.982-.958 1.184-.176.201-.352.226-.654.075-.302-.15-1.274-.47-2.427-1.498-.897-.8-1.502-1.788-1.678-2.09-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.529.151-.176.201-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.679-1.637-.93-2.24-.245-.589-.494-.509-.679-.518-.176-.008-.377-.01-.578-.01-.201 0-.528.075-.805.377-.277.302-1.057 1.03-1.057 2.512 0 1.483 1.082 2.915 1.232 3.116.15.201 2.13 3.253 5.16 4.562.72.311 1.282.497 1.721.637.724.23 1.382.197 1.902.12.58-.087 1.785-.73 2.037-1.435.252-.704.252-1.307.176-1.433-.076-.127-.277-.202-.579-.353z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-hours">
          <span className="footer-title">Operating Hours</span>
          <ul className="hours-list">
            <li><span>Monday - Saturday:</span> <span>10:30 AM - 08:00 PM</span></li>
            <li><span>Sunday:</span> <span style={{ color: 'var(--broken)', fontWeight: 'bold' }}>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Applifix India. All rights reserved.</p>
        <p>Expert Third-Party Repair Center | Patiala, Punjab</p>
      </div>
    </footer>
  );
}
