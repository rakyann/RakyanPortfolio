"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HoverImageLinkProps {
  href: string;
  title: string;
  category: string;
  imageSrc: string;
}

export function HoverImageLink({ href, title, category, imageSrc }: HoverImageLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const x = useSpring(0, { stiffness: 100, damping: 25, mass: 0.5 });
  const y = useSpring(0, { stiffness: 100, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      x.set(e.clientX);
      y.set(e.clientY);
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered, x, y]);

  return (
    <>
      <Link 
        href={href}
        className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-border/50 hover:border-foreground transition-colors"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter group-hover:pl-4 transition-all duration-300">
          {title}
        </h3>
        <span className="text-lg text-muted-foreground font-mono uppercase tracking-widest mt-4 md:mt-0 group-hover:-translate-x-4 transition-transform duration-300">
          {category}
        </span>
      </Link>

      <motion.img
        ref={imageRef}
        src={imageSrc}
        alt={title}
        className={cn(
          "fixed top-0 left-0 w-80 h-96 object-cover rounded-2xl pointer-events-none z-[100] border-4 border-background shadow-2xl",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
