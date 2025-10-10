"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, Mouse } from "lucide-react"

export function ScrollDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🎯 Scroll Suave por Seções
          </h1>
          
          <p className="text-xl text-foreground-muted mb-12 leading-relaxed">
            Agora cada movimento da roda do mouse leva diretamente para a próxima seção!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface-elevated border border-border rounded-lg p-6"
            >
              <Mouse className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Roda do Mouse</h3>
              <p className="text-sm text-foreground-muted">
                Role para cima ou para baixo para navegar entre seções
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-elevated border border-border rounded-lg p-6"
            >
              <ArrowUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Setas do Teclado</h3>
              <p className="text-sm text-foreground-muted">
                Use ↑ ↓ ou Page Up/Down para navegar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-surface-elevated border border-border rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">•</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Indicadores</h3>
              <p className="text-sm text-foreground-muted">
                Clique nos pontos laterais para ir direto a uma seção
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              🚀 Como Funciona
            </h2>
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-background rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-foreground-muted">Cada movimento da roda do mouse é detectado</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-primary text-background rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-foreground-muted">O scroll é interceptado e convertido em navegação por seções</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-primary text-background rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-foreground-muted">Animação suave leva você diretamente para a próxima seção</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-primary text-background rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <p className="text-foreground-muted">Não é possível ficar "no meio" entre seções</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12"
          >
            <p className="text-lg text-foreground-muted mb-4">
              <strong>Teste agora:</strong> Role a roda do mouse ou use as setas do teclado!
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <ArrowDown className="w-8 h-8 text-primary mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
