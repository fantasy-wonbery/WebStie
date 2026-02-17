import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar, Building2, MapPin, Eye, Target, Heart, Lightbulb } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Section from '../components/Section'
import PageHero from '../components/PageHero'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
}

const values = [
  { key: 'vision', icon: Eye },
  { key: 'mission', icon: Target },
  { key: 'purpose', icon: Heart },
  { key: 'philosophy', icon: Lightbulb },
] as const

const facts = [
  { key: 'established', icon: Calendar },
  { key: 'capital', icon: Building2 },
  { key: 'location', icon: MapPin },
] as const

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-primary">
      <Navigation showBack />

      {/* Hero */}
      <PageHero
        badge={t('about.badge')}
        title={t('about.title')}
        subtitle={t('about.subtitle')}
      />

      {/* Company Description */}
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {(['description', 'team'] as const).map((key, i) => (
            <motion.div
              key={key}
              {...fadeUp}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative glass-card p-6 md:p-8 h-full">
                <p className="text-white/70 leading-relaxed text-[15px]">
                  {t(`about.company.${key}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Key Facts Bar */}
      <Section className="!py-0">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact, i) => {
              const Icon = fact.icon
              return (
                <motion.div
                  key={fact.key}
                  {...fadeUp}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-center gap-4 justify-center"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/80 font-medium text-[15px]">
                    {t(`about.${fact.key}`)}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Section>

      {/* Values */}
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.key}
                {...fadeUp}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative glass-card p-6 md:p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-white">
                      {t(`about.values.${value.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed text-[15px]">
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
