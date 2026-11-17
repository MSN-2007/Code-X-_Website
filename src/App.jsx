import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    title: "Smart India Hackathon 2026",
    description: "Official internal registration and screening round for Smart India Hackathon 2026 at Woxsen University. Teams of 6 tackled complex national problem statements across AI/ML, Smart Automation, and CleanTech to represent Woxsen.",
    date: "Concluded 2026",
    participants: "Teams of 6 (All Branches)",
    image: "/assets/events/sih2026.jpg"
  },
  {
    title: "Developer Bootcamp 2026",
    description: "An intensive multi-track developer bootcamp curated and led by Code{X} Core Members. Featuring hands-on tracks in Full-Stack Web Development, Cyber Security & CTFs, AI/ML, and Open Source contribution workflows.",
    date: "Coming Soon 2026",
    participants: "Registrations Opening Soon",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    isComingSoon: true
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

// Clean, zero-latency fade for scrolling sections (smooth 60fps, no lag)
const sectionMotionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Sleek Cyber Separator Line
const CyberSeparator = () => (
  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', margin: 'clamp(2.5rem, 6vw, 3.5rem) 0' }}>
    <div
      style={{
        width: 'min(90%, 56rem)',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(210,0,0,0.5) 20%, rgba(255,77,77,0.85) 50%, rgba(210,0,0,0.5) 80%, transparent)',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#ff4d4d',
          boxShadow: '0 0 10px #d20000, 0 0 20px rgba(210,0,0,0.4)',
        }}
      />
    </div>
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

  // Quantum Warp Teleport Navigation
  const handleNavigate = (target, label) => {
    // Play sci-fi audio if audio is turned on
    if (audioFx.isEnabled()) {
      audioFx.playTeleportWarp();
      setTimeout(() => audioFx.playSectionSound(target), 280);
    }

    // Trigger full-screen quantum teleportation warp overlay
    setIsTransitioning(true);
    setTargetPageName(label || target.toUpperCase());

    // At 280ms (peak warp velocity): execute the spatial jump
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

          // Trigger destination target lock pulse
          element.classList.remove('teleport-arrival-active');
          void element.offsetWidth; // Force reflow
          element.classList.add('teleport-arrival-active');
          setTimeout(() => {
            element.classList.remove('teleport-arrival-active');
          }, 1200);
        }
      }
      setActiveSection(target);
    }, 280);

    // At 640ms: warp shockwave finishes, reveal crystal clear destination
    setTimeout(() => {
      setIsTransitioning(false);
    }, 640);
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
            variants={sectionMotionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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

          <CyberSeparator />

          {/* Projects / Innovation Lab Section */}
          <motion.section
            id="projects"
            variants={sectionMotionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <Projects onSelectProject={(p) => {
              audioFx.playSuccess();
              setSelectedProject(p);
            }} />
          </motion.section>

          <CyberSeparator />

          {/* Events Section */}
          <motion.section
            className="section"
            id="events"
            variants={sectionMotionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
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
              viewport={{ once: true, amount: 0.05 }}
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
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: event.image.includes('sih2026') ? 'top center' : 'center',
                        transition: 'transform 0.5s ease',
                        filter: event.isComingSoon ? 'brightness(0.7) contrast(1.1)' : undefined
                      }}
                    />
                    {event.registrationOpen && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: '#22c55e',
                        color: '#ffffff',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontFamily: '"Space Mono", monospace',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)',
                        textTransform: 'uppercase'
                      }}>
                        Open Now
                      </div>
                    )}
                    {event.isComingSoon && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: '#d20000',
                        color: '#ffffff',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontFamily: '"Space Mono", monospace',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        boxShadow: '0 0 12px rgba(210,0,0,0.6)',
                        textTransform: 'uppercase'
                      }}>
                        Coming Soon
                      </div>
                    )}
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

          <CyberSeparator />

          {/* Hall of Fame / Achievements Section */}
          <motion.section
            id="achievements"
            variants={sectionMotionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <Achievements />
          </motion.section>

          <CyberSeparator />

          {/* Team Section */}
          <motion.div
            id="team"
            variants={sectionMotionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <Team />
          </motion.div>

          <CyberSeparator />

          {/* FAQ / How to Join Section */}
          <motion.section
            id="faq"
            variants={sectionMotionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <FAQ />
          </motion.section>

          <CyberSeparator />

          {/* Contact Section */}
          <motion.div
            id="contact"
            variants={sectionMotionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
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
