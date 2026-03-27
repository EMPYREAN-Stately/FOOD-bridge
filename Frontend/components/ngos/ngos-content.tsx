"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Building2,
  MapPin,
  Star,
  Phone,
  Mail,
  ExternalLink,
  Search,
  Users,
  Clock,
  Heart,
} from "lucide-react"

const ngos = [
  {
    id: 1,
    name: "Hope Foundation",
    description: "Providing meals to homeless and underprivileged communities since 2010.",
    distance: "0.8 km",
    rating: 4.9,
    reviews: 128,
    phone: "+1 234 567 890",
    email: "contact@hopefoundation.org",
    website: "hopefoundation.org",
    avatar: "HF",
    categories: ["Homeless", "Community Kitchen"],
    acceptsAll: true,
    responseTime: "< 30 mins",
    peopleServed: "500+",
    verified: true,
  },
  {
    id: 2,
    name: "Food For All",
    description: "Dedicated to ending hunger by redistributing surplus food to those in need.",
    distance: "1.2 km",
    rating: 4.8,
    reviews: 95,
    phone: "+1 234 567 891",
    email: "info@foodforall.org",
    website: "foodforall.org",
    avatar: "FA",
    categories: ["Food Bank", "Schools"],
    acceptsAll: true,
    responseTime: "< 1 hour",
    peopleServed: "300+",
    verified: true,
  },
  {
    id: 3,
    name: "Community Care Center",
    description: "Supporting local families with food, shelter, and essential services.",
    distance: "1.5 km",
    rating: 4.7,
    reviews: 82,
    phone: "+1 234 567 892",
    email: "help@communitycare.org",
    website: "communitycare.org",
    avatar: "CC",
    categories: ["Families", "Elderly"],
    acceptsAll: false,
    responseTime: "< 2 hours",
    peopleServed: "200+",
    verified: true,
  },
  {
    id: 4,
    name: "Street Meals Initiative",
    description: "Mobile food distribution serving street communities across the city.",
    distance: "2.1 km",
    rating: 4.6,
    reviews: 67,
    phone: "+1 234 567 893",
    email: "team@streetmeals.org",
    website: "streetmeals.org",
    avatar: "SM",
    categories: ["Homeless", "Mobile Service"],
    acceptsAll: true,
    responseTime: "< 1 hour",
    peopleServed: "400+",
    verified: false,
  },
  {
    id: 5,
    name: "Children First Charity",
    description: "Ensuring nutritious meals for children in underprivileged schools.",
    distance: "2.8 km",
    rating: 4.9,
    reviews: 156,
    phone: "+1 234 567 894",
    email: "contact@childrenfirst.org",
    website: "childrenfirst.org",
    avatar: "CF",
    categories: ["Schools", "Children"],
    acceptsAll: false,
    responseTime: "Same day",
    peopleServed: "800+",
    verified: true,
  },
  {
    id: 6,
    name: "Elderly Support Network",
    description: "Delivering hot meals and companionship to seniors living alone.",
    distance: "3.2 km",
    rating: 4.8,
    reviews: 73,
    phone: "+1 234 567 895",
    email: "care@elderlynetwork.org",
    website: "elderlynetwork.org",
    avatar: "ES",
    categories: ["Elderly", "Home Delivery"],
    acceptsAll: false,
    responseTime: "< 3 hours",
    peopleServed: "150+",
    verified: true,
  },
]

export function NGOsContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredNGOs = ngos.filter((ngo) =>
    ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ngo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ngo.categories.some((cat) =>
      cat.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">NGOs Nearby</h1>
          <p className="text-muted-foreground">
            Connect with local organizations to donate your food
          </p>
        </div>
      </div>

      {/* Search */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search NGOs by name, category, or description..."
              className="pl-10 bg-secondary border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Map Placeholder */}
      <Card className="bg-card border-border overflow-hidden">
        <div className="h-64 bg-secondary flex items-center justify-center relative">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-primary/50 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Interactive map showing {filteredNGOs.length} NGOs nearby
            </p>
          </div>
          {/* Mock map pins */}
          <div className="absolute top-8 left-1/4 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="absolute top-16 right-1/3 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="absolute bottom-12 left-1/3 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="absolute top-20 right-1/4 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
        </div>
      </Card>

      {/* NGO Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredNGOs.map((ngo) => (
          <Card
            key={ngo.id}
            className="bg-card border-border overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-14 w-14 rounded-lg">
                  <AvatarImage src={`/ngo/${ngo.id}.jpg`} />
                  <AvatarFallback className="rounded-lg bg-primary/10 text-primary text-lg font-semibold">
                    {ngo.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-card-foreground">
                      {ngo.name}
                    </h3>
                    {ngo.verified && (
                      <Badge className="bg-primary/20 text-primary text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {ngo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {ngo.categories.map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="text-xs"
                      >
                        {category}
                      </Badge>
                    ))}
                    {ngo.acceptsAll && (
                      <Badge className="bg-success/20 text-success text-xs">
                        Accepts All Food
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-warning mb-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{ngo.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {ngo.reviews} reviews
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-info mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">{ngo.distance}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">away</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold">{ngo.peopleServed}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">served</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Response: {ngo.responseTime}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Phone className="h-3 w-3" />
                    Call
                  </Button>
                  <Button size="sm" className="gap-1">
                    <Heart className="h-3 w-3" />
                    Donate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNGOs.length === 0 && (
        <Card className="bg-card border-border">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Building2 className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium text-card-foreground mb-1">
              No NGOs found
            </h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search query
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
