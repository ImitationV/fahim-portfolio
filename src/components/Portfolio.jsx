import { useState, useMemo } from 'react'; // Import useState and useMemo
import styles from './Portfolio.module.css'; // Import styles
import ProjectModal from './ProjectModal'; // Import the Modal component

// Import images
import strokeImg from '../assets/stroke.webp';
import todoImg from '../assets/todo.jpg';
import nychaImg from '../assets/nycha.png';
import budgetbuddyImg from '../assets/budgetbuddy.jpg';
import retailImg from '../assets/retail.jpg';
import libraryImg from '../assets/library.jpg';
import miniImg from '../assets/mini.webp';

// Sample project data
// Add a 'category' property to each project
const projects = [
  {
    id: 1,
    title: 'Stroke Prediction Project',
    image: strokeImg, // Use imported image
    shortDescription: 'Analytics on stroke risk using python libraries.',
    fullDescription: 'This project focuses on analyzing health-related data to predict the likelihood of a stroke using machine learning techniques. It involves data preprocessing, handling imbalanced datasets, building predictive models, and evaluating their performance.',
    technologies: ['Python', 'Seaborn', 'Pandas', 'statsmodel'],
    githubLink: 'https://github.com/ImitationV/analytics-portfolio/tree/main/Stroke%20Risk', // Replace with your GitHub link
    //demoLink: 'YOUR_PROJECT_ONE_DEMO_URL',   // Replace with your live demo link
    category: 'Data Analytics', // Add category
  },
  {
    id: 2,
    title: 'To Do List',
    image: todoImg,
    shortDescription: 'Simple and fast to-do list application.',
    fullDescription: 'A simple and fast to-do list application built with React, featuring user authentication and real-time data storage using Supabase.',
    technologies: ['React', 'Supabase', 'CSS'],
    githubLink: 'https://github.com/ImitationV/CSCI39548-WebDev/tree/master/3.todo-list',
    demoLink: 'https://drive.google.com/file/d/10kcdI3mMgX5HVAPxh3R_4uYO8o1WGsq-/view?usp=sharing',
    category: 'Web Development',  // Add category
  },
  {
    id: 3,
    title: 'How much space do NYCHA residents have in their apartments?',
    image: nychaImg,
    shortDescription: 'Data analysis on NYCHA apartments.',
    fullDescription: 'This project analyzes the average square footage of NYCHA apartments and compares it to the average square footage of apartments in New York City. It uses data from the NYC Open Data portal and visualizes the results using Python libraries.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubLink: 'https://github.com/ImitationV/analytics-portfolio/blob/main/NYCHA%20Development/NYCHA_Development_Data_Book.ipynb',
    demoLink: 'https://github.com/ImitationV/analytics-portfolio/blob/main/NYCHA%20Development/NYCHA_Development_Data_Book.ipynb',
    category: 'Data Analytics', // Add category
  },
  {
    id: 4,
    title: 'Budget Buddy',
    image: budgetbuddyImg,
    shortDescription: 'Budgeting app to track expenses and income.',
    fullDescription: 'A budgeting app that helps users track their expenses and income, providing insights into their financial habits and helping them save money. It includes features like expense categorization, chat bot, stock analyzer and visualizations of spending patterns. [Group Project]',
    technologies: ['React', 'Node.js', 'Machine Learning', 'Supbase', 'CSS', 'HTML', 'Python'],
    githubLink: 'https://github.com/ImitationV/capstone',
    category: 'Web Development', // Add category
  },
    {
    id: 5,
    title: 'Retail Sales Analysis',
    image: retailImg,
    shortDescription: 'Retail sales analysis using SQL.',
    fullDescription: 'This project performs a retail sales analysis using SQL. The goal is to gain insights into sales trends, customer behavior, and product performance. The analysis includes data cleaning, exploration, and answering specific business questions through SQL queries.',
    technologies: ['PostgreSQL', 'Excel'],
    githubLink: 'https://github.com/ImitationV/analytics-portfolio/tree/main/Retail%20Sales%20Analysis%20(SQL)',
    category: 'Data Analytics', // Add category
  },
    {
    id: 6,
    title: 'Library Management System',
    image: libraryImg,
    shortDescription: 'Library management system to manage books and users.',
    fullDescription: 'This project demonstrates the implementation of a Library Management System using SQL. It includes creating and managing tables, performing CRUD operations, and executing advanced SQL queries.',
    technologies: ['PostgreSQL', 'Excel'],
    githubLink: 'https://github.com/ImitationV/analytics-portfolio/tree/main/Library%20Management%20System%20(SQL)',
    category: 'Data Analytics', // Add category
  },
  {
    id: 7,
    title: 'Byte Sized Projects',
    image: miniImg,
    shortDescription: 'A collection of mini projects using python.',
    fullDescription: 'This project is a collection of mini projects that demonstrate various Python programming concepts and libraries. Some of these projects does not have GUI.',
    technologies: ['pynput'],
    githubLink: 'https://github.com/ImitationV/byte-sized-projects/tree/master/pynput',
    category: 'Python', // Add category
  },
  // Add more project objects here with appropriate categories
];

// Define filter categories
const filterCategories = ['All', 'Data Analytics', 'Web Development', 'Python']; // Add your categories

function Portfolio() {
  // State to manage which project is currently selected for the modal
  const [selectedProject, setSelectedProject] = useState(null);
  // State to manage the currently active filter category
  const [activeFilter, setActiveFilter] = useState('All');

  // Function to open the modal with a specific project
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Filter projects based on the active filter
  // useMemo is used to re-calculate filteredProjects only when projects or activeFilter changes
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [projects, activeFilter]);

  // Function to handle filter button clicks
  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    // Assign an ID to the section for header navigation
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Portfolio</h2> {/* Section Title */}

        {/* Filter Options */}
        <div className={styles.filterOptions}>
          {filterCategories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeFilter === category ? styles.activeFilter : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => ( // Use filteredProjects here
            // Each project item in the grid
            <div
              key={project.id}
              className={styles.projectItem}
              onClick={() => openModal(project)} // Open modal on click
            >
              {/* Project Thumbnail Image */}
              <img src={project.image} alt={project.title} className={styles.projectImage} />

              {/* Overlay for hover description */}
              <div className={styles.projectOverlay}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectShortDescription}>{project.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the ProjectModal component */}
      {/* It will only be visible if selectedProject is not null */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
}

export default Portfolio;
