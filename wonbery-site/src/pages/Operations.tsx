import { useTranslation } from 'react-i18next'
import { Radio, Monitor, Radar, Container, MessageSquareMore } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SystemCard from '../components/SystemCard'

export default function Operations() {
  const { t } = useTranslation()
  const pillars = t('operations.pillars', { returnObjects: true }) as string[]

  const systems = [
    { key: 'voice', icon: Radio, image: 'images/products/datalink01.jpg' },
    { key: 'foc', icon: Monitor, image: 'images/products/Foc01_1024.jpg' },
    { key: 'monitoring', icon: Radar, image: 'images/products/dashboard02.jpg' },
    { key: 'focOps', icon: Container, image: 'images/products/Foc02_1024.jpg' },
    { key: 'collaboration', icon: MessageSquareMore, image: 'images/products/Connected-aircraft.jpg' },
  ]

  return (
    <div className="min-h-screen bg-primary">
      <Navigation showBack />
      <PageHero
        badge={t('operations.badge')}
        title={t('operations.title')}
        subtitle={t('operations.subtitle')}
        pillars={pillars}
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((sys, i) => (
            <SystemCard
              key={sys.key}
              icon={sys.icon}
              title={t(`operations.systems.${sys.key}.title`)}
              description={t(`operations.systems.${sys.key}.description`)}
              features={t(`operations.systems.${sys.key}.features`, { returnObjects: true }) as string[]}
              image={sys.image}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
