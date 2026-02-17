import { useTranslation } from 'react-i18next'
import { Tablet, ClipboardCheck, Award, ShieldCheck, FileCheck } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import SystemCard from '../components/SystemCard'

export default function FlightCrew() {
  const { t } = useTranslation()
  const pillars = t('flightCrew.pillars', { returnObjects: true }) as string[]

  const systems = [
    { key: 'efb', icon: Tablet },
    { key: 'preflight', icon: ClipboardCheck },
    { key: 'certificate', icon: Award },
    { key: 'sms', icon: ShieldCheck },
    { key: 'brief', icon: FileCheck },
  ]

  return (
    <div className="min-h-screen bg-primary">
      <Navigation showBack />
      <PageHero
        badge={t('flightCrew.badge')}
        title={t('flightCrew.title')}
        subtitle={t('flightCrew.subtitle')}
        pillars={pillars}
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((sys, i) => (
            <SystemCard
              key={sys.key}
              icon={sys.icon}
              title={t(`flightCrew.systems.${sys.key}.title`)}
              description={t(`flightCrew.systems.${sys.key}.description`)}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
