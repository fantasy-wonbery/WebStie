import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Plane,
  Radio,
  Monitor,
  MapPin,
  Shield,
  Users,
  Database,
  Brain,
  Cloud,
  BarChart3,
  Zap,
  ArrowRight,
  Mail,
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Section from '../components/Section'
import StatsBar from '../components/StatsBar'
import GlowCard from '../components/GlowCard'

/* ------------------------------------------------------------------ */
/*  Airline partner logos                                              */
/* ------------------------------------------------------------------ */
const airlineLogos = [
  'logo-tjakair.png',
  'logo-clair.png',
  'logo-xmair.png',
  'logo-hnhair.png',
  'logo-kmair.png',
  'logo-xbair.png',
  'logo-bbwair.png',
  'logo-jpair.png',
  'logo-cqair.png',
  'logo-xpair.png',
  'logo-sdair.png',
  'logo-hbair.png',
  'logo-tjair.png',
  'logo-zgair.png',
  'HTAir40.png',
  'JRAir40.png',
  'HXAir.png',
  'DZAir40.png',
  'DRAir40.png',
]

/* ------------------------------------------------------------------ */
/*  Service cards data                                                */
/* ------------------------------------------------------------------ */
interface ServiceDef {
  key: string
  icon: typeof Plane
  path: string
}

const serviceDefs: ServiceDef[] = [
  { key: 'operations', icon: Radio,    path: '/operations' },
  { key: 'airport',    icon: MapPin,   path: '/airport' },
  { key: 'aoc',        icon: Monitor,  path: '/aoc-solutions' },
  { key: 'crew',       icon: Users,    path: '/flight-crew' },
  { key: 'maintenance',icon: Shield,   path: '/service' },
  { key: 'data',       icon: Database, path: '/about' },
]

/* ------------------------------------------------------------------ */
/*  Tech icons                                                        */
/* ------------------------------------------------------------------ */
const techIcons = [Cloud, BarChart3, Brain, Zap]

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function Home() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('home.services.title'), href: '#services' },
    { label: t('home.products.title'), href: '#products' },
    { label: t('home.tech.title'),     href: '#tech' },
    { label: t('home.clients.title'),  href: '#clients' },
    { label: t('common.contactUs'),    href: '#contact' },
  ]

  /* Precompute radar blip positions */
  const blipAngles = [0, 60, 130, 210, 290]
  const blips = blipAngles.map((deg) => ({
    deg,
    top: `${50 - 42 * Math.cos((deg * Math.PI) / 180)}%`,
    left: `${50 + 42 * Math.sin((deg * Math.PI) / 180)}%`,
  }))

  return (
    <div className="min-h-screen bg-primary font-sans text-white">
      <Navigation items={navItems} />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 tech-grid opacity-30" />

        {/* Accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/8 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-20">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Plane size={14} className="text-accent" />
              <span className="text-accent text-sm font-medium">
                {t('home.badge')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-2"
            >
              {t('home.heroTitle')}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight gradient-text mb-6"
            >
              {t('home.heroTitleHighlight')}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-white/50 max-w-xl mb-10 leading-relaxed"
            >
              {t('home.heroDescription')}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium transition-colors"
              >
                {t('home.exploreProducts')}
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-colors"
              >
                {t('home.contactUs')}
              </a>
            </motion.div>
          </div>

          {/* Right: animated radar / airplane visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-accent/20"
              />
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-accent/15"
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-accent/10"
              />

              {/* Radar sweep */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left bg-gradient-to-r from-accent/60 to-transparent" />
              </motion.div>

              {/* Radar glow pulse */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-accent/10 blur-xl"
              />

              {/* Center airplane icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Plane size={28} className="text-accent" />
                </div>
              </div>

              {/* Orbiting dots - simulated aircraft blips */}
              {blips.map((blip, i) => (
                <motion.div
                  key={blip.deg}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.6 }}
                  className="absolute w-2 h-2 rounded-full bg-accent"
                  style={{
                    top: blip.top,
                    left: blip.left,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}

              {/* Cross-hairs */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-accent/10" />
              <div className="absolute left-0 right-0 top-1/2 h-px bg-accent/10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  STATS BAR                                                   */}
      {/* ============================================================ */}
      <Section>
        <StatsBar />
      </Section>

      {/* ============================================================ */}
      {/*  CORE BUSINESS AREAS                                         */}
      {/* ============================================================ */}
      <Section id="services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('home.services.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDefs.map((svc, i) => {
            const Icon = svc.icon
            return (
              <GlowCard key={svc.key} delay={i * 0.08}>
                <Link to={svc.path} className="block h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">
                    {t('home.services.items.' + svc.key + '.title')}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {t('home.services.items.' + svc.key + '.description')}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    {t('common.learnMore')}
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </GlowCard>
            )
          })}
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  CORE PRODUCTS                                               */}
      {/* ============================================================ */}
      <Section id="products" className="bg-surface/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('home.products.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t('home.products.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Product 1 - Flight Recovery */}
          <GlowCard delay={0}>
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
              <Zap size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              {t('home.products.recovery.title')}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t('home.products.recovery.description')}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {(['stat1', 'stat2', 'stat3'] as const).map((s) => (
                <div key={s} className="text-center">
                  <div className="text-lg font-display font-bold gradient-text">
                    {t('home.products.recovery.' + s + 'Value')}
                  </div>
                  <div className="text-white/40 text-xs mt-1">
                    {t('home.products.recovery.' + s + 'Label')}
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Product 2 - Voice Dispatch */}
          <GlowCard delay={0.1}>
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
              <Radio size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              {t('home.products.voice.title')}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t('home.products.voice.description')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {(['stat1', 'stat2'] as const).map((s) => (
                <div key={s} className="text-center">
                  <div className="text-lg font-display font-bold gradient-text">
                    {t('home.products.voice.' + s + 'Value')}
                  </div>
                  <div className="text-white/40 text-xs mt-1">
                    {t('home.products.voice.' + s + 'Label')}
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Product 3 - Flight Monitoring */}
          <GlowCard delay={0.2}>
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
              <Monitor size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              {t('home.products.monitoring.title')}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {t('home.products.monitoring.description')}
            </p>
          </GlowCard>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  CORE TECHNOLOGIES                                           */}
      {/* ============================================================ */}
      <Section id="tech">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('home.tech.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(t('home.tech.items', { returnObjects: true }) as string[]).map(
            (label, i) => {
              const Icon = techIcons[i]
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 md:p-8 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <span className="font-display font-semibold text-lg">
                    {label}
                  </span>
                </motion.div>
              )
            },
          )}
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  AIRLINE PARTNERS                                            */}
      {/* ============================================================ */}
      <Section id="clients" className="bg-surface/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('home.clients.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t('home.clients.subtitle')}
          </p>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 items-center justify-items-center"
        >
          {airlineLogos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass-card p-4 w-full flex items-center justify-center h-20"
            >
              <img
                src={'/images/airlines/' + logo}
                alt={logo.replace(/\.(png|jpg|svg)$/, '')}
                className="max-h-10 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ============================================================ */}
      {/*  CTA SECTION                                                 */}
      {/* ============================================================ */}
      <Section id="contact">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden glass-card p-10 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[150px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('home.cta.description')}
            </p>
            <a
              href={'mailto:' + t('home.cta.email')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium transition-colors text-lg"
            >
              <Mail size={20} />
              {t('home.cta.email')}
            </a>
          </div>
        </motion.div>
      </Section>

      {/* ============================================================ */}
      {/*  FOOTER                                                      */}
      {/* ============================================================ */}
      <Footer />
    </div>
  )
}
