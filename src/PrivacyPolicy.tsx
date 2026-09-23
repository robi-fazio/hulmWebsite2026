import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <header className="header">
        <div className="header-inner header-row">
          <Link to="/">
            <img src="/HulmLogo.svg" alt="HULM logo" className="logo" />
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/privacy-policy" className="nav-link active">PRIVACY POLICY</Link>
          </nav>
          <a href="mailto:info@robifazio.com" className="btn btn-primary header-cta">CONTACT ME</a>
        </div>
      </header>

      <main className="privacy-content">
        <div className="privacy-inner">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">Privacy Policy for HULM - A Timer for Kids</p>
          <p className="privacy-updated">Last updated: February 12, 2025</p>

          <p>
            This Privacy Policy describes how HULM - A Timer for Kids ("we", "us", or "our")
            collects, uses, and shares information when you use our mobile application ("App").
          </p>

          <h2>Information We Collect</h2>

          <h3>Automatically Collected Information</h3>
          <p>When you use our App, we automatically collect certain information, including:</p>
          <ul>
            <li>Device information (such as device model, operating system version, unique device identifiers)</li>
            <li>Log information (such as app crashes, system activity, and hardware settings)</li>
            <li>Usage data (such as the features you use, time spent on the App, and interaction with ads)</li>
          </ul>

          <h3>User-Generated Content</h3>
          <p>
            Our App allows users to collect and store images of little monsters as rewards. These
            images are stored locally on your device.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain the App's functionality</li>
            <li>Improve and optimize the App's performance</li>
            <li>Deliver relevant advertisements</li>
            <li>Analyze usage patterns and trends</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>
            We may share non-personal, aggregated, or device-level information with third parties
            for industry analysis and advertising purposes. We do not sell personal information to
            third parties.
          </p>

          <h2>Advertising</h2>
          <p>
            Our App includes third-party advertising to support our services. These advertisers may
            use technologies to collect data to deliver personalized advertising. This information
            is not associated with any personal data.
          </p>

          <h2>Data Storage and Security</h2>
          <p>
            The images of little monsters collected as rewards are stored locally on your device.
            We do not have access to this data. We implement appropriate technical and
            organizational measures to protect the information we collect and store.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our App is designed for use by children, but we do not knowingly collect personal
            information from children under 13. The App does not require sign-up or sign-in,
            minimizing data collection.
          </p>

          <h2>Your Rights Under GDPR</h2>
          <p>
            As we are based in France, we comply with the General Data Protection Regulation
            (GDPR). Under GDPR, you have the right to:
          </p>
          <ul>
            <li>Access the data we hold about you</li>
            <li>Rectify inaccurate personal data</li>
            <li>Erase your personal data</li>
            <li>Object to or restrict processing of your personal data</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:info@robifazio.com">info@robifazio.com</a>
          </p>

          <p className="privacy-agreement">
            By using our App, you agree to the collection and use of information in accordance
            with this Privacy Policy.
          </p>
        </div>
      </main>

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

export default PrivacyPolicy;
