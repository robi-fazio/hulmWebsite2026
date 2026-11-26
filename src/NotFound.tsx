import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GetApp.css';
import './NotFound.css';
import ContactModal from './ContactModal';
import Header from './Header';
import { useLanguage } from './i18n/useLanguage';

function NotFound() {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="get-page">
      <Header activePage="notfound" onContactClick={() => setIsContactOpen(true)} />

      <main className="get-content">
        <p className="notfound-code">404</p>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>
        <Link to="/" className="btn btn-primary">
          {t.notFound.back}
        </Link>
      </main>

      <footer className="footer">
        <div className="get-footer-inner">
          <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>
            {t.common.contactMe}
          </button>
          <a className="get-footer-url" href="https://hulm.robifazio.com">
            https://hulm.robifazio.com
          </a>
          <p className="footer-copy">{t.common.copyright}</p>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default NotFound;
