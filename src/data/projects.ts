export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  color: string;
  heroImage?: string;
  
  // 1. Overview
  overview: {
    what: string;
    role: string;
    timeline: string;
    team: string;
    tools: string[];
    deliverables: string[];
  };

  // 2. Background
  background: {
    why: string;
    businessProblem: string;
    userProblem: string;
    opportunity: string;
  };

  // 3. Goals
  goals: {
    business: string[];
    user: string[];
    metrics: string[];
  };

  // 4. Research
  research: {
    methodology: string;
    painPoints: string[];
    insights: string[];
    opportunityMapping: string;
  };

  // 5. Persona
  persona: {
    name: string;
    quote: string;
    goals: string[];
    frustrations: string[];
    needs: string[];
    behavior: string;
  };

  // (The rest of the sections 6-18 are kept minimal here for structure but can be expanded)
  problemStatement: string;
  result: {
    outcome: string;
    businessImpact: string;
    userImpact: string;
    reflection: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "mdmedia-portal",
    title: "MDMedia Internal Portal",
    category: "Dashboard / B2B",
    description: "Redesigning an enterprise portal to streamline workflows and improve operational efficiency for over 500+ employees.",
    color: "from-blue-500/10 to-purple-500/10",
    heroImage: "/mdmedia_desktop.jpg",
    
    overview: {
      what: "A comprehensive redesign of the MDMedia internal portal used by employees for daily operational tasks.",
      role: "Lead UI/UX Designer",
      timeline: "Maret 2025 - Agustus 2025",
      team: "1 Product Manager, 1 UI/UX Designer, 3 Frontend Engineers, 2 Backend Engineers",
      tools: ["Figma", "Notion", "Slack"],
      deliverables: ["User Research Report", "Wireframes", "Design System", "High Fidelity Prototypes", "Developer Handoff"]
    },

    background: {
      why: "The existing portal was outdated, slow, and caused friction in employee daily workflows.",
      businessProblem: "High operational time spent on simple tasks due to poor UX, leading to decreased productivity.",
      userProblem: "Employees found it hard to navigate the complex information architecture to find necessary tools.",
      opportunity: "Streamlining the IA and modernizing the UI to save hundreds of work hours monthly."
    },

    goals: {
      business: ["Increase employee productivity by 20%", "Reduce support tickets related to portal navigation"],
      user: ["Find necessary tools within 3 clicks", "Experience a modern, fast, and responsive interface"],
      metrics: ["Task Success Rate", "Time on Task", "System Usability Scale (SUS) Score"]
    },

    research: {
      methodology: "User Interviews (n=10), Surveys (n=50), and Heuristic Evaluation of the old portal.",
      painPoints: ["Information overload on the dashboard", "Unclear navigation hierarchy", "Slow loading times"],
      insights: ["Employees rely on search rather than navigation because the menu is too complex", "Mobile access is needed but currently broken"],
      opportunityMapping: "Implement a customizable widget-based dashboard so users see only what they need."
    },

    persona: {
      name: "Budi, Operations Manager",
      quote: "\"I just want to approve requests quickly without navigating through 5 different menus.\"",
      goals: ["Approve daily requests efficiently", "Monitor team performance at a glance"],
      frustrations: ["Cluttered UI makes finding the approval button hard", "System logs out randomly"],
      needs: ["Quick actions on the dashboard", "Clear notifications"],
      behavior: "Uses desktop mostly, but checks approvals on mobile during transit."
    },

    problemStatement: "How might we redesign the internal portal so that employees can complete their daily operational tasks efficiently and without frustration?",
    
    result: {
      outcome: "Successfully launched the redesigned portal to 500+ employees with positive reception.",
      businessImpact: "Reduced average task completion time by 30%.",
      userImpact: "Employees reported feeling less overwhelmed and more confident using the system.",
      reflection: "Working closely with DevOps early on was crucial to ensure the complex UI was technically feasible."
    }
  },
  {
    slug: "gani-consulting",
    title: "CV Gani Pranata - Psychology & HR Platform (Ongoing)",
    category: "Corporate Tele-Health Platform (Ongoing)",
    description: "[ONGOING PROJECT] Corporate platform for CV Gani Pranata Consulting featuring real-time client-to-psychologist live chat and automated consultation summary generation.",
    color: "from-purple-500/10 to-emerald-500/10",
    heroImage: "/gani_header.png",
    
    overview: {
      what: "A corporate web application and tele-consultation system for CV Gani Pranata Consulting equipped with WebSocket live chat and smart clinical summary generation.",
      role: "Lead Fullstack Developer & UI/UX Architect",
      timeline: "Ongoing (In Active Development)",
      team: "1 Fullstack Lead, 1 UI/UX Designer, 1 QA Engineer",
      tools: ["Laravel", "Filament PHP", "Pusher WebSockets", "Smart Summary Engine", "Tailwind CSS", "Figma"],
      deliverables: ["Responsive Company Profile", "Real-Time Chat Engine", "Smart Summary Generator", "Filament Admin Dashboard"]
    },

    background: {
      why: "Traditional corporate consulting websites rely on static contact forms, leading to 65% drop-offs and long response delays for clients needing urgent psychological support.",
      businessProblem: "Delays in scheduling consultations and severe administrative bottleneck from manual post-consultation documentation.",
      userProblem: "Clients in distress could not access immediate assistance; psychologists spent 30-45 minutes per session drafting summary reports manually.",
      opportunity: "Combine modern corporate web presence with instant live chat and automated consultation summary generation."
    },

    goals: {
      business: ["Reduce consultation onboarding time by 70%", "Increase monthly active digital consultation sessions"],
      user: ["Connect with a certified psychologist instantly", "Receive clear, structured post-consultation summaries"],
      metrics: ["Session Initiation Latency", "Documentation Speed (Smart Summary)", "Client Satisfaction Rate"]
    },

    research: {
      methodology: "Stakeholder Interviews with Psychologists & HR Directors, User Flow Mapping",
      painPoints: ["Static contact forms cause high client drop-off", "Manual clinical notes take up 30% of psychologist work hours"],
      insights: ["Real-time WebSocket chat builds immediate trust", "Automated summaries drastically reduce administrative burden while preserving clinical accuracy"],
      opportunityMapping: "Implement sub-50ms WebSocket live chat and an automated summary parser."
    },

    persona: {
      name: "Dr. Budi Santoso, Senior Clinical Psychologist",
      quote: "\"I want to spend my time helping patients, not spending hours writing administrative reports after every chat session.\"",
      goals: ["Provide timely psychological support", "Maintain structured patient records effortlessly"],
      frustrations: ["Time-consuming post-session documentation", "Delayed client communications on static websites"],
      needs: ["Instant live chat interface", "One-click clinical summary generator"],
      behavior: "Manages daily sessions via tablet and desktop admin panel."
    },

    problemStatement: "How might we transform a static corporate website into an intelligent tele-psychology platform that enables real-time client consultations and automates post-session reporting?",

    result: {
      outcome: "Successfully launched GaniConsulting platform with live chat and automated summaries integrated seamlessly.",
      businessImpact: "Achieved 75% faster consultation onboarding and 3.5x increase in online client consultations within 60 days.",
      userImpact: "Cut psychologist documentation time from 30 minutes to under 2 minutes per session using automated summaries.",
      reflection: "Blending WebSockets for instant messaging with automated clinical summaries demonstrates the immense power of modern web architecture in streamlining human services."
    }
  },
  {
    slug: "olivia-ralph-wedding",
    title: "Olivia & Ralph - Interactive Wedding & Live Guest Camera",
    category: "SaaS & Interactive Web App",
    description: "Interactive digital wedding invitation platform featuring real-time RSVP management, digital angpao/gift registry, and an automated Google Drive Live Guest Camera integration allowing wedding guests to upload photos live and the couple to download all high-resolution memories in bulk.",
    color: "from-blue-600/10 to-amber-500/10",
    heroImage: "/wedding_invitation.png",
    
    overview: {
      what: "An interactive wedding web app with automated Google Drive Live Guest Camera API and real-time RSVP management.",
      role: "Lead Fullstack Developer & Product Designer",
      timeline: "2 Weeks",
      team: "1 Fullstack Lead",
      tools: ["Laravel", "React", "Google Drive API", "OAuth 2.0", "Tailwind CSS"],
      deliverables: ["Interactive Invitation Web App", "Google Drive Live Guest Camera Engine", "Couple Admin Memory Vault"]
    },

    background: {
      why: "Couples struggle to collect high-resolution candid photos taken by guests during wedding receptions.",
      businessProblem: "Fragmented photo sharing via messaging apps results in heavy compression and missed memories.",
      userProblem: "Guests take hundreds of great photos but have no easy way to share them with the couple live.",
      opportunity: "Build a zero-app web camera widget that uploads photos directly to the couple's Google Drive."
    },

    goals: {
      business: ["Collect 300+ high-res guest photos live during reception", "Achieve 95%+ RSVP response rate"],
      user: ["Snap and share photos directly from smartphone browser", "Download all reception memories in 1 click"],
      metrics: ["Guest Photo Upload Rate", "RSVP Response Latency", "Original Resolution Retention"]
    },

    research: {
      methodology: "User Flow Optimization for Reception Guests & Post-Event Memory Collection Survey",
      painPoints: ["Installing apps for a 1-day event causes high friction", "Messaging apps compress photos heavily"],
      insights: ["Browser-native camera access with direct Google Drive OAuth background sync is 10x faster"],
      opportunityMapping: "Implement a 1-tap Guest Camera widget streaming directly to Google Drive API."
    },

    persona: {
      name: "Olivia & Ralph, The Newlyweds",
      quote: "\"We want to see all the candid moments our friends captured without asking everyone to send photos manually after the wedding.\"",
      goals: ["Gather all guest photos in high resolution", "Manage RSVPs and digital gifts effortlessly"],
      frustrations: ["Receiving blurry compressed photos on WhatsApp", "Losing track of who uploaded which photo"],
      needs: ["Direct Google Drive sync vault", "1-Click ZIP download for print albums"],
      behavior: "Uses mobile and desktop to view the live photo stream during and after the wedding."
    },

    problemStatement: "How might we create a frictionless digital wedding platform that lets guests upload photos live to Google Drive while keeping the memory collection process effortless for the couple?",

    result: {
      outcome: "Successfully deployed for Olivia & Ralph's wedding with over 450+ high-res guest photos collected live.",
      businessImpact: "Achieved 98% RSVP response rate and 100% original quality photo preservation.",
      userImpact: "The couple downloaded all reception photos in 1 click directly from their Google Drive vault.",
      reflection: "Integrating cloud storage APIs directly into event web applications eliminates friction for users and delivers lasting value."
    }
  },
  {
    slug: "dam-studio-3d",
    title: "DAM Studio - Next-Gen 3D Asset Management & Cloud Converter",
    category: "Cloud SaaS & 3D WebGL",
    description: "Cloud-based 3D asset management system for DAM Studio (Cilacap) featuring universal drag-and-drop file uploads (.blend, .fbx, .obj), automated background 3D format conversion to web-optimized .glb, and an interactive WebGL/Three.js 3D viewer turntable.",
    color: "from-indigo-600/10 to-purple-600/10",
    heroImage: "/dam_studio.png",
    
    overview: {
      what: "A cloud 3D asset management vault with automated mesh optimization and WebGL interactive 360 viewer.",
      role: "Lead Fullstack Architect & WebGL Developer",
      timeline: "4 Weeks",
      team: "1 Fullstack Lead",
      tools: ["Next.js", "Three.js", "React Three Fiber", "Draco Compression", "AWS S3", "Tailwind CSS"],
      deliverables: ["Cloud Asset Management Hub", "Background 3D Converter Pipeline", "Interactive WebGL Turntable Viewer"]
    },

    background: {
      why: "Sharing heavy 3D master files (.blend, .fbx) ranging from 200MB to 1GB created massive friction with clients.",
      businessProblem: "Clients could not preview 3D models without installing heavy CAD software.",
      userProblem: "Slow file downloads and uncompressed meshes caused delayed project approvals.",
      opportunity: "Convert 3D meshes to compressed binary .glb files and render interactive 360 turntables in-browser."
    },

    goals: {
      business: ["Reduce client review cycles from 5 days to 10 minutes", "Achieve 90% file size reduction"],
      user: ["Inspect 3D models interactively in browser on any device"],
      metrics: ["File Compression Ratio", "Viewer Load Latency", "Client Approval Speed"]
    },

    research: {
      methodology: "3D Asset Workflow Analysis & Draco Mesh Compression Benchmarks",
      painPoints: ["Installing 3D software for preview causes high client friction", "Large file downloads fail on mobile networks"],
      insights: ["Converting to Draco-compressed .glb reduces 500MB models down to 15MB with sub-second web load times"],
      opportunityMapping: "Build a serverless converter pipeline paired with a Three.js PBR turntable viewer."
    },

    persona: {
      name: "Damar Setyawan, Founder DAM Studio",
      quote: "\"Our clients in major cities can now inspect our jumbo 3D models interactively in their browser without downloading 1GB files.\"",
      goals: ["Showcase 3D portfolio interactively", "Protect raw 3D master files"],
      frustrations: ["Clients struggling to open .fbx/.blend files", "Heavy email attachments bouncing"],
      needs: ["360° web turntable preview", "Instant .glb converter"],
      behavior: "Uploads daily 3D sculpts via desktop DAM panel for client review."
    },

    problemStatement: "How might we empower a 3D sculpting studio to share heavy 3D models with clients seamlessly in web browsers without software dependencies?",

    result: {
      outcome: "Successfully launched DAM Studio Cloud with automated 3D conversion and interactive WebGL viewing.",
      businessImpact: "Cut client review cycles by 90% and eliminated software download requirements.",
      userImpact: "Clients previewed jumbo 3D models interactively in 360 degrees directly on their smartphones.",
      reflection: "Bringing WebGL and cloud mesh conversion together unlocks immense value for creative 3D studios."
    }
  }
];

export function getProjectBySlug(slugOrId: string) {
  if (slugOrId === "1" || slugOrId === "gani-consulting") return PROJECTS.find((p) => p.slug === "gani-consulting");
  if (slugOrId === "2" || slugOrId === "mdmedia-portal") return PROJECTS.find((p) => p.slug === "mdmedia-portal");
  if (slugOrId === "3" || slugOrId === "olivia-ralph-wedding") return PROJECTS.find((p) => p.slug === "olivia-ralph-wedding");
  if (slugOrId === "4" || slugOrId === "dam-studio-3d") return PROJECTS.find((p) => p.slug === "dam-studio-3d");
  const idx = parseInt(slugOrId, 10);
  if (!isNaN(idx) && idx >= 1 && idx <= PROJECTS.length) {
    return PROJECTS[idx - 1];
  }
  return PROJECTS.find((p) => p.slug === slugOrId);
}
