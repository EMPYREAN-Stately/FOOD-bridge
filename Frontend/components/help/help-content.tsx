"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  HelpCircle,
  Search,
  MessageCircle,
  Mail,
  FileText,
  Video,
  ExternalLink,
  Package,
  Building2,
  Trophy,
  Shield,
} from "lucide-react"

const faqs = [
  {
    category: "Getting Started",
    icon: Package,
    questions: [
      {
        q: "How do I create a food listing?",
        a: "To create a food listing, navigate to 'Add Food' from the sidebar or click the 'Add Food' button in the navbar. Fill in the details about your food item including name, category, quantity, location, and expiry time. Upload photos and submit your listing.",
      },
      {
        q: "What types of food can I donate?",
        a: "You can donate raw food (fruits, vegetables), cooked food (prepared meals), packaged food (canned goods, sealed items), dairy products, and bakery items. All food must be safe for consumption and within its expiry date.",
      },
      {
        q: "How does the matching system work?",
        a: "Our AI-powered system matches your food listings with nearby NGOs based on their needs, distance, and capacity. NGOs receive notifications about available food and can claim listings that match their requirements.",
      },
    ],
  },
  {
    category: "NGOs & Donations",
    icon: Building2,
    questions: [
      {
        q: "How do I find NGOs near me?",
        a: "Go to the 'NGOs Nearby' page to see a list of verified organizations in your area. You can filter by distance, see ratings, and contact them directly to coordinate donations.",
      },
      {
        q: "Can I donate directly to specific NGOs?",
        a: "Yes! When creating a listing, you can choose to make it available to all NGOs or select specific organizations you'd like to donate to.",
      },
      {
        q: "How do I know my donation was received?",
        a: "You'll receive notifications when an NGO claims your listing and when they pick up the food. You can also track the status of all your donations in the Dashboard.",
      },
    ],
  },
  {
    category: "Leaderboard & Achievements",
    icon: Trophy,
    questions: [
      {
        q: "How is my contribution score calculated?",
        a: "Your score is based on the quantity and frequency of donations, the urgency of food saved (preventing waste), and positive feedback from NGOs. Consistent donating also earns bonus points.",
      },
      {
        q: "What badges can I earn?",
        a: "Badges include First Donation, 10 Donations, 50 Donations, Week Streak, Month Streak, Community Star, and Food Hero. Each badge represents different milestones in your food donation journey.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    icon: Shield,
    questions: [
      {
        q: "How is my personal information protected?",
        a: "We use industry-standard encryption to protect your data. Your exact location is never shared publicly - only approximate distances are shown to potential recipients.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, you can delete your account from the Settings page. This will permanently remove all your data from our servers. Please note this action cannot be undone.",
      },
    ],
  },
]

const resources = [
  {
    title: "Video Tutorials",
    description: "Watch step-by-step guides on using FoodCycle",
    icon: Video,
    link: "#",
  },
  {
    title: "Documentation",
    description: "Detailed guides and best practices",
    icon: FileText,
    link: "#",
  },
  {
    title: "Contact Support",
    description: "Get help from our support team",
    icon: Mail,
    link: "#",
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share tips",
    icon: MessageCircle,
    link: "#",
  },
]

export function HelpContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
          <p className="text-muted-foreground">
            Find answers and get assistance with FoodCycle
          </p>
        </div>
      </div>

      {/* Search */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="max-w-xl mx-auto text-center">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-card-foreground mb-2">
              How can we help you?
            </h2>
            <p className="text-muted-foreground mb-4">
              Search our knowledge base or browse FAQs below
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for help..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource) => (
          <Card
            key={resource.title}
            className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-card-foreground flex items-center gap-1">
                    {resource.title}
                    <ExternalLink className="h-3 w-3" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQs */}
      <div className="grid gap-6 lg:grid-cols-2">
        {faqs.map((category) => (
          <Card key={category.category} className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-primary" />
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                  >
                    <AccordionTrigger className="text-left text-sm">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Support */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Still need help?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our support team is here to assist you
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email Us
              </Button>
              <Button className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Live Chat
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
