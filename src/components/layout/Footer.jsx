// src/components/layout/Footer.jsx
import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaArrowUp, FaTwitter } from 'react-icons/fa'; // Added FaArrowUp

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const socialMedia = [
    { name: 'GitHub', url: 'https://github.com/YSOUMAH', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yamoussa-soumah-374769260/', icon: <FaLinkedin /> },
    { name: 'Twitter', url: 'https://www.linkedin.com/in/yamoussa-soumah-374769260/', icon: <FaTwitter /> },
  ];

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinksFooter}>
        {socialMedia.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLinkFooter}
            aria-label={`Link to my ${social.name} profile`}
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p>
        © {currentYear} Yamoussa Soumah. All rights reserved.
      </p>
      <p>
        Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> & 
        Vite. {/* Add hosting if you like */}
      </p>

      {/* Scroll-to-top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;