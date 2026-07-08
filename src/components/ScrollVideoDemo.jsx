import { useEffect, useRef, useState } from 'react';
import '../styles/ScrollVideoDemo.css';

const ScrollVideoDemo = ({ onOpenBooking }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const requestRef = useRef(null);
  const easedTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Handle video loaded
    const handleLoadedMetadata = () => {
      console.log('✅ Video loaded! Duration:', video.duration, 'seconds');
      setIsVideoLoaded(true);
      video.pause();
      video.currentTime = 0;
      easedTimeRef.current = 0;
    };

    const handleError = (e) => {
      console.error('❌ Video loading error:', e);
      console.error('Video error details:', video.error);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    
    // Prevent seeking events from blocking
    video.addEventListener('seeking', () => {
      // Allow seeking to happen without blocking
    });

    // Calculate target time based on scroll
    const getTargetTime = () => {
      if (!video.duration) return 0;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Start video playback when container enters the bottom half of viewport
      // (corresponds to scrolling past half of the 100vh hero pane)
      const triggerOffset = windowHeight/1;
      const animationDistance = containerHeight - windowHeight + triggerOffset;
      
      const scrolled = Math.max(0, triggerOffset - rect.top);
      const scrollProgress = Math.min(1, scrolled / animationDistance);

      return scrollProgress * video.duration;
    };

    // Continuous update loop - runs at 60fps
    const updateVideo = () => {
      if (!video.duration) {
        requestRef.current = requestAnimationFrame(updateVideo);
        return;
      }

      const targetTime = getTargetTime();
      const timeDiff = targetTime - easedTimeRef.current;
      
      // Easing speed: smaller = smoother/slower, larger = faster/tighter.
      // 0.08 offers a perfect balance of responsiveness and buttery smoothness.
      const ease = 0.08;

      if (Math.abs(timeDiff) > 0.001) {
        // Only trigger a new seek if the video is NOT currently seeking.
        // This avoids piling up abort-seek requests in the browser decoder thread.
        if (!video.seeking) {
          try {
            easedTimeRef.current += timeDiff * ease;
            easedTimeRef.current = Math.max(0, Math.min(video.duration, easedTimeRef.current));
            video.currentTime = easedTimeRef.current;
          } catch (e) {
            // Ignore seek errors
          }
        }
      }

      requestRef.current = requestAnimationFrame(updateVideo);
    };

    // Start the continuous update loop
    if (isVideoLoaded) {
      updateVideo();
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVideoLoaded]);

  return (
    <div className="scroll-video-page">
      {/* Video container - full screen from top */}
      <div ref={containerRef} className="scroll-video-container">
        {/* Sticky video wrapper */}
        <div className="video-wrapper">
          <div className="video-frame-container">
            <video
              ref={videoRef}
              className="scroll-video"
              preload="auto"
              muted
              playsInline
              crossOrigin="anonymous"
              src="/Cinematic_D_commercial_produ_smooth.mp4"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
            >
              <source src="/Cinematic_D_commercial_produ_smooth.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="applifix-overlay-box">
              <span>Applifix</span>
            </div>
          </div>
          {!isVideoLoaded && (
            <div className="loading-indicator">Loading video...</div>
          )}
        </div>
        
        {/* Floating overlay content */}
        <div className="scroll-content-overlay">
          {/* Section 1 - Intro */}
          <section className="overlay-section section-1">
            <div className="content-box">
              <h1>State-of-the-Art Repair</h1>
              <p>Watch our master technicians restore flagship devices frame-by-frame.</p>
              <p>↓ Scroll to witness the precision ↓</p>
            </div>
          </section>

          {/* Section 2 - Middle */}
          <section className="overlay-section section-2">
            <div className="content-box">
              <h2>Flawless Screen Restoration</h2>
              <p>Removing hairline cracks, preserving OLED display calibration, and restoring original touch responsiveness.</p>
            </div>
          </section>

          {/* Section 3 - End */}
          <section className="overlay-section section-3">
            <div className="content-box">
              <h2>Ready to Restore?</h2>
              <p>Get premium repairs with genuine components and a comprehensive service warranty.</p>
              <button className="cta-button" onClick={onOpenBooking}>Book a Repair</button>
            </div>
          </section>
        </div>
      </div>

      {/* Content after video - only shown on standalone demo page */}
      {(window.location.pathname === '/demo' || window.location.search.includes('demo')) && (
        <section className="spacer-section">
          <div className="content-box">
            <h2>After the Video</h2>
            <p>The video effect is complete!</p>
            <p>You can now integrate this anywhere in your site.</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default ScrollVideoDemo;
