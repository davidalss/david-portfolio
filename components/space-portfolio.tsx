"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"

export function SpacePortfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Space-themed transforms
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -3])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.01, 1])

  // Smooth spring animations
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  // Parallax effects for space elements
  const starsY1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const starsY2 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const nebulaY = useTransform(scrollYProgress, [0, 1], [0, -200])

  const skills = {
    frontend: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
    backend: ["Node.js", "Java", "C", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Express.js"],
    tools: ["Git", "Power BI", "AppSheet", "Docker", "AWS", "Figma", "VS Code", "Postman"]
  }

  const projects = [
    {
      title: "Quality Management System",
      description: "Sistema completo de gestão de qualidade com dashboard interativo e relatórios automatizados.",
      tech: ["React", "Node.js", "PostgreSQL", "Power BI"],
      link: "#"
    },
    {
      title: "Process Automation Platform",
      description: "Plataforma de automação de processos industriais com interface moderna e monitoramento em tempo real.",
      tech: ["Angular", "Java", "MongoDB", "Docker"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard de analytics com visualizações interativas e relatórios personalizáveis.",
      tech: ["React", "TypeScript", "Chart.js", "REST API"],
      link: "#"
    }
  ]

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "FRESNOMAQ",
      period: "2023 - Present",
      description: "Desenvolvimento de aplicações web completas, automação de processos e sistemas de gestão de qualidade."
    },
    {
      title: "Quality Analyst",
      company: "FRESNOMAQ",
      period: "2017 - 2023",
      description: "Análise de qualidade, implementação de sistemas de gestão e desenvolvimento de relatórios automatizados."
    }
  ]

  const education = [
    {
      degree: "Systems Analysis and Development",
      institution: "Anhanguera",
      period: "2025 - 2027",
      status: "Em andamento"
    },
    {
      degree: "Technical in Quality Analysis and Control",
      institution: "SENAI",
      period: "2017 - 2018",
      status: "Concluído"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Space Background */}
      <div className="fixed inset-0 z-0">
        {/* Stars Layer 1 */}
        <motion.div
          style={{ y: starsY1 }}
          className="absolute inset-0 opacity-30"
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </motion.div>

        {/* Stars Layer 2 */}
        <motion.div
          style={{ y: starsY2 }}
          className="absolute inset-0 opacity-20"
        >
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
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
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center rounded-full">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h1 className="text-white font-light text-lg tracking-wider">
                  DAVID ALISSON
                </h1>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-300 hover:text-white transition-colors duration-300 font-light text-sm tracking-widest group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.div>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-6 py-2 border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-light text-sm tracking-widest"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* 3D Container */}
      <motion.div
        ref={containerRef}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
        className="relative z-10"
      >
        {/* Main Content with 3D Transform */}
        <motion.div
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            scale: smoothScale,
            transformStyle: "preserve-3d"
          }}
          className="relative z-10"
        >
          {/* Hero Section - Full Screen */}
          <section id="hero" className="h-screen flex items-center justify-center relative">
            <div className="container mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="space-y-12"
              >
                <div className="space-y-8">
                  <motion.h1
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                    className="text-7xl md:text-9xl lg:text-[12rem] font-thin tracking-widest text-white"
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
                    className="text-xl md:text-2xl text-gray-300 tracking-widest font-light"
                  >
                    FULL-STACK DEVELOPER
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                  className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  Desenvolvedor Full-Stack especializado em automação, desenvolvimento web e sistemas de qualidade. 
                  Construindo aplicações modernas e eficientes com as mais recentes tecnologias.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href="#contact"
                      className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-light text-sm tracking-widest"
                    >
                      GET IN TOUCH
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href="#projects"
                      className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 font-light text-sm tracking-widest"
                    >
                      VIEW PROJECTS
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="pt-16"
                >
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 uppercase tracking-widest font-light">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Available for work</span>
                    </div>
                    <div>•</div>
                    <div>Remote & On-site</div>
                    <div>•</div>
                    <div>Brazil</div>
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
          <section id="about" className="h-screen flex items-center justify-center relative">
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
                    ABOUT
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
                  className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 font-light"
                >
                  <p>
                    Sou um desenvolvedor Full-Stack apaixonado por tecnologia e inovação, com mais de 6 anos de experiência 
                    em desenvolvimento de software e análise de qualidade. Atualmente trabalho na FRESNOMAQ, onde desenvolvo 
                    aplicações web modernas e sistemas de automação.
                  </p>
                  <p>
                    Minha expertise abrange desde o desenvolvimento frontend com React e Angular até o backend com Node.js e Java, 
                    sempre buscando implementar as melhores práticas e tecnologias mais recentes para criar soluções eficientes e escaláveis.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8"
                >
                  {[
                    { number: "6+", label: "Years Experience" },
                    { number: "20+", label: "Projects Completed" },
                    { number: "5+", label: "Technologies" }
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
          <section id="skills" className="h-screen flex items-center justify-center relative">
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
                    SKILLS
                  </motion.h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  {Object.entries(skills).map(([category, items], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.3, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      <motion.h3
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-thin text-center uppercase tracking-widest"
                      >
                        {category}
                      </motion.h3>
                      <div className="grid grid-cols-2 gap-4">
                        {items.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + categoryIndex * 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -5,
                              boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
                            }}
                            className="border border-white/10 hover:border-cyan-400/50 p-4 text-center transition-all duration-300 group cursor-pointer"
                          >
                            <span className="text-gray-300 group-hover:text-white font-light text-sm tracking-wider">
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
          <section id="experience" className="h-screen flex items-center justify-center relative">
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
                    EXPERIENCE
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
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                      }}
                      className="border border-white/10 p-8 hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-thin text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wider">
                            {job.title}
                          </h3>
                          <p className="text-gray-400 text-lg font-light">{job.company}</p>
                        </div>
                        <div className="text-cyan-400 text-sm uppercase tracking-widest mt-2 md:mt-0 font-light">
                          {job.period}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed font-light">
                        {job.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Education Section - Full Screen */}
          <section id="education" className="h-screen flex items-center justify-center relative">
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
                    EDUCATION
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
                        scale: 1.02,
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)"
                      }}
                      className="border border-white/10 p-6 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-thin text-white tracking-wider">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-400 font-light">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <div className="text-cyan-400 text-sm uppercase tracking-widest font-light">
                            {edu.period}
                          </div>
                          <div className="text-green-400 text-xs uppercase tracking-widest font-light">
                            {edu.status}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section - Full Screen */}
          <section id="projects" className="h-screen flex items-center justify-center relative">
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
                    PROJECTS
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
                        y: -10,
                        scale: 1.05,
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                      }}
                      className="border border-white/10 hover:border-cyan-400/50 p-6 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="space-y-4">
                        <h3 className="text-xl font-thin text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wider">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed font-light text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 + index * 0.2 + 0.5 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 border border-white/20 text-gray-300 text-xs uppercase tracking-wider font-light"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        <div className="pt-2">
                          <span className="text-cyan-400 text-sm font-light group-hover:text-cyan-300 transition-colors duration-300 tracking-wider">
                            VIEW PROJECT →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section - Full Screen */}
          <section id="contact" className="h-screen flex items-center justify-center relative">
            <div className="container mx-auto px-6 max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-thin tracking-widest text-white"
                  >
                    CONTACT
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
                  className="flex flex-col sm:flex-row items-center justify-center gap-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href="mailto:david.alisson@example.com"
                      className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-light text-sm tracking-widest"
                    >
                      SEND EMAIL
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href="https://github.com/davidalisson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 font-light text-sm tracking-widest"
                    >
                      VIEW GITHUB
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
                      Available for new opportunities
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center rounded-full">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="text-white font-light text-xl tracking-wider">
                    DAVID ALISSON
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-light">
                    FULL-STACK DEVELOPER
                  </p>
                </div>
              </div>
              <p className="text-gray-300 max-w-sm font-light">
                Desenvolvedor Full-Stack especializado em automação, desenvolvimento web e sistemas de qualidade.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm uppercase tracking-widest font-light">
                  Available for work
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-light text-lg tracking-widest">
                QUICK LINKS
              </h4>
              <nav className="space-y-3">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-light text-sm tracking-widest group flex items-center"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-4 mr-3"></span>
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-light text-lg tracking-widest">
                LET'S CONNECT
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-light">Email</p>
                  <a
                    href="mailto:david.alisson@example.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-light"
                  >
                    david.alisson@example.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-3 font-light">Follow me</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/davidalisson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/davidalisson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-white/20 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-t border-white/10 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm font-light">
                © 2024 David Alisson Sarapião Pedro. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <p className="text-gray-400 text-sm font-light">
                  Built with <span className="text-red-400">♥</span> using Next.js & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
