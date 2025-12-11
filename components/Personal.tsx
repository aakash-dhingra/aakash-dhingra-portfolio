'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Activity, Trophy, FlaskConical } from 'lucide-react';

export default function Personal() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="flex flex-col lg:flex-row items-center justify-center gap-20">

                    {/* The Moon Biosphere */}
                    <div className="relative group">
                        {/* Biosphere Dome Glass Effect */}
                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm z-20">

                            {/* Internal Atmosphere */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-emerald-500/20 mix-blend-overlay" />

                            {/* Floating Elements inside Dome */}
                            <motion.div
                                className="absolute top-1/4 left-1/4 text-emerald-300/80"
                                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Activity size={40} />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-1/3 right-1/4 text-orange-300/80"
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <Utensils size={40} />
                            </motion.div>
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-32 h-32 rounded-full bg-emerald-400/20 blur-2xl" />
                            </motion.div>

                            {/* Reflection Highlight */}
                            <div className="absolute top-4 left-8 w-24 h-12 bg-white/20 rounded-full blur-xl -rotate-12" />
                        </div>

                        {/* Moon Surface Base */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-24 bg-slate-800 rounded-[50%] blur-xl opacity-80 z-10" />

                        {/* Orbiting Satellite */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[140%] h-[140%] rounded-full border border-dashed border-white/10 -translate-x-1/2 -translate-y-1/2 z-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="max-w-xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mb-10"
                        >
                            <h2 className="text-sm font-mono text-emerald-400 tracking-widest mb-2">:: BIOSPHERE DOME ::</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-white">Moon of Tranquility</h3>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                                        <Trophy size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">The Field of Play</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Badminton, Table Tennis, Cricket. Competitive spirit meets strategic thinking. Keeping the momentum high, both on and off the field.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-900/20 hover:border-orange-500/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400 group-hover:scale-110 transition-transform">
                                        <FlaskConical size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">The Culinary Lab</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Experimenting with Flavor and Code. A precise balance of ingredients, timing, and creativity. Cooking is my algorithm for relaxation.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
