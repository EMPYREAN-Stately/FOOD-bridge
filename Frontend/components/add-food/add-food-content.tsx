"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  UtensilsCrossed,
  Upload,
  MapPin,
  Clock,
  Package,
  Camera,
  X,
} from "lucide-react"

export function AddFoodContent() {
  const [files, setFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    unit: "",
    description: "",
    location: "",
    expiryDate: "",
    expiryTime: "",
  })


  const removeImage = (index: number) => {
  setFiles(files.filter((_, i) => i !== index))
}

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const form = new FormData()

    form.append("title", formData.name)
    form.append("category", formData.category)
    form.append("description", formData.description)
    form.append("quantityValue", formData.quantity)
    form.append("quantityUnit", formData.unit)
    form.append("address", formData.location)
    form.append("lat", "17.3850")   // dummy (Hyderabad)
    form.append("lng", "78.4867")

    // combine date + time
    // combine date + time safely
if (formData.expiryDate && formData.expiryTime) {
  const expiry = new Date(
    `${formData.expiryDate}T${formData.expiryTime}`
  )
  form.append("expiryTime", expiry.toISOString())
} else {
    alert("Please select expiry date & time")
  return
}

    // append images
    files.forEach((file) => {
      form.append("images", file)
    })

    const token = localStorage.getItem("token")

const res = await fetch("http://localhost:4000/api/food/add", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  body: form,
})

    const data = await res.json()

if (!res.ok) {
  alert(data.message || "Something went wrong")
  return
}

alert("Food added successfully ✅")

  } catch (err) {
    console.error(err)
    alert("Error submitting form")
  }
}

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Add Food Listing</h1>
        <p className="text-muted-foreground">
          Share your surplus food with those in need
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
              Food Details
            </CardTitle>
            <CardDescription>
              Provide information about the food you want to donate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Food Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Food Name</Label>
              <Input
                id="name"
                placeholder="e.g., Fresh Vegetables, Cooked Rice"
                className="bg-secondary border-border"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Category and Quantity */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="raw">Raw / Fresh</SelectItem>
                    <SelectItem value="cooked">Cooked</SelectItem>
                    <SelectItem value="packaged">Packaged</SelectItem>
                    <SelectItem value="beverages">Beverages</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="bakery">Bakery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <div className="flex gap-2">
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Amount"
                    className="bg-secondary border-border flex-1"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                  />
                  <Select
                    value={formData.unit}
                    onValueChange={(value) =>
                      setFormData({ ...formData, unit: value })
                    }
                  >
                    <SelectTrigger className="w-[100px] bg-secondary border-border">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="liters">liters</SelectItem>
                      <SelectItem value="pieces">pieces</SelectItem>
                      <SelectItem value="portions">portions</SelectItem>
                      <SelectItem value="boxes">boxes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the food items, their condition, and any special handling instructions..."
                className="bg-secondary border-border min-h-[100px]"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Images</Label>
              <div className="grid gap-4 sm:grid-cols-4">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg bg-secondary border border-border flex items-center justify-center group"
                  ><img
                    src={URL.createObjectURL(file)}
                    className="w-full h-full object-cover"
                  />
                    <Package className="h-8 w-8 text-muted-foreground/50" />
                    <span className="absolute bottom-2 text-xs text-muted-foreground">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                {files.length < 4 && (
                <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer">
                  
                  <Camera className="h-6 w-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Add Photo</span>

                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        const selectedFiles = Array.from(e.target.files)
                        setFiles((prev) => [...prev, ...selectedFiles].slice(0, 4))
                      }
                    }}
                  />
                </label>
              )}
              </div>
              <p className="text-xs text-muted-foreground">
                Upload up to 4 images of your food items
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Pickup Location
            </CardTitle>
            <CardDescription>
              Where can the food be picked up from?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location">Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Enter pickup address"
                  className="bg-secondary border-border pl-10"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="h-48 rounded-lg bg-secondary border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Map preview will appear here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Expiry Information
            </CardTitle>
            <CardDescription>
              When should the food be picked up by?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  className="bg-secondary border-border"
                  value={formData.expiryDate}
                  onChange={(e) =>
                    setFormData({ ...formData, expiryDate: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryTime">Expiry Time</Label>
                <Input
                  id="expiryTime"
                  type="time"
                  className="bg-secondary border-border"
                  value={formData.expiryTime}
                  onChange={(e) =>
                    setFormData({ ...formData, expiryTime: e.target.value })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 mt-6">
          <Button type="submit" className="flex-1 gap-2">
            <Upload className="h-4 w-4" />
            Submit Listing
          </Button>
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  )
}
