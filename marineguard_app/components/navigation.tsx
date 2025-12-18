'use client'

import { Button } from '@/components/ui/button'

interface NavigationProps {
  currentScreen: string
  onNavigate: (screen: string) => void
}

export default function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: '🏠' },
    { id: 'alerts', label: 'Alerts', icon: '🚨' },
    { id: 'map', label: 'Map', icon: '🗺️' },
    { id: 'community', label: 'Community', icon: '👥' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-white/20 dark:border-white/10">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            variant="ghost"
            className={`flex-1 flex flex-col items-center gap-1 py-4 rounded-none ${
              currentScreen === item.id
                ? 'text-primary border-t-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-semibold">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
