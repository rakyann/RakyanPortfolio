const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const mdmediaProject = {
  title: 'MDMedia Enterprise Internal Portal Redesign',
  description: 'A comprehensive redesign of the enterprise portal for PT Metra Digital Media (MDMedia), unifying employee onboarding, corporate news, exclusive announcements, and daily workflows.',
  image: '/mdmedia_desktop.jpg',
  link: 'https://mdmedia.co.id',
  content: `
# Case Study: MDMedia Enterprise Internal Portal

> **Redesigning the corporate workspace ecosystem for PT Metra Digital Media to empower over 500+ employees with seamless communication, onboarding, and daily operational tools.**

---

## 📌 1. Executive Summary

**PT Metra Digital Media (MDMedia)** is a subsidiary of Telkom Indonesia specializing in digital advertising, marketing tech solutions, data analytics, and media publishing.

As the company scaled rapidly, MDMedia faced a classic enterprise challenge: **fragmented internal communication**. Employee announcements, onboarding materials, security alerts, and department resources were scattered across emails, chat groups, and an obsolete intranet.

We conducted a complete UI/UX redesign and frontend architecture revamp for the **MDMedia Internal Workspace Portal**, transforming it into a modern, centralized digital hub where employees start their workday.

* **Role:** Lead UI/UX Designer & Frontend Architect
* **Timeline:** Maret 2025 - Agustus 2025
* **Team:** 1 Product Manager, 1 Lead UI/UX Designer, 3 Frontend Engineers, 2 Backend Engineers
* **Tech Stack:** Next.js, React, Tailwind CSS, Figma, Notion, REST API

---

## 💡 2. The Core Problem & Business Context

### Legacy Friction & Information Silos
Prior to the redesign, employee engagement with internal news was dangerously low. Essential company updates—such as security warnings (*Waspada Penipuan*), holiday schedules (*Lebaran Countdown*), and corporate event highlights—were routinely missed.

### Onboarding Bottlenecks
New hires spent up to **3 full days** attempting to locate internal tools, guidelines, and department contact persons. HR spent excessive manual hours conducting one-on-one orientation sessions.

### Key Objectives
1. **Centralize Communication:** Provide a single source of truth for company news, press releases, and security advisories.
2. **Streamline Onboarding:** Introduce an interactive onboarding modal for first-time login users.
3. **Elevate Brand & UX:** Create an inspiring visual design matching MDMedia's position as a modern marketing tech leader.

---

## 🎨 3. Figma Design System & Wireframes

Below is the complete UI wireframe mapping designed in Figma, covering Onboarding popups, main Landing Page variations, and detailed Article Hub layouts:

![MDMedia Figma Wireframes and Screens](/mdmedia_figma.png)

---

## 🚀 4. Detailed Feature Breakdown & UX Solutions

### 01. Dynamic Hero Banner & Holiday Countdowns
- **Event Countdown Bar:** Prominently featured top banner for major company events and national holidays (e.g., *Lebaran, 30 Maret 2025* countdown).
- **Exclusive Content CTA:** One-click access button allowing verified employees to unlock exclusive internal whitepapers and market analyses.

### 02. Security & Fraud Prevention Widget (*Waspada Penipuan*)
- **Phishing Protection:** High-contrast alert cards notifying staff of active brand impersonation scams and social media fraud accounts.
- **Direct Verification Links:** Built-in links allowing staff to verify official MDMedia communication channels instantly.

### 03. Interactive Newsroom & Article Hub
- **Categorized News Stream:** Organized by Marketing Tech, Corporate Governance, Team Achievements, ESG, and Employee Spotlights.
- **Engaging Reading Experience:** Includes reader comments, social sharing widgets, estimated reading times, and embedded video media.

### 04. Step-by-Step Onboarding Modal Flow
- **Guided Welcome Tour:** Automated modal popup triggered upon first employee login, walking them through essential tools, HR forms, and department lead contacts.

### 05. Quick Tools & Department Directory
- **One-Click Shortcuts:** Direct integration with IT support ticketing, leave request submission, and marketing asset libraries.

---

## 🛠️ 5. Technical Implementation & Architecture

\`\`\`
[ MDMedia Employee ] 
       │
       ▼ (1. SSO Authentication)
[ Next.js Middleware ] 
       │
       ├─► First Login? ──► [ Guided Onboarding Modal ]
       │
       ▼ (2. Dynamic Content Feed)
[ Central Portal Dashboard ] ───► [ Security Banners (Waspada Penipuan) ]
                                ├──► [ Lebaran Event Countdown ]
                                └──► [ Categorized News Hub & Articles ]
\`\`\`

- **Modular React Architecture:** Designed as reusable component blocks (Bento grids, Hero banners, Article cards) allowing quick layout adjustments by the content team.
- **Fast Performance:** Optimized image loading and static regeneration ensuring page load speed under 1.2 seconds.

---

## 📈 6. Results & Measured Impact

- 🚀 **30% Increase in Daily Active Engagement:** Employees visit the portal daily for news and operational tools.
- ⚡ **50% Reduction in Onboarding Time:** Reduced orientation duration for new hires from 3 days to under 1 day.
- 📣 **100% Reach for Critical Security Notices:** Fraud alert notices achieved total employee readership within hours of publication.
- ⭐ **92% System Usability Scale (SUS) Score:** Highly positive feedback from both staff and executive management.

---

## 💬 7. Reflection & Key Takeaways

Redesigning an enterprise portal requires balancing high information density with intuitive visual clarity. By conducting thorough user research and mapping out clear UI flows in Figma before development, we delivered an internal product that employees genuinely enjoy using every morning.
`
};

async function main() {
  console.log('Upserting expanded MDMedia project into MySQL database...');
  
  const existing = await prisma.project.findFirst({
    where: {
      title: {
        contains: 'MDMedia'
      }
    }
  });

  if (existing) {
    const updated = await prisma.project.update({
      where: { id: existing.id },
      data: mdmediaProject,
    });
    console.log('Updated expanded MDMedia project ID:', updated.id);
  } else {
    const created = await prisma.project.create({
      data: mdmediaProject,
    });
    console.log('Created expanded MDMedia project ID:', created.id);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
