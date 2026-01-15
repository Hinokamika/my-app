"use client"

import { Formik, Form, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { TransitionCard } from "@/components/survey/TransitionCard"
import { submitStep2 } from "@/lib/actions/onboarding"
import { Loader2, ChevronLeft, ChevronRight, Check, FileText, Hash, Mail, ShoppingBag, Video, Newspaper } from "lucide-react"
import Link from "next/link"

interface Step2Values {
  contentTypes: string[]
}

const validationSchema = Yup.object().shape({
  contentTypes: Yup.array()
    .min(1, "Please select at least one content type")
    .of(Yup.string().required()),
})

const contentOptions = [
  { value: "BLOG_POST", label: "Blog Posts", description: "Long-form articles and guides", icon: FileText },
  { value: "SOCIAL_MEDIA", label: "Social Media Captions", description: "Short, engaging posts", icon: Hash },
  { value: "EMAIL_NEWSLETTER", label: "Email Newsletters", description: "Regular email updates", icon: Mail },
  { value: "PRODUCT_DESCRIPTION", label: "Product Descriptions", description: "E-commerce copy", icon: ShoppingBag },
  { value: "VIDEO_SCRIPT", label: "Video Scripts", description: "YouTube and TikTok scripts", icon: Video },
  { value: "PRESS_RELEASE", label: "Press Releases", description: "Official announcements", icon: Newspaper },
]

export default function Step2Page() {
  const initialValues: Step2Values = {
    contentTypes: [],
  }

  const handleSubmit = async (
    values: Step2Values,
    { setSubmitting }: FormikHelpers<Step2Values>
  ) => {
    try {
      setSubmitting(true)
      await submitStep2(values.contentTypes)
    } catch (error) {
      console.error("Error submitting step 2:", error)
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-50 to-purple-100 p-4">
      <TransitionCard
        step={2}
        totalSteps={3}
        className="w-full max-w-2xl"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentOptions.map((option) => {
                  const isChecked = values.contentTypes.includes(option.value)
                  const Icon = option.icon

                  return (
                    <div
                      key={option.value}
                      onClick={() => {
                        if (isChecked) {
                          setFieldValue(
                            "contentTypes",
                            values.contentTypes.filter((item) => item !== option.value)
                          )
                        } else {
                          setFieldValue("contentTypes", [...values.contentTypes, option.value])
                        }
                      }}
                      className={`relative flex flex-col items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 h-48 gap-4 hover:border-blue-400 hover:shadow-md ${
                        isChecked
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-950/30 ring-1 ring-blue-600"
                          : "border-border bg-background hover:bg-accent/50"
                      }`}
                    >
                      <div className="absolute top-4 right-4">
                        <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${
                          isChecked 
                            ? "bg-blue-600 border-blue-600 text-white" 
                            : "border-muted-foreground/30 bg-transparent"
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                      
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                        isChecked 
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <div className="text-center space-y-1">
                        <span className={`block font-semibold text-base ${isChecked ? "text-blue-700 dark:text-blue-300" : "text-foreground"}`}>
                          {option.label}
                        </span>
                        <p className="text-xs text-muted-foreground leading-tight px-2">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <ErrorMessage
                name="contentTypes"
                component="div"
                className="text-sm text-destructive font-medium text-center"
              />

              <div className="flex justify-between items-center pt-4">
                <div className="flex gap-4 items-center">
                  <Link href="/welcome/step1">
                    <Button
                      type="button"
                      variant="outline"
                      className="min-w-[100px]"
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  </Link>
                  <Link 
                    href="/welcome/step3" 
                    className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
                  >
                    Skip for now
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || values.contentTypes.length === 0}
                  className="bg-blue-600 hover:bg-blue-700 min-w-[140px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
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
