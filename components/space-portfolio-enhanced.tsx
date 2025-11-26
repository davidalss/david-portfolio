"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb,
  SiPowers,
  SiGit,
  SiGithub,
  SiAngular,
  SiSupabase,
  SiSpring,
  SiTypescript,
  SiDocker
} from "react-icons/si"
import { FaJava, FaMicrosoft } from "react-icons/fa"

// Função auxiliar para obter ícone de tecnologia
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase()
  const iconProps = { size: 18, className: "text-cyan-400" }
  
  if (techLower.includes('react')) return <SiReact {...iconProps} />
  if (techLower.includes('javascript') || techLower === 'js') return <SiJavascript {...iconProps} />
  if (techLower.includes('typescript') || techLower === 'ts') return <SiTypescript {...iconProps} />
  if (techLower.includes('java')) return <FaJava {...iconProps} />
  if (techLower.includes('node')) return <SiNodedotjs {...iconProps} />
  if (techLower.includes('python')) return <SiPython {...iconProps} />
  if (techLower.includes('postgresql') || techLower.includes('postgres')) return <SiPostgresql {...iconProps} />
  if (techLower.includes('mysql')) return <SiMysql {...iconProps} />
  if (techLower.includes('mongodb') || techLower.includes('mongo')) return <SiMongodb {...iconProps} />
  if (techLower.includes('power bi') || techLower.includes('powerbi') || techLower.includes('power')) return <SiPowers {...iconProps} />
  if (techLower.includes('git') && !techLower.includes('github')) return <SiGit {...iconProps} />
  if (techLower.includes('github')) return <SiGithub {...iconProps} />
  if (techLower.includes('angular')) return <SiAngular {...iconProps} />
  if (techLower.includes('supabase')) return <SiSupabase {...iconProps} />
  if (techLower.includes('spring')) return <SiSpring {...iconProps} />
  if (techLower.includes('docker')) return <SiDocker {...iconProps} />
  if (techLower.includes('microsoft') || techLower.includes('powerapps') || techLower.includes('power automate') || techLower.includes('sharepoint')) return <FaMicrosoft {...iconProps} />
  
  return null
}

// Componente de carrossel de projetos
function ProjectsCarousel({ projects }: { projects: Array<{
  title: string
  description: string
  tech: string[]
  link: string
  demo: string
  images?: string[]
  image?: string
  type?: string
  features?: string[]
}> }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevProject()
      if (e.key === 'ArrowRight') nextProject()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const currentProject = projects[currentIndex]

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative w-full min-h-0">
      {/* Navigation Buttons */}
      {projects.length > 1 && (
        <>
          <button
            onClick={prevProject}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 opacity-80 hover:opacity-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Projeto anterior"
            type="button"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextProject}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 opacity-80 hover:opacity-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Próximo projeto"
            type="button"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Project Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full max-w-4xl mx-auto h-full flex flex-col"
        >
          <div className="border border-white/10 hover:border-cyan-400/50 p-3 sm:p-4 md:p-5 transition-all duration-300 relative overflow-hidden bg-black/20 backdrop-blur-sm rounded-lg flex flex-col flex-1 min-h-0">
            {/* Project Type Badge */}
            {currentProject.type && (
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-light px-2 py-1 bg-cyan-400/20 border border-cyan-400/50 text-cyan-400 rounded">
                  {currentProject.type}
                </span>
              </div>
            )}

            {/* Project Image or Carousel */}
            <div className="relative mb-2 sm:mb-3 h-32 sm:h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
              {currentProject.images ? (
                <ImageCarousel 
                  images={currentProject.images} 
                  title={currentProject.title}
                />
              ) : (
                <img 
                  src={currentProject.image || "/placeholder.svg"} 
                  alt={currentProject.title}
                  className="project-image w-full h-full object-cover transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                <h3 className="text-base sm:text-lg md:text-xl font-thin text-white transition-colors duration-300 tracking-wide line-clamp-2">
                  {currentProject.title}
                </h3>
              </div>
            </div>

            <div className="flex-1 flex flex-col min-h-0 space-y-2 sm:space-y-3">
              {/* Descrição */}
              <div className="flex-shrink-0">
                <p className="text-gray-300 leading-snug font-light text-xs sm:text-sm md:text-base line-clamp-3">
                  {currentProject.description}
                </p>
              </div>
              
              {/* Tecnologias - Máximo 7 por linha */}
              <div className="flex-shrink-0">
                <p className="text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest font-light mb-2">
                  Tecnologias:
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-1.5 sm:gap-2">
                  {currentProject.tech.map((tech: string, techIndex: number) => {
                    const icon = getTechIcon(tech)
                    return (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.03 }}
                        whileHover={{ 
                          scale: 1.08,
                          y: -1,
                          boxShadow: "0 4px 12px rgba(6, 182, 212, 0.25)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="tech-badge flex flex-col items-center justify-center gap-0.5 px-1.5 sm:px-2 py-1 sm:py-1.5 border border-white/20 text-gray-300 text-[9px] sm:text-[10px] uppercase tracking-wider font-light cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 text-center"
                        title={tech}
                      >
                        {icon && <span className="flex-shrink-0 text-[10px] sm:text-xs">{icon}</span>}
                        <span className="truncate w-full text-center leading-tight">{tech}</span>
                      </motion.span>
                    )
                  })}
                </div>
              </div>
              
              {/* Features List */}
              {currentProject.features && currentProject.features.length > 0 && (
                <div className="flex-shrink-0 space-y-2">
                  <p className="text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest font-light">
                    Funcionalidades:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {currentProject.features.map((feature: string, idx: number) => (
                      <li key={idx} className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-light flex items-start gap-1.5">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-snug line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              {currentProject.link !== "#" && (
                <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-white/10 flex-shrink-0">
                  <motion.a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="project-button flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 font-light text-xs sm:text-sm tracking-wider text-center group/github"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/github:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>CÓDIGO</span>
                    </div>
                  </motion.a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      {projects.length > 1 && (
        <div className="flex gap-1.5 sm:gap-2 items-center justify-center mt-2 sm:mt-3 flex-shrink-0">
          {projects.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 sm:w-8 bg-cyan-400' 
                  : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
              type="button"
            />
          ))}
          <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-gray-400">
            {currentIndex + 1} / {projects.length}
          </span>
        </div>
      )}
    </div>
  )
}

// Componente de carrossel de imagens
function ImageCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full h-full group">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${title} - Screenshot ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ))}
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-black/70 hover:bg-black/90 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagem anterior"
            type="button"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-black/70 hover:bg-black/90 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Próxima imagem"
            type="button"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex gap-1.5 pointer-events-none">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Componente de animação cyberpunk para o nome
function CyberpunkName({ name }: { name: string }) {
  const [displayText, setDisplayText] = useState("")
  const [fontIndex, setFontIndex] = useState(0)
  const [isRevealing, setIsRevealing] = useState(true)
  
  const cyberpunkChars = "01!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const fonts = [
    "font-mono",
    "font-thin",
    "font-light",
    "font-normal",
    "font-medium",
    "font-bold"
  ]

  useEffect(() => {
    // Fase 1: Revelação com caracteres aleatórios
    let currentIndex = 0
    let glitchCount = 0
    const revealInterval = setInterval(() => {
      if (currentIndex < name.length) {
        // Cria texto com caracteres aleatórios para letras não reveladas
        const text = name.split("").map((char, i) => {
          if (i < currentIndex) {
            return char // Letras já reveladas
          } else if (i === currentIndex) {
            // Mostra caracteres aleatórios antes de revelar
            glitchCount++
            if (glitchCount >= 3) {
              // Após 3 glitches, revela a letra
              currentIndex++
              glitchCount = 0
              return char
            }
            return cyberpunkChars[Math.floor(Math.random() * cyberpunkChars.length)]
          } else {
            return " "
          }
        }).join("")
        
        setDisplayText(text)
      } else {
        // Fase 2: Nome completo revelado, agora troca fontes
        setDisplayText(name)
        setIsRevealing(false)
        clearInterval(revealInterval)
      }
    }, 100) // Atualiza a cada 100ms para efeito de glitch rápido

    return () => clearInterval(revealInterval)
  }, [name])

  useEffect(() => {
    if (!isRevealing) {
      // Troca de fontes continuamente após revelação
      const fontInterval = setInterval(() => {
        setFontIndex((prev) => (prev + 1) % fonts.length)
      }, 2500) // Troca a cada 2.5 segundos
      
      return () => clearInterval(fontInterval)
    }
  }, [isRevealing, fonts.length])

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      className={`text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] ${fonts[fontIndex]} tracking-widest text-white`}
      style={{ 
        textShadow: isRevealing
          ? "0 0 30px rgba(6, 182, 212, 0.9), 0 0 60px rgba(6, 182, 212, 0.6), 0 0 90px rgba(6, 182, 212, 0.3), 0 0 120px rgba(6, 182, 212, 0.1)"
          : "0 0 50px rgba(6, 182, 212, 0.5), 0 0 100px rgba(6, 182, 212, 0.2)",
        transformStyle: "preserve-3d",
        fontFamily: isRevealing ? "monospace" : "inherit",
        letterSpacing: isRevealing ? "0.15em" : "0.1em",
        transition: "all 0.3s ease-in-out"
      }}
    >
      {displayText || name}
    </motion.h1>
  )
}

export function SpacePortfolioEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Removed 3D transforms for better performance and stability

  // Parallax effects for space elements
  const starsY1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const starsY2 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const nebulaY = useTransform(scrollYProgress, [0, 1], [0, -200])

  const sections = [
    { id: 'hero', title: 'Início' },
    { id: 'about', title: 'Sobre' },
    { id: 'skills', title: 'Habilidades' },
    { id: 'experience', title: 'Experiência' },
    { id: 'education', title: 'Formação' },
    { id: 'projects', title: 'Projetos' },
    { id: 'contact', title: 'Contato' }
  ]

  // Enhanced smooth scroll to section
  const scrollToSection = (sectionIndex: number) => {
    if (isScrolling) return
    
    setIsScrolling(true)
    setCurrentSection(sectionIndex) // Update immediately for visual feedback
    
    const targetSection = document.getElementById(sections[sectionIndex].id)
    if (targetSection) {
      const startPosition = window.pageYOffset
      const targetPosition = targetSection.offsetTop
      const distance = targetPosition - startPosition
      const duration = Math.min(Math.abs(distance) * 0.6, 1000) // Max 1s, faster response
      let startTime: number | null = null
      
      // Enhanced easing function for ultra-smooth animation
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }
      
      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)
        
        window.scrollTo(0, startPosition + distance * easedProgress)
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        } else {
          setIsScrolling(false)
        }
      }
      
      // Safety timeout para garantir que isScrolling seja resetado
      setTimeout(() => {
        setIsScrolling(false)
      }, duration + 500)
      
      requestAnimationFrame(animateScroll)
    }
  }

  // Handle wheel scroll for section navigation with improved debouncing
  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout | null = null
    
    const handleWheel = (e: WheelEvent) => {
      
      // Não interferir se estiver interagindo com elementos interativos
      const target = e.target as HTMLElement
      if (target.closest('button') || 
          target.closest('.project-button') || 
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]')) {
        return
      }
      
      if (isScrolling) {
        e.preventDefault()
        return
      }

      e.preventDefault()
      
      // Clear existing timeout
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }
      
      // Debounce wheel events for smoother experience
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 50 && currentSection < sections.length - 1) {
          // Scroll down - increased threshold for better control
          scrollToSection(currentSection + 1)
        } else if (e.deltaY < -50 && currentSection > 0) {
          // Scroll up - increased threshold for better control
          scrollToSection(currentSection - 1)
        }
      }, 50) // Small delay for debouncing
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return
      
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        e.preventDefault()
        scrollToSection(currentSection + 1)
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault()
        scrollToSection(currentSection - 1)
      }
    }

    // Show/hide back to top button
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowBackToTop(scrollTop > 500)
    }
    
    // Also update back to top visibility when section changes
    setShowBackToTop(currentSection > 0)
    
    // Update current section based on scroll position
    const updateCurrentSection = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const scrollMiddle = scrollTop + windowHeight / 2

      // Find which section is currently in view with improved logic
      let activeSection = 0
      let closestSection = 0
      let closestDistance = Infinity

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          const sectionMiddle = sectionTop + section.offsetHeight / 2
          
          // Check if section is in viewport
          if (scrollMiddle >= sectionTop && scrollMiddle <= sectionBottom) {
            activeSection = i
            break
          }
          
          // Track closest section for better detection
          const distance = Math.abs(scrollMiddle - sectionMiddle)
          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = i
          }
        }
      }

      // Use active section if found, otherwise use closest
      const newSection = activeSection !== 0 ? activeSection : closestSection

      // Update current section if it changed
      if (newSection !== currentSection) {
        setCurrentSection(newSection)
      }
    }

    // Throttle para melhor performance
    let scrollTimeout: NodeJS.Timeout | null = null
    const throttledUpdate = () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        updateCurrentSection()
        scrollTimeout = null
      }, 50) // Atualiza a cada 50ms
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', () => {
      handleScroll()
      throttledUpdate()
    }, { passive: true })
    
    // Também atualiza durante animações de scroll
    const updateInterval = setInterval(() => {
      if (!isScrolling) {
        updateCurrentSection()
      }
    }, 100)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      clearInterval(updateInterval)
    }
  }, [currentSection, isScrolling, sections.length])

  // Enhanced back to top function
  const scrollToTop = () => {
    if (isScrolling) return
    
    setIsScrolling(true)
    const startPosition = window.pageYOffset
    const duration = Math.min(startPosition * 0.6, 1000)
    let startTime: number | null = null
    
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }
    
    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)
      
      window.scrollTo(0, startPosition * (1 - easedProgress))
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        setIsScrolling(false)
        setCurrentSection(0)
      }
    }
    
    requestAnimationFrame(animateScroll)
  }

  const skills = {
    "Linguagens & Frameworks": ["Java", "JavaScript", "Angular", "React", "Node.js", "C", "Python", "Spring Boot"],
    "Bancos de Dados": ["SQL", "MySQL", "PostgreSQL", "Supabase"],
    "BI & Análise de Dados": ["Power BI", "Looker Studio", "Excel Avançado"],
    "Ferramentas & Metodologias": ["Git", "GitHub", "Clean Code", "SOLID", "Metodologias Ágeis", "Docker", "MCP"],
    "Low-Code & Automação": ["AppSheet", "PowerApps", "Power Automate"],
    "APIs & Integrações": ["REST APIs", "APIs de Pagamento", "Webhooks"]
  }

  const projects = [
    {
      title: "Sistema de Controle de Qualidade - WAP Industrial",
      description: "Sistema completo para controle de qualidade e metrologia industrial desenvolvido com React 18 + TypeScript no frontend e Spring Boot 3 + Java 21 no backend. Interface moderna com Vite, Tailwind CSS, React Router e Axios. API REST com Spring Data JPA, Spring Security, JWT e PostgreSQL via Supabase. Containerizado com Docker e Docker Compose.",
      tech: [
        "React", 
        "TypeScript", 
        "Vite", 
        "Tailwind CSS", 
        "Java 21", 
        "Spring Boot 3", 
        "Spring Data JPA", 
        "Spring Security", 
        "JWT", 
        "PostgreSQL", 
        "Supabase", 
        "Docker",
        "Maven",
        "Axios", 
        "Recharts", 
        "jsPDF", 
        "XLSX",
        "OpenPDF",
        "Lombok"
      ],
      link: "#",
      demo: "https://qualidade-wap.onrender.com/",
      images: [
        "/scq-screenshot-1.png",
        "/scq-screenshot-2.png",
        "/scq-screenshot-3.png",
        "/scq-screenshot-4.png",
        "/scq-screenshot-5.png"
      ],
      type: "Full-Stack",
      features: [
        "Sistema de Inspeção com cálculo AQL automático",
        "Planos de Inspeção com especificações técnicas",
        "Gestão de Equipamentos e Calibrações com alertas",
        "RNC/RAC/RAP e Sistema 5W2H para análise de causa raiz",
        "Auditorias de qualidade com acompanhamento",
        "Descarte de Produtos com anexos e relatórios",
        "Controle de Terceiros com dashboard de métricas",
        "Relatórios gerenciais QMS com exportação PDF/Excel",
        "Sistema de Notificações em tempo real com navegação direta",
        "Autenticação JWT com controle de permissões por role e módulo"
      ]
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto será adicionada aqui.",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#",
      demo: "#",
      image: "/placeholder.svg",
      type: "Web App"
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto será adicionada aqui.",
      tech: ["Java", "Spring Boot", "MySQL"],
      link: "#",
      demo: "#",
      image: "/placeholder.svg",
      type: "Backend"
    }
  ]

  const experience = [
    {
      title: "Analista de Qualidade - Foco em Automação e Sistemas",
      company: "FRESNOMAQ (WAP & WAAW by Alok)",
      period: "Setembro 2023 - Atual",
      description: "Desenvolvimento de aplicativos e soluções de automação para processos de qualidade. Criação de dashboards e ferramentas digitais para monitoramento e análise de dados. Desenvolvimento de sistemas internos para gestão de não conformidades e auditorias. Implementação de soluções low-code (AppSheet, PowerApps) para otimização de processos."
    },
    {
      title: "Inspetor de Qualidade II - Sistemas e Automação",
      company: "AGP GLASS",
      period: "Janeiro 2021 - Janeiro 2023",
      description: "Trabalho com sistemas de gestão da qualidade (SAP, SAGA, Sênior). Desenvolvimento de relatórios e indicadores de performance automatizados. Interpretação de desenhos técnicos e medições de alta precisão. Suporte a auditorias internas e inspeções de linha de produção."
    }
  ]

  const education = [
    {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Anhanguera Educacional",
      period: "2025-2027",
      status: "Em andamento"
    },
    {
      degree: "Técnico em Análise e Controle de Qualidade",
      institution: "SENAI",
      period: "2017-2018",
      status: "Concluído"
    },
    {
      degree: "Curso de Inglês",
      institution: "InFlux English",
      period: "Em andamento",
      status: "Em andamento"
    }
  ]

  const courses = [
    {
      name: "Power BI",
      platform: "Udemy",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "Python",
      platform: "Udemy",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "SQL para Análise de Dados",
      platform: "Udemy",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "Excel Avançado",
      platform: "Santander",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "Bootcamp Java",
      platform: "Santander",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "SOLID e Clean Code",
      platform: "DIO",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "Git e GitHub",
      platform: "DIO",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "Estatística Aplicada",
      platform: "ENAP",
      year: "Concluído",
      status: "Concluído"
    },
    {
      name: "LGPD",
      platform: "Bradesco",
      year: "Concluído",
      status: "Concluído"
    }
  ]

  const languages = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
    { name: "Espanhol", level: "Intermediário" }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Space Background */}
      <div className="fixed inset-0 z-0">
        {/* Stars Layer 1 */}
        <motion.div
          style={{ y: starsY1 }}
          className="absolute inset-0 opacity-30"
        >
          {[...Array(50)].map((_, i) => {
            // Usar valores fixos para evitar problemas de hidratação
            const positions = [
              { left: 10, top: 20, delay: 1, duration: 2 },
              { left: 25, top: 35, delay: 1.5, duration: 2.5 },
              { left: 40, top: 15, delay: 2, duration: 3 },
              { left: 60, top: 45, delay: 0.5, duration: 2.2 },
              { left: 80, top: 25, delay: 1.8, duration: 2.8 },
              { left: 15, top: 60, delay: 2.2, duration: 2.1 },
              { left: 35, top: 70, delay: 0.8, duration: 2.6 },
              { left: 55, top: 80, delay: 1.2, duration: 2.3 },
              { left: 75, top: 55, delay: 1.7, duration: 2.9 },
              { left: 90, top: 40, delay: 0.3, duration: 2.4 }
            ];
            const pos = positions[i % positions.length];
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  animationDelay: `${pos.delay}s`,
                  animationDuration: `${pos.duration}s`
                }}
              />
            );
          })}
        </motion.div>

        {/* Stars Layer 2 */}
        <motion.div
          style={{ y: starsY2 }}
          className="absolute inset-0 opacity-20"
        >
          {[...Array(30)].map((_, i) => {
            // Usar valores fixos para evitar problemas de hidratação
            const positions = [
              { left: 5, top: 10, delay: 0.5, duration: 3 },
              { left: 20, top: 30, delay: 1.2, duration: 3.5 },
              { left: 45, top: 5, delay: 2.5, duration: 4 },
              { left: 65, top: 50, delay: 0.8, duration: 3.2 },
              { left: 85, top: 15, delay: 1.9, duration: 3.8 },
              { left: 12, top: 65, delay: 2.8, duration: 3.1 },
              { left: 30, top: 75, delay: 1.1, duration: 3.6 },
              { left: 50, top: 85, delay: 1.6, duration: 3.3 },
              { left: 70, top: 60, delay: 2.1, duration: 3.9 },
              { left: 95, top: 35, delay: 0.4, duration: 3.4 }
            ];
            const pos = positions[i % positions.length];
            
            return (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  animationDelay: `${pos.delay}s`,
                  animationDuration: `${pos.duration}s`
                }}
              />
            );
          })}
        </motion.div>

        {/* Nebula Effects */}
        <motion.div
          style={{ y: nebulaY }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
        </motion.div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-lg border-b border-white/20"
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div>
                <h1 className="text-white font-light text-xs sm:text-sm md:text-lg lg:text-xl tracking-wider">
                  DAVID ALISSON
                </h1>
                <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm uppercase tracking-widest hidden sm:block">
                  ANALISTA DE TI & DESENVOLVEDOR FULL-STACK
                </p>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 2xl:space-x-8">
              {sections.slice(1).map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  <button
                    onClick={() => scrollToSection(index + 1)}
                    className={`relative text-[10px] xl:text-xs 2xl:text-sm tracking-widest font-light transition-all duration-300 group px-1.5 xl:px-2 2xl:px-3 py-1 xl:py-1.5 2xl:py-2 rounded-lg ${
                      currentSection === index + 1 
                        ? 'text-cyan-400 bg-cyan-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.title.toUpperCase()}
                    {currentSection === index + 1 && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              className="hidden lg:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/Curriculo_David_Alisson_TI.pdf"
                download="Curriculo_David_Alisson_TI.pdf"
                className="px-3 xl:px-4 2xl:px-6 py-1.5 xl:py-2 2xl:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-light text-[10px] xl:text-xs 2xl:text-sm tracking-widest rounded-lg shadow-lg shadow-cyan-400/25 inline-block"
              >
                CURRÍCULO
              </a>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Section Navigation Dots */}
      <div className="navigation-dots fixed right-1.5 sm:right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-[100] space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full border-2 transition-all duration-300 min-w-[10px] min-h-[10px] ${
              currentSection === index 
                ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50 scale-110' 
                : 'bg-transparent border-white/40 hover:border-cyan-400/70 hover:bg-white/20 hover:scale-105'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            title={`Ir para ${section.title}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          />
        ))}
      </div>
      
      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative z-10"
      >
        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section - Full Screen */}
          <section id="hero" className="h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="space-y-6 sm:space-y-8 md:space-y-12"
              >
                <div className="space-y-3 sm:space-y-4 md:space-y-8">
                  <CyberpunkName name="DAVID" />
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 tracking-widest font-light"
                  >
                    DESENVOLVEDOR FULL-STACK
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-3 sm:px-4"
                >
                  Analista de TI & Desenvolvedor Full-Stack em formação com sólida experiência em automação de processos 
                  e desenvolvimento de sistemas internos. Foco em soluções digitais inteligentes e análise de dados.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 pt-4 sm:pt-6 md:pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full sm:w-auto"
                  >
                    <button
                      onClick={() => scrollToSection(6)}
                      className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-light text-[11px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 sm:gap-3 min-h-[44px]"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      ENTRAR EM CONTATO
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full sm:w-auto"
                  >
                    <button
                      onClick={() => scrollToSection(5)}
                      className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 font-light text-[11px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 sm:gap-3 min-h-[44px]"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      VER PROJETOS
                    </button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="pt-6 sm:pt-8 md:pt-12 lg:pt-16"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-1.5 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-8 text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest font-light px-3">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Disponível para trabalho</span>
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div>Remoto & Presencial</div>
                    <div className="hidden sm:block">•</div>
                    <div>CURITIBA - BRASIL</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/50 rounded-full mt-2"
                ></motion.div>
              </div>
            </motion.div>
          </section>

          {/* About Section - Full Screen */}
          <section id="about" className="min-h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-4xl mx-auto text-center py-8 sm:py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8 md:space-y-12"
              >
                <div className="space-y-4 sm:space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin tracking-widest text-white"
                  >
                    SOBRE
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-24 sm:w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed space-y-3 sm:space-y-4 md:space-y-6 font-light px-3 sm:px-4"
                >
                  <p>
                    Desenvolvedor Full-Stack em formação com sólida experiência em automação de processos e desenvolvimento de sistemas 
                    internos. Formação prevista para 2027, com 2 anos de experiência/estudo, foco em desenvolvimento 
                    web, análise de dados e soluções digitais inteligentes.
                  </p>
                  <p>
                    Experiência em criação de aplicativos, dashboards e ferramentas de automação. Trabalho com sistemas de gestão da qualidade, 
                    desenvolvimento de relatórios automatizados e implementação de soluções low-code para otimização de processos.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-4 sm:pt-6 md:pt-8"
                >
                  {[
                    { number: "3+", label: "Anos de Experiência" },
                    { number: "15+", label: "Projetos Concluídos" },
                    { number: "20+", label: "Tecnologias" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 1, duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="text-center space-y-2 sm:space-y-3"
                    >
                      <div className="text-3xl sm:text-4xl font-thin text-cyan-400">{stat.number}</div>
                      <div className="text-gray-400 uppercase tracking-widest text-xs sm:text-sm font-light px-2">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section - Full Screen */}
          <section id="skills" className="min-h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl mx-auto py-8 sm:py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-8 sm:space-y-12 md:space-y-16"
              >
                <div className="text-center space-y-4 sm:space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin tracking-widest text-white"
                  >
                    HABILIDADES
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-24 sm:w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                {/* Introdução Profissional */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto mb-8 sm:mb-12 text-center"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed font-light px-3 sm:px-4"
                  >
                    Domínio em tecnologias modernas para desenvolvimento full-stack, 
                    automação de processos e análise de dados. 
                    <span className="text-cyan-400"> Foco em soluções escaláveis e eficientes.</span>
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
                  {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4 relative"
                    >
                      {/* Efeito de brilho no card da categoria */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      
                      <motion.h3
                        whileHover={{ 
                          scale: 1.02
                        }}
                        transition={{ 
                          duration: 0.2,
                          ease: "easeOut"
                        }}
                        className="text-sm sm:text-base md:text-lg font-thin text-center uppercase tracking-widest text-cyan-400 mb-3 sm:mb-4 relative transition-all duration-200 hover:text-cyan-300 px-2"
                        style={{
                          textShadow: "0 0 10px rgba(6, 182, 212, 0.3)"
                        }}
                      >
                        {category}
                      </motion.h3>
                      
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                        {items.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            transition={{ delay: index * 0.05 + categoryIndex * 0.2, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.08, 
                              y: -4,
                              rotateY: 5,
                              boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)"
                            }}
                            className="relative border border-white/10 hover:border-cyan-400/70 p-2 sm:p-2.5 md:p-3 text-center transition-all duration-300 group cursor-pointer rounded overflow-hidden bg-black/20 backdrop-blur-sm min-h-[44px] flex items-center justify-center"
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {/* Efeito de brilho no hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Efeito de partículas no hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                  initial={{ 
                                    x: "50%", 
                                    y: "50%", 
                                    scale: 0,
                                    opacity: 1
                                  }}
                                  animate={{
                                    x: `${Math.random() * 100}%`,
                                    y: `${Math.random() * 100}%`,
                                    scale: [0, 1, 0],
                                    opacity: [1, 1, 0]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeOut"
                                  }}
                                />
                              ))}
                            </div>
                            
                            <span className="relative z-10 text-gray-300 group-hover:text-cyan-400 font-light text-[10px] sm:text-xs tracking-wide transition-colors duration-300 break-words text-center">
                              {skill}
                            </span>
                            
                            {/* Linha de scan no hover */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                              initial={{ x: "-100%", opacity: 0 }}
                              whileHover={{ x: "200%", opacity: 1 }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience Section - Full Screen */}
          <section id="experience" className="min-h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-4xl mx-auto py-8 sm:py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-8 sm:space-y-12 md:space-y-16"
              >
                <div className="text-center space-y-4 sm:space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin tracking-widest text-white"
                  >
                    EXPERIÊNCIA
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-24 sm:w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <div className="space-y-6 sm:space-y-8 md:space-y-12">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3, duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.03,
                        y: -8,
                        boxShadow: "0 25px 50px rgba(6, 182, 212, 0.2)"
                      }}
                      className="experience-card border border-white/10 p-4 sm:p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                          <div className="space-y-1.5 sm:space-y-2">
                            <motion.h3 
                              className="text-lg sm:text-xl md:text-2xl font-thin text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wider"
                              whileHover={{ scale: 1.05 }}
                            >
                              {job.title}
                            </motion.h3>
                            <motion.p 
                              className="text-gray-400 text-sm sm:text-base md:text-lg font-light group-hover:text-gray-300 transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              {job.company}
                            </motion.p>
                          </div>
                          <motion.div 
                            className="text-cyan-400 text-xs sm:text-sm uppercase tracking-widest mt-2 md:mt-0 font-light group-hover:text-cyan-300 transition-colors duration-300"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          >
                            {job.period}
                          </motion.div>
                        </div>
                        <motion.p 
                          className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-light group-hover:text-white transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          {job.description}
                        </motion.p>
                        
                        {/* Hover Indicator */}
                        <motion.div
                          className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Education Section - Full Screen */}
          <section id="education" className="min-h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl mx-auto w-full py-8 sm:py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-widest text-white"
                  >
                    FORMAÇÃO
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-20 sm:w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                {/* Layout em duas colunas no desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Coluna Esquerda: Formações e Idiomas */}
                  <div className="space-y-4 sm:space-y-5">
                    {/* Formações Acadêmicas */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg sm:text-xl font-thin text-cyan-400 mb-3 sm:mb-4 uppercase tracking-widest">
                        Formações Acadêmicas
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {education.map((edu, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.01,
                              y: -2,
                              boxShadow: "0 8px 20px rgba(34, 197, 94, 0.15)"
                            }}
                            className="border border-white/10 p-3 sm:p-4 hover:border-green-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden bg-black/20 backdrop-blur-sm"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                              <h4 className="text-sm sm:text-base font-thin text-white group-hover:text-green-400 transition-colors duration-300 mb-1">
                                {edu.degree}
                              </h4>
                              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                                <span className="text-gray-400">{edu.institution}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-cyan-400">{edu.period}</span>
                                <span className="ml-auto text-green-400 text-xs px-2 py-0.5 border border-green-400/30 bg-green-400/10 rounded">
                                  {edu.status}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Idiomas */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg sm:text-xl font-thin text-cyan-400 mb-3 sm:mb-4 uppercase tracking-widest">
                        Idiomas
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {languages.map((lang, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.03,
                              y: -2,
                              boxShadow: "0 6px 15px rgba(6, 182, 212, 0.2)"
                            }}
                            className="border border-white/10 p-2 sm:p-3 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden bg-black/20 backdrop-blur-sm text-center min-w-[90px] sm:min-w-[100px]"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                              <h4 className="text-xs sm:text-sm font-thin text-white group-hover:text-cyan-400 transition-colors duration-300 mb-0.5">
                                {lang.name}
                              </h4>
                              <p className="text-cyan-400 text-[10px] sm:text-xs uppercase tracking-widest font-light">
                                {lang.level}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Coluna Direita: Cursos */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-5"
                  >
                    <h3 className="text-lg sm:text-xl font-thin text-cyan-400 mb-3 sm:mb-4 uppercase tracking-widest">
                      Cursos e Certificações
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3">
                      {courses.map((course, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 + index * 0.05, duration: 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.02,
                            y: -2,
                            boxShadow: "0 8px 18px rgba(6, 182, 212, 0.15)"
                          }}
                          className="border border-white/10 p-2.5 sm:p-3 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden bg-black/20 backdrop-blur-sm"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <h4 className="text-xs sm:text-sm font-thin text-white group-hover:text-cyan-400 transition-colors duration-300 flex-1 line-clamp-2">
                                {course.name}
                              </h4>
                              <span className="text-green-400 text-[9px] sm:text-[10px] uppercase tracking-widest font-light px-1.5 py-0.5 border border-green-400/30 bg-green-400/10 rounded flex-shrink-0">
                                {course.status}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] sm:text-xs gap-2">
                              <p className="text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300 truncate">
                                {course.platform}
                              </p>
                              <p className="text-cyan-400 text-[9px] sm:text-[10px] uppercase tracking-widest font-light flex-shrink-0">
                                {course.year}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section - Full Screen with Carousel */}
          <section id="projects" className="min-h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-5xl w-full flex flex-col py-8 sm:py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-2 sm:space-y-3 flex-shrink-0"
              >
                <div className="text-center space-y-1.5 sm:space-y-2">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin tracking-widest text-white"
                  >
                    PROJETOS
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Projects Carousel */}
              <ProjectsCarousel projects={projects} />
            </div>
          </section>

          {/* Contact Section - Full Screen */}
          <section id="contact" className="min-h-screen flex flex-col relative z-10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-5xl w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full space-y-4 sm:space-y-6 md:space-y-8 flex-1 flex flex-col justify-center"
              >
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin tracking-widest text-white"
                  >
                    CONTATO
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-20 sm:w-24 md:w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {/* Email Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="border border-white/10 hover:border-cyan-400/50 p-3 sm:p-4 md:p-6 bg-black/20 backdrop-blur-sm rounded-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-cyan-400 uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-light mb-1.5 sm:mb-2">Email</h3>
                        <a
                          href="mailto:david.alisson92@outlook.com"
                          className="text-white hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm md:text-base font-light break-all"
                        >
                          david.alisson92@outlook.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="border border-white/10 hover:border-cyan-400/50 p-3 sm:p-4 md:p-6 bg-black/20 backdrop-blur-sm rounded-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-cyan-400 uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-light mb-1.5 sm:mb-2">Localização</h3>
                        <p className="text-white text-xs sm:text-sm md:text-base font-light">
                          Curitiba - PR, Brasil
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links & Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full"
                >
                  <motion.a
                    href="mailto:david.alisson92@outlook.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-light text-[11px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 sm:gap-3 rounded-lg min-h-[44px]"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    ENVIAR EMAIL
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/davidalss"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 font-light text-[11px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 sm:gap-3 rounded-lg min-h-[44px]"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GITHUB
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/davidalss"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 font-light text-[11px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 sm:gap-3 rounded-lg min-h-[44px]"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LINKEDIN
                  </motion.a>

                  <motion.a
                    href="/Curriculo_David_Alisson_TI.pdf"
                    download="Curriculo_David_Alisson_TI.pdf"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-light text-[11px] sm:text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 sm:gap-3 rounded-lg shadow-lg shadow-cyan-400/25 min-h-[44px]"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    BAIXAR CV
                  </motion.a>
                </motion.div>

                {/* Availability Status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-2 pt-4"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 uppercase tracking-widest text-xs sm:text-sm font-light">
                    Disponível para novas oportunidades
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Footer dentro da seção de contato */}
            <footer className="mt-auto border-t border-white/20 pt-4 sm:pt-6 pb-3 sm:pb-4 relative z-10">
              <div className="container mx-auto px-3 sm:px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 sm:space-y-4 md:space-y-0">
                  <div className="flex items-center text-center md:text-left">
                    <div>
                      <h3 className="text-white font-light text-xs sm:text-sm tracking-wider">
                        DAVID ALISSON
                      </h3>
                      <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-light">
                        ANALISTA DE TI & DESENVOLVEDOR FULL-STACK
                      </p>
                    </div>
                  </div>
                      
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
                    <a
                      href="mailto:david.alisson92@outlook.com"
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-light break-all text-center"
                    >
                      david.alisson92@outlook.com
                    </a>
                    <div className="flex space-x-2 sm:space-x-3">
                      <a
                        href="https://github.com/davidalss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center rounded min-w-[44px] min-h-[44px]"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/davidalss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center rounded min-w-[44px] min-h-[44px]"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 mt-4 sm:mt-6 pt-3 sm:pt-4 text-center">
                  <p className="text-gray-400 text-[10px] sm:text-xs font-light">
                    © 2025 David Alisson. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-black/50 border border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 transition-all duration-300 flex items-center justify-center backdrop-blur-md rounded-full min-w-[44px] min-h-[44px]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Voltar ao topo"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>


    </div>
  )
}
