// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // For active link highlighting

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    // Navbar background change on scroll
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Active link highlighting
    let currentSection = 'hero';
    navItems.forEach(item => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        // Check if section is within the top 2/3 of the viewport
        if (rect.top <= window.innerHeight * 0.66 && rect.bottom >= window.innerHeight * 0.33) {
          currentSection = item.id;
        }
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active link
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // navItems dependency removed to prevent re-renders if navItems object changes

  const handleNavLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close mobile menu on link click
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="#hero">YS.</a> {/* Your Initials or Logo Text */}
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className={activeSection === item.id ? styles.active : ''}
              onClick={handleNavLinkClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;