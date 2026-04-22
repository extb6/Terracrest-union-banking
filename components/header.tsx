"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
]

const servicesLinks = [
  { label: "Personal Banking", href: "/features#personal" },
  { label: "Business Banking", href: "/features#business" },
  { label: "Loans & Mortgages", href: "/features#loans" },
  { label: "Investment Services", href: "/features#investment" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full animate-fade-in-down">
      <div className="glass border-b border-border/20 supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover-lift">
            <Image
              src="/logo.png"
              alt="TerraCrest Union"
              width={200}
              height={50}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary">
                  Services <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 animate-scale-in">
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button 
              variant="ghost" 
              asChild
              className="hover-glow relative group"
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button 
              asChild
              className="relative group overflow-hidden bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link href="/register">
                <span className="relative z-10">Open Account</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-colors lg:hidden hover:bg-primary/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="glass border-t border-border/20 lg:hidden animate-slide-in-down">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-all hover:bg-primary/10 hover:text-primary"
                style={{
                  animation: `fadeInLeft 0.3s ease-out ${idx * 0.05}s backwards`,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border/20 pt-3 mt-3">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </p>
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-all hover:bg-primary/10 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 border-t border-border/20 pt-4 mt-3">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg">
                <Link href="/register">Open Account</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
