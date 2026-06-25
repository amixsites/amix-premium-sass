"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Shield,
  HeartHandshake,
  Clock,
  Code2,
  Headphones,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const reasons = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We ship production-ready software quickly without compromising quality. Most projects go live in 4-8 weeks.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description:
      "Enterprise-grade security practices with regular audits, encrypted data, and compliance-ready architecture.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    description:
      "We treat every project like our own. Transparent communication, honest timelines, and no hidden surprises.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our team is always available. From bug fixes to feature requests, we respond within hours, not days.",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "We build with the latest technologies — React, Next.js, TypeScript, Supabase — ensuring your product stays future-proof.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Headphones,
    title: "Dedicated Team",
    description:
      "A dedicated project manager and development team focused solely on your project from start to finish.",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export function WhyAmix() {
  return (
    <section id="why-amix" className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-indigo-50/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Why Choose Us"
            title="Why Businesses Trust Amix"
            description="We combine technical excellence with a genuine passion for helping businesses succeed in the digital world."
          />

          <div className="mt-16 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <GlassCard key={reason.title} delay={index * 0.1}>
                <div
                  className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center mb-4`}
                >
                  <reason.icon className={`w-6 h-6 ${reason.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
