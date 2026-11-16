import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    // Role-specific heads
    const secretary = [
        { name: "Deepti", quote: "I am trying (definitely not my best).", linkedin: "https://www.linkedin.com/in/deepti0the0goat", github: "https://github.com/AMK488", image: "/assets/team/4core.JPG" },
    ];

    const outreach = [
        { name: "Nitin", quote: "Building the logic today that automates the world of tomorrow.", linkedin: "https://www.linkedin.com/in/nitin-dasari/", github: "https://github.com/nikky-767", image: "/assets/team/1core.JPG" },
    ];

    const creatives = [
        { name: "Rian", quote: "If it ain't broke, don't fix it.", linkedin: "https://www.linkedin.com/in/rian-islam-4933753a2/", github: "https://github.com/AltenCode", image: "/assets/team/7exec.JPG" },
    ];

    const operations = [
        { name: "Levin", quote: "Building smart solutions, one line at a time.", linkedin: "https://www.linkedin.com/in/levin-josewell-kadasi-286917381", github: "https://github.com/levinjosewell", image: "/assets/team/4exec.JPG" },
        { name: "Chandrahas", quote: "White hat mindset in a black tie suit.", linkedin: "https://www.linkedin.com/in/chandrahas-thunga", github: "https://github.com/CodeInfinity08", image: "/assets/team/5exec.JPG" },
    ];

    const marketing = [
        { name: "Karthika", quote: "Learning today, leading tomorrow.", linkedin: "https://www.linkedin.com/in/juluri-k-bb6634346", github: "https://github.com/Julurikarthika316-cmd", image: "/assets/team/6exec.JPG" },
    ];

    // Core team members
    const coreMembers = [
        { name: "Hassan", quote: "My code works and breaks at the same time, like the Schrödinger's Cat.", linkedin: "https://www.linkedin.com/in/shaik-hassan-572497328/", github: "https://github.com/Hassan-shaik", image: "/assets/team/3core.JPG" },
        { name: "Sudarshan", quote: "Building intelligent systems. Breaking normal limits.", linkedin: "https://in.linkedin.com/in/sudarshanmaddi", github: "https://github.com/suddhumaddi", image: "/assets/team/6core.JPG" },
    ];

    // Executives
    const executives = [
        { name: "Sufiyan", quote: "We don't discuss the future, We prototype it.", linkedin: "https://www.linkedin.com/in/mohd-sufiyan-naveed", github: "https://github.com/MSN-2007", image: "/assets/team/1exec.JPG" },
        { name: "Parth", quote: "Precision Over Hype", linkedin: "https://www.linkedin.com/in/parthbajaj29", github: "https://github.com/Parth-Bajaj", image: "/assets/team/3exec.JPG" },
        { name: "Chidvilas", quote: "Cipher.", linkedin: "https://www.linkedin.com/in/chidvilas-meesala-3ba313278/", github: "https://github.com/chidvilas05-code", image: "/assets/team/9exec.JPG" },
    ];

    return (
        <div className="section" id="team">
            <h2 className="section-header">MEET THE TEAM</h2>

            {/* Mentor */}
            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">Mentor</h3>
                    <div className="team-grid">
                        <TeamCard
                            name="Dr. Amogh Deshmukh"
                            quote={"Assistant Dean - School of Technology, Woxsen University."}
                            image="/assets/team/mentor.JPG"
                            linkedin="https://www.linkedin.com/in/dr-amogh-deshmukh-35009b17/?originalSubdomain=in"
                            github="https://github.com/amoghpesit"
                        />
                    </div>
                </div>
            </div>

            <div className="section-separator" />

            {/* President & Vice President side-by-side */}
            <div
                className="leadership-section"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 'clamp(2rem, 6vw, 4rem)',
                    flexWrap: 'wrap'
                }}
            >
                <div className="leadership-block" style={{ flex: '1 1 280px', maxWidth: '360px' }}>
                    <h3 className="sub-section-header">President</h3>
                    <div className="team-grid" style={{ marginTop: '1rem' }}>
                        <TeamCard
                            name="Manish"
                            quote={`I write code that writes outcomes.`}
                            image="/assets/team/2core.JPG"
                            linkedin="https://www.linkedin.com/in/manishreddyvem/"
                            github="https://github.com/Vem-Manish"
                        />
                    </div>
                </div>

                <div className="leadership-block" style={{ flex: '1 1 280px', maxWidth: '360px' }}>
                    <h3 className="sub-section-header">Vice President</h3>
                    <div className="team-grid" style={{ marginTop: '1rem' }}>
                        <TeamCard
                            name="Monish"
                            quote={`Logic on the Board. Vision in the Code.`}
                            image="/assets/team/7core.JPG"
                            linkedin="https://www.linkedin.com/in/monishrithvik"
                            github="https://github.com/MonishRithvik"
                        />
                    </div>
                </div>
            </div>

            <div className="section-separator" />

            {/* Secretary */}
            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">Secretary</h3>
                    <div className="team-grid">
                        {secretary.map(member => (
                            <TeamCard
                                key={member.name}
                                name={member.name}
                                quote={member.quote}
                                image={member.image}
                                linkedin={member.linkedin}
                                github={member.github}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-separator" />

            {/* Head of Outreach */}
            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">Head of Outreach</h3>
                    <div className="team-grid">
                        {outreach.map(member => (
                            <TeamCard
                                key={member.name}
                                name={member.name}
                                quote={member.quote}
                                image={member.image}
                                linkedin={member.linkedin}
                                github={member.github}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-separator" />

            {/* Head of Creatives */}
            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">Head of Creatives</h3>
                    <div className="team-grid">
                        {creatives.map(member => (
                            <TeamCard
                                key={member.name}
                                name={member.name}
                                quote={member.quote}
                                image={member.image}
                                linkedin={member.linkedin}
                                github={member.github}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-separator" />

            {/* Head of Operations - Both members side by side under the same domain */}
            <div className="leadership-section">
                <div className="leadership-block" style={{ maxWidth: '100%', width: '100%' }}>
                    <h3 className="sub-section-header">Head of Operations</h3>
                    <div
                        className="team-grid"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(1.5rem, 4vw, 3rem)',
                            flexWrap: 'wrap',
                            marginTop: '1rem',
                            width: '100%'
                        }}
                    >
                        {operations.map(member => (
                            <TeamCard
                                key={member.name}
                                name={member.name}
                                quote={member.quote}
                                image={member.image}
                                linkedin={member.linkedin}
                                github={member.github}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-separator" />

            {/* Head of Marketing */}
            <div className="leadership-section">
                <div className="leadership-block">
                    <h3 className="sub-section-header">Head of Marketing</h3>
                    <div className="team-grid">
                        {marketing.map(member => (
                            <TeamCard
                                key={member.name}
                                name={member.name}
                                quote={member.quote}
                                image={member.image}
                                objectPosition="top"
                                linkedin={member.linkedin}
                                github={member.github}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Members */}
            <div className="section-separator" />
            <h3 className="sub-section-header">Core Members</h3>
            <div className="team-grid">
                {coreMembers.map(member => (
                    <TeamCard
                        key={member.name}
                        name={member.name}
                        quote={member.quote}
                        image={member.image}
                        linkedin={member.linkedin}
                        github={member.github}
                    />
                ))}
            </div>

            {/* Executives */}
            <div className="section-separator" />
            <h3 className="sub-section-header">Executives</h3>
            <div className="team-grid exec-row">
                {executives.map(member => (
                    <TeamCard
                        key={member.name}
                        name={member.name}
                        quote={member.quote}
                        image={member.image}
                        linkedin={member.linkedin}
                        github={member.github}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
