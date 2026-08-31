import React, { useEffect, useState } from 'react';

const navItems = [
    { label: 'HOME', target: 'home' },
    { label: 'ABOUT', target: 'about' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'EVENTS', target: 'events' },
    { label: 'ACHIEVEMENTS', target: 'achievements' },
    { label: 'TEAM', target: 'team' },
    { label: 'FAQ', target: 'faq' },
    { label: 'CONTACT US', target: 'contact' }
];

const Navbar = ({
    onNavigate,
    activeSection = 'home',
    onToggleTerminal,
    isAudioActive = false,
    onToggleAudio
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const desktopBreakpoint = 1024;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= desktopBreakpoint && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [desktopBreakpoint, isOpen]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleItemClick = (e, item) => {
        e.preventDefault();
        setIsOpen(false);
        if (onNavigate) {
            onNavigate(item.target, item.label);
        } else {
            if (item.target === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(item.target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav id="navthing" aria-label="Primary">
            <div className="nav-header">
                <div className="logo" style={{ cursor: 'pointer' }} onClick={(e) => handleItemClick(e, navItems[0])}>
                    <img
                        src="/assets/codex_dark_theme.png"
                        alt="CodeX Logo"
                        style={{ height: '2.25rem', width: 'auto' }}
                    />
                </div>

                <button
                    type="button"
                    className={`nav-toggle${isOpen ? ' open' : ''}`}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    aria-controls="site-navigation"
                    onClick={handleToggle}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <ul id="site-navigation" className={`nav-links${isOpen ? ' open' : ''}`}>
                {navItems.map((item) => {
                    const isActive = activeSection === item.target;
                    return (
                        <li key={item.target}>
                            <a
                                href={item.target === 'home' ? '#' : `#${item.target}`}
                                onClick={(e) => handleItemClick(e, item)}
                                className={isActive ? 'active-nav-link' : ''}
                                style={{
                                    color: isActive ? '#ffffff' : undefined,
                                    textShadow: isActive ? '0 0 10px rgba(210,0,0,0.6)' : 'none',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.88rem'
                                }}
                            >
                                <span
                                    className="opening_flower"
                                    style={{
                                        color: isActive ? '#d20000' : undefined,
                                        transform: isActive ? 'scale(1.2)' : 'scale(1)',
                                        display: 'inline-block',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {`{`}
                                </span>{' '}
                                {item.label}{' '}
                                <span
                                    className="closing_flower"
                                    style={{
                                        color: isActive ? '#d20000' : undefined,
                                        transform: isActive ? 'scale(1.2)' : 'scale(1)',
                                        display: 'inline-block',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {`}`}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
