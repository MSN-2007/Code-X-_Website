import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("CodeX ErrorBoundary caught an error:", error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
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
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    padding: '2rem',
                    textAlign: 'center',
                    fontFamily: '"Space Grotesk", sans-serif'
                }}>
                    <h1 style={{ color: '#d20000', fontSize: '2.5rem', marginBottom: '1rem', fontFamily: '"Bruno Ace", sans-serif' }}>
                        Code{'{x}'} SYSTEM MALFUNCTION
                    </h1>
                    <p style={{ color: '#aaa', maxWidth: '500px', marginBottom: '2rem', fontFamily: '"Space Mono", monospace' }}>
                        An unexpected runtime error occurred while rendering the visual interface.
                    </p>
                    <button
                        onClick={this.handleReload}
                        style={{
                            background: '#d20000',
                            color: '#fff',
                            border: 'none',
                            padding: '0.8rem 1.8rem',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            boxShadow: '0 0 15px rgba(210,0,0,0.5)'
                        }}
                    >
                        Reboot System (Reload)
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
