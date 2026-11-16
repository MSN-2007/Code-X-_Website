import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Achievements from './components/Achievements';
import FAQ from './components/FAQ';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import EventModal from './components/EventModal';
import PageTransition from './components/PageTransition';
import TerminalDrawer from './components/TerminalDrawer';
import CyberHUDDock from './components/CyberHUDDock';
import PrivacyModal from './components/PrivacyModal';
import TermsModal from './components/TermsModal';
import { audioFx } from './utils/audioFx';

const eventsData = [
  {
    title: "BUG-X: Debugging Grand Prix 2026",
    description: "Flagship collegiate debugging grand prix held in collaboration with COTD. Over 200 student developers raced against the clock across rigorous rounds to hunt vulnerabilities, diagnose complex issues, and optimize algorithmic performance.",
    date: "February 2026",
    participants: "200+ Participants",
    image: "/assets/bug_poster.jpg"
  },
  {
    title: "Freshman Induction by GeeksForGeeks 2023",
    description: "An inspiring induction session welcoming freshmen into the world of algorithms and software development. Featured a special guest speaker from GeeksforGeeks sharing key insights on building a successful tech career.",
    date: "15th Sept 2023",
    participants: "600+ Participants",
    image: "/assets/events/1event.png"
  },
  {
    title: "Python Skill Development Program 2023",
    description: "A comprehensive weekly hands-on training series covering core Python concepts, data structures, automation, and real-world scripting projects tailored for university students.",
    date: "14th Sept 2023",
    participants: "120+ Participants",
    image: "/assets/events/2event.png"
  },
  {
    title: "SIH Internal Hackathon 2023",
    description: "Internal preliminary round for Smart India Hackathon. Conducting 24-hour sprint challenges, mentoring collegiate teams, and evaluating innovative technological solutions for national submission.",
    date: "18th-25th Sept 2023",
    participants: "500+ Participants",
    image: "/assets/events/3event.png"
  },
  {
    title: "Educational Bootcamp By Core Members",
    description: "An intensive 3-day multi-track bootcamp curated and led by Code{X} Core Members covering Web Development, Cyber Security basics, Git/GitHub, and problem-solving strategies.",
    date: "Sept 15-17 2025",
    participants: "150+ Participants",
    image: "/assets/events/4event.png"
  },
  {
    title: "SIH Internal Hackathon 2025",
    description: "Flagship internal hackathon screening for Smart India Hackathon 2025. Over 500 participants tackled complex problem statements spanning AI/ML, Web3, Smart Automation, and HealthTech.",
    date: "18th Sept 2025",
    participants: "500+ Participants",
    image: "/assets/events/5event.jpg"
  }
];

// ─── Cyberpunk Teleport Section Animation ────────────────────────────────────
// Each section beams in like it's being materialized from a data stream.
// Phase 1 (0-0.25s): glitch burst — high blur + chromatic offset + scaleX squish
// Phase 2 (0.25-0.65s): snap to real — blur dissolves, scale snaps with overshoot
// Phase 3 (0.65-0.85s): settle — slight bounce eases out
const cyberTeleportVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scaleX: 0.88,
    scaleY: 0.94,
    filter: 'blur(14px) brightness(2.2) saturate(2)',
    skewX: -1.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    filter: 'blur(0px) brightness(1) saturate(1)',
    skewX: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1.1, 0.3, 1],          // custom spring-like ease with slight overshoot
      opacity:  { duration: 0.35, ease: 'easeOut' },
      filter:   { duration: 0.5,  ease: 'easeOut' },
      scaleX:   { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }, // bouncy
      skewX:    { duration: 0.4,  ease: 'easeOut' },
    }
  }
};

// ─── Stagger container for event / card grids ─────────────────────────────────
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

// ─── Individual card beam-in ──────────────────────────────────────────────────
const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.92,
    filter: 'blur(8px) brightness(1.8)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px) brightness(1)',
    transition: {
      duration: 0.5,
      ease: [0.34, 1.26, 0.64, 1],
      filter: { duration: 0.35, ease: 'easeOut' },
    }
  }
};

// ─── Scan-line separator that pulses when a section teleports in ──────────────
const ScanLineSeparator = () => (
  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', margin: 'clamp(2.5rem,8vw,4rem) 0' }}>
    <motion.div
      style={{
        width: 'min(90%, 56rem)',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(210,0,0,0.6) 20%, rgba(255,77,77,0.9) 50%, rgba(210,0,0,0.6) 80%, transparent)',
        position: 'relative',
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* centre dot */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 6, height: 6,
          borderRadius: '50%',
          background: '#ff4d4d',
          boxShadow: '0 0 10px #d20000, 0 0 24px #d20000',
        }}
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.5, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* travelling spark */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%', left: 0,
          transform: 'translateY(-50%)',
          width: 40, height: 2,
          background: 'linear-gradient(90deg, transparent, #ff4d4d)',
          borderRadius: 2,
        }}
        animate={{ x: ['0%', '1300%'] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
      />
    </motion.div>
  </div>
);

const App = () => {
  const [isLanding, setIsLanding] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPageName, setTargetPageName] = useState('');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--mouse-x", e.clientX + "px");
      document.body.style.setProperty("--mouse-y", e.clientY + "px");
    };

    const handleGlobalKey = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleGlobalKey);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleGlobalKey);
    };
  }, []);

  useEffect(() => {
    if (!isLanding) return;

    const handleScroll = () => {
      setIsLanding(false);
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchmove', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [isLanding]);

  // Active section scroll observer
  useEffect(() => {
    if (isLanding) return;

    const sections = ['home', 'about', 'projects', 'events', 'achievements', 'team', 'faq', 'contact'];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        if (sectionId === 'home') {
          if (window.scrollY < 300) {
            setActiveSection('home');
            return;
          }
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.pageYOffset;
            if (scrollPosition >= top) {
              setActiveSection(sectionId);
              return;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [isLanding]);

  const handleInteraction = () => {
    if (isLanding) {
      setIsLanding(false);
      audioFx.playClick();
    }
  };

  const handleToggleAudio = () => {
    const newState = audioFx.toggle();
    setIsAudioActive(newState);
  };

  const handleNavigate = (target, label) => {
    audioFx.playSectionSound(target);
    setIsTransitioning(true);
    setTargetPageName(label || target.toUpperCase());

    setTimeout(() => {
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        const element = document.getElementById(target);
        if (element) {
          const navOffset = 85;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navOffset,
            behavior: 'instant'
          });
        }
      }
      setActiveSection(target);
    }, 150);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <PageTransition isTransitioning={isTransitioning} targetPage={targetPageName} />
      <ParticleBackground isVisible={!isLanding} />

      {!isLanding && (
        <Navbar
          onNavigate={handleNavigate}
          activeSection={activeSection}
          onToggleTerminal={() => setIsTerminalOpen(prev => !prev)}
          isAudioActive={isAudioActive}
          onToggleAudio={handleToggleAudio}
        />
      )}

      <div id="home">
        <Hero isLanding={isLanding} onClick={handleInteraction} />
      </div>

      {!isLanding && (
        <main>
          {/* About Section */}
          <motion.section
            className="section"
            id="about"
            variants={cyberTeleportVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            <h2 className="section-header">ABOUT</h2>
            <p className="section-content">
              Discover endless opportunities to refine your coding prowess,
              collaborate on real-world projects, and learn from industry experts.
              Join our student-led club for enriching workshops, dynamic hackathons,
              and specialized sessions. Unleash your potential, connect with
              like-minded peers, and shape a successful future in technology with us!
            </p>
          </motion.section>

          <ScanLineSeparator />

          {/* Projects / Innovation Lab Section */}
          <motion.section
            variants={cyberTeleportVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            <Projects onSelectProject={(p) => {
              audioFx.playSuccess();
              setSelectedProject(p);
            }} />
          </motion.section>

          <ScanLineSeparator />

          {/* Events Section */}
          <motion.section
            className="section"
            id="events"
            variants={cyberTeleportVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            <h2 className="section-header">EVENTS</h2>
            <p style={{ textAlign: 'center', opacity: 0.7, fontSize: '0.9rem', marginTop: '0.5rem', fontFamily: '"Space Mono", monospace' }}>
              (Click any event card for details)
            </p>
            <motion.div
              className="events-grid"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '2rem'
              }}
            >
              {eventsData.map((event, idx) => (
                <motion.div
                  key={idx}
                  variants={cardItemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="event-card"
                  onClick={() => {
                    audioFx.playClick();
                    setSelectedEvent(event);
                  }}
                  style={{
                    flex: '1 1 300px',
                    maxWidth: '350px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    {event.date && (
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        background: 'rgba(10, 10, 10, 0.85)',
                        border: '1px solid rgba(210, 0, 0, 0.4)',
                        color: '#ff4d4d',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontFamily: '"Space Mono", monospace',
                        backdropFilter: 'blur(4px)'
                      }}>
                        {event.date}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: '#d20000', marginBottom: '0.5rem', fontSize: '1.15rem' }}>{event.title}</h3>
                    <p style={{ fontSize: '0.85rem', opacity: 0.8, textAlign: 'left', margin: 0, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {event.description}
                    </p>
                    <span style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '0.8rem', color: '#ff4d4d', fontFamily: '"Space Mono", monospace' }}>
                      View Details →
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <ScanLineSeparator />

          {/* Hall of Fame / Achievements Section */}
          <motion.section
            variants={cyberTeleportVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            <Achievements />
          </motion.section>

          <ScanLineSeparator />

          {/* Team Section */}
          <motion.div
            variants={cyberTeleportVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
          >
            <Team />
          </motion.div>

          <ScanLineSeparator />

          {/* FAQ / How to Join Section */}
          <motion.section
            variants={cyberTeleportVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            <FAQ />
          </motion.section>

          <ScanLineSeparator />

          {/* Contact Section */}
          <motion.div
            variants={cyberTeleportVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            <ContactUs />
          </motion.div>

          <Footer
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
            onOpenTerms={() => setIsTermsOpen(true)}
          />

          <ScrollToTop />

          {/* Floating Cyber HUD Dock for Terminal & Audio */}
          <CyberHUDDock
            onToggleTerminal={() => setIsTerminalOpen(prev => !prev)}
            isAudioActive={isAudioActive}
            onToggleAudio={handleToggleAudio}
            isTerminalOpen={isTerminalOpen}
          />

          {/* Event Details Modal */}
          {selectedEvent && (
            <EventModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}

          {/* Full Project Deep Dive Modal */}
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}

          {/* Privacy Policy Modal */}
          <PrivacyModal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
          />

          {/* Terms and Conditions Modal */}
          <TermsModal
            isOpen={isTermsOpen}
            onClose={() => setIsTermsOpen(false)}
          />

          {/* Interactive Hacker Terminal */}
          <TerminalDrawer
            isOpen={isTerminalOpen}
            onClose={() => setIsTerminalOpen(false)}
          />
        </main>
      )}
    </div>
  );
};

export default App;
