import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); 

  const navItems = [
    { id: 'hero', labelKey: 'navbar.home' },
    { id: 'about', labelKey: 'navbar.about' },
    { id: 'skills', labelKey: 'navbar.skills' },
    { id: 'projects', labelKey: 'navbar.projects' },
    { id: 'contact', labelKey: 'navbar.contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    let currentSection = 'hero';
    navItems.forEach(item => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight * 0.66 && rect.bottom >= window.innerHeight * 0.33) {
          currentSection = item.id;
        }
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const handleNavLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); 
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="#hero">YS.</a> 
      </div>
      <div className={styles.navControls}>
        <LanguageSwitcher />
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className={activeSection === item.id ? styles.active : ''}
              onClick={handleNavLinkClick}
            >
              {t(item.labelKey)} 
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;