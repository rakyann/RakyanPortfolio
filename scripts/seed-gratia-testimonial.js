const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Gratia Wedding Organizer Purwokerto testimonial into MySQL database...');

  await prisma.testimonial.create({
    data: {
      name: 'Mba Gratia',
      role: 'Owner & Lead Planner at Gratia Wedding Organizer (Purwokerto)',
      content: 'Sebagai Wedding Organizer di Purwokerto, bermitra dengan Rakyan sebagai vendor pembuatan website undangan digital sangat meningkatkan kelas paket wedding kami! Fitur Google Drive Live Guest Camera-nya jadi nilai jual utama, pengantin dan tamu-tamu sangat terkesan karena foto momen resepsi langsung terkumpul otomatis di drive.',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    },
  });

  console.log('Successfully seeded Gratia WO Purwokerto Testimonial!');
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
