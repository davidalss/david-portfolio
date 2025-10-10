"use client"

import { motion } from "framer-motion"
import { Code2, Rocket } from "lucide-react"

export function ProjectsHero() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-muted rounded-full border border-primary/20 mb-6">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-balance"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            A collection of web applications, automation tools, and quality systems I've built. Each project showcases
            different technologies and problem-solving approaches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-8 text-foreground-subtle"
          >
            <Code2 className="h-4 w-4" />
            <span className="text-sm">Synced with GitHub repositories</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
