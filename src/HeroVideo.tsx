import { useEffect, useRef, useState } from 'react';
import './HeroVideo.css';

const MOBILE_QUERY = '(max-width: 600px) and (orientation: portrait)';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches,
  );
  const [failed, setFailed] = useState(false);

  // Keep the chosen source in sync if the visitor rotates a tablet or resizes.
  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

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
  }, [isMobile]);

  if (failed) {
    return (
      <div className="hero-media" aria-hidden="true">
        <img className="hero-video" src="/HULM_screenshot.png" alt="" />
      </div>
    );
  }

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={(event) => {
          console.error('Hero video failed to load:', event);
          setFailed(true);
        }}
      >
        {/* One source, chosen in JS: no multi-source selection, no per-source error handlers. */}
        <source
          src={isMobile ? '/videos/HULM_MobileVideo3.mp4' : '/videos/hulm-hero4k.mp4'}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
