import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="min-h-screen pt-16">
        <Hero />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
    </div>
  );
}

export default App;