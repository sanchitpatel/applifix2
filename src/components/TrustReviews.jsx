import React from 'react';

export default function TrustReviews() {
  const badges = [
    {
      id: 1,
      label: 'Genuine Parts',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 11 11 13 15 9"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      label: '1-Year Warranty',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <polyline points="8 14 10 16 14 12"></polyline>
        </svg>
      )
    },
    {
      id: 3,
      label: '5★ Rated',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      id: 4,
      label: 'Fast Service',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Rohan S.',
      rating: 5,
      avatarInitials: 'RS',
      text: 'Excellent customer service and professional repair quality. The team kept me informed throughout the process, and my phone looks brand new again.'
    },
    {
      id: 2,
      name: 'Anjali G.',
      rating: 5,
      avatarInitials: 'AG',
      text: 'The repair was completed quickly and the device was returned in perfect condition. Great communication and a very smooth experience overall.'
    },
    {
      id: 3,
      name: 'Vikram P.',
      rating: 5,
      avatarInitials: 'VP',
      text: 'Fast turnaround time and reliable service. The staff was knowledgeable, transparent, and delivered exactly what was promised.'
    }
  ];

  return (
    <section className="trust-section">
      <h2 className="video-card-title">Trust & Reviews</h2>

      {/* Badges Grid */}
      <div className="badges-grid">
        {badges.map((badge) => (
          <div key={badge.id} className="trust-badge">
            {badge.icon}
            {badge.label}
          </div>
        ))}
      </div>

      {/* Reviews Cards List */}
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="review-avatar">
                {review.avatarInitials}
              </div>
              
              <div className="review-meta">
                <span className="review-name">{review.name}</span>
                <div className="review-rating" aria-label={`Rated ${review.rating} stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className="review-text">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
