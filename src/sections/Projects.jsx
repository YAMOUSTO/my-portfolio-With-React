import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard'; // Import ProjectCard

// Placeholder project data - REPLACE THIS WITH YOUR ACTUAL PROJECTS
const myProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel. Built with the MERN stack.",
    imageUrl: "/images/project-ecommerce.jpg", // Path relative to public folder, or import if in src/assets
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
    liveUrl: "https://your-live-demo-link1.com",
    githubUrl: "https://github.com/yourusername/project-ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool allowing users to create, assign, and track tasks. Features real-time updates using WebSockets.",
    imageUrl: "/images/project-task-app.jpg", // Example: place images in public/images/
    techStack: ["React", "Firebase", "Material UI", "Context API"],
    liveUrl: "https://yams-task-manager.netlify.app/",
    githubUrl: "https://github.com/YAMOUSTO/task-manager",
  },
  {
    title: "Portfolio Website V1",
    description: "My previous portfolio website built to showcase my skills and projects. Focused on clean design and responsiveness.",
    // imageUrl: "", // Example of using placeholder
    techStack: ["HTML", "CSS", "JavaScript"],
     liveUrl: "https://yamstechnovasou.netlify.app/", // If it's still live
    githubUrl: "https://github.com/YAMOUSTO/Responsive-Portfolio",
  },
  // Add 1-2 more of your best projects
];

function Projects() {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <h2>My Projects</h2>
      {myProjects.length > 0 ? (
        <div className={styles.projectsGrid}>
          {myProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      ) : (
        <p>No projects to display yet. Check back soon!</p>
      )}
    </section>
  );
}

export default Projects;