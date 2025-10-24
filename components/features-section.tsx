"use client"

import { Card } from "@/components/ui/card"
import { Brain, Bell, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Risk Detection",
    description: "Scans for liquidity, ownership, and contract integrity using advanced machine learning algorithms.",
    color: "text-primary",
    glowClass: "glow-green",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Sends Telegram notifications for new token listings and suspicious market activity.",
    color: "text-secondary",
    glowClass: "glow-yellow",
  },
  {
    icon: Shield,
    title: "Trust Score System",
    description: "Grades tokens from Safe to High Risk based on comprehensive blockchain behavior analysis.",
    color: "text-accent",
    glowClass: "glow-red",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-20 opacity-50" />

        <h2 className="font-trispace text-2xl md:text-5xl font-bold mb-16 text-center text-primary uppercase tracking-wider">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`p-8 bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:${feature.glowClass} group cursor-pointer`}
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-card border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-6 transition-all duration-300 ${feature.glowClass}`}
                >
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="font-trispace text-lg md:text-xl font-bold mb-3 text-foreground uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="description-text text-sm md:text-base text-muted leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(20)].map((_, i) => (
              <circle key={i} cx={Math.random() * 1000} cy={Math.random() * 1000} r="2" fill="#00FF87" />
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
