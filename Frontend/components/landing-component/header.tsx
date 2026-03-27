"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [mounted, setMounted] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
    setMounted(true)
  }, [])

  if (!mounted) return null // 🔥 prevents hydration error

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
            <Leaf className="relative h-8 w-8 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            FoodShare<span className="text-primary">AI</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">How It Works</a>
          <a href="#stats" className="text-sm font-medium text-muted-foreground hover:text-foreground">Impact</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">About</a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Link href={isLoggedIn ? "/dashboard" : "/login"}>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              {isLoggedIn ? "Dashboard" : "Login"}
            </Button>
          </Link>

          <Link href={isLoggedIn ? "/dashboard" : "/register"}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
              {isLoggedIn ? "Go to App" : "Get Started"}
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</a>
            <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground">Impact</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>

            <div className="flex flex-col gap-3 pt-4 border-t border-border/40">
              <Link href={isLoggedIn ? "/dashboard" : "/login"}>
                <Button variant="ghost" className="w-full justify-center">
                  {isLoggedIn ? "Dashboard" : "Login"}
                </Button>
              </Link>

              <Link href={isLoggedIn ? "/dashboard" : "/register"}>
                <Button className="w-full bg-primary text-primary-foreground">
                  {isLoggedIn ? "Go to App" : "Get Started"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}