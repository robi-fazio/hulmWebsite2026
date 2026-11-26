import { useState } from 'react';
import type { FormEvent } from 'react';
import './ContactModal.css';
import { useLanguage } from './i18n/useLanguage';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  if (!isOpen) return null;

  const resetAndClose = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    onClose();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://hulm.robifazio.com/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={resetAndClose} aria-label={t.contact.closeLabel}>
          &times;
        </button>
        <h2 className="modal-title">{t.contact.title}</h2>

        {status === 'success' ? (
          <p className="form-status form-status--success">{t.contact.success}</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>{t.contact.nameLabel}</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                required
                disabled={status === 'sending'}
              />
            </label>
            <label className="form-field">
              <span>{t.contact.emailLabel}</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.emailPlaceholder}
                required
                disabled={status === 'sending'}
              />
            </label>
            <label className="form-field">
              <span>{t.contact.messageLabel}</span>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                required
                disabled={status === 'sending'}
              />
            </label>

            {status === 'error' && (
              <p className="form-status form-status--error">{t.contact.error}</p>
            )}

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={resetAndClose} disabled={status === 'sending'}>
                {t.contact.cancel}
              </button>
              <button type="submit" className="btn-send" disabled={status === 'sending'}>
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
