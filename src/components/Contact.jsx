
import styles from './Contact.module.css'; // Import styles using CSS Modules
// Import icons from react-icons/fa
// Make sure you have react-icons installed: npm install react-icons --save
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';


function Contact() {

  return (
    // Assign an ID for header navigation
    <section id="contact" className={styles.contactSection}>
      {/* Main content container for contact info and intro text */}
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2> {/* Section Title */}

        <p className={styles.contactIntroText}>
          Feel free to reach out through the information below.
        </p>

        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p>Email: jameefahim2@gmail.com</p> 
          <p>Phone: (917) 592-2160</p> 
          <p>Location: New York, USA</p>

          {/* Social Icons */}
          <div className={styles.contactSocialIcons}>
            {/* Email Icon - Use mailto: link */}
            <a href="mailto:jameefahim2@gmail.com" aria-label="Email me">
              <FaEnvelope />
            </a>
            {/* LinkedIn Icon - Replace with your LinkedIn profile URL */}
            <a href="https://www.linkedin.com/in/fahimnaytik/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div> {/* End of .container */}

      {/* Interactive Map (OpenStreetMap Embed) - Moved outside .container for full width */}
      <div className={styles.mapContainer}>
         <h3>My Location</h3>
         {/* iframe for OpenStreetMap embed */}
         {/* This URL points to a map centered near Times Square, NYC */}
         {/* You can adjust the bbox and marker coordinates in the src URL if needed */}
         <iframe
           width="100%"
           height="400" // Adjust height as needed
           frameBorder="0"
           scrolling="no"
           marginHeight="0"
           marginWidth="0"
           src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0000%2C40.7500%2C-73.9700%2C40.7700&amp;layer=mapnik&amp;marker=40.7580%2C-73.9855"
           className={styles.osmMap} // Apply CSS module class
           title="Map of New York, USA" // Add a title for accessibility
         ></iframe>
         <p className={styles.mapCaption}>Based in New York, USA</p> {/* Optional caption */}
       </div>

    </section>
  );
}

export default Contact;
