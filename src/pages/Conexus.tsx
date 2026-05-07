import { motion } from 'framer-motion'
import {
  Cpu,
  ShieldCheck,
  Landmark,
  Network,
  CheckCircle2,
  ArrowRight,
  Cable,
  Lock,
  Wind,
  ClipboardList,
  PackageCheck,
  Activity,
} from 'lucide-react'
import {
  PageLayout,
  Hero,
  Section,
  GlowCard,
  Navigation,
  StatsCard,
  Footer,
  FloatingOrbs,
} from '../components'
import { useTranslation } from 'react-i18next'


const pillarKeys = ['compute', 'compliance', 'treasury'] as const
const pillarIcons = [Cpu, ShieldCheck, Landmark]

const pathwayKeys = ['feature1', 'feature2', 'feature3'] as const
const pathwayIcons = [Cable, Lock, Wind]

const approachKeys = ['engagement', 'delivery', 'operations'] as const
const approachIcons = [ClipboardList, PackageCheck, Activity]

const governanceKeys = ['parent', 'banking', 'compliance', 'settlement', 'audit'] as const

export default function Conexus() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('conexus.nav.about'), href: '#about' },
    { label: t('conexus.nav.services'), href: '#services' },
    { label: t('conexus.nav.pathway'), href: '#pathway' },
    { label: t('conexus.nav.contact'), href: '#contact' },
  ]

  return (
    <PageLayout className="bg-gradient-to-b from-[#0B1320] to-[#070C16]">
      <FloatingOrbs colors={['#D4AF37', '#B98A2E', '#1A2433']} />
      <Navigation
        brand={t('conexus.heroTitle')}
        brandColor="#D4AF37"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-conexus-secondary/10 border border-conexus-secondary/20 mb-6"
            >
              <Network size={16} className="text-conexus-secondary" />
              <span className="text-conexus-secondary text-sm">{t('conexus.badge')}</span>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              src={`${import.meta.env.BASE_URL}images/conexus/wordmark.png`}
              alt="CONEXUS"
              className="block mb-6 h-12 md:h-16 lg:h-20 w-auto"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl text-conexus-secondary mb-4 font-display tracking-wide"
            >
              {t('conexus.heroSubtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/50 mb-8 max-w-lg leading-relaxed"
            >
              {t('conexus.heroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-conexus-secondary text-conexus-primary font-semibold hover:bg-conexus-secondary/90 transition-colors"
              >
                {t('conexus.ctaServices')}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                {t('conexus.ctaContact')}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-conexus-secondary/5 blur-3xl" />
            <img
              src={`${import.meta.env.BASE_URL}images/conexus/mark-primary.png`}
              alt="Conexus mark"
              className="relative w-4/5 h-4/5 object-contain"
            />

            <div className="absolute -bottom-4 left-0 right-0 text-center pointer-events-none">
              <div className="text-xs font-display tracking-[0.4em] text-conexus-stone/70 mb-1">
                {t('conexus.heroVisual.title')}
              </div>
              <div className="text-[10px] text-white/30 tracking-wider">
                {t('conexus.heroVisual.subtitle')}
              </div>
            </div>
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section id="about">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value={t('conexus.stats.latencyValue')}
            suffix={t('conexus.stats.latencySuffix')}
            label={t('conexus.stats.latency')}
            accentColor="#D4AF37"
            delay={0}
          />
          <StatsCard
            value={t('conexus.stats.modelsValue')}
            suffix={t('conexus.stats.modelsSuffix')}
            label={t('conexus.stats.models')}
            accentColor="#D4AF37"
            delay={0.1}
          />
          <StatsCard
            value={t('conexus.stats.currenciesValue')}
            suffix={t('conexus.stats.currenciesSuffix')}
            label={t('conexus.stats.currencies')}
            accentColor="#D4AF37"
            delay={0.2}
          />
          <StatsCard
            value={t('conexus.stats.bandwidthValue')}
            suffix={t('conexus.stats.bandwidthSuffix')}
            label={t('conexus.stats.bandwidth')}
            accentColor="#D4AF37"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Services / Three Pillars */}
      <Section id="services" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('conexus.servicesSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-conexus-secondary tracking-wider font-display"
          >
            {t('conexus.servicesSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillarKeys.map((key, index) => {
            const Icon = pillarIcons[index]
            const highlights = t(`conexus.pillars.${key}.highlights`, {
              returnObjects: true,
            }) as string[]
            return (
              <GlowCard
                key={key}
                glowColor="rgba(212, 175, 55, 0.3)"
                delay={index * 0.15}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-conexus-secondary/10">
                    <Icon size={28} className="text-conexus-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-conexus-secondary">
                      {t(`conexus.pillars.${key}.title`)}
                    </h3>
                    <p className="text-sm text-white/40">
                      {t(`conexus.pillars.${key}.subtitle`)}
                    </p>
                  </div>
                </div>
                <p className="text-white/60 mb-6 text-sm leading-relaxed">
                  {t(`conexus.pillars.${key}.description`)}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-conexus-secondary shrink-0"
                      />
                      <span className="text-sm text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            )
          })}
        </div>
      </Section>

      {/* The Shantou Pathway */}
      <Section id="pathway" className="border-t border-white/5">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('conexus.pathwaySection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-conexus-secondary mb-8"
          >
            {t('conexus.pathwaySection.subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            {t('conexus.pathwaySection.body')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pathwayKeys.map((key, index) => {
            const Icon = pathwayIcons[index]
            return (
              <GlowCard
                key={key}
                glowColor="rgba(212, 175, 55, 0.15)"
                delay={index * 0.1}
              >
                <div className="p-3 rounded-xl bg-conexus-secondary/10 w-fit mb-4">
                  <Icon size={24} className="text-conexus-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`conexus.pathwaySection.${key}Title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`conexus.pathwaySection.${key}Description`)}
                </p>
              </GlowCard>
            )
          })}
        </div>
      </Section>

      {/* How We Work / Service Approach */}
      <Section className="border-t border-white/5">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('conexus.approachSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60"
          >
            {t('conexus.approachSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {approachKeys.map((key, index) => {
            const Icon = approachIcons[index]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-conexus-secondary/10 flex items-center justify-center">
                    <Icon size={20} className="text-conexus-secondary" />
                  </div>
                  <span className="text-xs text-conexus-secondary font-display tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`conexus.approach.${key}.title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`conexus.approach.${key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Company Information / Governance */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
            {t('conexus.governanceSection.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {governanceKeys.map((key) => (
              <div
                key={key}
                className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0"
              >
                <div className="text-conexus-secondary text-sm font-semibold tracking-wider uppercase shrink-0 w-24">
                  {t(`conexus.governanceSection.${key}`)}
                </div>
                <div className="text-white/70 text-sm leading-relaxed">
                  {t(`conexus.governanceSection.${key}Value`)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Group Lockup */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/conexus/group-lockup.png`}
            alt="Avinect Group | Conexus"
            className="max-w-full md:max-w-3xl h-auto"
          />
        </motion.div>
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
            {t('conexus.cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t('conexus.cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:contact@avinect.com?subject=Conexus"
              className="px-8 py-4 rounded-xl bg-conexus-secondary text-conexus-primary font-semibold hover:bg-conexus-secondary/90 transition-colors"
            >
              {t('conexus.cta.email')}
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <ArrowRight size={20} />
              {t('conexus.cta.learnMore')}
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName={t('conexus.heroTitle')} accentColor="#D4AF37" />
    </PageLayout>
  )
}
