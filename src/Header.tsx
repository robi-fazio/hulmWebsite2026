import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useLanguage } from './i18n/useLanguage';
import { LANGUAGES } from './i18n/languages';
import type { Language } from './i18n/languages';

interface HeaderProps {
  activePage: 'home' | 'privacy' | 'get' | 'notfound';
  onContactClick: () => void;
}

function Header({ activePage, onContactClick }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleContactClick = () => {
    closeMenu();
    onContactClick();
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <>
      <header className="header">
        <div className="header-inner header-row">
          <Link to="/" className="header-logo-link">
            <img src="/HulmLogo.svg" alt={t.common.logoAlt} className="logo" />
          </Link>

          <nav className="nav">
            <Link to="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>{t.common.home}</Link>
            <Link to="/privacy-policy" className={`nav-link ${activePage === 'privacy' ? 'active' : ''}`}>{t.common.privacyPolicy}</Link>
            <div className="language-switcher">
              <label className="language-switcher-label" htmlFor="language-select">
                {t.header.language}
              </label>
              <select
                id="language-select"
                className="language-switcher-select"
                value={language}
                onChange={handleLanguageChange}
              >
                {LANGUAGES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </nav>

          <button className="btn btn-primary header-cta" onClick={onContactClick}>
            {t.common.contactMe}
          </button>

          <button
            className="burger-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label={t.header.openMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label={t.header.closeMenu}>
          &times;
        </button>
        <nav className="mobile-menu-nav">
          <Link to="/privacy-policy" className="mobile-menu-link" onClick={closeMenu}>
            {t.header.menuPrivacy}
          </Link>
          <button className="mobile-menu-link mobile-menu-link--button" onClick={handleContactClick}>
            {t.header.menuContact}
          </button>
          <div className="mobile-language-switcher">
            <label className="mobile-language-label" htmlFor="mobile-language-select">
              {t.header.language}
            </label>
            <select
              id="mobile-language-select"
              className="mobile-language-select"
              value={language}
              onChange={handleLanguageChange}
            >
              {LANGUAGES.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
