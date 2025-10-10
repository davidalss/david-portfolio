"use client"

import { motion } from "framer-motion"

export function MinimalistHero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-8xl sm:text-9xl font-thin text-white mb-8 tracking-tight leading-none">
            DAVID
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light text-gray-400 mb-16 tracking-widest">
            FULL-STACK DEVELOPER
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Building intelligent solutions for the modern web. 
            Specializing in automation, quality systems, and innovative development.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
