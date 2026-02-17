import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function GlowCard({ children, delay = 0, className = '' }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`group relative ${className}`}
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="relative glass-card p-6 md:p-8 h-full">
        {children}
      </div>
    </motion.div>
  )
}
