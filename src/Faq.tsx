import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sections.css';
import './FaqFly.css';
import { useLanguage } from './i18n/useLanguage';

// Which questions get an extra line or button under their answer (by position in the list).
const EXTRAS: Record<number, 'contact' | 'privacy'> = {
  9: 'privacy',
  12: 'contact',
};

const FIRST_COLUMN_COUNT = 7;
const MONSTER_SIZE = 90;
const MOVE_EVERY_MS = 9000;

function FlyingMonster() {
  const areaRef = useRef<HTMLDivElement>(null);
  const [pose, setPose] = useState({ x: 0, y: 0, rotation: 10 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const move = () => {
      const area = areaRef.current;
      if (!area) return;
      const maxX = Math.max(0, area.clientWidth - MONSTER_SIZE);
      const maxY = Math.max(0, area.clientHeight - MONSTER_SIZE);
      setPose({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
        rotation: Math.random() < 0.5 ? -10 : 10,
      });
    };

    const first = window.setTimeout(move, 500);
    const interval = window.setInterval(move, MOVE_EVERY_MS);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="faq-fly" ref={areaRef} aria-hidden="true">
      <img
        className="faq-fly-monster"
        src="/monster13.png"
        alt=""
        style={{ transform: `translate(${pose.x}px, ${pose.y}px) rotate(${pose.rotation}deg)` }}
      />
    </div>
  );
}

type FaqProps = {
  onContactClick: () => void;
};

function Faq({ onContactClick }: FaqProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const indexed = t.faq.items.map((item, index) => ({ item, index }));
  const columns = [indexed.slice(0, FIRST_COLUMN_COUNT), indexed.slice(FIRST_COLUMN_COUNT)];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <h2>{t.faq.title}</h2>
        <p className="section-intro">{t.faq.intro}</p>
        <div className="faq-columns">
          {columns.map((column, columnIndex) => (
            <div className="faq-column" key={columnIndex}>
              {column.map(({ item, index }) => {
                const isOpen = openIndex === index;
                const extra = EXTRAS[index];
                return (
                  <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={index}>
                    <h3 className="faq-heading">
                      <button
                        type="button"
                        className="faq-question"
                        id={`faq-question-${index}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-icon" aria-hidden="true" />
                      </button>
                    </h3>
                    <div
                      className="faq-answer-wrap"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="faq-answer">
                        {item.answer.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {extra === 'privacy' && (
                          <p>
                            {t.faq.privacyLead} <Link to="/privacy-policy">{t.faq.privacyLink}</Link>.
                          </p>
                        )}
                        {extra === 'contact' && (
                          <button type="button" className="btn btn-primary" onClick={onContactClick}>
                            {t.common.contactUs}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {columnIndex === columns.length - 1 && <FlyingMonster />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
