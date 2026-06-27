"use client";

import { useEffect, useRef, useState } from "react";
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
  Bell,
  Calendar,
} from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Animated Counter Component ─────────────────────────────────────────────────
function AnimCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: end,
      duration: 2,
      delay: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
      },
    });
  }, [end, suffix, prefix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

// ─── Service Badges ─────────────────────────────────────────────────────────────
const serviceBadges = [
  { label: "School ERP", icon: "🎓" },
  { label: "Restaurant POS", icon: "🍽️" },
  { label: "E-Commerce", icon: "🛒" },
  { label: "Custom SaaS", icon: "⚡" },
  { label: "Websites", icon: "🌐" },
];

// ─── Floating Cards ─────────────────────────────────────────────────────────────
const floatingCards = [
  { icon: TrendingUp, text: "Revenue +42%", pos: "top-0 -right-4 lg:-right-8" },
  { icon: Users, text: "1,247 Active Users", pos: "top-32 -right-6 lg:-right-12" },
  { icon: Rocket, text: "New Project Created", pos: "-bottom-2 right-4 lg:right-0" },
  { icon: Bell, text: "3 Notifications", pos: "bottom-28 -left-4 lg:-left-8" },
  { icon: Calendar, text: "Meeting at 3 PM", pos: "top-16 -left-4 lg:-left-10" },
];

// ─── Hero ───────────────────────────────────────────────────────────────────────
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(sectionRef as React.RefObject<HTMLElement>);

  // ─── GSAP Master Timeline — Cinematic Entrance ────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(sectionRef.current.querySelectorAll(".gsap-reveal"), { opacity: 1, y: 0, filter: "none" });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 0% — Background gradients appear
      tl.fromTo(
        ".hero-gradient",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.4, stagger: 0.2 },
        0
      );

      // 15% — Headline lines reveal with blur
      tl.fromTo(
        ".hero-headline",
        { opacity: 0, y: 80, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12 },
        0.4
      );

      // Description
      tl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 30, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
        1.0
      );

      // Buttons
      tl.fromTo(
        ".hero-btn",
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 },
        1.2
      );

      // Badges
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 12, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.04, ease: "back.out(2)" },
        1.4
      );

      // 35% — Dashboard builds itself
      tl.fromTo(
        ".hero-dashboard-shell",
        { opacity: 0, scale: 0.92, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1 },
        0.8
      );

      // Dashboard internal pieces assemble
      tl.fromTo(
        ".dash-metric",
        { opacity: 0, y: 30, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.4)" },
        1.4
      );

      // Chart bars grow
      tl.fromTo(
        ".dash-bar",
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, stagger: 0.03, ease: "power2.out" },
        1.8
      );

      // Activity items
      tl.fromTo(
        ".dash-activity",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 },
        2.2
      );

      // 55% — Floating cards fly in from depth
      tl.fromTo(
        ".hero-float",
        { opacity: 0, scale: 0.7, z: -100, rotateX: 15, rotateY: -10 },
        {
          opacity: 1,
          scale: 1,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: { each: 0.12, from: "random" },
          ease: "power3.out",
        },
        1.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ─── GSAP ScrollTrigger — Scroll Story ────────────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Hero left content fades up
      gsap.to(".hero-left", {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "55% top",
          scrub: 1.5,
        },
      });

      // Dashboard moves forward (scale up slightly)
      gsap.to(".hero-dashboard-shell", {
        y: 50,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "70% top",
          scrub: 2,
        },
      });

      // Floating cards spread outward
      gsap.to(".hero-float", {
        y: (i) => 25 + i * 15,
        x: (i) => (i % 2 === 0 ? 30 : -30),
        opacity: 0.2,
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "25% top",
          end: "85% top",
          scrub: 1.5,
        },
      });

      // Background gradients shift
      gsap.to(".hero-gradient", {
        y: -40,
        scale: 1.1,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ─── Mouse-driven 3D tilt for dashboard ───────────────────────────────────
  useEffect(() => {
    if (!dashboardRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = dashboardRef.current;
    let raf: number;

    const update = () => {
      const rotateY = mouse.normalizedX * 8;
      const rotateX = -mouse.normalizedY * 5;
      el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      raf = requestAnimationFrame(update);
    };

    // Smooth lerp via CSS transition
    el.style.transition = "transform 0.15s ease-out";
    const interval = setInterval(() => {
      const rotateY = mouse.normalizedX * 8;
      const rotateX = -mouse.normalizedY * 5;
      el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, 16);

    return () => clearInterval(interval);
  }, [mouse.normalizedX, mouse.normalizedY]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* ─── Background — Soft animated gradient blobs ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-gradient absolute -top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#DBEAFE]/40 rounded-full blur-[140px]" />
        <div className="hero-gradient absolute -bottom-[20%] left-[-15%] w-[700px] h-[700px] bg-[#E0F2FE]/35 rounded-full blur-[120px]" />
        <div className="hero-gradient absolute top-[25%] left-[35%] w-[500px] h-[500px] bg-[#F8FAFC] rounded-full blur-[100px]" />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 section-padding pt-32 pb-16 md:pt-36 md:pb-20 w-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-14 items-center">

            {/* ═══ LEFT — Typography + CTAs ═══ */}
            <div className="hero-left max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[0.95] text-[#0F172A]">
                <span className="hero-headline block">Build software</span>
                <span className="hero-headline block">that moves</span>
                <span className="hero-headline block text-[#2563EB]">business forward.</span>
              </h1>

              <p className="hero-desc mt-6 text-lg text-[#64748B] leading-relaxed max-w-md">
                We engineer custom SaaS platforms, ERP systems, and digital products trusted by growing businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="#contact"
                  className="hero-btn group inline-flex items-center gap-2.5 px-7 py-4 text-[15px] font-semibold text-white rounded-full shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)] transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #2563EB, #0EA5E9)" }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="hero-btn inline-flex items-center gap-2.5 px-7 py-4 text-[15px] font-semibold text-[#0F172A] bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Our Work
                </motion.a>
              </div>

              <div className="mt-10">
                <p className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider mb-3">
                  What we build
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className="hero-badge inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200/80 rounded-lg hover:border-blue-200 hover:text-[#2563EB] transition-colors duration-200 cursor-default"
                    >
                      <span>{badge.icon}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ═══ RIGHT — Living SaaS Dashboard ═══ */}
            <div className="hidden lg:block relative" style={{ perspective: "1200px" }}>
              <div
                ref={dashboardRef}
                className="hero-dashboard-shell relative rounded-[32px] bg-white/75 backdrop-blur-2xl border border-white/80 p-7 shadow-[0_40px_100px_rgba(37,99,235,0.12),0_8px_32px_rgba(0,0,0,0.04)]"
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] flex items-center justify-center shadow-lg shadow-blue-600/20">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">Revenue Analytics</h3>
                      <p className="text-[11px] text-[#64748B]">Real-time business metrics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-emerald-700">Live</span>
                  </div>
                </div>

                {/* Metric Cards — animate numbers */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Active Users", value: 1247, suffix: "", icon: Users, color: "text-blue-600" },
                    { label: "Revenue", value: 84, prefix: "₹", suffix: "K", icon: TrendingUp, color: "text-emerald-600" },
                    { label: "Growth", value: 67, suffix: "%", icon: Activity, color: "text-violet-600" },
                    { label: "Projects", value: 32, suffix: "", icon: Rocket, color: "text-amber-600" },
                  ].map((m, i) => (
                    <div key={m.label} className="dash-metric p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm">
                      <m.icon className={`w-4 h-4 ${m.color} mb-2`} />
                      <p className="text-[10px] text-[#64748B] mb-0.5">{m.label}</p>
                      <p className="text-xl font-bold text-[#0F172A] leading-tight">
                        <AnimCounter end={m.value} suffix={m.suffix} prefix={m.prefix || ""} />
                      </p>
                    </div>
                  ))}
                </div>

                {/* Animated Chart */}
                <div className="h-28 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-100 flex items-end gap-[4px] p-4 pt-8 mb-5">
                  {[25, 42, 35, 60, 38, 72, 50, 80, 45, 88, 55, 78, 65, 92, 70, 85].map((h, i) => (
                    <div
                      key={i}
                      className="dash-bar flex-1 rounded-t bg-gradient-to-t from-[#2563EB] to-[#0EA5E9] origin-bottom"
                      style={{ height: `${h}%`, transform: "scaleY(0)" }}
                    />
                  ))}
                </div>

                {/* Activity Feed */}
                <div className="space-y-2">
                  {[
                    { text: "New user registered — Rahul Sharma", time: "2m ago", dot: "bg-blue-500" },
                    { text: "Payment received ₹12,500", time: "5m ago", dot: "bg-emerald-500" },
                    { text: "Deployed: School ERP v2.4", time: "12m ago", dot: "bg-violet-500" },
                  ].map((item) => (
                    <div key={item.text} className="dash-activity flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-slate-50/80 border border-slate-100/60">
                      <div className={`w-2 h-2 rounded-full ${item.dot} flex-shrink-0 animate-pulse`} />
                      <p className="text-[11px] text-[#0F172A] font-medium flex-1">{item.text}</p>
                      <span className="text-[10px] text-[#94A3B8]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ─── Floating Cards ─── */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.text}
                  className={`hero-float absolute ${card.pos} z-20`}
                  animate={{
                    y: [0, i % 2 === 0 ? -10 : 8, 0],
                    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                  }}
                  transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl px-4 py-3 border border-white/70 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <span className="text-[12px] font-semibold text-[#0F172A] whitespace-nowrap">{card.text}</span>
                  </div>
                </motion.div>
              ))}

              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-blue-100/20 rounded-full blur-[80px] -z-10" />
            </div>

            {/* ═══ MOBILE Dashboard ═══ */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 border border-slate-100 shadow-[0_20px_60px_rgba(37,99,235,0.08)]"
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
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {[
                    { label: "Active Users", value: "1,247", change: "+24%" },
                    { label: "Revenue", value: "₹84K", change: "+42%" },
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
                <div className="flex flex-wrap gap-2">
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
