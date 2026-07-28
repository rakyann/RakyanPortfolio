"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { uploadFile } from "@/lib/upload";

export async function createTestimonial(formData: FormData) {
  const imageFile = formData.get("imageFile") as File | null;
  const uploadedUrl = await uploadFile(imageFile);
  
  await prisma.testimonial.create({
    data: {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      content: formData.get("content") as string,
      imageUrl: uploadedUrl || null,
    },
  });
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}

export async function deleteTestimonial(id: number) {
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}
