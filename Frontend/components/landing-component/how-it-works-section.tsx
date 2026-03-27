"use client"

import { Plus, Sparkles, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Plus,
    title: "Add Food",
    description: "Donors list available food items with details like quantity, type, and pickup time through our simple interface.",
    color: "primary",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Matches NGOs",
    description: "Our intelligent algorithm analyzes needs, location, and capacity to find the perfect NGO match instantly.",
    color: "accent",
  },
  {
    number: "03",
    icon: Truck,
    title: "Food Gets Delivered",
    description: "Coordinated pickup and delivery ensures food reaches those in need while still fresh and safe.",
    color: "secondary",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            How It Works
          </h2>
          <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Simple Steps to{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Make a Difference
            </span>
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Our streamlined process makes food donation effortless and impactful
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-px">
            <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary opacity-30" />
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary to-accent animate-pulse" style={{ opacity: 0.5 }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Card */}
                <div className="relative rounded-2xl border border-border/40 bg-card/30 p-8 backdrop-blur-xl transition-all duration-300 hover:border-border/80 hover:bg-card/50 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-8">
                    <div className={`relative inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-bold ${
                      step.color === 'primary' ? 'bg-primary/20 text-primary border border-primary/30' :
                      step.color === 'accent' ? 'bg-accent/20 text-accent border border-accent/30' :
                      'bg-secondary/20 text-secondary border border-secondary/30'
                    }`}>
                      Step {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6">
                    <div className="relative inline-flex">
                      <div className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
                        step.color === 'primary' ? 'bg-primary/30' :
                        step.color === 'accent' ? 'bg-accent/30' :
                        'bg-secondary/30'
                      }`} />
                      <div className={`relative h-16 w-16 rounded-full flex items-center justify-center ${
                        step.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary/60' :
                        step.color === 'accent' ? 'bg-gradient-to-br from-accent to-accent/60' :
                        'bg-gradient-to-br from-secondary to-secondary/60'
                      }`}>
                        <step.icon className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
