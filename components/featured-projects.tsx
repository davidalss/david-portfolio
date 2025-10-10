"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection, StaggeredAnimation } from "@/components/animated-section"

const featuredProjects = [
  {
    title: "Quality Management System",
    description: "Automated quality control system with real-time dashboards and non-conformity tracking",
    tags: ["React", "Node.js", "PostgreSQL", "Power BI"],
    image: "/quality-management-dashboard.png",
  },
  {
    title: "Process Automation Platform",
    description: "Low-code platform for automating business processes and workflows",
    tags: ["AppSheet", "PowerApps", "Power Automate"],
    image: "/automation-platform-interface.jpg",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for monitoring production metrics and KPIs",
    tags: ["React", "TypeScript", "Looker Studio", "SQL"],
    image: "/analytics-dashboard-dark-theme.png",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl leading-relaxed">
              A selection of recent work showcasing automation, web development, and data visualization
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex group">
            <Link href="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </AnimatedSection>

        <StaggeredAnimation
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          staggerDelay={0.1}
          direction="up"
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-surface-elevated border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden bg-surface">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-muted mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary-muted rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto hover:bg-transparent">
                  View Project
                  <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </StaggeredAnimation>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="group bg-transparent">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
