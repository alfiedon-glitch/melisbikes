"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function BikeCard({ bike }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 shadow-2xl shadow-black/40"
    >
      <div className="overflow-hidden">
        <img src={bike.image} alt={bike.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">{bike.name}</h2>
          <span className="text-sm uppercase tracking-[0.2em] text-gray-400">{bike.category}</span>
        </div>
        <p className="text-gray-400">{bike.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">{bike.price}</span>
          <Link href={`/bikes/${bike.id}`} className="text-accent font-semibold transition hover:text-red-400">
            View Details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
