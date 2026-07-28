"use client";

import { motion } from "framer-motion";
import { Brain, Code, Lightbulb, Users } from "lucide-react";

const SKILLS = {
  "Core Design": ["UI Design", "Design Thinking", "User Research", "Wireframing", "Prototyping", "User Flow", "Sitemap"],
  "Specialties": ["Mobile App", "Dashboard", "Web Design", "Responsive", "Storytelling", "Design Preview", "Copywriting"],
  "Tools": ["Figma", "Notion", "Trello", "Clickup", "Slack", "Jitter", "Discord", "Google Calendar"],
  "Frontend": ["HTML & CSS", "Bootstrap", "TailwindCSS (Basic)", "Next.js (Basic)"]
};

const EXPERIENCES = [
  {
    period: "Maret 2025 - Agustus 2025",
    role: "Freelance UI/UX Designer",
    company: "MDMedia By Telkom Indonesia",
    details: [
      "Contributed to real projects including MD Media’s internal portal redesign and external corporate website, ensuring modern and user-friendly interfaces.",
      "Translated Figma designs into responsive HTML, CSS, and Bootstrap code, maintaining consistency with design systems and accessibility standards.",
      "Facilitated the end-to-end design process for multiple web features, from wireframing to testing, which improved usability and streamlined workflows.",
      "Collaborated with the DevOps team to align frontend development with backend integration, ensuring seamless functionality across platforms."
    ]
  },
  {
    period: "Agustus 2022 - September 2024",
    role: "Freelance UI/UX Designer",
    company: "Independent",
    details: [
      "Facilitated the design process for more than 5 features of web and mobile applications from concept to testing.",
      "Established comprehensive design guidelines enhancing productivity by 30%.",
      "Improved website user experience, increasing website traffic by 20%."
    ]
  },
  {
    period: "Februari 2024 - Juni 2024",
    role: "Admin UI8",
    company: "Ideologyst (Semarang)",
    details: [
      "Researched trendy design themes and helped project management using Notion to discuss design trends.",
      "Established over 30 improvement projects by competitor analysis and best practices in UI/UX design, achieving an improvement completion rate of 90%."
    ]
  },
  {
    period: "Juni 2022 - Agustus 2022",
    role: "UI/UX Designer Intern",
    company: "Callour Studio (Purwokerto)",
    details: [
      "Built a robust design system and 20+ reusable components, reducing design time by 30%.",
      "Conducted usability testing with a minimum of participants per test to validate design decisions, achieving an average usability score of 85% or higher.",
      "Translated 2+ design briefs from clients into digital product design during a 3-month internship."
    ]
  },
  {
    period: "Agustus 2021 - November 2021",
    role: "UI/UX Designer Intern",
    company: "Slab! Design Studio (Jogja)",
    details: [
      "Reduced design time by 80% when working on design portfolios by creating robust design systems and 10+ reusable components.",
      "Translated 5+ design briefs from mentors into digital product designs."
    ]
  },
  {
    period: "Desember 2020 - Maret 2021",
    role: "UI/UX Designer Intern",
    company: "Ohvey Design Studio (Jogja)",
    details: [
      "Focused on crafting various design portfolio pieces and developing key design components.",
      "Worked on 5+ design briefs to find a definitive design style for self-branding."
    ]
  }
];

const EDUCATIONS = [
  {
    period: "2022 - Present",
    degree: "S1 Information Systems",
    school: "Telkom University Purwokerto",
    details: "IPS 3.66 out of 4.00. Recognized as one of the Most Outstanding Students of Institute Teknologi Telkom Purwokerto."
  },
  {
    period: "2019 - 2022",
    degree: "Software Engineering",
    school: "Vocational High School of Telkom Purwokerto",
    details: ""
  }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#BEF264] selection:text-black">
      <div className="flex-grow container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Designing with purpose, building with precision.
          </h1>
          <p className="text-xl text-zinc-600 font-medium mb-12 leading-relaxed">
            Hi, I'm Rakyan Jenar Sakuntala, an outstanding Information Systems student from Telkom University Purwokerto with a deep passion for UI/UX design. I actively participate in prestigious events, competitions, and startup incubations. I leverage diverse industry methodologies to deliver exceptional user experiences, bridging the gap between human needs and business goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
              <Brain className="w-8 h-8 mb-4 text-[#111111]" />
              <h3 className="text-xl font-semibold mb-2">Systems Thinker</h3>
              <p className="text-zinc-600 text-sm">
                I look beyond isolated screens. I design scalable systems and component libraries that ensure consistency and speed up development.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
              <Lightbulb className="w-8 h-8 mb-4 text-[#111111]" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-zinc-600 text-sm">
                I dive deep into user research and data to uncover core issues, avoiding assumptions to deliver solutions that actually work.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
              <Users className="w-8 h-8 mb-4 text-[#111111]" />
              <h3 className="text-xl font-semibold mb-2">Collaborator</h3>
              <p className="text-zinc-600 text-sm">
                Design is a team sport. I work closely with PMs to align on strategy and speak the same language as engineers for seamless handoffs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
              <Code className="w-8 h-8 mb-4 text-[#111111]" />
              <h3 className="text-xl font-semibold mb-2">Technical Empathy</h3>
              <p className="text-zinc-600 text-sm">
                With a background in Software Engineering and Information Systems, I design with feasibility in mind, ensuring my prototypes translate flawlessly into code.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">My Skillset</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-4 text-[#111111]">{category}</h3>
                <ul className="flex flex-col gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-zinc-600 flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          <div className="flex flex-col gap-10 mb-20">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <div className="w-48 text-zinc-400 font-mono text-sm shrink-0 md:pt-1">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-[#88c226] transition-colors">{exp.role}</h3>
                  <p className="text-zinc-500 mt-1 font-medium">{exp.company}</p>
                  <ul className="mt-4 text-zinc-700 leading-relaxed flex flex-col gap-2 list-disc pl-4 marker:text-zinc-400 text-sm">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
          <div className="flex flex-col gap-8">
            {EDUCATIONS.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-48 text-zinc-400 font-mono text-sm shrink-0 md:pt-1">
                  {edu.period}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-zinc-500 mt-1 font-medium">{edu.school}</p>
                  {edu.details && (
                    <p className="mt-2 text-zinc-600 leading-relaxed text-sm">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full Dedicated Brand Footer */}
      <footer className="w-full bg-white border-t border-black/5 py-12 mt-24">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bold text-2xl tracking-tighter">Rakyan.</div>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="https://github.com/rakyann" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
            <a href="mailto:rkyan22@gmail.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/rakyan-sakuntala-9a9841219/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-zinc-400">© 2026 Rakyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
