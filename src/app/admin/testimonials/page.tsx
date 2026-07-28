import prisma from "@/lib/prisma";
import { createTestimonial, deleteTestimonial } from "./actions";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manage Testimonials</h1>
      </div>

      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-black/5 max-w-2xl">
        <h2 className="text-lg font-bold mb-4">Add New Testimonial</h2>
        <form action={createTestimonial} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Client Name</label>
            <input name="name" required className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Role/Company</label>
            <input name="role" className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Upload Photo (Optional)</label>
            <input type="file" name="imageFile" accept="image/*" className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Testimonial Content</label>
            <textarea name="content" required rows={4} className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all"></textarea>
          </div>
          <button type="submit" className="bg-[#111111] text-white px-6 py-3 rounded-full font-bold hover:bg-[#BEF264] hover:text-[#111111] transition-all shadow-lg">
            Save Testimonial
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {testimonials.map((t) => (
              <tr key={t.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{t.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.role}</td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{t.content}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <form action={async () => {
                    "use server";
                    await deleteTestimonial(t.id);
                  }}>
                    <button type="submit" className="text-red-600 hover:text-red-900">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {testimonials.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">No testimonials found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
