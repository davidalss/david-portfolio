"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection Observer triggered:', {
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          boundingClientRect: entry.boundingClientRect,
          rootBounds: entry.rootBounds
        })
        
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && !hasAnimated) {
            setHasAnimated(true)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasAnimated])

  return { ref, isVisible: triggerOnce ? (isVisible || hasAnimated) : isVisible }
}

// Hook para animações em sequência (stagger)
export function useStaggeredScrollAnimation(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) {
  const { ref, isVisible } = useScrollAnimation(options)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  )

  useEffect(() => {
    if (isVisible) {
      const delays = visibleItems.map((_, index) => index * 100) // 100ms entre cada item
      
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        }, delay)
      })
    }
  }, [isVisible, itemCount])

  return { ref, visibleItems }
}
