import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import BugsOverlay from './components/BugsOverlay';

const App = () => {

  const [isLanding, setIsLanding] = React.useState(true);

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
            <h2 className="section-header" style={{ color: '#d20000', marginBottom: '0' }}>BUG X</h2>
            <p style={{ marginTop: '0', fontSize: '1.2rem', fontFamily: '"Space Mono", monospace' }}>Debugging Grand Prix 2026</p>
            <img
              src="/assets/bug_poster.jpg"
              alt="BugX Event Poster"
              className="event-poster"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/600x800.png?text=Event+Poster+Missing+(Add+public/assets/bug_poster.jpg)";
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
            <div className="events-grid" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {[
                {
                  title: "Freshman induction by GeeksForGeeks 2023",
                  description: "600+ Participants. Speaker from GfG | 15th Sept",
                  image: "/assets/events/1event.png"
                },
                {
                  title: "Python Skill Development Program 2023",
                  description: "120+ Particpants. Weekly Recurring |14th Sept 2023g",
                  image: "/assets/events/2event.png"
                },
                {
                  title: "SIH Internal Hackathon 2023",
                  description: "500+ Participants. Conducting the hackathon and mentoring teams | 18th-25th Sept 2023",
                  image: "/assets/events/3event.png"
                },
                {
                  title: "Educational Bootcamp By Core members",
                  description: "150+ participants. Various Domains Included | Sept 15, 16, 17 2025",
                  image: "/assets/events/4event.png"
                },
                {
                  title: "SIH Internal Hackathon 2025",
                  description: "500+ participants. Conducting the hackathon and mentoring teams | 18th Sept",
                  image: "/assets/events/5event.jpg"
                }
              ].map((event, idx) => (
                <div key={idx} className="event-card" style={{
                  flex: '1 1 300px',
                  maxWidth: '350px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: '#d20000', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{event.title}</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, textAlign: 'left', margin: 0 }}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Team />


          <ContactUs />

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
