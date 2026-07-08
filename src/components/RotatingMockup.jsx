import React, { useState, useEffect } from 'react';

export default function RotatingMockup() {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle(prev => prev + 180);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="showcase-card relative w-[630px] h-[540px] bg-transparent rounded-[44px] border border-none shadow-[0_10px_30px_rgba(0,0,0,0.08),_inset_0_1px_0_rgba(255,255,255,0.3)] overflow-hidden select-none">
      {/* 3D Flipper Container for screen */}
      <div 
        className="showcase-inner"
        style={{ transform: `rotateY(${rotationAngle}deg)` }}
      >
        
        {/* Front Side: Gemini_Generated_Image_mxj1nbmxj1nbmxj1.png (Apple Image first) */}
        <div className="showcase-face showcase-face-front">
          <img 
            src="/Gemini_Generated_Image_mxj1nbmxj1nbmxj1.png" 
            alt="Applifix Device Display Front" 
            className="w-full h-[550px] object-cover block"
          />
        </div>
        
        {/* Back Side: Screenshot 2026-07-08 104458.png (Second Image) */}
        <div className="showcase-face showcase-face-back bg-[#e3e3e3]">
          <img 
            src="/Screenshot 2026-07-08 104458.png" 
            alt="Applifix Device Display Back" 
            className="w-full h-[550px] object-cover block"
          />
        </div>
        
      </div>
    </div>
  );
}
