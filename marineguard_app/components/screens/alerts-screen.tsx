"use client"

import { AlertTriangle, MapPin, Clock, TrendingUp } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface AlertsScreenProps {
  onNavigate: (screen: string) => void
}

export default function AlertsScreen({ onNavigate }: AlertsScreenProps) {
  const alerts = [
    {
      id: 1,
      species: "Coris julis",
      location: "Monastir Marina",
      severity: "Low",
      time: "2 hours ago",
      count: 8,
      trend: "stable",
      description: "Rainbow wrasse group observed near rocky areas",
    },
    {
      id: 2,
      species: "Serranus cabrilla",
      location: "Kuriat Islands",
      severity: "Low",
      time: "4 hours ago",
      count: 12,
      trend: "increasing",
      description: "Comber group active in reef habitats",
    },
    {
      id: 3,
      species: "Diplodus vulgaris",
      location: "Monastir Bay",
      severity: "Low",
      time: "6 hours ago",
      count: 15,
      trend: "increasing",
      description: "Two-banded seabream school detected",
    },

  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700"
      case "Medium":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700"
      default:
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700"
    }
  }

  const getSeverityIconAnimation = (severity: string) => {
    switch (severity) {
      case "High":
        return "animate-bounce-subtle"
      case "Medium":
        return "animate-pulse"
      default:
        return ""
    }
  }

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header with animation */}
        <div className="space-y-2 animate-fadeIn">
          <h2 className="text-2xl font-bold text-foreground">Alerts</h2>
          <p className="text-muted-foreground">Recent invasive species detections</p>
        </div>

        {/* Alert Cards with staggered animations */}
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <GlassCard
              key={alert.id}
              className={`p-4 border-l-4 ${getSeverityColor(alert.severity)} animate-slideUp opacity-0 hover:scale-[1.02] transition-transform duration-300`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`relative ${getSeverityIconAnimation(alert.severity)}`}>
                      <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0" />
                      {alert.severity === "High" && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping-slow" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{alert.species}</h3>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ${getSeverityColor(alert.severity)} ${alert.severity === "High" ? "animate-pulse" : ""}`}
                  >
                    {alert.severity}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-1 text-muted-foreground group">
                    <MapPin size={14} className="group-hover:animate-bounce-subtle" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock size={14} className="animate-pulse" />
                    <span>{alert.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <TrendingUp size={14} className={alert.trend === "increasing" ? "animate-bounce-subtle text-green-500" : ""} />
                    <span>{alert.count} detected</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-gradient">
                  View Details
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <BottomNav currentScreen="alerts" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}

