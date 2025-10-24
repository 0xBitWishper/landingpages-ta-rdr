"use client"

import { Button } from "@/components/ui/button"
import { Radar } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated radar background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FF87" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#00FF87" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Concentric circles */}
          {[1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={100 * i}
              fill="none"
              stroke="#00FF87"
              strokeWidth="1"
              opacity={0.3 - i * 0.05}
            />
          ))}

          {/* Grid lines */}
          <line x1="500" y1="0" x2="500" y2="1000" stroke="#00FF87" strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="500" x2="1000" y2="500" stroke="#00FF87" strokeWidth="1" opacity="0.2" />
          <line x1="200" y1="200" x2="800" y2="800" stroke="#00FF87" strokeWidth="1" opacity="0.15" />
          <line x1="800" y1="200" x2="200" y2="800" stroke="#00FF87" strokeWidth="1" opacity="0.15" />

          {/* Rotating sweep */}
          <g className="animate-radar-sweep" style={{ transformOrigin: "500px 500px" }}>
            <line x1="500" y1="500" x2="500" y2="100" stroke="#00FF87" strokeWidth="2" opacity="0.6" />
            <polygon points="500,100 495,120 505,120" fill="#00FF87" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Floating token icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3,
            }}
          >
            <Radar className="w-6 h-6 text-primary" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 inline-block">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/5 text-primary text-sm font-medium">
            <Radar className="w-4 h-4" />
            <span>POWERED BY RADAR ANALYZER</span>
          </div>
        </div>

        <h1 className="font-trispace text-3xl md:text-7xl font-bold mb-6 text-primary text-glow uppercase tracking-wider">
          Scan the Market.
          <br />
          Spot the Risk.
        </h1>

        <p className="font-trispace md:text-lg text-muted mb-12 max-w-2xl mx-auto leading-relaxed font-normal text-sm py-[38px] leading-3">
          Radar Analyzer is an AI-powered Telegram bot that continuously scans blockchain markets to identify suspicious tokens, unsafe contracts, liquidity traps, and potential rug pulls.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/radar_analyzerbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-trispace uppercase tracking-wider text-base px-8 py-6 rounded-lg glow-green hover:glow-green"
            >
              Launch Telegram Bot
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
