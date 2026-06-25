"use client";

import { motion } from "framer-motion";

const PHONE_NUMBER = "919246891902";
const MESSAGE = `Hi 👋
I'm interested in developing a website, SaaS application, ERP, POS system, or custom software for my business.
Can we discuss the requirements and pricing?`;

export function WhatsAppButton() {
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.39 1.1-2.294 2.1-3.162 2.172-.868.074-1.678.39-5.654-1.178-4.792-1.888-7.82-6.834-8.058-7.148-.234-.316-1.924-2.56-1.924-4.884 0-2.322 1.218-3.466 1.648-3.938.432-.47.94-.59 1.254-.59.312 0 .626.002.9.016.288.014.676-.11 1.058.806.39.94 1.326 3.232 1.442 3.466.118.234.196.508.04.822-.158.314-.236.51-.47.784-.234.276-.494.616-.704.826-.236.234-.48.488-.208.958.274.47 1.216 2.006 2.612 3.25 1.792 1.596 3.302 2.09 3.772 2.324.47.234.744.196 1.018-.118.274-.314 1.176-1.372 1.49-1.842.314-.47.628-.39 1.058-.234.432.156 2.736 1.292 3.206 1.526.47.234.784.352.9.548.118.196.118 1.14-.272 2.24z" />
      </svg>
    </motion.a>
  );
}
