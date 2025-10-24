"use client"
import { Shield, Zap, TrendingUp } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-20 opacity-50" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="font-trispace text-2xl md:text-5xl font-bold mb-6 text-primary uppercase tracking-wider">
              Your Blockchain
              <br />
              Security Radar
            </h2>
            <p className="description-text text-base md:text-lg text-muted mb-8 leading-relaxed">
              Radar Analyzer uses advanced AI to analyze smart contracts, detect honeypots, verify liquidity, and assign
              a comprehensive safety grade to every token. Our real-time scanning engine processes blockchain data
              continuously, giving you the intelligence you need to trade with confidence.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Smart Contract Analysis</h3>
                  <p className="description-text text-sm text-muted">
                    Deep inspection of contract code for vulnerabilities
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real-Time Monitoring</h3>
                  <p className="description-text text-sm text-muted">Continuous blockchain scanning 24/7</p>
                </div>
              </div>
              <div className="flex gap-3">
                <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Liquidity Verification</h3>
                  <p className="description-text text-sm text-muted">Detect locked liquidity and rug pull risks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Radar visualization */}
          <div className="relative h-96 flex items-center justify-center">
            <svg className="w-full h-full max-w-sm" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="radarViz" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00FF87" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00FF87" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Concentric circles */}
              {[1, 2, 3, 4].map((i) => (
                <circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={80 * i}
                  fill="none"
                  stroke="#00FF87"
                  strokeWidth="1.5"
                  opacity={0.4 - i * 0.08}
                />
              ))}

              {/* Cross lines */}
              <line x1="200" y1="20" x2="200" y2="380" stroke="#00FF87" strokeWidth="1" opacity="0.3" />
              <line x1="20" y1="200" x2="380" y2="200" stroke="#00FF87" strokeWidth="1" opacity="0.3" />

              {/* Rotating sweep */}
              <g className="animate-radar-sweep" style={{ transformOrigin: "200px 200px" }}>
                <line x1="200" y1="200" x2="200" y2="50" stroke="#00FF87" strokeWidth="2" opacity="0.7" />
              </g>

              {/* Data points */}
              <circle cx="200" cy="100" r="4" fill="#00FF87" opacity="0.8" />
              <circle cx="280" cy="200" r="4" fill="#FFD93D" opacity="0.8" />
              <circle cx="200" cy="300" r="4" fill="#FF4444" opacity="0.8" />
              <circle cx="120" cy="200" r="4" fill="#00FF87" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
