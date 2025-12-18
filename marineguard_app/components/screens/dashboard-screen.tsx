"use client"

import { TrendingUp, AlertTriangle, Eye, Zap } from "lucide-react"
import StatCard from "@/components/ui/stat-card"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface DashboardScreenProps {
  userRole: "citizen" | "researcher" | "fisher"
  onNavigate: (screen: string) => void
}

export default function DashboardScreen({ userRole, onNavigate }: DashboardScreenProps) {
  const stats = [
    { label: "Latest Detections", value: "24", icon: Eye, color: "from-blue-400 to-blue-600" },
    { label: "Active Alerts", value: "8", icon: AlertTriangle, color: "from-orange-400 to-red-600" },
    { label: "Species Tracked", value: "12", icon: TrendingUp, color: "from-green-400 to-emerald-600" },
    { label: "BRUV Cameras", value: "15", icon: Zap, color: "from-purple-400 to-pink-600" },
  ]

  const recentDetections = [
    { species: "Coris julis", location: "Monastir Coast", severity: "Low", time: "2 hours ago" },
    { species: "Serranus cabrilla", location: "Kuriat Islands", severity: "Low", time: "4 hours ago" },
    { species: "Spicara maena", location: "Sousse Bay", severity: "Low", time: "6 hours ago" },
  ]

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground">Real-time marine ecosystem monitoring</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className={`animate-fadeIn stagger-${idx + 1}`}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Recent Detections */}
        <GlassCard>
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">BRUVS photages </h3>
            {recentDetections.map((detection, idx) => (
              <div key={idx} className={`flex items-start justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg animate-slideInLeft stagger-${idx + 1} hover:scale-105 transition-transform duration-200`}>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{detection.species}</p>
                  <p className="text-xs text-muted-foreground">{detection.location}</p>
                </div>
                <div className="text-right space-y-1">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold ${detection.severity === "High"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                      : detection.severity === "Medium"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      }`}
                  >
                    {detection.severity}
                  </span>
                  <p className="text-xs text-muted-foreground">{detection.time}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Trends */}
        <GlassCard>
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Weekly Trends</h3>
            <div className="space-y-2">
              {[
                { name: "Coris julis", count: 18, trend: "+5" },
                { name: "Serranus cabrilla", count: 12, trend: "+3" },
                { name: "Diplodus annularis", count: 22, trend: "+8" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-blue-200 dark:bg-blue-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        style={{ width: `${(item.count / 12) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">{item.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      <BottomNav currentScreen="dashboard" userRole={userRole} onNavigate={onNavigate} />
    </>
  )
}
