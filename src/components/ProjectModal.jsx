import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
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

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="project-modal-backdrop"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.88)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 2500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    overflowY: 'auto'
                }}
            >
                <motion.div
                    className="project-modal-content"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.9, y: 25 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 25 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    style={{
                        backgroundColor: '#0c0c0c',
                        border: '1px solid rgba(210, 0, 0, 0.4)',
                        borderRadius: '16px',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        boxShadow: '0 0 40px rgba(210, 0, 0, 0.25)',
                        position: 'relative',
                        color: '#f2f2f2'
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        aria-label="Close project modal"
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'rgba(0,0,0,0.7)',
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

                    {/* Banner Image */}
                    <div style={{
                        position: 'relative',
                        height: '240px',
                        width: '100%',
                        backgroundColor: '#111',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80";
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, #0c0c0c 0%, transparent 80%)'
                        }} />
                    </div>

                    <div style={{ padding: '1.75rem clamp(1.2rem, 3vw, 2.2rem)' }}>
                        {/* Domain Badges */}
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                            <span style={{
                                backgroundColor: 'rgba(210, 0, 0, 0.15)',
                                color: '#ff4d4d',
                                border: '1px solid rgba(210, 0, 0, 0.35)',
                                padding: '0.25rem 0.65rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontFamily: '"Space Mono", monospace',
                                textTransform: 'uppercase'
                            }}>
                                {project.category}
                            </span>
                            {project.status && (
                                <span style={{
                                    backgroundColor: 'rgba(0, 255, 128, 0.1)',
                                    color: '#4ade80',
                                    border: '1px solid rgba(0, 255, 128, 0.3)',
                                    padding: '0.25rem 0.65rem',
                                    borderRadius: '4px',
                                    fontSize: '0.75rem',
                                    fontFamily: '"Space Mono", monospace'
                                }}>
                                    ● {project.status}
                                </span>
                            )}
                        </div>

                        {/* Title & Tagline */}
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            color: '#ffffff',
                            fontFamily: '"Bruno Ace", sans-serif',
                            marginBottom: '0.4rem'
                        }}>
                            {project.title}
                        </h2>
                        <p style={{
                            color: '#d20000',
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '0.95rem',
                            marginBottom: '1.2rem',
                            textAlign: 'left',
                            marginTop: 0
                        }}>
                            {project.tagline}
                        </p>

                        {/* Full Description */}
                        <div style={{
                            fontSize: '0.95rem',
                            lineHeight: '1.7',
                            color: '#ccc',
                            marginBottom: '1.5rem',
                            fontFamily: '"Space Grotesk", sans-serif'
                        }}>
                            {project.fullDescription || project.description}
                        </div>

                        {/* Key Features */}
                        {project.features && project.features.length > 0 && (
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{
                                    color: '#f2f2f2',
                                    fontSize: '1rem',
                                    fontFamily: '"Space Mono", monospace',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.75rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    paddingBottom: '0.35rem'
                                }}>
                                    // Key Capabilities
                                </h4>
                                <ul style={{
                                    listStyleType: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                    gap: '0.6rem'
                                }}>
                                    {project.features.map((feat, i) => (
                                        <li key={i} style={{
                                            fontSize: '0.88rem',
                                            color: '#b5b5b5',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: '#d20000', fontWeight: 'bold' }}>▸</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        <div style={{ marginBottom: '1.75rem' }}>
                            <h4 style={{
                                color: '#f2f2f2',
                                fontSize: '1rem',
                                fontFamily: '"Space Mono", monospace',
                                textTransform: 'uppercase',
                                marginBottom: '0.75rem',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '0.35rem'
                            }}>
                                // Tech Stack & Architecture
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                        color: '#e0e0e0',
                                        padding: '0.3rem 0.75rem',
                                        borderRadius: '6px',
                                        fontSize: '0.8rem',
                                        fontFamily: '"Space Mono", monospace'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            paddingTop: '1rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                        }}>
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="submit-btn"
                                    style={{
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.75rem 1.5rem',
                                        fontSize: '0.9rem',
                                        margin: 0
                                    }}
                                >
                                    <span>Launch Live Demo</span> ↗
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.75rem 1.5rem',
                                        fontSize: '0.9rem',
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        borderRadius: '8px',
                                        color: '#ffffff',
                                        fontFamily: '"Doto", sans-serif',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#d20000';
                                        e.currentTarget.style.background = 'rgba(210,0,0,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                    }}
                                >
                                    <i className="fa fa-github" style={{ fontSize: '1.1rem' }}></i> Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
