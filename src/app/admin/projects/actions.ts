"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { uploadFile } from "@/lib/upload";

export async function createProject(formData: FormData) {
  const imageFile = formData.get("imageFile") as File | null;
  const uploadedUrl = await uploadFile(imageFile);
  const manualImage = formData.get("image") as string;
  
  const image = uploadedUrl || manualImage || null;

  await prisma.project.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      image,
      link: formData.get("link") as string,
    },
  });
  revalidatePath("/admin/projects");
  revalidatePath("/");
}

export async function deleteProject(id: number) {
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projects");
  revalidatePath("/");
}

export async function uploadInlineImage(formData: FormData) {
  const file = formData.get("file") as File | null;
  const url = await uploadFile(file);
  return url;
}
