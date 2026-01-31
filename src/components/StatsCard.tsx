import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface StatsCardProps {
  value: string
  label: string
  prefix?: string
  suffix?: string
  accentColor?: string
  delay?: number
}

export default function StatsCard({
  value,
  label,
  prefix = '',
  suffix = '',
  accentColor = '#00BCD4',
  delay = 0,
}: StatsCardProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div
        className="text-4xl md:text-5xl font-display font-bold mb-2"
        style={{ color: accentColor }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-white/60 text-sm md:text-base">{label}</div>
    </motion.div>
  )
}
