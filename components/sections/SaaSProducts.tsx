"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  UtensilsCrossed,
  CalendarDays,
  LayoutDashboard,
  BarChart3,
  Shield,
  Zap,
  Users,
  CreditCard,
  Bell,
  FileText,
  Settings,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const products = [
  {
    icon: GraduationCap,
    name: "School ERP",
    tagline: "Complete School Management System",
    description:
      "An all-in-one platform for educational institutions to manage students, staff, fees, exams, and communications seamlessly.",
    modules: [
      { icon: Users, label: "Student Portal" },
      { icon: FileText, label: "Exams & Results" },
      { icon: CreditCard, label: "Fee Collection" },
      { icon: Bell, label: "Notifications" },
      { icon: BarChart3, label: "Analytics" },
      { icon: Settings, label: "Admin Panel" },
    ],
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurant POS",
    tagline: "Smart Restaurant Operations",
    description:
      "Streamline your restaurant with digital ordering, kitchen management, inventory tracking, and real-time sales analytics.",
    modules: [
      { icon: LayoutDashboard, label: "Order Dashboard" },
      { icon: Zap, label: "Quick Billing" },
      { icon: BarChart3, label: "Sales Reports" },
      { icon: Users, label: "Staff Management" },
      { icon: CreditCard, label: "Payments" },
      { icon: Settings, label: "Menu Config" },
    ],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    icon: CalendarDays,
    name: "Banquet Manager",
    tagline: "Event & Venue Management",
    description:
      "End-to-end solution for banquet halls and event venues. Manage bookings, schedules, payments, and customer relationships.",
    modules: [
      { icon: CalendarDays, label: "Booking Calendar" },
      { icon: CreditCard, label: "Payment Tracking" },
      { icon: Users, label: "Guest Management" },
      { icon: FileText, label: "Invoices" },
      { icon: BarChart3, label: "Reports" },
      { icon: Shield, label: "Contracts" },
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
  },
];

export function SaaSProducts() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50 to-violet-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="SaaS Products"
            title="Ready-to-Deploy Software Solutions"
            description="Pre-built, customizable software products that can be white-labeled and deployed for your business within weeks."
          />

          <div className="mt-16 md:mt-20 space-y-8 lg:space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card-strong rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Info */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className={`w-14 h-14 rounded-2xl ${product.bgColor} flex items-center justify-center`}
                        >
                          <product.icon
                            className={`w-7 h-7 ${
                              product.name === "School ERP"
                                ? "text-blue-600"
                                : product.name === "Restaurant POS"
                                ? "text-orange-600"
                                : "text-violet-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {product.name}
                          </h3>
                          <p className="text-sm text-slate-400">{product.tagline}</p>
                        </div>
                      </div>

                      <p className="text-slate-500 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {product.modules.map((module) => (
                          <motion.div
                            key={module.label}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`flex items-center gap-2.5 p-3 rounded-xl ${product.bgColor} border ${product.borderColor} cursor-default`}
                          >
                            <module.icon className="w-4 h-4 text-slate-600" />
                            <span className="text-xs font-medium text-slate-700">
                              {module.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <motion.div
                        whileHover={{ y: -6, rotateX: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white"
                      >
                        {/* Dashboard Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                          </div>
                          <div className="flex-1 mx-4">
                            <div className="h-6 rounded-md bg-white border border-slate-200 flex items-center px-3">
                              <span className="text-[10px] text-slate-400">
                                {product.name.toLowerCase().replace(/\s/g, "-")}.amix.app
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-5 space-y-4">
                          {/* Stats Row */}
                          <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className={`p-3 rounded-xl ${product.bgColor} border ${product.borderColor}`}
                              >
                                <div className="h-2 w-8 rounded bg-slate-200 mb-2" />
                                <div className="h-5 w-12 rounded bg-slate-300" />
                              </div>
                            ))}
                          </div>

                          {/* Chart Area */}
                          <div className="h-32 rounded-xl bg-slate-50 border border-slate-100 flex items-end gap-1 p-3">
                            {Array.from({ length: 12 }, (_, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${Math.random() * 60 + 20}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03, duration: 0.4 }}
                                className={`flex-1 rounded-t-sm bg-gradient-to-t ${product.color} opacity-70`}
                              />
                            ))}
                          </div>

                          {/* Table Preview */}
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 p-2 rounded-lg bg-slate-50/50"
                              >
                                <div className="w-8 h-8 rounded-lg bg-slate-200" />
                                <div className="flex-1 space-y-1.5">
                                  <div className="h-2.5 w-24 rounded bg-slate-200" />
                                  <div className="h-2 w-16 rounded bg-slate-100" />
                                </div>
                                <div className="h-6 w-16 rounded-md bg-slate-200" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
