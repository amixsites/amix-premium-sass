"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  UtensilsCrossed,
  CalendarDays,
  ShoppingCart,
  Globe,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "School ERP Software",
    description:
      "Complete school management system with student records, attendance tracking, exam management, fee collection, and parent portal.",
    features: [
      "Student Management",
      "Attendance Tracking",
      "Exams & Report Cards",
      "Fee Management",
      "Parent Portal",
      "Staff Management",
    ],
    gradient: "from-blue-500 to-indigo-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    featureDot: "bg-blue-400",
    accentBorder: "border-blue-100",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant POS",
    description:
      "Streamline operations with our all-in-one POS system featuring order management, kitchen display, and real-time analytics.",
    features: [
      "Order Management",
      "Kitchen Display",
      "Billing & Invoicing",
      "Inventory Tracking",
      "Sales Analytics",
      "Table Management",
    ],
    gradient: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    featureDot: "bg-orange-400",
    accentBorder: "border-orange-100",
  },
  {
    icon: CalendarDays,
    title: "Banquet Management",
    description:
      "End-to-end venue management for hotels and event spaces with booking, scheduling, and payment tracking.",
    features: [
      "Venue Booking",
      "Event Scheduling",
      "Payment Tracking",
      "Customer CRM",
      "Reports & Analytics",
      "Calendar Integration",
    ],
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    featureDot: "bg-violet-400",
    accentBorder: "border-violet-100",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Custom online stores built for conversions with product management, secure payments, and marketing automation.",
    features: [
      "Online Storefront",
      "Product Management",
      "Secure Payments",
      "Inventory Sync",
      "Marketing Tools",
      "Order Fulfillment",
    ],
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    featureDot: "bg-emerald-400",
    accentBorder: "border-emerald-100",
  },
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "High-performance corporate websites designed for lead generation, brand credibility, and SEO dominance.",
    features: [
      "Corporate Sites",
      "Lead Generation",
      "SEO Optimization",
      "Performance First",
      "Responsive Design",
      "CMS Integration",
    ],
    gradient: "from-indigo-500 to-blue-500",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    featureDot: "bg-indigo-400",
    accentBorder: "border-indigo-100",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-black/[0.06] bg-white/85 backdrop-blur-xl p-6 sm:p-8 lg:p-12 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08),0_2px_12px_-4px_rgba(0,0,0,0.04)]`}
    >
      {/* Subtle top accent line */}
      <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${service.gradient} opacity-30`} />

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.03] blur-3xl`}
        />
        <div
          className={`absolute -bottom-32 -left-32 w-56 h-56 rounded-full bg-gradient-to-tr ${service.gradient} opacity-[0.02] blur-3xl`}
        />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <div
              className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl ${service.iconBg} mb-5 lg:mb-6`}
            >
              <service.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${service.iconColor}`} />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 lg:mb-4 tracking-tight">
              {service.title}
            </h3>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
              {service.description}
            </p>

            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm shadow-lg shadow-indigo-500/10 hover:shadow-xl transition-shadow`}
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-2 lg:mt-0">
            {service.features.map((feature) => (
              <div
                key={feature}
                className={`flex items-center gap-2.5 p-3 lg:p-4 rounded-lg lg:rounded-xl bg-slate-50/80 border ${service.accentBorder}`}
              >
                <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${service.featureDot} flex-shrink-0`} />
                <span className="text-slate-700 text-xs sm:text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Index watermark */}
      <div className="absolute bottom-3 right-5 lg:bottom-8 lg:right-12 text-slate-100 text-6xl lg:text-9xl font-bold pointer-events-none select-none">
        0{index + 1}
      </div>
    </div>
  );
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isActive, setIsActive] = useState(false); // whether section is capturing scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const lastWheelTime = useRef(0);
  const touchStartY = useRef(0);

  // Determine if section is in view and should capture scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Activate when section is mostly in view
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      },
      { threshold: [0.5, 0.8] }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (newIndex: number) => {
      if (isAnimating.current) return;
      if (newIndex < 0 || newIndex >= services.length) return;
      if (newIndex === activeIndex) return;

      isAnimating.current = true;
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);

      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    },
    [activeIndex]
  );

  // Wheel: one scroll = one card, release at boundaries
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only capture if section is active
      if (!isActive) return;

      const now = Date.now();
      if (now - lastWheelTime.current < 500) {
        // During cooldown, prevent scroll only if we're mid-section
        if (activeIndex > 0 && activeIndex < services.length - 1) {
          e.preventDefault();
        }
        return;
      }
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      // Scrolling down
      if (e.deltaY > 15) {
        if (activeIndex < services.length - 1) {
          e.preventDefault();
          lastWheelTime.current = now;
          goTo(activeIndex + 1);
        }
        // At last card: do NOT prevent default — let page scroll naturally
        return;
      }

      // Scrolling up
      if (e.deltaY < -15) {
        if (activeIndex > 0) {
          e.preventDefault();
          lastWheelTime.current = now;
          goTo(activeIndex - 1);
        }
        // At first card: do NOT prevent default — let page scroll naturally
        return;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isActive, goTo]);

  // Touch: one swipe = one card, release at boundaries
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isActive) return;
      // Prevent scroll only when mid-section
      if (activeIndex > 0 && activeIndex < services.length - 1) {
        e.preventDefault();
      } else if (activeIndex === 0) {
        const delta = touchStartY.current - e.touches[0].clientY;
        if (delta > 0) e.preventDefault(); // swiping up on first card = capture
      } else if (activeIndex === services.length - 1) {
        const delta = touchStartY.current - e.touches[0].clientY;
        if (delta < 0) e.preventDefault(); // swiping down on last card = capture
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isActive) return;
      if (isAnimating.current) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && activeIndex < services.length - 1) {
          goTo(activeIndex + 1);
        } else if (deltaY < 0 && activeIndex > 0) {
          goTo(activeIndex - 1);
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isActive, goTo]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    active: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -40 : 40,
      opacity: 0.3,
      scale: 0.96,
    }),
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-gradient-to-b from-white via-slate-50/50 to-white"
    >
      <div className="min-h-screen flex flex-col py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="section-padding pb-8 sm:pb-10">
          <div className="container-wide flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-3 border border-indigo-100"
              >
                Our Services
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
              >
                Enterprise-Grade Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-slate-500 text-lg max-w-xl"
              >
                From schools to restaurants, we build software that transforms how businesses operate.
              </motion.p>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-400 ${
                    i === activeIndex
                      ? "w-8 h-2 bg-indigo-600"
                      : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card area */}
        <div className="flex-1 flex items-center section-padding">
          <div className="container-wide w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="active"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ServiceCard service={services[activeIndex]} index={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer info */}
        <div className="section-padding pt-6 sm:pt-8">
          <div className="container-wide flex items-center justify-between">
            <span className="text-slate-300 text-xs sm:text-sm font-mono">
              {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
            <motion.span
              animate={{ opacity: activeIndex === 0 ? 1 : activeIndex === services.length - 1 ? 1 : 0 }}
              className="text-slate-400 text-xs flex items-center gap-1.5"
            >
              {activeIndex === services.length - 1 ? (
                <>
                  Scroll to continue
                  <motion.svg
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </>
              ) : activeIndex === 0 ? (
                <>
                  <motion.svg
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                  Scroll to explore
                </>
              ) : null}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
