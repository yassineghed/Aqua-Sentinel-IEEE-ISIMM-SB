"use client"

import { useState } from "react"
import { ChevronRight, Waves, AlertTriangle, Users } from "lucide-react"

interface OnboardingScreenProps {
  onComplete: () => void
}

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      icon: Waves,
      title: "Welcome to MarineGuard",
      description: "Protect Tunisia's marine ecosystem by detecting and monitoring invasive species",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: AlertTriangle,
      title: "Real-time Detection",
      description: "AI-powered BRUVS cameras detect invasive species instantly and alert the community",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Users,
      title: "Join the Mission",
      description: "Citizens, researchers, and fishers working together to protect our oceans",
      color: "from-blue-500 to-indigo-600",
    },
  ]

  const slide = slides[currentSlide]
  const Icon = slide.icon

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-white">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${slide.color}`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-foreground">{slide.title}</h1>
          <p className="text-lg text-muted-foreground">{slide.description}</p>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all ${idx === currentSlide ? "w-8 bg-blue-600" : "w-2 bg-blue-300"
                }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="space-y-3 pt-4">
          {currentSlide < slides.length - 1 ? (
            <>
              <button
                onClick={() => setCurrentSlide(currentSlide + 1)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                Next <ChevronRight size={20} />
              </button>
              <button
                onClick={onComplete}
                className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 py-3 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
              >
                Skip
              </button>
            </>
          ) : (
            <button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              Get Started <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
