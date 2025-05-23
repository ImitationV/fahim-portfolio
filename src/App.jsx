import React from 'react';
import Header from './components/Header';      // Import the Header component
import Hero from './components/Hero';        // Import the Hero component
import Intro from './components/Intro';      // Import the Intro component
import Skills from './components/Skills';    // Import the Skills component
import Portfolio from './components/Portfolio'; // Import the Portfolio component
import Experience from './components/Experience'; // Import the Experience component
import Contact from './components/Contact';    // Import the new Contact component
import './index.css';                       // Import global styles

function App() {
  return (
    <div className="app-container">
      {/* The Header component for navigation */}
      <Header />

      {/* The Hero component for the main introduction */}
      <Hero />

      {/* The Intro section */}
      <Intro />

      {/* The Skills & Certification section */}
      <Skills />

      {/* The Portfolio section */}
      <Portfolio />

      {/* The Experience section */}
      <Experience />

      {/* The new Contact section */}
      <Contact />

      {/* Add other sections/components here as you build your portfolio */}
      {/* For example: */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
