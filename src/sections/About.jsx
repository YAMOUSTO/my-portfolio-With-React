import React from 'react';
import styles from './About.module.css';
import profilePhoto from '../assets/images/myFoto.jpg';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  const hasPhoto = true;

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        {hasPhoto && (
          <div className={styles.profileImageContainer}>
            <img 
              src={profilePhoto} 
              alt={t('hero.name')}
              className={styles.profileImage} 
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <h2>{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>
      </div>
    </section>
  );
}

export default About;