import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const navLinks = [
    { label: t('nav.operations'), path: '/operations' },
    { label: t('nav.airport'), path: '/airport' },
    { label: t('nav.aocSolutions'), path: '/aoc-solutions' },
    { label: t('nav.flightCrew'), path: '/flight-crew' },
    { label: t('nav.serviceSupport'), path: '/service' },
    { label: t('nav.about'), path: '/about' },
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company info */}
          <div>
            <img
              src={import.meta.env.BASE_URL + 'images/wonbery-gray-89.png'}
              alt="Wonbery"
              className="h-8 mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              {t('common.slogan')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('nav.home')}</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/50 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('common.contactUs')}</h4>
            <div className="space-y-3">
              <a
                href="mailto:service@wonbery.com"
                className="flex items-center gap-2 text-white/50 hover:text-primary text-sm transition-colors"
              >
                <Mail size={14} />
                service@wonbery.com
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Phone size={14} />
                010-82896289
              </div>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                {t('about.location')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-white/30 text-xs">
            {t('common.copyright', { year })}
          </span>
          <a
            href={import.meta.env.BASE_URL.replace('wonbery/', '')}
            className="text-white/30 hover:text-primary text-xs transition-colors"
          >
            ← Avinect Group
          </a>
        </div>
      </div>
    </footer>
  )
}
