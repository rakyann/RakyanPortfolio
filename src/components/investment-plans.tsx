"use client";

import { Check, ArrowRight, Sparkles, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function InvestmentPlans() {
  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Rakyan,%20saya%20ingin%20konsultasi%20mengenai%20project%20website";

  const addOns = [
    { name: "Landing Page Tambahan", price: "Rp500.000" },
    { name: "Blog / News Module", price: "Rp750.000" },
    { name: "Modul Galeri", price: "Rp500.000" },
    { name: "Sistem Booking / Reservasi", price: "Rp1.500.000" },
    { name: "Dashboard Admin Custom", price: "Rp2.500.000" },
    { name: "Integrasi Payment Gateway", price: "Rp3.000.000" },
    { name: "Sistem Membership / Keanggotaan", price: "Rp3.500.000" },
    {name: "Integrasi Chatbot Otomatis", price: "Rp3.500.000" },
    { name: "Modul Smart Summary Engine", price: "Rp5.000.000" },
    { name: "Dukungan Multi Language", price: "Rp1.500.000" },
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-[#FAFAFA] border-t border-black/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#BEF264] text-black text-xs font-bold uppercase tracking-wider mb-4 border border-black/10">
            <Sparkles className="w-3.5 h-3.5" /> Investment Plans
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111] mb-6">
            Investment Plans
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
            Transformasikan potensi bisnis Anda dengan solusi digital kustom yang skalabel, profesional, dan berorientasi pada hasil.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Starter Package */}
          <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🌱</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-zinc-100 rounded-full text-zinc-600">Starter</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-2">Starter</h3>
              <p className="text-xs text-zinc-500 font-medium mb-6">
                Cocok untuk UMKM, personal branding, portofolio, dan landing page websites.
              </p>
              
              <div className="mb-6 pb-6 border-b border-black/5">
                <span className="text-xs text-zinc-400 font-bold block mb-1">Mulai dari</span>
                <span className="text-3xl font-extrabold text-[#111111]">Rp2.500.000</span>
                <span className="text-xs text-zinc-500 block mt-1 font-semibold">Estimasi: 1–2 minggu</span>
              </div>

              <ul className="space-y-3 text-sm text-zinc-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Hingga 5 halaman</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Responsive website</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>WhatsApp integration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Google Maps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>SSL & deployment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Maintenance 14 hari</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Hingga 2 sesi revisi</span>
                </li>
              </ul>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-full border border-black/10 bg-zinc-50 hover:bg-[#111111] hover:text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              Konsultasi Sekarang <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Business Package (Recommended) */}
          <div className="bg-[#111111] text-white rounded-3xl p-8 border-2 border-[#BEF264] shadow-2xl flex flex-col justify-between relative transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#BEF264] text-black px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md">
              Recommended Package
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-2xl">🚀</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/10 text-[#BEF264] rounded-full">Business</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
              <p className="text-xs text-zinc-400 font-medium mb-6">
                Rekomendasi utama untuk company profile website dan bisnis berkembang.
              </p>
              
              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-xs text-zinc-400 font-bold block mb-1">Mulai dari</span>
                <span className="text-3xl font-extrabold text-[#BEF264]">Rp4.500.000</span>
                <span className="text-xs text-zinc-400 block mt-1 font-semibold">Estimasi: 2–4 minggu</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-[#BEF264] mb-3">Semua fitur di Starter, plus:</p>
              <ul className="space-y-3 text-sm text-zinc-300 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Hingga 10 halaman</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>CMS Admin</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Blog / Artikel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Gallery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Team & Services Management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>SEO setup</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Google Analytics</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Admin training & Documentation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Maintenance 30 hari</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#BEF264] shrink-0 mt-0.5" />
                  <span>Hingga 4 sesi revisi</span>
                </li>
              </ul>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-full bg-[#BEF264] text-[#111111] hover:bg-white font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-xl"
            >
              Konsultasi Sekarang <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🏢</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-zinc-100 rounded-full text-zinc-600">Enterprise</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-2">Enterprise</h3>
              <p className="text-xs text-zinc-500 font-medium mb-6">
                Untuk perusahaan yang membutuhkan solusi digital yang lebih kompleks.
              </p>
              
              <div className="mb-6 pb-6 border-b border-black/5">
                <span className="text-xs text-zinc-400 font-bold block mb-1">Mulai dari</span>
                <span className="text-3xl font-extrabold text-[#111111]">Rp7.500.000</span>
                <span className="text-xs text-zinc-500 block mt-1 font-semibold">Estimasi: 4–8 minggu</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Semua fitur di Business, plus:</p>
              <ul className="space-y-3 text-sm text-zinc-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Dashboard Admin</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Multi User & Multi Role</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>API Integration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Multi Language</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Custom Form</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Maintenance 60 hari</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#88c226] shrink-0 mt-0.5" />
                  <span>Hingga 6 sesi revisi</span>
                </li>
              </ul>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-full border border-black/10 bg-zinc-50 hover:bg-[#111111] hover:text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              Konsultasi Sekarang <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Add-On Services Table */}
        <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#111111]">Add-On Services</h3>
            <p className="text-sm text-zinc-500 font-medium mt-1">
              Tambahkan modul khusus sesuai kebutuhan spesifik bisnis Anda:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/10 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <th className="py-3 px-4">Layanan / Modul Tambahan</th>
                  <th className="py-3 px-4 text-right">Biaya Investasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-sm font-semibold text-zinc-800">
                {addOns.map((addon, index) => (
                  <tr key={index} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-3.5 px-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#88c226]" />
                      {addon.name}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-[#111111]">
                      {addon.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes / Premium Disclaimer */}
        <div className="bg-zinc-100 rounded-3xl p-8 border border-black/5 flex flex-col md:flex-row items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-zinc-700 shrink-0 mt-1" />
          <div className="text-sm text-zinc-600 space-y-2 leading-relaxed">
            <h4 className="font-bold text-[#111111] text-base mb-1">Catatan Penting</h4>
            <p>• Harga bersifat estimasi awal. Biaya akhir disesuaikan dengan jumlah halaman, kompleksitas fitur, desain, integrasi, dan timeline project.</p>
            <p>• Penambahan fitur baru di luar scope akan dianggap sebagai change request.</p>
            <p>• Satu sesi revisi dapat mencakup beberapa perubahan yang dikirim sekaligus.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
