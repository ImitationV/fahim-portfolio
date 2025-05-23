import React from 'react';
import styles from './Intro.module.css'; // Import styles using CSS Modules

function Intro() {
  return (
    // Assign an ID to the section so the header link can target it
    <section id="intro" className={styles.introSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Introduction</h2> {/* Section Title */}



        <img
          src="src/assets/fn.png" // Path to your image
          alt="picture" // Important for accessibility
          className={styles.introPicture} // Apply the CSS module class for styling
        />

        <p className={styles.introText}>
          {/* Add your introduction text here */}
          From community college to Hunter College, from Google’s CSSI to Morgan Stanley, every step has been a launchpad for growth. With a foundation built on hands-on experience and academic rigor, I bring a mindset shaped by curiosity, discipline, and momentum.
        </p>

        {/* Timeline Section */}
        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>My Journey</h3> {/* Timeline Title */}
          <div className={styles.timelineItems}>
            {/* Timeline Item 1 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineYear}>2020</h4> {/* Year */}
                <p className={styles.timelineDescription}>Started my Associates Degree in Computer Science at LAGCC</p> {/* Description */}
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineYear}>2021</h4>
                <p className={styles.timelineDescription}>Attended Google CSSI Program</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
             <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineYear}>2022</h4>
                <p className={styles.timelineDescription}>Graduated From LaGuardia Community College</p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineYear}>2023</h4>
                <p className={styles.timelineDescription}>Aprenticeship at Morgan Stanley</p>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineYear}>2025</h4>
                <p className={styles.timelineDescription}>Graduated from Hunter College</p>
              </div>
            </div>

            {/* Add more timeline items as needed */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
