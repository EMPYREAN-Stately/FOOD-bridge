"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Settings,
  Moon,
  Sun,
  Bell,
  Mail,
  Smartphone,
  Globe,
  Shield,
  Trash2,
  Download,
  LogOut,
} from "lucide-react"

export function SettingsContent() {
  const [theme, setTheme] = useState("dark")
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    foodNearby: true,
    expiring: true,
    claimed: true,
    achievements: false,
  })

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and notifications
        </p>
      </div>

      {/* Appearance */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {theme === "dark" ? (
              <Moon className="h-5 w-5 text-primary" />
            ) : (
              <Sun className="h-5 w-5 text-primary" />
            )}
            Appearance
          </CardTitle>
          <CardDescription>
            Customize how the app looks on your device
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Theme</Label>
              <p className="text-sm text-muted-foreground">
                Select your preferred color theme
              </p>
            </div>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-[140px] bg-secondary border-border">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notifications
          </CardTitle>
          <CardDescription>
            Choose what notifications you want to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, email: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="text-base">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your device
                  </p>
                </div>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, push: checked })
                }
              />
            </div>
          </div>

          <div className="border-t border-border pt-4 space-y-4">
            <p className="text-sm font-medium text-card-foreground">
              Notification Types
            </p>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Food Nearby</Label>
                <p className="text-sm text-muted-foreground">
                  When new food is available near you
                </p>
              </div>
              <Switch
                checked={notifications.foodNearby}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, foodNearby: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Expiring Soon</Label>
                <p className="text-sm text-muted-foreground">
                  When your listings are about to expire
                </p>
              </div>
              <Switch
                checked={notifications.expiring}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, expiring: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Food Claimed</Label>
                <p className="text-sm text-muted-foreground">
                  When someone claims your donation
                </p>
              </div>
              <Switch
                checked={notifications.claimed}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, claimed: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Achievements</Label>
                <p className="text-sm text-muted-foreground">
                  When you earn new badges or achievements
                </p>
              </div>
              <Switch
                checked={notifications.achievements}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, achievements: checked })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Privacy & Security
          </CardTitle>
          <CardDescription>
            Manage your privacy and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Show Location</Label>
              <p className="text-sm text-muted-foreground">
                Allow others to see your approximate location
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Public Profile</Label>
              <p className="text-sm text-muted-foreground">
                Make your profile visible on leaderboards
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Account */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Account
          </CardTitle>
          <CardDescription>
            Manage your account settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label className="text-base">Language</Label>
                <p className="text-sm text-muted-foreground">
                  Select your preferred language
                </p>
              </div>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-[140px] bg-secondary border-border">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-t border-border pt-4 space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Download className="h-4 w-4" />
              Export My Data
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-destructive hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
