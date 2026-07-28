import prisma from "@/lib/prisma";
import { createContact, deleteContact } from "./actions";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  let contacts: any[] = [];
  try {
    contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Prisma fetch failed in ContactsPage:", error);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manage Contacts</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Add New Contact</h2>
        <form action={createContact} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Platform (e.g. Instagram, Email, LinkedIn)</label>
            <input name="platform" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">URL / Link</label>
            <input type="url" name="url" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Icon Name (Optional, for Lucide icons)</label>
            <input name="icon" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900" />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Save Contact
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((c) => (
              <tr key={c.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{c.platform}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600"><a href={c.url} target="_blank" rel="noreferrer">Link</a></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.icon || "-"}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <form action={async () => {
                    "use server";
                    await deleteContact(c.id);
                  }}>
                    <button type="submit" className="text-red-600 hover:text-red-900">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">No contacts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
