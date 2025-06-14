// src/sections/Projects.jsx
import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard'; // Make sure ProjectCard is also translated
import { useTranslation } from 'react-i18next';

// Project data should now ideally just contain keys or non-translatable info
// The translatable parts (title, description) will be fetched using t()
const projectDefinitions = [
  {
    id: 'project1', // Unique ID for keys
    translationKeyPrefix: 'projects.project1', // Prefix for title and description keys
    imageUrl: "/images/project-ecommerce.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
    liveUrl: "https://your-live-demo-link1.com", // This might need to stay hardcoded or be part of a non-translatable config
    githubUrl: "https://github.com/yourusername/project-ecommerce",
  },
  {
    id: 'project2',
    translationKeyPrefix: 'projects.project2',
    imageUrl: "/images/project-task-app.jpg",
    techStack: ["React", "Firebase", "Material UI", "Context API"],
    liveUrl: "https://yams-task-manager.netlify.app/",
    githubUrl: "https://github.com/YAMOUSTO/task-manager",
  },
  {
    id: 'project3',
    translationKeyPrefix: 'projects.project3',
    // imageUrl: "", // Let ProjectCard handle fallback
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://yamstechnovasou.netlify.app/",
    githubUrl: "https://github.com/YAMOUSTO/Responsive-Portfolio",
  },
  // Add more project definitions here
];

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projectsContainer}>
      <h2>{t('projects.title')}</h2> {/* Using default from JSON now */}
      <p style={{ marginBottom: '2rem' }}>{t('projects.description')}</p>
      
      {projectDefinitions.length > 0 ? (
        <div className={styles.projectsGrid}>
          {projectDefinitions.map((project) => (
            <ProjectCard
              key={project.id}
              // Pass translated title and description
              title={t(`${project.translationKeyPrefix}.title`)}
              description={t(`${project.translationKeyPrefix}.description`)}
              imageUrl={project.imageUrl}
              techStack={project.techStack} // Tech stack usually not translated
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      ) : (
        <p>{t('projects.noProjects')}</p>
      )}
    </section>
  );
}

export default Projects;