import React from 'react';

const TeamCard = ({ name, role, quote, image = "/assets/codex_dark_theme.png", objectPosition = "center", showSocial = true, linkedin, github }) => {
    const hasLinkedIn = Boolean(linkedin && linkedin.trim() !== "");
    const hasGitHub = Boolean(github && github.trim() !== "");

    return (
        <div className="team-card">
            <div className="card-image">
                <img src={image} alt={name} style={{ objectPosition }} loading="lazy" />
            </div>
            <h3>{name}</h3>
            {role && <p className="member-role" style={{ color: '#d20000', fontSize: '0.85rem', marginBottom: '0.25rem', fontFamily: '"Space Mono", monospace' }}>{role}</p>}
            <p className="member-quote"><b><i>"{quote}"</i></b></p>
            {showSocial && (hasLinkedIn || hasGitHub) && (
                <div className="social-links">
                    {hasLinkedIn && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn Profile`}>
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    )}
                    {hasGitHub && (
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s GitHub Profile`}>
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default TeamCard;
