const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding 2 new testimonials into MySQL database...');

  // Optional: clear existing test testimonials
  await prisma.testimonial.deleteMany({});

  // 1. Testimonial for CV Gani Pranata (Mba Shavira)
  await prisma.testimonial.create({
    data: {
      name: 'Mba Shavira',
      role: 'HR & Operations Lead at CV Gani Pranata Consulting',
      content: 'Pengembangan platform GaniConsulting benar-benar mengubah cara kami melayani klien. Fitur live chat ke psikolog sangat responsif, dan yang paling luar biasa adalah ringkasan otomatisnya, psikolog kami sekarang hemat waktu dokumentasi dari 30 menit jadi 2 menit saja per sesi. Hasilnya luar biasa!',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    },
  });

  // 2. Testimonial for MDMedia
  await prisma.testimonial.create({
    data: {
      name: 'Budi Perkasa',
      role: 'Product Manager at PT Metra Digital Media (MDMedia)',
      content: 'Redesain portal internal MDMedia oleh Rakyan sangat profesional dan intuitif. Tampilan modern dengan widget Waspada Penipuan dan banner event Lebaran memudahkan 500+ karyawan mengakses informasi penting secara cepat. Onboarding karyawan baru juga jadi jauh lebih efisien!',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    },
  });

  console.log('Successfully seeded 2 testimonials!');
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
