"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

interface SectionNavigatorProps {
  totalSections: number
  currentSection: number
  onNext: () => void
  onPrevious: () => void
  onSectionClick: (index: number) => void
  isScrolling: boolean
}

export function SectionNavigator({
  totalSections,
  currentSection,
  onNext,
  onPrevious,
  onSectionClick,
  isScrolling
}: SectionNavigatorProps) {
  return (
    <>
      {/* Indicadores laterais */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-2">
          {Array.from({ length: totalSections }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onSectionClick(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentSection
                  ? 'bg-primary border-primary scale-125'
                  : 'bg-transparent border-foreground-muted hover:border-primary'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50 flex gap-4">
        <motion.button
          onClick={onPrevious}
          disabled={currentSection === 0 || isScrolling}
          className={`p-3 rounded-full border-2 transition-all duration-300 ${
            currentSection === 0 || isScrolling
              ? 'border-foreground-muted text-foreground-muted cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary hover:text-background'
          }`}
          whileHover={currentSection > 0 && !isScrolling ? { scale: 1.1 } : {}}
          whileTap={currentSection > 0 && !isScrolling ? { scale: 0.9 } : {}}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={onNext}
          disabled={currentSection === totalSections - 1 || isScrolling}
          className={`p-3 rounded-full border-2 transition-all duration-300 ${
            currentSection === totalSections - 1 || isScrolling
              ? 'border-foreground-muted text-foreground-muted cursor-not-allowed'
              : 'border-primary text-primary hover:bg-primary hover:text-background'
          }`}
          whileHover={currentSection < totalSections - 1 && !isScrolling ? { scale: 1.1 } : {}}
          whileTap={currentSection < totalSections - 1 && !isScrolling ? { scale: 0.9 } : {}}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Indicador de progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-foreground-muted/20 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Contador de seção */}
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2"
          >
            <span className="text-sm font-medium text-primary">
              {currentSection + 1} / {totalSections}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
