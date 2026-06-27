"use client";

import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Rocket,
  BarChart3,
  CheckCircle2,
  Activity,
  Zap,
} from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { TiltCard } from "@/components/ui/TiltCard";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Floating Card Data ─────────────────────────────────────────────────────────
const floatingCards = [
  { icon: Users, text: "500+ Active Users", position: "top-2 -right-6", delay: 0 },
  { icon: TrendingUp, text: "Revenue +42%", position: "top-28 -right-10", delay: 0.15 },
  { icon: Rocket, text: "New Project Created", position: "-bottom-2 -right-4", delay: 0.3 },
  { icon: Zap, text: "AI Analytics", position: "bottom-20 -left-8", delay: 0.45 },
  { icon: CheckCircle2, text: "Deployment Successful", position: "top-12 -left-6", delay: 0.6 },
];

// ─── Service Badges ─────────────────────────────────────────────────────────────
const serviceBadges = [
  { label: "School ERP", icon: "🎓" },
  { label: "Restaurant POS", icon: "🍽️" },
  { label: "E-Commerce", icon: "🛒" },
  { label: "Custom SaaS", icon: "⚡" },
  { label: "Websites", icon: "🌐" },
];

// ─── Hero ───────────────────────────────────────────────────────────────────────
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const mouse = useMousePosition(sectionRef as React.RefObject<HTMLElement>);

  // ─── GSAP Cinematic Entrance ────────────────────────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Background gradient blobs
      tl.fromTo(
        ".hero-blob",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "power2.out" }
      );

      // Headline lines
      tl.fromTo(
        ".hero-line",
        { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // Description + Buttons
      tl.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
        "-=0.4"
      );

      // Dashboard scales in
      tl.fromTo(
        ".hero-dashboard",
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );

      // Floating cards slide in
      tl.fromTo(
        ".hero-float",
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
        "-=0.5"
      );

      // Enable WebGL after entrance
      tl.add(() => setSceneReady(true), "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ─── GSAP ScrollTrigger — Parallax ─────────────────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-left", {
        y: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1.5,
        },
      });

      gsap.to(".hero-dashboard", {
        y: 60,
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".hero-float", {
        y: (i) => 20 + i * 12,
        opacity: 0.3,
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* ─── Background — Soft Apple-style gradient blobs ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-blob absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="hero-blob absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-sky-100/35 rounded-full blur-[100px]" />
        <div className="hero-blob absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-[80px]" />
      </div>

      {/* ─── Subtle WebGL ambient layer ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {sceneReady && (
          <Suspense fallback={null}>
            <HeroScene mouseX={mouse.normalizedX} mouseY={mouse.normalizedY} className="w-full h-full" />
          </Suspense>
        )}
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 section-padding pt-32 pb-16 md:pt-36 md:pb-24 w-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">

            {/* ─── LEFT — Typography + CTAs ─── */}
            <div className="hero-left max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[0.95] text-[#0F172A]">
                <span className="hero-line block">Build software</span>
                <span className="hero-line block">that moves</span>
                <span className="hero-line block text-[#2563EB]">business forward.</span>
              </h1>

              <p className="hero-fade mt-6 text-lg text-[#64748B] leading-relaxed max-w-md">
                We engineer custom SaaS platforms, ERP systems, and digital products trusted by businesses across industries.
              </p>

              {/* Buttons */}
              <div className="hero-fade mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-4 text-[15px] font-semibold text-white rounded-full shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #2563EB, #0EA5E9)" }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-7 py-4 text-[15px] font-semibold text-[#0F172A] bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Our Work
                </motion.a>
              </div>

              {/* Service Badges */}
              <div className="hero-fade mt-10">
                <p className="text-xs font-medium text-[#64748B] uppercase tracking-wider mb-3">
                  What we build
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className="hero-fade inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200/80 rounded-lg hover:border-blue-200 hover:text-blue-600 transition-colors duration-200 cursor-default"
                    >
                      <span>{badge.icon}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── RIGHT — Premium SaaS Dashboard ─── */}
            <div className="hero-dashboard relative hidden lg:block" style={{ perspective: "1200px" }}>
              <TiltCard
                className="p-7"
                glowColor="rgba(37, 99, 235, 0.08)"
                maxTilt={5}
                scale={1.01}
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] flex items-center justify-center shadow-lg shadow-blue-600/20">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">Revenue Analytics</h3>
                      <p className="text-[11px] text-[#64748B]">Real-time business overview</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-emerald-700">Live</span>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Active Users", value: "1,247", change: "+24%", icon: Users },
                    { label: "Revenue", value: "₹8.4L", change: "+42%", icon: TrendingUp },
                    { label: "Growth", value: "67%", change: "+12%", icon: Activity },
                    { label: "Projects", value: "32", change: "+5", icon: Rocket },
                  ].map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                      <m.icon className="w-3.5 h-3.5 text-[#2563EB] mb-1.5" />
                      <p className="text-[10px] text-[#64748B]">{m.label}</p>
                      <p className="text-lg font-bold text-[#0F172A] leading-tight">{m.value}</p>
                      <span className="text-[10px] font-semibold text-emerald-600">{m.change}</span>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-32 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 flex items-end gap-[4px] p-4 pt-8 mb-5">
                  {[28, 45, 35, 65, 42, 78, 55, 82, 48, 90, 62, 85, 70, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1.4 + i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#2563EB] to-[#0EA5E9] opacity-75"
                    />
                  ))}
                </div>

                {/* Activity Timeline */}
                <div className="space-y-2.5">
                  {[
                    { text: "New user registered", time: "2m ago", dot: "bg-blue-500" },
                    { text: "Payment received ₹12,500", time: "5m ago", dot: "bg-emerald-500" },
                    { text: "Project deployed to production", time: "12m ago", dot: "bg-violet-500" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50/60">
                      <div className={`w-2 h-2 rounded-full ${item.dot} flex-shrink-0`} />
                      <p className="text-[11px] text-[#0F172A] font-medium flex-1">{item.text}</p>
                      <span className="text-[10px] text-[#64748B]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>

              {/* ─── Floating Cards ─── */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.text}
                  className={`hero-float absolute ${card.position}`}
                  animate={{
                    y: [0, i % 2 === 0 ? -8 : 8, 0],
                    rotate: [0, i % 2 === 0 ? 1.5 : -1.5, 0],
                  }}
                  transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl px-4 py-2.5 border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                      <card.icon className="w-3.5 h-3.5 text-[#2563EB]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0F172A] whitespace-nowrap">{card.text}</span>
                  </div>
                </motion.div>
              ))}

              {/* Ambient glow behind dashboard */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/25 rounded-full blur-[80px] -z-10" />
            </div>

            {/* ─── MOBILE Dashboard ─── */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 border border-slate-100 shadow-xl"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A]">Revenue Analytics</h3>
                    <p className="text-[10px] text-[#64748B]">Live dashboard</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: "Active Users", value: "1,247", change: "+24%" },
                    { label: "Revenue", value: "₹8.4L", change: "+42%" },
                    { label: "Growth", value: "67%", change: "+12%" },
                    { label: "Projects", value: "32", change: "+5" },
                  ].map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-[10px] text-[#64748B]">{m.label}</p>
                      <p className="text-base font-bold text-[#0F172A]">{m.value}</p>
                      <span className="text-[10px] font-semibold text-emerald-600">{m.change}</span>
                    </div>
                  ))}
                </div>
                {/* Mobile floating badges */}
                <div className="mt-4 flex gap-2">
                  {floatingCards.slice(0, 3).map((card) => (
                    <div key={card.text} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">
                      <card.icon className="w-3 h-3 text-[#2563EB]" />
                      <span className="text-[9px] font-medium text-[#0F172A]">{card.text}</span>
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
