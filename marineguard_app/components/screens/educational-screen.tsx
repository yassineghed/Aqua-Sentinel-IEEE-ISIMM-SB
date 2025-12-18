"use client"

import { Play, Award, CheckCircle } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface EducationalScreenProps {
  onNavigate: (screen: string) => void
}

export default function EducationalScreen({ onNavigate }: EducationalScreenProps) {
  const lessons = [
    {
      id: 1,
      title: "Introduction to Invasive Species",
      duration: "5 min",
      level: "Beginner",
      completed: true,
    },
    {
      id: 2,
      title: "Rainbow Wrasse: Mediterranean Beauty",
      duration: "8 min",
      level: "Intermediate",
      completed: true,
    },
    {
      id: 3,
      title: "Marine Ecosystem Balance",
      duration: "10 min",
      level: "Advanced",
      completed: false,
    },
  ]

  const quizzes = [
    { id: 1, title: "Invasive Species Quiz", questions: 10, score: 85 },
    { id: 2, title: "Ocean Conservation", questions: 15, score: 92 },
  ]

  const facts = [
    "Coris julis can change sex from female to male as they mature",
    "The Kuriat Islands are a protected marine reserve off Monastir coast",
    "Tunisia's Mediterranean waters host over 500 fish species",
    "BRUV cameras can record for up to 24 hours continuously",
  ]

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Learn</h2>
          <p className="text-muted-foreground">Marine ecology education and resources</p>
        </div>

        {/* Lessons */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Lessons</h3>
          {lessons.map((lesson) => (
            <GlassCard
              key={lesson.id}
              className="p-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    {lesson.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <Play className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{lesson.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                      <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                        {lesson.level}
                      </span>
                    </div>
                  </div>
                </div>
                {lesson.completed && <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Quizzes */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Quizzes</h3>
          {quizzes.map((quiz) => (
            <GlassCard
              key={quiz.id}
              className="p-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-semibold text-foreground">{quiz.title}</p>
                    <p className="text-xs text-muted-foreground">{quiz.questions} questions</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">{quiz.score}%</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Did You Know?</h3>
          {facts.map((fact, idx) => (
            <GlassCard
              key={idx}
              className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
            >
              <p className="text-sm text-foreground">{fact}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <BottomNav currentScreen="education" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}
