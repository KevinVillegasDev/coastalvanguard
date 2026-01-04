"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ParticleCanvas from "@/components/effects/ParticleCanvas";

export default function Hero() {
  const handleScrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-abyss/80 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left column - Main content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-amber to-transparent" />
              <span className="text-amber font-medium tracking-[0.2em] uppercase text-xs">
                Marketing & Automation
              </span>
            </motion.div>

            {/* Headline - Editorial style with mixed sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display mb-8"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Navigate the
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gradient-mixed">Digital Waters</span>
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-mist mt-4 tracking-tight">
                with precision & purpose
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-fog/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            >
              We architect intelligent marketing systems and automation frameworks
              that transform how businesses connect, convert, and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.button
                onClick={handleScrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber to-amber-glow text-abyss font-bold uppercase tracking-wider text-sm rounded-sm overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.button>

              <motion.button
                onClick={handleScrollToServices}
                className="group px-8 py-4 border border-fog/20 text-fog hover:text-white hover:border-teal font-medium uppercase tracking-wider text-sm rounded-sm transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right column - Stats/Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Sonar-like decorative element */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Concentric rings */}
                {[1, 2, 3].map((ring) => (
                  <div
                    key={ring}
                    className="absolute inset-0 rounded-full border border-teal/20"
                    style={{
                      transform: `scale(${0.3 + ring * 0.25})`,
                      animation: `sonar ${3 + ring}s ease-out infinite`,
                      animationDelay: `${ring * 0.5}s`,
                    }}
                  />
                ))}

                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass rounded-2xl p-8 backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { value: "150+", label: "Projects" },
                        { value: "98%", label: "Success Rate" },
                        { value: "5x", label: "Avg. ROI" },
                        { value: "24/7", label: "Support" },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-2xl font-display font-bold text-gradient-warm">
                            {stat.value}
                          </div>
                          <div className="text-xs text-mist uppercase tracking-wider mt-1">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={handleScrollToServices}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-mist hover:text-amber transition-colors duration-200 flex flex-col items-center gap-2"
          aria-label="Scroll to services"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Discover</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}
