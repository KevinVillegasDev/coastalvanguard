"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "glass-card p-6 relative overflow-hidden group",
        hover && "cursor-pointer",
        className
      )}
    >
      {/* Glow border effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue opacity-20" />
        <div className="absolute inset-[1px] rounded-xl bg-navy-800" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
