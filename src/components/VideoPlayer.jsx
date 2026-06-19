import React from 'react';

export default function VideoPlayer() {
  // We will use a verified active repair video from Applifix's YouTube channel.
  const videoId = "J5bCAqdVqSE"; // Apple Watch Glass Replacement video
  const youtubeChannelUrl = "https://youtube.com/@applify5080?si=61Jei2eder7yggaa";

  return (
    <section className="video-section" id="video-action">
      <h2 className="video-card-title">Expert Repairs in Action</h2>
      
      <div className="video-container-outer">
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
            title="Applifix Expert Repairs in Action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <a 
          href={youtubeChannelUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '12px 24px', 
            fontSize: '0.9rem',
            borderColor: '#ef4444',
            color: '#ef4444'
          }}
        >
          {/* YouTube red icon */}
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.4 12 3.4 12 3.4s-7.53 0-9.388.655a3.003 3.003 0 0 0-2.11 2.108C0 8.017 0 12 0 12s0 3.983.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.6 12 20.6 12 20.6s7.53 0 9.388-.655a3.003 3.003 0 0 0 2.11-2.108C24 15.983 24 12 24 12s0-3.983-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch More on YouTube
        </a>
      </div>
    </section>
  );
}
