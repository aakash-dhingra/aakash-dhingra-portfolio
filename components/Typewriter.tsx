'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
    delay?: number;
}

export default function Typewriter({ text, speed = 50, className = "", delay = 0 }: TypewriterProps) {
    const [displayedCount, setDisplayedCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        // Reset if text changes
        setDisplayedCount(0);

        const interval = setInterval(() => {
            setDisplayedCount((prev) => {
                if (prev < text.length) {
                    return prev + 1;
                }
                clearInterval(interval);
                return prev;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return (
        <span className={`${className} inline-flex items-center`}>
            {text.slice(0, displayedCount)}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[0.5em] h-[1.2em] bg-space-accent ml-1 align-middle"
            />
        </span>
    );
}
