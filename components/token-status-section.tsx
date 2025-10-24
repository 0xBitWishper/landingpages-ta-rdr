"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react"

const statuses = [
  {
    icon: AlertCircle,
    title: "High Risk",
    color: "text-accent",
    glowClass: "glow-red",
    borderColor: "border-accent",
    description: "Detected critical vulnerabilities, honeypots, or rug pull indicators.",
  },
  {
    icon: AlertTriangle,
    title: "Caution",
    color: "text-secondary",
    glowClass: "glow-yellow",
    borderColor: "border-secondary",
    description: "Moderate risk factors detected. Proceed with caution and due diligence.",
  },
  {
    icon: CheckCircle,
    title: "Likely Safe",
    color: "text-primary",
    glowClass: "glow-green",
    borderColor: "border-primary",
    description: "Passed security checks. Still verify independently before trading.",
  },
  {
    icon: HelpCircle,
    title: "Unknown",
    color: "text-muted",
    glowClass: "glow-white",
    borderColor: "border-muted",
    description: "Insufficient data available. More analysis needed for classification.",
  },
]

export default function TokenStatusSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-20 opacity-50" />

        <div className="mb-16">
          <h2 className="font-trispace text-2xl md:text-5xl font-bold mb-4 text-primary uppercase tracking-wider">
            Token Risk Overview
          </h2>
          <p className="font-trispace text-sm md:text-base text-muted max-w-2xl font-normal">
            Every token analyzed by Radar Analyzer is classified into a safety category based on comprehensive
            blockchain behavior analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statuses.map((status, index) => {
            const Icon = status.icon
            return (
              <Card
                key={index}
                className={`p-6 bg-card/50 border-2 ${status.borderColor} hover:${status.glowClass} transition-all duration-300 group cursor-pointer`}
              >
                <div className="mb-4">
                  <Icon className={`w-10 h-10 ${status.color}`} />
                </div>
                <h3 className="font-trispace text-base md:text-lg font-bold mb-2 text-foreground uppercase tracking-wide">
                  {status.title}
                </h3>
                <p className="font-trispace text-xs md:text-sm text-muted leading-relaxed font-normal">
                  {status.description}
                </p>
                {/* Pulse animation indicator */}
                <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className={`h-full ${status.color.replace("text-", "bg-")} animate-pulse`}
                    style={{ width: "60%" }}
                  />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
