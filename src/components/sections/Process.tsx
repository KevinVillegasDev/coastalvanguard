"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Route, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Audit",
    description:
      "We start with a deep dive into your current digital presence. Website performance, SEO gaps, competitor landscape — we map it all so we know exactly where the opportunities are.",
  },
  {
    icon: Route,
    title: "Strategy",
    description:
      "Based on what we find, we build a clear plan with scope, timeline, and pricing. No guesswork, no surprises. You approve everything before we start.",
  },
  {
    icon: Rocket,
    title: "Build & Launch",
    description:
      "We design, develop, and deploy. You see progress along the way — not a big reveal six months later. Most projects launch in weeks, not months.",
  },
  {
    icon: TrendingUp,
    title: "Grow & Optimize",
    description:
      "We don't disappear after launch. We monitor, optimize, and scale what's working. Monthly reporting keeps you in the loop on what's driving results.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-abyss">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-mist font-medium tracking-[0.2em] uppercase text-xs">
                How It Works
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-white">
              Simple Process.
              <br />
              <span className="text-white">Serious Results.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 flex items-end"
          >
            <p className="text-fog/70 text-lg leading-relaxed">
              Every engagement follows the same proven framework. You&apos;ll know
              exactly what&apos;s happening, what it costs, and when it launches —
              before we start.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl glass glow-border overflow-hidden"
            >
              {/* Large step number */}
              <span className="absolute top-4 right-4 font-display text-6xl font-bold text-white/[0.04] leading-none select-none">
                0{index + 1}
              </span>

              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-white/10 text-white group-hover:bg-white/15">
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-fog/60 text-sm leading-relaxed group-hover:text-fog/80 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
