import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; 
import styles from './LanguageSwitcher.module.css'; 

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className={styles.languageSwitcher}>
     
      
      <FaGlobe className={styles.globeIcon} />
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
        <option value="tr">Türkçe</option> 
      </select>
      
    </div>
  );
}

export default LanguageSwitcher;