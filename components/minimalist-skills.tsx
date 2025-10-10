"use client"

import { motion } from "framer-motion"

const skills = [
  "REACT", "TYPESCRIPT", "NODE.JS", "JAVA", "SQL", "POWER BI",
  "ANGULAR", "JAVASCRIPT", "C", "MYSQL", "POSTGRESQL", "LOOKER STUDIO",
  "NEXT.JS", "TAILWIND", "REST APIS", "GIT", "AGILE", "CLEAN CODE"
]

export function MinimalistSkills() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl sm:text-7xl font-thin text-white mb-8 tracking-tight">
            SKILLS
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-sm text-gray-400 tracking-widest uppercase">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
