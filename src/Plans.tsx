import './Plans.css';

const sharedFeatures = [
  'Ready-made timers (brushing teeth, tidying up, chores, nap time)',
  'Custom timer from 1 to 999 minutes',
  'Monster collection to build up',
  'Memory game, played with the monsters your child has earned',
];

const premiumExtras = [
  'No ads, ever',
  'Save your own custom timers',
  'Task lists that earn monsters',
  'A separate profile and progress for each child',
];

function Plans() {
  return (
    <section id="plans" className="plans-section">
      <div className="plans-inner">
        <h2>Free and Premium</h2>
        <div className="plans-grid">
          <div className="plans-intro">
            <p>
              Start for free with everything your child needs to begin collecting monsters. Upgrade
              to Premium when you want an ad-free app, saved timers, task lists and a profile for
              each child.
            </p>
          </div>

          <div className="plan-card">
            <h3 className="plan-name">Free</h3>
            <p className="plan-tagline">Everything you need to get started.</p>
            <ul className="plan-list">
              {sharedFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
              <li className="plan-item--muted">Shows ads</li>
            </ul>
          </div>

          <div className="plan-card plan-card--premium">
            <h3 className="plan-name">Premium</h3>
            <p className="plan-tagline">Everything in Free, and more.</p>
            <ul className="plan-list">
              {sharedFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
              <li className="plan-subhead">Plus, only in Premium</li>
              {premiumExtras.map((feature) => (
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
