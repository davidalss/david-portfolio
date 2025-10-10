"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function DebugScroll() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true
  })

  const [debugInfo, setDebugInfo] = useState({
    isVisible: false,
    scrollY: 0,
    windowHeight: 0,
    elementRect: null as DOMRect | null
  })

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current
      setDebugInfo(prev => ({
        ...prev,
        isVisible,
        scrollY: window.scrollY,
        windowHeight: window.innerHeight,
        elementRect: element ? element.getBoundingClientRect() : null
      }))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible, ref])

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
      <div className="mb-2 font-bold text-yellow-400">🐛 Debug Scroll</div>
      <div>Scroll Y: {debugInfo.scrollY}</div>
      <div>Window H: {debugInfo.windowHeight}</div>
      <div>Is Visible: {debugInfo.isVisible ? '✅' : '❌'}</div>
      {debugInfo.elementRect && (
        <>
          <div>Element Top: {Math.round(debugInfo.elementRect.top)}</div>
          <div>Element Bottom: {Math.round(debugInfo.elementRect.bottom)}</div>
          <div>In Viewport: {debugInfo.elementRect.top < debugInfo.windowHeight && debugInfo.elementRect.bottom > 0 ? '✅' : '❌'}</div>
        </>
      )}
      <div className="mt-2 text-yellow-300">
        Check console for logs
      </div>
    </div>
  )
}
