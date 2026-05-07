import { motion } from 'framer-motion'
import {
  Cpu,
  ShieldCheck,
  Landmark,
  Globe,
  Zap,
  Building2,
  Network,
  CheckCircle2,
  ArrowRight,
  Cable,
  Lock,
  Wind,
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

const pillarKeys = ['compute', 'compliance', 'treasury'] as const
const pillarIcons = [Cpu, ShieldCheck, Landmark]

const whyNowKeys = ['cost', 'risk', 'compliance'] as const
const whyNowIcons = [Zap, Globe, ShieldCheck]

const valueKeys = [
  'neutrality',
  'resilience',
  'cost',
  'latency',
  'compliance',
  'banking',
  'bridge',
] as const
const valueIcons = [Globe, ShieldCheck, Zap, Network, Lock, Building2, ArrowRight]

const engagementKeys = ['malaysia', 'gulf', 'supply'] as const
const engagementIcons = [Building2, Globe, Network]

const pathwayKeys = ['feature1', 'feature2', 'feature3'] as const
const pathwayIcons = [Cable, Lock, Wind]

const governanceKeys = ['parent', 'banking', 'compliance', 'settlement', 'audit'] as const

export default function Conexus() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('conexus.nav.about'), href: '#about' },
    { label: t('conexus.nav.pillars'), href: '#pillars' },
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

            <AnimatedText
              text={t('conexus.heroTitle')}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
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
                href="#pillars"
                className="px-6 py-3 rounded-xl bg-conexus-secondary text-conexus-primary font-semibold hover:bg-conexus-secondary/90 transition-colors"
              >
                {t('conexus.ctaPillars')}
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
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-conexus-primary to-[#1A2433] p-8 flex items-center justify-center relative overflow-hidden border border-conexus-secondary/10">
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="relative w-48 h-48 mx-auto mb-6"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-conexus-secondary/40" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-conexus-secondary shadow-[0_0_24px_rgba(212,175,55,0.6)]" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-conexus-secondary to-transparent -translate-y-1/2" />
                </motion.div>
                <div className="text-3xl font-display font-bold text-conexus-secondary mb-2">
                  {t('conexus.heroVisual.title')}
                </div>
                <div className="text-white/40 text-sm tracking-wide">
                  {t('conexus.heroVisual.subtitle')}
                </div>
              </div>

              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-16 bg-conexus-secondary rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-28 h-14 bg-conexus-accent rounded-full blur-2xl" />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-conexus-secondary/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-conexus-primary/40 blur-xl" />
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
            value={t('conexus.stats.costValue')}
            suffix={t('conexus.stats.costSuffix')}
            label={t('conexus.stats.cost')}
            accentColor="#D4AF37"
            delay={0.1}
          />
          <StatsCard
            value={t('conexus.stats.modelsValue')}
            suffix={t('conexus.stats.modelsSuffix')}
            label={t('conexus.stats.models')}
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

      {/* Problem Statement */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-conexus-secondary">
            {t('conexus.problemSection.title')}
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            {t('conexus.problemSection.body')}
          </p>
        </motion.div>
      </Section>

      {/* Why Now */}
      <Section className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('conexus.whyNowSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60"
          >
            {t('conexus.whyNowSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whyNowKeys.map((key, index) => {
            const Icon = whyNowIcons[index]
            return (
              <GlowCard
                key={key}
                glowColor="rgba(212, 175, 55, 0.2)"
                delay={index * 0.1}
              >
                <div className="p-3 rounded-xl bg-conexus-secondary/10 w-fit mb-4">
                  <Icon size={24} className="text-conexus-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`conexus.whyNow.${key}.title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`conexus.whyNow.${key}.description`)}
                </p>
              </GlowCard>
            )
          })}
        </div>
      </Section>

      {/* Three Pillars */}
      <Section id="pillars" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('conexus.pillarsSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-conexus-secondary tracking-wider font-display"
          >
            {t('conexus.pillarsSection.subtitle')}
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

      {/* Seven Value Pillars */}
      <Section className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('conexus.valueSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {t('conexus.valueSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueKeys.map((key, index) => {
            const Icon = valueIcons[index]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-conexus-secondary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-conexus-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`conexus.value.${key}.title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`conexus.value.${key}.description`)}
                </p>
              </motion.div>
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

      {/* Current Engagements */}
      <Section className="border-t border-white/5">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('conexus.engagementsSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60"
          >
            {t('conexus.engagementsSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {engagementKeys.map((key, index) => {
            const Icon = engagementIcons[index]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-conexus-secondary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-conexus-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`conexus.engagements.${key}.title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`conexus.engagements.${key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Governance */}
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
              href="mailto:contact@avinect.com?subject=Conexus%20%2F%20Initial%20Inquiry"
              className="px-8 py-4 rounded-xl bg-conexus-secondary text-conexus-primary font-semibold hover:bg-conexus-secondary/90 transition-colors"
            >
              {t('conexus.cta.email')}
            </a>
            <a
              href="#pillars"
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
