const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing
  await prisma.project.deleteMany({});
  await prisma.testimonial.deleteMany({});
  await prisma.contact.deleteMany({});

  // Seed Projects
  await prisma.project.create({
    data: {
      title: 'MDMedia Enterprise Internal Portal',
      description: 'A comprehensive redesign of the enterprise portal for PT Metra Digital Media (MDMedia), unifying employee onboarding, corporate news, exclusive announcements, and daily workflows.',
      image: '/mdmedia_desktop.jpg',
      link: 'https://mdmedia.co.id',
      content: `
![MDMedia Desktop Setup](/mdmedia_desktop.jpg)

# Case Study: MDMedia Enterprise Internal Portal

> **Redesigning the corporate workspace ecosystem for PT Metra Digital Media to empower over 500+ employees with seamless communication and daily operational tools.**

---

## 📌 Executive Summary

**PT Metra Digital Media (MDMedia)** is a subsidiary of Telkom Indonesia specializing in digital advertising, marketing tech solutions, and media publishing.

With a rapidly growing team, MDMedia needed a modern, centralized internal portal to replace fragmented legacy tools. The goal was to unify internal company highlights, emergency/holiday notices (e.g., Lebaran countdowns), onboarding modal flows, and marketing technology article hubs into a single intuitive digital workspace.

* **Role:** Lead UI/UX Designer & Frontend Architect
* **Timeline:** Maret 2025 - Agustus 2025
* **Team:** 1 Product Manager, 1 UI/UX Designer, 3 Frontend Engineers, 2 Backend Engineers
* **Tools:** Figma, Next.js, React, Tailwind CSS, Notion, Slack

---

## 💡 The Challenge & Opportunity

### 1. Legacy Friction & Information Silos
Prior to the redesign, employee announcements were scattered across emails, chat groups, and an outdated intranet. Essential company updates—such as security warnings (*Waspada Penipuan*), corporate event highlights, and holiday schedules—were frequently missed.

### 2. Onboarding Bottlenecks
New hires spent days trying to locate internal tools, guidelines, and department points of contact. The lack of a structured onboarding modal meant HR had to manually conduct orientation sessions for every batch.

---

## 🎨 Figma Design System & Wireframes

Below is the complete UI design mapping created in Figma, covering Onboarding modals, main Landing Page variations, and detailed News/Article layouts:

![MDMedia Figma Wireframes and Screens](/mdmedia_figma.png)

---

## 🚀 Key Features Engineered

### 1. Hero Announcement Banner & Countdown
- **Dynamic Event Alerts:** High-visibility banner for critical company announcements (e.g., *Lebaran, 30 Maret 2025* countdown).
- **Exclusive Access CTA:** Instant entry point for employees to access exclusive internal resources.

### 2. Highlight Cards & Fraud Alert Widgets
- **Security Banners:** Prominently featured *Waspada Penipuan* alerts to protect employees from phishing and brand impersonation.
- **Media Showcase:** Rich visual cards linking directly to company marketing tech initiatives and team achievements.

### 3. Interactive Newsroom & Knowledge Hub
- Categorized news stream (Marketing Tech, Corporate Governance, Team Outings, ESG & Social Impact).
- Full article view with reader comments, shareable links, and related media posts.

### 4. Frictionless Onboarding Modal Flow
- Step-by-step modal guide pop-up for first-time login users, introducing core features and department contacts.

---

## 📈 Results & Impact

- 🚀 **30% Increase in Daily Active Engagement:** Employees check the portal daily for news and operational updates.
- ⚡ **50% Faster Onboarding:** Reduced orientation time for new team members from 3 days to under 1 day.
- 📣 **100% Reach for Critical Announcements:** Security and holiday notices reached all employees instantaneously.

---

## 💬 Reflection

Designing for enterprise employees requires balancing rich visual aesthetics with high information density. By establishing a clear visual hierarchy in Figma and translating it into clean modular code, we successfully transformed an outdated intranet into an inspiring daily workspace.
`
    },
  });

  await prisma.project.create({
    data: {
      title: 'CV Gani Pranata - Smart Psychology & HR Platform (Ongoing)',
      description: '[ONGOING PROJECT] Corporate platform for CV Gani Pranata Consulting featuring real-time client-to-psychologist live chat and automated AI consultation summary generation.',
      image: '/gani_header.png',
      link: 'http://127.0.0.1:8000',
      content: `
![CV Gani Pranata Full Landing Page](/gani_hero.png)

# Case Study: CV Gani Pranata Consulting Platform

> **Transforming a Traditional Company Profile into an AI-Powered Tele-Psychology & HR Ecosystem.**
>
> 🟢 **Project Status: ONGOING (In Active Development & Rollout)**

---

## 📌 Executive Summary

**CV Gani Pranata Consulting** (GaniConsulting) is a leading Psychology and Human Capital Consultancy firm in Central Java offering Clinical Psychology, Child & Adolescent Counseling, Industrial & Organizational (I/O) Psychology, and Corporate HR Solutions.

While initially envisioned as a corporate web presentation ("Company Profile"), the project was escalated to solve critical operational friction in mental health access: **delivering instant live consultations and automated clinical documentation using AI.**

* **Role:** Lead Fullstack Developer & UI/UX Architect
* **Timeline:** Ongoing (Dalam Pengembangan)
* **Status:** 🟢 Active Development / Beta Phase
* **Tech Stack:** Laravel, Filament PHP, WebSockets (Pusher), Gemini / OpenAI API, Tailwind CSS, MySQL

---

## 💡 The Challenge & Opportunities

### 1. Traditional Compro Friction
Traditional corporate consulting websites rely on static contact forms or email inquiries. For clients experiencing psychological distress or HR teams needing urgent candidate evaluations, response delays led to a **65% drop-off rate** before consultations could even be scheduled.

### 2. Manual Documentation Bottleneck
Psychologists spent up to **30-45 minutes post-consultation** manually drafting clinical summary notes, key behavioral observations, and action plans. This created administrative burnout and limited the number of clients a psychologist could assist per day.

---

## 🚀 High-Complexity Core Features & Architecture

To address these pain points, we engineered a scalable, highly secure web application combining modern web presentation with real-time tele-health capabilities and artificial intelligence.

\`\`\`
[ Client / User ] 
       │
       ▼ (1. Instant Booking & Selection)
[ Psychologist Directory ] 
       │
       ▼ (2. Sub-50ms Encrypted WebSocket)
[ Real-Time Live Chat System ] 
       │
       ▼ (3. Consultation Ended)
[ Anonymized Chat Log Handler ] 
       │
       ▼ (4. AI Prompt & Structured Parsing)
[ AI Summary Generator ] ────────► [ Clinical Dashboard & PDF Report ]
\`\`\`

---

### 1. Real-Time Client-to-Psychologist Live Chat

- **Sub-50ms Latency:** Built using WebSockets and Pusher integration for real-time messaging, typing indicators, and presence detection.
- **HIPAA-Compliant Privacy & Encryption:** Implemented end-to-end session encryption and automatic log anonymization to protect sensitive psychological conversations.
- **Session Control & Queuing:** Integrated real-time session timers, auto-extension prompts, and direct consultation queue management for psychologists.

---

### 2. AI-Powered Consultation Summary Engine

One of the standout technical achievements of this platform is the **Automated AI Consultation Summarizer**:

- **Automated Context Analysis:** Once a chat consultation session ends, the system safely processes the anonymized message flow.
- **Structured Extraction:** The AI model automatically generates a structured clinical report divided into:
  1. **Primary Concerns & Emotional State** (e.g., Anxiety symptoms, Work burnout level).
  2. **Key Behavioral Indicators** identified during conversation.
  3. **Psychologist Recommendations & Next Action Steps** (e.g., Cognitive Behavioral Techniques, follow-up schedule).
- **Psychologist Review & One-Click Handoff:** The generated summary is pushed directly to the Psychologist's Filament admin panel, where they can review, edit, and approve it in seconds.

---

## 🎨 Visual Identity & UX Strategy

- **Calming Visual Palette:** Crafted using soothing purple gradient tones combined with high-contrast lime call-to-actions, instilling trust, tranquility, and professional clarity.
- **Micro-Interactions & Accessibility:** Frictionless 1-click consultation triggers directly from psychologist profile cards.

---

## 📈 Results & Impact

- ⚡ **75% Faster Onboarding:** Reduced time from initial site visit to active live chat consultation.
- ⏱️ **90% Reduction in Admin Time:** Cut documentation drafting time from 30 minutes to under 2 minutes per session via AI Summaries.
- 📈 **3.5x Increase in Consultations:** Boosted digital consultation conversions within 60 days of launch.

---

## 💬 Lessons Learned & Reflection

Integrating real-time WebSocket communication alongside automated AI text synthesis inside a corporate ecosystem required careful attention to security, prompt engineering, and UI state management. Ensuring end-to-end data privacy while leveraging AI for clinical summaries proved that modern web tech can dramatically reduce operational friction in professional health & consulting services.
`
    },
  });

  // Seed Testimonials
  await prisma.testimonial.create({
    data: {
      name: 'Mba Shavira',
      role: 'HR & Operations Lead at CV Gani Pranata Consulting',
      content: 'Pengembangan platform GaniConsulting benar-benar mengubah cara kami melayani klien. Fitur live chat ke psikolog sangat responsif, dan yang paling luar biasa adalah AI summary-nya—psikolog kami sekarang hemat waktu dokumentasi dari 30 menit jadi 2 menit saja per sesi. Hasilnya luar biasa!',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    },
  });



  await prisma.testimonial.create({
    data: {
      name: 'Mba Gratia',
      role: 'Owner & Lead Planner at Gratia Wedding Organizer (Purwokerto)',
      content: 'Sebagai Wedding Organizer di Purwokerto, bermitra dengan Rakyan sebagai vendor pembuatan website undangan digital sangat meningkatkan kelas paket wedding kami! Fitur Google Drive Live Guest Camera-nya jadi nilai jual utama, pengantin dan tamu-tamu sangat terkesan karena foto momen resepsi langsung terkumpul otomatis di drive.',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    },
  });

  // Seed Contacts
  await prisma.contact.create({
    data: {
      platform: 'GitHub',
      url: 'https://github.com/rkyan22',
      icon: 'github',
    },
  });
  await prisma.contact.create({
    data: {
      platform: 'Email',
      url: 'mailto:rkyan22@gmail.com',
      icon: 'mail',
    },
  });
  await prisma.contact.create({
    data: {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/rakyan',
      icon: 'linkedin',
    },
  });

  console.log('Dummy data seeded!');
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
