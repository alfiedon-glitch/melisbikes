"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Ride the Future
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Premium motorcycle experience with bold design, advanced performance, and luxury craftsmanship.
          </p>
          <a
            href="#bikes"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-500"
          >
            Explore Bikes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
