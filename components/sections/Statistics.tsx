"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Layers, Building2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    icon: Briefcase,
    value: 25,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered across industries",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Users,
    value: 18,
    suffix: "+",
    label: "Clients Served",
    description: "Trusted by businesses worldwide",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: Layers,
    value: 5,
    suffix: "+",
    label: "Software Solutions",
    description: "Ready-to-deploy SaaS products",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Building2,
    value: 40,
    suffix: "+",
    label: "Businesses Supported",
    description: "Empowered with digital solutions",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
];

export function Statistics() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50 to-violet-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card-strong rounded-2xl p-6 md:p-8 text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-7 h-7 text-slate-700" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-semibold text-slate-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
