"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PremiumHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge profissional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 backdrop-blur-sm">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight"
          >
            <span className="block">BUILDING</span>
            <span className="block text-gray-400">INTELLIGENT</span>
            <span className="block">SOLUTIONS</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer specializing in automation, quality systems, and web development. 
            Currently building innovative solutions at FRESNOMAQ.
          </motion.p>

          {/* Botões de ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              asChild 
              size="lg" 
              className="group bg-white text-black hover:bg-gray-200 border-0 px-8 py-4 text-sm font-medium tracking-wide uppercase"
            >
              <Link href="/projects">
                VIEW PROJECTS
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-sm font-medium tracking-wide uppercase"
            >
              <Link href="/contact">
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD CV
              </Link>
            </Button>
          </motion.div>

          {/* Links sociais */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-8 text-sm text-gray-400"
          >
            <a
              href="https://github.com/davidalss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors tracking-wide uppercase"
            >
              GITHUB
            </a>
            <span className="text-white/30">•</span>
            <a
              href="https://linkedin.com/in/davidalss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors tracking-wide uppercase"
            >
              LINKEDIN
            </a>
            <span className="text-white/30">•</span>
            <a
              href="mailto:david.alisson92@outlook.com"
              className="hover:text-white transition-colors tracking-wide uppercase"
            >
              EMAIL
            </a>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-400 tracking-widest uppercase">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-white/30"
          />
        </div>
      </motion.div>
    </div>
  )
}
