import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const B = import.meta.env.BASE_URL

export default function Airport() {
  const { t } = useTranslation()

  const products = [
    {
      titleKey: 'surface',
      image: 'images/pages/airport11.jpg',
      image2: 'images/pages/airport22.jpg',
    },
    {
      titleKey: 'tower',
      image: 'images/pages/Air-Traffic-Control.jpg',
    },
    {
      titleKey: 'resource',
      image: 'images/products/dashboard02.jpg',
    },
    {
      titleKey: 'drone',
      image: 'images/pages/service15.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section */}
      <section className="relative pt-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${B}images/pages/Air-Traffic-Control.jpg)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark" />

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
              {t('airport.subtitle')}
            </p>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 md:gap-12 mt-12"
          >
            {(t('airport.pillars', { returnObjects: true }) as string[]).map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto mb-3 bg-primary/10">
                  <span className="text-primary text-xl md:text-2xl font-bold">{pillar}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => {
        const isEven = index % 2 === 0
        return (
          <section key={product.titleKey} className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid md:grid-cols-2 gap-12 items-center`}>
                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={isEven ? '' : 'md:order-2'}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                    {t(`airport.systems.${product.titleKey}.title`)}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`airport.systems.${product.titleKey}.description`)}
                  </p>
                </motion.div>

                {/* Image(s) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={isEven ? '' : 'md:order-1'}
                >
                  {product.image2 ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img src={B + product.image} alt="" className="w-full h-48 object-cover" />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img src={B + product.image2} alt="" className="w-full h-48 object-cover" />
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src={B + product.image} alt="" className="w-full h-auto" />
                    </div>
                  )}
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
