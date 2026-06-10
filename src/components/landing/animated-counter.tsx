'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  label: string
}

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.]+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseFloat(match[1]), suffix: match[2] }
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayNum, setDisplayNum] = useState(0)
  const { num, suffix } = parseValue(value)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const duration = 2000

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayNum(Math.floor(eased * num))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayNum(num)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, num])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-primary-600">
        {displayNum}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </motion.div>
  )
}
