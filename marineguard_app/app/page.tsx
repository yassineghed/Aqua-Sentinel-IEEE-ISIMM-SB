"use client"

import { useState } from "react"
import { MobileFrame } from "@/components/ui/mobile-frame"
import OnboardingScreen from "@/components/screens/onboarding-screen"
import LoginScreen from "@/components/screens/login"
import SignupScreen from "@/components/screens/signup"
import DashboardScreen from "@/components/screens/dashboard-screen"
import LiveFeedScreen from "@/components/screens/live-feed-screen"
import AlertsScreen from "@/components/screens/alerts-screen"
import ForecastScreen from "@/components/screens/forecast-screen"
import MapScreen from "@/components/screens/map-screen"
import FishIdentifierScreen from "@/components/screens/fish-identifier-screen"
import EducationalScreen from "@/components/screens/educational-screen"
import FisherDashboardScreen from "@/components/screens/fisher-dashboard-screen"
import CommunityForumScreen from "@/components/screens/community-forum-screen"
import ProfileScreen from "@/components/screens/profile-screen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("onboarding")
  const [userRole, setUserRole] = useState<"citizen" | "researcher" | "fisher">("citizen")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState("")
  const [showOnboarding, setShowOnboarding] = useState(true)

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    setCurrentScreen("login")
  }

  const handleRoleSelect = (role: "citizen" | "researcher" | "fisher") => {
    setUserRole(role)
    setCurrentScreen("login")
  }

  const handleLogin = (email: string, password: string) => {
    setIsAuthenticated(true)
    setUserName(email.split("@")[0])
    setCurrentScreen("dashboard")
  }

  const handleSignup = (email: string, password: string, name: string) => {
    setIsAuthenticated(true)
    setUserName(name)
    setCurrentScreen("dashboard")
  }

  const renderScreen = () => {
    if (showOnboarding) {
      return <OnboardingScreen onComplete={handleOnboardingComplete} />
    }

    switch (currentScreen) {
      case "login":
        return <LoginScreen onLogin={handleLogin} onSignupClick={() => setCurrentScreen("signup")} />
      case "signup":
        return <SignupScreen onSignup={handleSignup} onLoginClick={() => setCurrentScreen("login")} />
      case "dashboard":
        return <DashboardScreen userRole={userRole} onNavigate={setCurrentScreen} />
      case "live-feed":
        return <LiveFeedScreen onNavigate={setCurrentScreen} />
      case "alerts":
        return <AlertsScreen onNavigate={setCurrentScreen} />
      case "forecast":
        return <ForecastScreen onNavigate={setCurrentScreen} />
      case "map":
        return <MapScreen onNavigate={setCurrentScreen} />
      case "fish-identifier":
        return <FishIdentifierScreen onNavigate={setCurrentScreen} />
      case "education":
        return <EducationalScreen onNavigate={setCurrentScreen} />
      case "fisher-dashboard":
        return <FisherDashboardScreen onNavigate={setCurrentScreen} />
      case "community":
        return <CommunityForumScreen onNavigate={setCurrentScreen} />
      case "profile":
        return <ProfileScreen onNavigate={setCurrentScreen} />
      default:
        return <DashboardScreen userRole={userRole} onNavigate={setCurrentScreen} />
    }
  }

  return (
    <MobileFrame>
      <main className="min-h-full bg-gradient-to-br from-cyan-50 via-blue-100 to-blue-200">
        {renderScreen()}
      </main>
    </MobileFrame>
  )
}
