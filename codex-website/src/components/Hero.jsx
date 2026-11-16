import React, { useState } from 'react';
import DecryptedText from './DecryptedText';

const Hero = ({ isLanding, onClick }) => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (isLanding) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20; // 20px max shift
        const y = (clientY / innerHeight - 0.5) * 20;
        setMousePos({ x, y });
    };

    return (
        <div
            className="hero"
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100svh',
                height: 'auto',
                cursor: isLanding ? 'pointer' : 'default',
                transition: 'min-height 0.5s ease-in-out, padding 0.5s ease-in-out',
                padding: '0 1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                width: '100%',
                transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                transition: 'transform 0.1s ease-out'
            }}>
                <h1
                    className="CodeX"
                    style={{
                        opacity: isLanding ? 0 : 1,
                        maxHeight: isLanding ? '0' : '18rem',
                        margin: '0',
                        overflow: 'hidden',
                        transform: isLanding ? 'translateY(20px)' : `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
                        transition: isLanding
                            ? 'max-height 0.8s ease-out, opacity 0.8s ease-out, margin 0.8s ease-out, transform 0.8s ease-out'
                            : 'max-height 0.8s ease-out, opacity 0.8s ease-out, margin 0.8s ease-out, transform 0.1s ease-out',
                        pointerEvents: isLanding ? 'none' : 'auto'
                    }}
                >
                    Code<span style={{ color: '#d20000' }}>{'{x}'}</span>
                </h1>

                <div
                    className="programming-club"
                    style={{
                        opacity: isLanding ? 0 : 1,
                        maxHeight: isLanding ? '0' : '4rem',
                        overflow: 'hidden',
                        fontFamily: '"Bruno Ace", sans-serif',
                        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                        color: '#d20000',
                        transform: isLanding ? 'translateY(20px)' : `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`,
                        transition: isLanding
                            ? 'max-height 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
                            : 'max-height 0.8s ease-out, opacity 0.8s ease-out, transform 0.1s ease-out',
                        pointerEvents: 'none'
                    }}
                >
                    The Programming Club
                </div>

                <p
                    className={`hero-content ${!isLanding ? 'all-decoded' : ''}`}
                    style={{
                        marginTop: isLanding ? '0' : '1rem',
                        transition: 'margin-top 0.8s ease-out',
                        animation: 'fadeInSlow 2s ease-out forwards',
                        transform: `translate3d(${mousePos.x * -0.1}px, ${mousePos.y * -0.1}px, 0)`
                    }}
                >
                    <DecryptedText
                        text="Code. "
                        speed={40}
                        maxIterations={5}
                        className="inline-block revealed-on-hover"
                        autoStart={true}
                        onScrambleComplete={() => setVisibleIndex(prev => Math.max(prev, 1))}
                    />
                    {visibleIndex >= 1 && (
                        <DecryptedText
                            text="Create. "
                            speed={40}
                            maxIterations={5}
                            className="inline-block revealed-on-hover"
                            autoStart={true}
                            onScrambleComplete={() => setVisibleIndex(prev => Math.max(prev, 2))}
                        />
                    )}
                    {visibleIndex >= 2 && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <DecryptedText
                                text="Innovate. "
                                speed={40}
                                maxIterations={5}
                                className="inline-block revealed-on-hover"
                                autoStart={true}
                            />
                            <div className="prompt-text" style={{
                                opacity: isLanding ? 1 : 0,
                                animation: isLanding ? 'pulse 2s infinite' : 'none',
                                transition: 'opacity 1s ease-out, visibility 1s ease-out',
                                visibility: isLanding ? 'visible' : 'hidden',
                                pointerEvents: 'none'
                            }}>
                                (click/scroll to continue)
                            </div>
                        </div>
                    )}
                </p>
                <div
                    className="hero-social-icons"
                    style={{
                        opacity: isLanding ? 0 : 1,
                        transform: isLanding ? 'translateY(20px)' : `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
                        transition: isLanding
                            ? 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
                            : 'opacity 0.8s ease-out, transform 0.1s ease-out',
                        pointerEvents: isLanding ? 'none' : 'auto',
                        display: 'flex'
                    }}
                >
                    <a href="https://www.instagram.com/codex_wou" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/codex-wou" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    <a href="https://github.com/CODEX-WoU/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://x.com/CodeX_WOU" target="_blank" rel="noopener noreferrer" aria-label="CodeX X (formerly Twitter)">
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: '-0.125em', display: 'inline-block' }}>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
