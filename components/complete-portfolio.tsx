"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, MapPin, Calendar, Code, Database, Zap, GraduationCap, Briefcase } from "lucide-react"

export function CompletePortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fundo minimalista */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-8xl sm:text-9xl font-thin text-white mb-4 tracking-tight leading-none">
            DAVID
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light text-gray-400 mb-8 tracking-widest">
            FULL-STACK DEVELOPER
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Building intelligent solutions for the modern web. Specializing in automation, 
            quality systems, and innovative development at FRESNOMAQ.
          </p>
          
          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-gray-200 transition-colors"
            >
              <Download className="inline w-4 h-4 mr-2" />
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors"
            >
              <Mail className="inline w-4 h-4 mr-2" />
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-4xl font-thin text-white mb-8 tracking-tight">ABOUT</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate Full-Stack Developer with expertise in creating intelligent solutions 
                for modern web applications. Currently working at FRESNOMAQ, where I focus on 
                automation, quality management systems, and innovative development practices.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building scalable applications using React, Node.js, and modern 
                development tools. My experience spans from frontend development to backend systems, 
                with a strong focus on clean code principles and agile methodologies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Brazil</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">FRESNOMAQ - Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-4xl font-thin text-white mb-8 tracking-tight">SKILLS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <Code className="w-8 h-8 text-white mb-4" />
              <h4 className="text-lg font-medium text-white mb-4 tracking-wide">FRONTEND</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>React • Angular • TypeScript</div>
                <div>JavaScript • Next.js • Tailwind CSS</div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <Database className="w-8 h-8 text-white mb-4" />
              <h4 className="text-lg font-medium text-white mb-4 tracking-wide">BACKEND</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Node.js • Java • C</div>
                <div>REST APIs • SQL • MySQL</div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <Zap className="w-8 h-8 text-white mb-4" />
              <h4 className="text-lg font-medium text-white mb-4 tracking-wide">TOOLS</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Git • Power BI • AppSheet</div>
                <div>PowerApps • Agile • Clean Code</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-4xl font-thin text-white mb-8 tracking-tight">EXPERIENCE</h3>
          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="border-b border-gray-800 pb-6 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h4 className="text-xl font-medium text-white">Full-Stack Developer</h4>
                <span className="text-sm text-gray-400">2023 - Present</span>
              </div>
              <p className="text-gray-400 mb-2">FRESNOMAQ</p>
              <p className="text-gray-300 leading-relaxed">
                Developing intelligent solutions for quality management systems, automation platforms, 
                and real-time analytics dashboards. Focus on clean code principles and agile methodologies.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="border-b border-gray-800 pb-6 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h4 className="text-xl font-medium text-white">Quality Analyst</h4>
                <span className="text-sm text-gray-400">2017 - 2023</span>
              </div>
              <p className="text-gray-400 mb-2">Previous Experience</p>
              <p className="text-gray-300 leading-relaxed">
                Specialized in quality control systems, statistical process control, and metrology. 
                Developed expertise in data analysis and process optimization.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-4xl font-thin text-white mb-8 tracking-tight">EDUCATION</h3>
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Systems Analysis and Development</h4>
                  <p className="text-gray-400 mb-2">Anhanguera Educacional • 2025 - 2027</p>
                  <p className="text-sm text-gray-300">Focus on web development, data analysis, and intelligent digital solutions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Technical in Quality Analysis and Control</h4>
                  <p className="text-gray-400 mb-2">SENAI • 2017 - 2018</p>
                  <p className="text-sm text-gray-300">Quality management systems, statistical process control, and metrology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-4xl font-thin text-white mb-8 tracking-tight">PROJECTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer"
            >
              <h4 className="text-lg font-medium text-white mb-3">Quality Management System</h4>
              <p className="text-sm text-gray-300 mb-4">Automated quality control system with real-time dashboards and non-conformity tracking</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-white/10 text-white px-2 py-1">React</span>
                <span className="text-xs bg-white/10 text-white px-2 py-1">Node.js</span>
                <span className="text-xs bg-white/10 text-white px-2 py-1">PostgreSQL</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Project
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer"
            >
              <h4 className="text-lg font-medium text-white mb-3">Process Automation Platform</h4>
              <p className="text-sm text-gray-300 mb-4">Low-code platform for automating business processes and workflows</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-white/10 text-white px-2 py-1">AppSheet</span>
                <span className="text-xs bg-white/10 text-white px-2 py-1">PowerApps</span>
                <span className="text-xs bg-white/10 text-white px-2 py-1">Power Automate</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Project
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer"
            >
              <h4 className="text-lg font-medium text-white mb-3">Analytics Dashboard</h4>
              <p className="text-sm text-gray-300 mb-4">Real-time analytics dashboard for monitoring production metrics and KPIs</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-white/10 text-white px-2 py-1">React</span>
                <span className="text-xs bg-white/10 text-white px-2 py-1">TypeScript</span>
                <span className="text-xs bg-white/10 text-white px-2 py-1">Looker Studio</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Project
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-4xl font-thin text-white mb-8 tracking-tight">CONTACT</h3>
          <div className="space-y-6">
            <motion.a
              href="mailto:david.alisson92@outlook.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block text-2xl text-gray-400 hover:text-white transition-colors"
            >
              david.alisson92@outlook.com
            </motion.a>
            
            <div className="flex justify-center space-x-12">
              <motion.a
                href="https://github.com/davidalss"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-sm text-gray-500 hover:text-white transition-colors tracking-widest uppercase"
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/davidalss"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-sm text-gray-500 hover:text-white transition-colors tracking-widest uppercase"
              >
                LinkedIn
              </motion.a>
            </div>
            
            <p className="text-gray-500 text-sm tracking-widest">
              Available for opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
