import React, { useState, useEffect, useRef } from 'react';

export default function RotatingMockup() {
  const [step, setStep] = useState(0);
  const frontVideoRef = useRef(null);
  const backVideoRef = useRef(null);
  const frontVideo9Ref = useRef(null);
  const backVideo9Ref = useRef(null);
  const frontVideo7Ref = useRef(null);
  const backVideo7Ref = useRef(null);

  const rotationAngle = step * 180;

  // Determine the content of each face based on the step.
  // The hidden face maintains its previous content during the transition to prevent visual jumps.
  const getFaceContent = (face) => {
    if (face === 'front') {
      const activeStep = step % 2 === 0 ? step : step - 1;
      const assetIndex = activeStep % 3;
      if (assetIndex === 0) return 'video';
      if (assetIndex === 1) return 'video9';
      return 'video7';
    } else {
      const activeStep = step % 2 === 1 ? step : step - 1;
      if (activeStep < 0) return 'video9'; // Fallback before any flips
      const assetIndex = activeStep % 3;
      if (assetIndex === 0) return 'video';
      if (assetIndex === 1) return 'video9';
      return 'video7';
    }
  };

  const frontContent = getFaceContent('front');
  const backContent = getFaceContent('back');

  // Handle step timers and video playback triggers
  useEffect(() => {
    const currentAsset = step % 3;
    // Video steps: Play immediately when the card starts rotating
    const delay = 10;
    const timer = setTimeout(() => {
      let activeVideo;
      if (currentAsset === 0) {
        activeVideo = (step % 2 === 0) ? frontVideoRef.current : backVideoRef.current;
      } else if (currentAsset === 1) {
        activeVideo = (step % 2 === 0) ? frontVideo9Ref.current : backVideo9Ref.current;
      } else {
        activeVideo = (step % 2 === 0) ? frontVideo7Ref.current : backVideo7Ref.current;
      }

      if (activeVideo) {
        activeVideo.currentTime = 0;
        activeVideo.play().catch(err => {
          console.warn("Autoplay blocked or playback failed:", err);
        });
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [step]);

  // Handle video ended event to automatically advance the flip steps
  const handleVideoEnded = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div className="showcase-card relative w-[290px] min-[375px]:w-[335px] sm:w-[480px] md:w-[630px] h-[250px] min-[375px]:h-[285px] sm:h-[410px] md:h-[540px] bg-transparent rounded-[24px] sm:rounded-[36px] md:rounded-[44px] border border-none shadow-[0_10px_30px_rgba(0,0,0,0.08),_inset_0_1px_0_rgba(255,255,255,0.3)] overflow-hidden select-none">
      {/* 3D Flipper Container for screen */}
      <div
        className="showcase-inner"
        style={{ transform: `rotateY(${rotationAngle}deg)` }}
      >

        {/* Front Side */}
        <div className="showcase-face showcase-face-front">
          {frontContent === 'video' ? (
            <video
              ref={frontVideoRef}
              src="/Video Project 5.mp4"
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover block"
            />
          ) : frontContent === 'video9' ? (
            <video
              ref={frontVideo9Ref}
              src="/Video Project 9.mp4"
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover block"
            />
          ) : (
            <video
              ref={frontVideo7Ref}
              src="/Video Project 7.mp4"
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover block"
            />
          )}
        </div>

        {/* Back Side */}
        <div className="showcase-face showcase-face-back bg-[#e3e3e3]">
          {backContent === 'video' ? (
            <video
              ref={backVideoRef}
              src="/Video Project 5.mp4"
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover block"
            />
          ) : backContent === 'video9' ? (
            <video
              ref={backVideo9Ref}
              src="/Video Project 9.mp4"
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover block"
            />
          ) : (
            <video
              ref={backVideo7Ref}
              src="/Video Project 7.mp4"
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover block"
            />
          )}
        </div>

      </div>
    </div>
  );
}
