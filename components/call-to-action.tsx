"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function CallToAction() {
  return (
    <section className="py-20 bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Let's build something <span className="gradient-text">amazing together</span>
          </h2>
          <p className="text-lg text-foreground-muted mb-8 leading-relaxed text-pretty">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hi, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary-hover text-background">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-border hover:border-primary bg-transparent">
              <a href="https://github.com/davidalss" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
