"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#why-amix" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── Desktop Navbar ─── Floating Glass Pill ─── */}
      <motion.header
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="section-padding pt-4 md:pt-5">
          <nav
            className={`pointer-events-auto container-wide max-w-5xl mx-auto transition-all duration-700 ease-out ${
              isScrolled
                ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)] border border-white/60"
                : "bg-white/40 backdrop-blur-xl border border-white/30"
            } rounded-2xl`}
          >
            <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
              {/* Logo */}
              <motion.a
                href="#"
                className="flex items-center gap-2.5 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-600/25 group-hover:shadow-indigo-600/40 transition-all duration-300">
                  <Zap className="w-4 h-4 text-white" />
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  Amix
                </span>
              </motion.a>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-3.5 py-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 rounded-lg group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-slate-100/80 rounded-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-2">
                <motion.a
                  href="tel:+919246891902"
                  className="px-3.5 py-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Us
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-4 py-2 text-[13px] font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all duration-300 flex items-center gap-1.5"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start a Project
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>

              {/* Mobile Menu Button — Glass Circle */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/60 backdrop-blur-lg border border-white/40 shadow-sm flex items-center justify-center hover:bg-white/80 transition-all duration-200"
                whileTap={{ scale: 0.92 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-slate-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-slate-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ─── Mobile Menu ─── Glass Cards ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-24 left-4 right-4 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-2xl p-6 max-w-md mx-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3.5 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-2xl transition-all duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-5 pt-5 border-t border-slate-200/60 flex flex-col gap-3"
              >
                <a
                  href="tel:+919246891902"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-5 py-3 text-center text-sm font-semibold text-slate-700 bg-slate-100/80 rounded-2xl border border-slate-200/60 hover:bg-slate-200/60 transition-colors"
                >
                  Call Us
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl shadow-lg shadow-indigo-600/20 hover:shadow-xl transition-all"
                >
                  Start a Project
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
