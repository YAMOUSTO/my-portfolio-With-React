import React from 'react';
import styles from './Skills.module.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaDatabase, FaFigma, FaVuejs
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  const skillsList = [
    { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJsSquare />, category: 'Frontend' },
    { name: 'React', icon: <FaReact />, category: 'Frontend' },
    { name: 'Vue', icon: <FaVuejs />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
    { name: 'SQL', icon: <FaDatabase />, category: 'Database' },
    { name: 'Git', icon: <FaGitAlt />, category: 'Tools' },
    { name: 'Docker', icon: <FaDocker />, category: 'Tools' },
    { name: 'Figma', icon: <FaFigma />, category: 'Design' },
  ];

  const groupedSkills = skillsList.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2>{t('skills.title', 'My Skills')}</h2>
      <p style={{ marginBottom: '2rem' }}>{t('skills.description', '')}</p>
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className={styles.category}>
          <h3>{category}</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;