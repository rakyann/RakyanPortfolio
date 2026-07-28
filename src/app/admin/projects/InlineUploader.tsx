"use client";
import { useState } from "react";
import { uploadInlineImage } from "./actions";

export default function InlineUploader() {
  const [loading, setLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const url = await uploadInlineImage(formData);
      if (url) {
        const mdString = `![${file.name}](${url})`;
        await navigator.clipboard.writeText(mdString);
        setCopiedUrl(mdString);
        setTimeout(() => setCopiedUrl(""), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      e.target.value = ''; // reset
    }
  };

  return (
    <div className="bg-zinc-100 p-4 rounded-xl border border-black/10 flex items-center gap-4 text-sm">
      <div className="font-bold">Inline Image Uploader</div>
      <label className="bg-white border border-black/10 px-4 py-2 rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors">
        {loading ? "Uploading..." : "Upload & Copy Markdown"}
        <input type="file" className="hidden" accept="image/*" onChange={handleUpload} disabled={loading} />
      </label>
      {copiedUrl && (
        <span className="text-green-600 font-bold">Copied: {copiedUrl}</span>
      )}
    </div>
  );
}
