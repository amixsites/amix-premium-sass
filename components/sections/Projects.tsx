"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Monitor } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "CutieBox",
    url: "https://cutiebox.vercel.app",
    description:
      "A custom magazine and gift hamper e-commerce store with interactive product previews, curated collections, and a seamless checkout experience.",
    tags: ["E-Commerce", "React", "Next.js", "Stripe"],
    color: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    stats: { products: "45+", customers: "120+" },
    image: "/cutiebox-WEbpreview-img.png",
  },
  {
    title: "Maison Rose",
    url: "https://maison-rose-six.vercel.app",
    description:
      "Luxury fashion e-commerce platform featuring premium shopping experience, lookbook integration, and editorial-style product showcases.",
    tags: ["Fashion", "E-Commerce", "Next.js", "Tailwind"],
    color: "from-rose-500 to-red-400",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    stats: { products: "38+", customers: "95+" },
    image: "/maison-rose-web.png",
  },
  {
    title: "Shrikha Organics",
    url: "https://shrikha-organics.netlify.app",
    description:
      "Organic products store with brand-focused storytelling, sustainability messaging, and a nature-inspired shopping journey.",
    tags: ["Organic", "Brand", "React", "Netlify"],
    color: "from-emerald-500 to-green-400",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    stats: { products: "30+", customers: "80+" },
    image: "/shrikha-organics-webPReview.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-slate-50/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Featured Work"
            title="Projects That Drive Results"
            description="Explore our portfolio of successful launches. Each project is crafted with precision, performance, and conversion in mind."
          />

          <div className="mt-16 md:mt-20 space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div
                  className={`group relative glass-card-strong rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    index % 2 === 0 ? "lg:pr-[45%]" : "lg:pl-[45%]"
                  }`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    } w-full lg:w-1/2 h-full opacity-[0.03] bg-gradient-to-br ${project.color}`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-12 h-12 rounded-2xl ${project.bgColor} flex items-center justify-center`}
                          >
                            <Monitor className={`w-6 h-6 ${project.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                              {project.title}
                            </h3>
                            <p className="text-sm text-slate-400">{project.url}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 leading-relaxed mb-6 max-w-xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 mb-6">
                      <div>
                        <p className="text-2xl font-bold text-slate-900">
                          {project.stats.products}
                        </p>
                        <p className="text-xs text-slate-400">Products</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">
                          {project.stats.customers}
                        </p>
                        <p className="text-xs text-slate-400">Customers</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Browser Mockup - Desktop Only */}
                  <div
                    className={`hidden lg:block absolute ${
                      index % 2 === 0 ? "right-8" : "left-8"
                    } top-1/2 -translate-y-1/2 w-[40%]`}
                  >
                    <motion.div
                      whileHover={{ y: -8, rotate: index % 2 === 0 ? 2 : -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white"
                    >
                      {/* Browser Chrome */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-amber-400" />
                          <div className="w-3 h-3 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="h-6 rounded-md bg-white border border-slate-200 flex items-center px-3">
                            <span className="text-[10px] text-slate-400 truncate">
                              {project.url}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Content Preview */}
                      <div className="relative w-full bg-slate-50">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          width={800}
                          height={500}
                          className="w-full h-auto object-contain"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    </motion.div>
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
