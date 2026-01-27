"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { WhyUsSection } from "@/components/sections/why-us"
import { PortfolioSection } from "@/components/sections/portfolio"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
