// src/sections/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
// Import desired icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example icons

function Hero() {
  const name = "Yamoussa Soumah";
  const tagline = "Full-Stack Web Developer | Crafting Innovative Digital Solutions";
  const ctaText = "View My Projects";
  const ctaLink = "#projects";

  // Update with your actual URLs and choose icons
  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/YSOUMAH', // <<< YOUR GITHUB URL
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yamoussa-soumah-374769260/', // <<< YOUR LINKEDIN URL
      icon: <FaLinkedin />,
    },
     {
       name: 'Twitter',
       url: 'https://twitter.com/yourusername', // <<< YOUR TWITTER URL (Optional)
       icon: <FaTwitter />,
     },
    // Add more as needed (e.g., Dev.to, Medium using appropriate icons)
  ];

  return (
    <section id="hero" className={styles.heroContainer}>
      <h1 className={styles.nameTitle}>{name}</h1>
      <p className={styles.subtitle}>{tagline}</p>
      <a href={ctaLink} className={styles.ctaButton}>
        {ctaText}
      </a>
      <div className={styles.socialLinks}>
        {socialMedia.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={`Link to my ${social.name} profile`}
            title={social.name} // Good for accessibility and tooltips
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Hero;