import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar, Building2, MapPin, Eye, Target, Heart, Lightbulb } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const B = import.meta.env.BASE_URL

const valueIcons = [Eye, Target, Heart, Lightbulb]

export default function About() {
  const { t } = useTranslation()

  const values = (['vision', 'mission', 'purpose', 'philosophy'] as const).map((key, i) => ({
    key,
    icon: valueIcons[i],
    title: t(`about.values.${key}.title`),
    description: t(`about.values.${key}.description`),
  }))

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${B}images/about/Office-large-3.jpg)` }} />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
            {t('about.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{t('about.title')}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Company stats */}
      <section className="relative -mt-12 z-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-3 gap-6"
          >
            {[
              { icon: Calendar, text: t('about.established') },
              { icon: Building2, text: t('about.capital') },
              { icon: MapPin, text: t('about.location') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon size={28} className="text-primary mx-auto mb-2" />
                <div className="font-display font-semibold text-gray-900">{item.text}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('about.badge') === '关于我们' ? '公司简介' : 'Company Overview'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('about.company.description')}</p>
              <p className="text-gray-600 leading-relaxed">{t('about.company.team')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                <img src={B + 'images/about/Office-large-3.jpg'} alt="" className="rounded-xl shadow-lg w-full h-48 object-cover" />
                <img src={B + 'images/about/office03.jpg'} alt="" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
                <img src={B + 'images/about/tjjapan02.jpg'} alt="" className="rounded-xl shadow-lg w-full h-48 object-cover col-span-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold text-gray-900 text-center mb-12"
          >
            {t('about.badge') === '关于我们' ? '公司资质' : 'Corporate Qualifications'}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card overflow-hidden p-0">
              <img src={B + 'images/about/ca_ryzs-1.jpg'} alt="" className="w-full h-64 object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card overflow-hidden p-0">
              <img src={B + 'images/about/ca_cxcjqy-1.jpg'} alt="" className="w-full h-64 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
