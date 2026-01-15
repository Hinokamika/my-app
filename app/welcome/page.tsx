import { redirect } from "next/navigation"
import { getOnboardingState } from "@/lib/actions/onboarding"

export default async function WelcomePage() {
  const user = await getOnboardingState()

  if (!user) {
    redirect("/auth/signIn")
  }

  if (user.onboardingCompleted) {
    redirect("/dashboard")
  }

  if (user.onboardingStep === 0) {
    redirect("/welcome/step1")
  }

  if (user.onboardingStep === 1) {
    redirect("/welcome/step2")
  }

  if (user.onboardingStep === 2) {
    redirect("/welcome/step3")
  }

  redirect("/welcome/step1")
}
