import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Rakyan Jenar Sakuntala — UI/UX Designer",
  description: "UI/UX Designer & Information Systems student. Designing intuitive digital experiences by connecting user needs, visual design, and technology.",
  keywords: ["UI/UX Designer", "Product Designer", "Portfolio", "Rakyan Jenar Sakuntala", "Information Systems", "Telkom University", "Figma", "Web Design"],
  authors: [{ name: "Rakyan Jenar Sakuntala" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#111111] selection:bg-[#BEF264] selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
