import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import WaveDivider from '../components/WaveDivider'

const B = import.meta.env.BASE_URL

/* Text shadow style for readability on background images */
const textShadow = { textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }

export default function AocSolutions() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  const products = [
    {
      titleKey: 'consulting',
      image: 'images/products/aoc01.jpg',
    },
    {
      titleKey: 'display',
      image: 'images/products/dashboard02.jpg',
    },
    {
      titleKey: 'design',
      image: 'images/products/efw-freighter01.jpg',
      features: ['智能化', '科技化', '现代化', '自动化', '人性化'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section - Light blue overlay like original */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center md:bg-fixed" style={{ backgroundImage: `url(${B}images/products/efw-freighter01.jpg)` }} />
        {/* Light blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0063dd]/60 via-[#0063dd]/40 to-[#0063dd]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6" style={textShadow}>
              {isZh ? (
                <>每天为<span className="text-white">20+</span>航空公司
                <span className="text-white">1000+</span>架飞机
                <span className="text-white">10000+</span>员工提供服务</>
              ) : (
                <>Serving <span className="text-white">20+</span> Airlines,
                <span className="text-white">1000+</span> Aircraft,
                <span className="text-white">10000+</span> Employees Daily</>
              )}
            </h1>
            <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed" style={textShadow}>
              {t('aocSolutions.subtitle')}
            </p>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 md:gap-12 mt-12"
          >
            {(t('aocSolutions.pillars', { returnObjects: true }) as string[]).map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/50 flex items-center justify-center mx-auto mb-3 bg-white/10 backdrop-blur-sm">
                  <span className="text-white text-xl md:text-2xl font-bold" style={textShadow}>{pillar}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => {
        const isEven = index % 2 === 0
        const bgColor = index % 2 === 1 ? 'bg-gray-50' : 'bg-white'
        const nextBgColor = index % 2 === 0 ? '#f9fafb' : '#ffffff'
        return (
          <div key={product.titleKey}>
            <section className={`py-20 ${bgColor}`}>
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Text content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={isEven ? '' : 'md:order-2'}
                  >
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                      {t(`aocSolutions.systems.${product.titleKey}.title`)}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {t(`aocSolutions.systems.${product.titleKey}.description`)}
                    </p>
                    {product.features && (
                      <div className="flex flex-wrap gap-3">
                        {(isZh ? product.features : ['Intelligent', 'Tech-focused', 'Modern', 'Automated', 'User-friendly']).map((feature) => (
                          <span key={feature} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Image - no border */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={isEven ? '' : 'md:order-1'}
                  >
                    <img src={B + product.image} alt="" className="w-full h-auto" />
                  </motion.div>
                </div>
              </div>
            </section>
            {index < products.length - 1 && (
              <WaveDivider color={nextBgColor} flip={index % 2 === 1} />
            )}
          </div>
        )
      })}

      <Footer />
    </div>
  )
}
