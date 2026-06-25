"use client";

import { motion } from "framer-motion";
import { Zap, ArrowUpRight, Heart } from "lucide-react";

// ─── DESKTOP FOOTER (unchanged) ─────────────────────────────────

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

function DesktopFooter() {
  return (
    <div className="hidden md:block">
      <div className="section-padding py-16 md:py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
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
    </div>
  );
}

// ─── MOBILE FOOTER ───────────────────────────────────────────────

const products = [
  { label: "School ERP", href: "#services" },
  { label: "Restaurant POS", href: "#services" },
  { label: "Banquet", href: "#services" },
  { label: "Websites", href: "#services" },
];

const companyLinks = [
  { label: "About", href: "#why-amix" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { label: "School ERP", href: "#products" },
  { label: "Restaurant POS", href: "#products" },
  { label: "Banquet Manager", href: "#products" },
  { label: "Business Websites", href: "#services" },
];

function MobileFooter() {
  return (
    <div className="md:hidden px-5 pt-10 pb-6">
      {/* Section 1 — Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-7"
      >
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
          Amix
        </h2>
        <p className="text-slate-500 text-[13px] leading-relaxed max-w-[280px]">
          Building software infrastructure for schools, restaurants, and modern businesses.
        </p>
      </motion.div>

      {/* Section 2 — Product Rail */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-7 -mx-5 px-5 overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-2 w-max">
          {products.map((product) => (
            <a
              key={product.label}
              href={product.href}
              className="px-3.5 py-1.5 rounded-full border border-slate-700/80 text-slate-400 text-xs font-medium whitespace-nowrap hover:border-slate-500 hover:text-slate-300 transition-colors"
            >
              {product.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Section 3 — Navigation Columns */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 gap-x-8 gap-y-0 mb-7"
      >
        <div>
          <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Company
          </h4>
          <ul className="space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[13px] text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Products
          </h4>
          <ul className="space-y-2.5">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[13px] text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Section 4 — Social Row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex items-center gap-5 mb-7"
      >
        {["Instagram", "LinkedIn", "GitHub"].map((name) => (
          <a
            key={name}
            href="#"
            className="text-xs text-slate-500 hover:text-white transition-colors"
          >
            {name}
          </a>
        ))}
      </motion.div>

      {/* Section 5 — Bottom */}
      <div className="border-t border-slate-800/60 pt-5">
        <p className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} Amix · Crafted in India ·{" "}
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a> ·{" "}
          <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
        </p>
      </div>
    </div>
  );
}

// ─── EXPORT ──────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <DesktopFooter />
      <MobileFooter />
    </footer>
  );
}
