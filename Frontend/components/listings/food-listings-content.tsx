"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Package,
  Clock,
  MapPin,
  Search,
  Grid3X3,
  List,
  Filter,
  AlertTriangle,
} from "lucide-react"

const foodListings = [
  {
    id: 1,
    title: "Fresh Vegetables",
    category: "raw",
    quantity: "5 kg",
    expiry: "2 hours",
    distance: "1.2 km",
    status: "available",
    urgent: true,
    description: "Assorted fresh vegetables including carrots, spinach, and tomatoes.",
    donor: "Local Restaurant",
  },
  {
    id: 2,
    title: "Cooked Rice & Curry",
    category: "cooked",
    quantity: "3 portions",
    expiry: "4 hours",
    distance: "0.8 km",
    status: "available",
    urgent: false,
    description: "Freshly prepared vegetarian curry with steamed rice.",
    donor: "Community Kitchen",
  },
  {
    id: 3,
    title: "Bread Loaves",
    category: "packaged",
    quantity: "8 pieces",
    expiry: "1 day",
    distance: "2.5 km",
    status: "claimed",
    urgent: false,
    description: "Sealed whole wheat bread loaves from local bakery.",
    donor: "Sunrise Bakery",
  },
  {
    id: 4,
    title: "Fruit Basket",
    category: "raw",
    quantity: "2 kg",
    expiry: "3 hours",
    distance: "1.8 km",
    status: "available",
    urgent: true,
    description: "Mixed fruits including apples, bananas, and oranges.",
    donor: "Green Grocery",
  },
  {
    id: 5,
    title: "Pasta Salad",
    category: "cooked",
    quantity: "2 kg",
    expiry: "6 hours",
    distance: "3.2 km",
    status: "available",
    urgent: false,
    description: "Mediterranean pasta salad with vegetables and olive oil dressing.",
    donor: "Italian Bistro",
  },
  {
    id: 6,
    title: "Canned Goods",
    category: "packaged",
    quantity: "12 cans",
    expiry: "3 months",
    distance: "0.5 km",
    status: "available",
    urgent: false,
    description: "Assorted canned beans, corn, and tomatoes.",
    donor: "Food Bank",
  },
  {
    id: 7,
    title: "Fresh Milk",
    category: "raw",
    quantity: "5 liters",
    expiry: "1 hour",
    distance: "0.3 km",
    status: "available",
    urgent: true,
    description: "Fresh pasteurized milk from local dairy.",
    donor: "City Dairy",
  },
  {
    id: 8,
    title: "Sandwiches",
    category: "cooked",
    quantity: "10 pieces",
    expiry: "5 hours",
    distance: "1.5 km",
    status: "expired",
    urgent: false,
    description: "Assorted sandwiches from catering event.",
    donor: "Events Catering",
  },
]

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

function getCategoryColor(category: string) {
  switch (category) {
    case "raw":
      return "bg-success/20 text-success"
    case "cooked":
      return "bg-warning/20 text-warning"
    case "packaged":
      return "bg-info/20 text-info"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function FoodListingsContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [distanceFilter, setDistanceFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredListings = foodListings.filter((listing) => {
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesDistance =
      distanceFilter === "all" ||
      (distanceFilter === "1km" && parseFloat(listing.distance) <= 1) ||
      (distanceFilter === "3km" && parseFloat(listing.distance) <= 3) ||
      (distanceFilter === "5km" && parseFloat(listing.distance) <= 5)
    const matchesCategory =
      categoryFilter === "all" || listing.category === categoryFilter
    const matchesStatus =
      statusFilter === "all" || listing.status === statusFilter

    return matchesSearch && matchesDistance && matchesCategory && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Food Listings</h1>
          <p className="text-muted-foreground">
            Browse available food donations in your area
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-card border-border">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search food listings..."
                className="pl-10 bg-secondary border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Select value={distanceFilter} onValueChange={setDistanceFilter}>
                <SelectTrigger className="w-[140px] bg-secondary border-border">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Distances</SelectItem>
                  <SelectItem value="1km">Within 1 km</SelectItem>
                  <SelectItem value="3km">Within 3 km</SelectItem>
                  <SelectItem value="5km">Within 5 km</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px] bg-secondary border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="raw">Raw</SelectItem>
                  <SelectItem value="cooked">Cooked</SelectItem>
                  <SelectItem value="packaged">Packaged</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px] bg-secondary border-border">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="claimed">Claimed</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Listings */}
      {viewMode === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredListings.map((listing) => (
            <Card
              key={listing.id}
              className="bg-card border-border overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-0">
                <div className="relative h-32 bg-secondary flex items-center justify-center">
                  <Package className="h-12 w-12 text-muted-foreground/50" />
                  {listing.urgent && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-destructive/90 text-destructive-foreground gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Urgent
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-card-foreground line-clamp-1">
                      {listing.title}
                    </h3>
                    <Badge className={getStatusColor(listing.status)}>
                      {listing.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {listing.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className={getCategoryColor(listing.category)}>
                      {listing.category}
                    </Badge>
                    <Badge variant="outline">{listing.quantity}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {listing.expiry}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {listing.distance}
                    </span>
                  </div>
                  <Button
                    className="w-full"
                    variant={listing.status === "available" ? "default" : "outline"}
                    disabled={listing.status !== "available"}
                  >
                    {listing.status === "available"
                      ? "Claim Food"
                      : listing.status === "claimed"
                      ? "Already Claimed"
                      : "Expired"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredListings.map((listing) => (
            <Card
              key={listing.id}
              className="bg-card border-border overflow-hidden transition-all hover:border-primary/50"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Package className="h-8 w-8 text-muted-foreground/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-card-foreground">
                        {listing.title}
                      </h3>
                      {listing.urgent && (
                        <Badge className="bg-destructive/90 text-destructive-foreground gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {listing.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {listing.expiry}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {listing.distance}
                      </span>
                      <Badge variant="outline" className={getCategoryColor(listing.category)}>
                        {listing.category}
                      </Badge>
                      <span>{listing.quantity}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(listing.status)}>
                      {listing.status}
                    </Badge>
                    <Button
                      variant={listing.status === "available" ? "default" : "outline"}
                      disabled={listing.status !== "available"}
                    >
                      {listing.status === "available" ? "Claim" : listing.status}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredListings.length === 0 && (
        <Card className="bg-card border-border">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Package className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium text-card-foreground mb-1">
              No listings found
            </h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search query
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
