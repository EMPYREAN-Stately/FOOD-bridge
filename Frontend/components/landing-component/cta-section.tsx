"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative rounded-3xl border border-border/40 bg-card/30 backdrop-blur-xl overflow-hidden">
          {/* Top gradient line */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              {/* Icon */}
              <div className="mb-8 inline-flex">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                    <Heart className="h-10 w-10 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
                Start Donating Today
              </h2>

              {/* Subtext */}
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of donors and NGOs working together to eliminate food waste and feed communities. Every meal counts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register">
                <Button 
                  size="lg" 
                  className="group relative bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 px-10 py-6 text-lg"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-border/60 bg-background/50 backdrop-blur-sm text-foreground hover:bg-muted/50 px-10 py-6 text-lg"
                >
                  Learn More
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span>Verified NGOs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  <span>Secure platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
      </div>
    </section>
  )
}
