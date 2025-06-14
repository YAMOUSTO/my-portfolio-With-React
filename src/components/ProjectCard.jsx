import React from 'react';
import styles from './ProjectCard.module.css';
import { useTranslation } from 'react-i18next'; 
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, description, imageUrl, techStack, liveUrl, githubUrl }) {
  const { t } = useTranslation(); 
  const fallbackImageUrl = "https://via.placeholder.com/400x200?text=Project+Image";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl || fallbackImageUrl}
          alt={`${title} project screenshot`} // Title is already translated when passed as prop
          className={styles.cardImage}
          onError={(e) => { e.target.onerror = null; e.target.src=fallbackImageUrl; }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3> {/* Receives translated title */}
        <p className={styles.cardDescription}>{description}</p> {/* Receives translated description */}
        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              {/* <FaExternalLinkAlt />  */}
              {t('projects.projectCard.liveDemo')} {/* Translated text */}
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.cardLink} ${styles.github}`}>
              {/* <FaGithub /> */}
              {t('projects.projectCard.viewCode')} {/* Translated text */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;