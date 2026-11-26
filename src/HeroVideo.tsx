import { useEffect, useRef, useState } from 'react';
import './HeroVideo.css';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // React does not always reflect the muted prop as an attribute, and
      // browsers only autoplay muted video, so set it explicitly and start now.
      video.muted = true;
      video.play().catch(() => {
        // Browsers (or iOS Low Power Mode) may block playback until the visitor interacts.
      });
    }
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      {failed ? (
        <img className="hero-video" src="/HULM_screenshot.png" alt="" />
      ) : (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setFailed(true)}
        >
          {/* The browser uses the first <source> whose media query matches. */}
          <source
            src="/videos/HULM_MobileVideo3.mp4"
            type="video/mp4"
            media="(max-width: 600px) and (orientation: portrait)"
            onError={() => setFailed(true)}
          />
          <source src="/videos/hulm-hero4k.mp4" type="video/mp4" onError={() => setFailed(true)} />
        </video>
      )}
    </div>
  );
}
