"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { PremiumHeader } from "./premium-header"
import { PremiumFooter } from "./premium-footer"
import Link from "next/link"

export function SmoothScroll3DPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // 3D Transform values
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1])
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Smooth spring animations
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
  const smoothTranslateZ = useSpring(translateZ, { stiffness: 100, damping: 30 })

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600])

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
      <PremiumHeader />
      
      {/* 3D Container */}
      <motion.div
        ref={containerRef}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
        className="relative"
      >
        {/* 3D Background Elements */}
        <motion.div
          style={{ y: y1 }}
          className="fixed inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="fixed inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-xl"></div>
        </motion.div>

        {/* Main Content with 3D Transform */}
        <motion.div
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            scale: smoothScale,
            translateZ: smoothTranslateZ,
            transformStyle: "preserve-3d"
          }}
          className="relative z-10"
        >
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center relative">
            <motion.div
              style={{ y: y3 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>

            <div className="container-padding text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="space-y-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 30, rotateY: -20 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="text-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    DAVID
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30, rotateY: 20 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="text-heading text-2xl md:text-3xl lg:text-4xl text-gray-300 tracking-wide"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    FULL-STACK DEVELOPER
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                  className="text-body text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                  Desenvolvedor Full-Stack especializado em automação, desenvolvimento web e sistemas de qualidade. 
                  Construindo aplicações modernas e eficientes com as mais recentes tecnologias.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href="#contact"
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-grotesk font-semibold text-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group relative overflow-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <span className="relative z-10">Get in Touch</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href="#projects"
                      className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-grotesk font-semibold text-lg tracking-wide transition-all duration-300 relative overflow-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      View Projects
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="pt-16"
                >
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 font-code uppercase tracking-wider">
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

            {/* 3D Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                ></motion.div>
              </div>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="section-padding bg-gray-900/30 relative">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="container-padding max-w-4xl mx-auto text-center space-y-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-heading text-4xl md:text-5xl font-bold tracking-tight"
                >
                  About Me
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto origin-center"
                ></motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-body text-lg md:text-xl text-gray-300 leading-relaxed space-y-6"
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
                className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
              >
                {[
                  { number: "6+", label: "Years Experience" },
                  { number: "20+", label: "Projects Completed" },
                  { number: "5+", label: "Technologies" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: index * 0.2 + 1, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    className="text-center space-y-2"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                    <div className="text-gray-400 font-code uppercase tracking-wider text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section-padding relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="container-padding max-w-6xl mx-auto space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-heading text-4xl md:text-5xl font-bold tracking-tight"
                >
                  Skills & Technologies
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto origin-center"
                ></motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {Object.entries(skills).map(([category, items], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 50, rotateY: -30 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: categoryIndex * 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.h3
                      whileHover={{ rotateY: 5 }}
                      className="text-heading text-2xl font-semibold text-center capitalize"
                    >
                      {category}
                    </motion.h3>
                    <div className="grid grid-cols-2 gap-3">
                      {items.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.5, rotateX: -45 }}
                          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                          transition={{ delay: index * 0.1 + categoryIndex * 0.3, duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5, 
                            rotateY: 5,
                            boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)"
                          }}
                          className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/50 p-4 text-center transition-all duration-300 group cursor-pointer"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <span className="text-gray-300 group-hover:text-white font-inter font-medium text-sm">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section-padding bg-gray-900/30 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="container-padding max-w-4xl mx-auto space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-heading text-4xl md:text-5xl font-bold tracking-tight"
                >
                  Experience
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto origin-center"
                ></motion.div>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    className="bg-gray-800/30 border border-gray-700 p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-heading text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {job.title}
                        </h3>
                        <p className="text-gray-400 font-inter text-lg">{job.company}</p>
                      </div>
                      <div className="text-cyan-400 font-code text-sm uppercase tracking-wider mt-2 md:mt-0">
                        {job.period}
                      </div>
                    </div>
                    <p className="text-body text-gray-300 leading-relaxed">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Education Section */}
          <section id="education" className="section-padding relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="container-padding max-w-4xl mx-auto space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-heading text-4xl md:text-5xl font-bold tracking-tight"
                >
                  Education
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto origin-center"
                ></motion.div>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateX: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      rotateX: 5,
                      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)"
                    }}
                    className="bg-gray-800/30 border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-heading text-xl font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-400 font-inter">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="text-cyan-400 font-code text-sm uppercase tracking-wider">
                          {edu.period}
                        </div>
                        <div className="text-green-400 font-code text-xs uppercase tracking-wider">
                          {edu.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section-padding bg-gray-900/30 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="container-padding max-w-6xl mx-auto space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-heading text-4xl md:text-5xl font-bold tracking-tight"
                >
                  Featured Projects
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto origin-center"
                ></motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateY: -30 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10, 
                      rotateY: 10,
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                    }}
                    className="bg-gray-800/30 border border-gray-700 hover:border-cyan-500/50 p-6 transition-all duration-300 group cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-heading text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-body text-gray-300 leading-relaxed">
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
                            whileHover={{ scale: 1.1, rotateZ: 5 }}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-code uppercase tracking-wider"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="pt-2">
                        <span className="text-cyan-400 font-inter text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section-padding relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="container-padding max-w-4xl mx-auto text-center space-y-12"
            >
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-heading text-4xl md:text-5xl font-bold tracking-tight"
                >
                  Let's Work Together
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto origin-center"
                ></motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-body text-lg md:text-xl text-gray-300 leading-relaxed"
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
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <a
                    href="mailto:david.alisson@example.com"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-grotesk font-semibold text-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group relative overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="relative z-10">Send Email</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <a
                    href="https://github.com/davidalisson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-grotesk font-semibold text-lg tracking-wide transition-all duration-300 relative overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    View GitHub
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
                  <span className="text-green-400 font-code uppercase tracking-wider text-sm">
                    Available for new opportunities
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </motion.div>
      </motion.div>

      <PremiumFooter />
    </div>
  )
}
