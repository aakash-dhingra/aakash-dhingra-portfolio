'use client';

import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import { Rocket } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full overflow-hidden">
      {/* Progress Bar / Spaceship Tracker */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-space-accent origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Spaceship Indicator */}
      <motion.div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 text-space-accent hidden md:block"
        style={{
          y: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }).get() * 100
        }}
      >
        <Rocket className="w-6 h-6 rotate-45" />
      </motion.div>

      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Personal />
      <Contact />
    </div>
  );
}
