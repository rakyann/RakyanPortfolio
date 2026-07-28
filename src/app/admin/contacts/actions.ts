"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createContact(formData: FormData) {
  await prisma.contact.create({
    data: {
      platform: formData.get("platform") as string,
      url: formData.get("url") as string,
      icon: formData.get("icon") as string,
    },
  });
  revalidatePath("/admin/contacts");
}

export async function deleteContact(id: number) {
  await prisma.contact.delete({ where: { id } });
  revalidatePath("/admin/contacts");
}
