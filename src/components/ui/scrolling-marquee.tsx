"use client";

import { motion } from "framer-motion";

export function ScrollingMarquee({ items, speed = 40 }: { items: string[]; speed?: number }) {
  // We duplicate the items to create a seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-foreground py-6 flex items-center shadow-xl">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-foreground to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-foreground to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-background">
              {item}
            </span>
            <span className="mx-8 text-rose-500 text-3xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
