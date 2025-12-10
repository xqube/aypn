import { motion, useScroll, useSpring } from 'framer-motion';

// Components
import { Navbar, Footer } from './components/layout';
import { Hero, About, Skills, Projects, Experience, Contact } from './components/sections';

// Hooks
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

const App = () => {
  const { isDarkMode, toggleTheme, themeOrigin } = useTheme();
  const activeSection = useScrollSpy();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Background Layers for Circular Reveal */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Base layer - Dark background (bottom) */}
        <div className="absolute inset-0 bg-slate-950" />

        {/* Base layer - Light background (on top of dark) */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-cyan-50/40" />

        {/* Reveal layer - Always expands with TARGET theme color */}
        <motion.div
          key={`reveal-${isDarkMode}-${themeOrigin.x.toFixed(0)}-${themeOrigin.y.toFixed(0)}`}
          className={`absolute inset-0 ${isDarkMode ? 'bg-slate-950' : 'bg-gradient-to-br from-indigo-50/40 via-white to-cyan-50/40'}`}
          initial={{ clipPath: `circle(0% at ${themeOrigin.x}px ${themeOrigin.y}px)` }}
          animate={{ clipPath: `circle(150% at ${themeOrigin.x}px ${themeOrigin.y}px)` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-700">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 dark:bg-indigo-500 origin-left z-[100]"
          style={{ scaleX }}
        />

        <Navbar activeSection={activeSection} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;