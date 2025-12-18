"use client"

import { Settings, LogOut, Award, TrendingUp, MapPin, Eye } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface ProfileScreenProps {
  onNavigate: (screen: string) => void
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const userStats = [
    { label: "Fish Identified", value: "241", icon: Eye },
    { label: "Badges Earned", value: "5", icon: Award },
    { label: "Community Points", value: "450", icon: TrendingUp },
  ]

  const badges = [
    { name: "First Detection", icon: "🎯", earned: true },
    { name: "Community Helper", icon: "🤝", earned: true },
    { name: "Data Contributor", icon: "📊", earned: true },
    { name: "Expert Identifier", icon: "🔍", earned: true },
    { name: "Conservation Hero", icon: "🌊", earned: false },
  ]

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Profile</h2>
          <p className="text-muted-foreground">SIGHT Research Team Account</p>
        </div>

        {/* User Card */}
        <GlassCard className="p-6 text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center text-4xl mx-auto">
            👤
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">SIGHT - ISIMM</h3>
            <p className="text-sm text-muted-foreground">Marine Research Lab</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
              <MapPin size={14} />
              <span>Monastir, Tunisia</span>
            </div>
          </div>
        </GlassCard>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {userStats.map((stat, idx) => (
            <GlassCard key={idx} className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              {stat.icon && <stat.icon size={24} className="mt-2" />}
            </GlassCard>
          ))}
        </div>

        {/* Badges */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Achievements</h3>
          <div className="grid grid-cols-3 gap-3">
            {badges.map((badge, idx) => (
              <GlassCard key={idx} className={`p-4 text-center ${badge.earned ? "" : "opacity-50"}`}>
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-xs font-semibold text-foreground">{badge.name}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Settings</h3>
          <GlassCard className="p-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              <span className="font-medium text-foreground">Account Settings</span>
            </div>
            <span className="text-muted-foreground">›</span>
          </GlassCard>
          <GlassCard className="p-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="font-medium text-red-600 dark:text-red-400">Sign Out</span>
            </div>
            <span className="text-muted-foreground">›</span>
          </GlassCard>
        </div>
      </div>

      <BottomNav currentScreen="profile" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}
