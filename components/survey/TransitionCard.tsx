"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SurveyProgress } from "@/components/survey/SurveyProgress"
import { cn } from "@/lib/utils"

interface TransitionCardProps {
  step: number
  totalSteps: number
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function TransitionCard({
  step,
  totalSteps,
  children,
  footer,
  className,
}: TransitionCardProps) {
  return (
    <motion.div
      key={step}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      }}
    >
      <Card className={cn("w-full max-w-lg", className)}>
        <CardHeader className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-purple-600">Step {step} of {totalSteps}</CardTitle>
            <CardDescription>Tell us about your goals</CardDescription>
          </div>
          <SurveyProgress currentStep={step} totalSteps={totalSteps} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </motion.div>
  )
}
