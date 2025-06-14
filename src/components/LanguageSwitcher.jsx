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
     {/*   <button 
        onClick={() => changeLanguage('en')} 
        className={currentLanguage.startsWith('en') ? styles.active : ''}
        aria-pressed={currentLanguage.startsWith('en')}
        title="Switch to English"
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('fr')} 
        className={currentLanguage.startsWith('fr') ? styles.active : ''}
        aria-pressed={currentLanguage.startsWith('fr')}
        title="Passer au Français"
      >
        FR
      </button>
      <button 
        onClick={() => changeLanguage('ar')} 
        className={currentLanguage.startsWith('ar') ? styles.active : ''}
        aria-pressed={currentLanguage.startsWith('ar')}
        title="التحول إلى العربية"
      >
        AR
      </button>
      */}
     
      
      <FaGlobe className={styles.globeIcon} />
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
      </select>
      
    </div>
  );
}

export default LanguageSwitcher;