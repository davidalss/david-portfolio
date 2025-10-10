"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { PremiumCard, PremiumSection, PremiumSectionTitle, PremiumSectionSubtitle } from "@/components/premium-card"

const skillCategories = [
  {
    category: "FRONTEND DEVELOPMENT",
    skills: [
      { name: "React", level: 85 },
      { name: "Angular", level: 75 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    category: "BACKEND DEVELOPMENT",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Java", level: 70 },
      { name: "C", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "DATABASE & BI",
    skills: [
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Power BI", level: 85 },
      { name: "Looker Studio", level: 80 },
    ],
  },
  {
    category: "TOOLS & METHODOLOGIES",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Agile Methodologies", level: 80 },
      { name: "Clean Code", level: 85 },
      { name: "SOLID Principles", level: 80 },
      { name: "AppSheet", level: 85 },
      { name: "PowerApps", level: 80 },
    ],
  },
]

export function PremiumSkills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <PremiumSection className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <PremiumSectionTitle>SKILLS & EXPERTISE</PremiumSectionTitle>
          <PremiumSectionSubtitle className="mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </PremiumSectionSubtitle>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {skillCategories.map((cat, index) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <PremiumCard key={activeCategory} className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-wide uppercase">
              {skillCategories[activeCategory].category}
            </h3>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-white tracking-wide uppercase">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      className="h-full bg-white"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </PremiumCard>
        </div>
      </div>
    </PremiumSection>
  )
}
