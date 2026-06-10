'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
}

const MAX_RIPPLES = 5

export function AnimatedButton({ children, className = '' }: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const shouldReduceMotion = useReducedMotion()

  function handlePointerDown(e: React.PointerEvent<HTMLSpanElement>) {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => {
      const next = [...prev, { x, y, id }]
      // Cap the ripple array to prevent unbounded growth
      if (next.length > MAX_RIPPLES) {
        return next.slice(next.length - MAX_RIPPLES)
      }
      return next
    })
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  return (
    <motion.span
      className={`relative overflow-hidden inline-flex ${className}`}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      onPointerDown={handlePointerDown}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </motion.span>
  )
}
