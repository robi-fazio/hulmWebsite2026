import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PrivacyPolicy from './PrivacyPolicy';

const illustrators = [
  {
    photo: '/RobiHulmRound.png',
    name: 'Robi Fazio',
    bio: 'Old-style graphic designer with a passion for app development. He is the designer and creator of this app.',
    signature: '/sign_Robi.png',
  },
  {
    photo: '/illuMonica.png',
    name: 'Monica Milani',
    bio: "A lover of creative endeavors, Monica draws some of the monsters you'll find in this app.",
    signature: '/sign_Monica.png',
  },
];

function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-inner header-row">
          <img src="/HulmLogo.svg" alt="HULM logo" className="logo" />
          <nav className="nav">
            <Link to="/" className="nav-link active">HOME</Link>
            <Link to="/privacy-policy" className="nav-link">PRIVACY POLICY</Link>
          </nav>
          <a href="mailto:info@robifazio.com" className="btn btn-primary header-cta">CONTACT ME</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-inner hero-row">
          <div className="hero-text">
            <h1>
              <span className="accent-red">HULM</span> - Turn daily battles
              <br />
              into fun quests
            </h1>
            <p className="hero-description">
              Hulm is a playful timer app that helps kids brush teeth, tidy up, get dressed, and more—
              without endless negotiations. Every completed timer unlocks a cute monster, so routines
              feel like a game, not a fight.
            </p>
            <p className="hero-highlight">
              Get HULM on iOS and Android. Start your first monster quest in under 1 minute!
            </p>
            <div className="store-badges">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                <img src="/btn_GooglePlay.png" alt="Get it on Google Play" />
              </a>
              <a href="https://apps.apple.com/fr/app/hulm-a-rewarding-timer/id6743365270" target="_blank" rel="noreferrer">
                <img src="/btn_AppStore.png" alt="Download on the App Store" />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/HULM_screenshot.png" alt="HULM app screenshot on a phone" />
          </div>
        </div>
      </section>

      <section className="quest-section">
        <div className="quest-inner">
          <div className="quest-splash">
            <img src="/splash3.png" alt="Hurry Up Little Monster illustration" />
          </div>
          <div className="quest-text">
            <p>
              With Hulm, every completed timer unlocks a cute monster collectible, transforming
              mundane moments into playful, rewarding experiences. The app includes ready-made
              timers for common routines (like brushing teeth or cleaning up), plus the flexibility
              for parents and kids to create their own custom challenges.
            </p>
          </div>
          <div className="quest-points">
            <div className="quest-point">
              <h3>Turn time into something tangible:</h3>
              <p>
                Visual timers make the abstract concept of time concrete for kids, helping them
                understand what "five more minutes" really means.
              </p>
            </div>
            <div className="quest-point">
              <h3>Ease transitions:</h3>
              <p>
                Timers prepare children for upcoming changes, reducing anxiety and meltdowns
                when it's time to switch activities.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  <img src={person.photo} alt={person.name} className="illustrator-photo" />
                </div>
                <h3>{person.name}</h3>
                <p>{person.bio}</p>
                <img src={person.signature} alt={`${person.name} signature`} className="signature" />
              </div>
            ))}

            <div className="illustrator-card">
              <div className="illustrator-photo-wrap">
                <img src="/artist0.png" alt="Become an illustrator" className="illustrator-photo" />
              </div>
              <h3>You?</h3>
              <p>
                Would you like to send us your monsters too? We'll be happy to get your drawings.
                Just get in touch with us!
              </p>
              <a href="mailto:info@robifazio.com" className="btn btn-primary">CONTACT</a>
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
          <a href="mailto:info@robifazio.com" className="btn btn-primary">CONTACT ME</a>
          <p className="footer-copy">&copy; 2026 hulm.robifazio.com. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
