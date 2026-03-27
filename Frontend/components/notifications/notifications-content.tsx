"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Package,
  Clock,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Heart,
  Trophy,
  Settings,
  Check,
  Trash2,
} from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "claimed",
    title: "Food Claimed",
    message: "Hope Foundation claimed your 'Fresh Vegetables' donation. They will pick it up within 2 hours.",
    time: "5 min ago",
    unread: true,
    icon: CheckCircle,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    id: 2,
    type: "expiring",
    title: "Expiring Soon",
    message: "Your 'Cooked Rice & Curry' listing expires in 2 hours. Consider extending or finding a recipient quickly.",
    time: "1 hour ago",
    unread: true,
    icon: Clock,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 3,
    type: "nearby",
    title: "Food Available Nearby",
    message: "New food listing 'Fruit Basket' available just 0.5km from your location.",
    time: "2 hours ago",
    unread: true,
    icon: MapPin,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    id: 4,
    type: "achievement",
    title: "Achievement Unlocked!",
    message: "Congratulations! You've earned the 'First 10 Donations' badge. Keep up the great work!",
    time: "5 hours ago",
    unread: false,
    icon: Trophy,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    id: 5,
    type: "ngo",
    title: "NGO Response",
    message: "Community Care Center has accepted your donation request. Contact them to arrange pickup.",
    time: "Yesterday",
    unread: false,
    icon: Heart,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    id: 6,
    type: "expiring",
    title: "Listing Expired",
    message: "Your 'Sandwich Platter' listing has expired. You can create a new listing if the food is still available.",
    time: "Yesterday",
    unread: false,
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    id: 7,
    type: "system",
    title: "Profile Updated",
    message: "Your profile information has been successfully updated.",
    time: "2 days ago",
    unread: false,
    icon: Settings,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
  {
    id: 8,
    type: "claimed",
    title: "Food Picked Up",
    message: "Food For All has successfully picked up your 'Bread Loaves' donation. Thank you for your contribution!",
    time: "3 days ago",
    unread: false,
    icon: Package,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function NotificationsContent() {
  const [notificationList, setNotificationList] = useState(notifications)

  const unreadCount = notificationList.filter((n) => n.unread).length

  const markAllAsRead = () => {
    setNotificationList(
      notificationList.map((n) => ({ ...n, unread: false }))
    )
  }

  const markAsRead = (id: number) => {
    setNotificationList(
      notificationList.map((n) =>
        n.id === id ? { ...n, unread: false } : n
      )
    )
  }

  const deleteNotification = (id: number) => {
    setNotificationList(notificationList.filter((n) => n.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with your food donations and activities
          </p>
        </div>
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <Badge className="bg-primary/20 text-primary">
              {unreadCount} unread
            </Badge>
          )}
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            <Check className="h-4 w-4 mr-2" />
            Mark all as read
          </Button>
        </div>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            All Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notificationList.map((notification) => (
              <div
                key={notification.id}
                className={`group relative flex items-start gap-4 rounded-lg border p-4 transition-all ${
                  notification.unread
                    ? "bg-primary/5 border-primary/20"
                    : "bg-secondary/30 border-border hover:bg-secondary/50"
                }`}
              >
                <div
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${notification.bgColor}`}
                >
                  <notification.icon
                    className={`h-5 w-5 ${notification.color}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-card-foreground">
                      {notification.title}
                    </p>
                    {notification.unread && (
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {notification.time}
                  </p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {notification.unread && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => markAsRead(notification.id)}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => deleteNotification(notification.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {notificationList.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium text-card-foreground mb-1">
                No notifications
              </h3>
              <p className="text-sm text-muted-foreground">
                You&apos;re all caught up!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
