"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

interface Animated3DCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  intensity?: number
}

export function Animated3DCard({
  children,
  className = "",
  delay = 0,
  direction = "up",
  intensity = 0.1
}: Animated3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Transformações 3D baseadas no scroll
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Animações suaves
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  // Variantes de direção
  const directionVariants = {
    up: { y: 100, rotateX: 15 },
    down: { y: -100, rotateX: -15 },
    left: { x: 100, rotateY: -15 },
    right: { x: -100, rotateY: 15 }
  }

  const initialVariant = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...initialVariant,
        scale: 0.8
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        y: smoothY,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        scale: smoothScale,
        opacity: smoothOpacity,
        transformStyle: "preserve-3d"
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className={`${className} transform-gpu`}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d"
        }}
        whileHover={{
          rotateX: -5,
          rotateY: -5,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Card com efeito de glassmorphism
export function GlassmorphismCard({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: Animated3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{
        y: smoothY,
        rotateX: smoothRotateX,
        scale: smoothScale,
        opacity: smoothOpacity
      }}
      whileHover={{
        scale: 1.02,
        rotateX: -2,
        transition: { duration: 0.3 }
      }}
      className={`${className} backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-2xl`}
    >
      {children}
    </motion.div>
  )
}

// Card com efeito de profundidade
export function DepthCard({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: Animated3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [150, -150])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const smoothY = useSpring(y, { stiffness: 80, damping: 25 })
  const smoothRotateX = useSpring(rotateX, { stiffness: 80, damping: 25 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 80, damping: 25 })
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 25 })
  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 25 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150, scale: 0.7 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      style={{
        y: smoothY,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        scale: smoothScale,
        opacity: smoothOpacity,
        transformStyle: "preserve-3d"
      }}
      whileHover={{
        scale: 1.08,
        rotateX: -8,
        rotateY: 8,
        transition: { duration: 0.4 }
      }}
      className={`${className} bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-2xl shadow-2xl`}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          rotateX: 4,
          rotateY: -4,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
