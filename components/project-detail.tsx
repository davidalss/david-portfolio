"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Star, GitFork, Calendar, Code2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectDetailProps {
  project: any
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const formattedDate = new Date(project.updated_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button asChild variant="ghost" className="mb-8 group">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </Button>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              <span className="gradient-text">{project.name}</span>
            </h1>

            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              {project.description || "No description available"}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-foreground-muted">
              {project.language && (
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">{project.language}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm">{project.stargazers_count} stars</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="h-4 w-4 text-primary" />
                <span className="text-sm">{project.forks_count} forks</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm">Updated {formattedDate}</span>
              </div>
            </div>

            {/* Topics */}
            {project.topics && project.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.topics.map((topic: string) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-sm font-medium text-primary bg-primary-muted rounded-full border border-primary/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild size="lg" className="group bg-primary hover:bg-primary-hover text-background">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
              {project.homepage && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-border hover:border-primary bg-transparent"
                >
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              )}
            </div>

            {/* README or additional content */}
            <div className="bg-surface-elevated border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-foreground-muted leading-relaxed">
                {project.description || "Visit the GitHub repository to learn more about this project."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
