import { cn } from "@/lib/utils"

interface SurveyProgressProps {
  currentStep: number
  totalSteps: number
  className?: string
}

export function SurveyProgress({
  currentStep,
  totalSteps,
  className,
}: SurveyProgressProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep

        return (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 border-2",
              isActive
                ? "w-7 bg-purple-600 border-purple-600 scale-110"
                : isCompleted
                  ? "bg-purple-600 border-purple-600"
                  : "bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            )}
          />
        )
      })}
    </div>
  )
}
