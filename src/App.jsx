import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import BugsOverlay from './components/BugsOverlay';
import ScrollToTop from './components/ScrollToTop';
import EventModal from './components/EventModal';

const eventsData = [
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

const App = () => {
  const [isLanding, setIsLanding] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--mouse-x", e.clientX + "px");
      document.body.style.setProperty("--mouse-y", e.clientY + "px");
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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

  const handleInteraction = () => {
    if (isLanding) setIsLanding(false);
  };

  return (
    <div>
      <ParticleBackground isVisible={!isLanding} />
      <BugsOverlay isLanding={isLanding} />
      {!isLanding && <Navbar />}
      <Hero isLanding={isLanding} onClick={handleInteraction} />

      {!isLanding && (
        <>
          <div className="event-banner-section" id="bugx-event">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
              <p style={{ fontFamily: '"Space Mono", monospace', opacity: 0.8, marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>In collaboration with</p>
              <img
                src="/assets/cotd.jpeg"
                alt="COTD"
                style={{ height: '80px', borderRadius: '12px', objectFit: 'contain' }}
              />
            </div>
            <h2 className="section-header" style={{ color: '#d20000', marginBottom: '0' }}>BUG X</h2>
            <p style={{ marginTop: '0', fontSize: '1.2rem', fontFamily: '"Space Mono", monospace' }}>Debugging Grand Prix 2026</p>
            <img
              src="/assets/bug_poster.jpg"
              alt="BugX Event Poster"
              className="event-poster"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/600x800.png?text=Event+Poster";
              }}
            />
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=LSD36rPvekOhA1Bbufv3X9i_OHNY5uZLrvoede0yp5dUNU9KUkpPWFo4UjJKVEI5OEJMU1Q2S0VZUy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button className="submit-btn" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                Click here to register
              </button>
            </a>
          </div>

          <div className="section" id="title-sponsor" style={{ textAlign: 'center', marginTop: '-1rem', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="sub-section-header" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: '"Bruno Ace", sans-serif', color: '#f2f2f2' }}>TITLE SPONSOR</h2>
            <img
              src="/assets/title_sponsor.jpeg"
              alt="Title Sponsor"
              className="event-poster"
              style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/500x250.png?text=Title+Sponsor";
              }}
            />
          </div>

          <div className="section-separator"></div>

          <div className="section" id="about">
            <h2 className="section-header">ABOUT</h2>
            <p className="section-content">
              Discover endless opportunities to refine your coding prowess,
              collaborate on real-world projects, and learn from industry experts.
              Join our student-led club for enriching workshops, dynamic hackathons,
              and specialized sessions. Unleash your potential, connect with
              like-minded peers, and shape a successful future in technology with us!
            </p>
          </div>

          <div className="section" id="events">
            <h2 className="section-header">EVENTS</h2>
            <p style={{ textAlign: 'center', opacity: 0.7, fontSize: '0.9rem', marginTop: '0.5rem', fontFamily: '"Space Mono", monospace' }}>
              (Click any event card for details)
            </p>
            <div className="events-grid" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              {eventsData.map((event, idx) => (
                <div
                  key={idx}
                  className="event-card"
                  onClick={() => setSelectedEvent(event)}
                  style={{
                    flex: '1 1 300px',
                    maxWidth: '350px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
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
                </div>
              ))}
            </div>
          </div>

          <Team />

          <ContactUs />

          <Footer />

          <ScrollToTop />

          {selectedEvent && (
            <EventModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
