import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface SystemCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  delay?: number
}

export default function SystemCard({ icon: Icon, title, description, features, delay = 0 }: SystemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="relative glass-card p-6 md:p-8 h-full">
        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
          <Icon size={24} className="text-accent" />
        </div>
        <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">{description}</p>
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent/80 text-xs"
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
