"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "QUALITY MANAGEMENT SYSTEM",
    description: "Automated quality control system with real-time dashboards",
    year: "2024"
  },
  {
    title: "PROCESS AUTOMATION PLATFORM", 
    description: "Low-code platform for automating business processes",
    year: "2023"
  },
  {
    title: "ANALYTICS DASHBOARD",
    description: "Real-time analytics dashboard for production metrics",
    year: "2023"
  }
]

export function MinimalistProjects() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl sm:text-7xl font-thin text-white mb-8 tracking-tight">
            PROJECTS
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="border-b border-gray-800 pb-8 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-wide">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 tracking-widest">
                  {project.year}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
