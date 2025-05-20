// src/sections/Skills.jsx
import React from 'react';
import styles from './Skills.module.css';
// Import icons for your skills - add all the ones you need
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaDatabase, FaFigma, FaVuejs
  // Add more icons like FaVuejs, FaAngular, FaPython, FaJava, FaAws, FaSass, FaBootstrap etc.
} from 'react-icons/fa'; // Font Awesome
import { SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss } from 'react-icons/si'; // Simple Icons - good for brand icons

function Skills() {
  // Define your skills. Add or remove as per your skillset.
  // You can group them or have one flat list.
  // For a more structured approach, you could do:
  // const skillCategories = [ { name: "Frontend", skills: [...] }, { name: "Backend", skills: [...] } ]
  
  const skillsList = [
    { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJsSquare />, category: 'Frontend' },
    //{ name: 'TypeScript', icon: <SiTypescript />, category: 'Frontend' },
    { name: 'React', icon: <FaReact />, category: 'Frontend' },
    { name: 'Vue', icon: <FaVuejs />, category: 'Frontend' },
    //{ name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' }, // If you learn it later
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
   // { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
    { name: 'SQL', icon: <FaDatabase />, category: 'Database' }, // Generic DB icon for SQL
    { name: 'Git', icon: <FaGitAlt />, category: 'Tools' },
     { name: 'Docker', icon: <FaDocker />, category: 'Tools' },
     { name: 'Figma', icon: <FaFigma />, category: 'Design' }, // If applicable
  ];

  // Group skills by category for rendering (optional, but nice)
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
      <h2>My Skills</h2>
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