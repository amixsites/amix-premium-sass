"use client";

import { motion } from "framer-motion";
import { Zap, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "School ERP", href: "#services" },
    { label: "Restaurant POS", href: "#services" },
    { label: "Banquet Manager", href: "#services" },
    { label: "E-Commerce", href: "#services" },
    { label: "Business Websites", href: "#services" },
  ],
  Products: [
    { label: "School ERP", href: "#products" },
    { label: "Restaurant POS", href: "#products" },
    { label: "Banquet Manager", href: "#products" },
  ],
  Company: [
    { label: "About Us", href: "#why-amix" },
    { label: "Our Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="section-padding py-16 md:py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2.5 mb-5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Amix
                </span>
              </motion.a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
                Building modern software that powers schools, restaurants, and
                businesses worldwide. Your digital transformation partner.
              </p>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Amix. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
