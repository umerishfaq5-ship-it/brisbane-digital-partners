import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Zap } from "lucide-react";

export default function RoiSpeedSlider() {
  const [visitors, setVisitors] = useState<number>(10000);
  const [aov, setAov] = useState<number>(150);

  // Assumptions
  const baseConversionRate = 0.02; // 2%
  // 1 second delay reduces conversions by 7%. Improving by 2 seconds increases by ~14%
  const conversionIncreaseFactor = 0.14; 

  const baseRevenue = visitors * baseConversionRate * aov;
  const increasedRevenue = visitors * (baseConversionRate * (1 + conversionIncreaseFactor)) * aov;
  const revenueDifference = increasedRevenue - baseRevenue;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-AU').format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h2 className="font-heading font-bold text-2xl text-foreground">Speed = Revenue Calculator</h2>
          <p className="text-sm text-muted-foreground mt-1">See how a 2-second speed improvement impacts your bottom line.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-end mb-4">
              <label htmlFor="visitors-slider" className="font-semibold text-foreground text-sm">Monthly Visitors</label>
              <span className="font-heading font-bold text-accent text-lg">{formatNumber(visitors)}</span>
            </div>
            <input
              id="visitors-slider"
              type="range"
              min="1000"
              max="200000"
              step="1000"
              value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>

          <div>
            <div className="flex justify-between items-end mb-4">
              <label htmlFor="aov-slider" className="font-semibold text-foreground text-sm">Average Order Value (AOV)</label>
              <span className="font-heading font-bold text-accent text-lg">{formatCurrency(aov)}</span>
            </div>
            <input
              id="aov-slider"
              type="range"
              min="50"
              max="2000"
              step="10"
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>

          <div className="p-4 rounded-xl bg-muted/50 border border-border text-sm text-muted-foreground leading-relaxed">
            <Zap className="w-4 h-4 inline-block mr-2 text-yellow-500" />
            <span className="font-medium text-foreground">Industry standard:</span> A 1-second delay reduces conversions by 7%. This calculator projects a conservative 14% conversion lift from a 2-second technical speed optimisation.
          </div>
        </div>

        {/* Results */}
        <div className="surface-teal rounded-2xl p-8 text-center relative overflow-hidden h-full flex flex-col justify-center">
          <div className="absolute inset-0 pattern-lines opacity-10" />
          <div className="relative z-10">
            <h3 className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider mb-2">Projected Monthly Lift</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="font-heading font-black text-5xl md:text-6xl text-primary-foreground">
                +{formatCurrency(revenueDifference).replace('A$', '$')}
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-4">
              Extra revenue left on the table every month due to slow load times.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
