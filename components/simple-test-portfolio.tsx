"use client"

import { motion } from "framer-motion"

export function SimpleTestPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-8">DAVID</h1>
          <p className="text-2xl text-gray-300 mb-8">Full-Stack Developer</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Desenvolvedor Full-Stack especializado em automação, desenvolvimento web e sistemas de qualidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Sou um desenvolvedor Full-Stack apaixonado por tecnologia e inovação, com mais de 6 anos de experiência 
              em desenvolvimento de software e análise de qualidade. Atualmente trabalho na FRESNOMAQ, onde desenvolvo 
              aplicações web modernas e sistemas de automação.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="text-gray-300">React</div>
                <div className="text-gray-300">Angular</div>
                <div className="text-gray-300">TypeScript</div>
                <div className="text-gray-300">JavaScript</div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="space-y-2">
                <div className="text-gray-300">Node.js</div>
                <div className="text-gray-300">Java</div>
                <div className="text-gray-300">C</div>
                <div className="text-gray-300">REST APIs</div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="space-y-2">
                <div className="text-gray-300">Git</div>
                <div className="text-gray-300">Power BI</div>
                <div className="text-gray-300">Docker</div>
                <div className="text-gray-300">AWS</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-4">
              Estou sempre interessado em novos projetos e oportunidades.
            </p>
            <a 
              href="mailto:david.alisson@example.com"
              className="inline-block px-8 py-4 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
