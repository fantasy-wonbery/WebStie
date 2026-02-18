import { useTranslation } from 'react-i18next'
import { MapPin, Radio, Gauge, ShieldAlert } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SystemCard from '../components/SystemCard'

export default function Airport() {
  const { t } = useTranslation()
  const pillars = t('airport.pillars', { returnObjects: true }) as string[]

  const systems = [
    { key: 'surface', icon: MapPin, image: 'images/products/dashboard02.jpg' },
    { key: 'tower', icon: Radio, image: 'images/products/datalink01.jpg' },
    { key: 'resource', icon: Gauge, image: 'images/products/Foc01_1024.jpg' },
    { key: 'drone', icon: ShieldAlert, image: 'images/products/passenger.jpg' },
  ]

  return (
    <div className="min-h-screen bg-primary">
      <Navigation showBack />
      <PageHero
        badge={t('airport.badge')}
        title={t('airport.title')}
        subtitle={t('airport.subtitle')}
        pillars={pillars}
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((sys, i) => (
            <SystemCard
              key={sys.key}
              icon={sys.icon}
              title={t(`airport.systems.${sys.key}.title`)}
              description={t(`airport.systems.${sys.key}.description`)}
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
