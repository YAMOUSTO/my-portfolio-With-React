import React from 'react';
import styles from './Hero.module.css';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import {useTranslation} from 'react-i18next';

function Hero() {
  const {t} = useTranslation();
  const name = "Yamoussa Soumah";
  const tagline = "Junior Web Developer | Crafting Innovative Digital Solutions";
  const ctaText = "View My Projects";
  const ctaLink = "#projects";


  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/YSOUMAH', 
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yamoussa-soumah-374769260/', 
      icon: <FaLinkedin />,
    },
     {
       name: 'Twitter',
       url: 'https://twitter.com/yourusername', 
       icon: <FaTwitter />,
     }, 
     {
      name: 'instagram',
      url: 'https://instagram.com/username',
      icon: <FaFacebook/>
     }
  ];

  return (
    <section id="hero" className={styles.heroContainer}>
      <h1 className={styles.nameTitle}>{name}</h1>
      <p className={styles.subtitle}>{tagline}</p>
      <a href={ctaLink} className={styles.ctaButton}>
        {t(ctaText)}
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
            title={social.name} 
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Hero;