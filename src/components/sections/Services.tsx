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
    accent: "amber",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Streamline your workflows with intelligent automation. From email sequences to lead nurturing, we build systems that scale.",
    accent: "teal",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Turn data into actionable insights. Our analytics solutions help you understand what's working and optimize for growth.",
    accent: "amber",
  },
  {
    icon: Megaphone,
    title: "Campaign Management",
    description:
      "End-to-end campaign execution across all channels. We manage, monitor, and optimize for maximum ROI.",
    accent: "teal",
  },
  {
    icon: Users,
    title: "CRM Integration",
    description:
      "Connect your tools and unify your customer data. Seamless integrations that power personalized experiences.",
    accent: "amber",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Unique challenges require unique solutions. We build custom tools and workflows designed for your specific needs.",
    accent: "teal",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-alt" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

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
              <span className="text-amber font-medium tracking-[0.2em] uppercase text-xs">
                Our Expertise
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-amber/50 to-transparent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
              Services That
              <br />
              <span className="text-gradient-cool">Drive Growth</span>
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
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  service.accent === "amber"
                    ? "bg-gradient-to-br from-amber/10 via-transparent to-transparent"
                    : "bg-gradient-to-br from-teal/10 via-transparent to-transparent"
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    service.accent === "amber"
                      ? "bg-amber/10 text-amber group-hover:bg-amber/20"
                      : "bg-teal/10 text-teal group-hover:bg-teal/20"
                  }`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-fog/60 leading-relaxed group-hover:text-fog/80 transition-colors">
                  {service.description}
                </p>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    service.accent === "amber"
                      ? "bg-gradient-to-bl from-amber/20 to-transparent"
                      : "bg-gradient-to-bl from-teal/20 to-transparent"
                  }`}
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
