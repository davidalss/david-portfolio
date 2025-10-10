"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"

interface SmoothScrollSectionProps {
  children: React.ReactNode
  className?: string
  index: number
}

export const SmoothScrollSection = forwardRef<HTMLElement, SmoothScrollSectionProps>(
  ({ children, className = "", index }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={`min-h-screen w-full flex items-center justify-center ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      >
        <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </motion.section>
    )
  }
)

SmoothScrollSection.displayName = "SmoothScrollSection"
