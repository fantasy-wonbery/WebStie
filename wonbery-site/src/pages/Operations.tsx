import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Radio, Monitor, Radar, Container, MessageSquareMore, X } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import type { LucideIcon } from 'lucide-react'

const B = import.meta.env.BASE_URL

interface SystemDef { key: string; icon: LucideIcon; image: string }

const systems: SystemDef[] = [
  { key: 'voice', icon: Radio, image: 'images/products/ATalk.jpg' },
  { key: 'foc', icon: Monitor, image: 'images/products/Foc01_1024.jpg' },
  { key: 'monitoring', icon: Radar, image: 'images/products/dashboard02.jpg' },
  { key: 'focOps', icon: Container, image: 'images/products/Foc02_1024.jpg' },
  { key: 'collaboration', icon: MessageSquareMore, image: 'images/products/Connected-aircraft.jpg' },
]

export default function Operations() {
  const { t } = useTranslation()
  const [modal, setModal] = useState<SystemDef | null>(null)
  const pillars = t('operations.pillars', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${B}images/products/efw-mro-services01.jpg)` }} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
            {t('operations.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{t('operations.title')}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">{t('operations.subtitle')}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {pillars.map((p) => (
              <span key={p} className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Systems grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((sys, i) => {
              const Icon = sys.icon
              const features = t(`operations.systems.${sys.key}.features`, { returnObjects: true }) as string[]
              return (
                <motion.div key={sys.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="card overflow-hidden p-0 cursor-pointer group" onClick={() => setModal(sys)}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={B + sys.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {t(`operations.systems.${sys.key}.title`)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{t(`operations.systems.${sys.key}.description`)}</p>
                    {Array.isArray(features) && (
                      <div className="flex flex-wrap gap-2">
                        {features.map((f) => <span key={f} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium">{f}</span>)}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setModal(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"><X size={20} /></button>
              <div className="relative h-64 md:h-80">
                <img src={B + modal.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white">{t(`operations.systems.${modal.key}.title`)}</h2>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-6">{t(`operations.systems.${modal.key}.description`)}</p>
                {(() => { const f = t(`operations.systems.${modal.key}.features`, { returnObjects: true }); return Array.isArray(f) ? (
                  <div className="flex flex-wrap gap-2">{(f as string[]).map((x) => <span key={x} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">{x}</span>)}</div>
                ) : null })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
