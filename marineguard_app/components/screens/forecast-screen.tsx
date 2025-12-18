"use client"

import { Droplets, Thermometer, Wind, AlertCircle, TrendingUp, Waves } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface ForecastScreenProps {
  onNavigate: (screen: string) => void
}

export default function ForecastScreen({ onNavigate }: ForecastScreenProps) {
  const oceanData = [
    { label: "Temperature", value: "12.5°C", icon: Thermometer, trend: "+0.3°C", status: "Normal" },
    { label: "Salinity", value: "38.2 PSU", icon: Droplets, trend: "+0.1 PSU", status: "Normal" },
    { label: "Current Speed", value: "0.8 m/s", icon: Wind, trend: "-0.2 m/s", status: "Moderate" },
  ]

  const forecast = [
    { day: "Today", temp: "24.5°C", condition: "Stable", risk: "Low" },
    { day: "Tomorrow", temp: "25.1°C", condition: "Warming", risk: "Medium" },
    { day: "Day 3", temp: "26.2°C", condition: "Warming", risk: "High" },
    { day: "Day 4", temp: "25.8°C", condition: "Cooling", risk: "Medium" },
    { day: "Day 5", temp: "24.9°C", condition: "Stable", risk: "Low" },
  ]

  const pollutionZones = [
    { zone: "Sfax Harbor", level: "High", particles: "245 µg/m³" },
    { zone: "Bizerte Bay", level: "Medium", particles: "156 µg/m³" },
    { zone: "Djerba Coast", level: "Low", particles: "89 µg/m³" },
  ]

  return (
    <>
      <div className="relative">
        {/* Blurred content */}
        <div className="p-4 space-y-6 pb-24 blur-[2px] pointer-events-none select-none">
          {/* Header with animation */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Waves className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-foreground">Ocean Data</h2>
            </div>
            <p className="text-muted-foreground">Temporary data</p>
          </div>

          {/* Current Conditions */}
          <div className="grid grid-cols-1 gap-3">
            {oceanData.map((data, idx) => {
              const Icon = data.icon
              return (
                <GlassCard
                  key={idx}
                  className="p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{data.label}</p>
                        <p className="font-semibold text-foreground">{data.value}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
                        <TrendingUp size={12} />
                        {data.trend}
                      </p>
                      <p className="text-xs text-muted-foreground">{data.status}</p>
                    </div>
                  </div>
                </GlassCard>
              )
            })}
          </div>

          {/* 5-Day Forecast */}
          <GlassCard>
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                5-Day Forecast
              </h3>
              <div className="space-y-2">
                {forecast.map((day, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <span className="text-sm font-medium text-foreground">{day.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">{day.condition}</span>
                      <span className="text-sm font-semibold text-foreground">{day.temp}</span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${day.risk === "High"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          : day.risk === "Medium"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                          }`}
                      >
                        {day.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Pollution Zones */}
          <GlassCard>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h3 className="font-semibold text-foreground">Pollution Levels</h3>
              </div>
              <div className="space-y-2">
                {pollutionZones.map((zone, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <span className="text-sm font-medium text-foreground">{zone.zone}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{zone.particles}</span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${zone.level === "High"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          : zone.level === "Medium"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                          }`}
                      >
                        {zone.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Overlay with "Future Plan" text */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 dark:bg-black/20">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white px-10 py-5 rounded-2xl shadow-2xl shadow-blue-500/50">
              <p className="text-2xl font-bold tracking-wide">Future Plan</p>
              <p className="text-sm opacity-90 mt-1">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav currentScreen="forecast" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}
