import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Radio,
  Monitor,
  MapPin,
  Users,
  Plane,
  Wrench,
  Layout,
  Cloud,
  BarChart3,
  Brain,
  Zap,
  ArrowRight,
  Mail,
  ChevronDown,
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const B = import.meta.env.BASE_URL

/* Airline partner logos */
const airlineLogos = [
  'logo-tjakair.png', 'logo-clair.png', 'logo-xmair.png', 'logo-hnhair.png',
  'logo-kmair.png', 'logo-xbair.png', 'logo-bbwair.png', 'logo-jpair.png',
  'logo-cqair.png', 'logo-xpair.png', 'logo-sdair.png', 'logo-hbair.png',
  'logo-tjair.png', 'logo-zgair.png', 'logo-nfair.png', 'logo-dcair.png',
  'logo-mhzj.png', 'logo-zgdfair.png',
  'HTAir40.png', 'JRAir40.png', 'HXAir.png', 'DZAir40.png', 'DRAir40.png',
]

/* Service categories matching original site */
const serviceCategories = [
  { key: 'passenger',    icon: Users,   path: '/operations', img: 'images/products/passenger.jpg' },
  { key: 'operations',   icon: Radio,   path: '/operations', img: 'images/products/ATalk.jpg' },
  { key: 'crew',         icon: Plane,   path: '/flight-crew', img: 'images/pages/flightcrew01.jpg' },
  { key: 'airport',      icon: MapPin,  path: '/airport', img: 'images/pages/Air-Traffic-Control.jpg' },
  { key: 'aoc',          icon: Layout,  path: '/aoc-solutions', img: 'images/products/aoc01.jpg' },
  { key: 'maintenance',  icon: Wrench,  path: '/service', img: 'images/pages/improve-operational-efficiency-header.jpg' },
]

/* Key products */
const products = [
  {
    key: 'recovery',
    icon: Zap,
    img: 'images/products/Foc01_1024.jpg',
    stats: [
      { labelKey: 'stat1Label', valueKey: 'stat1Value' },
      { labelKey: 'stat2Label', valueKey: 'stat2Value' },
      { labelKey: 'stat3Label', valueKey: 'stat3Value' },
    ],
  },
  {
    key: 'voice',
    icon: Radio,
    img: 'images/products/datalink01.jpg',
    stats: [
      { labelKey: 'stat1Label', valueKey: 'stat1Value' },
      { labelKey: 'stat2Label', valueKey: 'stat2Value' },
    ],
  },
  {
    key: 'monitoring',
    icon: Monitor,
    img: 'images/products/dashboard02.jpg',
    stats: [],
  },
]

const techIcons = [
  { icon: Cloud, key: 0 },
  { icon: BarChart3, key: 1 },
  { icon: Brain, key: 2 },
  { icon: Zap, key: 3 },
]

export default function Home() {
  const { t } = useTranslation()

  const navItems = [
    { label: t('nav.operations'), href: '#services' },
    { label: t('home.products.title'), href: '#products' },
    { label: t('home.tech.title'), href: '#tech' },
    { label: t('home.clients.title'), href: '#clients' },
    { label: t('common.contactUs'), href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation items={navItems} />

      {/* ============================================================ */}
      {/*  HERO - Dark gradient background like original               */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark-lighter">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${B}images/backgrounds/crypto-bg-04.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-3xl">
            {/* Stats banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8"
            >
              <Plane size={16} className="text-primary" />
              <span className="text-primary text-sm font-medium">
                {t('home.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4"
            >
              {t('home.heroTitle')}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-8"
            >
              {t('home.heroTitleHighlight')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/60 max-w-2xl mb-10 leading-relaxed"
            >
              {t('home.heroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#products" className="btn-primary">
                {t('home.exploreProducts')}
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                {t('home.contactUs')}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right side illustration */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        >
          <img
            src={B + 'images/illustrations/Crypto_Illustration_07-1.png'}
            alt=""
            className="w-full h-full object-contain opacity-60"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown size={28} className="text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  STATS BAR                                                   */}
      {/* ============================================================ */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {(['airlines', 'aircraft', 'employees', 'years'] as const).map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="stat-number">{t(`common.stats.${key}Value`)}</div>
                <div className="text-gray-500 text-sm mt-1">{t(`common.stats.${key}`)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICE CATEGORIES - Card grid with images                  */}
      {/* ============================================================ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((svc, i) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={svc.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link to={svc.path} className="group block">
                    <div className="card overflow-hidden p-0">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={B + svc.img}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <Icon size={20} className="text-white" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {t(`home.services.items.${svc.key}.title`)}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-3">
                          {t(`home.services.items.${svc.key}.description`)}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          {t('common.learnMore')}
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  KEY PRODUCTS - Dark section like original                   */}
      {/* ============================================================ */}
      <section id="products" className="py-24 bg-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${B}images/backgrounds/crypto-bg-02.png)` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('home.products.title')}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {t('home.products.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((prod, i) => {
              const Icon = prod.icon
              return (
                <motion.div
                  key={prod.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-dark overflow-hidden p-0"
                >
                  {/* Product image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={B + prod.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-white">
                        {t(`home.products.${prod.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {t(`home.products.${prod.key}.description`)}
                    </p>
                    {prod.stats.length > 0 && (
                      <div className={`grid grid-cols-${prod.stats.length} gap-3 pt-4 border-t border-white/10`}>
                        {prod.stats.map((s) => (
                          <div key={s.labelKey} className="text-center">
                            <div className="text-lg font-display font-bold text-primary">
                              {t(`home.products.${prod.key}.${s.valueKey}`)}
                            </div>
                            <div className="text-white/40 text-xs mt-1">
                              {t(`home.products.${prod.key}.${s.labelKey}`)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CORE TECHNOLOGIES                                           */}
      {/* ============================================================ */}
      <section id="tech" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.tech.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(t('home.tech.items', { returnObjects: true }) as string[]).map(
              (label, i) => {
                const Icon = techIcons[i].icon
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card flex flex-col items-center text-center gap-4 p-8"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <span className="font-display font-semibold text-lg text-gray-900">
                      {label}
                    </span>
                  </motion.div>
                )
              },
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AIRLINE PARTNERS                                            */}
      {/* ============================================================ */}
      <section id="clients" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {t('home.clients.title')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t('home.clients.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-items-center"
          >
            {airlineLogos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-white border border-gray-100 rounded-xl p-4 w-full flex items-center justify-center h-20 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <img
                  src={B + 'images/airlines/' + logo}
                  alt={logo.replace(/\.(png|jpg|svg)$/, '')}
                  className="max-h-10 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${B}images/backgrounds/crypto-bg-02b.png)` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
              {t('home.cta.description')}
            </p>
            <a
              href={'mailto:' + t('home.cta.email')}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-primary font-semibold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail size={20} />
              {t('home.cta.email')}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
