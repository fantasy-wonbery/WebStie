import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const B = import.meta.env.BASE_URL

export default function Airport() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  return (
    <div className="min-h-screen bg-white">
      <Navigation showBack />

      {/* Hero Section */}
      <section className="relative pt-16 bg-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${B}images/pages/Air-Traffic-Control.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />

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

      {/* Product 1: 机坪监管平台 - Left text, right images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('airport.systems.surface.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('airport.systems.surface.description')}
              </p>
              <ul className="space-y-3">
                {(isZh ? [
                  '场面车辆实时监控与调度',
                  '电子围栏与越界告警',
                  '航班保障进程可视化',
                  '统计分析与报表输出'
                ] : [
                  'Real-time vehicle monitoring & dispatch',
                  'Electronic fence & boundary alerts',
                  'Flight service visualization',
                  'Statistics analysis & reporting'
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
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={B + 'images/pages/airport11.jpg'} alt="" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={B + 'images/pages/airport22.jpg'} alt="" className="w-full h-48 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 2: 塔台管理系统 - Right text, left image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/pages/Air-Traffic-Control.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('airport.systems.tower.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('airport.systems.tower.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                {(isZh ? ['航班动态', '停机位管理', '跑道监控', '通信调度'] : ['Flight Dynamics', 'Gate Management', 'Runway Monitoring', 'Communication']).map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 3: 机场资源管理 - Left text, right image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('airport.systems.resource.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('airport.systems.resource.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(isZh ? [
                  { title: '停机位分配', desc: '智能算法优化' },
                  { title: '登机口管理', desc: '实时状态监控' },
                  { title: '廊桥调度', desc: '自动化对接' },
                  { title: '行李转盘', desc: '流量均衡分配' },
                ] : [
                  { title: 'Gate Assignment', desc: 'AI optimization' },
                  { title: 'Boarding Gate', desc: 'Real-time status' },
                  { title: 'Jet Bridge', desc: 'Auto docking' },
                  { title: 'Baggage Carousel', desc: 'Load balancing' },
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
                <img src={B + 'images/products/dashboard02.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 4: 无人机管控平台 - Right text, left image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={B + 'images/pages/service15.jpg'} alt="" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                {t('airport.systems.drone.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('airport.systems.drone.description')}
              </p>
              <ul className="space-y-3">
                {(isZh ? [
                  '无人机飞行申报与审批',
                  '空域管理与冲突检测',
                  '实时轨迹追踪',
                  '电子围栏与驱离系统'
                ] : [
                  'Drone flight application & approval',
                  'Airspace management & conflict detection',
                  'Real-time trajectory tracking',
                  'Electronic fence & deterrence system'
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

      <Footer />
    </div>
  )
}
