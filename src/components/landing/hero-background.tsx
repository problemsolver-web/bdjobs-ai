'use client'

import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Pre-computed particle data (reduced to 15 for better mobile performance)
const PARTICLE_DATA = [
  { size: 3, x: 12, y: 85, duration: 18, delay: 1, drift: 5 },
  { size: 4, x: 28, y: 23, duration: 22, delay: 3, drift: -8 },
  { size: 2, x: 45, y: 67, duration: 16, delay: 0, drift: 7 },
  { size: 5, x: 63, y: 42, duration: 20, delay: 2, drift: -4 },
  { size: 3, x: 78, y: 91, duration: 19, delay: 4, drift: 9 },
  { size: 2, x: 91, y: 15, duration: 17, delay: 1, drift: -6 },
  { size: 4, x: 8, y: 55, duration: 21, delay: 3, drift: 3 },
  { size: 3, x: 35, y: 78, duration: 15, delay: 0, drift: -5 },
  { size: 5, x: 52, y: 33, duration: 23, delay: 2, drift: 8 },
  { size: 2, x: 67, y: 72, duration: 18, delay: 4, drift: -7 },
  { size: 4, x: 82, y: 48, duration: 16, delay: 1, drift: 6 },
  { size: 3, x: 19, y: 12, duration: 20, delay: 3, drift: -3 },
  { size: 2, x: 42, y: 95, duration: 19, delay: 0, drift: 4 },
  { size: 5, x: 57, y: 58, duration: 22, delay: 2, drift: -9 },
  { size: 3, x: 73, y: 27, duration: 17, delay: 4, drift: 5 },
]

function Particle({
  data,
  reduceMotion,
}: {
  data: (typeof PARTICLE_DATA)[number]
  reduceMotion: boolean
}) {
  if (reduceMotion) {
    return (
      <div
        className="absolute rounded-full bg-white/20"
        style={{
          width: data.size,
          height: data.size,
          left: `${data.x}%`,
          top: `${data.y}%`,
          opacity: 0.4,
        }}
      />
    )
  }

  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{
        width: data.size,
        height: data.size,
        left: `${data.x}%`,
        top: `${data.y}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, data.drift, 0],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: data.duration,
        delay: data.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function HeroBackground() {
  const particles = useMemo(() => PARTICLE_DATA, [])
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 bg-[length:200%_200%]" />

      {/* Secondary gradient overlay */}
      {shouldReduceMotion ? (
        <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-secondary-600/40 via-transparent to-purple-600/30" />
      ) : (
        <motion.div
          className="absolute inset-0 opacity-30 bg-gradient-to-tr from-secondary-600/40 via-transparent to-purple-600/30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} data={p} reduceMotion={!!shouldReduceMotion} />
      ))}

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary-400/10 blur-3xl animate-pulse-glow" />
    </div>
  )
}
