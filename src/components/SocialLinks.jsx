import React from 'react';
import styles from './SocialLinks.module.css'; // Import styles using CSS Modules

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className={styles.socialIcons}>
      <a href="https://github.com/ImitationV" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/fahimnaytik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin /> 
      </a>
    </div>
  );
}

export default SocialLinks;
