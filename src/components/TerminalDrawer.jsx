import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioFx } from '../utils/audioFx';

const renderFormattedTerminalText = (text, isMatrixMode) => {
    if (!text || typeof text !== 'string') return text;

    const markdownAndUrlRegex = /(\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const parts = text.split(markdownAndUrlRegex);

    return parts.map((part, i) => {
        if (!part) return null;

        const mdMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (mdMatch) {
            const [, label, url] = mdMatch;
            const isMail = url.startsWith('mailto:');
            return (
                <a
                    key={i}
                    href={url}
                    target={isMail ? '_self' : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        color: isMatrixMode ? '#00ffcc' : '#ff4d4d',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.textShadow = isMatrixMode ? '0 0 8px #00ff66' : '0 0 8px #ff4d4d';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = isMatrixMode ? '#00ffcc' : '#ff4d4d';
                        e.currentTarget.style.textShadow = 'none';
                    }}
                >
                    {label} <span style={{ fontSize: '0.75rem' }}>{isMail ? '✉' : '↗'}</span>
                </a>
            );
        }

        if (part.startsWith('http://') || part.startsWith('https://')) {
            return (
                <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        color: isMatrixMode ? '#00ffcc' : '#ff4d4d',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px'
                    }}
                >
                    {part} <span style={{ fontSize: '0.75rem' }}>↗</span>
                </a>
            );
        }
        return part;
    });
};

const CODEX_NEOFETCH_BANNER = `       /\\             guest@codex-wou-node
      /  \\            --------------------
     /\\   \\           OS: Code{X} Cybernet Linux 2026 (Woxsen Node)
    /  \\   \\          Host: Woxsen University School of Technology
   /    \\   \\         Kernel: 6.12.0-codex-hardened-amd64
  /  /\\  \\   \\        Uptime: 24/7/365 (Active Collegiate Node)
 /  /  \\  \\   \\       Shell: codex-sh v2.6.0 (x86_64)
|  /    \\  \\  |       Org: Hack Club Affiliate | Premier Tech Society
| | {X}  |  | |       Mentor: Dr. Amogh Deshmukh (Asst. Dean - SoT)
 \\ \\____/  / /        Leadership: President Manish | VP Monish
  \\_______/ /         Palette: [ ■ Red ][ ■ White ][ ■ Cyan ][ ■ Green ]`;

const quickCommands = ['help', 'neofetch', 'projects', 'events', 'team', 'achievements', 'contact', 'matrix', 'join', 'clear'];

const TerminalDrawer = ({ isOpen, onClose }) => {
    const [history, setHistory] = useState([
        { type: 'system', text: CODEX_NEOFETCH_BANNER },
        { type: 'system', text: "\n// Code{X} Terminal OS v2.6.0 [Woxsen Cybernet Node]\n// Type 'help' or click quick chips below. Press 'matrix' for rain." }
    ]);
    const [input, setInput] = useState('');
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isMatrixMode, setIsMatrixMode] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 150);
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleKeyDown = (e) => {
        audioFx.playTerminalKey();

        if (e.key === 'Enter') {
            e.preventDefault();
            const trimmed = input.trim();
            if (!trimmed) return;

            setCmdHistory(prev => [trimmed, ...prev]);
            setHistoryIndex(-1);
            processCommand(trimmed);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
                const nextIdx = historyIndex + 1;
                setHistoryIndex(nextIdx);
                setInput(cmdHistory[nextIdx]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const nextIdx = historyIndex - 1;
                setHistoryIndex(nextIdx);
                setInput(cmdHistory[nextIdx]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    const processCommand = (cmd) => {
        const lower = cmd.toLowerCase().trim();
        const newEntries = [{ type: 'input', text: `guest@codex:~$ ${cmd}` }];

        switch (lower) {
            case 'help':
                newEntries.push({
                    type: 'output',
                    text: `Available Commands:
  • neofetch     - Display Code{X} Linux ASCII banner & system specs
  • projects     - View active open-source & innovation lab projects
  • events       - List recent hackathons, Bug-X, and bootcamps
  • team         - Display core leadership & mentor
  • achievements - Hall of fame victories and CTF milestones
  • contact      - Official email, Instagram, and LinkedIn coordinates
  • join         - Information on recruitment tracks
  • matrix       - Toggle falling digital matrix stream
  • whoami       - Display current session credentials
  • clear        - Clear terminal history
  • exit         - Close this terminal drawer`
                });
                break;

            case 'neofetch':
            case 'fastfetch':
            case 'fetch':
            case 'logo':
                newEntries.push({
                    type: 'system',
                    text: CODEX_NEOFETCH_BANNER
                });
                break;

            case 'contact':
            case 'mail':
            case 'email':
            case 'socials':
                newEntries.push({
                    type: 'output',
                    text: `// CODE{X} TRANSMISSION COORDINATES:
• Email:      [codex.woxsen.edu.in](mailto:codex@woxsen.edu.in?subject=Code%7BX%7D%20Woxsen%20-%20Inquiry%20%26%20Connect&body=Hello%20Code%7BX%7D%20Team%2C%0A%0AI%20am%20reaching%20out%20to%20connect%20with%20Code%7BX%7D%20at%20Woxsen%20University.%0A%0A%5BWrite%20your%20message%20here%5D%0A%0ABest%20regards%2C)
• Instagram:  [codex_wou](https://www.instagram.com/codex_wou)
• LinkedIn:   [codex_wou](https://www.linkedin.com/company/codex-wou)
• GitHub:     [CODEX-WoU](https://github.com/CODEX-WoU/)
• Twitter/X:  [CodeX_WOU](https://x.com/CodeX_WOU)`
                });
                break;

            case 'privacy':
                newEntries.push({
                    type: 'output',
                    text: `// DATA GOVERNANCE & PRIVACY CHARTER:
Code{X} strictly adheres to student data integrity. Event registrations, CTF credentials, and portfolio submissions are never sold or shared with external advertisers.
For inquiries, reach our administrative desk at: [codex.woxsen.edu.in](mailto:codex@woxsen.edu.in)`
                });
                break;

            case 'terms':
            case 'rules':
            case 'conduct':
                newEntries.push({
                    type: 'output',
                    text: `// CODE{X} COMMUNITY CODE OF CONDUCT & TERMS:
1. Inclusive and harassment-free hacker culture for all students.
2. Academic integrity and zero-plagiarism policy during hackathons.
3. Open-source innovation lab projects licensed under MIT/Apache 2.0.
4. Ethical cybersecurity practices restricted to authorized sandbox targets.`
                });
                break;

            case 'projects':
                newEntries.push({
                    type: 'output',
                    text: `// CODE{X} INNOVATION LAB PROJECTS:
1. JARVIS AI Core     [AI & ML]       Autonomous voice & desktop assistant
2. AlgoArena          [Competitive]   Real-time 1v1 lightning code battles
3. CyberSentinel      [CyberSec]      Automated CTF recon & vulnerability scanner
4. NeuroVision Edge   [Robotics/CV]   Ultra-fast edge inference at 60fps
5. Code{X} Portal     [Web & Cloud]   Cybernetic club platform & telemetry`
                });
                break;

            case 'events':
                newEntries.push({
                    type: 'output',
                    text: `// CODE{X} EVENTS LOG:
• BUG-X: Debugging Grand Prix 2026 (200+ Participants) [COMPLETED]
• SIH Internal Hackathon 2025 (500+ Participants)
• Educational Bootcamp by Core Members (150+ Participants)
• SIH Internal Hackathon 2023 (500+ Participants)
• Python Skill Development Program 2023 (120+ Participants)
• Freshman Induction by GeeksForGeeks (600+ Participants)`
                });
                break;

            case 'team':
                newEntries.push({
                    type: 'output',
                    text: `// CODE{X} LEADERSHIP:
• Mentor: Dr. Amogh Deshmukh (Assistant Dean - SoT)
• President: Manish ("I write code that writes outcomes.")
• Vice President: Monish ("Logic on the Board. Vision in the Code.")
• Core Members: Nitin, Hassan, Deepti, Sudarshan, Adeeb
• Executives: Sufiyan, Parth, Levin, Chandrahas, Karthika, Rian, Samarth, Chidvilas`
                });
                break;

            case 'achievements':
                newEntries.push({
                    type: 'output',
                    text: `// HALL OF FAME:
🏆 Smart India Hackathon Finalists (2023 & 2025)
🛡️ 1st Place - Inter-College Cyber CTF Champions
🎖️ Woxsen Premier Technical Organization
⚡ 50,000+ Lines of Open Source Code merged`
                });
                break;

            case 'join':
                newEntries.push({
                    type: 'output',
                    text: `// RECRUITMENT ROADMAP:
1. Choose your domain: AI/ML, Web Dev, CyberSec, CP, or UI/UX Design.
2. Submit your online application & GitHub portfolio.
3. Complete the interactive technical discussion with domain leads.
Follow @codex_wou for official intake announcements!`
                });
                break;

            case 'matrix':
                setIsMatrixMode(prev => !prev);
                newEntries.push({
                    type: 'output',
                    text: isMatrixMode ? "Matrix mode deactivated." : "Waking up to the Matrix... Type 'matrix' again to exit."
                });
                break;

            case 'whoami':
                newEntries.push({
                    type: 'output',
                    text: "guest@codex-wou-node [Access: Elite Guest | Privileges: Read/Execute/Hack]"
                });
                break;

            case 'sudo':
            case 'sudo su':
                newEntries.push({
                    type: 'output',
                    text: "Nice try! Privilege escalation logged: 'User is definitely a curious hacker.'"
                });
                break;

            case 'clear':
                setHistory([]);
                return;

            case 'exit':
            case 'close':
            case 'quit':
                onClose();
                return;

            default:
                newEntries.push({
                    type: 'error',
                    text: `Command not found: '${cmd}'. Type 'help' for the command directory.`
                });
        }

        setHistory(prev => [...prev, ...newEntries]);
    };

    const handleQuickChipClick = (cmd) => {
        audioFx.playClick();
        if (cmd === 'clear') {
            setHistory([]);
        } else {
            processCommand(cmd);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="terminal-modal-backdrop"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 3000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                >
                    <motion.div
                        className="terminal-window"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                        style={{
                            width: '100%',
                            maxWidth: isMaximized ? '95vw' : '780px',
                            height: isMaximized ? '90vh' : '540px',
                            backgroundColor: isMatrixMode ? '#021206' : '#0a0a0a',
                            border: `1px solid ${isMatrixMode ? '#00ff66' : 'rgba(210, 0, 0, 0.5)'}`,
                            borderRadius: '14px',
                            boxShadow: `0 0 40px ${isMatrixMode ? 'rgba(0, 255, 102, 0.3)' : 'rgba(210, 0, 0, 0.3)'}`,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            fontFamily: '"Space Mono", monospace',
                            transition: 'max-width 0.3s ease, height 0.3s ease'
                        }}
                    >
                        {/* Header Bar */}
                        <div style={{
                            padding: '0.65rem 1rem',
                            backgroundColor: isMatrixMode ? '#011c08' : '#141414',
                            borderBottom: `1px solid ${isMatrixMode ? 'rgba(0,255,102,0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                                <span onClick={onClose} title="Close" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56', cursor: 'pointer', display: 'inline-block' }} />
                                <span onClick={() => setIsMaximized(prev => !prev)} title="Toggle Size" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e', cursor: 'pointer', display: 'inline-block' }} />
                                <span onClick={() => setIsMatrixMode(prev => !prev)} title="Matrix Rain" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f', cursor: 'pointer', display: 'inline-block' }} />
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: isMatrixMode ? '#00ff66' : '#b0b0b0',
                                    marginLeft: '0.75rem',
                                    fontWeight: 'bold'
                                }}>
                                    bash — codex@terminal-node:~
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <button
                                    onClick={() => setIsMaximized(prev => !prev)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#888',
                                        cursor: 'pointer',
                                        fontSize: '0.85rem'
                                    }}
                                    title={isMaximized ? "Restore Size" : "Maximize Window"}
                                >
                                    {isMaximized ? '❐' : '□'}
                                </button>
                                <button
                                    onClick={onClose}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#888',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem'
                                    }}
                                    title="Close Window"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Quick Command Chips Toolbar */}
                        <div style={{
                            padding: '0.4rem 0.8rem',
                            background: isMatrixMode ? 'rgba(0, 50, 20, 0.4)' : 'rgba(20, 20, 20, 0.6)',
                            borderBottom: `1px solid ${isMatrixMode ? 'rgba(0,255,102,0.1)' : 'rgba(255, 255, 255, 0.06)'}`,
                            display: 'flex',
                            gap: '0.35rem',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        }}>
                            <span style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', marginRight: '0.2rem' }}>Quick:</span>
                            {quickCommands.map(cmd => (
                                <button
                                    key={cmd}
                                    onClick={() => handleQuickChipClick(cmd)}
                                    style={{
                                        background: isMatrixMode ? 'rgba(0, 255, 102, 0.1)' : 'rgba(210, 0, 0, 0.12)',
                                        border: `1px solid ${isMatrixMode ? 'rgba(0, 255, 102, 0.3)' : 'rgba(210, 0, 0, 0.3)'}`,
                                        borderRadius: '4px',
                                        color: isMatrixMode ? '#88ffaa' : '#ff4d4d',
                                        fontSize: '0.72rem',
                                        padding: '0.15rem 0.45rem',
                                        fontFamily: '"Space Mono", monospace',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {cmd}
                                </button>
                            ))}
                        </div>

                        {/* Terminal Body */}
                        <div
                            style={{
                                flex: 1,
                                padding: '1rem',
                                overflowY: 'auto',
                                fontSize: '0.85rem',
                                lineHeight: 1.5,
                                color: isMatrixMode ? '#00ff66' : '#e0e0e0',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.4rem'
                            }}
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((entry, idx) => (
                                <div key={idx} style={{
                                    whiteSpace: 'pre-wrap',
                                    color: entry.type === 'error'
                                        ? '#ff4d4d'
                                        : entry.type === 'input'
                                            ? (isMatrixMode ? '#88ffaa' : '#ffffff')
                                            : entry.type === 'system'
                                                ? (isMatrixMode ? '#00ff66' : '#ff4d4d')
                                                : (isMatrixMode ? '#00ff66' : '#b5b5b5')
                                }}>
                                    {renderFormattedTerminalText(entry.text, isMatrixMode)}
                                </div>
                            ))}

                            {/* Input Row */}
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                                <span style={{ color: isMatrixMode ? '#00ff66' : '#d20000', marginRight: '0.5rem', fontWeight: 'bold' }}>
                                    guest@codex:~$
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    style={{
                                        flex: 1,
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        color: isMatrixMode ? '#00ff66' : '#ffffff',
                                        fontFamily: '"Space Mono", monospace',
                                        fontSize: '0.85rem'
                                    }}
                                    autoFocus
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalDrawer;

