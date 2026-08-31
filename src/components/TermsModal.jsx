import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.82)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 3500,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.94, y: 25 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 25 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            width: '100%',
                            maxWidth: '720px',
                            maxHeight: '85vh',
                            backgroundColor: '#0d0d0d',
                            border: '1px solid rgba(210, 0, 0, 0.4)',
                            borderRadius: '16px',
                            boxShadow: '0 0 35px rgba(210, 0, 0, 0.25)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            fontFamily: '"Space Grotesk", sans-serif'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.25rem 1.5rem',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'rgba(20, 20, 20, 0.7)'
                        }}>
                            <div>
                                <h3 style={{
                                    margin: 0,
                                    color: '#ffffff',
                                    fontSize: '1.25rem',
                                    fontFamily: '"Space Grotesk", sans-serif',
                                    fontWeight: 700
                                }}>
                                    TERMS & CONDITIONS OF PARTICIPATION
                                </h3>
                                <p style={{
                                    margin: '0.2rem 0 0 0',
                                    fontSize: '0.75rem',
                                    color: '#ff4d4d',
                                    fontFamily: '"Space Mono", monospace'
                                }}>
                                    // CODE&#123;X&#125; — WOXSEN UNIVERSITY | COMMUNITY CHARTER 2026
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#888',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    padding: '0.2rem 0.5rem'
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Content Body */}
                        <div style={{
                            padding: '1.5rem',
                            overflowY: 'auto',
                            color: '#c0c0c0',
                            fontSize: '0.9rem',
                            lineHeight: 1.65,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem'
                        }}>
                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>1. Hacker Community Code of Conduct</h4>
                                <p style={{ margin: 0 }}>
                                    Code&#123;X&#125; fosters a welcoming, inclusive, and harassment-free environment for everyone, regardless of gender, sexual orientation, disability, physical appearance, or technical skill level. Dishonest collaboration, plagiarism, or malicious exploitation during hackathons or competitions will result in immediate disqualification.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>2. Hackathons & Competitions (Bug-X, SIH)</h4>
                                <p style={{ margin: 0 }}>
                                    Participants in Code&#123;X&#125; events agree to adhere to all tournament timelines, problem statement guidelines, and judge deliberations. Decisions made by the official evaluation panel and club leadership are final and binding.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>3. Open Source Intellectual Property</h4>
                                <p style={{ margin: 0 }}>
                                    Projects developed under the Code&#123;X&#125; Innovation Lab (such as JARVIS AI, AlgoArena, CyberSentinel) are licensed under standard open-source licenses (MIT/Apache 2.0). Contributors retain attribution for their original commits while granting the community rights to maintain and distribute the codebase.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>4. Cyber Security & CTF Ethics</h4>
                                <p style={{ margin: 0 }}>
                                    Any cybersecurity, penetration testing, or reverse engineering tools provided or taught within Code&#123;X&#125; workshops are strictly for educational and defensive purposes on authorized target sandboxes. Unauthorized attacks against university infrastructure or external networks are strictly prohibited.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>5. Revisions</h4>
                                <p style={{ margin: 0 }}>
                                    Code&#123;X&#125; leadership reserves the right to update these terms to reflect evolving university policies and international open-source community standards.
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            background: 'rgba(15, 15, 15, 0.9)'
                        }}>
                            <button
                                onClick={onClose}
                                style={{
                                    background: '#d20000',
                                    border: 'none',
                                    color: '#ffffff',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.88rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Accept & Continue
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TermsModal;
