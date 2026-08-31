import React from 'react';
import { motion } from 'framer-motion';

const achievementsList = [
    {
        title: "Smart India Hackathon Finalists",
        year: "2023 & 2025",
        badge: "National Finalist",
        icon: "🏆",
        description: "Over 500+ participants competed internally, with top Code{X} squads advancing to the National Grand Finale in AI/ML, HealthTech, and Automation tracks."
    },
    {
        title: "Inter-College CTF Champions",
        year: "2024 - 2025",
        badge: "1st Place CyberSec",
        icon: "🛡️",
        description: "Code{X} offensive & defensive security squads dominated regional capture-the-flag hackathons, exploiting vulnerabilities in cryptography, reverse engineering, and web binaries."
    },
    {
        title: "Woxsen Premier Tech Society Award",
        year: "2024 - 2026",
        badge: "Excellence Award",
        icon: "🎖️",
        description: "Recognized as the highest-impact student-run technical society at Woxsen University, organizing induction bootcamps, masterclasses, and flagship competitions like Bug-X."
    },
    {
        title: "50,000+ Lines of Open Source Code",
        year: "Global Repos",
        badge: "Open Source Impact",
        icon: "⚡",
        description: "Active repositories maintaining developer tooling, algorithmic sandboxes, and AI assistants with hundreds of commits from collegiate contributors."
    }
];

const Achievements = () => {
    return (
        <div className="section" id="achievements">
            <h2 className="section-header">HALL OF FAME</h2>
            <p style={{
                textAlign: 'center',
                opacity: 0.8,
                fontSize: '1rem',
                marginTop: '0.5rem',
                fontFamily: '"Space Mono", monospace',
                maxWidth: '60ch',
                margin: '0.5rem auto 2.5rem auto'
            }}>
                // Celebrating national hackathon podiums, ethical hacking victories, and collegiate engineering milestones.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                gap: '1.75rem'
            }}>
                {achievementsList.map((ach, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '16px',
                            padding: '1.75rem',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
                            transition: 'all 0.3s ease'
                        }}
                        className="achievement-card"
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1rem'
                        }}>
                            <span style={{ fontSize: '2rem' }}>{ach.icon}</span>
                            <span style={{
                                backgroundColor: 'rgba(210, 0, 0, 0.15)',
                                color: '#ff4d4d',
                                border: '1px solid rgba(210, 0, 0, 0.35)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                fontSize: '0.72rem',
                                fontFamily: '"Space Mono", monospace',
                                textTransform: 'uppercase'
                            }}>
                                {ach.badge}
                            </span>
                        </div>

                        <h3 style={{
                            color: '#ffffff',
                            fontSize: '1.2rem',
                            marginBottom: '0.35rem',
                            fontFamily: '"Space Grotesk", sans-serif'
                        }}>
                            {ach.title}
                        </h3>

                        <div style={{
                            color: '#d20000',
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '0.8rem',
                            marginBottom: '0.8rem'
                        }}>
                            {ach.year}
                        </div>

                        <p style={{
                            fontSize: '0.88rem',
                            color: '#a0a0a0',
                            lineHeight: 1.6,
                            textAlign: 'left',
                            margin: 0,
                            fontFamily: '"Space Grotesk", sans-serif'
                        }}>
                            {ach.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
