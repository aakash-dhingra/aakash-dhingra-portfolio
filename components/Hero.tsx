'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from './Typewriter';
import { FileText, User } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 z-10">
            {/* Cockpit / Scanner View */}
            <div className="relative mb-12 group">
                {/* Rotating Scanner Rings */}
                <motion.div
                    className="absolute inset-[-20px] rounded-full border border-space-accent/30 border-dashed"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-[-10px] rounded-full border border-space-glow/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Profile Photo Container with 3D Pop-out Effect */}
                <div className="relative w-64 h-64 mt-12 mb-8 group">
                    {/* The Circle Base (Clips the bottom body) */}
                    <div className="absolute inset-0 rounded-full border-4 border-space-accent/50 bg-space-deep overflow-hidden z-10 shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-black/50 z-10" />
                        <div className="relative w-full h-full">
                            <Image
                                src="/Aakash-Dhingra (1).png"
                                alt="Aakash Dhingra"
                                fill
                                className="object-cover object-top scale-[1.35] translate-y-6"
                                priority
                            />
                        </div>
                    </div>

                    {/* The Pop-out Layer (Shows the head above the circle) */}
                    {/* We use a larger container for the pop-out layer to allow the head to extend well beyond the circle bounds */}
                    <div className="absolute -inset-10 z-20 pointer-events-none flex items-center justify-center" style={{ clipPath: 'inset(0 0 50% 0)' }}>
                        <div className="relative w-64 h-64">
                            <Image
                                src="/Aakash-Dhingra (1).png"
                                alt="Aakash Dhingra"
                                fill
                                className="object-cover object-top scale-[1.35] translate-y-6"
                                priority
                            />
                        </div>
                    </div>

                    {/* Scanning Line Effect (Confined to circle) */}
                    <div className="absolute inset-0 rounded-full overflow-hidden z-30 pointer-events-none">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-space-accent/50 shadow-[0_0_10px_#00f3ff]"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </div>
            </div>

            {/* Main Text Content */}
            <div className="text-center z-10 px-4 max-w-4xl">
                <div className="mb-6">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-2">
                        <Typewriter
                            text="Aakash Dhingra"
                            speed={50}
                            delay={500}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-space-accent to-space-glow"
                        />
                    </h1>
                    <h2 className="text-xl md:text-3xl font-light tracking-widest text-space-accent/80">
                        <Typewriter
                            text="Full Stack Navigator"
                            speed={50}
                            delay={1500}
                        />
                    </h2>
                </div>

                <div className="text-lg md:text-2xl font-light text-space-accent/80 mb-8 h-8">
                    <Typewriter
                        text="Architecting Scalable Systems and Automating DevOps"
                        speed={30}
                        delay={2500}
                    />
                </div>

                {/* Resume HUD */}
                <motion.a
                    href="/resume.pdf" // Placeholder link
                    target="_blank"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-space-blue/30 backdrop-blur-md border border-space-accent/30 rounded-lg group hover:bg-space-accent/10 transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Glitch Effect Overlay */}
                    <div className="absolute inset-0 bg-space-accent/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />

                    <FileText className="w-5 h-5 text-space-accent" />
                    <div className="text-left">
                        <div className="text-xs text-space-accent/60 uppercase tracking-wider">Mission Brief</div>
                        <div className="text-sm font-semibold text-white">View Professional Summary</div>
                    </div>
                </motion.a>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-space-accent/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest font-mono">Initialize Descent</span>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-space-accent to-transparent" />
            </motion.div>
        </section>
    );
}
