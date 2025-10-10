"use client"

import { motion } from "framer-motion"
import { Globe, Zap, BarChart3, Server } from "lucide-react"

const filters = [
  { id: "all", label: "All Projects", icon: null },
  { id: "web", label: "Web Apps", icon: Globe },
  { id: "automation", label: "Automation", icon: Zap },
  { id: "data", label: "Data & BI", icon: BarChart3 },
  { id: "backend", label: "Backend", icon: Server },
]

interface ProjectFiltersProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export function ProjectFilters({ selectedFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const Icon = filter.icon
          return (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedFilter === filter.id
                  ? "bg-primary text-background shadow-lg"
                  : "bg-surface-elevated text-foreground-muted hover:bg-surface hover:text-foreground border border-border"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {filter.label}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
