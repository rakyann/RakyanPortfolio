"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { uploadFile } from "@/lib/upload";

export async function updateProfile(formData: FormData) {
  const imageFile = formData.get("imageFile") as File | null;
  const uploadedUrl = await uploadFile(imageFile);
  const manualImage = formData.get("imageUrl") as string;
  
  const imageUrl = uploadedUrl || manualImage || undefined;

  await prisma.profile.update({
    where: { id: 1 },
    data: {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      heroDescription: formData.get("heroDescription") as string,
      aboutHeader: formData.get("aboutHeader") as string,
      aboutText1: formData.get("aboutText1") as string,
      aboutText2: formData.get("aboutText2") as string,
      ...(imageUrl ? { imageUrl } : {}),
    },
  });
  revalidatePath("/admin/profile");
  revalidatePath("/");
}
