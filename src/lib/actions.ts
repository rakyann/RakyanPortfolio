"use server";

import { cookies } from "next/headers";
import { encrypt } from "./auth";
import { redirect } from "next/navigation";

export async function login(formData: FormData): Promise<void> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "rkyan22@gmail.com" && password === "rkyanMDM1-") {
    // Valid credentials
    const session = await encrypt({ user: email });
    const cookieStore = await cookies();
    cookieStore.set("session", session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    
    redirect("/admin");
  } else {
    redirect("/login?error=invalid_credentials");
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  redirect("/login");
}
