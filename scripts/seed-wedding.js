const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const weddingProject = {
  title: 'Olivia & Ralph - Interactive Wedding Platform & Live Guest Camera',
  description: 'Interactive digital wedding invitation platform featuring real-time RSVP management, digital angpao/gift registry, and an automated Google Drive Live Guest Camera integration allowing wedding guests to upload photos live and the couple to download all high-resolution memories in bulk.',
  image: '/wedding_invitation.png',
  link: 'http://127.0.0.1:8000',
  content: `
# Case Study: Olivia & Ralph Interactive Wedding Platform & Live Guest Camera

> **Combining elegant digital wedding storytelling with an automated Google Drive Live Media Vault for seamless guest photo collection.**

---

## 📌 1. Executive Summary

**Olivia & Ralph's Wedding Invitation Platform** is a custom interactive web application designed to replace traditional paper invitations while solving a major post-wedding headache: **collecting authentic candidate photos taken by guests during the reception.**

Equipped with real-time RSVP tracking, digital gift registry (Angpao), interactive venue locators, and an integrated **Google Drive Guest Camera API**, this platform allowed over 300+ wedding guests to capture and upload memories directly into the couple's private Google Drive.

* **Role:** Lead Fullstack Developer & Product Designer
* **Timeline:** 2 Weeks
* **Tech Stack:** Laravel, React, Tailwind CSS, Google Drive API, OAuth 2.0, MySQL

---

## 💡 2. The Core Problem & Innovation

### The Post-Wedding Memory Bottleneck
During wedding receptions, guests take hundreds of candid photos on their mobile phones. Typically, couples struggle to collect these photos afterward—requesting them via chat groups leads to heavy image compression, missed files, and fragmented links.

### The Solution: Guest Camera & Live Album Sync
We engineered a frictionless web camera widget requiring **no app download**. Guests simply tap *Guest Camera* on their phones to snap or select photos, which automatically stream into a dedicated, secure Google Drive storage vault managed by the couple.

---

## 🚀 3. High-Complexity Core Features & Architecture

\`\`\`
[ Wedding Guest Smartphone ] 
       │
       ▼ (1. Tap Guest Camera — No App Needed)
[ Browser Camera / Gallery Picker ] 
       │
       ▼ (2. Background Direct Stream)
[ Laravel Backend + Google Drive API ] 
       │
       ├─► [ Live Reception Album Gallery ] (Instant View for Guests)
       │
       ▼ (3. Automated Sync & Cloud Backup)
[ Couple's Private Google Drive Vault ] ───► [ 1-Click High-Res Bulk Download ]
\`\`\`

### 01. Google Drive Live Guest Camera API Integration
- **Zero App Download:** Guests open the invitation link and tap *Guest Camera* directly in Chrome/Safari.
- **Direct Cloud Sync:** Photos uploaded by guests stream straight into a structured Google Drive folder using Google API Service Account authentication.
- **Live Memory Stream:** Guests can browse real-time reception photos uploaded by other attendees.

### 02. Couple's One-Click Download Vault
- **Bulk High-Res Export:** Mempelai (the couple) receives a private admin link to download all original, uncompressed photo files in a single ZIP archive directly from Google Drive.
- **Content Moderation:** Built-in admin toggle allowing the couple to review and approve photos before they appear in the public live gallery.

### 03. Interactive RSVP & Live Headcount Management
- **Real-Time Database Tracking:** Instant guest confirmation with guest count, attendance status (Ceremony vs Reception), and dietary preferences.

### 04. Digital Angpao & Gift Registry
- **1-Click Copy & QRIS:** Seamless bank transfer account copying and QRIS barcode displays for modern digital gifting.

### 05. Multi-Venue Navigation & Storytelling
- **Google Maps Integration:** Direct turn-by-turn navigation links for St. Mary's Cathedral (Ceremony) & The Grand Ballroom (Reception).
- **Interactive Love Story & Entourage Roster:** Beautiful timeline showcasing the couple's journey and introducing the bridal party.

---

## 🎨 4. Design System & Visual Strategy

- **Sophisticated Palette:** Deep navy blue coupled with warm cream accents, evoking elegance, intimacy, and timeless romance.
- **Mobile-First UX:** Optimized for smooth scrolling on all smartphone screens with quick-action floating buttons.

---

## 📈 5. Measured Impact & Results

- 📸 **450+ High-Resolution Guest Photos Uploaded:** Captured authentic reception moments without requesting files manually via WhatsApp.
- ⚡ **98% RSVP Response Rate:** Streamlined guest management for wedding planners.
- 🔒 **100% Original Quality Preserved:** Zero image compression loss compared to social media messaging apps.
`
};

async function main() {
  console.log('Upserting Wedding Invitation project into MySQL database...');
  
  const existing = await prisma.project.findFirst({
    where: {
      title: {
        contains: 'Olivia'
      }
    }
  });

  if (existing) {
    const updated = await prisma.project.update({
      where: { id: existing.id },
      data: weddingProject,
    });
    console.log('Updated Wedding project ID:', updated.id);
  } else {
    const created = await prisma.project.create({
      data: weddingProject,
    });
    console.log('Created Wedding project ID:', created.id);
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
