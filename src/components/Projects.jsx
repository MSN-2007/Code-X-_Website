import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const projectsData = [
    {
        id: 'jarvis',
        title: "JARVIS AI Core",
        category: "AI & ML",
        tagline: "Autonomous voice & desktop workspace orchestrator",
        description: "An AI-powered autonomous voice assistant capable of terminal execution, real-time code synthesis, screen parsing, and desktop automation using local & cloud LLMs.",
        fullDescription: "JARVIS AI Core is a flagship multi-modal assistant engineered to bridge natural conversational voice with direct operating system automation. Featuring sub-second whisper transcription, contextual vector memory, dynamic function calling, and deep integration with developer IDEs and developer workflows.",
        features: [
            "Real-time voice synthesis & zero-latency STT/TTS",
            "Autonomous terminal execution & safe sandbox runner",
            "Contextual vector database long-term memory",
            "Real-time visual screen & code parsing pipeline"
        ],
        techStack: ["Python", "FastAPI", "PyTorch", "LangChain", "Electron", "Ollama"],
        image: "/assets/events/4event.png",
        demoUrl: "https://github.com/CODEX-WoU/",
        githubUrl: "https://github.com/CODEX-WoU/",
        status: "Active Development"
    },
    {
        id: 'algoarena',
        title: "AlgoArena",
        category: "Competitive Dev",
        tagline: "Real-time multiplayer 1v1 lightning coding battleground",
        description: "A competitive coding platform where developers challenge peers in 1v1 live code battles with automated sandbox testcase evaluations and ELO ratings.",
        fullDescription: "AlgoArena turns algorithmic problem-solving into a multiplayer esport. Featuring instant WebSocket synchronization, isolated Docker test runners for sub-100ms judging, and an automated cheat-detection pipeline.",
        features: [
            "Instantaneous WebSocket multiplayer matchmaker",
            "Isolated Docker runtime sandboxes (C++, Python, Java, Rust)",
            "Dynamic ELO ratings & collegiate leaderboards",
            "Live code diffing & spectator broadcast mode"
        ],
        techStack: ["React", "Node.js", "Docker", "WebSockets", "Redis", "PostgreSQL"],
        image: "/assets/events/2event.png",
        demoUrl: "https://github.com/CODEX-WoU/",
        githubUrl: "https://github.com/CODEX-WoU/",
        status: "Live Beta"
    },
    {
        id: 'cybersentinel',
        title: "CyberSentinel",
        category: "Systems & Security",
        tagline: "Automated CTF reconnaissance & defensive analysis engine",
        description: "A modular cyber security toolkit built for collegiate CTFs, automated vulnerability assessment, packet dissection, and attack surface mapping.",
        fullDescription: "CyberSentinel equips security researchers and CTF competitors with an integrated dashboard for automated payload fuzzing, raw packet sniffing, memory corruption triage, and flag validation.",
        features: [
            "Automated port scanning & banner inspection",
            "Web application exploit & fuzzing pipelines",
            "Live encrypted network traffic dissection",
            "Modular CTF challenge orchestration & scoring"
        ],
        techStack: ["Go", "Python", "Scapy", "Wireshark API", "Docker"],
        image: "/assets/events/3event.png",
        demoUrl: "https://github.com/CODEX-WoU/",
        githubUrl: "https://github.com/CODEX-WoU/",
        status: "Maintained"
    },
    {
        id: 'neurovision',
        title: "NeuroVision Edge",
        category: "AI & ML",
        tagline: "Ultra-lightweight real-time spatial vision on embedded hardware",
        description: "Computer vision framework optimized for low-power edge microcontrollers, delivering 60fps spatial tracking and gesture detection.",
        fullDescription: "NeuroVision Edge uses quantized convolutional neural networks and TensorRT acceleration to bring real-time object classification, spatial mapping, and gesture tracking to embedded robotics hardware.",
        features: [
            "Sub-15ms edge inference on Jetson & Raspberry Pi",
            "Real-time hand gesture & spatial landmark tracking",
            "Quantized INT8 TensorRT optimization pipeline",
            "Autonomous obstacle avoidance ROS2 integration"
        ],
        techStack: ["C++", "OpenCV", "TensorRT", "YOLOv8", "ROS2"],
        image: "/assets/events/5event.jpg",
        demoUrl: "https://github.com/CODEX-WoU/",
        githubUrl: "https://github.com/CODEX-WoU/",
        status: "Completed"
    },
    {
        id: 'codexportal',
        title: "Code{X} Web Portal",
        category: "Web & Cloud",
        tagline: "High-performance interactive club hub with cyber aesthetics",
        description: "The digital nerve center for Code{X}, powering event registrations, real-time telemetry, leaderboards, and open-source project showcases.",
        fullDescription: "Engineered with modern React, Vite, Framer Motion, and Web Audio synthesizers, this portal delivers an immersive cyberpunk experience for thousands of student developers.",
        features: [
            "Ultra-smooth Framer Motion cyber transitions",
            "Synthesized Web Audio API soundscape",
            "Interactive hacker terminal CLI drawer",
            "Dynamic event registration and attendee pipelines"
        ],
        techStack: ["React", "Vite", "Framer Motion", "Web Audio API", "CSS3"],
        image: "/assets/codex_dark_theme.png",
        demoUrl: "https://github.com/CODEX-WoU/",
        githubUrl: "https://github.com/CODEX-WoU/",
        status: "Live Production"
    }
];

const categories = ["All", "AI & ML", "Competitive Dev", "Systems & Security", "Web & Cloud"];

const Projects = ({ onSelectProject }) => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projectsData
        : projectsData.filter(p => p.category === activeFilter);

    return (
        <div className="section" id="projects">
            <h2 className="section-header">INNOVATION LAB</h2>
            <p style={{
                textAlign: 'center',
                opacity: 0.8,
                fontSize: '1rem',
                marginTop: '0.5rem',
                fontFamily: '"Space Mono", monospace',
                maxWidth: '60ch',
                margin: '0.5rem auto 2rem auto'
            }}>
                // Open-source projects, autonomous AI assistants, and developer toolkits engineered by Code&#123;X&#125;.
            </p>

            {/* Category Filter Pills */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginBottom: '2.5rem'
            }}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        style={{
                            background: activeFilter === cat ? '#d20000' : 'rgba(255, 255, 255, 0.04)',
                            color: activeFilter === cat ? '#ffffff' : '#b1afaf',
                            border: `1px solid ${activeFilter === cat ? '#d20000' : 'rgba(255, 255, 255, 0.1)'}`,
                            padding: '0.45rem 1rem',
                            borderRadius: '20px',
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                        }}
                        className="project-card"
                    >
                        <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <span style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'rgba(0, 0, 0, 0.75)',
                                color: '#ff4d4d',
                                border: '1px solid rgba(210,0,0,0.4)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                fontSize: '0.72rem',
                                fontFamily: '"Space Mono", monospace',
                                backdropFilter: 'blur(4px)'
                            }}>
                                {project.category}
                            </span>
                        </div>

                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{
                                color: '#ffffff',
                                fontSize: '1.25rem',
                                marginBottom: '0.35rem',
                                fontFamily: '"Bruno Ace", sans-serif'
                            }}>
                                {project.title}
                            </h3>

                            <p style={{
                                color: '#ff4d4d',
                                fontSize: '0.82rem',
                                fontFamily: '"Space Mono", monospace',
                                marginBottom: '0.8rem',
                                textAlign: 'left',
                                marginTop: 0
                            }}>
                                {project.tagline}
                            </p>

                            <p style={{
                                fontSize: '0.88rem',
                                color: '#aaa',
                                lineHeight: 1.5,
                                textAlign: 'left',
                                margin: 0,
                                flex: 1,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>
                                {project.description}
                            </p>

                            {/* Tech Badges */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.4rem',
                                margin: '1.2rem 0 1.2rem 0'
                            }}>
                                {project.techStack.slice(0, 4).map((tech, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#bbb',
                                        fontSize: '0.72rem',
                                        padding: '0.15rem 0.5rem',
                                        borderRadius: '4px',
                                        fontFamily: '"Space Mono", monospace'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Card Footer Actions */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingTop: '0.8rem',
                                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                            }}>
                                <button
                                    onClick={() => onSelectProject(project)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#ff4d4d',
                                        fontFamily: '"Space Mono", monospace',
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        padding: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.35rem'
                                    }}
                                >
                                    Deep Dive Spec <span>→</span>
                                </button>

                                <div style={{ display: 'flex', gap: '0.6rem' }}>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: '#888', fontSize: '1.1rem', transition: 'color 0.2s' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
                                            title="View Source Code"
                                        >
                                            <i className="fa fa-github"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
