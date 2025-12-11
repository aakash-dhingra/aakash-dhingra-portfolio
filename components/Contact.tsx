'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-white"
                >
                    Communication Array
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { icon: <Mail className="w-6 h-6" />, label: 'Email', href: 'mailto:aakashdhingra1495@gmail.com' },
                        { icon: <Phone className="w-6 h-6" />, label: 'Phone', href: 'tel:+919803054663' },
                        { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aakash-dhingra-03465217a/' },
                        { icon: <Github className="w-6 h-6" />, label: 'GitHub', href: 'https://github.com/aakash-dhingra' },
                    ].map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, color: '#00f3ff' }}
                            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all min-w-[140px] text-gray-300 hover:text-space-accent"
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </motion.a>
                    ))}
                </div>

                <footer className="mt-20 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Aakash Dhingra. All systems nominal.</p>
                </footer>
            </div>
        </section>
    );
}
