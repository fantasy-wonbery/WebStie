import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

interface HeroProps {
  children: ReactNode
  className?: string
  minHeight?: string
}

export function Hero({
  children,
  className = '',
  minHeight = 'min-h-screen',
}: HeroProps) {
  return (
    <section
      className={`${minHeight} flex items-center justify-center px-6 pt-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  )
}
