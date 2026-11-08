import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './PrivacyPolicy.css';
import ContactModal from './ContactModal';
import Header from './Header';

function PrivacyPolicy() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="privacy-page">
      <Header activePage="privacy" onContactClick={() => setIsContactOpen(true)} />

      <main className="privacy-content">
        <div className="privacy-inner">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">Privacy Policy for HULM – A Timer for Kids</p>
          <p className="privacy-updated">Last updated: November 8, 2026</p>

          <p>
            This policy explains how HULM – A Timer for Kids (“HULM”, “we”, “us”) handles
            information when you use our mobile app. HULM is published by Robi Fazio, based in
            France, and is intended to be used by children together with a parent or guardian.
          </p>

          <h2>1. Summary</h2>
          <ul>
            <li>There is no account, sign-up, or sign-in.</li>
            <li>We do not ask for names, email addresses, photos, or contact details.</li>
            <li>
              Your timers, task lists, monsters, game progress, and child profiles are stored on
              your device.
            </li>
            <li>The free version shows ads. Premium removes them.</li>
            <li>We do not sell personal information.</li>
          </ul>

          <h2>2. Information stored on your device</h2>
          <p>
            HULM stores the following locally on your device: monsters collected, timers and task
            lists (including the custom ones you save with Premium), memory game progress, child
            profiles, and the parental code (PIN) you choose, which is stored only as a hashed
            value. We do not have access to this data. We recommend using a nickname or first
            name for profiles, never a full name. Deleting the app removes this data.
          </p>

          <h2>3. Information collected automatically</h2>
          <p>
            When you use the app, certain technical information may be collected by our service
            providers:
          </p>
          <ul>
            <li>
              Device information (such as device model, operating system version, and device
              identifiers)
            </li>
            <li>Log information (such as app crashes and performance)</li>
            <li>Usage data (such as the features used and interaction with ads)</li>
          </ul>
          <p>
            This information is used by these providers to deliver and measure ads and to keep
            the services running. We do not link it to a name, an account, or any contact
            details, because HULM does not collect them.
          </p>

          <h2>4. Advertising</h2>
          <p>
            The free version of HULM includes advertising from Google AdMob. To deliver and
            measure ads, Google and its ad partners may collect technical data such as your
            device’s advertising identifier and how you interact with ads. Depending on your
            device settings and the country you are in, ads may be personalized.
          </p>
          <p>
            On iPhone and iPad, the app asks for your permission before tracking, and you can
            change your choice at any time in your device settings. On Android, you can reset
            your advertising ID or opt out of ad personalization in your device’s Google
            settings. Premium removes all ads.
          </p>

          <h2>5. Purchases</h2>
          <p>
            Premium purchases are processed by Apple (App Store) or Google (Google Play). We do
            not receive or store your payment details.
          </p>

          <h2>6. How we use information</h2>
          <p>We use information only to:</p>
          <ul>
            <li>provide and maintain the app</li>
            <li>improve and fix the app</li>
            <li>show ads in the free version</li>
            <li>process purchases through the app stores</li>
          </ul>

          <h2>7. Sharing</h2>
          <p>
            We do not sell personal information. We share technical information only with the
            service providers that help us run the app (Google AdMob, Apple, and Google Play),
            and only as needed to provide their service.
          </p>

          <h2>8. Children’s privacy</h2>
          <p>
            HULM is made for children to use with a parent or guardian. We do not knowingly
            collect personal information from children under 13 (or under 15 in France). The app
            needs no sign-up. If you think a child has given us personal information, contact us
            and we will delete it.
          </p>

          <h2>9. Your rights under the GDPR</h2>
          <p>
            We are based in France and follow the GDPR. The data controller is Robi Fazio,{' '}
            <a href="mailto:info@robifazio.com">info@robifazio.com</a>. You have the right to
            access, correct, delete, restrict, or object to the processing of your data, and the
            right to data portability. Because HULM does not hold data that identifies you, we may
            need further information to find any data about you. You can also file a complaint
            with the French data protection authority, the CNIL. Where we rely on a legal basis,
            it is our legitimate interest in running and improving the app, or your consent where
            the law requires it.
          </p>

          <h2>10. Security and retention</h2>
          <p>
            We take reasonable technical and organizational steps to protect information. Data on
            your device stays until you delete the app. Data held by third parties follows their
            own policies, such as Google’s Privacy Policy.
          </p>

          <h2>11. Changes</h2>
          <p>
            We may update this policy. We will post the new version on this page and change the
            “Last updated” date. For significant changes, we will also inform you in the app.
          </p>

          <h2>12. Contact</h2>
          <p>
            Robi Fazio – <a href="mailto:info@robifazio.com">info@robifazio.com</a>
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
          <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>
            CONTACT ME
          </button>
          <p className="footer-copy">&copy; 2026 hulm.robifazio.com. All rights reserved</p>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default PrivacyPolicy;
