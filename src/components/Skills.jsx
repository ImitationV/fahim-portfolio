import React from 'react';
import styles from './Skills.module.css'; // Import styles using CSS Modules
import pythonIcon from '../assets/Python.svg';
import javaIcon from '../assets/Java.svg';
import postgresIcon from '../assets/PostgresSQL.svg';
import mongoIcon from '../assets/MongoDB.svg';
import gitIcon from '../assets/Git.svg';
import officeIcon from '../assets/office.svg';
import powerbiIcon from '../assets/powerbi.svg';
import excelIcon from '../assets/excel.svg';

// No react-icons imports needed anymore as we are using SVG images

function Skills() {
  // Define your skills with paths to SVG image files
  // Place your SVG files in the 'public' folder and use paths relative to 'public'
  const skills = [
    { name: 'Python', image: pythonIcon, description: 'Matplotlib, Numpy, Pandas, Seaborn, Scikit-learn' },
    { name: 'Java', image: javaIcon, description: 'Backend Development, Data Processing, JUnit' },
    { name: 'PostgreSQL', image: postgresIcon, description: 'Database Design, SQL Queries,  Triggers and Events, Indexes' },
    { name: 'MongoDB', image: mongoIcon, description: 'MongoDB Compass, Basic Queries, Aggregation Framework' },
    { name: 'Git', image: gitIcon, description: 'Staging and Branching, Remote Repositories, Github' },
    { name: 'Microsoft Office', image: officeIcon, description: 'Word, PowerPoint, Outlook, Access' },
    { name: 'Power BI', image: powerbiIcon, description: 'Interactive Dashboards, Data Visualization, DAX' },
    { name: 'Excel', image: excelIcon, description: 'Formulas and Functions,  Pivot Tables, Charts' },
    // Add more skills here with their SVG paths
  ];

  // Define your certification data
  const certifications = [
    {
      id: 1,
      name: 'Google Data Analytics Professional Certificate',
      organization: 'Coursera',
      date: 'Issued May 2023',
      link: 'YOUR_CERTIFICATE_LINK_1', // Optional link to verify
    },
    /*
    {
      id: 2,
      name: 'Microsoft Certified: Azure Data Scientist Associate',
      organization: 'Microsoft',
      date: 'Issued Nov 2023',
      link: 'YOUR_CERTIFICATE_LINK_2', // Optional link to verify
    },
    {
      id: 3,
      name: 'Tableau Desktop Specialist',
      organization: 'Tableau',
      date: 'Issued Feb 2024',
      link: 'YOUR_CERTIFICATE_LINK_3', // Optional link to verify
    },*/
    // Add more certifications here
  ];


  return (
    // Assign an ID for header navigation - This section now covers both skills and certifications
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Certifications</h2> {/* Combined Section Title */}

        {/* Skills Sub-section */}
        <div className={styles.skillsSubSection}>
          <p className={styles.skillsIntroText}>
            Highlighting key technical skills relevant to data analytics and software development.
          </p>

          {/* Skill Icons Grid */}
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                {/* Use an <img> tag for the SVG icon */}
                <img
                  src={skill.image}
                  alt={`${skill.name} icon`} // Alt text for accessibility
                  className={styles.skillIcon} // Apply the CSS module class
                />
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillDescription}>{skill.description}</p> {/* Optional description */}
              </div>
            ))}
          </div>
        </div>

        {/* Certification Sub-section */}
        <div className={styles.certificationSubSection}>
           <h3 className={styles.certificationSubTitle}>Certifications</h3> {/* Certification Sub-title */}
           <p className={styles.certificationIntroText}>
             Highlighting relevant professional certifications.
           </p>

           {/* Certifications List */}
           <div className={styles.certificationList}>
             {certifications.map((cert) => (
               <div key={cert.id} className={styles.certificationItem}>
                 <h4 className={styles.certificationName}>{cert.name}</h4> {/* Changed to h4 */}
                 <p className={styles.certificationOrgDate}>
                   {cert.organization} | {cert.date}
                 </p>
                 {cert.link && (
                   <a
                     href={cert.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.certificationLink}
                   >
                     View Credential
                   </a>
                 )}
               </div>
             ))}
           </div>
         </div>

      </div>
    </section>
  );
}

export default Skills;
