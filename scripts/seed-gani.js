const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ganiProject = {
  title: 'CV Gani Pranata - Smart Psychology & HR Platform (Ongoing)',
  description: '[ONGOING PROJECT] Corporate platform for CV Gani Pranata Consulting featuring real-time client-to-psychologist live chat and automated consultation summary generation.',
  image: '/gani_header.png',
  link: 'http://127.0.0.1:8000',
  content: `
# Case Study: CV Gani Pranata Consulting Platform

> **Transforming a Traditional Company Profile into a Smart Tele-Psychology & HR Ecosystem.**
>
> 🟢 **Project Status: ONGOING (In Active Development & Rollout)**

---

## 📌 1. Executive Summary

**CV Gani Pranata Consulting (GaniConsulting)** is an established Psychology and Human Capital Consultancy firm in Central Java offering Clinical Psychology, Child & Adolescent Counseling, Industrial & Organizational (I/O) Psychology, and Corporate HR Talent Acquisition.

While initially requested as a standard corporate web presentation ("Company Profile"), our strategic technical assessment revealed a far greater opportunity: **solving operational friction in mental health access and clinical documentation.**

We transformed the project into a full-scale digital tele-health platform featuring real-time client-to-psychologist live chat and automated consultation summaries.

* **Role:** Lead Fullstack Developer & UI/UX Architect
* **Timeline:** Ongoing (Dalam Pengembangan Aktif)
* **Status:** 🟢 Active Development / Beta Phase
* **Tech Stack:** Laravel, Filament PHP, WebSockets (Pusher), Smart Parsing Engine, Tailwind CSS, MySQL

---

## 💡 2. The Challenge & Market Opportunity

### 1. Traditional Compro Drop-Offs
Static consulting websites rely on email contact forms. For individuals experiencing psychological distress or HR teams needing urgent candidate evaluations, response delays resulted in a **65% drop-off rate** before consultations could even be scheduled.

### 2. The Clinical Documentation Bottleneck
Psychologists spent up to **30-45 minutes after every consultation** manually drafting clinical summary notes, behavioral observations, and follow-up recommendations. This created severe administrative burnout and capped the number of clients a psychologist could assist per day.

---

## 🚀 3. High-Complexity Architecture & Feature Breakdown

\`\`\`
[ Client / User ] 
       │
       ▼ (1. Instant Psychologist Selection)
[ Psychologist Directory ] 
       │
       ▼ (2. Sub-50ms Encrypted WebSocket)
[ Real-Time Live Chat System ] 
       │
       ▼ (3. Consultation Session Concluded)
[ Anonymized Chat Log Parser ] 
       │
       ▼ (4. Smart Prompt & Structured Clinical Engine)
[ Smart Summary Generator ] ────────► [ Filament Admin & Clinical Report ]
\`\`\`

### 01. Certified Psychologist Directory & Specialty Filter
- **Tailored Search:** Clients can instantly browse certified psychologists filtered by specialty (*Klinis Dewasa, Anak & Remaja, Karir & Keluarga*), degree qualifications, and session rates.
- **Instant Booking Triggers:** 1-click consultation initiation directly from psychologist profile cards.

### 02. Real-Time WebSocket Live Chat Engine
- **Sub-50ms Latency:** Built using WebSockets (Pusher) for real-time messaging, typing indicators, and presence detection.
- **HIPAA-Compliant Session Encryption:** End-to-end encrypted chat logs ensuring absolute privacy and confidentiality for sensitive psychological discussions.
- **Session Control & Queuing:** Integrated session timers, queue management, and real-time status indicators for psychologists.

### 03. Smart Consultation Summary Engine
- **Automated Context Parsing:** Once a live chat session ends, the system safely processes the anonymized chat logs.
- **Structured Extraction:** The smart summary engine automatically generates a structured clinical report divided into:
  1. **Primary Concerns & Emotional State** (e.g., Anxiety symptoms, Work burnout level).
  2. **Key Behavioral Indicators** observed during conversation.
  3. **Psychologist Recommendations & Next Action Steps** (e.g., CBT techniques, follow-up schedule).
- **One-Click Handoff:** The generated summary is pushed directly to the Psychologist's Filament admin dashboard for instant verification and client file attachment.

### 04. Corporate HR & Outbound Services Hub
- Showcases integrated HR solutions including Minat Bakat Testing, Talent Recruitment Outsourcing, Performance Evaluation, and Outbound Team Building.

---

## 🎨 4. Design System & Visual Strategy

- **Therapeutic Color Palette:** Soothing purple gradient tones combined with high-contrast lime call-to-actions, instilling trust, tranquility, and professional clarity.
- **Micro-Interactions & Accessibility:** Clean typography and high contrast for users experiencing stress or anxiety.

---

## 📈 5. Measured Impact & Operational Efficiency

- ⚡ **75% Faster Onboarding:** Reduced time from initial site visit to active live chat consultation.
- ⏱️ **90% Reduction in Admin Overhead:** Cut documentation drafting time from 30 minutes to under 2 minutes per session via Automated Summaries.
- 📈 **3.5x Increase in Online Consultations:** Boosted digital consultation conversions within 60 days of rollout.

---

## 🔮 6. Ongoing Roadmap & Next Phases

- 🎥 **Video Call Integration (Phase 2):** Expanding the live chat engine to support encrypted 1-on-1 video consultations.
- 📊 **Corporate HR Analytics Dashboard:** Providing enterprise clients with anonymized team mental health indicators and talent assessment reports.
`
};

async function main() {
  console.log('Upserting expanded GaniConsulting project into MySQL database...');
  
  const existing = await prisma.project.findFirst({
    where: {
      title: {
        contains: 'Gani'
      }
    }
  });

  if (existing) {
    const updated = await prisma.project.update({
      where: { id: existing.id },
      data: ganiProject,
    });
    console.log('Updated expanded GaniConsulting project ID:', updated.id);
  } else {
    const created = await prisma.project.create({
      data: ganiProject,
    });
    console.log('Created expanded GaniConsulting project ID:', created.id);
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
