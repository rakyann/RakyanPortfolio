import prisma from "@/lib/prisma";
import { updateProfile } from "./actions";

export default async function ProfilePage() {
  const profile = await prisma.profile.findUnique({ where: { id: 1 } });
  
  if (!profile) return <div>Profile not found. Seed the DB first.</div>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#111111] tracking-tight">Profile Settings</h1>
        <p className="text-zinc-500 mt-2">Update your personal information shown on the landing page.</p>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 max-w-3xl">
        <form action={updateProfile} className="space-y-6" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">Display Name</label>
              <input name="name" defaultValue={profile.name} required className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#111111] mb-2">Role</label>
              <input name="role" defaultValue={profile.role} required className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Hero Description (Short Text)</label>
            <textarea name="heroDescription" defaultValue={profile.heroDescription} required rows={2} className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all"></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">About Section Header</label>
            <input name="aboutHeader" defaultValue={profile.aboutHeader} required className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all" />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">About Section Paragraph 1</label>
            <textarea name="aboutText1" defaultValue={profile.aboutText1} required rows={4} className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all"></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">About Section Paragraph 2</label>
            <textarea name="aboutText2" defaultValue={profile.aboutText2} required rows={4} className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all"></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Upload Profile Photo</label>
            <input type="file" name="imageFile" accept="image/*" className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl text-sm" />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2">Or Image URL</label>
            <input name="imageUrl" defaultValue={profile.imageUrl} className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all" />
            <div className="mt-4 w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#BEF264]">
              <img src={profile.imageUrl} className="w-full h-full object-cover" alt="Profile Preview" />
            </div>
          </div>

          <button type="submit" className="bg-[#111111] text-white px-8 py-3 rounded-full font-bold hover:bg-[#BEF264] hover:text-[#111111] transition-all shadow-lg hover:shadow-xl">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
