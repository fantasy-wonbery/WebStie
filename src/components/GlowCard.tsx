import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  glowColor?: string
  className?: string
  delay?: number
}

export default function GlowCard({
  children,
  glowColor = 'rgba(0, 188, 212, 0.3)',
  className = '',
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative group ${className}`}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
        style={{ background: glowColor }}
      />

      {/* Card content */}
      <div className="relative glass-card p-6 md:p-8 overflow-hidden">
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            }}
          />
        </div>

        {children}
      </div>
    </motion.div>
  )
}
