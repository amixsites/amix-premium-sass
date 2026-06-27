"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, CheckCircle2, BarChart3, Calendar, Shield } from "lucide-react";

const serviceBadges = [
  { label: "School ERP", icon: "🎓" },
  { label: "Restaurant POS", icon: "🍽️" },
  { label: "E-Commerce", icon: "🛒" },
  { label: "Custom SaaS", icon: "⚡" },
  { label: "Business Websites", icon: "🌐" },
];

const dashboardCards = [
  { icon: BarChart3, label: "Analytics", value: "↑ 24%", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Users, label: "Users", value: "1,247", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Calendar, label: "Bookings", value: "89", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Shield, label: "Uptime", value: "99.9%", color: "text-amber-600", bg: "bg-amber-50" },
];

// Staggered entrance animation config
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const dashboardRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Background ─── Ambient Light ─── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ scale: bgScale }}>
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.08),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_center,rgba(99,102,241,0.04),transparent_50%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-violet-200/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] bg-indigo-100/20 rounded-full blur-[80px]"
        />
      </motion.div>

      {/* ─── Content ─── */}
      <div className="relative z-10 section-padding pt-32 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            {/* ─── Left: Content ─── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ opacity: textOpacity, y: textY }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 border border-indigo-100/60 text-indigo-700 text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Premium Software Engineering</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-slate-900 tracking-tight leading-[1.08]"
              >
                We build software{" "}
                <br className="hidden sm:block" />
                that powers{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                    businesses
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full origin-left"
                  />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg"
              >
                Custom SaaS applications, ERP systems, POS platforms, and business websites — engineered for scale.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-slate-700 bg-white/70 backdrop-blur-sm border border-slate-200/80 rounded-2xl hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Work
                </motion.a>
              </motion.div>

              {/* Service Badges */}
              <motion.div variants={itemVariants} className="mt-10">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  What we build
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceBadges.map((badge, i) => (
                    <motion.span
                      key={badge.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.06, duration: 0.4 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white/70 border border-slate-200/60 rounded-lg backdrop-blur-sm hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <span>{badge.icon}</span>
                      {badge.label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ─── Right: Interactive Dashboard ─── */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: dashboardY, rotateZ: dashboardRotate }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Dashboard */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.04)]"
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-600/20">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">Business Dashboard</h3>
                        <p className="text-[11px] text-slate-400">Real-time overview</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-medium text-emerald-700">Live</span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {dashboardCards.map((card, i) => (
                      <motion.div
                        key={card.label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        className={`p-3.5 rounded-2xl ${card.bg} border border-slate-100/50`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <card.icon className={`w-3.5 h-3.5 ${card.color}`} />
                          <span className="text-[10px] font-medium text-slate-500">{card.label}</span>
                        </div>
                        <p className="text-lg font-bold text-slate-900">{card.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="h-28 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-100/60 flex items-end gap-[3px] p-4 pt-6">
                    {[35, 55, 40, 72, 50, 85, 62, 78, 55, 90, 68, 82, 74, 95].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500/80 to-violet-400/60"
                        />
                      )
                    )}
                  </div>
                </motion.div>

                {/* Floating Card — Top Right */}
                <motion.div
                  animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-xl rounded-2xl p-3.5 border border-white/60 shadow-xl shadow-slate-900/5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Deployed</p>
                      <p className="text-[10px] text-slate-400">Just now</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card — Bottom Left */}
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-xl rounded-2xl p-3.5 border border-white/60 shadow-xl shadow-slate-900/5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <Users className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">+3 Clients</p>
                      <p className="text-[10px] text-slate-400">This week</p>
                    </div>
                  </div>
                </motion.div>

                {/* Ambient glow behind dashboard */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-indigo-200/30 to-violet-200/20 rounded-full blur-[60px] -z-10" />
              </div>
            </motion.div>

            {/* ─── Mobile Dashboard (simplified) ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:hidden"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/60 shadow-xl">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Dashboard</h3>
                    <p className="text-[10px] text-slate-400">Live metrics</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {dashboardCards.map((card) => (
                    <div key={card.label} className={`p-2.5 rounded-xl ${card.bg} text-center`}>
                      <card.icon className={`w-3.5 h-3.5 mx-auto ${card.color} mb-1`} />
                      <p className="text-xs font-bold text-slate-900">{card.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
