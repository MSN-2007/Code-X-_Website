import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            aria-label="Scroll back to top of page"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 999,
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: 'rgba(10, 10, 10, 0.85)',
                border: '1.5px solid #d20000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(210, 0, 0, 0.4)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
                fontSize: '1.2rem'
            }}
        >
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
    );
};

export default ScrollToTop;
