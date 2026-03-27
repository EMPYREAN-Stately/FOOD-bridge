"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "Meals Saved",
    description: "Food redirected to those in need",
  },
  {
    value: 500,
    suffix: "+",
    label: "NGOs Connected",
    description: "Partner organizations nationwide",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Active Users",
    description: "Growing community of donors",
  },
]

function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            Our Impact
          </h2>
          <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Making a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Real Difference
            </span>
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
            >
              {/* Glassmorphism card */}
              <div className="relative rounded-2xl border border-border/40 bg-card/30 p-8 backdrop-blur-xl text-center transition-all duration-300 hover:border-border/80 hover:bg-card/50">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                
                {/* Top accent line */}
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="relative">
                  {/* Value */}
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
