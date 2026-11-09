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

const illustrators = [
  {
    photo: '/RobiHulmRound.png',
    name: 'Robi Fazio',
    bio: 'Old-style graphic designer with a passion for app development. He is the designer and creator of this app.',
    signature: '/sign_Robi.png',
    zoom: false,
  },
  {
    photo: '/illuMonica.png',
    name: 'Monica Milani',
    bio: "A lover of creative endeavors, Monica draws some of the monsters you'll find in this app.",
    signature: '/sign_Monica.png',
    zoom: true,
  },
];

const howSteps = [
  {
    title: 'Pick a timer or a task list',
    text: 'Use a ready-made timer (brushing teeth, tidying up, getting dressed, nap time) or create your own.',
  },
  {
    title: 'Watch time disappear',
    text: 'A green curtain slowly slides away to reveal a friendly monster, so time becomes something your child can see.',
  },
  {
    title: 'Collect your reward',
    text: 'Every completed timer or task list unlocks a monster. Collect enough and a memory game unlocks, played with the monsters your child has earned.',
    monster: '/monster12.png',
  },
];

function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="page">
      <Header activePage="home" onContactClick={() => setIsContactOpen(true)} />

      <section id="home" className="hero">
        <div className="hero-inner hero-row">
          <div className="hero-text">
            <h1>
              <span className="accent-red">HULM</span> - Turn daily battles
              <br />
              into fun quests
            </h1>
            <p className="hero-description">
              <strong>A visual timer and task list app</strong> where every finished task list earns a
              cute monster. Built for families who want smoother mornings, calmer transitions, and
              routines that feel like a game, not a fight.
            </p>
            <div className="hero-store-row">
              <div className="store-badges">
                <a href="https://play.google.com/store/apps/details?id=com.robifazio.hulm" target="_blank" rel="noreferrer">
                  <img src="/btn_GooglePlay.png" alt="Get it on Google Play" />
                </a>
                <a href="https://apps.apple.com/us/app/hulm-a-rewarding-timer/id6743365270" target="_blank" rel="noreferrer">
                  <img src="/btn_AppStore.png" alt="Download on the App Store" />
                </a>
              </div>
              <div className="hero-sticker" aria-hidden="true">
                <svg viewBox="0 0 100 100" focusable="false">
                  <text x="50" y="35" textAnchor="middle" fontSize="30">8</text>
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="17"
                    textLength="80"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    languages
                  </text>
                  <text
                    x="50"
                    y="74"
                    textAnchor="middle"
                    fontSize="10.5"
                    textLength="62"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    and counting!
                  </text>
                </svg>
              </div>
            </div>
            <img
              src="/qrcodeStores.png"
              alt="QR code: scan to get HULM for your phone"
              className="qr-code"
            />
          </div>
          <HeroVideo />
        </div>
      </section>

      <section id="how-it-works" className="how-section">
        <div className="how-inner">
          <h2>How it works</h2>
          <p className="section-intro">Three simple steps turn any routine into a small adventure.</p>
          <ol className="how-steps">
            {howSteps.map((step, index) => (
              <li className="how-step" key={step.title}>
                {step.monster && (
                  <img src={step.monster} alt="" aria-hidden="true" className="how-monster" />
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
          <h2>Our Illustrators</h2>
          <p className="illustrators-intro">
            We're starting with a package of stock illustrations. But we're slowly filling up the app with
            monsters designed by our own illustrators. Do you want to contribute as well? Get in touch with us!
          </p>
          <div className="illustrators-grid">
            {illustrators.map((person) => (
              <div className="illustrator-card" key={person.name}>
                <div className="illustrator-photo-wrap">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className={`illustrator-photo${person.zoom ? ' illustrator-photo--zoom' : ''}`}
                  />
                </div>
                <h3>{person.name}</h3>
                <p>{person.bio}</p>
                <img src={person.signature} alt={`${person.name} signature`} className="signature" />
              </div>
            ))}

            <div className="illustrator-card">
              <div className="illustrator-photo-wrap">
                <img
                  src="/artist0.png"
                  alt="Become an illustrator"
                  className="illustrator-photo illustrator-photo--zoom"
                />
              </div>
              <h3>You?</h3>
              <p>
                Would you like to send us your monsters too? We'll be happy to get your drawings.
                Just get in touch with us!
              </p>
              <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-inner">
          <img src="/HulmLogo.svg" alt="HULM logo" className="logo" />
          <nav className="footer-nav">
            <Link to="/">HOME</Link>
            <Link to="/privacy-policy">PRIVACY POLICY</Link>
          </nav>
          <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>
            CONTACT ME
          </button>
          <div className="footer-store-row">
            <div className="store-badges">
              <a href="https://play.google.com/store/apps/details?id=com.robifazio.hulm" target="_blank" rel="noreferrer">
                <img src="/btn_GooglePlay.png" alt="Get it on Google Play" />
              </a>
              <a href="https://apps.apple.com/us/app/hulm-a-rewarding-timer/id6743365270" target="_blank" rel="noreferrer">
                <img src="/btn_AppStore.png" alt="Download on the App Store" />
              </a>
            </div>
            <KofiWidget />
          </div>
          <p className="footer-copy">&copy; 2026 hulm.robifazio.com. All rights reserved</p>
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
