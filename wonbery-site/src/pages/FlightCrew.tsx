import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

const B = import.meta.env.BASE_URL

export default function FlightCrew() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section - Blue gradient overlay */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${B}images/pages/flightcrew01.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0063dd]/70 via-[#0063dd]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {isZh ? (
                <>每天为<span className="text-primary">20+</span>航空公司
                <span className="text-primary">1000+</span>架飞机
                <span className="text-primary">10000+</span>员工提供服务</>
              ) : (
                <>Serving <span className="text-primary">20+</span> Airlines,
                <span className="text-primary">1000+</span> Aircraft,
                <span className="text-primary">10000+</span> Employees Daily</>
              )}
            </h1>
            <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed">
              {t('flightCrew.subtitle')}
            </p>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 md:gap-12 mt-12"
          >
            {(t('flightCrew.pillars', { returnObjects: true }) as string[]).map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto mb-3 bg-primary/10">
                  <span className="text-primary text-xl md:text-2xl font-bold">{pillar}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product 1: 电子飞行包 EFB - Left text, right image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('flightCrew.systems.efb.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('flightCrew.systems.efb.description')}
              </p>
              <ul className="space-y-3 mb-6">
                {(isZh ? [
                  '可视化界面，智能数据管理',
                  '减少纸质订购，降低运营成本',
                  '数据远程更新维护',
                  '减轻机舱载重，节约燃油成本'
                ] : [
                  'Visual interface, smart data management',
                  'Reduce paper orders, lower operational costs',
                  'Remote data update and maintenance',
                  'Reduce cabin weight, save fuel costs'
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/pages/ipad-flightbag02-512.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 2: 机组航前准备系统 - Right text, left image with animated stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/pages/flightcrew01.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('flightCrew.systems.preflight.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('flightCrew.systems.preflight.description')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                  <div className="text-3xl font-display font-bold text-primary">
                    <Counter end={85} suffix="%" />
                  </div>
                  <div className="text-gray-500 text-sm">{isZh ? '满意度提升' : 'Satisfaction Increase'}</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                  <div className="text-3xl font-display font-bold text-primary">
                    <Counter end={45} suffix="%" />
                  </div>
                  <div className="text-gray-500 text-sm">{isZh ? '效率提升' : 'Efficiency Increase'}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {(isZh ? ['即插即用', '7×24小时', '人脸识别'] : ['Plug & Play', '24/7 Service', 'Face Recognition']).map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 3: 证照管理平台 - Left text, right image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('flightCrew.systems.certificate.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('flightCrew.systems.certificate.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(isZh ? [
                  { title: '智能分析', desc: '自动提醒证照到期' },
                  { title: '能力优化', desc: '培训晋升追踪管理' },
                  { title: '高效管理', desc: '电子化存档与数据关联' },
                  { title: '定制报表', desc: '灵活的数据分析报告' },
                ] : [
                  { title: 'Smart Analysis', desc: 'Auto expiry reminders' },
                  { title: 'Skill Optimization', desc: 'Training & promotion tracking' },
                  { title: 'Efficient Management', desc: 'Digital archiving' },
                  { title: 'Custom Reports', desc: 'Flexible analytics' },
                ]).map((item) => (
                  <div key={item.title} className="p-4 bg-gray-50 rounded-xl">
                    <div className="font-display font-bold text-primary mb-1">{item.title}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/products/data-capture.png'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 4: SMS主动报告系统 - Right text, left image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/products/datalink.png'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('flightCrew.systems.sms.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('flightCrew.systems.sms.description')}
              </p>
              <ul className="space-y-3">
                {(isZh ? [
                  '建立风险源分布坐标系',
                  '规范化安全工作流程',
                  '移动端随时提交报告',
                  '云平台服务，成本可控'
                ] : [
                  'Build risk source distribution model',
                  'Standardized safety workflow',
                  'Mobile submission anytime',
                  'Cloud service, cost-effective'
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 5: 航班放行讲解系统 - Left text, right image with animated stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('flightCrew.systems.brief.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('flightCrew.systems.brief.description')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <div className="text-3xl font-display font-bold text-primary">
                    <Counter end={80} suffix="%" />
                  </div>
                  <div className="text-gray-500 text-sm">{isZh ? '满意度提升' : 'Satisfaction Increase'}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <div className="text-3xl font-display font-bold text-primary">
                    <Counter end={30} suffix="%" />
                  </div>
                  <div className="text-gray-500 text-sm">{isZh ? '效率提升' : 'Efficiency Increase'}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {(isZh ? ['员工卡登录', '指纹识别', '人脸识别'] : ['Card Login', 'Fingerprint', 'Face Recognition']).map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/products/Connected-aircraft.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
