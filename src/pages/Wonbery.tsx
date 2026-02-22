import { motion } from 'framer-motion'
import { Radio, ArrowRight, MapPin } from 'lucide-react'
import {
  PageLayout,
  Hero,
  Navigation,
  FloatingOrbs,
  ParticleField,
  Footer,
} from '../components'
import { useTranslation } from 'react-i18next'

export default function Wonbery() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('wonbery.nav.about'), href: '#about' },
  ]

  const tags = t('wonbery.tags', { returnObjects: true }) as string[]

  return (
    <PageLayout className="bg-wonbery-primary">
      <ParticleField color="#5FA8D3" count={400} />
      <FloatingOrbs colors={['#1B4965', '#5FA8D3', '#CAE9FF']} />
      <Navigation
        brand="Wonbery"
        brandColor="#5FA8D3"
        items={navItems}
        showBack
      />

      {/* Hero */}
      <Hero>
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wonbery-accent/10 border border-wonbery-accent/20 mb-6"
          >
            <MapPin size={16} className="text-wonbery-accent" />
            <span className="text-wonbery-accent text-sm">{t('wonbery.location')}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2">
              Wonbery
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-wonbery-accent">
              {t('wonbery.cnName')}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-white/50 mb-6 max-w-2xl mx-auto"
          >
            {t('wonbery.description')}
          </motion.p>

          {/* Feature tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-white/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Command center visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto w-48 h-48 mb-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full rounded-full border-2 border-wonbery-accent/30 flex items-center justify-center"
            >
              <div className="w-36 h-36 rounded-full border border-wonbery-accent/20 flex items-center justify-center">
                <Radio size={48} className="text-wonbery-accent" />
              </div>
            </motion.div>

            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={angle}
                animate={{ rotate: [angle, angle + 360] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.5,
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformOrigin: 'center' }}
              >
                <div
                  className="w-8 h-8 rounded-full bg-wonbery-accent/20 flex items-center justify-center"
                  style={{ transform: 'translateX(100px)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-wonbery-accent" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA - Visit Wonbery Site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href={`${import.meta.env.BASE_URL}wonbery/`}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-wonbery-accent text-wonbery-primary font-semibold text-lg hover:bg-wonbery-accent/90 transition-all hover:scale-105"
            >
              {t('wonbery.visitWebsite')}
              <ArrowRight size={20} />
            </a>
            <p className="text-white/30 text-sm mt-4">{t('wonbery.subtitle')}</p>
          </motion.div>
        </div>
      </Hero>

      <Footer companyName={t('wonbery.footerName')} accentColor="#5FA8D3" />
    </PageLayout>
  )
}
