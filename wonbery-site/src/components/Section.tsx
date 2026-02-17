import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
