export interface CaseStudySection {
  title: string;
  subtitle?: string;
  description?: string;
  content: string;
  bulletPoints?: string[];
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  color: string;
  heroImage: string;
  galleryImages?: string[];
  link?: string;
  isOngoing?: boolean;
  
  overview: {
    role: string;
    timeline: string;
    tools: string[];
    deliverables: string[];
    productType: string;
  };

  problem: {
    title: string;
    context: string;
    coreChallenge: string;
  };

  myRole: {
    description: string;
    responsibilities: string[];
  };

  research?: {
    approach: string;
    insights: string[];
  };

  informationArchitecture?: {
    description: string;
    keyDecisions: string[];
  };

  wireframing?: {
    description: string;
    decisions: string[];
  };

  visualDesign: {
    description: string;
    principles: string[];
  };

  designSystem?: {
    description: string;
    components: string[];
  };

  finalUi: {
    description: string;
    highlights: string[];
  };

  testingAndHandoff?: {
    description: string;
    collaborationDetails: string[];
  };

  reflection: {
    learnings: string;
    nextSteps?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "mdmedia-portal",
    title: "MDMedia Internal Portal & Corporate Web",
    category: "Enterprise Portal & B2B Dashboard",
    shortDescription: "Redesigning an enterprise portal and corporate website to streamline daily employee workflows and modernize interface architecture.",
    color: "from-blue-500/10 to-indigo-500/10",
    heroImage: "/mdmedia_desktop.jpg",
    galleryImages: ["/mdmedia_desktop.jpg", "/mdmedia_figma.png", "/mdm1.png"],
    isOngoing: false,
    
    overview: {
      role: "UI/UX Designer",
      timeline: "March 2025 – August 2025",
      tools: ["Figma", "HTML", "CSS", "Bootstrap", "Notion", "Slack"],
      deliverables: ["User Flow & Wireframes", "Figma Design System", "Responsive HTML/CSS/Bootstrap Code", "DevOps Handoff"],
      productType: "Enterprise Web Portal & Corporate Website"
    },

    problem: {
      title: "Navigation Friction in Complex Enterprise Workflows",
      context: "MDMedia (by Telkom Indonesia) required a unified redesign of its internal employee portal and public corporate website. The previous internal system suffered from cluttered navigation, inconsistent interface patterns, and poor mobile responsiveness, which created daily friction for staff attempting routine tasks.",
      coreChallenge: "How might we transform a dense, multi-tiered enterprise portal into an intuitive, modern interface that helps team members find tools quickly and complete daily workflows without cognitive overload?"
    },

    myRole: {
      description: "As UI/UX Designer, I led the end-to-end interface design process for core web features, bridged design decisions with frontend development, and collaborated closely with the DevOps team.",
      responsibilities: [
        "Analyzed existing interface structures and pain points in employee navigation.",
        "Created low-fidelity wireframes and iterative high-fidelity Figma prototypes.",
        "Built and maintained a modular UI component library for consistent portal elements.",
        "Translated Figma designs into responsive HTML, CSS, and Bootstrap templates.",
        "Collaborated directly with DevOps and engineering teams to ensure seamless implementation and layout consistency."
      ]
    },

    research: {
      approach: "Conducted heuristic audits on the legacy portal and held stakeholder discussions to identify critical daily navigation paths.",
      insights: [
        "Employees frequently struggled with deep nested menus to locate routine approval and request forms.",
        "A modular, card-based dashboard layout was preferred to give users immediate access to their most frequent tasks.",
        "Responsive adaptability across laptops and mobile devices was essential for operational flexibility."
      ]
    },

    informationArchitecture: {
      description: "Restructured the portal hierarchy to group tools by daily workflow frequency rather than organizational departmental silos.",
      keyDecisions: [
        "Simplified the primary sidebar navigation to highlight top-level operational domains.",
        "Introduced a quick-access dashboard widget system for pending tasks and notifications.",
        "Standardized search and filter patterns across all internal directories and tables."
      ]
    },

    wireframing: {
      description: "Iterated through wireframes to find the right balance between data density and whitespace, ensuring enterprise tables remained readable.",
      decisions: [
        "Standardized table layouts with sticky headers, clear status badges, and inline actions.",
        "Designed modal dialogs for multi-step approvals to keep users in context without full page reloads.",
        "Refined responsive breakpoints to ensure complex tables adapt gracefully to tablet and mobile screens."
      ]
    },

    visualDesign: {
      description: "Established a clean, professional visual identity prioritizing clarity, legibility, and visual hierarchy.",
      principles: [
        "High-contrast, accessible neutral color palette accented by brand colors.",
        "Strict typographic hierarchy using clean sans-serif typography for rapid scanning.",
        "Consistent spacing scale and subtle border styling to replace heavy visual clutter."
      ]
    },

    designSystem: {
      description: "Developed reusable component specifications in Figma and translated them into Bootstrap utilities for the engineering team.",
      components: [
        "Buttons with clearly defined default, hover, active, and disabled states.",
        "Form input fields, dropdowns, and search bars with validation states.",
        "Status badges, notification toasts, and metric cards.",
        "Responsive data table components with sorting and pagination."
      ]
    },

    finalUi: {
      description: "Delivered comprehensive high-fidelity Figma screens and corresponding responsive frontend templates.",
      highlights: [
        "Modular dashboard view providing at-a-glance status updates.",
        "Intuitive navigation bar and contextual breadcrumbs.",
        "Clean, responsive layouts tested across multiple viewport sizes."
      ]
    },

    testingAndHandoff: {
      description: "Collaborated closely with engineering and DevOps throughout the development cycle to bridge design and code.",
      collaborationDetails: [
        "Conducted design review walkthroughs with frontend engineers to explain component behavior and micro-interactions.",
        "Provided responsive HTML/CSS/Bootstrap starter code to ensure 1:1 fidelity with Figma files.",
        "Worked with DevOps to test layout rendering and resolve UI edge cases across deployment environments."
      ]
    },

    reflection: {
      learnings: "Working on MDMedia reinforced the immense value of technical empathy. Understanding HTML, CSS, and Bootstrap enabled me to design interfaces that were not only visually polished and user-friendly, but also pragmatic and efficient for developers to implement.",
      nextSteps: "Continue deepening knowledge in scalable enterprise design systems and component-driven architecture."
    }
  },
  {
    slug: "gani-consulting",
    title: "CV Gani Pranata - Psychology & HR Platform",
    category: "Tele-Health & Corporate Platform",
    shortDescription: "Designing a modern tele-psychology and corporate consulting web platform with intuitive consultation flows and practitioner management interfaces.",
    color: "from-emerald-500/10 to-purple-500/10",
    heroImage: "/gani_header.png",
    galleryImages: ["/gani_header.png", "/gani_hero.png"],
    isOngoing: true,
    
    overview: {
      role: "UI/UX Designer",
      timeline: "Ongoing (In Active Development)",
      tools: ["Figma", "Tailwind CSS"],
      deliverables: ["Web Interface Design", "Client Consultation User Flow", "Practitioner Dashboard UI"],
      productType: "Tele-Consultation Web Application"
    },

    problem: {
      title: "Bridging the Gap Between Clients and Psychological Support",
      context: "CV Gani Pranata Consulting provides corporate HR consulting and psychological assessment services. Their existing web presence was static, making it difficult for clients seeking consultations to easily understand service offerings, schedule appointments, or interact smoothly with counselors.",
      coreChallenge: "How might we design a calm, approachable, and trustworthy digital experience that simplifies consultation onboarding for clients while supporting administrative workflows for psychologists?"
    },

    myRole: {
      description: "Designed the client-facing responsive website, consultation onboarding flows, and the psychologist session interface layout in Figma.",
      responsibilities: [
        "Mapped the end-to-end client consultation journey from discovery to session completion.",
        "Designed clean, approachable interface layouts in Figma with an emphasis on clarity and reassurance.",
        "Created user flows for appointment booking and consultation messaging screens.",
        "Structured practitioner admin layouts for viewing client notes and session records."
      ]
    },

    research: {
      approach: "Analyzed tele-health interface patterns and conducted stakeholder discussions with consulting staff to understand client anxieties and onboarding bottlenecks.",
      insights: [
        "Users seeking psychological services require an interface that feels empathetic, private, and uncluttered.",
        "Service pricing, psychologist credentials, and consultation steps must be transparent to build immediate trust.",
        "Practitioners need structured, simple views to review consultation records quickly."
      ]
    },

    informationArchitecture: {
      description: "Organized the platform into distinct, intuitive sections for public visitors, registered clients, and consulting practitioners.",
      keyDecisions: [
        "Structured the landing page to clearly distinguish between Individual Counseling and Corporate HR services.",
        "Designed a straightforward 3-step consultation booking flow.",
        "Created dedicated portal views for managing ongoing consultation notes."
      ]
    },

    wireframing: {
      description: "Iterated on wireframes to minimize form friction and ensure vital information remained visible at all times.",
      decisions: [
        "Replaced lengthy multi-field forms with step-by-step progressive disclosure.",
        "Designed clean chat and session views with ample whitespace and clear timestamping.",
        "Ensured responsive compatibility for clients accessing the site from mobile browsers."
      ]
    },

    visualDesign: {
      description: "Selected a calming, reassuring color palette and clean typography to foster trust and comfort.",
      principles: [
        "Soft emerald and neutral tones to convey peace, wellness, and reliability.",
        "Clear typographic scale with ample line spacing for comfortable reading.",
        "Rounded UI elements and gentle card borders to create a friendly, approachable atmosphere."
      ]
    },

    finalUi: {
      description: "Crafted high-fidelity Figma screens for both public promotional pages and interactive consultation views.",
      highlights: [
        "Clean, reassuring landing page introducing psychology services and consultants.",
        "Intuitive consultation room interface with distraction-free layout.",
        "Practitioner management view for reviewing schedules and session documentation."
      ]
    },

    reflection: {
      learnings: "Designing for tele-health highlighted the critical importance of emotional design. Every micro-copy decision, color choice, and form layout plays a direct role in creating a safe, trustworthy environment for users in need of support.",
      nextSteps: "Continue refining interaction states and validating practitioner workflow feedback during the ongoing development phase."
    }
  },
  {
    slug: "olivia-ralph-wedding",
    title: "Olivia & Ralph - Interactive Wedding Platform",
    category: "Interactive Event Web Application",
    shortDescription: "A mobile-first digital wedding platform designed for seamless guest interaction, digital RSVP, and zero-friction guest photo sharing.",
    color: "from-amber-500/10 to-rose-500/10",
    heroImage: "/wedding_invitation.png",
    galleryImages: ["/wedding_invitation.png"],
    link: "https://example-wedding-invitation.vercel.app/",
    isOngoing: false,
    
    overview: {
      role: "UI/UX Designer & Web Developer",
      timeline: "2 Weeks",
      tools: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
      deliverables: ["Mobile-First Invitation UI", "Guest Camera Capture Flow", "Couple Gallery Dashboard"],
      productType: "Interactive Event Platform"
    },

    problem: {
      title: "Capturing Candid Moments Without App Installation Friction",
      context: "Wedding guests capture countless candid moments during receptions, but couples often struggle to collect them afterward because messaging apps compress image quality and require tedious manual follow-ups.",
      coreChallenge: "How might we design a lightweight, browser-based experience that lets guests upload full-resolution reception photos in seconds without installing any additional applications?"
    },

    myRole: {
      description: "Designed and built the mobile-first invitation interface, guest photo capture workflow, and couple's memory collection gallery.",
      responsibilities: [
        "Designed romantic, elegant invitation screens tailored for mobile viewports.",
        "Mapped and refined the 2-step photo capture and upload flow for event guests.",
        "Created an interactive couple dashboard for viewing and downloading memory collections.",
        "Implemented the frontend interface using Next.js and Tailwind CSS."
      ]
    },

    informationArchitecture: {
      description: "Designed a single-page progressive disclosure flow that guides guests naturally from invitation details to RSVP and photo sharing.",
      keyDecisions: [
        "Prominent hero section featuring the couple's story and event countdown.",
        "Direct RSVP submission card with instant confirmation state.",
        "Dedicated Live Guest Camera section accessible with one tap."
      ]
    },

    visualDesign: {
      description: "Combined classic editorial elegance with modern interactive aesthetics.",
      principles: [
        "Warm neutral tones with subtle gold and champagne accents.",
        "Refined serif headings paired with clean sans-serif body copy.",
        "Smooth scroll transitions and celebratory micro-interactions."
      ]
    },

    finalUi: {
      description: "Delivered a responsive web application tested across iOS and Android browsers.",
      highlights: [
        "Mobile-optimized photo upload interface with live preview.",
        "Clean digital RSVP form with immediate feedback.",
        "Interactive memory gallery view."
      ]
    },

    reflection: {
      learnings: "Designing for event guests emphasized the importance of zero-barrier interfaces. In high-energy live events, users will only interact with a digital tool if it works instantly without onboarding hurdles.",
      nextSteps: "Explore real-time photo slideshow displays for live event venues."
    }
  },
  {
    slug: "dam-studio-3d",
    title: "DAM Studio - 3D Asset Management Hub",
    category: "Creative SaaS & 3D Web Interface",
    shortDescription: "Designing an intuitive cloud asset management hub and browser-based 3D turntable preview interface for a creative sculpting studio.",
    color: "from-indigo-600/10 to-purple-600/10",
    heroImage: "/dam_studio.png",
    galleryImages: ["/dam_studio.png"],
    isOngoing: false,
    
    overview: {
      role: "UI/UX Designer & Frontend Developer",
      timeline: "4 Weeks",
      tools: ["Figma", "Next.js", "Three.js", "Tailwind CSS"],
      deliverables: ["Cloud Asset Hub Interface", "Interactive 3D Turntable UI", "Model Inspection Controls"],
      productType: "Cloud 3D Asset Management Web App"
    },

    problem: {
      title: "Reviewing Heavy 3D Assets Without CAD Software Dependencies",
      context: "DAM Studio (a 3D sculpting studio in Cilacap) needed a clean way to showcase and share complex 3D sculpts with external clients who do not have specialized 3D software (such as Blender or Maya) installed on their devices.",
      coreChallenge: "How might we design a web-based asset workspace where clients can intuitively inspect 3D models from any browser with zero learning curve?"
    },

    myRole: {
      description: "Designed the studio dashboard interface, file management workspace, and interactive 3D inspection controls.",
      responsibilities: [
        "Designed the asset upload, organization, and folder management dashboard.",
        "Created an intuitive control overlay for 360-degree rotation, zoom, and lighting toggles.",
        "Ensured desktop and tablet responsiveness for client review sessions.",
        "Built the frontend interface using Next.js, Tailwind CSS, and Three.js viewer components."
      ]
    },

    informationArchitecture: {
      description: "Structured the workspace to prioritize immediate visual preview while keeping technical metadata easily accessible.",
      keyDecisions: [
        "Clean grid view showcasing model thumbnail previews and polycount metadata.",
        "Dedicated full-screen inspection mode with floating toolbars.",
        "Direct shareable link generator for client presentations."
      ]
    },

    visualDesign: {
      description: "Adopted a sleek, distraction-free dark interface to make 3D assets stand out visually.",
      principles: [
        "Minimalist dark theme allowing 3D models and lighting to take center stage.",
        "Clean icon-based viewer controls with clear tooltips and active states.",
        "Unobtrusive HUD overlays that minimize viewport obstruction."
      ]
    },

    finalUi: {
      description: "Delivered a responsive web interface enabling interactive 360-degree model inspection directly in modern browsers.",
      highlights: [
        "Interactive 3D viewport with smooth touch and mouse navigation.",
        "Asset organization dashboard with search and tag filtering.",
        "Model detail sidebar displaying material settings and asset information."
      ]
    },

    reflection: {
      learnings: "Balancing complex technical controls (such as 3D camera angles and lighting toggles) with an approachable, clean UI demonstrated how UI/UX design can make specialized technology accessible to non-technical stakeholders.",
      nextSteps: "Explore collaborative annotation tools for in-viewport design feedback."
    }
  }
];

export function getProjectBySlug(slugOrId: string): Project | undefined {
  if (slugOrId === "1" || slugOrId === "mdmedia-portal") return PROJECTS.find((p) => p.slug === "mdmedia-portal");
  if (slugOrId === "2" || slugOrId === "gani-consulting") return PROJECTS.find((p) => p.slug === "gani-consulting");
  if (slugOrId === "3" || slugOrId === "olivia-ralph-wedding") return PROJECTS.find((p) => p.slug === "olivia-ralph-wedding");
  if (slugOrId === "4" || slugOrId === "dam-studio-3d") return PROJECTS.find((p) => p.slug === "dam-studio-3d");
  
  const idx = parseInt(slugOrId, 10);
  if (!isNaN(idx) && idx >= 1 && idx <= PROJECTS.length) {
    return PROJECTS[idx - 1];
  }
  return PROJECTS.find((p) => p.slug === slugOrId);
}
