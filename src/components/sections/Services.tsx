"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Search,
  MapPin,
  Megaphone,
  Zap,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  services: string[];
}

const categories: ServiceCategory[] = [
  {
    icon: Globe,
    title: "Web Design & Development",
    services: [
      "Custom Websites",
      "Landing Pages",
      "E-Commerce Stores",
      "Website Redesigns",
      "Speed & Performance Optimization",
      "Hosting & Maintenance",
    ],
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    services: [
      "Local SEO",
      "Technical SEO Audits",
      "Keyword Strategy",
      "Content Optimization",
      "Link Building",
      "Monthly SEO Reporting",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    services: [
      "GBP Setup & Verification",
      "Profile Optimization",
      "Review Management",
      "Post Scheduling",
      "Local Pack Ranking",
      "Multi-Location Management",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    services: [
      "Google Search Ads",
      "Google Display & Retargeting",
      "Meta (Facebook & Instagram) Ads",
      "YouTube Advertising",
      "Ad Creative & Copywriting",
      "Campaign Optimization & Reporting",
    ],
  },
  {
    icon: Zap,
    title: "Automation & CRM",
    services: [
      "CRM Setup & Integration",
      "Email Automation Sequences",
      "Lead Nurturing Workflows",
      "Appointment Scheduling",
      "Chatbot Implementation",
      "Custom API Integrations",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    services: [
      "Dashboard Setup (GA4, Looker Studio)",
      "Conversion Tracking",
      "Attribution Modeling",
      "Monthly Performance Reports",
      "Competitor Analysis",
      "ROI Measurement",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-deep">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
                What We Do
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-white">
              Everything Your
              <br />
              <span className="text-white">Business Needs.</span>
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
              Stop juggling five different vendors. We handle the full picture —
              strategy to execution — so you get a single partner instead of a
              patchwork of agencies that don&apos;t talk to each other.
            </p>
          </motion.div>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-8 rounded-2xl glass glow-border overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white/10 text-white group-hover:bg-white/15">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Service List */}
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-fog/60 text-sm group-hover:text-fog/80 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-fog/50 text-lg mb-6">
            Not sure what you need? That&apos;s fine — we&apos;ll figure it out together.
          </p>
          <motion.button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-white/30 text-white hover:bg-white/5 font-medium uppercase tracking-wider text-sm rounded-sm transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Talk to Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
