"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              boxShadow:
                "0 20px 40px -10px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(99, 102, 241, 0.1)",
            }
          : {}
      }
      className={cn(
        "glass-card-strong rounded-2xl p-6 md:p-8 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
