import { login } from "@/lib/actions";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#BEF264] selection:text-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-[2rem] shadow-xl border border-black/5">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-[#111111]">Admin Login.</h1>
          <p className="text-sm text-zinc-500 mt-2 font-medium">Welcome back, Rakyan.</p>
        </div>
        
        <form action={login} className="space-y-4 mt-8 font-medium">
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all"
              placeholder="rkyan22@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#111111] mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="block w-full px-4 py-3 bg-zinc-50 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#BEF264] focus:border-[#BEF264] outline-none text-[#111111] transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-4 mt-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-[#111111] hover:bg-[#BEF264] hover:text-[#111111] transition-all hover:shadow-xl"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
