import React from 'react';

const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
    return (
        <footer style={{
            padding: '2rem 1rem 1.5rem 1rem',
            background: '#080808',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            marginTop: '3rem',
            position: 'relative',
            zIndex: 10,
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div className="footer-main" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.85rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <img
                    src="/assets/codex_dark_theme.png"
                    alt="CodeX Logo"
                    style={{ height: '1.8rem', width: 'auto' }}
                />

                <div className="footer-icons" style={{ display: 'flex', gap: '1.25rem' }}>
                    <a href="https://www.instagram.com/codex_wou" target="_blank" rel="noopener noreferrer" aria-label="CodeX Instagram" style={{ color: '#b1afaf', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://linkedin.com/company/codex-wou" target="_blank" rel="noopener noreferrer" aria-label="CodeX LinkedIn" style={{ color: '#b1afaf', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <a href="https://github.com/CODEX-WoU/" target="_blank" rel="noopener noreferrer" aria-label="CodeX GitHub Organization" style={{ color: '#b1afaf', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a href="https://x.com/CodeX_WOU" target="_blank" rel="noopener noreferrer" aria-label="CodeX X (formerly Twitter)" style={{ color: '#b1afaf', fontSize: '1.2rem', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}>
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block' }}>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>

                {/* Privacy & Legal Links */}
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    fontSize: '0.8rem',
                    fontFamily: '"Space Mono", monospace',
                    color: '#888888',
                    marginTop: '0.2rem'
                }}>
                    <button
                        onClick={onOpenPrivacy}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#999',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'color 0.2s ease',
                            textDecoration: 'underline',
                            textUnderlineOffset: '3px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ff4d4d'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                    >
                        Privacy Policy
                    </button>
                    <span>•</span>
                    <button
                        onClick={onOpenTerms}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#999',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'color 0.2s ease',
                            textDecoration: 'underline',
                            textUnderlineOffset: '3px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ff4d4d'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                    >
                        Terms & Conditions
                    </button>
                </div>

                <p style={{ fontSize: '0.78rem', color: '#555', textAlign: 'center', maxWidth: '600px', margin: '0.35rem 0 0 0', fontFamily: '"Space Grotesk", sans-serif' }}>
                    © 2026 Copyright: <span style={{ color: '#d20000', fontWeight: 'bold' }}>Code{'{x}'}</span> - The Programming Club, Woxsen University. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
