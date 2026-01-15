"use client"

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TransitionCard } from "@/components/survey/TransitionCard"
import { completeOnboarding } from "@/lib/actions/onboarding"
import { Loader2, ChevronLeft, Sparkles, Wand2, Type, Globe, Check } from "lucide-react"
import Link from "next/link"

interface Step3Values {
  defaultTone: string
  defaultWordCount: number
  preferredLanguage: string
}

const validationSchema = Yup.object().shape({
  defaultTone: Yup.string()
    .required("Please select a tone"),
  defaultWordCount: Yup.number()
    .min(50, "Word count must be at least 50")
    .max(5000, "Word count must be at most 5000")
    .required("Please enter a word count"),
  preferredLanguage: Yup.string()
    .required("Please select a language"),
})

const toneOptions = [
  { value: "PROFESSIONAL", label: "Professional", description: "Formal and business-like" },
  { value: "CASUAL", label: "Casual", description: "Relaxed and conversational" },
  { value: "FRIENDLY", label: "Friendly", description: "Warm and approachable" },
  { value: "TECHNICAL", label: "Technical", description: "Detailed and industry-specific" },
  { value: "PERSUASIVE", label: "Persuasive", description: "Compelling and convincing" },
  { value: "EDUCATIONAL", label: "Educational", description: "Informative and instructional" },
]

const languageOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "nl", label: "Dutch" },
  { value: "ru", label: "Russian" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
  { value: "ar", label: "Arabic" },
  { value: "hi", label: "Hindi" },
  { value: "tr", label: "Turkish" },
  { value: "pl", label: "Polish" },
]

export default function Step3Page() {
  const initialValues: Step3Values = {
    defaultTone: "",
    defaultWordCount: 800,
    preferredLanguage: "en",
  }

  const handleSubmit = async (
    values: Step3Values,
    { setSubmitting }: FormikHelpers<Step3Values>
  ) => {
    try {
      setSubmitting(true)
      await completeOnboarding({
        defaultTone: values.defaultTone,
        defaultWordCount: values.defaultWordCount,
        preferredLanguage: values.preferredLanguage,
      })
    } catch (error) {
      console.error("Error completing onboarding:", error)
      setSubmitting(false)
    }
  }

  const handleSkip = async () => {
    try {
      await completeOnboarding({
        defaultTone: "PROFESSIONAL",
        defaultWordCount: 800,
        preferredLanguage: "en",
      })
    } catch (error) {
      console.error("Error skipping onboarding:", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 p-4">
      <TransitionCard
        step={3}
        totalSteps={3}
        className="w-full max-w-4xl"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border/50 shadow-sm flex flex-col h-full">
                  <Label htmlFor="defaultTone" className="flex items-center gap-2 text-base font-semibold text-green-700 dark:text-green-400 mb-1">
                    <Wand2 className="w-4 h-4" />
                    Default Tone
                  </Label>
                  <p className="text-sm text-muted-foreground mb-4 pl-6">
                    How should your content sound?
                  </p>
                  <div className="mt-auto">
                    <Select
                      value={values.defaultTone}
                      onValueChange={(value) => setFieldValue("defaultTone", value)}
                    >
                      <SelectTrigger className="w-full bg-background border-green-200 focus:ring-green-500/20 h-12">
                        <SelectValue placeholder="Select a tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {toneOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex flex-col py-1">
                              <span className="font-medium">{option.label}</span>
                              <span className="text-xs text-muted-foreground">
                                {option.description}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <ErrorMessage
                      name="defaultTone"
                      component="div"
                      className="text-sm text-destructive mt-1 pl-1"
                    />
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border/50 shadow-sm flex flex-col h-full">
                  <Label htmlFor="defaultWordCount" className="flex items-center gap-2 text-base font-semibold text-green-700 dark:text-green-400 mb-1">
                    <Type className="w-4 h-4" />
                    Word Count
                  </Label>
                  <p className="text-sm text-muted-foreground mb-4 pl-6">
                    Target length
                  </p>
                  <div className="relative mt-auto">
                    <Field
                      as={Input}
                      type="number"
                      id="defaultWordCount"
                      name="defaultWordCount"
                      min="50"
                      max="5000"
                      step="50"
                      placeholder="800"
                      className="bg-background border-green-200 focus-visible:ring-green-500/20 pr-12 h-12"
                    />
                    <span className="absolute right-3 top-3.5 text-xs text-muted-foreground font-medium">words</span>
                  </div>
                  <ErrorMessage
                    name="defaultWordCount"
                    component="div"
                    className="text-sm text-destructive mt-1 pl-1"
                  />
                </div>

                <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border/50 shadow-sm flex flex-col h-full">
                  <Label htmlFor="preferredLanguage" className="flex items-center gap-2 text-base font-semibold text-green-700 dark:text-green-400 mb-1">
                    <Globe className="w-4 h-4" />
                    Language
                  </Label>
                  <p className="text-sm text-muted-foreground mb-4 pl-6">
                    Output language
                  </p>
                  <div className="mt-auto">
                    <Select
                      value={values.preferredLanguage}
                      onValueChange={(value) => setFieldValue("preferredLanguage", value)}
                    >
                      <SelectTrigger className="w-full bg-background border-green-200 focus:ring-green-500/20 h-12">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languageOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <ErrorMessage
                      name="preferredLanguage"
                      component="div"
                      className="text-sm text-destructive mt-1 pl-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div className="flex gap-4 items-center">
                  <Link href="/welcome/step2">
                    <Button
                      type="button"
                      variant="outline"
                      className="min-w-[100px]"
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  </Link>
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors cursor-pointer"
                  >
                    Skip for now
                  </button>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !values.defaultTone || !values.preferredLanguage}
                  className="bg-green-600 hover:bg-green-700 min-w-[140px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Completing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Complete Setup
                    </>
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </TransitionCard>
    </div>
  )
}
