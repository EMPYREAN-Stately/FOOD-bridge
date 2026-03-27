import { Header } from "@/components/landing-component/header"
import { HeroSection } from "@/components/landing-component/hero-section"
import { FeaturesSection } from "@/components/landing-component/features-section"
import { HowItWorksSection } from "@/components/landing-component/how-it-works-section"
import { StatsSection } from "@/components/landing-component/stats-section"
import { CTASection } from "@/components/landing-component/cta-section"
import { Footer } from "@/components/landing-component/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
