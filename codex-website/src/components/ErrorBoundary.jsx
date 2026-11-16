import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("CodeX ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    handleReload = () => {
        window.location.reload();
    };

    handleGoHome = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#070707',
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(210, 0, 0, 0.12) 0%, rgba(7, 7, 7, 0.95) 70%)',
                    color: '#ffffff',
                    padding: '2rem',
                    textAlign: 'center',
                    fontFamily: '"Space Grotesk", sans-serif',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Glowing Cyber Box */}
                    <div style={{
                        maxWidth: '650px',
                        width: '100%',
                        backgroundColor: 'rgba(15, 15, 15, 0.85)',
                        border: '1px solid rgba(210, 0, 0, 0.5)',
                        borderRadius: '16px',
                        padding: '2.5rem 2rem',
                        boxShadow: '0 0 45px rgba(210, 0, 0, 0.35)',
                        backdropFilter: 'blur(16px)'
                    }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.35rem 0.85rem',
                            backgroundColor: 'rgba(210, 0, 0, 0.2)',
                            border: '1px solid #ff3333',
                            borderRadius: '6px',
                            color: '#ff4d4d',
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '0.82rem',
                            letterSpacing: '1px',
                            marginBottom: '1.25rem'
                        }}>
                            // SYSTEM ALERT: RUNTIME EXCEPTION
                        </div>

                        <h1 style={{
                            color: '#ffffff',
                            fontSize: '2.2rem',
                            marginBottom: '0.75rem',
                            fontFamily: '"Bruno Ace", sans-serif',
                            textShadow: '0 0 20px rgba(210, 0, 0, 0.6)'
                        }}>
                            SYSTEM MALFUNCTION
                        </h1>

                        <p style={{
                            color: '#b0b0b0',
                            maxWidth: '520px',
                            margin: '0 auto 1.5rem auto',
                            fontSize: '0.95rem',
                            lineHeight: 1.6
                        }}>
                            An unexpected execution anomaly was isolated by the Code&#123;X&#125; core safety protocol. Telemetry and state memory have been protected.
                        </p>

                        {/* Error Diagnostic Box */}
                        {this.state.error && (
                            <div style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                padding: '0.85rem 1rem',
                                fontFamily: '"Space Mono", monospace',
                                fontSize: '0.8rem',
                                color: '#ff6666',
                                textAlign: 'left',
                                overflowX: 'auto',
                                marginBottom: '2rem',
                                maxHeight: '100px'
                            }}>
                                <code>{this.state.error.toString()}</code>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <button
                                onClick={this.handleReload}
                                style={{
                                    background: '#d20000',
                                    color: '#ffffff',
                                    border: 'none',
                                    padding: '0.8rem 1.8rem',
                                    borderRadius: '8px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    boxShadow: '0 0 20px rgba(210,0,0,0.5)',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <span>⚡</span> Reboot Node
                            </button>

                            <button
                                onClick={this.handleGoHome}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    color: '#ffffff',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    padding: '0.8rem 1.8rem',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Return to Base
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
