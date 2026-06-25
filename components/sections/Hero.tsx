"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GradientOrb, FloatingParticles } from "@/components/ui/GradientOrb";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const trustedLogos = [
  "Schools", "Restaurants", "Hotels", "Retail", "Healthcare", "Startups"
];

const heroMetrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <GradientOrb
          className="top-20 -left-40"
          size={600}
          delay={0.2}
        />
        <GradientOrb
          className="top-40 -right-40"
          size={500}
          delay={0.4}
        />
        <GradientOrb
          className="bottom-20 left-1/3"
          size={400}
          delay={0.6}
        />
        <FloatingParticles />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 section-padding pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span>Premium SaaS Agency</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] text-balance"
              >
                Building Modern{" "}
                <span className="gradient-text-animated">Software</span>{" "}
                That Powers{" "}
                <span className="relative">
                  Businesses
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <motion.path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="url(#underline-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl text-balance"
              >
                Custom SaaS applications, ERP systems, POS platforms, eCommerce
                solutions, and business websites engineered for growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <MagneticButton variant="primary" size="lg" href="#contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton variant="outline" size="lg" href="#projects">
                  <Play className="w-5 h-5" />
                  View Our Work
                </MagneticButton>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-10 pt-8 border-t border-slate-200"
              >
                <p className="text-sm text-slate-400 font-medium mb-4">
                  Trusted by businesses across industries
                </p>
                <div className="flex flex-wrap gap-3">
                  {trustedLogos.map((logo, i) => (
                    <motion.span
                      key={logo}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 text-xs font-medium border border-slate-200/60"
                    >
                      {logo}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative perspective-1000">
                {/* Main Dashboard Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-card-strong rounded-2xl p-6 shadow-2xl shadow-indigo-900/5 border border-white/60"
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Dashboard</h3>
                        <p className="text-xs text-slate-400">Real-time analytics</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-slate-400">Live</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {heroMetrics.map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <div className="text-2xl font-bold text-slate-900">
                          <AnimatedCounter
                            end={metric.value}
                            suffix={metric.suffix}
                          />
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{metric.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100/50 flex items-end gap-1 p-4">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500 to-violet-400 opacity-80"
                        />
                      )
                    )}
                  </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 glass-card-strong rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Project Live</p>
                      <p className="text-xs text-slate-400">Deployed successfully</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 glass-card-strong rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">New Client</p>
                      <p className="text-xs text-slate-400">Just signed up</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
