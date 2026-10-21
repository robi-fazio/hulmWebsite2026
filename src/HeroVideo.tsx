import { useState } from 'react';
import './HeroVideo.css';

export default function HeroVideo() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="hero-media">
      {failed ? (
        <img className="hero-video" src="/HULM_screenshot.png" alt="HULM timer app on a smartphone" />
      ) : (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster="/HULM_screenshot.png"
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
