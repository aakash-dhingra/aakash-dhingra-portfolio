'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface PlanetProps {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'sun';
    color?: string; // Tailwind color class or hex
    label?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    delay?: number;
}

function Planet({
    size = 'md',
    color = 'bg-space-purple',
    label,
    children,
    className,
    onClick,
    delay = 0
}: PlanetProps) {
    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
        xl: 'w-64 h-64',
        sun: 'w-80 h-80 md:w-96 md:h-96',
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <motion.div
                className={clsx(
                    'rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-white/10',
                    sizeClasses[size],
                    color,
                    className
                )}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(191, 0, 255, 0.4)" }}
                onClick={onClick}
            >
                {/* Atmosphere/Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                {/* Content inside planet */}
                <div className="relative z-10 text-white text-center p-4">
                    {children}
                </div>
            </motion.div>

            {label && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.2 }}
                    className="text-center text-white font-bold tracking-widest uppercase text-sm md:text-base bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md"
                >
                    {label}
                </motion.div>
            )}
        </div>
    );
}

export default React.memo(Planet);
