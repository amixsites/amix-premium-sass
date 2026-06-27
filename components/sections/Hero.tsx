"use client";

import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BarChart3, Users, Calendar, Shield, TrendingUp, Zap } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { TiltCard } from "@/components/ui/TiltCard";

// Lazy load WebGL scene — only on client, only when needed
const HeroScene = lazy(() => import("@/components/three/HeroScene"));

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Data ───────────────────────────────────────────────────────────────────────
const serviceBadges = [
  { label: "School ERP", icon: "🎓" },
  { label: "Restaurant POS", icon: "🍽️" },
  { label: "E-Commerce", icon: "🛒" },
  { label: "Custom SaaS", icon: "⚡" },
  { label: "Websites", icon: "🌐" },
];

const floatingCards = [
  { icon: BarChart3, label: "Analytics", value: "↑ 24%", color: "text-emerald-600", bg: "bg-emerald-50", x: "right-0 top-4", delay: 0 },
  { icon: Users, label: "Users", value: "1,247", color: "text-blue-600", bg: "bg-blue-50", x: "right-12 top-32", delay: 0.15 },
  { icon: Calendar, label: "Bookings", value: "89", color: "text-violet-600", bg: "bg-violet-50", x: "right-4 bottom-24", delay: 0.3 },
  { icon: Shield, label: "Uptime", value: "99.9%", color: "text-amber-600", bg: "bg-amber-50", x: "left-0 bottom-8", delay: 0.45 },
];

// ─── Hero Component ─────────────────────────────────────────────────────────────
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [isWebGLReady, setIsWebGLReady] = useState(false);

  const mouse = useMousePosition(sectionRef as React.RefObject<HTMLElement>);

  // ─── GSAP Cinematic Entrance Timeline ──────────────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Background gradient reveal
      tl.fromTo(
        ".hero-bg",
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
      );

      // Headline lines reveal — staggered from bottom
      tl.fromTo(
        ".hero-headline-line",
        { opacity: 0, y: 60, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.6"
      );

      // Description
      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // Buttons
      tl.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      // Service badges stagger
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, scale: 0.8, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

      // Dashboard entrance
      tl.fromTo(
        ".hero-dashboard",
        { opacity: 0, x: 80, rotateY: -10 },
        { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

      // Floating cards fly in
      tl.fromTo(
        ".hero-float-card",
        { opacity: 0, y: 40, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // WebGL scene fade in
      tl.add(() => setIsWebGLReady(true), "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ─── GSAP ScrollTrigger — Parallax on scroll ──────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Content fades out and moves up on scroll
      gsap.to(".hero-content-left", {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1.5,
        },
      });

      // Dashboard moves slower (parallax depth)
      gsap.to(".hero-dashboard", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Floating cards separate on scroll
      gsap.to(".hero-float-card", {
        y: (i) => 30 + i * 20,
        x: (i) => (i % 2 === 0 ? 20 : -20),
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "90% top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Background ─── */}
      <div className="hero-bg absolute inset-0 pointer-events-none">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_30%,rgba(99,102,241,0.08),transparent),radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(139,92,246,0.06),transparent),radial-gradient(ellipse_50%_50%_at_50%_80%,rgba(99,102,241,0.04),transparent)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Ambient orbs */}
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-indigo-200/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[30%] right-[0%] w-[500px] h-[500px] bg-violet-200/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[5%] left-[25%] w-[400px] h-[400px] bg-indigo-100/15 rounded-full blur-[80px]" />
      </div>

      {/* ─── WebGL Scene (behind content) ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {isWebGLReady && (
          <Suspense fallback={null}>
            <HeroScene
              mouseX={mouse.normalizedX}
              mouseY={mouse.normalizedY}
              className="w-full h-full"
            />
          </Suspense>
        )}
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 section-padding pt-32 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
            {/* ─── Left: Typography + CTAs ─── */}
            <div className="hero-content-left max-w-xl">
              {/* Headline with per-line reveal */}
              <div ref={headlineRef} className="perspective-1000">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.05]">
                  <span className="hero-headline-line block text-slate-900">Building</span>
                  <span className="hero-headline-line block text-slate-900">Digital Products</span>
                  <span className="hero-headline-line block">
                    <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                      That Scale
                    </span>
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="hero-description mt-6 text-lg text-slate-500 leading-relaxed max-w-md">
                We engineer custom SaaS applications, ERP systems, and business platforms that grow with your company.
              </p>

              {/* Buttons */}
              <div className="hero-buttons mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Our Work
                </motion.a>
              </div>

              {/* Service Badges */}
              <div className="mt-10">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  What we build
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className="hero-badge inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white/70 border border-slate-200/60 rounded-lg backdrop-blur-sm hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-200 cursor-default"
                    >
                      <span>{badge.icon}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── Right: Interactive Dashboard ─── */}
            <div
              ref={dashboardRef}
              className="hero-dashboard relative hidden lg:block"
              style={{ perspective: "1200px" }}
            >
              {/* Main Dashboard Card */}
              <TiltCard className="p-6" glowColor="rgba(99, 102, 241, 0.1)">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
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

                {/* Mini metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Revenue", value: "₹4.2L", change: "+12%" },
                    { label: "Orders", value: "284", change: "+8%" },
                    { label: "Active", value: "1.2K", change: "+24%" },
                  ].map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-50/80 border border-slate-100/60">
                      <p className="text-[10px] text-slate-400 mb-0.5">{m.label}</p>
                      <p className="text-base font-bold text-slate-900">{m.value}</p>
                      <span className="text-[10px] font-medium text-emerald-600">{m.change}</span>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-24 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-100/60 flex items-end gap-[3px] p-3 pt-5">
                  {[30, 50, 35, 70, 45, 80, 55, 75, 50, 88, 65, 78, 70, 92].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1.5 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500/80 to-violet-400/50"
                    />
                  ))}
                </div>
              </TiltCard>

              {/* Floating satellite cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className={`hero-float-card absolute ${card.x}`}
                  animate={{
                    y: [0, i % 2 === 0 ? -10 : 10, 0],
                    x: [0, i % 2 === 0 ? 4 : -4, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl p-3 border border-white/60 shadow-lg shadow-slate-900/5">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg ${card.bg} flex items-center justify-center`}>
                        <card.icon className={`w-3.5 h-3.5 ${card.color}`} />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-slate-900">{card.label}</p>
                        <p className="text-[10px] text-slate-400">{card.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-br from-indigo-200/25 to-violet-200/15 rounded-full blur-[60px] -z-10" />
            </div>

            {/* ─── Mobile Dashboard ─── */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/60 shadow-xl"
              >
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
                  {floatingCards.map((card) => (
                    <div key={card.label} className={`p-2.5 rounded-xl ${card.bg} text-center`}>
                      <card.icon className={`w-3.5 h-3.5 mx-auto ${card.color} mb-1`} />
                      <p className="text-[10px] font-bold text-slate-900">{card.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
