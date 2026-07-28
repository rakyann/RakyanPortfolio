import Link from "next/link";
import { logout } from "@/lib/actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex font-sans selection:bg-[#BEF264] selection:text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-black/5 hidden md:block z-50">
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-black/5">
            <span className="text-xl font-bold tracking-tighter">Rakyan Admin.</span>
          </div>
          <nav className="flex-1 px-4 py-8 space-y-3 font-medium">
            <Link
              href="/admin"
              className="flex items-center px-4 py-3 rounded-xl hover:bg-[#BEF264] hover:text-[#111111] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/profile"
              className="flex items-center px-4 py-3 rounded-xl hover:bg-[#BEF264] hover:text-[#111111] transition-colors"
            >
              Profile Settings
            </Link>
            <Link
              href="/admin/testimonials"
              className="flex items-center px-4 py-3 rounded-xl hover:bg-[#BEF264] hover:text-[#111111] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/admin/projects"
              className="flex items-center px-4 py-3 rounded-xl hover:bg-[#BEF264] hover:text-[#111111] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/admin/contacts"
              className="flex items-center px-4 py-3 rounded-xl hover:bg-[#BEF264] hover:text-[#111111] transition-colors"
            >
              Contacts
            </Link>
          </nav>
          <div className="p-4 border-t border-black/5">
            <form action={logout}>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-bold text-[#111111] bg-red-100 rounded-xl hover:bg-red-200 transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background gradient hint */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#BEF264]/20 to-transparent blur-[100px] -z-10 pointer-events-none" />
        
        <header className="h-16 bg-white border-b border-black/5 flex items-center px-6 md:hidden">
          <span className="text-xl font-bold tracking-tighter">Rakyan Admin.</span>
        </header>
        <div className="p-8 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
