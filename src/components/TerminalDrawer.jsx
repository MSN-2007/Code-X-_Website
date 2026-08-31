import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioFx } from '../utils/audioFx';

const TerminalDrawer = ({ isOpen, onClose }) => {
    const [history, setHistory] = useState([
        { type: 'system', text: "Code{X} Terminal OS v2.6.0 [Woxsen Cybernet Node]" },
        { type: 'system', text: "Type 'help' to see all available commands, or 'matrix' for rain." }
    ]);
    const [input, setInput] = useState('');
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isMatrixMode, setIsMatrixMode] = useState(false);
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
  • projects     - View active open-source & innovation lab projects
  • events       - List recent hackathons, Bug-X, and bootcamps
  • team         - Display core leadership & mentor
  • achievements - Hall of fame victories and CTF milestones
  • join         - Information on recruitment tracks
  • matrix       - Toggle falling digital matrix stream
  • whoami       - Display current session credentials
  • clear        - Clear terminal history
  • exit         - Close this terminal drawer`
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
                            maxWidth: '750px',
                            height: '520px',
                            backgroundColor: isMatrixMode ? '#021206' : '#0a0a0a',
                            border: `1px solid ${isMatrixMode ? '#00ff66' : 'rgba(210, 0, 0, 0.5)'}`,
                            borderRadius: '12px',
                            boxShadow: `0 0 35px ${isMatrixMode ? 'rgba(0, 255, 102, 0.3)' : 'rgba(210, 0, 0, 0.3)'}`,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            fontFamily: '"Space Mono", monospace'
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
                                <span onClick={onClose} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56', cursor: 'pointer', display: 'inline-block' }} />
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }} />
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: isMatrixMode ? '#00ff66' : '#b0b0b0',
                                    marginLeft: '0.75rem',
                                    fontWeight: 'bold'
                                }}>
                                    bash — codex@terminal-node:~
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#888',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}
                            >
                                ✕
                            </button>
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
                                    {entry.text}
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
