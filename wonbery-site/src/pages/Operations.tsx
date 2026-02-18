import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const B = import.meta.env.BASE_URL

export default function Operations() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section - Dark with background image */}
      <section className="relative pt-16 bg-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${B}images/products/efw-mro-services01.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          {/* Stats banner */}
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

      {/* Product 1: AOC智能语音调度系统 - Left text, right images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('operations.systems.voice.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('operations.systems.voice.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                {(isZh ? ['单呼', '组呼', '群呼', '一键呼叫', '会议功能'] : ['Single Call', 'Group Call', 'Broadcast', 'One-Click Call', 'Conference']).map((tag) => (
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
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={B + 'images/products/ATalk.jpg'} alt="" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={B + 'images/products/atalk1.jpg'} alt="" className="w-full h-48 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 2: FOC航班运行管理系统 - Right text, left images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={B + 'images/products/Foc01_1024.jpg'} alt="" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={B + 'images/products/Foc02_1024.jpg'} alt="" className="w-full h-48 object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('operations.systems.foc.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('operations.systems.foc.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                {(isZh ? ['自动化', '规范化', '信息化'] : ['Automation', 'Standardization', 'Digitalization']).map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 3: 航班监控管理平台 - Left text, right image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('operations.systems.monitoring.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('operations.systems.monitoring.description')}
              </p>
              <ul className="space-y-3">
                {(isZh ? [
                  '资源整合（航图、气象、通告）图形化展示',
                  '预警值/范围设置与自动告警',
                  'ACARS、ADS-B、卫星链路数据补充',
                  '全球范围内跟踪定位',
                  '综合航图资源和气象分析'
                ] : [
                  'Integrated resources (charts, weather, NOTAMs) visualization',
                  'Alert thresholds and automatic warnings',
                  'ACARS, ADS-B, satellite data integration',
                  'Global tracking and positioning',
                  'Comprehensive aeronautical and weather analysis'
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
                <img src={B + 'images/products/dashboard02.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 4: FOC航空运行管理系统 - Right text, left image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/products/datalink01.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('operations.systems.focOps.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('operations.systems.focOps.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                {(isZh ? ['容器化部署', '智能风险预警', '快速定制开发'] : ['Containerized Deployment', 'Smart Risk Alerts', 'Rapid Customization']).map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 5: 航班协同放行平台 - Left text, right image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('operations.systems.collaboration.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('operations.systems.collaboration.description')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {(isZh ? [
                  { title: '丰富', desc: '文本、语音、文件、截图、白板' },
                  { title: '安全', desc: '私有化部署、数据本地存储' },
                  { title: '专注', desc: '与业务融合、消息分组管理' },
                  { title: '高效', desc: '群发消息、消息读取统计' },
                ] : [
                  { title: 'Rich', desc: 'Text, voice, files, screenshots' },
                  { title: 'Secure', desc: 'Private deployment, local storage' },
                  { title: 'Focused', desc: 'Business integration, grouping' },
                  { title: 'Efficient', desc: 'Broadcast, read statistics' },
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
