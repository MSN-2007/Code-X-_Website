import React, { useEffect } from 'react';

const EventModal = ({ event, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!event) return null;

    return (
        <div
            className="event-modal-backdrop"
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(8px)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                animation: 'fadeIn 0.25s ease-out'
            }}
        >
            <div
                className="event-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundColor: '#0f0f0f',
                    border: '1px solid rgba(210, 0, 0, 0.4)',
                    borderRadius: '16px',
                    maxWidth: '650px',
                    width: '100%',
                    overflow: 'hidden',
                    boxShadow: '0 0 30px rgba(210, 0, 0, 0.2)',
                    position: 'relative',
                    color: '#f2f2f2'
                }}
            >
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(0,0,0,0.6)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        fontSize: '1.1rem',
                        transition: 'all 0.2s ease'
                    }}
                >
                    ✕
                </button>

                <div style={{ maxHeight: '300px', width: '100%', overflow: 'hidden', backgroundColor: '#050505' }}>
                    <img
                        src={event.image}
                        alt={event.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ padding: '1.75rem' }}>
                    {event.date && (
                        <span style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(210, 0, 0, 0.15)',
                            color: '#d20000',
                            border: '1px solid rgba(210, 0, 0, 0.3)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontFamily: '"Space Mono", monospace',
                            marginBottom: '0.75rem',
                            textTransform: 'uppercase'
                        }}>
                            {event.date}
                        </span>
                    )}

                    <h3 style={{
                        color: '#ffffff',
                        fontSize: '1.4rem',
                        marginBottom: '0.75rem',
                        fontFamily: '"Doto", sans-serif',
                        fontWeight: '700'
                    }}>
                        {event.title}
                    </h3>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#b0b0b0',
                        marginBottom: '1.5rem',
                        fontFamily: '"Space Grotesk", sans-serif'
                    }}>
                        {event.description}
                    </p>

                    {event.participants && (
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            fontSize: '0.9rem',
                            color: '#888',
                            fontFamily: '"Space Mono", monospace'
                        }}>
                            <span>👥 Attendance: <strong style={{ color: '#fff' }}>{event.participants}</strong></span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventModal;
