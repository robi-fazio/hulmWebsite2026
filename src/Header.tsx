import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  activePage: 'home' | 'privacy';
  onContactClick: () => void;
}

function Header({ activePage, onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleContactClick = () => {
    closeMenu();
    onContactClick();
  };

  return (
    <>
      <header className="header">
        <div className="header-inner header-row">
          <Link to="/" className="header-logo-link">
            <img src="/HulmLogo.svg" alt="HULM logo" className="logo" />
          </Link>

          <nav className="nav">
            <Link to="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>HOME</Link>
            <Link to="/privacy-policy" className={`nav-link ${activePage === 'privacy' ? 'active' : ''}`}>PRIVACY POLICY</Link>
          </nav>

          <button className="btn btn-primary header-cta" onClick={onContactClick}>
            CONTACT ME
          </button>

          <button
            className="burger-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          &times;
        </button>
        <nav className="mobile-menu-nav">
          <Link to="/privacy-policy" className="mobile-menu-link" onClick={closeMenu}>
            Privacy Policy
          </Link>
          <button className="mobile-menu-link mobile-menu-link--button" onClick={handleContactClick}>
            Contact Us
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;
