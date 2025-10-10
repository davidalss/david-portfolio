"use client"

export function MinimalistBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Linha vertical central sutil */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      
      {/* Linha horizontal central sutil */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  )
}
