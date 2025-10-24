"use client"

import { MessageCircle, Twitter } from "lucide-react"
import Image from "next/image"

export default function FooterSection() {
  return (
    <footer className="border-t border-border/50 py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Logo and text */}
          <div className="flex flex-col items-start gap-2">
            <Image src="/logo_radar_analyzer.png" alt="Radar Analyzer" width={80} height={27} className="h-7 w-auto" />
            <p className="text-sm text-muted">© 2025 Radar Analyzer — Radar Analyzer AI Dex Security Intelligence.</p>
          </div>

          {/* Right side - Social icon Twitter only */}
          <div className="flex gap-4">
            <a
              href="https://x.com/radaranalyzerio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-primary/50 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300 hover:glow-green"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
