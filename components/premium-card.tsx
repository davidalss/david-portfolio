"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface PremiumCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function PremiumCard({ children, className = "", delay = 0 }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Card para seções
export function PremiumSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  )
}

// Título de seção premium
export function PremiumSectionTitle({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight ${className}`}
    >
      {children}
    </motion.h2>
  )
}

// Subtítulo de seção
export function PremiumSectionSubtitle({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className={`text-lg text-gray-300 max-w-2xl leading-relaxed ${className}`}
    >
      {children}
    </motion.p>
  )
}
