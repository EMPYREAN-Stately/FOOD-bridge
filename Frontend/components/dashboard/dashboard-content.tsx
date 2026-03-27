"use client"

import Link from "next/link"
import { useState,useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Package,
  ListChecks,
  Building2,
  Trophy,
  Plus,
  MapPin,
  Clock,
  ArrowRight,
  Bell,
  TrendingUp,
} from "lucide-react"


function getStatusColor(status: string) {
  switch (status) {
    case "available":
      return "bg-primary/20 text-primary"
    case "claimed":
      return "bg-info/20 text-info"
    case "expired":
      return "bg-destructive/20 text-destructive"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getRankStyle(rank: number) {
  switch (rank) {
    case 1:
      return "bg-warning/20 text-warning border-warning/30"
    case 2:
      return "bg-muted text-muted-foreground border-muted"
    case 3:
      return "bg-chart-3/20 text-chart-3 border-chart-3/30"
    default:
      return "bg-card text-muted-foreground border-border"
  }
}

function getUrgency(expiryTime: string) {
  const hoursLeft =
    (new Date(expiryTime).getTime() - Date.now()) / (1000 * 60 * 60)

  if (hoursLeft < 2) return "HIGH"
  if (hoursLeft < 6) return "MEDIUM"
  return "LOW"
}

function getUrgencyColor(level: string) {
  switch (level) {
    case "HIGH":
      return "bg-red-500/20 text-red-500"
    case "MEDIUM":
      return "bg-yellow-500/20 text-yellow-500"
    default:
      return "bg-green-500/20 text-green-500"
  }
}

export function DashboardContent() {
  type Food = {
  _id: string
  title: string
  quantity: number
  expiryTime: string
  location?: string
  status: string
  bestNgo?: {
    name: string
  } | null
}

const [foods, setFoods] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)

  const stats = [
  {
    title: "Total Food Donated",
    value: `${foods.reduce((acc, f) => acc + Number(f.quantity || 0), 0)} kg`,
    change: "+12% from last month",
    icon: Package,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Active Listings",
    value: foods.length,
    change: "3 expiring soon",
    icon: ListChecks,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    title: "Nearby NGOs",
    value: "8",
    change: "Within 5km radius",
    icon: Building2,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Contribution Score",
    value: "1,250",
    change: "Rank #42 globally",
    icon: Trophy,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
]

const topContributors = [
  { rank: 1, name: "Sarah Chen", score: 2840, avatar: "SC" },
  { rank: 2, name: "Mike Rodriguez", score: 2650, avatar: "MR" },
  { rank: 3, name: "Emily Johnson", score: 2420, avatar: "EJ" },
  { rank: 4, name: "Alex Kim", score: 2180, avatar: "AK" },
  { rank: 5, name: "Jordan Lee", score: 1950, avatar: "JL" },
]

const notifications = [
  {
    id: 1,
    type: "claimed",
    title: "Food Claimed",
    message: "Hope Foundation claimed your bread donation",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "expiring",
    title: "Expiring Soon",
    message: "Your vegetable listing expires in 2 hours",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "nearby",
    title: "Food Nearby",
    message: "New food listing available 0.5km from you",
    time: "2 hours ago",
    unread: false,
  },
]

useEffect(() => {
  const fetchFoods = async () => {
    try {
      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_BASE}/food`
)

      if (!res.ok) throw new Error("Failed to fetch")

      const data = await res.json()

      // 🔥 AI MATCHING HERE
      const enrichedFoods = await Promise.all(
        data.map(async (food: Food) => {
          try {
            const aiRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/ai/match`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(food),
            })

            const ngoData = await aiRes.json()

            return {
              ...food,
              bestNgo: ngoData.bestNgo || null,
            }
          } catch {
            return { ...food, bestNgo: null }
          }
        })
      )

      setFoods(enrichedFoods)
    } catch (err) {
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  fetchFoods()
}, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your impact overview.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/add-food">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Food
            </Button>
          </Link>
          <Link href="/ngos">
            <Button variant="outline" className="gap-2">
              <MapPin className="h-4 w-4" />
              Find NGOs
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-card-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </p>
                </div>
                <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Listings */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-lg font-semibold">Recent Food Listings</CardTitle>
            <Link href="/listings">
              <Button variant="ghost" size="sm" className="gap-1">
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {loading ? (
                  <p>Loading...</p>
                ) : foods.length === 0 ? (
                  <p className="text-muted-foreground">No food listings yet 🚀</p>
                ) : (
                [...foods]
                  .sort((a, b) => {
                    const aUrgency = getUrgency(a.expiryTime)
                    const bUrgency = getUrgency(b.expiryTime)

                    const priority = { HIGH: 3, MEDIUM: 2, LOW: 1 }

                    return priority[bUrgency] - priority[aUrgency]
                  })
                  .map((listing) => {
                    const urgency = listing.expiryTime
                    ? getUrgency(listing.expiryTime)
                    : "LOW"
                    return (
                <div
                  key={listing._id || listing.title}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        {listing.title}
                      </p>
                      <p className="text-xs text-primary">
                        Recommended NGO: {listing.bestNgo?.name || "Finding..."}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded ${getUrgencyColor(urgency)}`}>
                          {urgency} PRIORITY
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{listing.quantity} kg</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {new Date(listing.expiryTime).toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {listing.location || "Unknown location"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(listing.status)}>
                    {listing.status}
                  </Badge>
                </div>
                )}))}
            </div>
          </CardContent>
        </Card>

        {/* Top Contributors */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-lg font-semibold">Top Contributors</CardTitle>
            <Link href="/leaderboard">
              <Button variant="ghost" size="sm" className="gap-1">
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topContributors.map((contributor) => (
                <div
                  key={contributor.rank}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold ${getRankStyle(
                      contributor.rank
                    )}`}
                  >
                    {contributor.rank}
                  </div>
                  <Avatar className="h-8 w-8">
                    {/* <AvatarImage src={`/avatars/${contributor.rank}.jpg`} /> */}
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">
                      {contributor.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-card-foreground truncate">
                      {contributor.name}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    {contributor.score.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications Preview */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Recent Notifications
          </CardTitle>
          <Link href="/notifications">
            <Button variant="ghost" size="sm" className="gap-1">
              View all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-4 rounded-lg border border-border p-4 transition-colors ${
                  notification.unread
                    ? "bg-primary/5 border-primary/20"
                    : "bg-card"
                }`}
              >
                <div
                  className={`mt-0.5 h-2 w-2 rounded-full ${
                    notification.unread ? "bg-primary" : "bg-muted-foreground"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {notification.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
