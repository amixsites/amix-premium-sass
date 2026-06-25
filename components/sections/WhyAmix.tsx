"use client";

import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
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
    gradient: "from-indigo-500/20 to-violet-500/20",
    glowColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description:
      "Enterprise-grade security practices with regular audits, encrypted data, and compliance-ready architecture.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    gradient: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    description:
      "We treat every project like our own. Transparent communication, honest timelines, and no hidden surprises.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    gradient: "from-amber-500/20 to-orange-500/20",
    glowColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our team is always available. From bug fixes to feature requests, we respond within hours, not days.",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    gradient: "from-violet-500/20 to-purple-500/20",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "We build with the latest technologies — React, Next.js, TypeScript, Supabase — ensuring your product stays future-proof.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: Headphones,
    title: "Dedicated Team",
    description:
      "A dedicated project manager and development team focused solely on your project from start to finish.",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    gradient: "from-pink-500/20 to-rose-500/20",
    glowColor: "rgba(236, 72, 153, 0.3)",
  },
];

// ─── Mobile Parallax Card ───────────────────────────────────────────────────────
interface ParallaxCardProps {
  reason: (typeof reasons)[number];
  index: number;
  scrollProgress: ReturnType<typeof useMotionValue<number>>;
  activeIndex: number;
  totalCards: number;
}

function ParallaxCard({ reason, index, scrollProgress, activeIndex, totalCards }: ParallaxCardProps) {
  const isActive = index === activeIndex;

  // Parallax transforms based on scroll progress
  // Each card's local offset: how far it is from being the "center" card
  const cardOffset = useTransform(scrollProgress, (progress) => {
    const cardProgress = progress * (totalCards - 1);
    return cardProgress - index;
  });

  // Layer 1: Background orb — 30% speed
  const orbX = useTransform(cardOffset, [-2, 0, 2], [60, 0, -60]);
  const orbScale = useTransform(cardOffset, [-1, 0, 1], [0.8, 1, 0.8]);

  // Layer 2: Large number — 50% speed
  const numberX = useTransform(cardOffset, [-2, 0, 2], [100, 0, -100]);
  const numberRotate = useTransform(cardOffset, [-1, 0, 1], [-8, 0, 8]);

  // Layer 3: Icon — 80% speed
  const iconX = useTransform(cardOffset, [-2, 0, 2], [160, 0, -160]);

  // Card glow — 20% speed
  const glowX = useTransform(cardOffset, [-2, 0, 2], [40, 0, -40]);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[85vw] max-w-[340px] h-[400px] rounded-3xl overflow-hidden"
      style={{
        willChange: "transform",
      }}
      animate={{
        scale: isActive ? 1.04 : 0.92,
        y: isActive ? -8 : 0,
        rotateZ: isActive ? 0 : index < activeIndex ? -2 : 2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl" />

      {/* Layer 1: Background gradient orb — 30% speed */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: orbX,
          scale: orbScale,
          willChange: "transform",
        }}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-br ${reason.gradient} blur-2xl opacity-60`}
        />
      </motion.div>

      {/* Layer 2: Large number — 50% speed */}
      <motion.div
        className="absolute top-4 right-4 pointer-events-none select-none"
        style={{
          x: numberX,
          rotate: numberRotate,
          willChange: "transform",
        }}
      >
        <span className="text-[120px] font-black leading-none text-slate-900/[0.04]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Glow that follows card movement — 20% speed */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-[80px] rounded-full pointer-events-none"
        style={{
          x: glowX,
          background: `radial-gradient(ellipse, ${reason.glowColor}, transparent 70%)`,
          willChange: "transform",
        }}
      />

      {/* Layer 3: Icon — 80% speed with floating animation */}
      <motion.div
        className="relative z-10 pt-12 pl-6"
        style={{
          x: iconX,
          willChange: "transform",
        }}
      >
        <motion.div
          className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center shadow-lg`}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <reason.icon className={`w-7 h-7 ${reason.iconColor}`} />
        </motion.div>
      </motion.div>

      {/* Layer 4: Text content — normal speed (moves with card) */}
      <div className="relative z-10 px-6 pt-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {reason.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>

      {/* Active card highlight border */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 pointer-events-none"
        animate={{
          borderColor: isActive ? reason.glowColor : "transparent",
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// ─── Mobile Carousel ────────────────────────────────────────────────────────────
const AUTOPLAY_INTERVAL = 4000; // ms between auto-swipes

function MobileParallaxCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const dragStartX = useRef(0);
  const currentOffset = useRef(0);
  const cardWidth = useRef(0);
  const rafId = useRef<number>(0);
  const autoplayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Calculate card dimensions
  useEffect(() => {
    const updateDimensions = () => {
      // 85vw, max 340px
      const vwCard = Math.min(window.innerWidth * 0.85, 340);
      cardWidth.current = vwCard + 16; // card width + gap
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Snap to nearest card
  const snapToCard = useCallback((targetIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(reasons.length - 1, targetIndex));
    setActiveIndex(clampedIndex);

    const targetOffset = -clampedIndex * cardWidth.current;
    currentOffset.current = targetOffset;

    // Animate progress
    const targetProgress = clampedIndex / (reasons.length - 1);
    animate(scrollProgress, targetProgress, {
      type: "spring",
      stiffness: 300,
      damping: 35,
      mass: 0.8,
    });
  }, [scrollProgress]);

  // ─── Autoplay logic ─────────────────────────────────────────────────────────
  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearTimeout(autoplayTimer.current);
    autoplayTimer.current = setTimeout(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev >= reasons.length - 1 ? 0 : prev + 1;
        const targetOffset = -nextIndex * cardWidth.current;
        currentOffset.current = targetOffset;
        const targetProgress = nextIndex / (reasons.length - 1);
        animate(scrollProgress, targetProgress, {
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 1,
        });
        return nextIndex;
      });
    }, AUTOPLAY_INTERVAL);
  }, [scrollProgress]);

  // Restart autoplay whenever activeIndex changes and user isn't interacting
  useEffect(() => {
    if (!isDragging && !isAutoplayPaused) {
      startAutoplay();
    }
    return () => {
      if (autoplayTimer.current) clearTimeout(autoplayTimer.current);
    };
  }, [activeIndex, isDragging, isAutoplayPaused, startAutoplay]);

  // Pause autoplay when user touches the carousel, resume after 6s of inactivity
  const pauseAutoplay = useCallback(() => {
    setIsAutoplayPaused(true);
    if (autoplayTimer.current) clearTimeout(autoplayTimer.current);
  }, []);

  const resumeAutoplayAfterDelay = useCallback(() => {
    // Give a brief pause after interaction before resuming auto-swipe
    setTimeout(() => {
      setIsAutoplayPaused(false);
    }, 6000);
  }, []);

  // Pan handlers for touch swiping
  const handlePanStart = useCallback(() => {
    setIsDragging(true);
    pauseAutoplay();
    dragStartX.current = currentOffset.current;
  }, [pauseAutoplay]);

  const handlePan = useCallback((_: unknown, info: PanInfo) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const newOffset = dragStartX.current + info.offset.x;
      const maxOffset = 0;
      const minOffset = -(reasons.length - 1) * cardWidth.current;
      const clampedOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));

      currentOffset.current = clampedOffset;

      // Calculate progress 0-1
      const progress = Math.abs(clampedOffset) / ((reasons.length - 1) * cardWidth.current);
      scrollProgress.set(Math.max(0, Math.min(1, progress)));

      // Update active index
      const newIndex = Math.round(Math.abs(clampedOffset) / cardWidth.current);
      setActiveIndex(Math.max(0, Math.min(reasons.length - 1, newIndex)));
    });
  }, [scrollProgress]);

  const handlePanEnd = useCallback((_: unknown, info: PanInfo) => {
    setIsDragging(false);

    // Momentum-based snapping
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    let targetIndex = activeIndex;
    if (Math.abs(velocity) > 300 || Math.abs(offset) > cardWidth.current * 0.3) {
      if (velocity < 0 || offset < 0) {
        targetIndex = Math.min(reasons.length - 1, activeIndex + 1);
      } else {
        targetIndex = Math.max(0, activeIndex - 1);
      }
    }

    snapToCard(targetIndex);
    resumeAutoplayAfterDelay();
  }, [activeIndex, snapToCard, resumeAutoplayAfterDelay]);

  // Progress bar width
  const progressWidth = useTransform(
    scrollProgress,
    [0, 1],
    ["0%", "100%"]
  );

  // Dynamic indicator width (stretches during swipe)
  const indicatorScale = useTransform(
    scrollProgress,
    (val) => {
      const cardProgress = val * (reasons.length - 1);
      const distFromNearest = Math.abs(cardProgress - Math.round(cardProgress));
      return 1 + distFromNearest * 0.5; // stretches up to 1.5x between cards
    }
  );

  // Track X position for the cards container
  const trackX = useTransform(scrollProgress, [0, 1], [0, -(reasons.length - 1) * cardWidth.current]);

  return (
    <div className="mt-12 md:hidden">
      {/* Carousel container */}
      <motion.div
        ref={containerRef}
        className="relative overflow-hidden touch-pan-y"
        onPanStart={handlePanStart}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {/* Cards track */}
        <motion.div
          className="flex gap-4 px-[7.5vw]"
          style={{
            x: trackX,
            willChange: "transform",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 35,
          }}
        >
          {reasons.map((reason, index) => (
            <ParallaxCard
              key={reason.title}
              reason={reason}
              index={index}
              scrollProgress={scrollProgress}
              activeIndex={activeIndex}
              totalCards={reasons.length}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Progress indicator */}
      <div className="mt-8 px-8">
        <div className="relative h-1 bg-slate-200/60 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
            style={{
              width: progressWidth,
              scaleX: indicatorScale,
              transformOrigin: "left",
              willChange: "transform, width",
            }}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {reasons.map((_, index) => (
            <motion.button
              key={index}
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor: index === activeIndex ? "#6366f1" : "#cbd5e1",
                scale: index === activeIndex ? 1.4 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => snapToCard(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ───────────────────────────────────────────────────────────────
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

          {/* Desktop grid — unchanged */}
          <div className="mt-16 md:mt-20 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

          {/* Mobile parallax carousel */}
          <MobileParallaxCarousel />
        </div>
      </div>
    </section>
  );
}
