"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"

export default function ScannerSection() {
  const [isScanning, setIsScanning] = useState(false)
  const [copied, setCopied] = useState(false)

  const RADAR_ANALYZER_ADDRESS = "0x1234567890123456789012345678901234567890"

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => setIsScanning(false), 2000)
  }

  const handleCopyContract = () => {
    navigator.clipboard.writeText(RADAR_ANALYZER_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-20 opacity-50" />

        <div className="mb-12 text-center">
          <h2 className="font-trispace text-2xl md:text-5xl font-bold mb-4 text-primary uppercase tracking-wider">
            Contract Address
          </h2>
          <p className="md:text-lg text-muted font-trispace font-normal text-sm">
            This is official contract address of Radar Analyzer project.
          </p>
        </div>

        <Card className="p-4 md:p-8 bg-card/50 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 mb-8 glow-green">
          <div className="mb-6">
            <p className="text-xs md:text-sm text-muted mb-3 uppercase tracking-wide font-trispace">
              Radar Analyzer Contract Address
            </p>
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
              <div className="flex-1 bg-input border-2 border-border rounded-lg p-3 text-foreground font-mono text-xs md:text-sm break-all overflow-x-auto">
                {RADAR_ANALYZER_ADDRESS}
              </div>
              <Button
                onClick={handleCopyContract}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-trispace uppercase tracking-wider px-4 md:px-6 py-2 md:py-3 rounded-lg glow-green hover:glow-green text-xs md:text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Contract
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Animated scanner line */}
          {isScanning && (
            <div className="h-1 bg-border rounded-full overflow-hidden mb-6">
              <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-scanner-line" />
            </div>
          )}
        </Card>

        {/* Results display */}
        {isScanning && (
          <Card className="p-4 md:p-8 bg-card/50 border-2 border-primary/30 glow-green animate-float-up">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-trispace text-base md:text-xl font-bold mb-4 md:mb-6 text-primary uppercase tracking-wide">
                  Scan Results
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs md:text-sm text-muted mb-1">Token Name</p>
                    <p className="text-sm md:text-base font-semibold text-foreground">Sample Token (SMPL)</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted mb-1">Chain</p>
                    <p className="text-sm md:text-base font-semibold text-foreground">Ethereum</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted mb-1">Contract Address</p>
                    <p className="text-xs md:text-sm font-mono text-primary break-all">0x1234...ABCD</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-trispace text-base md:text-xl font-bold mb-4 md:mb-6 text-primary uppercase tracking-wide">
                  Risk Assessment
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-xs md:text-sm text-muted">Risk Score</p>
                      <p className="text-xs md:text-sm font-semibold text-primary">24/100</p>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "24%" }} />
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/50">
                      <p className="font-trispace text-xs md:text-sm font-bold text-primary uppercase tracking-wide">
                        ✓ Likely Safe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
