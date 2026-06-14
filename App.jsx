import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 overflow-x-hidden relative font-sans">
      {/* Premium background layout */}
      <BackgroundEffects />

      {/* Floating Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
