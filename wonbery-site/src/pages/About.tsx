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

      {/* Hero Section */}
      <section className="relative pt-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${B}images/about/Office-large-3.jpg)` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0063dd]/70 via-[#0063dd]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              每天为<span className="text-primary">20+</span>航空公司
              <span className="text-primary">1000+</span>架飞机
              <span className="text-primary">10000+</span>员工提供服务
            </h1>
            <p className="text-white/60 text-lg max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Company Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 md:gap-12 mt-12"
          >
            {[
              { icon: Calendar, text: t('about.established') },
              { icon: Building2, text: t('about.capital') },
              { icon: MapPin, text: t('about.location') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto mb-3 bg-primary/10">
                  <item.icon size={28} className="text-primary" />
                </div>
                <span className="text-white/80 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('about.badge') === '关于我们' ? '公司简介' : 'Company Overview'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('about.company.description')}</p>
              <p className="text-gray-600 leading-relaxed">{t('about.company.team')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={B + 'images/about/Office-large-3.jpg'} alt="" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl mt-8">
                  <img src={B + 'images/about/office03.jpg'} alt="" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl col-span-2">
                  <img src={B + 'images/about/tjjapan02.jpg'} alt="" className="w-full h-48 object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold text-gray-900 text-center mb-12"
          >
            {t('about.badge') === '关于我们' ? '企业文化' : 'Corporate Culture'}
          </motion.h2>
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
      <section className="py-20 bg-white">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={B + 'images/about/ca_ryzs-1.jpg'} alt="" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={B + 'images/about/ca_cxcjqy-1.jpg'} alt="" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
