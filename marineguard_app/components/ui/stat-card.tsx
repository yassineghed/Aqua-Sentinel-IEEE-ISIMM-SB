import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  label: string
  value: string
  icon: LucideIcon
  color: string
}

export default function StatCard({ label, value, icon: Icon, color }: StatCardProps) {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className={`bg-gradient-to-br ${color} p-4 text-white space-y-2`}>
        <Icon className="w-6 h-6" />
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs opacity-90">{label}</p>
        </div>
      </div>
    </div>
  )
}
