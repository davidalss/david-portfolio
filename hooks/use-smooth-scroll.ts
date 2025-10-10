"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseSmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
  offset?: number
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const {
    duration = 800,
    easing = (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
    offset = 0
  } = options

  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Função de scroll suave
  const smoothScrollTo = useCallback((targetY: number) => {
    if (isScrolling) return

    setIsScrolling(true)
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easing(progress)

      window.scrollTo(0, startY + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        setIsScrolling(false)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [duration, easing, isScrolling])

  // Navegar para próxima seção
  const scrollToNext = useCallback(() => {
    if (isScrolling || currentSection >= sectionsRef.current.length - 1) return

    const nextSection = currentSection + 1
    const targetElement = sectionsRef.current[nextSection]
    
    if (targetElement) {
      const targetY = targetElement.offsetTop + offset
      smoothScrollTo(targetY)
      setCurrentSection(nextSection)
    }
  }, [currentSection, isScrolling, smoothScrollTo, offset])

  // Navegar para seção anterior
  const scrollToPrevious = useCallback(() => {
    if (isScrolling || currentSection <= 0) return

    const prevSection = currentSection - 1
    const targetElement = sectionsRef.current[prevSection]
    
    if (targetElement) {
      const targetY = targetElement.offsetTop + offset
      smoothScrollTo(targetY)
      setCurrentSection(prevSection)
    }
  }, [currentSection, isScrolling, smoothScrollTo, offset])

  // Navegar para seção específica
  const scrollToSection = useCallback((index: number) => {
    if (isScrolling || index < 0 || index >= sectionsRef.current.length) return

    const targetElement = sectionsRef.current[index]
    
    if (targetElement) {
      const targetY = targetElement.offsetTop + offset
      smoothScrollTo(targetY)
      setCurrentSection(index)
    }
  }, [isScrolling, smoothScrollTo, offset])

  // Detectar seção atual baseada no scroll
  const updateCurrentSection = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 2
    
    for (let i = 0; i < sectionsRef.current.length; i++) {
      const section = sectionsRef.current[i]
      if (section && scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
        setCurrentSection(i)
        break
      }
    }
  }, [])

  // Registrar seção
  const registerSection = useCallback((element: HTMLElement | null, index: number) => {
    if (element) {
      sectionsRef.current[index] = element
    }
  }, [])

  // Event listeners
  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling) return

      // Debounce para evitar múltiplos scrolls
      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          scrollToNext()
        } else {
          scrollToPrevious()
        }
      }, 50)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          scrollToNext()
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          scrollToPrevious()
          break
        case 'Home':
          e.preventDefault()
          scrollToSection(0)
          break
        case 'End':
          e.preventDefault()
          scrollToSection(sectionsRef.current.length - 1)
          break
      }
    }

    const handleScroll = () => {
      if (!isScrolling) {
        updateCurrentSection()
      }
    }

    // Adicionar event listeners
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(wheelTimeout)
    }
  }, [isScrolling, scrollToNext, scrollToPrevious, scrollToSection, updateCurrentSection])

  return {
    currentSection,
    isScrolling,
    scrollToNext,
    scrollToPrevious,
    scrollToSection,
    registerSection,
    totalSections: sectionsRef.current.length
  }
}
