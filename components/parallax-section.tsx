"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, ReactNode } from "react"
import { MinimalistBackground } from "@/components/minimalist-background"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up"
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], direction === "up" ? [100, -100] : [-100, 100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={`${className} relative z-10`}
    >
      {children}
    </motion.div>
  )
}

// Seção com efeito de parallax mais complexo
export function ComplexParallaxSection({
  children,
  className = "",
  speed = 0.5
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [200, -200])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      style={{
        y: smoothY,
        rotateX: smoothRotateX,
        scale: smoothScale,
        opacity: smoothOpacity,
        transformStyle: "preserve-3d"
      }}
      className={`${className} relative z-10`}
    >
      {children}
    </motion.div>
  )
}

// Container principal minimalista
export function ParallaxContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Fundo minimalista global */}
      <MinimalistBackground />
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
