import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import WaveDivider from '../components/WaveDivider'

const B = import.meta.env.BASE_URL

/* Text shadow style for readability on background images */
const textShadow = { textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }

export default function ServiceSupport() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section - Light blue overlay like original */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${B}images/pages/improve-operational-efficiency-header.jpg)` }} />
        {/* Light blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0063dd]/60 via-[#0063dd]/40 to-[#0063dd]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6" style={textShadow}>
              {t('common.heroTitle')}
            </h1>
            <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed" style={textShadow}>
              {t('serviceSupport.subtitle')}
            </p>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 md:gap-12 mt-12"
          >
            {(t('serviceSupport.pillars', { returnObjects: true }) as string[]).map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/50 flex items-center justify-center mx-auto mb-3 bg-white/10 backdrop-blur-sm">
                  <span className="text-white text-xl md:text-2xl font-bold" style={textShadow}>{pillar}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product 1: 民用航空MSP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('serviceSupport.systems.msp.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('serviceSupport.systems.msp.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                {(isZh ? ['7×24小时', '远程支持', '现场服务', 'AWS', '阿里云', '华为云'] : ['24/7 Support', 'Remote Support', 'On-site Service', 'AWS', 'Alibaba Cloud', 'Huawei Cloud']).map((feature) => (
                  <span key={feature} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={B + 'images/pages/improve-operational-efficiency-header.jpg'} alt="" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider color="#f9fafb" />

      {/* Product 2: 超融合架构平台 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
              {t('serviceSupport.systems.hybrid.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('serviceSupport.systems.hybrid.description')}
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {(isZh ? [
                { title: '高可靠', desc: '99.999%可用性' },
                { title: '易部署', desc: '快速上线' },
                { title: '轻运维', desc: '自动化管理' },
              ] : [
                { title: 'Reliable', desc: '99.999% uptime' },
                { title: 'Easy Deploy', desc: 'Quick launch' },
                { title: 'Light Ops', desc: 'Auto management' },
              ]).map((item) => (
                <div key={item.title} className="p-4 bg-white rounded-xl shadow-sm text-center">
                  <div className="font-display font-bold text-primary text-lg mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {(isZh ? ['私有云', '公有云', '混合部署', '微服务架构'] : ['Private Cloud', 'Public Cloud', 'Hybrid', 'Microservices']).map((feature) => (
                <span key={feature} className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
