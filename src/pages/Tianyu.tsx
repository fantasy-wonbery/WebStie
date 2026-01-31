import { motion } from 'framer-motion'
import {
  Plane,
  ShoppingCart,
  Package,
  Truck,
  Monitor,
  CreditCard,
  Users,
  CheckCircle2,
  MapPin,
  Star,
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
  { label: '关于天宇', href: '#about' },
  { label: '服务内容', href: '#services' },
  { label: '合作航司', href: '#partners' },
  { label: '联系我们', href: '#contact' },
]

const services = [
  {
    icon: ShoppingCart,
    title: '客舱产品销售',
    description: '提供机上免税品、特产、纪念品等客舱商品的全品类销售服务',
    features: ['免税商品', '特色产品', '纪念品'],
  },
  {
    icon: Monitor,
    title: '业务系统',
    description: '自主研发的机上销售管理系统，支持订单、库存、结算全流程',
    features: ['订单管理', '库存管控', '数据分析'],
  },
  {
    icon: CreditCard,
    title: '机上收银',
    description: '支持多种支付方式的机上收银解决方案，确保交易安全便捷',
    features: ['多支付方式', '离线交易', '实时对账'],
  },
  {
    icon: Package,
    title: '供应链管理',
    description: '从采购、仓储到配送的一体化供应链管理服务',
    features: ['集中采购', '仓储管理', '质量追溯'],
  },
  {
    icon: Truck,
    title: '物流配送',
    description: '专业的航空物流配送服务，确保商品准时上机',
    features: ['定时配送', '航班对接', '应急保障'],
  },
  {
    icon: Users,
    title: '全委托运营',
    description: '为航司提供从人员到系统的全流程委托运营服务',
    features: ['人员派驻', '培训管理', '绩效考核'],
  },
]

const partners = [
  { name: '天津航空', status: '深度合作', years: 5 },
  { name: '长龙航空', status: '战略合作', years: 3 },
  { name: '幸福航空', status: '合作伙伴', years: 2 },
]

const serviceModels = [
  {
    title: '全委托运营',
    description: '航司将机上销售业务全权委托给天宇，由我们负责人员、系统、供应链全流程',
    suitable: '适合：希望专注主业的航司',
  },
  {
    title: '技术系统输出',
    description: '仅提供销售管理系统和收银系统，航司自行运营销售业务',
    suitable: '适合：有成熟团队的航司',
  },
]

export default function Tianyu() {
  return (
    <PageLayout className="bg-gradient-to-b from-[#0a1929] to-[#0d2137]">
      <FloatingOrbs colors={['#FF6F00', '#1565C0', '#4FC3F7']} />
      <Navigation
        brand="天宇科技"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tianyu-secondary/10 border border-tianyu-secondary/20 mb-6"
            >
              <MapPin size={16} className="text-tianyu-secondary" />
              <span className="text-tianyu-secondary text-sm">天津</span>
            </motion.div>

            <AnimatedText
              text="天宇科技"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 mb-2"
            >
              Tianyu Technology
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/40 mb-8 max-w-lg"
            >
              专注航空辅营服务，为国内航司提供从客舱销售到供应链管理的一站式解决方案，
              助力航司提升非票收入，优化旅客体验。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-tianyu-secondary text-white font-semibold hover:bg-tianyu-secondary/90 transition-colors"
              >
                服务内容
              </a>
              <a
                href="#partners"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                合作航司
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-tianyu-primary/30 to-tianyu-secondary/20 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Airplane illustration */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Plane size={100} className="text-tianyu-secondary mx-auto mb-6 rotate-[-30deg]" />
                </motion.div>
                <div className="text-4xl font-display font-bold text-tianyu-secondary mb-2">
                  航空辅营
                </div>
                <div className="text-white/60">专业服务商</div>
              </div>

              {/* Background clouds */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-16 bg-white rounded-full blur-2xl" />
                <div className="absolute top-1/2 right-1/4 w-24 h-12 bg-white rounded-full blur-xl" />
                <div className="absolute bottom-1/4 left-1/3 w-28 h-14 bg-white rounded-full blur-2xl" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-tianyu-secondary/20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-tianyu-primary/20 blur-xl" />
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value="3"
            suffix="+"
            label="合作航司"
            accentColor="#FF6F00"
            delay={0}
          />
          <StatsCard
            value="5"
            suffix="年+"
            label="行业经验"
            accentColor="#FF6F00"
            delay={0.1}
          />
          <StatsCard
            value="1000"
            suffix="+"
            label="日均航班服务"
            accentColor="#FF6F00"
            delay={0.2}
          />
          <StatsCard
            value="100"
            suffix="%"
            label="客户满意度"
            accentColor="#FF6F00"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Service Models */}
      <Section className="border-t border-white/5">
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
            灵活的合作方式，满足不同航司的业务需求
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceModels.map((model, index) => (
            <GlowCard
              key={model.title}
              glowColor="rgba(255, 111, 0, 0.3)"
              delay={index * 0.1}
            >
              <h3 className="text-2xl font-display font-bold mb-4 text-tianyu-secondary">
                {model.title}
              </h3>
              <p className="text-white/60 mb-4">{model.description}</p>
              <p className="text-sm text-tianyu-accent">{model.suitable}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            服务内容
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            覆盖航空辅营业务全链条的专业服务
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlowCard
              key={service.title}
              glowColor="rgba(255, 111, 0, 0.2)"
              delay={index * 0.1}
            >
              <div className="p-3 rounded-xl bg-tianyu-secondary/10 w-fit mb-4">
                <service.icon size={24} className="text-tianyu-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/60 mb-4 text-sm">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 rounded text-xs bg-white/5 text-white/60"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            合作航司
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            与国内多家航空公司建立深度合作关系
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-tianyu-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Plane size={32} className="text-tianyu-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < partner.years ? 'text-tianyu-secondary fill-tianyu-secondary' : 'text-white/20'}
                  />
                ))}
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-tianyu-secondary/20 text-tianyu-secondary">
                {partner.status}
              </span>
              <p className="text-white/40 text-sm mt-2">合作 {partner.years} 年</p>
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
            携手共创航空辅营新篇章
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            无论您是寻求全委托运营还是技术系统支持，天宇科技都能为您提供专业、可靠的服务
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:contact@tianyu-tech.com"
              className="px-8 py-4 rounded-xl bg-tianyu-secondary text-white font-semibold hover:bg-tianyu-secondary/90 transition-colors"
            >
              商务合作咨询
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <CheckCircle2 size={20} />
              获取解决方案
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName="天宇科技" accentColor="#FF6F00" />
    </PageLayout>
  )
}
