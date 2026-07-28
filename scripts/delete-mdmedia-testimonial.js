const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Deleting MDMedia testimonial from MySQL database...');
  await prisma.testimonial.deleteMany({
    where: {
      OR: [
        { name: { contains: 'Budi Perkasa' } },
        { role: { contains: 'MDMedia' } },
        { content: { contains: 'MDMedia' } }
      ]
    }
  });
  console.log('MDMedia testimonial successfully deleted!');
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
