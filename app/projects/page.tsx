import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsHero } from "@/components/projects-hero"

export const metadata = {
  title: "Projects - David Alisson",
  description: "Explore my portfolio of web applications, automation tools, and quality systems.",
}

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  )
}
