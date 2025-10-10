"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star, GitFork, Calendar } from "lucide-react"
import type { Project } from "@/components/projects-grid"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const formattedDate = new Date(project.updated_at).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-surface-elevated border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {project.name}
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2 mb-4">
              {project.description || "No description available"}
            </p>
          </div>
        </div>

        {/* Topics/Tags */}
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 text-xs font-medium text-primary bg-primary-muted rounded border border-primary/20"
              >
                {topic}
              </span>
            ))}
            {project.topics.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium text-foreground-subtle bg-surface rounded">
                +{project.topics.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-foreground-subtle">
          {project.language && (
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs">{project.language}</span>
            </div>
          )}
          {project.stargazers_count > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span className="text-xs">{project.stargazers_count}</span>
            </div>
          )}
          {project.forks_count > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="h-3 w-3" />
              <span className="text-xs">{project.forks_count}</span>
            </div>
          )}
        </div>

        {/* Updated Date */}
        <div className="flex items-center gap-1 text-foreground-subtle mb-4">
          <Calendar className="h-3 w-3" />
          <span className="text-xs">Updated {formattedDate}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1 group/btn bg-transparent">
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="h-3 w-3 mr-2" />
              Code
              <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
          {project.homepage && (
            <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary-hover text-background">
              <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
