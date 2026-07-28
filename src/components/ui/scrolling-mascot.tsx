"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollingMascot() {
  const { scrollYProgress } = useScroll();
  
  // Make the scroll movement feel smooth and bouncy
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Move horizontally across the screen based on scroll
  // It will go from -20vw (left edge) to 120vw (right edge)
  const x = useTransform(springScroll, [0, 1], ["-20vw", "100vw"]);
  
  // Add a slight bobbing effect while moving
  const y = useTransform(springScroll, [0, 0.25, 0.5, 0.75, 1], [0, -20, 0, -20, 0]);
  
  // Rotate slightly based on scroll direction/speed
  const rotate = useTransform(springScroll, [0, 1], [0, 360]);

  return (
    <div className="fixed bottom-10 left-0 w-full h-20 pointer-events-none z-50 overflow-visible">
      <motion.div
        style={{ x, y }}
        className="absolute bottom-0 text-5xl md:text-6xl"
      >
        {/* We use a playful emoji, but we can animate it */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🐕
        </motion.div>
      </motion.div>
    </div>
  );
}
