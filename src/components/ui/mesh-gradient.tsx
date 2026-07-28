"use client";

import { motion } from "framer-motion";

export function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/30 blur-[120px] mix-blend-screen"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-500/20 blur-[100px] mix-blend-screen"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-rose-500/20 blur-[150px] mix-blend-screen"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </div>
  );
}
