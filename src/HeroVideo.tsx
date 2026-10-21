import { useEffect, useRef, useState } from 'react';
import './HeroVideo.css';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const video = videoRef.current;

      if (video) {
        video.play().catch(() => {
          // Browsers may block playback until the visitor interacts with the page.
        });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-media">
      {failed ? (
        <img className="hero-video" src="/HULM_screenshot.png" alt="HULM timer app on a smartphone" />
      ) : (
        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          playsInline
          controls
          preload="auto"
          aria-label="HULM smartphone app demonstration"
          onError={() => setFailed(true)}
        >
          <source src="/videos/hulm-hero.mp4" type="video/mp4" onError={() => setFailed(true)} />
          Your browser does not support this video.
        </video>
      )}
    </div>
  );
}
