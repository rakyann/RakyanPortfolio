import prisma from "@/lib/prisma";

const quotes = [
  "Design is not just what it looks like and feels like. Design is how it works. – Steve Jobs",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for. – Milton Glaser",
  "Good design is like a refrigerator—when it works, no one notices, but when it doesn't, it sure stinks. – Irene Au",
  "The details are not the details. They make the design. – Charles Eames",
  "Everything is designed. Few things are designed well. – Brian Reed",
  "Design creates culture. Culture shapes values. Values determine the future. – Robert L. Peters"
];

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  let testimonialsCount = 0;
  let contactsCount = 0;
  let projectsCount = 0;

  try {
    testimonialsCount = await prisma.testimonial.count();
    contactsCount = await prisma.contact.count();
    projectsCount = await prisma.project.count();
  } catch (error) {
    console.warn("Prisma fetch failed in AdminDashboard:", error);
  }
  
  // Pick a quote based on the current day of the week
  const today = new Date().getDay();
  const quoteOfTheDay = quotes[today % quotes.length];

  return (
    <div className="space-y-8">
      {/* Welcome & Quote Block */}
      <div className="bg-[#111111] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#BEF264] rounded-full blur-[80px] opacity-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Welcome back, Rakyan! 👋</h1>
          <p className="text-zinc-400 font-medium text-lg mb-8">Ready to create something amazing today?</p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
            <p className="text-sm text-[#BEF264] font-bold uppercase tracking-wider mb-2">Quote of the Day</p>
            <p className="text-xl md:text-2xl font-playfair italic font-medium leading-snug">"{quoteOfTheDay}"</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#111111] tracking-tight">At a Glance</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 hover:border-[#BEF264] transition-colors group">
          <h2 className="text-lg font-bold text-[#111111]">Projects</h2>
          <p className="text-5xl font-bold text-[#111111] mt-4 group-hover:text-[#BEF264] transition-colors">{projectsCount}</p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 hover:border-[#BEF264] transition-colors group">
          <h2 className="text-lg font-bold text-[#111111]">Testimonials</h2>
          <p className="text-5xl font-bold text-[#111111] mt-4 group-hover:text-[#BEF264] transition-colors">{testimonialsCount}</p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 hover:border-[#BEF264] transition-colors group">
          <h2 className="text-lg font-bold text-[#111111]">Contacts</h2>
          <p className="text-5xl font-bold text-[#111111] mt-4 group-hover:text-[#BEF264] transition-colors">{contactsCount}</p>
        </div>
      </div>
    </div>
  );
}
