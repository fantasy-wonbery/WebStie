import { motion } from 'framer-motion'
import {
  ShoppingBag,
  Monitor,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Users,
  CheckCircle2,
  Globe,
  Shield,
  Layers,
  ArrowRight,
} from 'lucide-react'
import {
  PageLayout,
  Hero,
  Section,
  GlowCard,
  AnimatedText,
  Navigation,
  StatsCard,
  Footer,
  FloatingOrbs,
} from '../components'
import { useTranslation } from 'react-i18next'

const systemKeys = ['sales', 'payment', 'mall', 'supply', 'logistics', 'analytics'] as const
const systemIcons = [Monitor, CreditCard, ShoppingBag, Package, Truck, BarChart3]

const modelKeys = ['fullService', 'techOutput'] as const
const modelIcons = [Users, Layers]

const advantageKeys = ['market', 'security', 'data', 'expansion'] as const
const advantageIcons = [Globe, Shield, BarChart3, ArrowRight]

export default function JpMall() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('jpmall.nav.about'), href: '#about' },
    { label: t('jpmall.nav.systems'), href: '#systems' },
    { label: t('jpmall.nav.models'), href: '#models' },
    { label: t('jpmall.nav.contact'), href: '#contact' },
  ]

  return (
    <PageLayout className="bg-gradient-to-b from-[#0D1F3C] to-[#0a1929]">
      <FloatingOrbs colors={['#FF6F00', '#FFB74D', '#1565C0']} />
      <Navigation
        brand={t('jpmall.heroTitle')}
        brandColor="#FF6F00"
        items={navItems}
        showBack
      />

      {/* Hero */}
      <Hero>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jpmall-secondary/10 border border-jpmall-secondary/20 mb-6"
            >
              <ShoppingBag size={16} className="text-jpmall-secondary" />
              <span className="text-jpmall-secondary text-sm">{t('jpmall.badge')}</span>
            </motion.div>

            <AnimatedText
              text={t('jpmall.heroTitle')}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 mb-2"
            >
              {t('jpmall.heroSubtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/40 mb-8 max-w-lg"
            >
              {t('jpmall.heroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#systems"
                className="px-6 py-3 rounded-xl bg-jpmall-secondary text-white font-semibold hover:bg-jpmall-secondary/90 transition-colors"
              >
                {t('jpmall.ctaSystems')}
              </a>
              <a
                href="#models"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                {t('jpmall.ctaModels')}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-jpmall-primary/30 to-jpmall-secondary/20 p-8 flex items-center justify-center relative overflow-hidden">
              {/* System illustration */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ShoppingBag size={100} className="text-jpmall-secondary mx-auto mb-6" />
                </motion.div>
                <div className="text-4xl font-display font-bold text-jpmall-secondary mb-2">
                  {t('jpmall.heroVisual.title')}
                </div>
                <div className="text-white/60">{t('jpmall.heroVisual.subtitle')}</div>
              </div>

              {/* Background decorations */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-16 bg-jpmall-secondary rounded-full blur-2xl" />
                <div className="absolute top-1/2 right-1/4 w-24 h-12 bg-jpmall-accent rounded-full blur-xl" />
                <div className="absolute bottom-1/4 left-1/3 w-28 h-14 bg-white rounded-full blur-2xl" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-jpmall-secondary/20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-jpmall-primary/20 blur-xl" />
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section id="about">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value={t('jpmall.stats.systemsValue')}
            suffix={t('jpmall.stats.systemsSuffix')}
            label={t('jpmall.stats.systems')}
            accentColor="#FF6F00"
            delay={0}
          />
          <StatsCard
            value={t('jpmall.stats.airlinesValue')}
            suffix="+"
            label={t('jpmall.stats.airlines')}
            accentColor="#FF6F00"
            delay={0.1}
          />
          <StatsCard
            value={t('jpmall.stats.flightsValue')}
            suffix="+"
            label={t('jpmall.stats.flights')}
            accentColor="#FF6F00"
            delay={0.2}
          />
          <StatsCard
            value={t('jpmall.stats.yearsValue')}
            suffix={t('jpmall.stats.yearsSuffix')}
            label={t('jpmall.stats.years')}
            accentColor="#FF6F00"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Core Systems */}
      <Section id="systems" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('jpmall.systemsSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {t('jpmall.systemsSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemKeys.map((key, index) => {
            const Icon = systemIcons[index]
            const features = t(`jpmall.systems.${key}.features`, { returnObjects: true }) as string[]
            return (
              <GlowCard
                key={key}
                glowColor="rgba(255, 111, 0, 0.2)"
                delay={index * 0.1}
              >
                <div className="p-3 rounded-xl bg-jpmall-secondary/10 w-fit mb-4">
                  <Icon size={24} className="text-jpmall-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(`jpmall.systems.${key}.title`)}</h3>
                <p className="text-white/60 mb-4 text-sm">{t(`jpmall.systems.${key}.description`)}</p>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 rounded text-xs bg-jpmall-secondary/10 text-jpmall-accent"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </GlowCard>
            )
          })}
        </div>
      </Section>

      {/* Service Models */}
      <Section id="models" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('jpmall.modelsSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {t('jpmall.modelsSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modelKeys.map((key, index) => {
            const Icon = modelIcons[index]
            const highlights = t(`jpmall.models.${key}.highlights`, { returnObjects: true }) as string[]
            return (
              <GlowCard
                key={key}
                glowColor="rgba(255, 111, 0, 0.3)"
                delay={index * 0.15}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-jpmall-secondary/10">
                    <Icon size={28} className="text-jpmall-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-jpmall-secondary">
                      {t(`jpmall.models.${key}.title`)}
                    </h3>
                    <p className="text-sm text-white/40">{t(`jpmall.models.${key}.subtitle`)}</p>
                  </div>
                </div>
                <p className="text-white/60 mb-4">{t(`jpmall.models.${key}.description`)}</p>
                <p className="text-sm text-jpmall-accent mb-6">{t(`jpmall.models.${key}.suitable`)}</p>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-jpmall-secondary shrink-0" />
                      <span className="text-sm text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            )
          })}
        </div>
      </Section>

      {/* Advantages */}
      <Section className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('jpmall.advantages.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {t('jpmall.advantages.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantageKeys.map((key, index) => {
            const Icon = advantageIcons[index]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-jpmall-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-jpmall-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(`jpmall.advantages.${key}.title`)}</h3>
                <p className="text-white/60 text-sm">{t(`jpmall.advantages.${key}.description`)}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="border-t border-white/5">
        <div className="glass-card p-8 md:p-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('jpmall.cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            {t('jpmall.cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:contact@avinect.com"
              className="px-8 py-4 rounded-xl bg-jpmall-secondary text-white font-semibold hover:bg-jpmall-secondary/90 transition-colors"
            >
              {t('jpmall.cta.business')}
            </a>
            <a
              href="#systems"
              className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <CheckCircle2 size={20} />
              {t('jpmall.cta.systemCapabilities')}
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName={t('jpmall.heroTitle')} accentColor="#FF6F00" />
    </PageLayout>
  )
}
