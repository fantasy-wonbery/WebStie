import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  Wifi,
  Radio,
  CreditCard,
  ArrowRight,
  Globe,
  Award,
  Users,
  Zap,
  ExternalLink,
  Star,
} from 'lucide-react'
import {
  PageLayout,
  Hero,
  Section,
  GlowCard,
  ParticleField,
  FloatingOrbs,
  StatsCard,
  LanguageSwitcher,
} from '../components'
import { useTranslation } from 'react-i18next'

const brandKeys = ['jpmall', 'weflye', 'wonbery', 'weworks'] as const

const brandMeta = {
  jpmall: { path: '/jpmall', icon: ShoppingBag, color: '#FF6F00', gradient: 'from-orange-500 to-amber-600' },
  weflye: { path: '/weflye', icon: Wifi, color: '#42A5F5', gradient: 'from-blue-500 to-indigo-600' },
  wonbery: { path: '/wonbery', icon: Radio, color: '#5FA8D3', gradient: 'from-blue-400 to-cyan-600' },
  weworks: { path: 'https://www.weworks.cn', icon: CreditCard, color: '#66BB6A', gradient: 'from-green-500 to-emerald-600', external: true },
}

const capabilityIcons = [Globe, Zap, Users, Award]
const capabilityKeys = ['global', 'tech', 'industry', 'barrier'] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <PageLayout className="bg-[#0A1E3D]">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}videos/hero_fly.mp4`} type="video/mp4" />
        </video>
        {/* Dark overlay to maintain theme */}
        <div className="absolute inset-0 bg-[#0A1E3D]/80" />
      </div>
      <ParticleField color="#ffffff" count={200} />
      <FloatingOrbs colors={['#1E3A5F', '#4A90D9', '#C5A55A']} />

      {/* Hero Section */}
      <Hero>
        <div className="text-center">
          {/* Language switcher for home page (no Navigation) */}
          <div className="fixed top-6 right-6 z-50">
            <LanguageSwitcher />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/50 tracking-wider">
              {t('home.badge')}
            </span>
          </motion.div>

          <motion.img
            src={`${import.meta.env.BASE_URL}avinect-logo.svg`}
            alt="AVINECT"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-16 md:h-20 lg:h-24 mx-auto mb-3"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/35 font-display tracking-widest mb-8"
          >
            {t('home.subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12"
          >
            {t('home.description')}
            <br />
            <span className="text-white/30">{t('home.descriptionSub')}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#brands"
              className="px-6 py-3 rounded-xl bg-white text-[#0A1E3D] font-semibold hover:bg-white/90 transition-colors"
            >
              {t('home.exploreBusiness')}
            </a>
            <a
              href="#capabilities"
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              {t('common.learnMore')}
            </a>
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard value="20" suffix="+" label={t('home.stats.airlines')} accentColor="#C5A55A" delay={0} />
          <StatsCard value="1000" suffix="+" label={t('home.stats.aircraft')} accentColor="#C5A55A" delay={0.1} />
          <StatsCard value="10000" suffix="+" label={t('home.stats.employees')} accentColor="#C5A55A" delay={0.2} />
          <StatsCard value="5" suffix="+" label={t('home.stats.regions')} accentColor="#C5A55A" delay={0.3} />
        </div>
      </Section>

      {/* Brand Architecture */}
      <Section id="brands">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.brandArchitecture')}</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t('home.brandArchitectureDesc')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {brandKeys.map((key) => {
            const meta = brandMeta[key]
            const isExternal = 'external' in meta && meta.external
            const name = t(`home.brands.${key}.name`)
            const tags = t(`home.brands.${key}.tags`, { returnObjects: true }) as string[]

            const card = (
              <GlowCard glowColor={`${meta.color}40`} className="h-full">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${meta.gradient}`}>
                    <meta.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-display font-bold">{name}</h3>
                      {isExternal && <ExternalLink size={14} className="text-white/30" />}
                    </div>
                    <p className="text-xs text-white/30 mb-1">{t(`home.brands.${key}.type`)}</p>
                    <p className="text-white/40 text-sm mb-2">{t(`home.brands.${key}.subtitle`)}</p>
                    <p className="text-white/55 mb-4">{t(`home.brands.${key}.description`)}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs bg-white/5 ${
                            tag === 'STARRY SKY' ? 'text-[#C5A55A] border border-[#C5A55A]/20' : 'text-white/50'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className="flex items-center gap-2 text-sm font-medium transition-colors"
                      style={{ color: meta.color }}
                    >
                      <span>{isExternal ? t('common.visitWebsite') : t('common.learnMore')}</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </GlowCard>
            )

            return (
              <motion.div key={key} variants={itemVariants}>
                {isExternal ? (
                  <a href={meta.path} target="_blank" rel="noopener noreferrer">{card}</a>
                ) : (
                  <Link to={meta.path}>{card}</Link>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* STARRY SKY highlight */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#091828] to-[#0A1E3D] border border-[#C5A55A]/20 p-8 md:p-12"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Star size={24} className="text-[#C5A55A]" />
                <span className="text-[#C5A55A] font-display font-bold text-2xl tracking-wider">
                  {t('home.starrySky.title')}
                </span>
              </div>
              <p className="text-white/50 mb-4">
                {t('home.starrySky.description')}
              </p>
              <Link
                to="/weflye"
                className="inline-flex items-center gap-2 text-[#C5A55A] hover:text-[#D4B96E] transition-colors font-medium"
              >
                {t('common.learnMore')} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#C5A55A]/20 to-[#C5A55A]/5 flex items-center justify-center">
              <Star size={56} className="text-[#C5A55A]" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A55A]/5 rounded-full blur-3xl" />
        </motion.div>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('home.capabilities.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            {t('home.capabilities.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityKeys.map((key, index) => {
            const Icon = capabilityIcons[index]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-white/80" />
                </div>
                <h3 className="font-semibold mb-2">{t(`home.capabilities.${key}.title`)}</h3>
                <p className="text-white/40 text-sm">{t(`home.capabilities.${key}.description`)}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <a
            href="mailto:contact@avinect.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0A1E3D] font-semibold hover:bg-white/90 transition-colors"
          >
            contact@avinect.com
          </a>
        </motion.div>
      </Section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Avinect Group. All rights reserved.
          </p>
        </div>
      </footer>
    </PageLayout>
  )
}
