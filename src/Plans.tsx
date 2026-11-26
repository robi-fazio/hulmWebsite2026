import './Plans.css';
import { useLanguage } from './i18n/useLanguage';

function Plans() {
  const { t } = useLanguage();
  const { plans } = t;
  const premiumFeatures = [plans.premiumFirstFeature, ...plans.sharedFeatures.slice(1)];

  return (
    <section id="plans" className="plans-section">
      <div className="plans-inner">
        <h2>{plans.title}</h2>
        <div className="plans-grid">
          <div className="plans-intro">
            <p>{plans.intro}</p>
            <div className="store-badges">
              <a href="https://play.google.com/store/apps/details?id=com.robifazio.hulm" target="_blank" rel="noreferrer">
                <img src="/btn_GooglePlay.png" alt={t.common.googlePlayAlt} />
              </a>
              <a href="https://apps.apple.com/us/app/hulm-a-rewarding-timer/id6743365270" target="_blank" rel="noreferrer">
                <img src="/btn_AppStore.png" alt={t.common.appStoreAlt} />
              </a>
            </div>
            <img src="/qrcodeStores.png" alt={t.common.qrAlt} className="qr-code" />
          </div>

          <div className="plan-card">
            <h3 className="plan-name">{plans.freeName}</h3>
            <p className="plan-tagline">{plans.freeTagline}</p>
            <ul className="plan-list">
              {plans.sharedFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
              <li className="plan-item--muted">{plans.freeAds}</li>
            </ul>
          </div>

          <div className="plan-card plan-card--premium">
            <h3 className="plan-name">{plans.premiumName}</h3>
            <p className="plan-tagline">{plans.premiumTagline}</p>
            <ul className="plan-list">
              {premiumFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
              <li className="plan-subhead">{plans.premiumSubhead}</li>
              {plans.premiumExtras.map((feature) => (
                <li className="plan-item--extra" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
