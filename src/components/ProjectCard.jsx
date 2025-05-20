import React from 'react';
import styles from './ProjectCard.module.css';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Optional: icons for links

function ProjectCard({ title, description, imageUrl, techStack, liveUrl, githubUrl }) {
  // Fallback image if imageUrl is not provided
  const fallbackImageUrl = "https://via.placeholder.com/400x200?text=Project+Image";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={imageUrl || fallbackImageUrl} 
          alt={`${title} project screenshot`} 
          className={styles.cardImage} 
          onError={(e) => { e.target.onerror = null; e.target.src=fallbackImageUrl; }} // Handle broken image links
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              {/* <FaExternalLinkAlt />  */}
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.cardLink} ${styles.github}`}>
              {/* <FaGithub /> */}
               View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;