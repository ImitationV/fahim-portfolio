import React from 'react';
import styles from './Experience.module.css'; // Import styles using CSS Modules

function Experience() {
  // Sample experience data
  // Replace this with your actual internships and job experiences
  const experiences = [
    {
      id: 1,
      title: 'Apprentice',
      company: 'Morgan Stanley',
      dates: 'February 2023 – July 2023',
      description: [
        'Led automated testing efforts for the Capital Markets Fixed Income team, using SQL to query and validate data, ensuring robust and scalable software solutions',
        'Updated and tested software code regularly to maintain functionality and address issues, improving overall system performance and stability.',
        'Collaborated with cross-functional teams to meet project goals within deadlines, enhancing teamwork and product delivery efficiency',
      ],
    },
    {
      id: 2,
      title: 'Route Sales Associate',
      company: 'Medina State Inc.',
      dates: 'July 2019 – Present',
      description: [
        'Delivered products to various retail locations across the city while maintaining accurate and timely schedules.',
        'Built and maintained professional relationships with store managers to negotiate and complete bread sales.',
        'Tracked and recorded daily transactions, including payments and order details, ensuring accurate cash reconciliation and reporting',
        'Demonstrated strong organizational and problem-solving skills in a fast-paced, customer-facing role',
      ],
    },
    // Add more experience objects here
  ];

  return (
    // Assign an ID for header navigation
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2> {/* Section Title */}

        <p className={styles.experienceIntroText}>
          My professional journey and contributions.
        </p>

        {/* Experience List */}
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <span className={styles.experienceDates}>{exp.dates}</span>
              </div>
              <p className={styles.experienceCompany}>{exp.company}</p>
              <ul className={styles.experienceDescriptionList}>
                {exp.description.map((point, i) => (
                  <li key={i} className={styles.experienceDescriptionItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
