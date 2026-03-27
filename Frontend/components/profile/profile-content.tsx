"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Mail,
  Building2,
  MapPin,
  Phone,
  Trophy,
  Package,
  Calendar,
  Camera,
  Save,
  Award,
  TrendingUp,
} from "lucide-react"

const userStats = {
  totalDonations: 34,
  foodSaved: "128 kg",
  rank: 42,
  joinDate: "January 2024",
  badges: [
    { name: "First Donation", icon: Package },
    { name: "10 Donations", icon: Award },
    { name: "Week Streak", icon: Calendar },
  ],
}

export function ProfileContent() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    department: "Engineering",
    location: "San Francisco, CA",
    bio: "Passionate about reducing food waste and helping the community. I believe every small action counts towards a bigger change.",
  })

  const handleSave = () => {
    setIsEditing(false)
    // Handle save logic
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and preferences
          </p>
        </div>
        <Button
          variant={isEditing ? "default" : "outline"}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          ) : (
            "Edit Profile"
          )}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="lg:col-span-1 bg-card border-border">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/avatars/user.jpg" />
                  <AvatarFallback className="bg-primary/20 text-primary text-2xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-semibold text-card-foreground">
                {formData.name}
              </h2>
              <p className="text-sm text-muted-foreground">{formData.email}</p>
              <Badge className="mt-2 bg-primary/20 text-primary">
                <Trophy className="h-3 w-3 mr-1" />
                Rank #{userStats.rank}
              </Badge>

              <div className="w-full mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-card-foreground">
                      {userStats.totalDonations}
                    </p>
                    <p className="text-xs text-muted-foreground">Donations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-card-foreground">
                      {userStats.foodSaved}
                    </p>
                    <p className="text-xs text-muted-foreground">Food Saved</p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium text-card-foreground mb-3">
                  Achievements
                </p>
                <div className="flex justify-center gap-2">
                  {userStats.badges.map((badge, index) => (
                    <div
                      key={index}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                      title={badge.name}
                    >
                      <badge.icon className="h-5 w-5 text-primary" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Member since {userStats.joinDate}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Form */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Update your personal details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    className="pl-10 bg-secondary border-border"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    className="pl-10 bg-secondary border-border"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="phone"
                    className="pl-10 bg-secondary border-border"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department / Organization</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="department"
                    className="pl-10 bg-secondary border-border"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="location"
                  className="pl-10 bg-secondary border-border"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                className="bg-secondary border-border min-h-[100px]"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Overview */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Your Impact
          </CardTitle>
          <CardDescription>
            See how your contributions are making a difference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-card-foreground">34</p>
              <p className="text-sm text-muted-foreground">Total Donations</p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
              <Award className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-card-foreground">128 kg</p>
              <p className="text-sm text-muted-foreground">Food Saved</p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
              <Building2 className="h-8 w-8 text-info mx-auto mb-2" />
              <p className="text-2xl font-bold text-card-foreground">12</p>
              <p className="text-sm text-muted-foreground">NGOs Helped</p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
              <Trophy className="h-8 w-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold text-card-foreground">#42</p>
              <p className="text-sm text-muted-foreground">Global Rank</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
