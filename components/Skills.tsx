'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Hexagon, Box, Layers } from 'lucide-react';

const skillGroups = [
    {
        category: 'Core Languages',
        icon: <Code className="w-6 h-6" />,
        skills: [
            { name: 'NestJS', size: 'lg' },
            { name: 'Angular', size: 'lg' },
            { name: 'Node.js', size: 'md' },
            { name: 'Spring Boot', size: 'md' },
            { name: 'Python', size: 'sm' },
            { name: 'Microservices', size: 'md' },
        ],
        color: 'text-cyan-400',
        glow: 'shadow-[0_0_20px_rgba(34,211,238,0.4)]',
        beam: 'stroke-cyan-400',
    },
    {
        category: 'Cloud & DevOps',
        icon: <Cloud className="w-6 h-6" />,
        skills: [
            { name: 'Kubernetes', size: 'lg' },
            { name: 'Azure', size: 'lg' },
            { name: 'Docker', size: 'md' },
            { name: 'CI/CD', size: 'md' },
            { name: 'Terraform', size: 'sm' },
        ],
        color: 'text-purple-400',
        glow: 'shadow-[0_0_20px_rgba(192,132,252,0.4)]',
        beam: 'stroke-purple-400',
    },
    {
        category: 'Data Systems',
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: 'SQL', size: 'md' },
            { name: 'MongoDB', size: 'md' },
            { name: 'Redis', size: 'sm' },
            { name: 'ETL', size: 'md' },
            { name: 'PostgreSQL', size: 'md' },
        ],
        color: 'text-emerald-400',
        glow: 'shadow-[0_0_20px_rgba(52,211,153,0.4)]',
        beam: 'stroke-emerald-400',
    },
];

export default function Skills() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-24 text-white"
                >
                    Satellite System
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {skillGroups.map((group, groupIndex) => (
                        <SkillGroup key={group.category} group={group} index={groupIndex} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillGroup({ group, index }: { group: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="relative h-[500px] flex items-center justify-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Central Hub */}
            <div className={`relative z-20 w-20 h-20 rounded-full bg-space-deep border-2 ${group.color.replace('text', 'border')} flex items-center justify-center ${group.glow} transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                <div className={`${group.color} animate-pulse`}>{group.icon}</div>
                <div className="absolute -bottom-8 whitespace-nowrap text-white font-bold tracking-wider text-sm">
                    {group.category}
                </div>
            </div>

            {/* Orbiting Crystals */}
            {group.skills.map((skill: any, i: number) => {
                const angle = (i / group.skills.length) * 2 * Math.PI;
                const radius = 160; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <React.Fragment key={skill.name}>
                        {/* Laser Beam */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 overflow-visible">
                            <motion.line
                                x1="50%"
                                y1="50%"
                                x2={`calc(50% + ${x}px)`}
                                y2={`calc(50% + ${y}px)`}
                                className={`${group.beam} stroke-1`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: isHovered ? 1 : 0,
                                    opacity: isHovered ? 0.6 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </svg>

                        {/* Crystal Node */}
                        <motion.div
                            className={`absolute z-10 flex items-center justify-center`}
                            style={{ x, y }} // Initial position
                            animate={{
                                rotate: isHovered ? 360 : 0,
                                scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 0.3 }
                            }}
                        >
                            <div
                                className={`
                                    relative flex items-center justify-center
                                    ${skill.size === 'lg' ? 'w-28 h-28' : skill.size === 'md' ? 'w-24 h-24' : 'w-20 h-20'}
                                    bg-space-black/80 backdrop-blur-sm border ${group.color.replace('text', 'border')}
                                    ${skill.size === 'lg' ? 'border-2' : 'border'}
                                    hover:bg-space-accent/10 transition-colors cursor-default
                                    clip-path-hexagon
                                `}
                                style={{
                                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                                }}
                            >
                                <span className={`text-center text-white font-medium ${skill.size === 'lg' ? 'text-sm' : 'text-xs'} px-2`}>
                                    {skill.name}
                                </span>

                                {/* Crystal Facets Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </React.Fragment>
                );
            })}

            {/* Orbit Ring Visual */}
            <div className={`absolute inset-0 rounded-full border border-dashed ${group.color.replace('text', 'border')}/20 w-[320px] h-[320px] m-auto pointer-events-none animate-spin-slow`} />
        </motion.div>
    );
}
