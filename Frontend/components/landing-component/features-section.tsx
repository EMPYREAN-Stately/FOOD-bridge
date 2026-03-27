"use client"

import { Brain, MapPin, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart Matching",
    description: "Our AI analyzes donor inventory, NGO needs, and logistics to create optimal matches in real-time.",
    gradient: "from-primary to-primary/60",
    glow: "bg-primary/30",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track food donations from pickup to delivery with live GPS monitoring and status updates.",
    gradient: "from-accent to-accent/60",
    glow: "bg-accent/30",
  },
  {
    icon: Clock,
    title: "Expiry Prediction",
    description: "Machine learning predicts food shelf life, prioritizing items that need immediate distribution.",
    gradient: "from-secondary to-secondary/60",
    glow: "bg-secondary/30",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Build lasting relationships between donors and communities while measuring your social impact.",
    gradient: "from-primary via-accent to-secondary",
    glow: "bg-accent/30",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Features
          </h2>
          <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Intelligent Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Zero Waste
            </span>
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Leveraging cutting-edge AI to transform how we handle food surplus
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/40 bg-card/30 p-8 backdrop-blur-xl transition-all duration-300 hover:border-border/80 hover:bg-card/50"
            >
              {/* Top gradient line */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="mb-6">
                <div className="relative inline-flex">
                  <div className={`absolute inset-0 rounded-xl ${feature.glow} blur-lg opacity-50 transition-opacity group-hover:opacity-100`} />
                  <div className={`relative h-14 w-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <feature.icon className="h-7 w-7 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-gradient-to-br from-border/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
