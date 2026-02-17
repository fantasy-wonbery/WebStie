import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageHeroProps {
  badge?: string
  title: string
  subtitle?: string
  pillars?: string[]
  children?: ReactNode
}

export default function PageHero({ badge, title, subtitle, pillars, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="text-accent text-sm font-medium">{badge}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {pillars && pillars.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {pillars.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
              >
                {p}
              </span>
            ))}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  )
}
