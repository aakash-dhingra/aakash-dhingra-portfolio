'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Planet from './Planet';
import Typewriter from './Typewriter';

const roles = [
    {
        id: 1,
        title: 'Graduate Engineer Trainee',
        company: 'Daimler Truck Innovation Center India',
        period: 'Aug 2021 - Mar 2022',
        description: 'Data Engineering/ETL',
        summary: 'Data Engineer to Backend Developer',
        color: 'bg-blue-600',
        size: 'md',
    },
    {
        id: 2,
        title: 'Software Developer',
        company: 'Daimler Truck Innovation Center India',
        period: 'Apr 2022 - Oct 2023',
        description: 'Backend/DevOps',
        summary: 'Leading Microservices Projects',
        color: 'bg-indigo-600',
        size: 'lg',
    },
    {
        id: 3,
        title: 'Senior Software Developer',
        company: 'Daimler Truck Innovation Center India',
        period: 'Nov 2023 - Present',
        description: 'Full Stack/Microservices Lead',
        summary: 'Architecting Scalable Systems',
        color: 'bg-purple-600',
        size: 'xl',
    },
];

export default function Timeline() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-space-accent tracking-widest font-mono">
                        <Typewriter
                            text=":: PROFESSIONAL JOURNEY - MISSION LOG ::"
                            speed={50}
                            delay={500}
                        />
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Pulsating Connecting Line (Orbit) */}
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-space-accent to-transparent -translate-x-1/2 md:block hidden shadow-[0_0_15px_#00f3ff]"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {roles.map((role, index) => {
                        // Dynamic margin for the planet container to create relative spacing
                        const planetMargin = {
                            md: 'mx-4 md:mx-8',
                            lg: 'mx-4 md:mx-12',
                            xl: 'mx-4 md:mx-16',
                        }[role.size] || 'mx-4 md:mx-8';

                        return (
                            <div key={role.id} className={`flex flex-col md:flex-row items-center justify-center mb-32 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative group`}>

                                {/* Content - Fixed Width */}
                                <motion.div
                                    className={`w-full md:w-[38%] ${index % 2 === 0 ? 'text-center md:text-left' : 'text-center md:text-right'} z-10`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="bg-space-deep/80 backdrop-blur-md p-6 rounded-xl border border-space-accent/20 hover:border-space-accent/50 transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                        <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                                        <h4 className="text-xl text-space-accent mb-2">{role.company}</h4>
                                        <p className="text-gray-400 mb-4 font-mono text-sm">{role.period}</p>
                                        <div className="inline-block bg-space-purple/30 px-4 py-2 rounded-full text-sm text-white border border-space-accent/30">
                                            {role.description}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Planet Node & Summary Wrapper */}
                                <div className={`relative z-20 my-8 md:my-0 ${planetMargin} flex items-center justify-center`}>
                                    <Planet
                                        size={role.size as any}
                                        color={role.color}
                                        className="shadow-[0_0_50px_rgba(191,0,255,0.4)] ring-4 ring-space-black ring-opacity-50"
                                    >
                                        <span className="text-2xl font-bold">{index + 1}</span>
                                    </Planet>
                                    {/* Atmospheric Glow */}
                                    <div className="absolute inset-[-20px] rounded-full bg-space-glow/20 blur-xl -z-10 animate-pulse-slow" />

                                    {/* Fly-in Summary - Positioned Relative to Planet */}
                                    <motion.div
                                        className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0
                                            ? 'right-full mr-6' // Content Right -> Summary Left of Planet
                                            : 'left-full ml-6'  // Content Left -> Summary Right of Planet
                                            } hidden md:block pointer-events-none whitespace-nowrap`}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                    >
                                        <div className="text-space-accent/60 text-sm font-mono tracking-wider uppercase bg-space-black/80 px-3 py-1 rounded border border-space-accent/20">
                                            {role.summary}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty Space for alignment - Fixed Width */}
                                <div className="w-full md:w-[38%]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
