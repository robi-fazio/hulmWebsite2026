import { useEffect, useState } from 'react';
import './GetApp.css';
import ContactModal from './ContactModal';
import Header from './Header';

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.robifazio.hulm';
const IOS_URL = 'https://apps.apple.com/us/app/hulm-a-rewarding-timer/id6743365270';

function GetApp() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const isIPadDesktopMode = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
    if (/iPhone|iPad|iPod/.test(ua) || isIPadDesktopMode) {
      window.location.replace(IOS_URL);
    } else if (/Android/.test(ua)) {
      window.location.replace(ANDROID_URL);
    }
  }, []);

  return (
    <div className="get-page">
      <Header activePage="get" onContactClick={() => setIsContactOpen(true)} />

      <main className="get-content">
        <h1>Get HULM</h1>
        <p>Choose your store:</p>
        <div className="store-badges get-badges">
          <a href={ANDROID_URL} target="_blank" rel="noreferrer">
            <img src="/btn_GooglePlay.png" alt="Get it on Google Play" />
          </a>
          <a href={IOS_URL} target="_blank" rel="noreferrer">
            <img src="/btn_AppStore.png" alt="Download on the App Store" />
          </a>
        </div>
      </main>

      <footer className="footer">
        <div className="get-footer-inner">
          <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>
            CONTACT ME
          </button>
          <a className="get-footer-url" href="https://hulm.robifazio.com">
            https://hulm.robifazio.com
          </a>
          <p className="footer-copy">&copy; 2026 hulm.robifazio.com. All rights reserved</p>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default GetApp;
