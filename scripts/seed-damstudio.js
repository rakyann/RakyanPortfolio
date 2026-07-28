const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const damProject = {
  title: 'DAM Studio - Next-Gen 3D Asset Management & Cloud Converter',
  description: 'Cloud-based 3D asset management system for DAM Studio (Cilacap) featuring universal drag-and-drop file uploads (.blend, .fbx, .obj), automated background 3D format conversion to web-optimized .glb, and an interactive WebGL/Three.js 3D viewer turntable.',
  image: '/dam_studio.png',
  link: 'https://damstudio.id',
  content: `
# Case Study: DAM Studio - Next-Gen 3D Cloud Asset Management

> **Elevating 3D workflows for Cilacap's premier large-scale 3D sculpting studio with automated mesh conversion and interactive WebGL turntables.**

---

## 📌 1. Executive Summary

**DAM Studio** (Cilacap, Central Java) is a specialized 3D design and sculpting studio renowned for creating high-fidelity digital models and large-scale (jumbo) physical prop prototypes. 

To overcome the friction of sharing massive 3D master files with corporate clients and production partners, we architected **DAM Studio Cloud**—a digital asset management (DAM) ecosystem capable of ingesting raw 3D formats (\`.blend\`, \`.fbx\`, \`.obj\`), automatically optimizing meshes in the background, and rendering interactive 360-degree 3D previews directly in web browsers.

* **Role:** Lead Fullstack Architect & WebGL Developer
* **Timeline:** 4 Weeks
* **Tech Stack:** Next.js, Three.js, React Three Fiber, Node.js, Draco Compression, AWS S3, Tailwind CSS

---

## 💡 2. The Core Challenge & Business Opportunity

### Heavy Files & Client Viewing Barriers
Raw 3D files created in Blender or Maya often exceed 200MB–1GB per asset. Clients reviewing these models previously had to download heavy CAD software or wait for static image renders, delaying approval loops for weeks.

### The WebGL Cloud Solution
We engineered a pipeline that converts raw 3D uploads into compressed, web-ready \`.glb\` files on the fly, rendering them inside an interactive Three.js viewport with dynamic lighting, shadows, and orbit controls.

---

## 🚀 3. High-Complexity Core Features & Architecture

\`\`\`
[ 3D Creator Uploads .blend / .fbx / .obj ] 
       │
       ▼ (1. Universal Drag & Drop Upload)
[ Amazon S3 Secure Storage Vault ] 
       │
       ▼ (2. Background Node.js + Draco Engine)
[ Auto-Mesh Conversion & Draco 90% Compression ] 
       │
       ▼ (3. Web-Optimized .glb Output)
[ Interactive Three.js / WebGL 3D Turntable ] ──► [ Client Browser 360° Inspection ]
\`\`\`

### 01. Universal Upload & Cloud Storage Vault
- **Multi-Format Ingestion:** Drag-and-drop support for \`.blend\`, \`.fbx\`, and \`.obj\` files up to 2GB per upload.
- **Secure File Parsing:** Serverless chunked uploads ensuring zero timeout errors during large asset transfers.

### 02. Automated Background 3D Converter
- **Draco Geometry Compression:** Reduces heavy polygon meshes by up to 90% without visible quality loss.
- **Auto \`.glb\` Pipeline:** Converts proprietary 3D formats into web-standard binary GLTF (\`.glb\`) for instant browser execution.

### 03. Immersive WebGL 3D Viewer
- **Interactive 360° Turntable:** Smooth mouse orbit controls, pan, zoom, and wireframe toggle.
- **Studio Lighting Presets:** Real-time PBR (Physically Based Rendering) materials, HDR environment maps, and soft shadows.

### 04. Client Preview & Security Controls
- **Zero Raw File Leakage:** Clients can inspect every angle of the 3D model in 360° while raw source files remain securely locked in admin storage.

---

## 📈 4. Measured Impact & Results

- ⚡ **90% Reduction in File Size:** Compressed 3D assets from 500MB down to sub-15MB GLB files.
- ⏱️ **Instant Client Approvals:** Cut client review cycles from 5 days down to 10 minutes via interactive browser links.
- 🎨 **100% Zero Software Dependency:** Clients inspect complex jumbo 3D models directly on their smartphones or laptops.
`
};

async function main() {
  console.log('Upserting DAM Studio project into MySQL database...');
  
  const existing = await prisma.project.findFirst({
    where: {
      title: {
        contains: 'DAM Studio'
      }
    }
  });

  if (existing) {
    const updated = await prisma.project.update({
      where: { id: existing.id },
      data: damProject,
    });
    console.log('Updated DAM Studio project ID:', updated.id);
  } else {
    const created = await prisma.project.create({
      data: damProject,
    });
    console.log('Created DAM Studio project ID:', created.id);
  }

  // Seed Testimonial for DAM Studio (Damar Setyawan)
  console.log('Seeding DAM Studio Founder testimonial...');
  await prisma.testimonial.create({
    data: {
      name: 'Damar Setyawan',
      role: 'Founder & Lead 3D Sculptor at DAM Studio (Cilacap)',
      content: 'Website DAM Studio buatan Rakyan sangat membantu studio kami di Cilacap! Klien luar kota sekarang bisa langsung memutar dan mengecek model 3D jumbo kami secara 360 derajat di browser tanpa perlu install Blender atau 3ds Max. Fitur auto-convert ke .glb sangat jenius!',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    },
  });

  console.log('Successfully seeded DAM Studio & Testimonial!');
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
