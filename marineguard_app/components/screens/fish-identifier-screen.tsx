"use client"

import type React from "react"

import { Camera, Upload, Zap, Save, Share2, AlertTriangle, Play } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface FishIdentifierScreenProps {
  onNavigate: (screen: string) => void
}

// Species database with detailed information
const speciesDatabase: Record<string, any> = {
  "coris julis": {
    species: "Mediterranean Rainbow Wrasse",
    scientificName: "Coris julis",
    commonName: "Rainbow Wrasse",
    confidence: 94,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "A small, colorful wrasse native to the Mediterranean Sea and the northeastern Atlantic Ocean.",
    characteristics: ["Vibrant orange stripe", "Blue/green body", "Small size", "Reef dweller"],
    recommendations: ["Safe to handle", "Common sighting", "Indicator of healthy reef"],
    impact: "Important part of local biodiversity",
  },
  "serranus scriba": { // Kept for legacy/fallback
    species: "Painted Comber",
    scientificName: "Serranus scriba",
    commonName: "Painted Comber",
    confidence: 88,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "A subtropical marine fish, known for the blue writing-like markings on its belly.",
    characteristics: ["Vertical bars", "Blue belly markings", "Territorial"],
    recommendations: ["Observe from distance", "Harmless"],
    impact: "Native predator of small invertebrates",
  },
  "serranus cabrilla": {
    species: "Comber",
    scientificName: "Serranus cabrilla",
    commonName: "Comber",
    confidence: 85,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "A species of marine fish in the family Serranidae, the sea basses.",
    characteristics: ["Reddish-brown stripes", "Solitary", "Carnivorous"],
    recommendations: ["Common catch", "Edible"],
    impact: "Predatory role in ecosystem",
  },
  "diplodus vulgaris": {
    species: "Common Two-banded Seabream",
    scientificName: "Diplodus vulgaris",
    commonName: "Two-banded Seabream",
    confidence: 85,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "Recognizable by the two black bands on its body, one behind the head and one near the tail.",
    characteristics: ["Two black bands", "Silver body", "Schooling behavior"],
    recommendations: ["Popular food fish", "Sustainable catch"],
    impact: "None",
  },
  "diplodus sargus": {
    species: "White Seabream",
    scientificName: "Diplodus sargus",
    commonName: "White Seabream",
    confidence: 85,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "A species of seabream native to the eastern Atlantic and Mediterranean.",
    characteristics: ["Silver body", "Vertical stripes", "Black spot on tail"],
    recommendations: ["Excellent food fish", "Target for spearfishing"],
    impact: "None",
  },
  "diplodus annulairs yed safra": {
    species: "Annular Seabream",
    scientificName: "Diplodus annularis",
    commonName: "Annular Seabream (Yed Safra)",
    confidence: 85,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "Distinguished by its yellow pelvic fins ('yed safra') and silver body.",
    characteristics: ["Yellow pelvic fins", "Small size", "Coastal"],
    recommendations: ["Edible", "Common in seagrass"],
    impact: "None",
  },
  "spicara maena": {
    species: "Blotched Picarel",
    scientificName: "Spicara maena",
    commonName: "Picarel",
    confidence: 85,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "A coastal fish found in seagrass beds and sandy bottoms.",
    characteristics: ["Blue spots", "Protogynous hermaphrodite", "Schooling"],
    recommendations: ["Edible", "Commercial value"],
    impact: "None",
  },
  "oblada melanura": {
    species: "Saddled Seabream",
    scientificName: "Oblada melanura",
    commonName: "Saddled Seabream",
    confidence: 85,
    invasive: false,
    riskLevel: "Low",
    origin: "Mediterranean Native",
    description: "Easily identified by the black saddle spot on the tail peduncle.",
    characteristics: ["Black saddle spot", "Silver grey", "Surface swimmer"],
    recommendations: ["Edible", "Fast swimmer"],
    impact: "None",
  },
}

export default function FishIdentifierScreen({ onNavigate }: FishIdentifierScreenProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)
  const [detections, setDetections] = useState<any[]>([])
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const [isSaved, setIsSaved] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
        setResult(null)
        setDetections([])
        setIsSaved(false)
        setError(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget
    setImageDimensions({ width: naturalWidth, height: naturalHeight })
  }

  const handleIdentify = async (fileOrEvent?: File | React.SyntheticEvent) => {
    // specific Use provided file (if it's a File) or fallback to input ref
    let file: File | undefined
    if (fileOrEvent instanceof File) {
      file = fileOrEvent
    } else {
      file = fileInputRef.current?.files?.[0]
    }

    if (!file) return

    setIsLoading(true)
    setError(null)

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to connect to the AI model. Is the backend running?")
      }

      const data = await response.json()

      if (data.detections && data.detections.length > 0) {
        // Store all detections for bounding boxes
        setDetections(data.detections)

        // Get the first detection (highest confidence)
        const topDetection = data.detections[0]
        const speciesName = topDetection.class.toLowerCase()

        // Exact match mapping logic
        let match = speciesDatabase[speciesName]

        // Fallback for partial matches if exact match fails
        if (!match) {
          // Try to find a partial match in keys
          const key = Object.keys(speciesDatabase).find(k => speciesName.includes(k) || k.includes(speciesName))
          if (key) match = speciesDatabase[key]
        }

        if (match) {
          setResult({
            ...match,
            confidence: Math.round(topDetection.confidence * 100)
          })
        } else {
          setResult({
            species: `Detected: ${topDetection.class}`,
            scientificName: "Unknown Species",
            confidence: Math.round(topDetection.confidence * 100),
            invasive: false,
            riskLevel: "Unknown",
            description: "This species was detected by the AI but details are not in the local database.",
            characteristics: ["detected"],
            recommendations: ["Consult an expert"],
            impact: "Unknown"
          })
        }
      } else {
        setError("No fish detected in the image.")
      }

    } catch (err: any) {
      setError(err.message || "An error occurred during specific identification")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleIdentifyMock = () => {
    // Fallback if backend fails or for demo
    const speciesKeys = Object.keys(speciesDatabase)
    const randomKey = speciesKeys[Math.floor(Math.random() * speciesKeys.length)]
    setResult(speciesDatabase[randomKey])
    setIsSaved(false)
  }

  const handleSaveToProfile = () => {
    setIsSaved(true)
    // In a real app, this would save to user's profile
  }

  const handleContributeToDatabase = () => {
    alert(
      "Thank you for your contribution! Your identification has been submitted to the MarineGuard database and will help improve our AI model.",
    )
    setResult(null)
    setSelectedImage(null)
  }

  const handleTryExample = async () => {
    setIsLoading(true)
    setError(null)
    setDetections([])
    setResult(null)
    setIsSaved(false)

    const examplePath = "/coris-julis-example.png"
    setSelectedImage(examplePath)

    try {
      // Fetch the example image as a blob
      const response = await fetch(examplePath)
      const blob = await response.blob()
      const file = new File([blob], "coris-julis-example.png", { type: "image/png" })

      // Run real identification on it
      await handleIdentify(file)
    } catch (e) {
      console.error("Failed to load example image for processing", e)
      // Fallback manual set (only if fetch fails)
      setResult({
        ...speciesDatabase["coris julis"],
        confidence: 94
      })
      setIsLoading(false)
    }
  }

  // Dynamic state for recent identifications
  const [recentIdentifications, setRecentIdentifications] = useState([
    { species: "Rainbow Wrasse", scientificName: "Coris julis", confidence: 92, date: "Today", invasive: false },
    { species: "Comber", scientificName: "Serranus cabrilla", confidence: 88, date: "Yesterday", invasive: false },
    { species: "Two-banded Seabream", scientificName: "Diplodus vulgaris", confidence: 85, date: "2 days ago", invasive: false },
  ])

  // Fetch model classes on mount
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch('http://localhost:8000/classes')
        if (!res.ok) return
        const data = await res.json()

        if (data.classes && Array.isArray(data.classes)) {
          // Generate mock history based on ACTUAL model classes
          const newHistory = data.classes.slice(0, 3).map((cls: string, idx: number) => ({
            species: cls.charAt(0).toUpperCase() + cls.slice(1), // Capitalize
            scientificName: "Scientific Name Pending", // Placeholder since model only has labels
            confidence: 85 + Math.floor(Math.random() * 10),
            date: idx === 0 ? "Today" : "Yesterday",
            invasive: cls.toLowerCase().includes("lion") || cls.toLowerCase().includes("urchin") // Simple heuristic
          }))
          setRecentIdentifications(newHistory)
        }
      } catch (e) {
        console.log("Backend not yet available for class syncing")
      }
    }

    fetchClasses()
  }, [])

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Fish Identifier</h2>
          <p className="text-muted-foreground">AI-powered species recognition</p>
        </div>

        {/* Upload Section */}
        <GlassCard className="p-6">
          <div className="space-y-4">
            {selectedImage ? (
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 aspect-video rounded-lg overflow-hidden flex items-center justify-center p-2">
                {/* Wrapper to constrain both Image and SVG to the same aspect ratio */}
                <div
                  className="relative max-w-full max-h-full"
                  style={{
                    aspectRatio: imageDimensions.width > 0 ? `${imageDimensions.width} / ${imageDimensions.height}` : 'auto'
                  }}
                >
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt="Selected"
                    className="w-full h-full object-contain block"
                    onLoad={handleImageLoad}
                  />
                  {/* Bounding Box Overlay */}
                  {detections.length > 0 && imageDimensions.width > 0 && (
                    <svg
                      viewBox={`0 0 ${imageDimensions.width} ${imageDimensions.height}`}
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    >
                      {detections.map((det, idx) => {
                        const [x1, y1, x2, y2] = det.bbox
                        const w = x2 - x1
                        const h = y2 - y1
                        return (
                          <g key={idx}>
                            <rect
                              x={x1}
                              y={y1}
                              width={w}
                              height={h}
                              fill="none"
                              stroke="#00ff00"
                              strokeWidth={Math.max(2, imageDimensions.width * 0.005)} // Scale stroke
                              vectorEffect="non-scaling-stroke"
                            />
                            <text
                              x={x1}
                              y={y1 > 20 ? y1 - 5 : y1 + 20} // Text inside if at top edge
                              fill="#00ff00"
                              fontSize={Math.max(12, imageDimensions.width * 0.03)} // Scale font
                              fontWeight="bold"
                              style={{ textShadow: "0px 0px 4px black" }}
                            >
                              {det.class} ({Math.round(det.confidence * 100)}%)
                            </text>
                          </g>
                        )
                      })}
                    </svg>
                  )}
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-8 flex flex-col items-center justify-center gap-3 bg-blue-50 dark:bg-blue-900/20">
                <Camera className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                <p className="text-sm font-medium text-foreground">Upload or take a photo</p>
                <p className="text-xs text-muted-foreground">JPG, PNG up to 10MB</p>
              </div>
            )}

            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Camera size={18} />
                Take Photo
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all"
              >
                <Upload size={18} />
                Upload
              </button>
            </div>

            {/* Try Example Button */}
            {!selectedImage && (
              <div className="text-center">
                <button
                  onClick={handleTryExample}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-center gap-1 mx-auto"
                >
                  <Zap size={14} />
                  Try with example prediction
                </button>
              </div>
            )}

            {selectedImage && (
              <button
                onClick={handleIdentify}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Zap size={18} />
                {isLoading ? "Analyzing..." : "Identify Species"}
              </button>
            )}

            {error && (
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm text-center">
                {error}
              </div>
            )}
          </div>
        </GlassCard>

        {/* Result with comprehensive species data */}
        {result && (
          <>
            <GlassCard
              className={`p-4 space-y-4 border-l-4 ${result.invasive ? "border-red-500" : "border-green-500"}`}
            >
              {/* Header with risk level */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{result.species}</h3>
                  <p className="text-xs text-muted-foreground italic">{result.scientificName}</p>
                  <p className="text-sm text-muted-foreground mt-1">Confidence: {result.confidence}%</p>
                </div>
                <span
                  className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${result.invasive
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}
                >
                  {result.riskLevel} Risk
                </span>
              </div>

              {/* Invasive indicator */}
              {result.invasive && (
                <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 p-3 rounded">
                  <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-300 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-red-700 dark:text-red-300">
                    <p className="font-semibold">Invasive Species Alert</p>
                    <p className="text-xs">{result.impact}</p>
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <p className="text-sm text-foreground">{result.description}</p>
              </div>

              {/* Characteristics */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-foreground">Key Characteristics:</p>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-foreground">Recommendations:</p>
                {result.recommendations.map((rec: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-300 flex-shrink-0 mt-1" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleSaveToProfile}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all ${isSaved
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200"
                    }`}
                >
                  <Save size={16} />
                  {isSaved ? "Saved" : "Save"}
                </button>
                <button
                  onClick={handleContributeToDatabase}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 transition-all"
                >
                  <Share2 size={16} />
                  Contribute
                </button>
              </div>
            </GlassCard>
          </>
        )}

        {/* Recent Identifications with expanded information */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Your Recent Identifications</h3>
          {recentIdentifications.map((id, idx) => (
            <GlassCard key={idx} className="p-4 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{id.species}</p>
                  <p className="text-xs text-muted-foreground italic">{id.scientificName}</p>
                  <p className="text-xs text-muted-foreground mt-1">{id.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">{id.confidence}%</span>
                  {id.invasive && (
                    <span className="px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-xs rounded font-semibold">
                      Invasive
                    </span>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* AI Demo Video Section */}
        {/* AI Demo Video Section */}
        <GlassCard className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <Play size={16} className="text-white ml-0.5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">See Our AI in Action</h3>
                <p className="text-xs text-muted-foreground">Advanced marine life content analysis</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Detection Model */}
              <div className="space-y-3">
                <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 aspect-video rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                  <video
                    className="w-full h-full object-cover"
                    poster="/underwater-ocean-scene-with-fish.jpg"
                    preload="metadata"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/prediction-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-sm font-semibold text-foreground">Real-time Species Detection</h4>
                  <p className="text-xs text-muted-foreground">
                    🐟 Instant identification of multiple species with high-precision bounding boxes
                  </p>
                </div>
              </div>

              {/* Counting Model */}
              <div className="space-y-3">
                <div className="relative bg-gradient-to-br from-indigo-900 to-purple-950 aspect-video rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                  <img
                    src="/output_m2.gif"
                    alt="Population Density Analysis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-sm font-semibold text-foreground">Population Density Analysis</h4>
                  <p className="text-xs text-muted-foreground">
                    📊 Advanced counting algorithms track abundance and density in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <BottomNav currentScreen="fish-identifier" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}
