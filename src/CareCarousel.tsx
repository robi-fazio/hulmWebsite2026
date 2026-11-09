import { useEffect, useRef, useState } from 'react';
import './CareCarousel.css';

const SLIDE_COUNT = 3;

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path
        d={direction === 'right' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CareCarousel() {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const goTo = (target: number) => {
    setIndex(Math.max(0, Math.min(SLIDE_COUNT - 1, target)));
  };

  useEffect(() => {
    const el = slideRefs.current[index];
    if (!el) return undefined;
    const update = () => setHeight(el.offsetHeight);
    update();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const slideClass = (n: number) => `care-slide${index === n ? ' care-slide--active' : ''}`;

  return (
    <section id="daily-life" className="care-section">
      <div className="care-inner">
        <div
          className="care-carousel"
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') goTo(index + 1);
            if (event.key === 'ArrowLeft') goTo(index - 1);
          }}
        >
          <div className="care-viewport-wrap">
            {index > 0 && (
              <button
                type="button"
                className="care-arrow care-arrow--prev"
                aria-label="Previous slide"
                onClick={() => goTo(index - 1)}
              >
                <Chevron direction="left" />
              </button>
            )}
            {index < SLIDE_COUNT - 1 && (
              <button
                type="button"
                className="care-arrow care-arrow--next"
                aria-label="Next slide"
                onClick={() => goTo(index + 1)}
              >
                <Chevron direction="right" />
              </button>
            )}

            <div
              className="care-viewport"
              style={{ height }}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0].clientX;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const delta = event.changedTouches[0].clientX - touchStartX.current;
                touchStartX.current = null;
                if (Math.abs(delta) > 50) goTo(index + (delta < 0 ? 1 : -1));
              }}
            >
              <div className="care-track" style={{ transform: `translateX(-${index * 100}%)` }}>
                <div
                  className={slideClass(0)}
                  aria-hidden={index !== 0}
                  ref={(el) => {
                    slideRefs.current[0] = el;
                  }}
                >
                  <h2>For children who find daily life harder</h2>
                  <div className="care-grid">
                    <div className="care-col">
                      <p>
                        Some children find it hard to start a task, stay with it, or switch to the next
                        thing. Time can feel invisible, and the usual flow of the day can feel
                        unpredictable. Many parents describe the same pattern: repeated reminders, rising
                        tension, and a lot of "five more minutes."
                      </p>
                      <p>
                        HULM was made for those moments. A visual timer shows how much time is left. A
                        task list breaks a routine into small steps. A friendly reward gives every small
                        success a visible moment of celebration, and a collection of monsters to be proud
                        of.
                      </p>
                    </div>
                    <div className="care-col">
                      <p>
                        Every child is different. HULM is a tool that families can try, not a promise of
                        results.
                      </p>
                      <p className="care-note">
                        HULM is an everyday family tool. It is not a medical, therapeutic, or diagnostic
                        product and does not replace professional advice.
                      </p>
                      <p className="care-research-note">
                        Curious what studies have found about visual timers, visual schedules and
                        rewards?
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary care-more-btn"
                        tabIndex={index === 0 ? 0 : -1}
                        onClick={() => goTo(1)}
                      >
                        SEE WHAT RESEARCH HAS LOOKED AT
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                          <path
                            d="M9 5l7 7-7 7"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="care-col care-col--image">
                      <img src="/splash4.png" alt="Hurry Up Little Monster illustration" />
                    </div>
                  </div>
                </div>

                <div
                  className={slideClass(1)}
                  aria-hidden={index !== 1}
                  ref={(el) => {
                    slideRefs.current[1] = el;
                  }}
                >
                  <h2>What research has looked at</h2>
                  <p className="research-intro">
                    These tools are used in many classrooms and homes, and researchers have studied
                    them. Here is a summary of what the studies found. They do not prove HULM will
                    work for every child.
                  </p>
                  <ul className="research-list">
                    <li>
                      <p>
                        <strong>Visual timers.</strong> A recent study of 44 children aged 7 to 9 found
                        that children who could see a visual timer reported less anxiety before a task
                        than children who could not. It’s a small study on one kind of task, so treat
                        it as an early sign, not a rule.
                      </p>
                      <p className="research-source">
                        Source:{' '}
                        <a
                          href="https://doi.org/10.3390/ejihpe15120243"
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={index === 1 ? 0 : -1}
                        >
                          Hallez &amp; Vallier (2025), European Journal of Investigation in Health,
                          Psychology and Education
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Visual schedules and task steps.</strong> Researchers have studied
                        picture-based schedules that show a routine step by step. Reviews of visual
                        activity schedules report that they have been used to support children through
                        transitions and to reduce problem behavior, mostly with children with autism or
                        ADHD. The results are often best when a schedule is combined with other
                        support, such as encouragement and rewards. A 2025 review also found the
                        evidence for the visual schedule component by itself is not yet conclusive.
                      </p>
                      <p className="research-source">
                        Sources:{' '}
                        <a
                          href="https://link.springer.com/article/10.1007/s10803-014-2201-z"
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={index === 1 ? 0 : -1}
                        >
                          Evaluating visual activity schedules as evidence-based practice (Journal of
                          Autism and Developmental Disorders)
                        </a>
                        {' · '}
                        <a
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8733412/"
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={index === 1 ? 0 : -1}
                        >
                          Efficacy of visual activity schedules in children with ADHD (systematic
                          review, PMC)
                        </a>
                        {' · '}
                        <a
                          href="https://onlinelibrary.wiley.com/doi/10.1002/bin.70028"
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={index === 1 ? 0 : -1}
                        >
                          A closer examination of the visual schedule component (Behavioral
                          Interventions, 2025)
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>

                <div
                  className={slideClass(2)}
                  aria-hidden={index !== 2}
                  ref={(el) => {
                    slideRefs.current[2] = el;
                  }}
                >
                  <h2>What research has looked at (continued)</h2>
                  <ul className="research-list">
                    <li>
                      <p>
                        <strong>Rewards.</strong> Token systems, where children earn tokens or points
                        for positive behavior, are among the most studied classroom strategies. A
                        meta-analysis of 24 studies in kindergarten to fifth-grade classrooms reported
                        a large overall effect. The authors also noted methodological limits, so the
                        results should be read with care.
                      </p>
                      <p className="research-source">
                        Source:{' '}
                        <a
                          href="https://doi.org/10.1177/01454455211058077"
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={index === 2 ? 0 : -1}
                        >
                          Kim, Fienup, Oh &amp; Wang (2022), Behavior Modification
                        </a>
                      </p>
                    </li>
                  </ul>
                  <p className="research-summary">
                    In plain words: the research suggests that making time visible, breaking routines
                    into steps, and celebrating small wins can be helpful for many children. Results
                    differ from child to child. If you have concerns about your child’s development or
                    attention, a doctor or specialist is the right person to ask.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="care-dots" role="group" aria-label="Choose a slide">
            {Array.from({ length: SLIDE_COUNT }, (_, n) => (
              <button
                type="button"
                key={n}
                className={`care-dot${index === n ? ' care-dot--active' : ''}`}
                aria-label={`Go to slide ${n + 1} of ${SLIDE_COUNT}`}
                aria-current={index === n ? 'true' : undefined}
                onClick={() => goTo(n)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareCarousel;
