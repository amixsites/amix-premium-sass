"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Principal",
    company: "Sunrise Public School",
    content:
      "The School ERP system transformed how we manage our institution. Attendance, exams, and fee collection are now seamless. Parents love the portal, and our staff productivity has doubled.",
    rating: 5,
    avatar: "RS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Priya Patel",
    role: "Owner",
    company: "Spice Garden Restaurant",
    content:
      "Our restaurant POS has streamlined everything from order taking to kitchen display. The analytics dashboard helps us understand peak hours and optimize staffing. Highly recommended!",
    rating: 5,
    avatar: "PP",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Amit Kumar",
    role: "Manager",
    company: "Royal Banquet Hall",
    content:
      "The banquet management system eliminated double bookings and manual errors. Our customers can now book online, and payment tracking is a breeze. Revenue has increased by 30%.",
    rating: 5,
    avatar: "AK",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Sneha Gupta",
    role: "Founder",
    company: "CutieBox",
    content:
      "Amix built our e-commerce store from scratch. The design is beautiful, checkout is smooth, and sales have grown consistently. They truly understand online retail.",
    rating: 5,
    avatar: "SG",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Vikram Mehta",
    role: "Director",
    company: "Shrikha Organics",
    content:
      "Our organic products store perfectly captures our brand essence. The SEO-optimized site ranks on page one for our key terms. Organic traffic has tripled since launch.",
    rating: 5,
    avatar: "VM",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) => {
        if (newDirection === 1) {
          return prev === testimonials.length - 1 ? 0 : prev + 1;
        }
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      });
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what business owners and leaders say about working with Amix."
          />

          {/* Carousel */}
          <div className="mt-16 md:mt-20 relative max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[320px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="glass-card-strong rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center">
                    <Quote className="w-10 h-10 text-indigo-200 mb-6" />

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 text-balance">
                      &ldquo;{testimonials[current].content}&rdquo;
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full ${testimonials[current].color} flex items-center justify-center font-bold text-sm`}
                        >
                          {testimonials[current].avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {testimonials[current].name}
                          </p>
                          <p className="text-sm text-slate-400">
                            {testimonials[current].role} at{" "}
                            {testimonials[current].company}
                          </p>
                        </div>
                      </div>

                      <div className="hidden sm:flex gap-1">
                        {Array.from({ length: testimonials[current].rating }, (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-indigo-200 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-indigo-600"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-indigo-200 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
