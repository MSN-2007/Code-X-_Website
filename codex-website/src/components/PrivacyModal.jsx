import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyModal = ({ isOpen, onClose }) => {
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
                                    PRIVACY POLICY & DATA GOVERNANCE
                                </h3>
                                <p style={{
                                    margin: '0.2rem 0 0 0',
                                    fontSize: '0.75rem',
                                    color: '#ff4d4d',
                                    fontFamily: '"Space Mono", monospace'
                                }}>
                                    // CODE&#123;X&#125; — WOXSEN UNIVERSITY | LAST REVISED: 2026
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
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>1. Introduction</h4>
                                <p style={{ margin: 0 }}>
                                    Code&#123;X&#125; is the premier technical and programming organization at Woxsen University. We are committed to upholding transparency, student data integrity, and strict adherence to modern data privacy principles.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>2. Information We Collect</h4>
                                <p style={{ margin: 0 }}>
                                    When participating in Code&#123;X&#125; hackathons (such as Bug-X, SIH Qualifiers), induction forms, or recruitment drives, we may collect:
                                </p>
                                <ul style={{ paddingLeft: '1.2rem', margin: '0.4rem 0 0 0' }}>
                                    <li>Full name, university roll number, and official student email address.</li>
                                    <li>GitHub profile handles, technical portfolio links, and domain track preferences.</li>
                                    <li>Project submissions, repository contributions, and team rosters.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>3. How We Use Your Data</h4>
                                <p style={{ margin: 0 }}>
                                    All collected information is strictly utilized to:
                                </p>
                                <ul style={{ paddingLeft: '1.2rem', margin: '0.4rem 0 0 0' }}>
                                    <li>Administer hackathon logistics, leaderboards, prize distribution, and certificates.</li>
                                    <li>Evaluate technical skills during recruitment and domain intake cycles.</li>
                                    <li>Send critical event alerts, schedule updates, and workshop materials.</li>
                                    <li>We never sell, rent, or monetize your personal data to external advertisers.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>4. Local Storage & Client Telemetry</h4>
                                <p style={{ margin: 0 }}>
                                    This website uses client-side LocalStorage exclusively for UI preferences (such as audio FX toggle state and terminal command history). No cross-site tracking cookies are stored.
                                </p>
                            </div>

                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 0.4rem 0', fontSize: '1rem' }}>5. Contact Information</h4>
                                <p style={{ margin: 0 }}>
                                    For any data inquiries or deletion requests, please contact our administrative desk at{' '}
                                    <a
                                        href="mailto:codex@woxsen.edu.in"
                                        style={{ color: '#ff4d4d', textDecoration: 'underline' }}
                                    >
                                        codex@woxsen.edu.in
                                    </a>.
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
                                Acknowledge & Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PrivacyModal;
