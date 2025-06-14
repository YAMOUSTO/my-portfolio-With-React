import React, { useState } from 'react';
import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkgrevdy';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t('loading.message', 'Sending...'));

    if (!FORMSPREE_ENDPOINT || !FORMSPREE_ENDPOINT.includes('/f/')) {
        setStatus('Formspree endpoint not configured correctly. Please check the code.');
        setTimeout(() => setStatus(''), 5000);
        return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(t('success.formSubmitted', 'Message sent successfully! Thank you.'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.errors 
                             ? errorData.errors.map(err => err.message || err.field || err).join(', ') 
                             : `Failed to send message. Status: ${response.status}. Please try again.`;
        setStatus(errorMessage);
      }
    } catch (error) {
      setStatus(t('error.serverError', 'An error occurred while sending your message. Please check your connection and try again.'));
    }

    setTimeout(() => setStatus(''), 7000);
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <h2>{t('contact.title', 'Get In Touch')}</h2>
      <p className={styles.subtitle}>
        {t('contact.description', 'Have a project in mind or just want to say hi? Feel free to reach out!')}
      </p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t('contact.form.name', 'Name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t('contact.form.name', 'Your Name')}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">{t('contact.form.email', 'Email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t('contact.form.email', 'Your Email Address')}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">{t('contact.form.message', 'Message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t('contact.form.message', 'Your Message')}
          ></textarea>
        </div>
        <button 
            type="submit" 
            className={styles.submitButton} 
            disabled={status === t('loading.message', 'Sending...')}
        >
          {status === t('loading.message', 'Sending...') ? t('loading.message', 'Sending...') : t('contact.form.submit', 'Send Message')}
        </button>
        {status && (
            <p 
                style={{ 
                    marginTop: '1rem', 
                    textAlign: 'center', 
                    color: status.toLowerCase().includes('success') ? 'lightgreen' : 'pink',
                    fontWeight: '500'
                }}
            >
                {status}
            </p>
        )}
      </form>
      <div className={styles.contactInfo}>
        <p>
          Or, email me directly at: <a href="mailto:soumahyamoussa28@gmail.com">soumahyamoussa28@gmail.com</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;