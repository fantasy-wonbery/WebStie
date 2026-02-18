import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const B = import.meta.env.BASE_URL

export default function Operations() {
  const { t } = useTranslation()

  const products = [
    {
      titleKey: 'voice',
      image: 'images/products/ATalk.jpg',
      features: ['一键群呼调度', 'VHF/800M混合通信', '多群组无缝切换'],
    },
    {
      titleKey: 'foc',
      image: 'images/products/Foc01_1024.jpg',
      features: ['自动化', '规范化', '信息化'],
    },
    {
      titleKey: 'monitoring',
      image: 'images/products/dashboard02.jpg',
      features: ['多源数据融合', '智能预警告警', '全球追踪定位'],
    },
    {
      titleKey: 'focOps',
      image: 'images/products/Foc02_1024.jpg',
      features: ['容器化部署', '智能风险预警', '快速定制开发'],
    },
    {
      titleKey: 'collaboration',
      image: 'images/products/Connected-aircraft.jpg',
      features: ['全功能通信', '私有化部署', '多部门协同'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section - Dark with background image */}
      <section className="relative pt-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${B}images/products/efw-mro-services01.jpg)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          {/* Stats banner */}
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
              {t('operations.description')}
            </p>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 md:gap-12 mt-12"
          >
            {(t('operations.pillars', { returnObjects: true }) as string[]).map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto mb-3 bg-primary/10">
                  <span className="text-primary text-xl md:text-2xl font-bold">{pillar}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Sections - Alternating layout */}
      {products.map((product, index) => {
        const isEven = index % 2 === 0
        return (
          <section key={product.titleKey} className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={isEven ? '' : 'md:order-2'}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                    {t(`operations.systems.${product.titleKey}.title`)}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t(`operations.systems.${product.titleKey}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.features.map((feature) => (
                      <span key={feature} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={isEven ? '' : 'md:order-1'}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={B + product.image}
                      alt={t(`operations.systems.${product.titleKey}.title`)}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      <Footer />
    </div>
  )
}
