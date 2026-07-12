import Link from "next/link";
import { Mail } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm mt-24">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                R
              </div>
              <span className="font-semibold tracking-tight text-lg">
                Rakyan<span className="text-muted-foreground">.design</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              A Product Designer & UX Researcher focused on building thoughtful, intuitive, and highly functional digital experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/rakyan-sakuntala-9a9841219/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors text-foreground">
                <LinkedinIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/rakyann" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors text-foreground">
                <GithubIcon className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:rkyan22@gmail.com" className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors text-foreground">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Sitemap</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About Me</Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Work & Case Studies</Link>
              </li>
              <li>
                <Link href="/ai-workflow" className="text-muted-foreground hover:text-foreground transition-colors text-sm">AI Workflow</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:hello@rakyan.design" className="text-muted-foreground hover:text-foreground transition-colors text-sm">hello@rakyan.design</a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Download Resume</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rakyan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision. Built with Next.js & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
