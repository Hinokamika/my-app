"use server";

import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/supabase/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ContentTone } from "@prisma/client";

export async function getOnboardingState() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) {
    redirect("/auth/signIn");
  }

  const dbUser = await prisma.user.findUnique({
    where: { supabaseId: user.id },
    select: { onboardingStep: true, onboardingCompleted: true },
  });

  return dbUser;
}

export async function submitStep1(primaryGoal: string, mostFrequentContent: string) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) throw new Error("Unauthorized");

  await prisma.user.update({
    where: { supabaseId: user.id },
    data: {
      primaryGoal,
      mostFrequentContent,
      onboardingStep: 1,
    },
  });

  revalidatePath("/welcome");
  redirect("/welcome/step2"); // Redirect to Step 2 URL
}

export async function submitStep2(contentTypes: string[]) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) throw new Error("Unauthorized");

  await prisma.user.update({
    where: { supabaseId: user.id },
    data: {
      contentTypes,
      onboardingStep: 2,
    },
  });

  revalidatePath("/welcome");
  redirect("/welcome/step3"); // Redirect to Step 3 URL
}

export async function completeOnboarding(data: {
  defaultTone: string;
  defaultWordCount: number;
  preferredLanguage: string;
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) throw new Error("Unauthorized");

  await prisma.user.update({
    where: { supabaseId: user.id },
    data: {
      defaultTone: data.defaultTone as ContentTone,
      defaultWordCount: data.defaultWordCount,
      preferredLanguage: data.preferredLanguage,
      onboardingCompleted: true,
      onboardingStep: 3,
    },
  });

  revalidatePath("/");
  redirect("/welcome/finish");
}
