import { motion } from 'framer-motion'
import {
  ShoppingBag,
  Monitor,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Users,
  CheckCircle2,
  Globe,
  Shield,
  Layers,
  ArrowRight,
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
  { label: '关于鲸品', href: '#about' },
  { label: '核心系统', href: '#systems' },
  { label: '服务模式', href: '#models' },
  { label: '联系我们', href: '#contact' },
]

const coreSystems = [
  {
    icon: Monitor,
    title: '机上销售管理系统',
    description: '自主研发的全流程机上销售管理平台，覆盖订单、库存、结算、数据分析等完整业务链条',
    features: ['订单全生命周期管理', '实时库存管控', '多维度数据报表'],
  },
  {
    icon: CreditCard,
    title: '离线支付系统',
    description: '专为航空场景设计的离线收银解决方案，支持多种支付方式，确保万米高空交易安全可靠',
    features: ['离线交易能力', '多支付方式', '安全加密传输'],
  },
  {
    icon: ShoppingBag,
    title: '商城运营平台',
    description: '面向航司的一站式电商运营系统，支持商品管理、营销活动、会员体系等运营能力',
    features: ['商品全品类管理', '灵活营销工具', '会员积分体系'],
  },
  {
    icon: Package,
    title: '供应链管理',
    description: '从采购寻源、仓储管理到机上配送的全链路供应链数字化管理',
    features: ['集中采购管理', '智能仓储系统', '质量追溯体系'],
  },
  {
    icon: Truck,
    title: '物流配送系统',
    description: '航空专属物流配送管理系统，精准对接航班计划，保障商品准时上机',
    features: ['航班动态对接', '定时配送调度', '应急保障机制'],
  },
  {
    icon: BarChart3,
    title: '数据分析平台',
    description: '多维度业务数据分析平台，为航司经营决策提供数据驱动的洞察与建议',
    features: ['销售趋势分析', '旅客偏好洞察', '经营效能评估'],
  },
]

const serviceModels = [
  {
    title: '全委托运营',
    subtitle: 'Full Outsourced Operations',
    description:
      '航司将机上零售业务全权委托给鲸品，由我们提供从人员配置、系统建设、供应链管理到日常运营的端到端服务，航司可专注于核心主业。',
    suitable: '适合希望快速建立或升级机上零售业务的航司',
    highlights: ['人员派驻与管理', '系统全套部署', '供应链一体化', '运营绩效保障'],
    icon: Users,
  },
  {
    title: '技术系统输出',
    subtitle: 'Technology System Output',
    description:
      '面向拥有成熟运营团队的航司，输出鲸品核心技术系统能力，包括销售管理系统、离线收银系统、数据分析平台等，赋能航司自主运营。',
    suitable: '适合已有运营团队、需要系统能力升级的航司',
    highlights: ['系统快速部署', '定制化开发', '技术培训支持', '持续迭代升级'],
    icon: Layers,
  },
]

const advantages = [
  {
    icon: Globe,
    title: '市场领先地位',
    description: '服务国内多家主要航司，系统覆盖广泛，积累深厚行业经验',
  },
  {
    icon: Shield,
    title: '安全稳定可靠',
    description: '金融级安全标准，离线场景稳定运行，保障每一笔交易安全无忧',
  },
  {
    icon: BarChart3,
    title: '数据驱动运营',
    description: '智能数据分析驱动精准营销，持续优化商品结构与销售策略',
  },
  {
    icon: ArrowRight,
    title: '亚太市场拓展',
    description: '立足国内成功经验，积极拓展亚太区域航司合作，输出成熟解决方案',
  },
]

export default function JpMall() {
  return (
    <PageLayout className="bg-gradient-to-b from-[#0D1F3C] to-[#0a1929]">
      <FloatingOrbs colors={['#FF6F00', '#FFB74D', '#1565C0']} />
      <Navigation
        brand="鲸品 JpMall"
        brandColor="#FF6F00"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jpmall-secondary/10 border border-jpmall-secondary/20 mb-6"
            >
              <ShoppingBag size={16} className="text-jpmall-secondary" />
              <span className="text-jpmall-secondary text-sm">B2B 航司系统品牌</span>
            </motion.div>

            <AnimatedText
              text="鲸品 JpMall"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 mb-2"
            >
              航空客舱零售系统与运营服务商
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/40 mb-8 max-w-lg"
            >
              为航司提供从销售系统到供应链管理的一站式客舱零售解决方案，
              以技术驱动运营，助力航司提升非票收入，引领行业数字化升级。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#systems"
                className="px-6 py-3 rounded-xl bg-jpmall-secondary text-white font-semibold hover:bg-jpmall-secondary/90 transition-colors"
              >
                核心系统
              </a>
              <a
                href="#models"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                服务模式
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-jpmall-primary/30 to-jpmall-secondary/20 p-8 flex items-center justify-center relative overflow-hidden">
              {/* System illustration */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ShoppingBag size={100} className="text-jpmall-secondary mx-auto mb-6" />
                </motion.div>
                <div className="text-4xl font-display font-bold text-jpmall-secondary mb-2">
                  客舱零售
                </div>
                <div className="text-white/60">系统与运营专家</div>
              </div>

              {/* Background decorations */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-16 bg-jpmall-secondary rounded-full blur-2xl" />
                <div className="absolute top-1/2 right-1/4 w-24 h-12 bg-jpmall-accent rounded-full blur-xl" />
                <div className="absolute bottom-1/4 left-1/3 w-28 h-14 bg-white rounded-full blur-2xl" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-jpmall-secondary/20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-jpmall-primary/20 blur-xl" />
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section id="about">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value="6"
            suffix="大"
            label="核心系统"
            accentColor="#FF6F00"
            delay={0}
          />
          <StatsCard
            value="10"
            suffix="+"
            label="合作航司"
            accentColor="#FF6F00"
            delay={0.1}
          />
          <StatsCard
            value="1000"
            suffix="+"
            label="日均航班覆盖"
            accentColor="#FF6F00"
            delay={0.2}
          />
          <StatsCard
            value="5"
            suffix="年+"
            label="行业深耕"
            accentColor="#FF6F00"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Core Systems */}
      <Section id="systems" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            核心系统能力
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            覆盖航空客舱零售全业务链的六大核心系统
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSystems.map((system, index) => (
            <GlowCard
              key={system.title}
              glowColor="rgba(255, 111, 0, 0.2)"
              delay={index * 0.1}
            >
              <div className="p-3 rounded-xl bg-jpmall-secondary/10 w-fit mb-4">
                <system.icon size={24} className="text-jpmall-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{system.title}</h3>
              <p className="text-white/60 mb-4 text-sm">{system.description}</p>
              <div className="flex flex-wrap gap-2">
                {system.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 rounded text-xs bg-jpmall-secondary/10 text-jpmall-accent"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Service Models */}
      <Section id="models" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            服务模式
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            灵活的合作方式，适配不同航司的业务需求与发展阶段
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceModels.map((model, index) => (
            <GlowCard
              key={model.title}
              glowColor="rgba(255, 111, 0, 0.3)"
              delay={index * 0.15}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-jpmall-secondary/10">
                  <model.icon size={28} className="text-jpmall-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-jpmall-secondary">
                    {model.title}
                  </h3>
                  <p className="text-sm text-white/40">{model.subtitle}</p>
                </div>
              </div>
              <p className="text-white/60 mb-4">{model.description}</p>
              <p className="text-sm text-jpmall-accent mb-6">{model.suitable}</p>
              <div className="grid grid-cols-2 gap-3">
                {model.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-jpmall-secondary shrink-0" />
                    <span className="text-sm text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
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
            核心优势
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            深耕航空客舱零售领域，构建行业领先壁垒
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-jpmall-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={32} className="text-jpmall-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="border-t border-white/5">
        <div className="glass-card p-8 md:p-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            携手共创客舱零售新格局
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            无论您是寻求全委托运营还是技术系统升级，鲸品 JpMall 都能为您提供专业、可靠的解决方案
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:contact@avinect.com"
              className="px-8 py-4 rounded-xl bg-jpmall-secondary text-white font-semibold hover:bg-jpmall-secondary/90 transition-colors"
            >
              商务合作咨询
            </a>
            <a
              href="#systems"
              className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <CheckCircle2 size={20} />
              了解系统能力
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName="鲸品 JpMall" accentColor="#FF6F00" />
    </PageLayout>
  )
}
