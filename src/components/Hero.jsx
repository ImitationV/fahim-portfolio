import React from 'react';
import styles from './Hero.module.css'; // Import styles using CSS Modules
import SocialLinks from './SocialLinks'; // Import the SocialLinks component
import Contact from './Contact';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.name}>FAHIM NAYTIK</h1> 

        {/* Social Media Links */}
        <SocialLinks /> {/* Render the SocialLinks component */}

        {/* Description */}
        <p className={styles.description}>
          I’m a data enthusiast who believes every number tells a story — if you know how to listen. With a background in computer science and a deep interest in analytics, I enjoy finding patterns, asking the right questions, and translating complexity into clarity. Whether it’s through SQL queries, Python scripts, or dashboards that just make sense, I’m driven by the impact data can create. ❤️
        </p>

        {/* Call to Action Buttons */}
        <div className={styles.buttons}>
          <button className={styles.contactButton}><a href="#contact">CONTACT</a></button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
