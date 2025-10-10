"use client"

import { motion } from "framer-motion"

export function MinimalistContact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-6xl sm:text-7xl font-thin text-white mb-8 tracking-tight">
            CONTACT
          </h2>
          
          <div className="space-y-8 mb-16">
            <div>
              <a 
                href="mailto:david.alisson92@outlook.com"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
              >
                david.alisson92@outlook.com
              </a>
            </div>
            
            <div className="flex justify-center space-x-12 text-sm text-gray-500 tracking-widest">
              <a 
                href="https://github.com/davidalss"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                GITHUB
              </a>
              <a 
                href="https://linkedin.com/in/davidalss"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          <p className="text-gray-500 text-sm tracking-widest">
            AVAILABLE FOR OPPORTUNITIES
          </p>
        </motion.div>
      </div>
    </div>
  )
}
