// src/sections/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // *** YOUR FORMSPREE ENDPOINT IS HERE ***
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkgrevdy'; // <<< YOUR ENDPOINT

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Basic check to ensure the endpoint looks like a Formspree URL (optional but good practice)
    if (!FORMSPREE_ENDPOINT || !FORMSPREE_ENDPOINT.includes('/f/')) {
        setStatus('Formspree endpoint not configured correctly. Please check the code.');
        // Clear status message after a few seconds
        setTimeout(() => setStatus(''), 5000);
        return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree to process AJAX request correctly
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Formspree typically returns {ok: true} or just a 200 status on success for AJAX
        // We can also check response.json() if more detailed success/error messages are provided
        // For simplicity, we'll assume response.ok is sufficient for success
        setStatus('Message sent successfully! Thank you.');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        // Try to get more detailed error from Formspree if available
        const errorData = await response.json().catch(() => ({})); // Try to parse error, default to empty object
        const errorMessage = errorData.errors 
                             ? errorData.errors.map(err => err.message || err.field || err).join(', ') 
                             : `Failed to send message. Status: ${response.status}. Please try again.`;
        setStatus(errorMessage);
      }
    } catch (error) {
      console.error("Submission error (Network or other client-side issue):", error);
      setStatus('An error occurred while sending your message. Please check your connection and try again.');
    }

    // Clear status message after a few seconds, regardless of success or failure
    setTimeout(() => setStatus(''), 7000); // Increased time for user to read
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <h2>Get In Touch</h2>
      <p className={styles.subtitle}>
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name" // 'name' attribute is crucial for Formspree
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email" // 'name' attribute is crucial for Formspree
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email Address"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message" // 'name' attribute is crucial for Formspree
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>
        </div>
        <button 
            type="submit" 
            className={styles.submitButton} 
            disabled={status === 'Sending...'}
        >
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
        {status && (
            <p 
                style={{ 
                    marginTop: '1rem', 
                    textAlign: 'center', 
                    color: status.toLowerCase().includes('successfully') ? 'lightgreen' : 'pink',
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