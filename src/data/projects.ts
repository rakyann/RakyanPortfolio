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
    slug: "sobatahli",
    title: "SobatAhli Platform",
    category: "Mobile App / SaaS",
    description: "Creating an intuitive expert consultation platform connecting professionals with tailored advice efficiently.",
    color: "from-orange-500/10 to-red-500/10",
    
    overview: {
      what: "Mobile application connecting users with certified experts for quick consultations.",
      role: "Product Designer",
      timeline: "Agustus 2022 - September 2024",
      team: "Cross-functional team",
      tools: ["Figma", "Whimsical"],
      deliverables: ["Mobile App UI", "User Flows", "Interactive Prototype"]
    },

    background: {
      why: "There was a gap in the market for immediate, verified professional advice.",
      businessProblem: "Low conversion rate on existing consultation booking platforms.",
      userProblem: "Users couldn't easily verify the credibility of experts before paying.",
      opportunity: "Introduce a transparent rating system and seamless booking flow."
    },

    goals: {
      business: ["Achieve 10,000 monthly active users", "Increase booking conversion rate by 15%"],
      user: ["Easily find and book a credible expert within 5 minutes"],
      metrics: ["Conversion Rate", "User Retention", "Net Promoter Score (NPS)"]
    },

    research: {
      methodology: "Competitive Analysis, User Interviews",
      painPoints: ["Hard to compare experts", "Uncertainty about pricing"],
      insights: ["Users want to see reviews upfront", "Scheduling is the biggest friction point"],
      opportunityMapping: "Integrate a robust calendar sync and verified badge system."
    },

    persona: {
      name: "Siti, Small Business Owner",
      quote: "\"I need legal advice fast, but I don't want to pay high retainer fees.\"",
      goals: ["Get quick answers to specific business questions"],
      frustrations: ["Finding lawyers takes too much time"],
      needs: ["Clear pricing", "Verified credentials"],
      behavior: "Prefers video calls for consultations."
    },

    problemStatement: "How might we create a platform that builds trust and simplifies the scheduling process between users and experts?",

    result: {
      outcome: "Platform successfully facilitated over 5,000 consultations in the first year.",
      businessImpact: "Increased website traffic and booking conversions significantly.",
      userImpact: "Users found the booking process 3x faster compared to traditional methods.",
      reflection: "Simplifying the calendar interface was the key to unlocking higher conversion rates."
    }
  }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
