import styles from './ProjectModal.module.css'; // Import styles

// ProjectModal component receives project data and a function to close the modal
function ProjectModal({ project, onClose }) {
  // If no project is provided, the modal should not be visible
  if (!project) {
    return null;
  }

  return (
    // The modal overlay
    <div className={styles.modalOverlay} onClick={onClose}>
      {/* The modal content area - stop propagation to prevent closing when clicking inside */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose}>
          &times; {/* HTML entity for a multiplication sign (used as a close icon) */}
        </button>

        {/* Project Image (optional) */}
        {project.image && (
          <img src={project.image} alt={project.title} className={styles.modalImage} />
        )}

        {/* Project Title */}
        <h2 className={styles.modalTitle}>{project.title}</h2>

        {/* Full Description */}
        <p className={styles.modalDescription}>{project.fullDescription}</p>

        {/* Technologies Used (optional) */}
        {project.technologies && project.technologies.length > 0 && (
          <p className={styles.modalTechnologies}>
            <strong>Technologies:</strong> {project.technologies.join(', ')}
          </p>
        )}

        {/* Links */}
        <div className={styles.modalLinks}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.modalLinkButton}>
              GitHub
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.modalLinkButton}>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
