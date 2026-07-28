"use client";

import { motion } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom ease out cubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  children,
  className = "",
  delay = 0,
}: AnimationProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.5,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover absolute top-[-10%]"
        initial={{ y: "10%" }}
        whileInView={{ y: "-10%" }}
        viewport={{ once: false }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
      />
    </div>
  );
}
