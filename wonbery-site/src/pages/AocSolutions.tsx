import { useTranslation } from 'react-i18next'
import { Headset, Monitor, Layout } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SystemCard from '../components/SystemCard'

export default function AocSolutions() {
  const { t } = useTranslation()
  const pillars = t('aocSolutions.pillars', { returnObjects: true }) as string[]

  const systems = [
    { key: 'consulting', icon: Headset, hasFeatures: false },
    { key: 'display', icon: Monitor, hasFeatures: false },
    { key: 'design', icon: Layout, hasFeatures: true },
  ]

  return (
    <div className="min-h-screen bg-primary">
      <Navigation showBack />
      <PageHero
        badge={t('aocSolutions.badge')}
        title={t('aocSolutions.title')}
        subtitle={t('aocSolutions.subtitle')}
        pillars={pillars}
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((sys, i) => (
            <SystemCard
              key={sys.key}
              icon={sys.icon}
              title={t(`aocSolutions.systems.${sys.key}.title`)}
              description={t(`aocSolutions.systems.${sys.key}.description`)}
              {...(sys.hasFeatures && {
                features: t(`aocSolutions.systems.${sys.key}.features`, { returnObjects: true }) as string[],
              })}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
