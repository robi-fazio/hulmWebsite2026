import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Sections.css';
import './HowMonster.css';
import './HeroSticker.css';
import './QrCode.css';
import './Footer.css';
import PrivacyPolicy from './PrivacyPolicy';
import GetApp from './GetApp';
import NotFound from './NotFound';
import ContactModal from './ContactModal';
import Header from './Header';
import HeroVideo from './HeroVideo';
import CareCarousel from './CareCarousel';
import Faq from './Faq';
import Plans from './Plans';
import KofiWidget from './KofiWidget';
import { useLanguage } from './i18n/useLanguage';

const illustrators = [
  {
    photo: '/RobiHulmRound.png',
    name: 'Robi Fazio',
    signature: '/sign_Robi.png',
    zoom: false,
  },
  {
    photo: '/illuMonica.png',
    name: 'Monica Milani',
    signature: '/sign_Monica.png',
    zoom: true,
  },
];

// The monster picture sits on the third step.
const HOW_MONSTER_STEP = 2;

function HomePage() {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="page">
      <Header activePage="home" onContactClick={() => setIsContactOpen(true)} />

      <section id="home" className="hero">
        <div className="hero-inner hero-row">
          <div className="hero-text">
            <h1>
              <span className="accent-red">HULM</span> - {t.hero.titleLine1}{' '}
              <br />
              {t.hero.titleLine2}
            </h1>
            <p className="hero-description">
              <strong>{t.hero.descriptionBold}</strong> {t.hero.descriptionRest}
            </p>
            <div className="hero-store-row">
              <div className="store-badges">
                <a href="https://play.google.com/store/apps/details?id=com.robifazio.hulm" target="_blank" rel="noreferrer">
                  <img src="/btn_GooglePlay.png" alt={t.common.googlePlayAlt} />
                </a>
                <a href="https://apps.apple.com/us/app/hulm-a-rewarding-timer/id6743365270" target="_blank" rel="noreferrer">
                  <img src="/btn_AppStore.png" alt={t.common.appStoreAlt} />
                </a>
              </div>
              <img src="/qrcodeStores.png" alt={t.common.qrAlt} className="qr-code" />
              <div className="hero-sticker" aria-hidden="true">
                <svg viewBox="0 0 100 100" focusable="false">
                  <text x="50" y="35" textAnchor="middle" fontSize="30">14</text>
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="17"
                    textLength="80"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    {t.hero.stickerLine1}
                  </text>
                  <text
                    x="50"
                    y="74"
                    textAnchor="middle"
                    fontSize="10.5"
                    textLength="58"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    {t.hero.stickerLine2}
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <HeroVideo />
        </div>
      </section>

      <section id="how-it-works" className="how-section">
        <div className="how-inner">
          <h2>{t.how.title}</h2>
          <p className="section-intro">{t.how.intro}</p>
          <ol className="how-steps">
            {t.how.steps.map((step, index) => (
              <li className="how-step" key={step.title}>
                {index === HOW_MONSTER_STEP && (
                  <img src="/monster12.png" alt="" aria-hidden="true" className="how-monster" />
                )}
                <div className="how-number" aria-hidden="true">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CareCarousel />

      <Faq onContactClick={() => setIsContactOpen(true)} />

      <Plans />

      <section className="illustrators-section">
        <div className="illustrators-inner">
          <h2>{t.illustrators.title}</h2>
          <p className="illustrators-intro">{t.illustrators.intro}</p>
          <div className="illustrators-grid">
            {illustrators.map((person, index) => (
              <div className="illustrator-card" key={person.name}>
                <div className="illustrator-photo-wrap">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className={`illustrator-photo${person.zoom ? ' illustrator-photo--zoom' : ''}`}
                  />
                </div>
                <h3>{person.name}</h3>
                <p>{t.illustrators.bios[index]}</p>
                <img
                  src={person.signature}
                  alt={t.illustrators.signatureAlt.replace('{name}', person.name)}
                  className="signature"
                />
              </div>
            ))}

            <div className="illustrator-card">
              <div className="illustrator-photo-wrap">
                <img
                  src="/artist0.png"
                  alt={t.illustrators.becomeAlt}
                  className="illustrator-photo illustrator-photo--zoom"
                />
              </div>
              <h3>{t.illustrators.youTitle}</h3>
              <p>{t.illustrators.youText}</p>
              <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>
                {t.common.contact}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-inner">
          <img src="/HulmLogo.svg" alt={t.common.logoAlt} className="logo" />
          <nav className="footer-nav">
            <Link to="/">{t.common.home}</Link>
            <Link to="/privacy-policy">{t.common.privacyPolicy}</Link>
          </nav>
          <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>
            {t.common.contactMe}
          </button>
          <div className="footer-store-row">
            <div className="store-badges">
              <a href="https://play.google.com/store/apps/details?id=com.robifazio.hulm" target="_blank" rel="noreferrer">
                <img src="/btn_GooglePlay.png" alt={t.common.googlePlayAlt} />
              </a>
              <a href="https://apps.apple.com/us/app/hulm-a-rewarding-timer/id6743365270" target="_blank" rel="noreferrer">
                <img src="/btn_AppStore.png" alt={t.common.appStoreAlt} />
              </a>
            </div>
            <KofiWidget />
          </div>
          <p className="footer-copy">{t.common.copyright}</p>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/get" element={<GetApp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
