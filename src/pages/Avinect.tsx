import { motion } from 'framer-motion'
import {
  Globe,
  Plane,
  CreditCard,
  Users,
  MapPin,
  CheckCircle2,
  Smartphone,
  ShoppingBag,
  Headphones,
  BarChart3,
} from 'lucide-react'
import {
  PageLayout,
  Hero,
  Section,
  GlowCard,
  AnimatedText,
  Navigation,
  StatsCard,
  Footer,
  FloatingOrbs,
} from '../components'

const navItems = [
  { label: '关于我们', href: '#about' },
  { label: '解决方案', href: '#solutions' },
  { label: '服务市场', href: '#markets' },
  { label: '联系我们', href: '#contact' },
]

const solutions = [
  {
    icon: CreditCard,
    title: '机上支付解决方案',
    description: '为航空公司提供完整的机上支付系统，支持多种支付方式，确保交易安全便捷',
    features: ['SoftPOS 软件收银', 'mPOS 移动支付终端', '多币种结算', '离线交易支持'],
  },
  {
    icon: ShoppingBag,
    title: '客舱零售系统',
    description: '一站式机上零售管理平台，从商品管理到销售分析的全流程数字化',
    features: ['商品目录管理', '库存实时同步', '销售数据分析', '乘务员培训'],
  },
  {
    icon: Smartphone,
    title: '数字化服务平台',
    description: '帮助航空公司构建数字化服务能力，提升旅客体验与运营效率',
    features: ['旅客自助服务', '移动端解决方案', '数据集成接口', '定制化开发'],
  },
  {
    icon: Headphones,
    title: '运营支持服务',
    description: '提供专业的运营咨询与技术支持，确保系统稳定运行',
    features: ['7×24 技术支持', '系统运维服务', '业务流程优化', '人员培训'],
  },
]

const targetMarkets = [
  { region: '东南亚', countries: '新加坡、马来西亚、泰国、越南、印尼', flag: '🌏' },
  { region: '中东', countries: '阿联酋、沙特阿拉伯、卡塔尔、科威特', flag: '🌍' },
  { region: '港澳台', countries: '香港、澳门、台湾', flag: '🌐' },
]

const advantages = [
  '深耕航空行业，深刻理解业务场景',
  '成熟的技术平台，快速部署上线',
  '本地化服务团队，及时响应需求',
  '灵活的合作模式，按需定制方案',
  '丰富的行业经验，降低实施风险',
  '持续的产品迭代，紧跟行业趋势',
]

const caseStudies = [
  {
    airline: '香港航空',
    project: '机上支付系统升级',
    status: '实施中',
    highlights: ['Antom 支付集成', 'SoftPOS 部署', '多币种支持'],
  },
]

export default function Avinect() {
  return (
    <PageLayout className="bg-avinect-primary">
      <FloatingOrbs colors={['#00BCD4', '#1E88E5', '#0A2540']} />
      <Navigation
        brand="Avinect"
        brandColor="#00BCD4"
        items={navItems}
        showBack
      />

      {/* Hero */}
      <Hero>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-avinect-accent/10 border border-avinect-accent/20 mb-6"
            >
              <MapPin size={16} className="text-avinect-accent" />
              <span className="text-avinect-accent text-sm">Hong Kong</span>
            </motion.div>

            <AnimatedText
              text="Avinect"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 mb-2"
            >
              艾维科技
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/40 mb-8 max-w-lg"
            >
              国际航空科技服务商，专注为亚太及中东地区航空公司提供
              数字化支付、客舱零售及运营支持解决方案。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#solutions"
                className="px-6 py-3 rounded-xl bg-avinect-accent text-avinect-primary font-semibold hover:bg-avinect-accent/90 transition-colors"
              >
                解决方案
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                联系我们
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-avinect-accent/20 to-avinect-secondary/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <Plane size={100} className="text-avinect-accent mx-auto mb-6 opacity-80" />
                <div className="text-3xl font-display font-bold text-avinect-accent mb-2">
                  International
                </div>
                <div className="text-white/60">Aviation Technology</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-avinect-accent/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-avinect-secondary/10 blur-xl" />
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value="3"
            label="服务区域"
            accentColor="#00BCD4"
            delay={0}
          />
          <StatsCard
            value="10"
            suffix="+"
            label="合作航司"
            accentColor="#00BCD4"
            delay={0.1}
          />
          <StatsCard
            value="99.9"
            suffix="%"
            label="系统可用性"
            accentColor="#00BCD4"
            delay={0.2}
          />
          <StatsCard
            value="24"
            suffix="/7"
            label="技术支持"
            accentColor="#00BCD4"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Solutions */}
      <Section id="solutions" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            解决方案
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            为航空公司提供端到端的数字化解决方案
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <GlowCard
              key={solution.title}
              glowColor="rgba(0, 188, 212, 0.3)"
              delay={index * 0.1}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-avinect-accent/10">
                  <solution.icon size={24} className="text-avinect-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-white/60 mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 rounded text-xs bg-white/5 text-white/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Target Markets */}
      <Section id="markets" className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              服务市场
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 mb-8"
            >
              立足香港，服务亚太与中东地区航空公司，提供本地化的技术支持与服务
            </motion.p>

            <div className="space-y-4">
              {targetMarkets.map((market, index) => (
                <motion.div
                  key={market.region}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{market.flag}</span>
                    <span className="font-semibold">{market.region}</span>
                  </div>
                  <p className="text-white/60 text-sm ml-10">{market.countries}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart3 size={24} className="text-avinect-accent" />
              客户案例
            </h3>
            <div className="space-y-4">
              {caseStudies.map((study) => (
                <div key={study.airline} className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium">{study.airline}</div>
                      <div className="text-white/40 text-sm">{study.project}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs bg-avinect-accent/20 text-avinect-accent">
                      {study.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {study.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle2 size={14} className="text-avinect-accent" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Advantages */}
      <Section className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            为什么选择 Avinect
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 size={20} className="text-avinect-accent flex-shrink-0" />
              <span>{advantage}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="border-t border-white/5">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            联系我们
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8"
          >
            期待与您探讨数字化解决方案，助力业务增长
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="mailto:contact@avinect.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-avinect-accent text-avinect-primary font-semibold hover:bg-avinect-accent/90 transition-colors"
            >
              contact@avinect.com
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName="Avinect" accentColor="#00BCD4" />
    </PageLayout>
  )
}
