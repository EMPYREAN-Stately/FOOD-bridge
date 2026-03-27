"use client"

import { useState } from "react"
import { AppShell } from "@/components/layout/app-shell"

// Components
import { DashboardContent } from "@/components/dashboard/dashboard-content"
import { AddFoodContent } from "@/components/add-food/add-food-content"
import { FoodListingsContent } from "@/components/listings/food-listings-content"
import { NGOsContent } from "@/components/ngos/ngos-content"
import { LeaderboardContent } from "@/components/leaderboard/leaderboard-content"
import { ScheduleContent } from "@/components/schedule/schedule-content"
import { NotificationsContent } from "@/components/notifications/notifications-content"
import { ProfileContent } from "@/components/profile/profile-content"
import { SettingsContent } from "@/components/settings/settings-content"
import { HelpContent } from "@/components/help/help-content"

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("dashboard")

  const renderContent = () => {
    switch (activePage) {
      case "add-food":
        return <AddFoodContent />
      case "listings":
        return <FoodListingsContent />
      case "ngos":
        return <NGOsContent />
      case "leaderboard":
        return <LeaderboardContent />
      case "schedule":
        return <ScheduleContent />
      case "notifications":
        return <NotificationsContent />
      case "profile":
        return <ProfileContent />
      case "settings":
        return <SettingsContent />
      case "help":
        return <HelpContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <AppShell>
      {renderContent()}
    </AppShell>
  )
}