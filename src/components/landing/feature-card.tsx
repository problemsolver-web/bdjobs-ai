'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface FeatureCardProps {
  children: React.ReactNode
  index?: number
}

export function FeatureCard({ children, index = 0 }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateY((x - centerX) / 15)
    setRotateX(-(y - centerY) / 15)
  }

  function handleMouseLeave() {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="glass-card gradient-border text-center p-6 rounded-xl transition-all duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
