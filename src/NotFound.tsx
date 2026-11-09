import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GetApp.css';
import './NotFound.css';
import ContactModal from './ContactModal';
import Header from './Header';

function NotFound() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="get-page">
      <Header activePage="notfound" onContactClick={() => setIsContactOpen(true)} />

      <main className="get-content">
        <p className="notfound-code">404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn&rsquo;t find the page you were looking for.</p>
        <Link to="/" className="btn btn-primary">
          BACK TO HOME
        </Link>
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

export default NotFound;
