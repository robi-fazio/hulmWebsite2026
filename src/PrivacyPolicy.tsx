import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './PrivacyPolicy.css';
import ContactModal from './ContactModal';
import Header from './Header';
import { useLanguage } from './i18n/useLanguage';

function PrivacyPolicy() {
  const { t } = useLanguage();
  const p = t.privacy;
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="privacy-page">
      <Header activePage="privacy" onContactClick={() => setIsContactOpen(true)} />

      <main className="privacy-content">
        <div className="privacy-inner">
          <h1>{p.title}</h1>
          <p className="privacy-subtitle">{p.subtitle}</p>
          <p className="privacy-updated">{p.updated}</p>

          <p>{p.intro}</p>

          <h2>{p.summary.title}</h2>
          <ul>
            {p.summary.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>{p.local.title}</h2>
          <p>{p.local.text}</p>

          <h2>{p.auto.title}</h2>
          <p>{p.auto.intro}</p>
          <ul>
            {p.auto.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{p.auto.outro}</p>

          <h2>{p.ads.title}</h2>
          <p>{p.ads.p1}</p>
          <p>{p.ads.p2}</p>

          <h2>{p.purchases.title}</h2>
          <p>{p.purchases.text}</p>

          <h2>{p.use.title}</h2>
          <p>{p.use.intro}</p>
          <ul>
            {p.use.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>{p.sharing.title}</h2>
          <p>{p.sharing.text}</p>

          <h2>{p.children.title}</h2>
          <p>{p.children.text}</p>

          <h2>{p.rights.title}</h2>
          <p>
            {p.rights.before} <a href="mailto:info@robifazio.com">info@robifazio.com</a>.{' '}
            {p.rights.after}
          </p>

          <h2>{p.security.title}</h2>
          <p>{p.security.text}</p>

          <h2>{p.changes.title}</h2>
          <p>{p.changes.text}</p>

          <h2>{p.contact.title}</h2>
          <p>
            Robi Fazio – <a href="mailto:info@robifazio.com">info@robifazio.com</a>
          </p>
        </div>
      </main>

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
          <p className="footer-copy">{t.common.copyright}</p>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default PrivacyPolicy;
