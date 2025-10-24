"use client"
import HeroSection from "@/components/hero-section"
import ScannerSection from "@/components/scanner-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import SupportedChainsSection from "@/components/supported-chains-section"
import TokenStatusSection from "@/components/token-status-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0B0F] via-[#001B14] to-[#0B0B0F]">
      <HeroSection />
      <ScannerSection />
      <AboutSection />
      <FeaturesSection />
      <SupportedChainsSection />
      <TokenStatusSection />
      <FooterSection />
    </main>
  )
}
