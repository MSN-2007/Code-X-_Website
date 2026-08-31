import React from 'react';
import { motion } from 'framer-motion';

const NotFoundPage = ({ onReturnHome, onOpenTerminal }) => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#070707',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(210, 0, 0, 0.15) 0%, rgba(7, 7, 7, 0.98) 75%)',
            color: '#ffffff',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: '"Space Grotesk", sans-serif',
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                    maxWidth: '680px',
                    width: '100%',
                    backgroundColor: 'rgba(15, 15, 15, 0.85)',
                    border: '1px solid rgba(210, 0, 0, 0.45)',
                    borderRadius: '16px',
                    padding: '3rem 2rem',
                    boxShadow: '0 0 50px rgba(210, 0, 0, 0.3)',
                    backdropFilter: 'blur(16px)'
                }}
            >
                {/* 404 Cyber Glitch Code */}
                <div style={{
                    fontFamily: '"Bruno Ace", sans-serif',
                    fontSize: '6rem',
                    fontWeight: 900,
                    color: '#ff3333',
                    lineHeight: 1,
                    textShadow: '0 0 30px rgba(210, 0, 0, 0.7), 0 0 60px rgba(210, 0, 0, 0.3)',
                    marginBottom: '1rem'
                }}>
                    404
                </div>

                <div style={{
                    display: 'inline-block',
                    padding: '0.35rem 0.85rem',
                    backgroundColor: 'rgba(210, 0, 0, 0.15)',
                    border: '1px solid rgba(210, 0, 0, 0.35)',
                    borderRadius: '6px',
                    color: '#ff4d4d',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.85rem',
                    letterSpacing: '1px',
                    marginBottom: '1.5rem'
                }}>
                    // ERROR: QUANTUM_ROUTE_NOT_FOUND
                </div>

                <h2 style={{
                    color: '#ffffff',
                    fontSize: '1.6rem',
                    marginBottom: '0.75rem',
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700
                }}>
                    Lost in Cyberspace?
                </h2>

                <p style={{
                    color: '#a0a0a0',
                    maxWidth: '480px',
                    margin: '0 auto 2rem auto',
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                }}>
                    The grid address you requested does not exist in the Code&#123;X&#125; server matrix or has been de-allocated.
                </p>

                {/* Actions */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <button
                        onClick={onReturnHome ? onReturnHome : () => window.location.href = '/'}
                        style={{
                            background: '#d20000',
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.8rem 1.8rem',
                            borderRadius: '8px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            boxShadow: '0 0 20px rgba(210,0,0,0.5)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Return to Main Base
                    </button>

                    {onOpenTerminal && (
                        <button
                            onClick={onOpenTerminal}
                            style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                color: '#ff4d4d',
                                border: '1px solid rgba(210, 0, 0, 0.35)',
                                padding: '0.8rem 1.6rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontFamily: '"Space Mono", monospace',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            &gt;_ Launch Terminal
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
