"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"

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
      
      requestAnimationFrame(animateScroll)
    }
  }

  // Handle wheel scroll for section navigation with improved debouncing
  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout | null = null
    
    const handleWheel = (e: WheelEvent) => {
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
    console.log(`Current section: ${currentSection}, Show back to top: ${currentSection > 0}`)
    
    // Update current section based on scroll position
    const updateCurrentSection = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight

    // Find which section is currently in view with improved logic
    let activeSection = 0

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i].id)
      if (section) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        
        // Check if section is in viewport with some tolerance
        if (scrollTop >= sectionTop - windowHeight * 0.3 && scrollTop < sectionBottom - windowHeight * 0.3) {
          activeSection = i
          break
        }
      }
    }

    // Update current section if it changed
    if (activeSection !== currentSection) {
      console.log(`Updating current section from ${currentSection} to ${activeSection}`)
      setCurrentSection(activeSection)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', () => {
      handleScroll()
      updateCurrentSection()
    })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }
    }
  }, [currentSection, isScrolling])

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
    "Linguagens & Frameworks": ["Java", "JavaScript", "Angular", "React", "Node.js", "C", "Python"],
    "Bancos de Dados": ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
    "BI & Análise de Dados": ["Power BI", "Looker Studio", "Excel Avançado"],
    "Ferramentas & Metodologias": ["Git", "GitHub", "Clean Code", "SOLID", "Metodologias Ágeis", "Docker", "MCP"],
    "Low-Code & Automação": ["AppSheet", "PowerApps", "Power Automate"],
    "APIs & Integrações": ["REST APIs", "APIs de Pagamento", "Webhooks", "Validação de Assinatura Hash"]
  }

  const projects = [
    {
      title: "Sistema de Gestão de Qualidade",
      description: "Sistema completo de gestão de qualidade com dashboard interativo e relatórios automatizados.",
      tech: ["React", "Node.js", "PostgreSQL", "Power BI"],
      link: "https://github.com/davidalisson/quality-management-system",
      demo: "https://quality-system-demo.vercel.app",
      image: "/quality-management-dashboard.png"
    },
    {
      title: "Plataforma de Automação de Processos",
      description: "Plataforma de automação de processos industriais com interface moderna e monitoramento em tempo real.",
      tech: ["Angular", "Java", "MongoDB", "Docker"],
      link: "https://github.com/davidalisson/automation-platform",
      demo: "https://automation-platform-demo.vercel.app",
      image: "/automation-platform-interface.jpg"
    },
    {
      title: "Dashboard de Analytics",
      description: "Dashboard de analytics com visualizações interativas e relatórios personalizáveis.",
      tech: ["React", "TypeScript", "Chart.js", "REST API"],
      link: "https://github.com/davidalisson/analytics-dashboard",
      demo: "https://analytics-dashboard-demo.vercel.app",
      image: "/analytics-dashboard-dark-theme.png"
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
      period: "2025 - 2027",
      status: "Em andamento"
    },
    {
      degree: "Técnico em Análise e Controle de Qualidade",
      institution: "SENAI",
      period: "2017 - 2018",
      status: "Concluído"
    },
    {
      degree: "Curso de Inglês",
      institution: "InFlux English",
      period: "Em andamento",
      status: "Em andamento"
    }
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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div>
                <h1 className="text-white font-light text-sm sm:text-lg md:text-xl tracking-wider">
                  DAVID ALISSON SARAPIÃO PEDRO
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-widest">
                  ANALISTA DE TI & DESENVOLVEDOR FULL-STACK
                </p>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
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
                    className={`relative text-xs xl:text-sm tracking-widest font-light transition-all duration-300 group px-2 xl:px-3 py-1 xl:py-2 rounded-lg ${
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
              <button
                onClick={() => scrollToSection(6)}
                className="px-4 xl:px-6 py-2 xl:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-light text-xs xl:text-sm tracking-widest rounded-lg shadow-lg shadow-cyan-400/25"
              >
                CONTATO
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Section Navigation Dots */}
      <div className="navigation-dots fixed right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-[100] space-y-2 sm:space-y-3 lg:space-y-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-300 ${
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
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="space-y-8 sm:space-y-12"
              >
                <div className="space-y-4 sm:space-y-8">
                  <motion.h1
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                    className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-thin tracking-widest text-white"
                    style={{ 
                      textShadow: "0 0 50px rgba(6, 182, 212, 0.5)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    DAVID
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 tracking-widest font-light"
                  >
                    DESENVOLVEDOR FULL-STACK
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                  className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-4"
                >
                  Analista de TI & Desenvolvedor Full-Stack em formação com sólida experiência em automação de processos 
                  e desenvolvimento de sistemas internos. Foco em soluções digitais inteligentes e análise de dados.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <button
                      onClick={() => scrollToSection(6)}
                      className="group px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-light text-xs sm:text-sm tracking-widest flex items-center gap-2 sm:gap-3"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      ENTRAR EM CONTATO
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <button
                      onClick={() => scrollToSection(5)}
                      className="group px-6 sm:px-8 py-3 sm:py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 font-light text-xs sm:text-sm tracking-widest flex items-center gap-2 sm:gap-3"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="pt-8 sm:pt-12 lg:pt-16"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-light">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Disponível para trabalho</span>
                    </div>
                    <div>•</div>
                    <div>Remoto & Presencial</div>
                    <div>•</div>
                    <div>Brasil</div>
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
          <section id="about" className="h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-8 sm:space-y-12"
              >
                <div className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-widest text-white"
                  >
                    SOBRE
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed space-y-4 sm:space-y-6 font-light px-4"
                >
                  <p>
                    Desenvolvedor Full-Stack em formação com sólida experiência em automação de processos e desenvolvimento de sistemas 
                    internos. Atualmente cursando Análise e Desenvolvimento de Sistemas (Anhanguera, 2025-2027), com foco em desenvolvimento 
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
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-6 sm:pt-8"
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
                      className="text-center space-y-3"
                    >
                      <div className="text-4xl font-thin text-cyan-400">{stat.number}</div>
                      <div className="text-gray-400 uppercase tracking-widest text-sm font-light">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section - Full Screen */}
          <section id="skills" className="h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-6 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="text-center space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-widest text-white"
                  >
                    HABILIDADES
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
                  {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <motion.h3
                        whileHover={{ scale: 1.02 }}
                        className="text-lg font-thin text-center uppercase tracking-widest text-cyan-400 mb-4"
                      >
                        {category}
                      </motion.h3>
                      <div className="grid grid-cols-2 gap-2">
                        {items.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 + categoryIndex * 0.2, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.02, 
                              y: -2,
                              boxShadow: "0 5px 15px rgba(6, 182, 212, 0.15)"
                            }}
                            className="border border-white/10 hover:border-cyan-400/50 p-2 text-center transition-all duration-300 group cursor-pointer rounded"
                          >
                            <span className="text-gray-300 group-hover:text-white font-light text-xs tracking-wide">
                              {skill}
                            </span>
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
          <section id="experience" className="h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="text-center space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-thin tracking-widest text-white"
                  >
                    EXPERIÊNCIA
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <div className="space-y-12">
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
                      className="experience-card border border-white/10 p-8 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                          <div className="space-y-2">
                            <motion.h3 
                              className="text-2xl font-thin text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wider"
                              whileHover={{ scale: 1.05 }}
                            >
                              {job.title}
                            </motion.h3>
                            <motion.p 
                              className="text-gray-400 text-lg font-light group-hover:text-gray-300 transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              {job.company}
                            </motion.p>
                          </div>
                          <motion.div 
                            className="text-cyan-400 text-sm uppercase tracking-widest mt-2 md:mt-0 font-light group-hover:text-cyan-300 transition-colors duration-300"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          >
                            {job.period}
                          </motion.div>
                        </div>
                        <motion.p 
                          className="text-gray-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300"
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
          <section id="education" className="h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="text-center space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-thin tracking-widest text-white"
                  >
                    FORMAÇÃO
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.03,
                        y: -6,
                        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)"
                      }}
                      className="education-card border border-white/10 p-6 hover:border-green-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="space-y-2">
                            <motion.h3 
                              className="text-xl font-thin text-white group-hover:text-green-400 transition-colors duration-300 tracking-wider"
                              whileHover={{ scale: 1.05 }}
                            >
                              {edu.degree}
                            </motion.h3>
                            <motion.p 
                              className="text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              {edu.institution}
                            </motion.p>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                            <motion.div 
                              className="text-cyan-400 text-sm uppercase tracking-widest font-light group-hover:text-cyan-300 transition-colors duration-300"
                              whileHover={{ scale: 1.1, rotate: -1 }}
                            >
                              {edu.period}
                            </motion.div>
                            <motion.div 
                              className="text-green-400 text-xs uppercase tracking-widest font-light group-hover:text-green-300 transition-colors duration-300"
                              whileHover={{ scale: 1.1, rotate: 1 }}
                            >
                              {edu.status}
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Hover Indicators */}
                        <div className="absolute top-4 right-4 flex space-x-1">
                          <motion.div
                            className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.5 }}
                          />
                          <motion.div
                            className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                            whileHover={{ scale: 1.5 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section - Full Screen */}
          <section id="projects" className="h-screen flex items-center justify-center relative z-10">
            <div className="container mx-auto px-6 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="text-center space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-thin tracking-widest text-white"
                  >
                    PROJETOS
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -15,
                        scale: 1.05,
                        boxShadow: "0 25px 50px rgba(6, 182, 212, 0.2)"
                      }}
                      className="project-card border border-white/10 hover:border-cyan-400/50 p-6 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                      {/* Project Image */}
                      <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="project-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-thin text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wider">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed font-light text-sm">
                          {project.description}
                        </p>
                        
                        {/* Interactive Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 + index * 0.2 + 0.5 }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                scale: 1.2,
                                y: -3,
                                boxShadow: "0 8px 25px rgba(6, 182, 212, 0.3)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              className="tech-badge px-3 py-1 border border-white/20 text-gray-300 text-xs uppercase tracking-wider font-light cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="project-button flex-1 px-4 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 font-light text-sm tracking-wider text-center group/github"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <svg className="w-4 h-4 group-hover/github:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              CÓDIGO
                            </div>
                          </motion.a>
                          
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="project-button flex-1 px-4 py-2 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider text-center group/demo"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <svg className="w-4 h-4 group-hover/demo:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              DEMONSTRAÇÃO
                            </div>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section - Full Screen */}
          <section id="contact" className="min-h-screen flex flex-col relative z-10">
            {/* Main Contact Content */}
            <div className="flex-1 flex items-center justify-center py-16">
              <div className="container mx-auto px-6 max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                  className="space-y-12"
              >
                <div className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-thin tracking-widest text-white"
                  >
                    CONTATO
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
                >
                  <p>
                    Estou sempre interessado em novos projetos e oportunidades. 
                    Se você tem uma ideia ou precisa de um desenvolvedor para sua equipe, 
                    não hesite em entrar em contato!
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                        href="mailto:david.alisson92@outlook.com"
                      className="contact-button email-button group px-8 py-4 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-widest flex items-center gap-3"
                    >
                      <svg className="contact-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      ENVIAR EMAIL
                    </a>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                        href="https://github.com/davidalss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-button github-button group px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 font-light text-sm tracking-widest flex items-center gap-3"
                    >
                      <svg className="contact-icon w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      VER GITHUB
                    </a>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                        href="https://linkedin.com/in/davidalss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-button linkedin-button group px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 font-light text-sm tracking-widest flex items-center gap-3"
                    >
                      <svg className="contact-icon w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LINKEDIN
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="pt-8"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 uppercase tracking-widest text-sm font-light">
                      Disponível para novas oportunidades
                    </span>
                  </div>
                </motion.div>
              </motion.div>
              </div>
            </div>
            
            {/* Footer simplificado */}
            <footer className="bg-black/50 border-t border-white/20 mt-auto py-8 relative z-20">
              <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center">
                <div>
                  <h3 className="text-white font-light text-sm tracking-wider">
                    DAVID ALISSON SARAPIÃO PEDRO
                  </h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-light">
                    ANALISTA DE TI & DESENVOLVEDOR FULL-STACK
                  </p>
                </div>
              </div>
                  
                  <div className="flex items-center space-x-6">
                    <a
                      href="mailto:david.alisson92@outlook.com"
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-light"
                    >
                      david.alisson92@outlook.com
                    </a>
                    <div className="flex space-x-3">
                      <a
                        href="https://github.com/davidalss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      <a
                        href="https://linkedin.com/in/davidalss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 mt-6 pt-4 text-center">
                  <p className="text-gray-400 text-xs font-light">
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
        className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-black/50 border border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 transition-all duration-300 flex items-center justify-center backdrop-blur-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>


    </div>
  )
}
