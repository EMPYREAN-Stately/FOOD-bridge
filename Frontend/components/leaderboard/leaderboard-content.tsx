"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, TrendingUp, Crown, Star } from "lucide-react"

const topThree = [
  {
    rank: 1,
    name: "Sarah Chen",
    score: 2840,
    avatar: "SC",
    donations: 156,
    streak: 45,
    badge: "Food Hero",
  },
  {
    rank: 2,
    name: "Mike Rodriguez",
    score: 2650,
    avatar: "MR",
    donations: 142,
    streak: 38,
    badge: "Super Donor",
  },
  {
    rank: 3,
    name: "Emily Johnson",
    score: 2420,
    avatar: "EJ",
    donations: 128,
    streak: 32,
    badge: "Community Star",
  },
]

const leaderboard = [
  { rank: 4, name: "Alex Kim", score: 2180, avatar: "AK", donations: 112, change: "up" },
  { rank: 5, name: "Jordan Lee", score: 1950, avatar: "JL", donations: 98, change: "up" },
  { rank: 6, name: "Taylor Swift", score: 1820, avatar: "TS", donations: 94, change: "same" },
  { rank: 7, name: "Morgan Brown", score: 1750, avatar: "MB", donations: 89, change: "down" },
  { rank: 8, name: "Casey Williams", score: 1680, avatar: "CW", donations: 85, change: "up" },
  { rank: 9, name: "Riley Davis", score: 1590, avatar: "RD", donations: 82, change: "same" },
  { rank: 10, name: "Quinn Martinez", score: 1520, avatar: "QM", donations: 78, change: "up" },
  { rank: 11, name: "Avery Thompson", score: 1450, avatar: "AT", donations: 74, change: "down" },
  { rank: 12, name: "Cameron White", score: 1380, avatar: "CW", donations: 71, change: "same" },
  { rank: 13, name: "Drew Garcia", score: 1320, avatar: "DG", donations: 68, change: "up" },
  { rank: 14, name: "Skyler Anderson", score: 1280, avatar: "SA", donations: 65, change: "down" },
  { rank: 15, name: "Jamie Wilson", score: 1250, avatar: "JW", donations: 64, change: "same" },
]

const currentUser = {
  rank: 42,
  name: "John Doe",
  score: 1250,
  avatar: "JD",
  donations: 34,
  change: "up",
}

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Crown className="h-6 w-6 text-warning" />
    case 2:
      return <Medal className="h-6 w-6 text-muted-foreground" />
    case 3:
      return <Award className="h-6 w-6 text-chart-3" />
    default:
      return null
  }
}

function getRankStyle(rank: number) {
  switch (rank) {
    case 1:
      return "bg-warning/10 border-warning/30 shadow-lg shadow-warning/10"
    case 2:
      return "bg-muted/50 border-muted-foreground/30"
    case 3:
      return "bg-chart-3/10 border-chart-3/30"
    default:
      return "bg-secondary/30 border-border"
  }
}

export function LeaderboardContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Leaderboard</h1>
          <p className="text-muted-foreground">
            Top contributors making a difference in food waste reduction
          </p>
        </div>
        <Badge variant="outline" className="w-fit gap-2">
          <Trophy className="h-4 w-4 text-primary" />
          Your Rank: #{currentUser.rank}
        </Badge>
      </div>

      {/* Top 3 Podium */}
      <div className="grid gap-4 md:grid-cols-3">
        {[topThree[1], topThree[0], topThree[2]].map((user, index) => {
          const displayOrder = index === 0 ? 2 : index === 1 ? 1 : 3
          return (
            <Card
              key={user.rank}
              className={`relative overflow-hidden transition-all hover:scale-[1.02] ${getRankStyle(
                user.rank
              )} ${user.rank === 1 ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <CardContent className="p-6 text-center">
                <div className="absolute top-4 left-4">
                  {getRankIcon(user.rank)}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    className={
                      user.rank === 1
                        ? "bg-warning/20 text-warning"
                        : user.rank === 2
                        ? "bg-muted text-muted-foreground"
                        : "bg-chart-3/20 text-chart-3"
                    }
                  >
                    #{user.rank}
                  </Badge>
                </div>
                <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-background">
                  <AvatarImage src={`/avatars/${user.rank}.jpg`} />
                  <AvatarFallback
                    className={`text-xl font-bold ${
                      user.rank === 1
                        ? "bg-warning/20 text-warning"
                        : user.rank === 2
                        ? "bg-muted text-muted-foreground"
                        : "bg-chart-3/20 text-chart-3"
                    }`}
                  >
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">
                  {user.name}
                </h3>
                <Badge variant="outline" className="mb-3">
                  {user.badge}
                </Badge>
                <div className="text-3xl font-bold text-primary mb-4">
                  {user.score.toLocaleString()}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-2xl font-semibold text-card-foreground">
                      {user.donations}
                    </p>
                    <p className="text-xs text-muted-foreground">Donations</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-card-foreground">
                      {user.streak}
                    </p>
                    <p className="text-xs text-muted-foreground">Day Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Current User Card */}
      <Card className="bg-primary/5 border-primary/30">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
              #{currentUser.rank}
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatars/user.jpg" />
              <AvatarFallback className="bg-primary/20 text-primary">
                {currentUser.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-card-foreground">
                  {currentUser.name}
                </p>
                <Badge className="bg-primary/20 text-primary">You</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {currentUser.donations} donations
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-primary">
                {currentUser.score.toLocaleString()}
              </p>
              <div className="flex items-center gap-1 text-xs text-success">
                <TrendingUp className="h-3 w-3" />
                Moving up!
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Full Leaderboard */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Full Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className="flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                  {user.rank}
                </div>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`/avatars/${user.rank}.jpg`} />
                  <AvatarFallback className="bg-primary/20 text-primary text-sm">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-card-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {user.donations} donations
                  </p>
                </div>
                <div className="text-right flex items-center gap-3">
                  <p className="text-lg font-semibold text-primary">
                    {user.score.toLocaleString()}
                  </p>
                  {user.change === "up" && (
                    <TrendingUp className="h-4 w-4 text-success" />
                  )}
                  {user.change === "down" && (
                    <TrendingUp className="h-4 w-4 text-destructive rotate-180" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
