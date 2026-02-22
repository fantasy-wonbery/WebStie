import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import WaveDivider from '../components/WaveDivider'

const B = import.meta.env.BASE_URL

/* Text shadow style for readability on background images */
const textShadow = { textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }

export default function Operations() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section - Light blue overlay like original */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${B}images/pages/efw-mro-services01.jpg)` }}
        />
        {/* Light blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0063dd]/60 via-[#0063dd]/40 to-[#0063dd]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          {/* Stats banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6" style={textShadow}>
              {t('common.heroTitle')}
            </h1>
            <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed" style={textShadow}>
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
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/50 flex items-center justify-center mx-auto mb-3 bg-white/10 backdrop-blur-sm">
                  <span className="text-white text-xl md:text-2xl font-bold" style={textShadow}>{pillar}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* Product 1: AOC智能语音调度系统 - 有图片 */}
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
              <img src={B + 'images/products/ATalk.jpg'} alt="" className="w-full h-auto" />
              <img src={B + 'images/products/atalk1.jpg'} alt="" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider color="#f9fafb" />

      {/* Product 2: FOC航班运行管理系统 - 无图片，纯文字 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
              {t('operations.systems.foc.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('operations.systems.foc.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {(isZh ? ['自动化', '规范化', '信息化'] : ['Automation', 'Standardization', 'Digitalization']).map((tag) => (
                <span key={tag} className="px-6 py-3 rounded-full bg-primary text-white text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#ffffff" flip />

      {/* Product 3: 航班监控管理平台 - 无图片，纯文字列表 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
              {t('operations.systems.monitoring.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('operations.systems.monitoring.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {(isZh ? [
                '资源整合（航图、气象、通告）图形化展示',
                '预警值/范围设置与自动告警',
                'ACARS、ADS-B、卫星链路数据补充',
                '全球范围内跟踪定位',
                '综合航图资源和气象分析',
                '实时航班动态数据接口'
              ] : [
                'Integrated resources visualization',
                'Alert thresholds and warnings',
                'ACARS, ADS-B, satellite integration',
                'Global tracking and positioning',
                'Weather and chart analysis',
                'Real-time flight data API'
              ]).map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#f9fafb" />

      {/* Product 4: FOC航空运行管理系统 - 有图片 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={B + 'images/products/Foc01_1024.jpg'} alt="" className="w-full h-auto" />
              <img src={B + 'images/products/Foc02_1024.jpg'} alt="" className="w-full h-auto" />
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

      <WaveDivider color="#ffffff" flip />

      {/* Product 5: 航班协同放行平台 - 无图片，特性展示 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
              {t('operations.systems.collaboration.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('operations.systems.collaboration.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {(isZh ? [
                { title: '丰富', desc: '文本、语音、文件、截图' },
                { title: '安全', desc: '私有化部署、加密传输' },
                { title: '专注', desc: '与业务融合、消息分组' },
                { title: '高效', desc: '群发消息、读取统计' },
                { title: '统一', desc: '多端同步、消息历史' },
                { title: '协作', desc: '跨部门协同、实时通信' },
              ] : [
                { title: 'Rich', desc: 'Text, voice, files, screenshots' },
                { title: 'Secure', desc: 'Private deployment, encryption' },
                { title: 'Focused', desc: 'Business integration, grouping' },
                { title: 'Efficient', desc: 'Broadcast, read statistics' },
                { title: 'Unified', desc: 'Multi-device sync, history' },
                { title: 'Collaborative', desc: 'Cross-dept coordination' },
              ]).map((item) => (
                <div key={item.title} className="p-4 bg-gray-50 rounded-xl text-center">
                  <div className="font-display font-bold text-primary mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
