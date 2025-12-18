import type { ReactNode, CSSProperties, MouseEventHandler } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler<HTMLDivElement>
}

export default function GlassCard({ children, className = "", style, onClick }: GlassCardProps) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

