import React, { useMemo } from 'react';
import '../App.css';

const BugsOverlay = ({ isLanding }) => {
    // Generate a realistic amount of bugs (e.g., 15)
    const bugs = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => {
            // Randomize properties for each bug to look organic
            const size = Math.random() * 40 + 60; // 60px - 100px
            const leftPos = Math.random() * 100; // 0% - 100%
            const animationDuration = Math.random() * 10 + 10; // 10s - 20s
            const delay = Math.random() * -20; // Start at different times
            const isGoingUp = Math.random() > 0.5;
            const animationName = isGoingUp ? 'crawl-up' : 'crawl-down';

            // Slightly rotate bugs so they don't look perfectly straight, 
            // but keep them generally pointing in the direction of traversal
            const baseRotation = isGoingUp ? 0 : 180;
            const rotationVariation = (Math.random() - 0.5) * 30; // +/- 15 degrees

            return {
                id: i,
                size,
                leftPos,
                animationDuration,
                delay,
                animationName,
                rotation: baseRotation + rotationVariation
            };
        });
    }, []);

    return (
        <div className={`bugs-overlay ${!isLanding ? 'fade-out' : ''}`}>
            {bugs.map(bug => (
                <img
                    key={bug.id}
                    src="/assets/bug.png"
                    alt="Bug"
                    className="bug"
                    style={{
                        left: `${bug.leftPos}vw`,
                        width: `${bug.size}px`,
                        animation: `${bug.animationName} ${bug.animationDuration}s linear infinite`,
                        animationDelay: `${bug.delay}s`,
                        transform: `rotate(${bug.rotation}deg)`
                    }}
                />
            ))}
        </div>
    );
};

export default BugsOverlay;
