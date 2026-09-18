"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-black/5 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
            R
          </div>
          <span className="font-bold tracking-tight text-lg text-[#111111]">
            Rakyan<span className="text-zinc-400 font-normal">.design</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-black py-1",
                  isActive ? "text-black font-semibold" : "text-zinc-600"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Download CV CTA */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#111111] text-white hover:bg-black px-4 py-2 rounded-full transition-all hover:scale-105 shadow-sm"
          >
            Download CV <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden relative z-10 p-2 text-[#111111] rounded-full border border-black/10 bg-white/90 backdrop-blur-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl border border-black/10 p-5 rounded-2xl shadow-xl flex flex-col gap-3 md:hidden mt-2"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium py-2 px-3 text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-black/5">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-sm font-bold bg-[#111111] text-white py-3 rounded-xl shadow-sm hover:bg-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
