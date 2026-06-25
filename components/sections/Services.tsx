"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  UtensilsCrossed,
  CalendarDays,
  ShoppingCart,
  Globe,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

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
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant POS Software",
    description:
      "Streamline your restaurant operations with our all-in-one POS system featuring order management, kitchen display, and analytics.",
    features: [
      "Order Management",
      "Kitchen Display System",
      "Billing & Invoicing",
      "Inventory Tracking",
      "Sales Analytics",
      "Table Management",
    ],
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: CalendarDays,
    title: "Banquet Booking & Management",
    description:
      "End-to-end banquet and venue management solution for hotels and event spaces with booking, scheduling, and payment tracking.",
    features: [
      "Venue Booking",
      "Event Scheduling",
      "Payment Tracking",
      "Customer Management",
      "Reports & Analytics",
      "Calendar Integration",
    ],
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Custom online stores built for conversions with product management, secure payments, inventory sync, and marketing automation.",
    features: [
      "Online Storefront",
      "Product Management",
      "Secure Payments",
      "Inventory Sync",
      "Marketing Automation",
      "Order Fulfillment",
    ],
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
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
      "Performance Focused",
      "Responsive Design",
      "CMS Integration",
    ],
    color: "from-indigo-500 to-blue-400",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Services"
            title="Enterprise-Grade Solutions for Every Industry"
            description="From schools to restaurants, we build software that transforms how businesses operate, engage customers, and scale growth."
          />

          <div className="mt-16 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <GlassCard key={service.title} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-5`}
                  >
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-slate-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
