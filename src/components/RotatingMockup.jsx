import React, { useState, useEffect, useRef } from 'react';

export default function RotatingMockup() {
  const [step, setStep] = useState(0);
  const frontVideoRef = useRef(null);
  const backVideoRef = useRef(null);

  const rotationAngle = step * 180;

  // Determine the content of each face based on the step.
  // The hidden face maintains its previous content during the transition to prevent visual jumps.
  const getFaceContent = (face) => {
    if (face === 'front') {
      const activeStep = step % 2 === 0 ? step : step - 1;
      const modulo = activeStep % 6;
      if (modulo === 0) return 'video';
      if (modulo === 2) return 'second';
      return 'apple'; // modulo === 4
    } else {
      const activeStep = step % 2 === 1 ? step : step - 1;
      if (activeStep < 0) return 'video'; // Initial fallback before any flips
      const modulo = activeStep % 6;
      if (modulo === 1) return 'apple';
      if (modulo === 3) return 'video';
      return 'second'; // modulo === 5
    }
  };

  const frontContent = getFaceContent('front');
  const backContent = getFaceContent('back');

  // Handle step timers and video playback triggers
  useEffect(() => {
    let timer;
    const currentAsset = step % 3;

    if (currentAsset === 0) {
      // Video step: Play immediately on start (step 0), or wait for flip animation (step > 0)
      const delay = step === 0 ? 50 : 950;
      timer = setTimeout(() => {
        const activeVideo = (step % 2 === 0) ? frontVideoRef.current : backVideoRef.current;
        if (activeVideo) {
          activeVideo.currentTime = 0;
          activeVideo.play().catch(err => {
            console.warn("Autoplay blocked or playback failed:", err);
          });
        }
      }, delay);
    } else {
      // Image steps: Show for 3 seconds, then transition to next step
      timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [step]);

  // Handle video ended event
  const handleVideoEnded = () => {
    if (step % 3 === 0) {
      setStep(prev => prev + 1);
    }
  };

  return (
    <div className="showcase-card relative w-[630px] h-[540px] bg-transparent rounded-[44px] border border-none shadow-[0_10px_30px_rgba(0,0,0,0.08),_inset_0_1px_0_rgba(255,255,255,0.3)] overflow-hidden select-none">
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
              className="w-full h-[550px] object-cover block"
            />
          ) : frontContent === 'second' ? (
            <img
              src="/Screenshot 2026-07-08 104458.png"
              alt="Applifix Device Display Back"
              className="w-full h-[550px] object-cover block"
            />
          ) : (
            <img
              src="/Gemini_Generated_Image_mxj1nbmxj1nbmxj1.png"
              alt="Applifix Device Display Front"
              className="w-full h-[550px] object-cover block"
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
              className="w-full h-[550px] object-cover block"
            />
          ) : backContent === 'second' ? (
            <img
              src="/Screenshot 2026-07-08 104458.png"
              alt="Applifix Device Display Back"
              className="w-full h-[550px] object-cover block"
            />
          ) : (
            <img
              src="/Gemini_Generated_Image_mxj1nbmxj1nbmxj1.png"
              alt="Applifix Device Display Front"
              className="w-full h-[550px] object-cover block"
            />
          )}
        </div>

      </div>
    </div>
  );
}
