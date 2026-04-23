"use client";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5 text-white">
        <h1 className="text-2xl font-bold tracking-wide">MELIS</h1>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <a href="#" className="transition hover:text-white">
            Home
          </a>
          <a href="#bikes" className="transition hover:text-white">
            Bikes
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
