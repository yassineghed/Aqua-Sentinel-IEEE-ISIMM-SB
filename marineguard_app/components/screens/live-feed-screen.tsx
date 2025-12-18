"use client"

import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface LiveFeedScreenProps {
  onNavigate: (screen: string) => void
}

interface VideoInfo {
  name: string
  location: string
  depth: string
  src: string
}

export default function LiveFeedScreen({ onNavigate }: LiveFeedScreenProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true) // Start muted for autoplay policies
  const [currentVideo, setCurrentVideo] = useState<VideoInfo>({
    name: "BRUV-04 footage",
    location: "Monastir Bay",
    depth: "8m",
    src: "/marine-video.mp4"
  })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // When video source changes, reload and play
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      }
    }
  }, [currentVideo.src]);

  const [selectedCameraId, setSelectedCameraId] = useState<number | null>(null)

  const handleCameraClick = (cameraId: number) => {
    console.log("Clicked camera:", cameraId)
    setSelectedCameraId(cameraId)

    if (cameraId === 2) { // BRUV-02
      setCurrentVideo({
        name: "BRUVS-02 footage",
        location: "Monastir Marina",
        depth: "7m",
        src: "/prediction-demo.mp4"
      })
    } else if (cameraId === 3) { // BRUV-03
      setCurrentVideo({
        name: "BRUVS-03 footage",
        location: "Monastir Bay",
        depth: "8m",
        src: "/7outa.mp4"
      })
    } else if (cameraId === 4) { // BRUV-04
      setCurrentVideo({
        name: "BRUVS-04 footage",
        location: "Monastir Bay",
        depth: "8m",
        src: "/marine-video.mp4"
      })
    }
  }

  const cameras = [
    { id: 1, name: "BRUVS-01", location: "Monastir Coast", status: "OFFLINE", depth: "5m" },
    { id: 2, name: "BRUVS-02", location: "Monastir Marina", status: "AI Treated", depth: "7m" },
    { id: 3, name: "BRUVS-03", location: "Monastir Bay", status: "Recording", depth: "8m" },
    { id: 4, name: "BRUVS-04", location: "Monastir Bay", status: "Recording", depth: "8m" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OFFLINE":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
      case "AI Treated":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
      case "Recording":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Streams Feed</h2>
          <p className="text-muted-foreground">Most recent underwater camera streams</p>
        </div>

        {/* Main Video Feed */}
        <GlassCard className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 aspect-video flex items-center justify-center">
            <video
              ref={videoRef}
              src={currentVideo.src}
              className="w-full h-full object-cover"
              loop
              playsInline
              muted={isMuted} // Initialize muted state
            />

            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {!isPlaying && (
              <div className="absolute flex flex-col items-center gap-4 z-10 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold">PAUSED</p>
                </div>
              </div>
            )}

            <div className="absolute top-4 left-4 z-20">
              <div className="flex flex-col">
                <p className="text-white font-semibold shadow-black drop-shadow-md">{currentVideo.name}</p>
                <p className="text-white/80 text-sm shadow-black drop-shadow-md">{currentVideo.location} • {currentVideo.depth} depth</p>
              </div>
            </div>

            <div className="absolute top-3 right-3 flex gap-2 z-20">
              <span className="px-3 py-1 bg-red-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full animate-pulse-glow">
                ● RECORDE
              </span>
            </div>
          </div>


          {/* Controls */}
          <div className="p-4 space-y-3">
            <div className="flex gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Camera List */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Available Cameras</h3>
          {cameras.map((camera) => (
            <GlassCard
              key={camera.id}
              className={`p-3 cursor-pointer transition-all ${selectedCameraId === camera.id
                ? "bg-blue-100 dark:bg-blue-800/40 border-blue-500 ring-2 ring-blue-500/20"
                : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
                }`}
              onClick={() => handleCameraClick(camera.id)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{camera.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {camera.location} • {camera.depth}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(camera.status)}`}
                >
                  {camera.status}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <BottomNav currentScreen="live-feed" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}
