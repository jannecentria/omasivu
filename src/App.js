import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  useEffect(() => {
    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);
  
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
