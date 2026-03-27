"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  MapPin,
  Package,
  Building2,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react"

const scheduledPickups = [
  {
    id: 1,
    title: "Fresh Vegetables Pickup",
    ngo: "Hope Foundation",
    date: "Today",
    time: "2:00 PM - 3:00 PM",
    location: "123 Main Street",
    status: "upcoming",
    type: "pickup",
  },
  {
    id: 2,
    title: "Bread Donation Delivery",
    ngo: "Food For All",
    date: "Today",
    time: "5:00 PM - 6:00 PM",
    location: "456 Oak Avenue",
    status: "upcoming",
    type: "delivery",
  },
  {
    id: 3,
    title: "Cooked Meals Collection",
    ngo: "Community Care Center",
    date: "Tomorrow",
    time: "10:00 AM - 11:00 AM",
    location: "789 Pine Road",
    status: "scheduled",
    type: "pickup",
  },
  {
    id: 4,
    title: "Fruit Basket Pickup",
    ngo: "Children First Charity",
    date: "March 26",
    time: "3:00 PM - 4:00 PM",
    location: "321 Elm Street",
    status: "scheduled",
    type: "pickup",
  },
]

const calendarDays = [
  { date: 22, isCurrentMonth: true, hasEvent: false },
  { date: 23, isCurrentMonth: true, hasEvent: false },
  { date: 24, isCurrentMonth: true, hasEvent: true, isToday: true },
  { date: 25, isCurrentMonth: true, hasEvent: true },
  { date: 26, isCurrentMonth: true, hasEvent: true },
  { date: 27, isCurrentMonth: true, hasEvent: false },
  { date: 28, isCurrentMonth: true, hasEvent: false },
  { date: 29, isCurrentMonth: true, hasEvent: false },
  { date: 30, isCurrentMonth: true, hasEvent: false },
  { date: 31, isCurrentMonth: true, hasEvent: false },
  { date: 1, isCurrentMonth: false, hasEvent: false },
  { date: 2, isCurrentMonth: false, hasEvent: false },
  { date: 3, isCurrentMonth: false, hasEvent: false },
  { date: 4, isCurrentMonth: false, hasEvent: false },
]

function getStatusColor(status: string) {
  switch (status) {
    case "upcoming":
      return "bg-warning/20 text-warning"
    case "scheduled":
      return "bg-info/20 text-info"
    case "completed":
      return "bg-success/20 text-success"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function ScheduleContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Schedule</h1>
          <p className="text-muted-foreground">
            Manage your pickup and delivery schedules
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Schedule Pickup
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">March 2026</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div
                  key={day}
                  className="text-xs font-medium text-muted-foreground p-2"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <button
                  key={index}
                  className={`relative aspect-square flex items-center justify-center rounded-lg text-sm transition-colors
                    ${
                      day.isToday
                        ? "bg-primary text-primary-foreground font-semibold"
                        : day.isCurrentMonth
                        ? "hover:bg-secondary text-card-foreground"
                        : "text-muted-foreground/50"
                    }
                  `}
                >
                  {day.date}
                  {day.hasEvent && !day.isToday && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Events */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledPickups.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-4 rounded-lg border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary/50"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                      event.type === "pickup"
                        ? "bg-primary/10"
                        : "bg-info/10"
                    }`}
                  >
                    {event.type === "pickup" ? (
                      <Package
                        className={`h-6 w-6 ${
                          event.type === "pickup"
                            ? "text-primary"
                            : "text-info"
                        }`}
                      />
                    ) : (
                      <Building2 className="h-6 w-6 text-info" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-card-foreground">
                        {event.title}
                      </h3>
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.ngo}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
