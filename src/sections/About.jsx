// src/sections/About.jsx
import React from 'react';
import styles from './About.module.css';
// Import your photo if you have one
// Make sure the path is correct. If your assets folder is directly under src:
import profilePhoto from '../assets/images/myFoto.jpg'; // Replace with your actual photo path

function About() {
  const hasPhoto = true; // Set to false if you don't have a photo yet

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        {hasPhoto && (
          <div className={styles.profileImageContainer}>
            <img 
              src={profilePhoto} 
              alt="Yamoussa Soumah" // Your Name
              className={styles.profileImage} 
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <h2>About Me</h2>
          <p>
            Hello! I'm Yamoussa Soumah, a passionate and dedicated Full-Stack Web Developer 
            with a knack for creating elegant, efficient, and user-friendly digital experiences. 
            My journey into web development started with a fascination for how websites could 
            transform ideas into interactive realities, and it has grown into a full-fledged passion.
          </p>
          <p>
            I thrive on solving complex problems and continuously learning new technologies. 
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) but I'm always
            eager to explore new tools and frameworks that can help me build better and more
            performant applications. My goal is to leverage my skills to contribute to
            meaningful projects that make a positive impact.
          </p>
          <p>
            When I'm not coding, I enjoy playing Playstation. I believe in the power of collaboration 
            and am always excited to work with like-minded individuals to bring innovative ideas to life.
          </p>
          {/* You can add more paragraphs or a list of key skills/values here */}
        </div>
      </div>
    </section>
  );
}

export default About;