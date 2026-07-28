import prisma from "@/lib/prisma";
import { createProject, deleteProject } from "./actions";
import InlineUploader from "./InlineUploader";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manage Projects</h1>
      </div>

      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-black/5 max-w-2xl">
        <h2 className="text-lg font-bold mb-4">Add New Project</h2>
        
        <div className="mb-6">
          <InlineUploader />
        </div>

        <form action={createProject} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Project Title</label>
            <input name="title" required className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Short Description</label>
            <textarea name="description" required rows={2} className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all"></textarea>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Project Story (Markdown Content)</label>
            <p className="text-xs text-zinc-500 mb-2">Write your story here. Use the uploader above to get image codes like `![alt](/uploads/xxx.png)` and paste them here.</p>
            <textarea name="content" rows={10} className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all font-mono text-sm"></textarea>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Upload Main Image</label>
            <input type="file" name="imageFile" accept="image/*" className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Or Image URL</label>
            <input name="image" className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Project Link (Optional)</label>
            <input type="url" name="link" className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none transition-all" />
          </div>
          <button type="submit" className="bg-[#111111] text-white px-6 py-3 rounded-full font-bold hover:bg-[#BEF264] hover:text-[#111111] transition-all shadow-lg">
            Save Project
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{p.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{p.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <form action={async () => {
                    "use server";
                    await deleteProject(p.id);
                  }}>
                    <button type="submit" className="text-red-600 hover:text-red-900">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">No projects found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
