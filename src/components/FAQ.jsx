import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const domainTracks = [
    {
        title: "AI & Machine Learning",
        tag: "NEURAL_CORE",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16" stroke="rgba(210,0,0,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M18 6C13.5 6 9 9.5 9 15C9 19 12 21.5 13.5 24C14.5 25.5 15 27 15 30H21C21 27 21.5 25.5 22.5 24C24 21.5 27 19 27 15C27 9.5 22.5 6 18 6Z" stroke="#ff3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="rgba(210,0,0,0.1)" />
                <circle cx="18" cy="14" r="2.5" fill="#ffffff" />
                <circle cx="13" cy="18" r="1.5" fill="#ff4d4d" />
                <circle cx="23" cy="18" r="1.5" fill="#ff4d4d" />
                <line x1="18" y1="14" x2="13" y2="18" stroke="#ff4d4d" strokeWidth="1.2" />
                <line x1="18" y1="14" x2="23" y2="18" stroke="#ff4d4d" strokeWidth="1.2" />
                <line x1="15" y1="27" x2="21" y2="27" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        desc: "Autonomous LLMs, Real-time Vision, Quantized Edge Models & Deep Learning."
    },
    {
        title: "Web & Distributed Systems",
        tag: "SYSTEM_LATTICE",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="6" width="26" height="7" rx="3" stroke="#ff3333" strokeWidth="1.6" fill="rgba(210,0,0,0.1)" />
                <rect x="5" y="17" width="26" height="7" rx="3" stroke="#ff3333" strokeWidth="1.6" fill="rgba(210,0,0,0.1)" />
                <rect x="5" y="28" width="26" height="5" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                <circle cx="9" cy="9.5" r="1.5" fill="#ffffff" />
                <circle cx="13" cy="9.5" r="1.5" fill="#ff4d4d" />
                <circle cx="9" cy="20.5" r="1.5" fill="#ffffff" />
                <circle cx="13" cy="20.5" r="1.5" fill="#ff4d4d" />
                <path d="M25 9.5H27" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M23 20.5H27" stroke="#ff4d4d" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        desc: "Ultra-fast Reactive SPAs, WebSocket Engines, Cloud Microservices & Scalable APIs."
    },
    {
        title: "Cyber Security & CTF",
        tag: "RECON_MATRIX",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3L6 8V17C6 24.5 11.2 31.4 18 33C24.8 31.4 30 24.5 30 17V8L18 3Z" stroke="#ff3333" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(210,0,0,0.1)" />
                <rect x="14" y="16" width="8" height="7" rx="2" stroke="#ffffff" strokeWidth="1.5" />
                <path d="M15.5 16V13.5C15.5 12.1 16.6 11 18 11C19.4 11 20.5 12.1 20.5 13.5V16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="18" cy="19.5" r="1" fill="#ff3333" />
            </svg>
        ),
        desc: "Binary Exploitation, Memory Corruption, Web Pentesting & Defensive Forensics."
    },
    {
        title: "Competitive Programming",
        tag: "ALGO_DUEL",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11L4 18L11 25" stroke="#ff3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 11L32 18L25 25" stroke="#ff3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 7L16 29" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="18" r="2" fill="#ff4d4d" />
            </svg>
        ),
        desc: "Advanced Graph Theory, Dynamic Programming, ICPC & Lightning Code Battles."
    },
    {
        title: "UI/UX & Creative Tech",
        tag: "CYBER_DESIGN",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4L31 18L18 32L5 18L18 4Z" stroke="#ff3333" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(210,0,0,0.08)" />
                <circle cx="18" cy="18" r="4" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="18" cy="4" r="2" fill="#ff4d4d" />
                <circle cx="31" cy="18" r="2" fill="#ff4d4d" />
                <circle cx="18" cy="32" r="2" fill="#ff4d4d" />
                <circle cx="5" cy="18" r="2" fill="#ff4d4d" />
            </svg>
        ),
        desc: "Futuristic Design Systems, Framer Motion, 3D Web & Interactive Cyber Visuals."
    }
];

const faqs = [
    {
        q: "Who is eligible to apply for Code{X}?",
        a: "Recruitment is open to all passionate students across all years and branches at Woxsen University. Whether you are a first-year fresher eager to learn or an experienced coder, we look for curiosity, grit, and problem-solving drive."
    },
    {
        q: "What is the recruitment process?",
        a: "Recruitments typically run in two phases: 1) Online Application with portfolio/GitHub submission or a mini problem statement, followed by 2) A friendly technical discussion and behavioral round with core leads to understand your interests."
    },
    {
        q: "Do I need prior advanced coding experience to join?",
        a: "Not at all! While having coding experience is helpful, we value passion, consistency, and curiosity above all. We actively organize induction bootcamps, workshops, and mentorship tracks to help you ramp up quickly."
    },
    {
        q: "What benefits do members get by joining Code{X}?",
        a: "Members receive hands-on experience building real-world projects, direct mentorship from senior tech leads, access to sponsored national hackathons, exclusive workshops, and networking with alumni and industry leaders."
    },
    {
        q: "How can I prepare for the upcoming recruitment drive?",
        a: "Start by picking a domain track (AI/ML, Web, CyberSec, CP, or Design) that excites you. Build a mini project, brush up on foundational concepts, and follow our official Instagram & GitHub for recruitment announcements!"
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="section" id="faq">
            <h2 className="section-header">JOIN THE SQUAD</h2>
            <p style={{
                textAlign: 'center',
                opacity: 0.8,
                fontSize: '1rem',
                marginTop: '0.5rem',
                fontFamily: '"Space Mono", monospace',
                maxWidth: '60ch',
                margin: '0.5rem auto 2.5rem auto'
            }}>
                // Explore our core domain tracks and find answers on how to become a part of Code&#123;X&#125;.
            </p>

            {/* Domain Tracks Bar */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '1.25rem',
                marginBottom: '3rem'
            }}>
                {domainTracks.map((track, i) => (
                    <div
                        key={i}
                        style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '14px',
                            padding: '1.4rem',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className="track-card"
                    >
                        <div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '10px',
                                    background: 'rgba(210, 0, 0, 0.08)',
                                    border: '1px solid rgba(210, 0, 0, 0.25)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {track.icon}
                                </div>
                                <span style={{
                                    fontFamily: '"Space Mono", monospace',
                                    fontSize: '0.65rem',
                                    color: '#ff4d4d',
                                    letterSpacing: '1px',
                                    background: 'rgba(210,0,0,0.1)',
                                    padding: '0.2rem 0.45rem',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(210,0,0,0.2)'
                                }}>
                                    {track.tag}
                                </span>
                            </div>

                            <h4 style={{
                                color: '#ffffff',
                                fontSize: '1.02rem',
                                marginBottom: '0.45rem',
                                fontFamily: '"Space Grotesk", sans-serif',
                                fontWeight: 700
                            }}>
                                {track.title}
                            </h4>
                        </div>

                        <p style={{
                            fontSize: '0.82rem',
                            color: '#999',
                            lineHeight: 1.5,
                            margin: '0.5rem 0 0 0',
                            textAlign: 'left',
                            fontFamily: '"Space Grotesk", sans-serif'
                        }}>
                            {track.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Accordion FAQs */}
            <div style={{
                maxWidth: '850px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                {faqs.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={idx}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: `1px solid ${isOpen ? 'rgba(210, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'border-color 0.3s ease'
                            }}
                        >
                            <button
                                onClick={() => toggleFaq(idx)}
                                style={{
                                    width: '100%',
                                    padding: '1.25rem 1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#ffffff',
                                    fontSize: '1rem',
                                    fontFamily: '"Space Grotesk", sans-serif',
                                    fontWeight: 600,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    gap: '1rem'
                                }}
                            >
                                <span>{item.q}</span>
                                <span style={{
                                    color: '#d20000',
                                    fontSize: '1.2rem',
                                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                                    transition: 'transform 0.25s ease',
                                    display: 'inline-block'
                                }}>
                                    +
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                                    >
                                        <div style={{
                                            padding: '0 1.5rem 1.25rem 1.5rem',
                                            color: '#b0b0b0',
                                            fontSize: '0.92rem',
                                            lineHeight: 1.6,
                                            fontFamily: '"Space Grotesk", sans-serif'
                                        }}>
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
