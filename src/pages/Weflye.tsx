import { motion } from 'framer-motion'
import {
  Wifi,
  Plane,
  Sparkles,
  Film,
  Gamepad2,
  Bot,
  Radio,
  Cloud,
  Rocket,
  ShoppingBag,
  Star,
  Users,
  ArrowRight,
  Smartphone,
  Zap,
  Play,
  MessageSquare,
  Gift,
  Layers,
  Crown,
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
  ParticleField,
} from '../components'
import { useTranslation } from 'react-i18next'

const journeyIcons = [Wifi, Film, ShoppingBag, Star, MessageSquare]
const journeyKeys = ['wifi', 'content', 'mall', 'starry', 'private'] as const
const journeyColors = ['#42A5F5', '#42A5F5', '#42A5F5', '#C5A55A', '#42A5F5']

const platformKeys = ['wifi', 'content', 'mall'] as const
const platformIcons = [Wifi, Film, ShoppingBag]
const platformGradients = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-orange-500 to-red-500']

const aiCapKeys = ['script', 'voice', 'video', 'game'] as const
const aiCapIcons = [Bot, Sparkles, Film, Gamepad2]

const starryFeatureKeys = ['collab', 'curated', 'gift'] as const
const starryFeatureIcons = [Crown, Star, Gift]

const pipelineIcons = [Bot, Sparkles, Film, Play]
const pipelineKeys = ['script', 'voice', 'visual', 'compose'] as const

const techStack = [
  'Stable Diffusion',
  'GPT-4',
  'Sora',
  'ElevenLabs',
  'Runway',
  'Midjourney',
]

export default function Weflye() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('weflye.nav.journey'), href: '#journey' },
    { label: t('weflye.nav.platform'), href: '#platform' },
    { label: t('weflye.nav.starrySky'), href: '#starrysky' },
    { label: t('weflye.nav.ai'), href: '#ai' },
    { label: t('weflye.nav.evtol'), href: '#evtol' },
    { label: t('weflye.nav.contact'), href: '#contact' },
  ]

  return (
    <PageLayout className="bg-weflye-primary">
      <ParticleField color="#42A5F5" count={500} />
      <FloatingOrbs colors={['#1565C0', '#42A5F5', '#0A1E3D']} />
      <Navigation
        brand="WeFlye"
        brandColor="#42A5F5"
        items={navItems}
        showBack
      />

      {/* Hero */}
      <Hero>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-weflye-accent/10 border border-weflye-accent/20 mb-8"
          >
            <Plane size={16} className="text-weflye-accent" />
            <span className="text-weflye-accent text-sm">B2C</span>
            <span className="text-white/30">|</span>
            <span className="text-weflye-accent text-sm">{t('weflye.badge')}</span>
          </motion.div>

          <AnimatedText
            text="WeFlye"
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold justify-center mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-weflye-accent mb-4"
          >
            {t('weflye.heroSubtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-white/50 mb-8 max-w-2xl mx-auto"
          >
            {t('weflye.heroDescription')}
            <br />
            <span className="text-white/30">
              {t('weflye.heroDescriptionSub')}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#journey"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-weflye-secondary to-weflye-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {t('weflye.exploreJourney')}
            </a>
            <a
              href="#starrysky"
              className="px-8 py-4 rounded-xl border border-starry-gold/40 text-starry-gold hover:bg-starry-gold/10 transition-colors flex items-center gap-2"
            >
              <Star size={20} />
              STARRY SKY
            </a>
          </motion.div>
        </div>

        {/* Animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 relative max-w-3xl mx-auto"
        >
          <div className="aspect-video rounded-3xl bg-gradient-to-br from-weflye-secondary/20 to-weflye-accent/10 border border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central phone symbol */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Smartphone size={80} className="text-weflye-accent" />
              </motion.div>

              {/* Orbiting planes */}
              {[0, 120, 240].map((angle) => (
                <motion.div
                  key={angle}
                  animate={{ rotate: [angle, angle + 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div style={{ transform: `translateX(150px)` }}>
                    <Plane
                      size={24}
                      className="text-weflye-accent/60"
                      style={{ transform: 'rotate(90deg)' }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Wave rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [0.3, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeOut',
                  }}
                  className="absolute w-24 h-24 rounded-full border border-weflye-accent"
                />
              ))}
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 tech-grid opacity-20" />
          </div>
        </motion.div>
      </Hero>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value="5"
            label={t('weflye.stats.touchpoints')}
            accentColor="#42A5F5"
            delay={0}
          />
          <StatsCard
            value="100"
            suffix="+"
            label={t('weflye.stats.aiContent')}
            accentColor="#42A5F5"
            delay={0.1}
          />
          <StatsCard
            value="30"
            suffix="+"
            label={t('weflye.stats.airlinePartners')}
            accentColor="#C5A55A"
            delay={0.2}
          />
          <StatsCard
            value="1000"
            suffix="万+"
            label={t('weflye.stats.passengers')}
            accentColor="#42A5F5"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Passenger Journey */}
      <Section id="journey" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('weflye.journey.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {t('weflye.journey.subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {journeyKeys.map((key, index) => {
              const Icon = journeyIcons[index]
              const color = journeyColors[index]
              return (
                <div key={key} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                      style={{
                        background: `linear-gradient(135deg, ${color}30, ${color}15)`,
                        border: `1px solid ${color}40`,
                      }}
                    >
                      <Icon size={28} style={{ color }} />
                    </div>
                    <span className="text-sm font-semibold mb-1">
                      {t(`weflye.journey.steps.${key}.label`)}
                    </span>
                    <span className="text-xs text-white/40">{t(`weflye.journey.steps.${key}.sublabel`)}</span>
                  </motion.div>
                  {index < journeyKeys.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 + 0.06 }}
                      className="hidden md:flex items-center"
                    >
                      <ArrowRight
                        size={20}
                        className="text-weflye-accent/40"
                      />
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Repurchase loop annotation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-weflye-accent/10 border border-weflye-accent/20">
              <Users size={14} className="text-weflye-accent" />
              <span className="text-weflye-accent text-xs">
                {t('weflye.journey.loop')}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Platform Features */}
      <Section id="platform" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('weflye.platform.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {t('weflye.platform.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {platformKeys.map((key, index) => {
            const Icon = platformIcons[index]
            const features = t(`weflye.platform.${key}.features`, { returnObjects: true }) as string[]
            return (
              <GlowCard
                key={key}
                glowColor="rgba(66, 165, 245, 0.3)"
                delay={index * 0.15}
                className="h-full"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platformGradients[index]} flex items-center justify-center mb-6`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-1">
                  {t(`weflye.platform.${key}.title`)}
                </h3>
                <p className="text-weflye-accent text-sm mb-4">
                  {t(`weflye.platform.${key}.subtitle`)}
                </p>
                <p className="text-white/60 mb-6">{t(`weflye.platform.${key}.description`)}</p>
                <div className="space-y-2">
                  {features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-white/50"
                    >
                      <Zap size={14} className="text-weflye-accent" />
                      {f}
                    </div>
                  ))}
                </div>
              </GlowCard>
            )
          })}
        </div>
      </Section>

      {/* STARRY SKY Premium Section */}
      <Section id="starrysky" className="border-t border-white/5 relative">
        {/* Deep blue overlay with gold glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-starry-dark/80 via-starry-primary/60 to-starry-dark/80 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-starry-gold/5 blur-[120px] pointer-events-none" />

        <div className="relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
              style={{
                background:
                  'linear-gradient(135deg, rgba(197,165,90,0.15), rgba(197,165,90,0.05))',
                border: '1px solid rgba(197,165,90,0.3)',
              }}
            >
              <Star size={16} className="text-starry-gold" />
              <span
                className="text-sm font-semibold tracking-wider"
                style={{ color: '#C5A55A' }}
              >
                {t('weflye.starrySky.badge')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            >
              <span style={{ color: '#C5A55A' }}>{t('weflye.starrySky.title')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-2"
              style={{ color: '#D4B96E' }}
            >
              {t('weflye.starrySky.subtitle')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 max-w-2xl mx-auto"
            >
              {t('weflye.starrySky.description')}
            </motion.p>
          </div>

          {/* Starry feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {starryFeatureKeys.map((key, index) => {
              const Icon = starryFeatureIcons[index]
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative"
                >
                  <div
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                    style={{ background: 'rgba(197,165,90,0.2)' }}
                  />
                  <div
                    className="relative p-6 md:p-8 rounded-2xl overflow-hidden"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(197,165,90,0.08), rgba(10,30,61,0.9))',
                      border: '1px solid rgba(197,165,90,0.2)',
                    }}
                  >
                    {/* Subtle gold shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent, rgba(197,165,90,0.1), transparent)',
                        }}
                      />
                    </div>

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(197,165,90,0.2), rgba(197,165,90,0.05))',
                        border: '1px solid rgba(197,165,90,0.3)',
                      }}
                    >
                      <Icon size={28} style={{ color: '#C5A55A' }} />
                    </div>
                    <h3
                      className="text-xl font-display font-bold mb-3"
                      style={{ color: '#D4B96E' }}
                    >
                      {t(`weflye.starrySky.features.${key}.title`)}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {t(`weflye.starrySky.features.${key}.description`)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Gold accent divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12"
          >
            <div
              className="h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #C5A55A, transparent)',
              }}
            />
          </motion.div>

          {/* Starry SKY value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div
              className="inline-block p-8 md:p-12 rounded-3xl max-w-3xl mx-auto"
              style={{
                background:
                  'linear-gradient(135deg, rgba(197,165,90,0.06), rgba(10,30,61,0.95))',
                border: '1px solid rgba(197,165,90,0.15)',
              }}
            >
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Star
                  size={48}
                  className="mx-auto mb-6"
                  style={{ color: '#C5A55A' }}
                />
              </motion.div>
              <p
                className="text-lg md:text-xl font-display leading-relaxed"
                style={{ color: '#D4B96E' }}
              >
                {t('weflye.starrySky.quote')}
              </p>
              <p className="text-white/40 text-sm mt-4">
                {t('weflye.starrySky.tagline')}
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* AI Content Factory */}
      <Section id="ai" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-weflye-accent/10 border border-weflye-accent/20 mb-6"
          >
            <Sparkles size={16} className="text-weflye-accent" />
            <span className="text-weflye-accent text-sm">{t('weflye.ai.badge')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('weflye.ai.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {t('weflye.ai.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiCapKeys.map((key, index) => {
            const Icon = aiCapIcons[index]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-weflye-accent/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-weflye-secondary/30 to-weflye-accent/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-weflye-accent" />
                </div>
                <h3 className="font-semibold mb-2">{t(`weflye.ai.capabilities.${key}.title`)}</h3>
                <p className="text-white/50 text-sm">{t(`weflye.ai.capabilities.${key}.description`)}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Production Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 mb-8"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            {t('weflye.ai.pipeline')}
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {pipelineKeys.map((key, index) => {
              const Icon = pipelineIcons[index]
              return (
                <div key={key} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-weflye-secondary to-weflye-accent flex items-center justify-center mb-2">
                      <Icon size={28} className="text-white" />
                    </div>
                    <span className="text-sm font-medium">{t(`weflye.ai.steps.${key}`)}</span>
                  </motion.div>
                  {index < 3 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                      className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-weflye-accent to-transparent"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">{t('weflye.ai.techStack')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-white/5 text-white/70 font-mono text-sm hover:bg-weflye-accent/20 hover:text-weflye-accent transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Low-altitude Economy / eVTOL */}
      <Section id="evtol" className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400 mb-4">
              {t('weflye.evtol.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {t('weflye.evtol.title')}
              <span className="text-weflye-accent">{t('weflye.evtol.titleHighlight')}</span>
            </h2>
            <p className="text-white/60 mb-6">
              {t('weflye.evtol.description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Radio size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('weflye.evtol.comm.title')}</h4>
                  <p className="text-white/50 text-sm">
                    {t('weflye.evtol.comm.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Cloud size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('weflye.evtol.network.title')}</h4>
                  <p className="text-white/50 text-sm">
                    {t('weflye.evtol.network.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Layers size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t('weflye.evtol.experience.title')}</h4>
                  <p className="text-white/50 text-sm">
                    {t('weflye.evtol.experience.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Rocket size={120} className="text-cyan-400" />
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
              <span className="text-cyan-400 font-mono text-sm">
                {t('weflye.evtol.ready')}
              </span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section id="contact" className="border-t border-white/5">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {t('weflye.cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            {t('weflye.cta.description')}
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-weflye-secondary to-weflye-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Sparkles size={20} />
              contact@avinect.com
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName="WeFlye" accentColor="#42A5F5" />
    </PageLayout>
  )
}
