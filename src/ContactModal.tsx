import { useState, FormEvent } from 'react';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
      const response = await fetch('/api/contact', {
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
        <button className="modal-close" onClick={resetAndClose} aria-label="Close">
          &times;
        </button>
        <h2 className="modal-title">Contact Us</h2>

        {status === 'success' ? (
          <p className="form-status form-status--success">
            Thanks! Your message has been sent. We'll get back to you soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                disabled={status === 'sending'}
              />
            </label>
            <label className="form-field">
              <span>Your email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={status === 'sending'}
              />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                rows={5}
                required
                disabled={status === 'sending'}
              />
            </label>

            {status === 'error' && (
              <p className="form-status form-status--error">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={resetAndClose} disabled={status === 'sending'}>
                Cancel
              </button>
              <button type="submit" className="btn-send" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending\u2026' : 'Send'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
