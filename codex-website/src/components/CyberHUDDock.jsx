import React from 'react';
import { motion } from 'framer-motion';

const CyberHUDDock = ({ onToggleTerminal, isAudioActive, onToggleAudio, isTerminalOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
                position: 'fixed',
                bottom: '24px',
                left: '24px',
                zIndex: 1500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(10, 10, 10, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(210, 0, 0, 0.35)',
                borderRadius: '30px',
                padding: '0.35rem 0.6rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(210, 0, 0, 0.15)'
            }}
            className="cyber-hud-dock"
        >
            {/* Terminal Trigger Button */}
            <button
                onClick={onToggleTerminal}
                title="Toggle Hacker Terminal (Press ~)"
                style={{
                    background: isTerminalOpen ? '#d20000' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${isTerminalOpen ? '#ff3333' : 'rgba(255, 255, 255, 0.12)'}`,
                    borderRadius: '20px',
                    color: isTerminalOpen ? '#ffffff' : '#ff4d4d',
                    padding: '0.4rem 0.85rem',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'all 0.25s ease',
                    boxShadow: isTerminalOpen ? '0 0 12px rgba(210,0,0,0.6)' : 'none'
                }}
            >
                <span style={{ fontWeight: 'bold' }}>&gt;_</span>
                <span style={{ fontSize: '0.78rem', letterSpacing: '0.5px' }}>TERMINAL</span>
                <span style={{
                    fontSize: '0.68rem',
                    opacity: 0.6,
                    background: 'rgba(0,0,0,0.3)',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '3px',
                    marginLeft: '0.2rem'
                }}>
                    ~
                </span>
            </button>

            {/* Audio Toggle Button */}
            <button
                onClick={onToggleAudio}
                title={isAudioActive ? "Mute Cyber FX" : "Enable Cyber FX"}
                style={{
                    background: isAudioActive ? 'rgba(210, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${isAudioActive ? '#d20000' : 'rgba(255, 255, 255, 0.12)'}`,
                    borderRadius: '50%',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isAudioActive ? '#ffffff' : '#888888',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isAudioActive ? '0 0 10px rgba(210, 0, 0, 0.4)' : 'none'
                }}
            >
                {isAudioActive ? '🔊' : '🔇'}
            </button>

            {/* Live Status Pulse */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0 0.4rem',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <span style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    display: 'inline-block'
                }} />
                <span style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.68rem',
                    color: '#888',
                    letterSpacing: '1px'
                }}>
                    NODE
                </span>
            </div>
        </motion.div>
    );
};

export default CyberHUDDock;
