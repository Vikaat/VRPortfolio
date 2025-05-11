// src/App.jsx
import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import ThemeToggle from './components/ThemeToggle';
import AnimatedSection from './components/AnimatedSection';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Highlights from './components/Highlights';
// import Skills from './components/Skills';
import SkillsCarousel from './components/SkillsCarousel';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteer from './components/Volunteer';
import Awards from './components/Awards';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useDarkMode();
  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div
      className={`
        min-h-screen transition-colors
        ${theme === 'dark'
          ? 'bg-black text-yellow-400'
          : 'bg-white text-blue-800'}
      `}
    >
      <div className="max-w-4xl mx-auto px-4 py-2 space-y-4">
        {/* Theme toggle */}
        <div className="flex justify-end">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Sections */}
        <AnimatedSection id="hero">
          <Hero theme={theme} />
        </AnimatedSection>

        <AnimatedSection id="about">
          <AboutMe theme={theme} />
        </AnimatedSection>

        <AnimatedSection id="highlights">
          <Highlights theme={theme} />
        </AnimatedSection>

        {/* <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection> */}

        <AnimatedSection id="SkillsCarousel">
            <SkillsCarousel theme={theme} />
        </AnimatedSection>

        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>

        <AnimatedSection id="experience">
          <Experience />
        </AnimatedSection>

        <AnimatedSection id="education">
          <Education />
        </AnimatedSection>

        <AnimatedSection id="volunteer">
          <Volunteer />
        </AnimatedSection>

        <AnimatedSection id="awards">
          <Awards />
        </AnimatedSection>

        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </div>
    </div>
  );
}
