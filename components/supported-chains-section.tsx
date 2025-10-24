"use client"

import { Card } from "@/components/ui/card"

const chains = [
  {
    name: "Solana",
    img: "/solana.png",
    glowClass: "glow-green",
    description: "High-speed blockchain with sub-second finality and low transaction costs",
  },
  {
    name: "BNB Chain",
    img: "/binance_smartchain.png",
    glowClass: "glow-yellow",
    description: "Fast and scalable blockchain with high throughput and DeFi ecosystem",
  },
  {
    name: "Ethereum",
    img: "/ethereum.png",
    glowClass: "glow-white",
    description: "Leading smart contract platform with the largest developer community",
  },
]

export default function SupportedChainsSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-20 opacity-50" />

        <h2 className="font-trispace text-2xl md:text-5xl font-bold mb-16 text-center text-primary uppercase tracking-wider">
          Supported Chains
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {chains.map((chain, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:${chain.glowClass} group cursor-pointer flex flex-col items-center justify-center text-center`}
            >
              <div
                className={`w-20 h-20 rounded-lg bg-card border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-6 transition-all duration-300 ${chain.glowClass}`}
              >
                <img
                  src={chain.img}
                  alt={chain.name + " logo"}
                  width={80}
                  height={80}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="font-trispace text-2xl font-bold text-foreground uppercase tracking-wide mb-3">
                {chain.name}
              </h3>
              <p className="font-trispace text-xs md:text-sm font-normal text-foreground/70 leading-relaxed">
                {chain.description}
              </p>
            </Card>
          ))}
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
