"use client"

import { AnimatedSection, StaggeredAnimation } from "@/components/animated-section"
import { SimpleScrollAnimation } from "@/components/simple-scroll-animation"

export function TestAnimations() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teste 1: Animação simples */}
        <SimpleScrollAnimation direction="up" className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              🎯 Teste de Animação por Scroll
            </h2>
            <p className="text-foreground-muted">
              Esta seção deve aparecer com animação quando você fizer scroll
            </p>
          </div>
        </SimpleScrollAnimation>

        {/* Teste 2: Animação da esquerda */}
        <SimpleScrollAnimation direction="left" delay={0.2} className="mb-16">
          <div className="bg-surface-elevated border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              ← Animação da Esquerda
            </h3>
            <p className="text-foreground-muted">
              Este card deve deslizar da esquerda para a direita
            </p>
          </div>
        </SimpleScrollAnimation>

        {/* Teste 3: Animação da direita */}
        <SimpleScrollAnimation direction="right" delay={0.4} className="mb-16">
          <div className="bg-surface-elevated border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Animação da Direita →
            </h3>
            <p className="text-foreground-muted">
              Este card deve deslizar da direita para a esquerda
            </p>
          </div>
        </SimpleScrollAnimation>

        {/* Teste 4: Animação em sequência */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-accent">
            🎭 Animação em Sequência
          </h3>
          <StaggeredAnimation
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.2}
            direction="up"
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-surface-elevated border border-border rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-background font-bold">
                  {item}
                </div>
                <h4 className="font-semibold mb-2">Item {item}</h4>
                <p className="text-sm text-foreground-muted">
                  Este item deve aparecer com delay
                </p>
              </div>
            ))}
          </StaggeredAnimation>
        </div>

        {/* Teste 5: Animação de baixo para cima */}
        <AnimatedSection direction="down" delay={0.6} className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              ↑ Animação de Baixo para Cima
            </h3>
            <p className="text-foreground-muted">
              Este card deve deslizar de baixo para cima
            </p>
          </div>
        </AnimatedSection>

        {/* Instruções */}
        <AnimatedSection direction="up" delay={0.8}>
          <div className="bg-surface-elevated border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              📋 Instruções de Teste
            </h3>
            <div className="space-y-2 text-foreground-muted">
              <p>1. Faça scroll para baixo e para cima</p>
              <p>2. Observe as animações aparecendo</p>
              <p>3. As animações devem executar apenas uma vez</p>
              <p>4. Teste em diferentes velocidades de scroll</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
