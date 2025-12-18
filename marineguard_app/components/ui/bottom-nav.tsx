"use client"

import { Home, Activity, AlertCircle, Map, BookOpen, Users, User, Fish } from "lucide-react"

interface BottomNavProps {
  currentScreen: string
  userRole: "citizen" | "researcher" | "fisher"
  onNavigate: (screen: string) => void
}

export default function BottomNav({ currentScreen, userRole, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "live-feed", label: "Live", icon: Activity },
    { id: "alerts", label: "Alerts", icon: AlertCircle },
    { id: "map", label: "Map", icon: Map },
    { id: "fish-identifier", label: "Identify", icon: Fish },
    { id: "forecast", label: "Forecast", icon: AlertCircle },
    { id: "education", label: "Learn", icon: BookOpen },
    { id: "community", label: "Forum", icon: Users },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center h-20 max-w-2xl mx-auto overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-lg transition-all flex-shrink-0 ${
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={item.label}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
