import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioFx } from '../utils/audioFx';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout = null;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setScrollProgress(progress);
            setIsVisible(scrollTop > 350);
            setIsScrolling(true);

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 300);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, []);

    const scrollToTop = () => {
        audioFx.playClick();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Calculate circumference for 48px circle with r=20
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <>
            {/* Top Cyber Scroll Progress Bar */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '3px',
                    width: `${scrollProgress}%`,
                    backgroundColor: '#d20000',
                    boxShadow: '0 0 10px #d20000, 0 0 5px #ff4d4d',
                    zIndex: 10000,
                    pointerEvents: 'none',
                    transition: 'width 0.1s linear'
                }}
            />

            {/* Floating Cyber Scroll-To-Top Button with Animated Progress Ring */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        type="button"
                        onClick={scrollToTop}
                        className="scroll-to-top-btn"
                        aria-label="Scroll back to top of page"
                        initial={{ opacity: 0, scale: 0.5, y: 30 }}
                        animate={{
                            opacity: 1,
                            scale: isScrolling ? 1.08 : 1,
                            y: 0,
                            boxShadow: isScrolling
                                ? '0 0 25px rgba(210, 0, 0, 0.8), 0 0 10px rgba(255, 77, 77, 0.6)'
                                : '0 0 15px rgba(210, 0, 0, 0.4)'
                        }}
                        exit={{ opacity: 0, scale: 0.5, y: 30 }}
                        whileHover={{ scale: 1.15, boxShadow: '0 0 25px rgba(210, 0, 0, 0.9)' }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        style={{
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            zIndex: 999,
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(10, 10, 10, 0.9)',
                            border: '1.5px solid rgba(210, 0, 0, 0.5)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(8px)',
                            padding: 0,
                            overflow: 'visible'
                        }}
                    >
                        {/* SVG Progress Ring */}
                        <svg
                            width="48"
                            height="48"
                            style={{
                                position: 'absolute',
                                top: '-1.5px',
                                left: '-1.5px',
                                transform: 'rotate(-90deg)',
                                pointerEvents: 'none'
                            }}
                        >
                            <circle
                                cx="24"
                                cy="24"
                                r={radius}
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="2.5"
                                fill="transparent"
                            />
                            <motion.circle
                                cx="24"
                                cy="24"
                                r={radius}
                                stroke="#d20000"
                                strokeWidth="2.5"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                fill="transparent"
                                style={{
                                    transition: 'stroke-dashoffset 0.15s ease-out'
                                }}
                            />
                        </svg>

                        {/* Animated Chevron Arrow */}
                        <motion.i
                            className="fa fa-chevron-up"
                            aria-hidden="true"
                            animate={isScrolling ? { y: [-2, 2, -2] } : { y: 0 }}
                            transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                            style={{
                                fontSize: '1.15rem',
                                color: '#ffffff',
                                zIndex: 1
                            }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollToTop;
