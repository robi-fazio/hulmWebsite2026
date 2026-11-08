import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sections.css';

type FaqItem = {
  question: string;
  answer: string[];
  extra?: 'contact' | 'privacy';
};

const faqItems: FaqItem[] = [
  {
    question: 'What is HULM?',
    answer: [
      'HULM (Hurry Up Little Monster) is a visual timer and task list app for families. A green screen slowly slides away to reveal a friendly monster, so children can see how much time is left. Every finished timer or task earns a monster to collect.',
    ],
  },
  {
    question: 'How does it work?',
    answer: [
      'Pick a ready-made timer (brushing teeth, tidying up, chores, nap time) or set your own from 1 to 999 minutes. Your child watches the screen reveal the monster, and when the timer ends the monster joins their collection. Task lists work the same way: finish a task, collect a monster.',
    ],
  },
  {
    question: 'Why do visual timers and task lists help some children?',
    answer: [
      'For many children, time is hard to picture and transitions can feel sudden. A visual timer makes time easier to see, and a task list shows what comes next. Researchers have studied visual timers, visual schedules and reward systems, and results vary from child to child.',
    ],
  },
  {
    question: 'Is HULM suitable for children who find focus and routines difficult?',
    answer: [
      'Many parents of children who struggle with focus, waiting or switching activities use tools like this. HULM is an everyday family tool, not a medical or therapeutic product. It does not diagnose or treat anything and does not replace advice from your doctor or a specialist.',
    ],
  },
  {
    question: 'Will it work for my child?',
    answer: [
      "We can't promise results, because every child and family is different. The best way to find out is to try it for a couple of weeks. Start with one routine, such as brushing teeth, and keep the timer short and the tone positive.",
    ],
  },
  {
    question: 'What are the rewards?',
    answer: [
      'Each completed timer or task unlocks a new monster. When your child has collected enough monsters, a memory game unlocks that is played with those monsters.',
    ],
  },
  {
    question: 'What is free and what is Premium?',
    answer: [
      'The free version includes ready-made timers, a custom timer from 1 to 999 minutes, the monster collection and the memory game.',
      'Premium removes ads and lets you save your own custom timers, use task lists to collect monsters, and create a separate profile and progress track for each child in the family.',
    ],
  },
  {
    question: 'Can I use HULM with more than one child?',
    answer: [
      'Yes, with Premium. Each child gets their own profile and progress, so their monsters and rewards stay separate.',
    ],
  },
  {
    question: 'Does HULM show ads?',
    answer: ['The free version shows ads. Premium removes them completely.'],
  },
  {
    question: 'Is HULM safe for my child?',
    answer: [
      'HULM is made for children to use with their parents. There is no sign-up and no account to create, and the monsters your child collects are stored on your device.',
    ],
    extra: 'privacy',
  },
  {
    question: "What if my child gets upset or doesn't want to use the timer?",
    answer: [
      'That is normal. A few ideas parents try: let your child choose the timer or the monster, start with a short timer and a task they enjoy, use the timer together with your child instead of imposing it, celebrate the monster together, and try again another day if it is not working.',
    ],
  },
  {
    question: 'Which devices does HULM work on?',
    answer: ['HULM is available on the App Store for iOS and on Google Play for Android.'],
  },
  {
    question: 'How do I contact you?',
    answer: [
      'Send us a message with the button below. We read every one, and your feedback helps us improve HULM.',
    ],
    extra: 'contact',
  },
];

const FIRST_COLUMN_COUNT = 7;

const columns: FaqItem[][] = [
  faqItems.slice(0, FIRST_COLUMN_COUNT),
  faqItems.slice(FIRST_COLUMN_COUNT),
];

type FaqProps = {
  onContactClick: () => void;
};

function Faq({ onContactClick }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <h2>Parent FAQ</h2>
        <p className="section-intro">Quick answers to the questions parents ask us most.</p>
        <div className="faq-columns">
          {columns.map((column, columnIndex) => (
            <div className="faq-column" key={columnIndex}>
              {column.map((item) => {
                const index = faqItems.indexOf(item);
                const isOpen = openIndex === index;
                return (
                  <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={item.question}>
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
                        {item.extra === 'privacy' && (
                          <p>
                            Read the details in our <Link to="/privacy-policy">Privacy Policy</Link>.
                          </p>
                        )}
                        {item.extra === 'contact' && (
                          <button type="button" className="btn btn-primary" onClick={onContactClick}>
                            CONTACT US
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
