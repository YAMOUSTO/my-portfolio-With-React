import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard'; 
import { useTranslation } from 'react-i18next';

const projectDefinitions = [
  {
    id: 'project1', 
    translationKeyPrefix: 'projects.project1', 
    imageUrl: "/images/project-ecommerce.jpg",
    techStack: ["Vue", "Laravel", "MySQL", "Tailwind CSS"],
    liveUrl: "https://your-live-demo-link1.com", 
    githubUrl: "https://github.com/yourusername/project-ecommerce",
  },
  {
    id: 'project2',
    translationKeyPrefix: 'projects.project2',
    imageUrl: "/images/project-task-app.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://yams-task-manager.netlify.app/",
    githubUrl: "https://github.com/YAMOUSTO/task-manager",
  },
  {
    id: 'project3',
    translationKeyPrefix: 'projects.project3',
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://yamstechnovasou.netlify.app/",
    githubUrl: "https://github.com/YAMOUSTO/Responsive-Portfolio",
  },

];

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projectsContainer}>
      <h2>{t('projects.title')}</h2> 
      <p style={{ marginBottom: '2rem' }}>{t('projects.description')}</p>
      
      {projectDefinitions.length > 0 ? (
        <div className={styles.projectsGrid}>
          {projectDefinitions.map((project) => (
            <ProjectCard
              key={project.id}
              title={t(`${project.translationKeyPrefix}.title`)}
              description={t(`${project.translationKeyPrefix}.description`)}
              imageUrl={project.imageUrl}
              techStack={project.techStack}
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