import { useTranslation } from 'react-i18next'
import { Cloud, Server } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SystemCard from '../components/SystemCard'

export default function ServiceSupport() {
  const { t } = useTranslation()
  const pillars = t('serviceSupport.pillars', { returnObjects: true }) as string[]

  const systems = [
    { key: 'msp', icon: Cloud, hasFeatures: false, image: 'images/products/efw-freighter01.jpg' },
    { key: 'hybrid', icon: Server, hasFeatures: true, image: 'images/products/Foc02_1024.jpg' },
  ]

  return (
    <div className="min-h-screen bg-primary">
      <Navigation showBack />
      <PageHero
        badge={t('serviceSupport.badge')}
        title={t('serviceSupport.title')}
        subtitle={t('serviceSupport.subtitle')}
        pillars={pillars}
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((sys, i) => (
            <SystemCard
              key={sys.key}
              icon={sys.icon}
              title={t(`serviceSupport.systems.${sys.key}.title`)}
              description={t(`serviceSupport.systems.${sys.key}.description`)}
              image={sys.image}
              {...(sys.hasFeatures && {
                features: t(`serviceSupport.systems.${sys.key}.features`, { returnObjects: true }) as string[],
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
