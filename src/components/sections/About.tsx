"use client";

import { motion } from "framer-motion";
import { Compass, TrendingUp, Shield, Anchor } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Strategic Navigation",
    description: "We chart the course through complex digital landscapes with precision.",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description: "Every strategy is designed with measurable outcomes in mind.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Your success is our success. We're invested in your growth.",
  },
  {
    icon: Anchor,
    title: "Steady Foundation",
    description: "Building lasting systems that anchor your business for growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-abyss" />
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[150px]" />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

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
              <span className="text-teal font-medium tracking-[0.2em] uppercase text-xs">
                About Us
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-teal/50 to-transparent" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Pioneering the
              <br />
              <span className="text-gradient-warm">Digital Frontier</span>
            </h2>

            {/* Large decorative number */}
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
                At Coastal Vanguard, we believe that great marketing shouldn&apos;t be
                complicated. We combine cutting-edge technology with human creativity
                to build solutions that actually work.
              </p>
              <p className="text-fog/60 text-lg leading-relaxed">
                Our team of strategists, developers, and automation experts work
                together to create seamless experiences that turn prospects into
                loyal customers. Whether you&apos;re a startup looking to scale or an
                established business seeking optimization, we&apos;re here to help you
                navigate the digital landscape.
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
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    index % 2 === 0
                      ? "bg-amber/10 text-amber group-hover:bg-amber/20"
                      : "bg-teal/10 text-teal group-hover:bg-teal/20"
                  }`}>
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
              ].map((stat, index) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className={`font-display text-2xl sm:text-3xl font-bold mb-1 ${
                    index % 2 === 0 ? "text-gradient-warm" : "text-gradient-cool"
                  }`}>
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
