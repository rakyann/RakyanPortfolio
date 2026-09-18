import Link from "next/link";
import { Mail, Download } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white py-16 md:py-20 mt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          {/* Brand & Positioning Column */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
                R
              </div>
              <span className="font-bold tracking-tight text-xl text-[#111111]">
                Rakyan Jenar Sakuntala
              </span>
            </Link>
            <p className="text-zinc-600 text-base max-w-md leading-relaxed font-medium">
              UI/UX Designer & Information Systems Student. Focused on designing intuitive, practical digital experiences and bridging design with development.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/rakyan-sakuntala-9a9841219/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black/10 bg-zinc-50 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-[#BEF264] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/rakyann"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black/10 bg-zinc-50 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-[#BEF264] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:rkyan22@gmail.com"
                className="w-10 h-10 rounded-full border border-black/10 bg-zinc-50 flex items-center justify-center text-zinc-700 hover:text-black hover:bg-[#BEF264] transition-all"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-400 mb-1">Navigation</h4>
            <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/#work" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              Selected Work
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              About Me
            </Link>
            <Link href="/#experience" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              Experience Timeline
            </Link>
            <Link href="/work" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              All Projects Archive
            </Link>
          </div>

          {/* Contact & CV Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-400 mb-1">Get In Touch</h4>
            <a
              href="mailto:rkyan22@gmail.com"
              className="text-sm font-medium text-zinc-900 hover:underline transition-colors"
            >
              rkyan22@gmail.com
            </a>
            <p className="text-xs text-zinc-500">Purwokerto, Central Java, Indonesia</p>
            <div className="pt-2">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold bg-[#111111] text-white hover:bg-black px-4 py-2.5 rounded-full transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Download CV (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-medium">
          <p>© {new Date().getFullYear()} Rakyan Jenar Sakuntala. Designed with clarity & user empathy.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
