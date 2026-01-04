"use client";

import { motion } from "framer-motion";
import {
  Target,
  Zap,
  BarChart3,
  Megaphone,
  Users,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Marketing Strategy",
    description:
      "Data-driven strategies tailored to your business goals. We identify your ideal customers and craft campaigns that convert.",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Streamline your workflows with intelligent automation. From email sequences to lead nurturing, we build systems that scale.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Turn data into actionable insights. Our analytics solutions help you understand what's working and optimize for growth.",
  },
  {
    icon: Megaphone,
    title: "Campaign Management",
    description:
      "End-to-end campaign execution across all channels. We manage, monitor, and optimize for maximum ROI.",
  },
  {
    icon: Users,
    title: "CRM Integration",
    description:
      "Connect your tools and unify your customer data. Seamless integrations that power personalized experiences.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Unique challenges require unique solutions. We build custom tools and workflows designed for your specific needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-alt" />

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
                Our Expertise
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-white">
              Services That
              <br />
              <span className="text-white">Drive Growth</span>
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
              From strategy to execution, we provide comprehensive marketing and
              automation solutions that help your business thrive. Each service
              is tailored to your unique needs.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl glass glow-border overflow-hidden ${
                index === 0 || index === 3 ? "lg:row-span-1" : ""
              }`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-white/10 text-white group-hover:bg-white/15">
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3 text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-fog/60 leading-relaxed group-hover:text-fog/80 transition-colors">
                  {service.description}
                </p>

                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-bl from-white/10 to-transparent"
                  style={{ borderRadius: "0 1rem 0 0" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
