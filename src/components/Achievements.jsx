import React from 'react';
import { motion } from 'framer-motion';

const achievementsList = [
    {
        title: "Smart India Hackathon Finalists",
        year: "2023 & 2025",
        badge: "National Finalist",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9H29V19C29 24 25 28 20 28C15 28 11 24 11 19V9Z" stroke="#ff3333" strokeWidth="1.8" fill="rgba(210,0,0,0.12)" strokeLinejoin="round" />
                <path d="M11 12H6C4.89543 12 4 12.8954 4 14V16C4 18.5 6 21 8.5 21H11" stroke="#ff3333" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M29 12H34C35.1046 12 36 12.8954 36 14V16C36 18.5 34 21 31.5 21H29" stroke="#ff3333" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 28V33" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14 33H26" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <circle cx="20" cy="18" r="3" fill="#ffffff" />
                <path d="M16 8L20 4L24 8" stroke="#ff4d4d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        description: "Over 500+ participants competed internally, with top Code{X} squads advancing to the National Grand Finale in AI/ML, HealthTech, and Automation tracks."
    },
    {
        title: "Inter-College CTF Champions",
        year: "2024 - 2025",
        badge: "1st Place CyberSec",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L7 9.5V19C7 27 12.5 34.5 20 36.5C27.5 34.5 33 27 33 19V9.5L20 4Z" stroke="#ff3333" strokeWidth="1.8" fill="rgba(210,0,0,0.12)" strokeLinejoin="round" />
                <circle cx="20" cy="18" r="6" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="20" cy="18" r="2.5" fill="#ff3333" />
                <line x1="20" y1="9" x2="20" y2="12" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="24" x2="20" y2="27" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="11" y1="18" x2="14" y2="18" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="18" x2="29" y2="18" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        description: "Code{X} offensive & defensive security squads dominated regional capture-the-flag hackathons, exploiting vulnerabilities in cryptography, reverse engineering, and web binaries."
    },
    {
        title: "Woxsen Premier Programming Club Award",
        year: "2024 - 2026",
        badge: "Excellence Award",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="16" r="11" stroke="#ff3333" strokeWidth="1.8" fill="rgba(210,0,0,0.12)" />
                <path d="M20 9L21.8 13.5H26.5L22.7 16.3L24.1 21L20 18.2L15.9 21L17.3 16.3L13.5 13.5H18.2L20 9Z" fill="#ffffff" />
                <path d="M15 26L12 36L20 32L28 36L25 26" stroke="#ff3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(210,0,0,0.08)" />
            </svg>
        ),
        description: "Recognized as the highest-impact student-run programming club at Woxsen University, organizing induction bootcamps, masterclasses, and flagship competitions like Bug-X."
    },
    {
        title: "50,000+ Lines of Open Source Code",
        year: "Global Repos",
        badge: "Open Source Impact",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4L11 21H20L18 36L29 19H20L22 4Z" stroke="#ff3333" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(210,0,0,0.15)" />
                <circle cx="11" cy="21" r="2" fill="#ffffff" />
                <circle cx="29" cy="19" r="2" fill="#ffffff" />
                <circle cx="22" cy="4" r="2" fill="#ff4d4d" />
                <circle cx="18" cy="36" r="2" fill="#ff4d4d" />
            </svg>
        ),
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
                            marginBottom: '1.2rem'
                        }}>
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '12px',
                                background: 'rgba(210, 0, 0, 0.08)',
                                border: '1px solid rgba(210, 0, 0, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 15px rgba(210, 0, 0, 0.15)'
                            }}>
                                {ach.icon}
                            </div>
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
