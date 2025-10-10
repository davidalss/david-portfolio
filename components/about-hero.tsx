"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase, GraduationCap } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-foreground-muted">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">São José dos Pinhais, PR</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm">Systems Analysis Student</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              I'm a Full-Stack Developer with a passion for building intelligent solutions that automate processes and
              improve efficiency. Currently pursuing a degree in Systems Analysis and Development at Anhanguera
              (2025-2027), I combine technical expertise with practical experience in quality systems and automation.
            </p>

            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              At FRESNOMAQ, I develop applications and automation solutions for quality processes, create dashboards and
              digital tools for data monitoring and analysis, and implement low-code solutions using AppSheet and
              PowerApps to optimize workflows.
            </p>

            <p className="text-lg text-foreground-muted leading-relaxed">
              My approach focuses on clean code, best practices, and creating user-friendly interfaces that solve real
              business problems. I'm always eager to learn new technologies and take on challenging projects that push
              the boundaries of what's possible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
