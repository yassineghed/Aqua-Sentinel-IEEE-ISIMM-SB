"use client"

import { MapPin, Eye, Radio } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface MapScreenProps {
  onNavigate: (screen: string) => void
}

export default function MapScreen({ onNavigate }: MapScreenProps) {
  const detectionPoints = [
    { id: 1, name: "BRUVS-01", lat: "35.76", lon: "10.83", species: "Coris julis", count: 12, severity: "Low" },
    { id: 3, name: "BRUVS-03", lat: "35.71", lon: "10.81", species: "Diplodus vulgaris", count: 15, severity: "Low" },
    { id: 4, name: "BRUVS-04", lat: "35.73", lon: "10.85", species: "Mixed species", count: 22, severity: "Medium" },
  ]

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header with animation */}
        <div className="space-y-2 animate-fadeIn">
          <h2 className="text-2xl font-bold text-foreground">Detection Map</h2>
          <p className="text-muted-foreground">BRUV camera locations and detections</p>
        </div>

        {/* Map Placeholder with enhanced animations */}
        <GlassCard className="overflow-hidden animate-scaleIn">
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900 aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/maps2.png')] bg-cover bg-center opacity-60 dark:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />

            {/* Animated wave overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-shimmer pointer-events-none" />

            {/* Map overlay info with animation */}
            <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg z-10 animate-slideInLeft">
              <div className="flex items-center gap-2">
                <Radio size={12} className="text-green-500 animate-pulse" />
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Monastir - Kuriat Islands</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Mediterranean Sea, Tunisia</p>
            </div>

            {/* Animated detection points on map */}
            <div className="relative grid grid-cols-4 gap-4 p-4 w-full h-full">
              {detectionPoints.map((point, index) => (
                <div
                  key={point.id}
                  className="flex flex-col items-center justify-center cursor-pointer group animate-fadeIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Static marker background */}
                  <div className="absolute">
                    <span
                      className={`absolute w-14 h-14 rounded-full opacity-30 ${point.severity === "High" ? "bg-red-500" :
                        point.severity === "Medium" ? "bg-orange-500" : "bg-green-500"
                        }`}
                    />
                  </div>

                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 ${point.severity === "High"
                      ? "bg-red-500 ring-4 ring-red-300/50 group-hover:ring-red-400/70"
                      : point.severity === "Medium"
                        ? "bg-orange-500 ring-4 ring-orange-300/50 group-hover:ring-orange-400/70"
                        : "bg-green-500 ring-4 ring-green-300/50 group-hover:ring-green-400/70"
                      } group-hover:scale-150 group-hover:shadow-2xl`}
                  >
                    {point.count}
                  </div>
                  <div className="absolute bottom-full mb-2 bg-slate-900/95 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl z-20 transform group-hover:scale-110">
                    <p className="font-semibold">{point.name}</p>
                    <p className="text-slate-300">{point.species}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Detection Points List with staggered animations */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground animate-fadeIn">Active Detection Points</h3>
          {detectionPoints.map((point, index) => (
            <GlassCard
              key={point.id}
              className="p-3 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:scale-[1.02] animate-slideUp opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-300 flex-shrink-0 animate-bounce-subtle" />
                    <div>
                      <p className="font-semibold text-foreground">{point.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {point.lat}°N, {point.lon}°E
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold transition-all ${point.severity === "High"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 animate-pulse"
                      : point.severity === "Medium"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      }`}
                  >
                    {point.severity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{point.species}</span>
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-300">
                    <Eye size={14} className="animate-pulse" />
                    <span>{point.count} detected</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <BottomNav currentScreen="map" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}
