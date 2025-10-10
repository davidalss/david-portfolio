"use client"

import { motion } from "framer-motion"
import { LanguagesIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const languages = [
  { name: "Portuguese", level: "Native", proficiency: 100 },
  { name: "English", level: "Intermediate", proficiency: 65 },
  { name: "Spanish", level: "Intermediate", proficiency: 60 },
]

export function Languages() {
  return (
    <AnimatedSection
      direction="up"
      delay={0.1}
      className="bg-surface-elevated border border-border rounded-lg p-6"
    >
      <h3 className="text-2xl font-bold mb-6">
        <span className="gradient-text">Languages</span>
      </h3>

      <div className="space-y-6">
        {languages.map((lang, index) => (
          <div key={lang.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <LanguagesIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{lang.name}</span>
              </div>
              <span className="text-xs text-foreground-muted">{lang.level}</span>
            </div>
            <div className="h-2 bg-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-foreground-muted leading-relaxed">
          Currently improving English proficiency through InFlux English courses
        </p>
      </div>
    </AnimatedSection>
  )
}
