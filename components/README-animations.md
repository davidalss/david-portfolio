# Sistema de Animações por Scroll

Este projeto agora possui um sistema otimizado de animações que são ativadas por scroll e executam apenas uma vez, evitando repetições desnecessárias.

## Componentes Disponíveis

### AnimatedSection
Componente wrapper que adiciona animação por scroll a qualquer conteúdo.

```tsx
import { AnimatedSection } from "@/components/animated-section"

<AnimatedSection direction="up" delay={0.2} className="minha-classe">
  <h2>Meu Título</h2>
  <p>Meu conteúdo</p>
</AnimatedSection>
```

**Props:**
- `direction`: "up" | "down" | "left" | "right" (padrão: "up")
- `delay`: número em segundos para atrasar a animação (padrão: 0)
- `duration`: duração da animação em segundos (padrão: 0.6)
- `threshold`: ponto de ativação da animação (padrão: 0.1)
- `rootMargin`: margem do viewport (padrão: "0px 0px -50px 0px")

### StaggeredAnimation
Para animar múltiplos elementos em sequência.

```tsx
import { StaggeredAnimation } from "@/components/animated-section"

<StaggeredAnimation staggerDelay={0.1} direction="up">
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</StaggeredAnimation>
```

## Hook Personalizado

### useScrollAnimation
Hook para controle mais granular das animações.

```tsx
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function MeuComponente() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <div ref={ref} className={isVisible ? "visible" : "hidden"}>
      Conteúdo animado
    </div>
  )
}
```

## Classes CSS Utilitárias

O sistema também inclui classes CSS para animações mais simples:

```css
.animate-on-scroll        /* Fade in de baixo para cima */
.animate-on-scroll-left   /* Fade in da esquerda */
.animate-on-scroll-right  /* Fade in da direita */
.animate-on-scroll-scale  /* Fade in com escala */
```

Adicione a classe `.visible` quando o elemento deve aparecer.

## Características

✅ **Executa apenas uma vez** - Evita animações repetitivas
✅ **Ativado por scroll** - Usa Intersection Observer API
✅ **Performance otimizada** - Animações suaves e eficientes
✅ **Configurável** - Múltiplas opções de personalização
✅ **Acessível** - Respeita preferências de movimento reduzido

## Exemplo Completo

```tsx
"use client"

import { AnimatedSection, StaggeredAnimation } from "@/components/animated-section"

export function MeuComponente() {
  return (
    <section>
      {/* Título com animação simples */}
      <AnimatedSection direction="up">
        <h2>Meu Título</h2>
      </AnimatedSection>

      {/* Lista com animação em sequência */}
      <StaggeredAnimation staggerDelay={0.1} direction="up">
        {items.map(item => (
          <div key={item.id} className="item">
            {item.content}
          </div>
        ))}
      </StaggeredAnimation>

      {/* Conteúdo com delay personalizado */}
      <AnimatedSection direction="left" delay={0.3}>
        <p>Conteúdo com delay</p>
      </AnimatedSection>
    </section>
  )
}
```
