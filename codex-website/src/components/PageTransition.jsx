import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ isTransitioning, targetPage }) => {
    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    className="cyber-page-transition"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 9999,
                        pointerEvents: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {/* Top and Bottom Cyber Shutters */}
                    <motion.div
                        className="cyber-shutter-top"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '50.5%',
                            backgroundColor: '#0a0a0a',
                            borderBottom: '2px solid #d20000',
                            transformOrigin: 'top',
                            boxShadow: '0 0 30px rgba(210, 0, 0, 0.4)'
                        }}
                    />
                    <motion.div
                        className="cyber-shutter-bottom"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '50.5%',
                            backgroundColor: '#0a0a0a',
                            borderTop: '2px solid #d20000',
                            transformOrigin: 'bottom',
                            boxShadow: '0 0 30px rgba(210, 0, 0, 0.4)'
                        }}
                    />

                    {/* Laser Scanline Beam */}
                    <motion.div
                        initial={{ x: '-100vw', opacity: 0 }}
                        animate={{ x: '100vw', opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, #ff3333, #ffffff, #ff3333, transparent)',
                            boxShadow: '0 0 20px #ff0000, 0 0 40px #d20000',
                            zIndex: 10001,
                            transform: 'translateY(-50%)'
                        }}
                    />

                    {/* Cyber Transition Branding Tag */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'relative',
                            zIndex: 10002,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <div style={{
                            fontFamily: '"Bruno Ace", sans-serif',
                            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                            color: '#ffffff',
                            letterSpacing: '2px',
                            textShadow: '0 0 15px rgba(210,0,0,0.8)'
                        }}>
                            Code<span style={{ color: '#d20000' }}>{'{X}'}</span>
                        </div>
                        {targetPage && (
                            <div style={{
                                fontFamily: '"Space Mono", monospace',
                                fontSize: '0.85rem',
                                color: '#d20000',
                                textTransform: 'uppercase',
                                letterSpacing: '4px',
                                background: 'rgba(210, 0, 0, 0.1)',
                                padding: '0.2rem 0.8rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(210,0,0,0.3)'
                            }}>
                                // NAVIGATING: {targetPage}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageTransition;
