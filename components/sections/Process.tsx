"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  TestTube,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business, understand your goals, analyze competitors, and identify opportunities for digital transformation.",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Planning",
    description:
      "We create a detailed roadmap with milestones, tech stack recommendations, and a clear timeline for your project.",
    color: "from-amber-500 to-yellow-400",
    bgColor: "bg-amber-50",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Our designers craft stunning, user-centric interfaces with interactive prototypes that bring your vision to life.",
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-50",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "We build with clean, scalable code using modern frameworks. Regular demos keep you in the loop at every stage.",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-50",
  },
  {
    icon: TestTube,
    title: "Testing",
    description:
      "Rigorous QA ensures your product is bug-free, performant, and accessible across all devices and browsers.",
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-50",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "We launch your product with CI/CD pipelines, monitoring, and analytics setup for a smooth go-live experience.",
    color: "from-indigo-500 to-blue-400",
    bgColor: "bg-indigo-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description:
      "Post-launch, we provide ongoing maintenance, updates, and support to ensure your software evolves with your business.",
    color: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-50",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Process"
            title="How We Build Excellence"
            description="A battle-tested 7-step process that ensures every project is delivered on time, on budget, and beyond expectations."
          />

          {/* Timeline */}
          <div className="mt-16 md:mt-20 relative">
            {/* Vertical Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-violet-200 to-indigo-200" />

            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                    index !== steps.length - 1 ? "lg:pb-16" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card-strong rounded-2xl p-6 md:p-8"
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center flex-shrink-0`}
                        >
                          <step.icon className="w-6 h-6 text-slate-700" />
                        </div>
                        <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                            Step {index + 1}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className={`w-10 h-10 rounded-full ${step.bgColor} border-4 border-white shadow-lg flex items-center justify-center z-10`}
                    >
                      <span className="text-sm font-bold text-slate-700">
                        {index + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={index % 2 === 0 ? "hidden lg:block" : "hidden lg:block lg:col-start-1 lg:row-start-1"} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
