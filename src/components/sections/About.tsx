"use client";

import { motion } from "framer-motion";
import { Layers, BarChart3, Shield, Target } from "lucide-react";

const values = [
  {
    icon: Layers,
    title: "Full-Stack Digital Team",
    description:
      "Websites, SEO, ads, social, branding, automation — one team handles it all under one roof.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Every recommendation is backed by real audit data and performance metrics. No gut feelings.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "We build systems and assets you own. No vendor lock-in, no proprietary traps.",
  },
  {
    icon: Target,
    title: "Results Over Retainers",
    description:
      "We measure success by your growth, not by how long we can keep you on contract.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-abyss">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content - Asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column - Sticky headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-mist font-medium tracking-[0.2em] uppercase text-xs">
                About Us
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 text-white">
              One Team.
              <br />
              <span className="text-white">No Runaround.</span>
            </h2>

            {/* Large decorative text */}
            <div className="hidden lg:block">
              <span className="font-display text-[12rem] font-bold text-white/[0.02] leading-none select-none">
                CV
              </span>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-16">
            {/* Mission text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-fog/80 text-xl leading-relaxed mb-6">
                Coastal Vanguard was built on a simple idea: businesses
                shouldn&apos;t need five different vendors to handle their digital
                presence. One team should own the strategy, the execution, and the
                results — so nothing falls through the cracks.
              </p>
              <p className="text-fog/60 text-lg leading-relaxed">
                When you work with us, you&apos;re working directly with the people
                who build your website, run your ads, and write your copy. No
                layers of account managers. No outsourced freelancers you&apos;ve
                never met. Just a focused team that knows your business.
              </p>
            </motion.div>

            {/* Values - Stacked cards */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl glass glow-border flex items-start gap-5 hover:bg-white/[0.03] transition-colors"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-white/10 text-white group-hover:bg-white/15">
                    <value.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-white transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-fog/60 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Number indicator */}
                  <span className="absolute top-4 right-4 text-xs text-mist/30 font-mono">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/5"
            >
              {[
                { value: "150+", label: "Projects" },
                { value: "98%", label: "Satisfaction" },
                { value: "5x", label: "Avg ROI" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold mb-1 text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-mist uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
