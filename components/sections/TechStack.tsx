"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const technologies = [
  { name: "React", category: "Frontend", color: "bg-sky-50 text-sky-700 border-sky-100" },
  { name: "Next.js", category: "Framework", color: "bg-slate-50 text-slate-700 border-slate-200" },
  { name: "TypeScript", category: "Language", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "Supabase", category: "Backend", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { name: "PostgreSQL", category: "Database", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  { name: "Node.js", category: "Runtime", color: "bg-green-50 text-green-700 border-green-100" },
  { name: "Tailwind CSS", category: "Styling", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { name: "Vercel", category: "Hosting", color: "bg-slate-50 text-slate-700 border-slate-200" },
  { name: "Netlify", category: "Hosting", color: "bg-teal-50 text-teal-700 border-teal-100" },
  { name: "Framer Motion", category: "Animation", color: "bg-pink-50 text-pink-700 border-pink-100" },
  { name: "Prisma", category: "ORM", color: "bg-violet-50 text-violet-700 border-violet-100" },
  { name: "Stripe", category: "Payments", color: "bg-purple-50 text-purple-700 border-purple-100" },
];

export function TechStack() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-50/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Tech Stack"
            title="Built with Modern Technologies"
            description="We leverage the latest and most reliable technologies to build scalable, performant, and secure applications."
          />

          {/* Tech Grid */}
          <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`${tech.color} border rounded-2xl p-5 text-center cursor-default transition-shadow hover:shadow-lg`}
                >
                  <p className="font-semibold text-sm">{tech.name}</p>
                  <p className="text-[10px] opacity-60 mt-1">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Marquee */}
          <div className="mt-16 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...technologies, ...technologies].map((tech, i) => (
                <span
                  key={`${tech.name}-${i}`}
                  className="mx-6 text-4xl md:text-5xl font-bold text-slate-100 select-none"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
