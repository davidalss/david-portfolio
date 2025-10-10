"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilters } from "@/components/project-filters"
import { Loader2 } from "lucide-react"

export interface Project {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
  created_at: string
}

const manualProjects: Project[] = [
  {
    id: 1,
    name: "Quality Management Dashboard",
    description:
      "Comprehensive quality control system with real-time dashboards, non-conformity tracking, and automated reporting for manufacturing processes",
    html_url: "#",
    homepage: null,
    topics: ["react", "nodejs", "postgresql", "powerbi", "dashboard"],
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Process Automation Platform",
    description:
      "Low-code platform for automating business processes and workflows using AppSheet and PowerApps integration",
    html_url: "#",
    homepage: null,
    topics: ["appsheet", "powerapps", "automation", "low-code"],
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard for monitoring production metrics, KPIs, and quality indicators with interactive visualizations",
    html_url: "#",
    homepage: null,
    topics: ["react", "typescript", "looker-studio", "sql", "analytics"],
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
]

export function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>(manualProjects)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(manualProjects)
  const [loading, setLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    fetchGitHubProjects()
  }, [])

  useEffect(() => {
    filterProjects()
  }, [selectedFilter, projects])

  async function fetchGitHubProjects() {
    try {
      const response = await fetch("https://api.github.com/users/davidalss/repos?sort=updated&per_page=20")

      if (response.ok) {
        const repos = await response.json()
        const allProjects = [...manualProjects, ...repos]
        setProjects(allProjects)
        setFilteredProjects(allProjects)
      }
    } catch (error) {
      console.error("[v0] Error fetching GitHub projects:", error)
    } finally {
      setLoading(false)
    }
  }

  function filterProjects() {
    if (selectedFilter === "all") {
      setFilteredProjects(projects)
      return
    }

    const filtered = projects.filter((project) => {
      const language = project.language?.toLowerCase() || ""
      const topics = project.topics || []

      switch (selectedFilter) {
        case "web":
          return (
            language === "typescript" ||
            language === "javascript" ||
            topics.includes("react") ||
            topics.includes("nextjs") ||
            topics.includes("angular")
          )
        case "automation":
          return (
            topics.includes("automation") ||
            topics.includes("appsheet") ||
            topics.includes("powerapps") ||
            topics.includes("low-code")
          )
        case "data":
          return (
            topics.includes("powerbi") ||
            topics.includes("analytics") ||
            topics.includes("dashboard") ||
            topics.includes("sql")
          )
        case "backend":
          return (
            language === "java" ||
            language === "c" ||
            topics.includes("nodejs") ||
            topics.includes("api") ||
            topics.includes("backend")
          )
        default:
          return true
      }
    })

    setFilteredProjects(filtered)
  }

  if (loading) {
    return (
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="h-8 w-8 text-primary animate-spin mx-auto mb-4" />
              <p className="text-foreground-muted">Loading projects from GitHub...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectFilters selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-foreground-muted">No projects found for this filter.</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
