import React from 'react';
import styles from './Header.module.css'; // Import styles using CSS Modules

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Fahim Naytik</div>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="#intro">INTRO</a></li>
            <li><a href="#skills">SKILLS & CERTIFICATIONS</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
