import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?';

const DecryptedText = ({ text, speed = 50, maxIterations = 10, className = "", revealOnHover = false, autoStart = false, onScrambleComplete }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const startAnimation = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prevText =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
                if (onScrambleCompleteRef.current) {
                    onScrambleCompleteRef.current();
                }
            }

            iteration += 1 / 3;
        }, speed);
    };

    const startScramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prevText =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < text.length - iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, speed);
    };

    const onScrambleCompleteRef = useRef(onScrambleComplete);
    useEffect(() => {
        onScrambleCompleteRef.current = onScrambleComplete;
    }, [onScrambleComplete]);

    useEffect(() => {
        if (autoStart) {
            startAnimation();
        } else if (revealOnHover) {
            // Start scrambled
            setDisplayText(
                text.split("").map(() => characters[Math.floor(Math.random() * characters.length)]).join("")
            );
        } else {
            startAnimation();
        }
        return () => clearInterval(intervalRef.current);
    }, [text, speed, revealOnHover, autoStart]);

    return (
        <motion.span
            className={className}
            onMouseEnter={startAnimation}
            onMouseLeave={revealOnHover ? startScramble : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayText}
        </motion.span>
    );
};

export default DecryptedText;
