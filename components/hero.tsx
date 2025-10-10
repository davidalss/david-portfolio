"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParallaxBackground } from "@/components/parallax-background"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Transformações baseadas no scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Conteúdo com parallax */}
      <motion.div
        ref={heroRef}
        style={{
          y: smoothY,
          opacity: smoothOpacity,
          scale: smoothScale
        }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary-muted rounded-full border border-primary/20">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            <span className="text-foreground">Building </span>
            <span className="gradient-text">intelligent solutions</span>
            <span className="text-foreground"> for the modern web</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-foreground-muted mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Full-Stack Developer specializing in automation, quality systems, and web development. Currently building
            innovative solutions at FRESNOMAQ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="group bg-primary hover:bg-primary-hover text-background">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-border hover:border-primary bg-transparent"
            >
              <Link href="/contact">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/davidalss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <span className="text-foreground-subtle">•</span>
            <a
              href="https://linkedin.com/in/davidalss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-foreground-subtle">•</span>
            <a
              href="mailto:david.alisson92@outlook.com"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground-subtle">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
