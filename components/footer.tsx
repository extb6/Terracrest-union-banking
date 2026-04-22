import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Personal Banking", href: "/features#personal" },
    { label: "Business Banking", href: "/features#business" },
    { label: "Loans", href: "/features#loans" },
    { label: "Investments", href: "/features#investment" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Security", href: "/security" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclosures", href: "/disclosures" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-sidebar-primary blur-3xl animate-pulse" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-sidebar-accent blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2 animate-fade-in-left">
            <Link href="/" className="inline-block hover-lift">
              <Image
                src="/logo.png"
                alt="TerraCrest Union"
                width={180}
                height={45}
                className="h-12 w-auto brightness-0 invert transition-transform hover:scale-105"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
              Your trusted partner in financial success. Seamless. Fast. Secure banking solutions for everyone.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full bg-sidebar-accent p-2 text-sidebar-foreground/70 transition-all hover:bg-sidebar-primary hover:text-sidebar-primary-foreground hover:scale-110 hover-lift animate-fade-in-up"
                  aria-label={social.label}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:translate-x-1 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:translate-x-1 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:translate-x-1 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors animate-fade-in-up">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>123 Financial District, New York, NY 10004</span>
              </li>
              <li className="animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
                <a
                  href="tel:+1-800-555-0123"
                  className="flex items-center gap-3 text-sm text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:translate-x-1"
                >
                  <Phone className="h-4 w-4" />
                  +1 (800) 555-0123
                </a>
              </li>
              <li className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <a
                  href="mailto:support@terracrestunion.com"
                  className="flex items-center gap-3 text-sm text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:translate-x-1"
                >
                  <Mail className="h-4 w-4" />
                  support@terracrestunion.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-sidebar-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-sidebar-foreground/60 animate-fade-in-left">
            &copy; {new Date().getFullYear()} TerraCrest Union. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-sidebar-foreground/60 transition-all hover:text-sidebar-foreground hover:translate-y-[-2px] animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FDIC Notice */}
      <div className="relative bg-gradient-to-r from-sidebar-accent/50 to-sidebar-accent/30 py-4 animate-slide-in-up">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors">
            TerraCrest Union is a Member FDIC. Equal Housing Lender. NMLS# 123456. 
            Banking products and services are subject to bank approval.
          </p>
        </div>
      </div>
    </footer>
  )
}
