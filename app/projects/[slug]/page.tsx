import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params

  // Fetch project data from GitHub API
  let project = null
  try {
    const response = await fetch(`https://api.github.com/repos/davidalss/${slug}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (response.ok) {
      project = await response.json()
    }
  } catch (error) {
    console.error("[v0] Error fetching project:", error)
  }

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
