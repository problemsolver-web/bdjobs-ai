'use client'

import { motion, useReducedMotion } from 'framer-motion'

function RotatingCube({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ perspective: '600px' }}
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{ duration: 20, delay, repeat: Infinity, ease: 'linear' }}
    >
      <div
        className="w-12 h-12 border border-white/20 rounded-sm bg-white/5 backdrop-blur-sm"
        style={{ transformStyle: 'preserve-3d' }}
      />
    </motion.div>
  )
}

function OrbitingCircle({
  size,
  duration,
  delay,
  radius,
  className,
}: {
  size: number
  duration: number
  delay: number
  radius: number
  className: string
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        x: [0, radius, 0, -radius, 0],
        y: [-radius, 0, radius, 0, -radius],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    >
      <div
        className="rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

function ConnectingLine({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: [0, 0.3, 0], scaleX: [0, 1, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </motion.div>
  )
}

function StaticShape({ className, size }: { className: string; size: number }) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="rounded-full bg-white/10 border border-white/20"
        style={{ width: size, height: size }}
      />
    </div>
  )
}

export function FloatingShapes() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <StaticShape className="top-[15%] left-[10%]" size={48} />
        <StaticShape className="top-[60%] right-[15%]" size={48} />
        <StaticShape className="bottom-[20%] left-[25%]" size={48} />
        <StaticShape className="top-[25%] right-[25%]" size={16} />
        <StaticShape className="top-[45%] left-[20%]" size={10} />
        <StaticShape className="bottom-[30%] right-[30%]" size={20} />
        <div className="absolute top-[20%] right-[35%] w-3 h-3 rounded-full bg-secondary-300/50 opacity-50" />
        <div className="absolute bottom-[25%] left-[40%] w-2 h-2 rounded-full bg-white/40 opacity-40" />
        <div className="absolute top-[55%] left-[55%] w-2.5 h-2.5 rounded-full bg-secondary-400/40 opacity-40" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating cubes */}
      <RotatingCube className="top-[15%] left-[10%]" delay={0} />
      <RotatingCube className="top-[60%] right-[15%]" delay={3} />
      <RotatingCube className="bottom-[20%] left-[25%]" delay={6} />

      {/* Orbiting circles */}
      <OrbitingCircle
        size={16}
        duration={12}
        delay={0}
        radius={30}
        className="top-[25%] right-[25%]"
      />
      <OrbitingCircle
        size={10}
        duration={8}
        delay={2}
        radius={20}
        className="top-[45%] left-[20%]"
      />
      <OrbitingCircle
        size={20}
        duration={15}
        delay={4}
        radius={40}
        className="bottom-[30%] right-[30%]"
      />

      {/* Connecting lines representing AI connections */}
      <ConnectingLine className="top-[30%] left-[15%] rotate-12" delay={0} />
      <ConnectingLine className="top-[50%] right-[20%] -rotate-6" delay={2} />
      <ConnectingLine className="bottom-[35%] left-[30%] rotate-45" delay={4} />

      {/* Glowing dots at intersections */}
      <motion.div
        className="absolute top-[20%] right-[35%] w-3 h-3 rounded-full bg-secondary-300/50"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[40%] w-2 h-2 rounded-full bg-white/40"
        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[55%] left-[55%] w-2.5 h-2.5 rounded-full bg-secondary-400/40"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
