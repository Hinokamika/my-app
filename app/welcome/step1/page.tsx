"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TransitionCard } from "@/components/survey/TransitionCard";
import { submitStep1 } from "@/lib/actions/onboarding";
import {
  Loader2,
  MoveRight,
  FileText,
  Share2,
  Mail,
  Package,
  LayoutPanelLeft,
  SquareMousePointer,
  Clapperboard,
  CirclePile,
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Step1Values {
  primaryGoal: string;
  mostFrequentContent: string;
}

const validationSchema = Yup.object().shape({
  primaryGoal: Yup.string().required("Please select a primary goal"),
  mostFrequentContent: Yup.string().required("Please select your most frequent content"),
});

const mainGoalOptions = [
  {
    value: "create_blogs",
    content: "Write posts",
    label: "Write posts",
  },
  {
    value: "create_posts",
    content: "Social media",
    label: "Social media",
  },
  {
    value: "emailing",
    content: "Email marketing",
    label: "Email marketing",
  },
  {
    value: "copy_website",
    content: "Website copy",
    label: "Website copy",
  },
  {
    value: "publish_ads",
    content: "Ads",
    label: "Ads",
  },
  {
    value: "write_script",
    content: "Script",
    label: "Script",
  },
];

const goalOptions = [
  {
    value: "blog_posts",
    label: "Write blog posts",
    description: "Create engaging blog articles",
    icon: FileText,
  },
  {
    value: "social_media",
    label: "Social media",
    description: "Generate posts for Instagram, Twitter, LinkedIn",
    icon: Share2,
  },
  {
    value: "email_marketing",
    label: "Email",
    description: "Craft compelling email campaigns",
    icon: Mail,
  },
  {
    value: "website_copy",
    label: "Website Copy",
    description: "Write persuasive product copy",
    icon: LayoutPanelLeft,
  },
  {
    value: "ads",
    label: "Ads",
    description: "Write persuasive product copy",
    icon: SquareMousePointer,
  },
  {
    value: "script",
    label: "Script",
    description: "Write persuasive product copy",
    icon: Clapperboard,
  },
];

export default function Step1Page() {
  const initialValues: Step1Values = {
    primaryGoal: "",
    mostFrequentContent: "",
  };

  const handleSubmit = async (
    values: Step1Values,
    { setSubmitting }: FormikHelpers<Step1Values>
  ) => {
    try {
      setSubmitting(true);
      await submitStep1(values.primaryGoal, values.mostFrequentContent);
    } catch (error) {
      console.error("Error submitting step 1:", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4">
      <TransitionCard step={1} totalSteps={3} className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-2">Welcome to ContentCraft</h1>
        <p className="text-muted-foreground mb-6">
          Let&apos;s personalize your AI workspace to get you best results from
          day one
        </p>
        <p className="text-black mb-3 font-bold">
          What type of content do you create most often
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="space-y-6">
              <div className="space-y-4">
                <RadioGroup
                  value={values.mostFrequentContent}
                  onValueChange={(value) =>
                    setFieldValue("mostFrequentContent", value)
                  }
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {goalOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <Label
                        key={option.value}
                        htmlFor={option.value}
                        className={`relative rounded-lg border-2 px-5 py-4 cursor-pointer transition-all hover:border-purple-300 h-28 flex flex-col ${
                          values.mostFrequentContent === option.value
                            ? "border-purple-500 bg-purple-100 dark:bg-purple-750"
                            : "border-border bg-background"
                        }`}
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="absolute top-4 right-4"
                        />
                        <div className="flex flex-col items-center justify-center h-full gap-6">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center">
                            <Icon className="w-7 h-7 text-purple-600 dark:text-purple-300" />
                          </div>
                          <span
                            className={`text-center text-base font-medium ${
                              values.mostFrequentContent === option.value
                                ? "text-purple-500"
                                : "text-black"
                            }`}
                          >
                            {option.label}
                          </span>
                        </div>
                      </Label>
                    );
                  })}
                </RadioGroup>
                <ErrorMessage
                  name="mostFrequentContent"
                  component="div"
                  className="text-sm text-destructive"
                />

                <p className="font-bold pt-4">What&apos;s your main goal?</p>
                <Select
                  value={values.primaryGoal}
                  onValueChange={(value) =>
                    setFieldValue("primaryGoal", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <CirclePile className="w-4 h-4 mr-2 text-purple-600" />
                      <SelectValue placeholder="Select your primary goal..." />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {mainGoalOptions.map((goal) => {
                        return (
                          <SelectItem key={goal.value} value={goal.value}>
                            {goal.label}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <ErrorMessage
                  name="primaryGoal"
                  component="div"
                  className="text-sm text-destructive"
                />
              </div>

              <div className="flex justify-between pt-4">
                <Link
                  href="/welcome/step2"
                  className="text-gray-400 hover:text-gray-600 mt-1"
                >
                  Skip for now
                </Link>
                <Button
                  type="submit"
                  disabled={isSubmitting || !values.primaryGoal || !values.mostFrequentContent}
                  className="bg-purple-600 hover:bg-purple-700 min-w-[140px] min-h-[40px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Continue"
                  )}
                  <MoveRight />
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </TransitionCard>
    </div>
  );
}
