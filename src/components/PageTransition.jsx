import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ isTransitioning, targetPage }) => {
    // Generate 24 radial hyperspace warp rays radiating from center
    const warpRays = useMemo(() => {
        return Array.from({ length: 28 }).map((_, i) => {
            const angle = (i * 360) / 28;
            const length = 40 + (i % 5) * 12; // variable streak length
            const delay = (i % 4) * 0.02;
            const width = i % 3 === 0 ? 3 : 1.5;
            return { angle, length, delay, width };
        });
    }, []);

    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    className="cyber-teleport-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 99999,
                        pointerEvents: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        background: 'radial-gradient(circle at center, rgba(20, 0, 0, 0.75) 0%, rgba(8, 8, 8, 0.92) 65%, #050505 100%)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)'
                    }}
                >
                    {/* Perspective 3D Cyber Warp Grid (Floor) */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 0.35, scaleY: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '42vh',
                            background: `
                                linear-gradient(rgba(210,0,0,0.2) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(210,0,0,0.2) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                            transformOrigin: 'bottom center',
                            transform: 'perspective(500px) rotateX(65deg)',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                        }}
                    />

                    {/* Perspective 3D Cyber Warp Grid (Ceiling) */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 0.25, scaleY: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '35vh',
                            background: `
                                linear-gradient(rgba(210,0,0,0.18) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(210,0,0,0.18) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                            transformOrigin: 'top center',
                            transform: 'perspective(500px) rotateX(-65deg)',
                            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)'
                        }}
                    />

                    {/* Radial Hyperspace Warp Rays (Shooting outward from center) */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 }}>
                        {warpRays.map((ray, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ scaleY: 0, opacity: 0 }}
                                animate={{
                                    scaleY: [0, 1.8, 3.2],
                                    opacity: [0, 0.9, 0],
                                    y: [0, -120]
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: ray.delay,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: `${ray.width}px`,
                                    height: `${ray.length}vh`,
                                    background: idx % 2 === 0
                                        ? 'linear-gradient(to top, transparent, #ff3333, #ffffff)'
                                        : 'linear-gradient(to top, transparent, #d20000, #ff6666)',
                                    transformOrigin: 'top center',
                                    transform: `rotate(${ray.angle}deg)`,
                                    filter: 'drop-shadow(0 0 6px #ff0000)'
                                }}
                            />
                        ))}
                    </div>

                    {/* Quantum Sonic Arrival Shockwave Ring */}
                    <motion.div
                        initial={{ scale: 0.05, opacity: 0.9 }}
                        animate={{ scale: [0.05, 1.4, 3.2], opacity: [0.9, 0.7, 0] }}
                        transition={{ duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'absolute',
                            width: '260px',
                            height: '260px',
                            borderRadius: '50%',
                            border: '3px solid #ff4d4d',
                            boxShadow: '0 0 45px #d20000, inset 0 0 35px rgba(255, 77, 77, 0.4)',
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Quantum Core Flash Burst */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.6, 0] }}
                        transition={{ duration: 0.35, times: [0, 0.35, 1] }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle at center, rgba(255, 77, 77, 0.35) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Central Holographic Teleport Targeting Reticle */}
                    <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* Rotating Outer Cyber Reticle Ring */}
                        <div style={{ position: 'relative', width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    border: '1.5px dashed rgba(210, 0, 0, 0.65)',
                                    boxShadow: '0 0 20px rgba(210, 0, 0, 0.3)'
                                }}
                            />

                            {/* Counter-rotating Middle Reticle Brackets */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    width: '170px',
                                    height: '170px',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(255, 77, 77, 0.5)',
                                    borderTopColor: '#ff4d4d',
                                    borderBottomColor: '#ff4d4d'
                                }}
                            />

                            {/* Locking Crosshair Corners */}
                            <motion.div
                                initial={{ scale: 1.4, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                style={{
                                    position: 'absolute',
                                    width: '120px',
                                    height: '120px',
                                    border: '2px solid rgba(255, 255, 255, 0.15)',
                                    borderTop: '2px solid #ff4d4d',
                                    borderBottom: '2px solid #ff4d4d'
                                }}
                            />

                            {/* Pulsing Quantum Singularity Core */}
                            <motion.div
                                animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, #ffffff 10%, #ff4d4d 50%, #d20000 100%)',
                                    boxShadow: '0 0 35px #ff2222, 0 0 70px #d20000'
                                }}
                            />
                        </div>

                        {/* Teleport Telemetry HUD Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            style={{
                                marginTop: '1.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.45rem',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                fontFamily: '"Space Mono", monospace',
                                fontSize: '0.78rem',
                                color: '#ff6666',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#ff3333', boxShadow: '0 0 8px #ff3333' }}></span>
                                QUANTUM WARP INITIATED
                            </div>

                            <div style={{
                                fontFamily: '"Bruno Ace", sans-serif',
                                fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
                                color: '#ffffff',
                                letterSpacing: '4px',
                                textShadow: '0 0 25px rgba(210, 0, 0, 0.9), 0 0 50px rgba(255, 50, 50, 0.5)'
                            }}>
                                {targetPage ? targetPage.toUpperCase() : 'TELEPORT'}
                            </div>

                            {/* Animated High-Speed Warp Velocity Progress Bar */}
                            <div style={{
                                width: '220px',
                                height: '3px',
                                background: 'rgba(255, 255, 255, 0.12)',
                                borderRadius: '2px',
                                overflow: 'hidden',
                                marginTop: '0.25rem',
                                position: 'relative'
                            }}>
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                                    style={{
                                        height: '100%',
                                        background: 'linear-gradient(90deg, #d20000, #ff4d4d, #ffffff)',
                                        boxShadow: '0 0 10px #ff3333'
                                    }}
                                />
                            </div>

                            <div style={{
                                fontFamily: '"Space Mono", monospace',
                                fontSize: '0.68rem',
                                color: 'rgba(255, 255, 255, 0.65)',
                                letterSpacing: '2px',
                                marginTop: '0.15rem'
                            }}>
                                VELOCITY: 0.999c // DESTINATION LOCKED
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageTransition;
