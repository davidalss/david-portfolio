import { AboutHero } from "@/components/about-hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Languages } from "@/components/languages"

export const metadata = {
  title: "About - David Alisson",
  description: "Learn more about my experience, skills, and background in full-stack development and automation.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <Experience />
      <Skills />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Education />
        <Languages />
      </div>
    </div>
  )
}
