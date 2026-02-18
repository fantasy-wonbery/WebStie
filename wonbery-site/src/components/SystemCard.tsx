import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { LucideIcon } from 'lucide-react'

interface SystemCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  delay?: number
  image?: string
  details?: string
}

export default function SystemCard({ icon: Icon, title, description, features, delay = 0, image, details }: SystemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useTranslation()
  const hasExpandableContent = image || details

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group relative"
      >
        <div className="absolute -inset-0.5 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
        <div
          className={`relative glass-card p-6 md:p-8 h-full ${hasExpandableContent ? 'cursor-pointer' : ''}`}
          onClick={() => hasExpandableContent && setIsExpanded(true)}
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
            <Icon size={24} className="text-accent" />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4">{description}</p>
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
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
          {hasExpandableContent && (
            <div className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
              <span>{t('common.viewDetails')}</span>
              <ChevronDown size={16} />
            </div>
          )}
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Icon size={28} className="text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">{title}</h2>
              </div>

              {/* Image */}
              {image && (
                <div className="mb-6 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={import.meta.env.BASE_URL + image}
                    alt={title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed mb-6">{description}</p>

              {/* Details */}
              {details && (
                <p className="text-white/60 text-sm leading-relaxed mb-6">{details}</p>
              )}

              {/* Features */}
              {features && features.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {features.map((f) => (
                    <span
                      key={f}
                      className="px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent/80 text-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
