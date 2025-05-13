import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage'; // Example for a dedicated project page
import ContactPage from './pages/ContactPage'; // Example for a dedicated contact page

function App() {
  return (
    <Router basename="/my-portfolio/"> 
      {/* Your Header, Routes, and Footer components */}
      {/* Example: */}
      {/* <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer /> */}
    </Router>
  );
}

export default App;