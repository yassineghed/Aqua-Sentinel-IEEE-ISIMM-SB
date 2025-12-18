"use client"

import { AlertTriangle, MapPin } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface FisherDashboardScreenProps {
  onNavigate: (screen: string) => void
}

export default function FisherDashboardScreen({ onNavigate }: FisherDashboardScreenProps) {
  const catches = [
    { date: "Today", species: "Grouper", weight: "2.5 kg", zone: "Zone A", invasiveNearby: false },
    { date: "Yesterday", species: "Seabream", weight: "1.8 kg", zone: "Zone B", invasiveNearby: true },
    { date: "2 days ago", species: "Mullet", weight: "3.2 kg", zone: "Zone C", invasiveNearby: false },
  ]

  const zones = [
    { name: "Zone A - Djerba", status: "Safe", invasiveAlert: false, lastUpdate: "1 hour ago" },
    { name: "Zone B - Sfax", status: "Caution", invasiveAlert: true, lastUpdate: "30 min ago" },
    { name: "Zone C - Bizerte", status: "Safe", invasiveAlert: false, lastUpdate: "2 hours ago" },
  ]

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Fisher Dashboard</h2>
          <p className="text-muted-foreground">Catch tracking and zone alerts</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <GlassCard className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">7.5 kg</p>
            <p className="text-xs text-muted-foreground">Total catch this week</p>
          </GlassCard>
          <GlassCard className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-300">3</p>
            <p className="text-xs text-muted-foreground">Safe zones</p>
          </GlassCard>
        </div>

        {/* Fishing Zones */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Fishing Zones</h3>
          {zones.map((zone, idx) => (
            <GlassCard key={idx} className="p-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-300 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{zone.name}</p>
                      <p className="text-xs text-muted-foreground">{zone.lastUpdate}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      zone.status === "Safe"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                    }`}
                  >
                    {zone.status}
                  </span>
                </div>
                {zone.invasiveAlert && (
                  <div className="flex items-center gap-2 p-2 bg-orange-100 dark:bg-orange-900/20 rounded text-xs text-orange-700 dark:text-orange-300">
                    <AlertTriangle size={14} />
                    <span>Invasive species detected nearby</span>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Recent Catches */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Recent Catches</h3>
          {catches.map((catch_, idx) => (
            <GlassCard key={idx} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{catch_.species}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{catch_.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{catch_.zone}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{catch_.weight}</p>
                  {catch_.invasiveNearby && (
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">⚠ Invasive nearby</p>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <BottomNav currentScreen="fisher-dashboard" userRole="fisher" onNavigate={onNavigate} />
    </>
  )
}
