"use client"

import { MessageSquare, Heart, Share2 } from "lucide-react"
import { useState } from "react"
import GlassCard from "@/components/ui/glass-card"
import BottomNav from "@/components/ui/bottom-nav"

interface CommunityForumScreenProps {
  onNavigate: (screen: string) => void
}

export default function CommunityForumScreen({ onNavigate }: CommunityForumScreenProps) {
  const [liked, setLiked] = useState<number[]>([])

  const posts = [
    {
      id: 1,
      author: "Dr. Ahmed Hassan",
      role: "Researcher , Malta",
      avatar: "👨‍🔬",
      content: "New lionfish population detected in Malta. We need coordinated efforts to monitor and control.",
      timestamp: "2 hours ago",
      likes: 51,
      comments: 8,
      image: "/lionfish-underwater.jpg",
    },
    {
      id: 2,
      author: "Fatima Ben Ali",
      role: "Aqua Culture Responsable, Tunisia",
      avatar: "👩‍🌾",
      content: "Just reported 3 invasive crabs near Sfax harbor. The app made it so easy!",
      timestamp: "4 hours ago",
      likes: 128,
      comments: 3,
    },
    {
      id: 3,
      author: "Mohamed Kharrat",
      role: "Fisher, Kuriat",
      avatar: "👨‍⚓",
      content: "Fishing zone B is now safe according to latest BRUVs data. Great news for tomorrow's catch!",
      timestamp: "6 hours ago",
      likes: 70,
      comments: 5,
    },
  ]

  const toggleLike = (id: number) => {
    setLiked(liked.includes(id) ? liked.filter((l) => l !== id) : [...liked, id])
  }

  return (
    <>
      <div className="p-4 space-y-6 pb-24">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Community</h2>
          <p className="text-muted-foreground">Share observations and insights</p>
        </div>

        {/* New Post */}
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold">
              👤
            </div>
            <input
              type="text"
              placeholder="Share your observation..."
              className="flex-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </GlassCard>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <GlassCard key={post.id} className="p-4 space-y-3">
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-lg">
                    {post.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.role}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{post.timestamp}</span>
              </div>

              {/* Content */}
              <p className="text-sm text-foreground">{post.content}</p>

              {/* Image */}
              {post.image && (
                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 h-32">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Post"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-blue-200 dark:border-blue-800">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <Heart size={16} fill={liked.includes(post.id) ? "currentColor" : "none"} />
                  <span>{post.likes + (liked.includes(post.id) ? 1 : 0)}</span>
                </button>
                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <MessageSquare size={16} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <BottomNav currentScreen="community" userRole="citizen" onNavigate={onNavigate} />
    </>
  )
}
