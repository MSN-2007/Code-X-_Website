import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '1.5rem 1rem',
            background: '#0a0a0a',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '2rem',
            position: 'relative',
            zIndex: 10,
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div className="footer-main" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
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
                    <a href="https://x.com/CodeX_WOU" target="_blank" rel="noopener noreferrer" aria-label="CodeX X (Twitter)" style={{ color: '#b1afaf', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className="fa fa-twitter" aria-hidden="true"></i></a>
                </div>

                <p style={{ fontSize: '0.8rem', color: '#555', textAlign: 'center', maxWidth: '600px', margin: '0.5rem 0 0 0' }}>
                    © 2026 Copyright: <span style={{ color: '#d20000', fontWeight: 'bold' }}>Code{'{x}'}</span> - The Programming Club, Woxsen University
                </p>
            </div>
        </footer>
    );
};

export default Footer;
