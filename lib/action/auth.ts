// actions/auth.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/supabase/prisma";

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const rawEmail = formData.get("email") as string;
  const rawPassword = formData.get("password") as string;
  const rawName = formData.get("name") as string;

  const data = {
    email: rawEmail?.trim(),
    password: rawPassword?.trim(),
    name: rawName?.trim(),
  };

  console.log(
    `Attempting SignUp for: '${data.email}' (Length: ${data.email?.length})`
  );

  // 1. Create auth user in Supabase
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
      },
    },
  });

  if (authError) {
    console.error("SignUp Error:", authError);
    return { error: authError.message };
  }

  // 2. Create user in our database (Prisma)
  if (authData.user) {
    try {
      await prisma.user.create({
        data: {
          supabaseId: authData.user.id,
          email: data.email,
          name: data.name,
          credits: 10, // Free tier credits
          subscriptionTier: "FREE",
        },
      });
    } catch (error) {
      console.error("Error creating user in database:", error);
      // User exists in Supabase but not in our DB - this shouldn't happen
      // You might want to handle this edge case
    }
  }

  revalidatePath("/", "layout");
  redirect("/auth/signIn");
}

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/welcome");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  redirect(data.url);
}

export async function signInWithGithub() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  redirect(data.url);
}
