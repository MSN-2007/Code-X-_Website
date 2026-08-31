import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const domainTracks = [
    { title: "AI & Machine Learning", icon: "🤖", desc: "LLMs, Computer Vision, Autonomous Agents & Deep Learning." },
    { title: "Web & Distributed Systems", icon: "🌐", desc: "Modern Fullstack, Realtime WebSockets, APIs & Cloud Microservices." },
    { title: "Cyber Security & CTF", icon: "🛡️", desc: "Binary Exploitation, Web Penetration Testing, Cryptography & Forensics." },
    { title: "Competitive Programming", icon: "⚡", desc: "Advanced Algorithms, Graph Theory, DP & ICPC/Codeforces problem solving." },
    { title: "UI/UX & Creative Tech", icon: "🎨", desc: "High-fidelity Interfaces, Framer Motion, 3D Web & Brand Systems." }
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '3rem'
            }}>
                {domainTracks.map((track, i) => (
                    <div
                        key={i}
                        style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: '12px',
                            padding: '1.2rem',
                            textAlign: 'left',
                            transition: 'all 0.3s ease'
                        }}
                        className="track-card"
                    >
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{track.icon}</div>
                        <h4 style={{
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            marginBottom: '0.35rem',
                            fontFamily: '"Space Grotesk", sans-serif'
                        }}>
                            {track.title}
                        </h4>
                        <p style={{
                            fontSize: '0.8rem',
                            color: '#888',
                            lineHeight: 1.4,
                            margin: 0,
                            textAlign: 'left'
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
