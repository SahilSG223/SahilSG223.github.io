import './App.css';
import NavBar from './components/nav'
import Experience from './components/experience'
import Projects from './components/projects'
import React from 'react';

function App() {
  const introText = "Hi I'm Sahil";
  const aboutParagraphs = [
    "I am a Statistics and Computer Science student at the University of Waterloo.",
    "I am passionate about everything to do with data! Whether it's for analysis, visualization, or building machine learning models, I love turning raw data into meaningful insights and impactful solutions.",
    "If you share a similar passion or are working on something exciting in this space, I'd love to connect and chat!"
  ];

  return (
    <div className="App" id="top">
      <NavBar />
      <h2 style={{ minHeight: '3.5rem', letterSpacing: '0.5px', fontWeight: 800, fontSize: '2.8rem', color: '#22223b' }}>{introText}</h2>
      <div style={{ maxWidth: 800, margin: '0 auto', marginBottom: '1.5rem' }}>
        {aboutParagraphs.map((para, idx) => (
          <p key={idx} style={{ fontSize: '1.18rem', lineHeight: 1.7, margin: '0.5rem 0', textAlign: 'center' }}>{para}</p>
        ))}
      </div>
      <div className="contact-row">
        <a href="https://www.linkedin.com/in/sahil-gokhale-7523b4258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/><line x1="12" y1="11" x2="12" y2="16"/></svg>
        </a>
        <a href="https://github.com/SahilSG223" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
        </a>
        <a href="mailto:sgokhale@uwaterloo.ca" aria-label="Email" className="contact-link">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
        <a href="tel:+9052993602" aria-label="Phone" className="contact-link">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 21 18.91V21z"/></svg>
        </a>
      </div>
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
