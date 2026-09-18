export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  keyPoints: string[];
  type: "freelance" | "internship" | "fulltime" | "contract";
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
  achievement?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "freelance-uiux",
    role: "Freelance UI/UX Designer",
    company: "Self-Employed / Independent",
    period: "August 2022 – Present",
    description: "Leading end-to-end design for web and mobile interfaces, connecting user needs with clean visual design and technical feasibility.",
    keyPoints: [
      "Led the end-to-end design process for 5+ web and mobile application features, from identifying user problems and exploring solutions to prototyping and validation.",
      "Established a structured design documentation system that streamlined workflows, improved information accessibility, and strengthened cross-functional collaboration.",
      "Leveraged user behavior insights to refine interface experiences and identify opportunities to improve user engagement."
    ],
    type: "freelance"
  },
  {
    id: "mdmedia",
    role: "Freelance UI/UX Designer",
    company: "MDMedia by Telkom Indonesia",
    period: "March 2025 – August 2025",
    description: "Contributed to enterprise portal and corporate website redesigns, collaborating closely with DevOps and engineering teams.",
    keyPoints: [
      "Contributed to the redesign of MDMedia’s internal portal and corporate website, transforming complex requirements into clear, intuitive, and user-centered interfaces.",
      "Translated Figma designs into responsive HTML, CSS, and Bootstrap while maintaining visual consistency across different screen sizes.",
      "Supported the end-to-end design process for multiple web features, from wireframing and prototyping to usability testing and design refinement.",
      "Collaborated with the DevOps team to bridge design and development, ensuring seamless integration and consistent user experiences across platforms."
    ],
    type: "freelance"
  },
  {
    id: "ideologyst",
    role: "Admin UI8",
    company: "Ideologyst",
    location: "Semarang",
    period: "February 2024 – June 2024",
    description: "Researched digital product design patterns, competitor interfaces, and emerging design trends to support design team decisions.",
    keyPoints: [
      "Researched emerging UI/UX trends, competitor products, and design patterns to inform stronger visual and product design decisions.",
      "Identified opportunities to improve existing designs through competitor analysis, design research, and UI/UX best practices.",
      "Collaborated with the team to explore design directions and improve the quality and consistency of digital experiences."
    ],
    type: "contract"
  },
  {
    id: "callour",
    role: "UI/UX Designer Intern",
    company: "Callour Studio",
    location: "Purwokerto",
    period: "June 2022 – August 2022",
    description: "Foundational internship focused on interface architecture, visual styling, atomic design principles, and collaborative feedback.",
    keyPoints: [
      "Explored visual styling and interface design principles to develop clear and engaging digital interfaces.",
      "Learned and applied interface architecture concepts to structure content and interactions within digital products.",
      "Applied AIDA principles to guide users through key information and actions within interface designs.",
      "Studied Atomic Design principles and explored how interface elements can be structured into reusable components.",
      "Presented design concepts during team discussions, explained design decisions, and incorporated feedback to refine design solutions."
    ],
    type: "internship"
  },
  {
    id: "slab",
    role: "UI/UX Designer Intern",
    company: "Slab! Design Studio",
    location: "Jogja",
    period: "August 2021 – November 2021",
    description: "Explored visual styling and translated design briefs into cohesive interface concepts under mentor guidance.",
    keyPoints: [
      "Developed digital product concepts and portfolio pieces based on design briefs provided by mentors.",
      "Explored different visual styles, interface layouts, and design approaches while refining concepts based on mentor feedback.",
      "Translated 5+ design briefs into digital product designs."
    ],
    type: "internship"
  },
  {
    id: "ohvey",
    role: "UI/UX Designer Intern",
    company: "Ohvey Design Studio",
    location: "Jogja",
    period: "December 2020 – March 2021",
    description: "Early design exploration focused on interface layout fundamentals, typography, and building design components.",
    keyPoints: [
      "Designed various digital interface concepts while exploring different visual styles and UI approaches.",
      "Developed interface components and design elements to build a stronger foundation in visual and interface design.",
      "Completed 5+ design briefs to explore different design directions and develop a distinctive visual style."
    ],
    type: "internship"
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "telkom-univ",
    degree: "Bachelor of Information Systems (S1)",
    institution: "Telkom University Purwokerto",
    period: "2022 – Present",
    details: "GPA: 3.66 / 4.00",
    achievement: "One of the Most Outstanding Students of Institut Teknologi Telkom Purwokerto"
  },
  {
    id: "smk-telkom",
    degree: "Software Engineering (RPL)",
    institution: "Vocational High School of Telkom Purwokerto",
    period: "2019 – 2022"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Design",
    skills: [
      "UI Design",
      "UX Design",
      "Web Design",
      "Mobile App Design",
      "Design Systems",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Usability Testing",
      "User Flow",
      "Sitemap",
      "Responsive Design",
      "Dashboard Design",
      "Information Architecture",
      "Design Thinking",
      "Atomic Design"
    ]
  },
  {
    category: "Tools",
    skills: [
      "Figma",
      "FigJam",
      "Notion",
      "ClickUp",
      "Trello",
      "Slack",
      "Discord",
      "Jitter",
      "Google Calendar"
    ]
  },
  {
    category: "Technical",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap"
    ]
  },
  {
    category: "Additional",
    skills: [
      "Copywriting",
      "UX Writing",
      "Storytelling",
      "Presentation"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    description: "Understanding the problem space, stakeholder context, and project goals."
  },
  {
    step: "02",
    name: "Research",
    description: "Gathering insights through interface audits, competitor analysis, and context exploration."
  },
  {
    step: "03",
    name: "Define",
    description: "Structuring information architecture, user flows, and core interface requirements."
  },
  {
    step: "04",
    name: "Design",
    description: "Iterating from low-fidelity wireframes to polished, responsive high-fidelity UI components."
  },
  {
    step: "05",
    name: "Test",
    description: "Validating usability, reviewing interface states, and refining based on feedback."
  },
  {
    step: "06",
    name: "Deliver",
    description: "Preparing clean design files, responsive specifications, and collaborating with developers."
  }
];
