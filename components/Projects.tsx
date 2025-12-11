'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Database, GitMerge, Terminal, Cpu, Workflow } from 'lucide-react';
import Typewriter from './Typewriter';

const projects = [
    {
        id: 1,
        title: 'Monolith to Microservices',
        description: 'Decomposed legacy monolith into scalable microservices using NestJS, improving deployment frequency by 300%.',
        icon: <GitMerge className="w-10 h-10 text-orange-400" />,
        tech: ['NestJS', 'Docker', 'K8s'],
        status: 'COMPLETED',
        color: 'border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.2)]',
    },
    {
        id: 2,
        title: 'CI/CD Pipeline Optimization',
        description: 'Automated build and deployment workflows with Azure DevOps, reducing release time from 2 hours to 15 minutes.',
        icon: <Workflow className="w-10 h-10 text-blue-400" />,
        tech: ['Azure DevOps', 'Terraform', 'Bash'],
        status: 'OPTIMIZED',
        color: 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]',
    },
    {
        id: 3,
        title: 'Data Pipeline Engineering',
        description: 'Engineered high-throughput ETL pipelines migrating millions of records from Mainframe to Cloud SQL.',
        icon: <Database className="w-10 h-10 text-emerald-400" />,
        tech: ['Python', 'SQL', 'Redis'],
        status: 'MIGRATED',
        color: 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    },
    {
        id: 4,
        title: 'Micro-Frontend Architecture',
        description: 'Implemented Module Federation in Angular to split giant frontend apps into manageable, independent remotes.',
        icon: <Cpu className="w-10 h-10 text-purple-400" />,
        tech: ['Angular', 'RxJS', 'Webpack'],
        status: 'DEPLOYED',
        color: 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]',
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section className="py-20 relative overflow-hidden min-h-screen flex flex-col justify-center" ref={containerRef}>
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-space-accent tracking-widest font-mono mb-4">
                        <Typewriter
                            text=":: KEY MISSIONS - DEPLOYMENT HISTORY ::"
                            speed={50}
                            delay={500}
                        />
                    </h2>
                    <div className="h-1 w-24 bg-space-accent mx-auto rounded-full shadow-[0_0_10px_#00f3ff]" />
                </div>
            </div>

            {/* Command Console Container */}
            <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
                <div className="flex gap-8 px-8 md:px-20 min-w-max">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className={`
                                relative w-[350px] md:w-[450px] bg-space-deep/90 backdrop-blur-xl 
                                border-2 ${project.color} rounded-xl p-6 
                                flex flex-col justify-between group overflow-hidden
                            `}
                        >
                            {/* Dashboard Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                            {/* Header */}
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="p-3 bg-space-black/50 rounded-lg border border-white/10 group-hover:border-white/30 transition-colors">
                                    {project.icon}
                                </div>
                                <div className="text-xs font-mono text-space-accent border border-space-accent/30 px-2 py-1 rounded bg-space-accent/5">
                                    STATUS: {project.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-space-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Footer / Tech Stack */}
                            <div className="relative z-10 pt-4 border-t border-white/10 flex gap-2 flex-wrap">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-gray-300 bg-white/5 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Scanning Line Animation on Hover */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-space-accent/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
