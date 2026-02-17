import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  Wifi,
  Radio,
  CreditCard,
  ArrowRight,
  Globe,
  Award,
  Users,
  Zap,
  ExternalLink,
  Star,
} from 'lucide-react'
import {
  PageLayout,
  Hero,
  Section,
  GlowCard,
  AnimatedText,
  ParticleField,
  FloatingOrbs,
  StatsCard,
} from '../components'

interface Brand {
  name: string
  subtitle: string
  description: string
  path: string
  icon: typeof ShoppingBag
  color: string
  gradient: string
  tags: string[]
  type: string
  external?: boolean
}

const brands: Brand[] = [
  {
    name: '鲸品 JpMall',
    subtitle: '航司机上零售系统',
    description: '国内领先的机上销售系统与运营服务商，覆盖国内主要航司',
    path: '/jpmall',
    icon: ShoppingBag,
    color: '#FF6F00',
    gradient: 'from-orange-500 to-amber-600',
    tags: ['机上销售系统', '离线收款', '商城运营'],
    type: 'B2B · 航司系统',
  },
  {
    name: 'weflye',
    subtitle: '旅客数字平台',
    description: '旅客空中体验平台——从连WiFi到内容消费到精选购物的完整旅程',
    path: '/weflye',
    icon: Wifi,
    color: '#42A5F5',
    gradient: 'from-blue-500 to-indigo-600',
    tags: ['机上WiFi', '内容平台', '在线商城', 'STARRY SKY'],
    type: 'B2C · 旅客平台',
  },
  {
    name: 'Wonbery',
    subtitle: 'AOC 运行控制技术',
    description: '深耕航空AOC领域，提供运行控制系统、指挥通信、AI语音识别',
    path: '/wonbery',
    icon: Radio,
    color: '#5FA8D3',
    gradient: 'from-blue-400 to-cyan-600',
    tags: ['AOC系统', '指挥通信', 'AI语音'],
    type: '独立 · 技术品牌',
  },
  {
    name: '微工卡',
    subtitle: '企业发薪平台',
    description: '面向企业HR的薪资发放服务平台，微信支付服务商资质',
    path: 'https://www.weworks.cn',
    icon: CreditCard,
    color: '#66BB6A',
    gradient: 'from-green-500 to-emerald-600',
    tags: ['发薪平台', '微信支付'],
    type: '独立 · 业务品牌',
    external: true,
  },
]

const capabilities = [
  {
    icon: Globe,
    title: '国际化布局',
    description: '香港总部，业务覆盖亚太、中东等多个地区',
  },
  {
    icon: Zap,
    title: '技术创新驱动',
    description: '以AI、大数据等前沿技术赋能航空数字化转型',
  },
  {
    icon: Users,
    title: '行业深耕',
    description: '深刻理解航空业务场景，提供端到端解决方案',
  },
  {
    icon: Award,
    title: '行业壁垒',
    description: '鲸品与Wonbery在各自领域具备领先市场地位',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <GlowCard glowColor={`${brand.color}40`} className="h-full">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${brand.gradient}`}>
          <brand.icon size={28} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-display font-bold">{brand.name}</h3>
            {brand.external && <ExternalLink size={14} className="text-white/30" />}
          </div>
          <p className="text-xs text-white/30 mb-1">{brand.type}</p>
          <p className="text-white/40 text-sm mb-2">{brand.subtitle}</p>
          <p className="text-white/55 mb-4">{brand.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {brand.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs bg-white/5 ${
                  tag === 'STARRY SKY' ? 'text-[#C5A55A] border border-[#C5A55A]/20' : 'text-white/50'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: brand.color }}
          >
            <span>{brand.external ? '访问官网' : '了解更多'}</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </GlowCard>
  )
}

export default function Home() {
  return (
    <PageLayout className="bg-[#0A1E3D]">
      <ParticleField color="#ffffff" count={200} />
      <FloatingOrbs colors={['#1E3A5F', '#4A90D9', '#C5A55A']} />

      {/* Hero Section */}
      <Hero>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/50 tracking-wider">
              Global Aviation Connect
            </span>
          </motion.div>

          <AnimatedText
            text="AVINECT"
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold justify-center mb-3 tracking-wide"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/35 font-display tracking-widest mb-8"
          >
            航空科技集团
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12"
          >
            从航司系统到旅客平台，从运行控制到空中互联
            <br />
            <span className="text-white/30">为航空业提供全链路数字化解决方案</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#brands"
              className="px-6 py-3 rounded-xl bg-white text-[#0A1E3D] font-semibold hover:bg-white/90 transition-colors"
            >
              探索业务
            </a>
            <a
              href="#capabilities"
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              了解更多
            </a>
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard value="20" suffix="+" label="服务航司" accentColor="#C5A55A" delay={0} />
          <StatsCard value="1000" suffix="+" label="覆盖飞机" accentColor="#C5A55A" delay={0.1} />
          <StatsCard value="10000" suffix="+" label="赋能员工" accentColor="#C5A55A" delay={0.2} />
          <StatsCard value="5" suffix="+" label="覆盖地区" accentColor="#C5A55A" delay={0.3} />
        </div>
      </Section>

      {/* Brand Architecture */}
      <Section id="brands">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">品牌版图</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            企业品牌 + 旅客平台 + 产品线，三层架构覆盖航空科技全场景
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {brands.map((brand) => (
            <motion.div key={brand.name} variants={itemVariants}>
              {brand.external ? (
                <a href={brand.path} target="_blank" rel="noopener noreferrer">
                  <BrandCard brand={brand} />
                </a>
              ) : (
                <Link to={brand.path}>
                  <BrandCard brand={brand} />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* STARRY SKY highlight */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#091828] to-[#0A1E3D] border border-[#C5A55A]/20 p-8 md:p-12"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Star size={24} className="text-[#C5A55A]" />
                <span className="text-[#C5A55A] font-display font-bold text-2xl tracking-wider">
                  STARRY SKY
                </span>
              </div>
              <p className="text-white/50 mb-4">
                高端精选产品线 —— 航司联名定制、精选好物、礼品系列。
                在 weflye 平台内为旅客提供有品质感的空中购物体验。
              </p>
              <Link
                to="/weflye"
                className="inline-flex items-center gap-2 text-[#C5A55A] hover:text-[#D4B96E] transition-colors font-medium"
              >
                了解更多 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#C5A55A]/20 to-[#C5A55A]/5 flex items-center justify-center">
              <Star size={56} className="text-[#C5A55A]" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A55A]/5 rounded-full blur-3xl" />
        </motion.div>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities" className="border-t border-white/5">
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
            className="text-white/50 max-w-2xl mx-auto"
          >
            专业能力与行业经验的深度融合
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                <cap.icon size={28} className="text-white/80" />
              </div>
              <h3 className="font-semibold mb-2">{cap.title}</h3>
              <p className="text-white/40 text-sm">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">开启合作</h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            无论您是航空公司、机场还是行业合作伙伴，我们期待与您共同探索航空科技的无限可能
          </p>
          <a
            href="mailto:contact@avinect.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0A1E3D] font-semibold hover:bg-white/90 transition-colors"
          >
            contact@avinect.com
          </a>
        </motion.div>
      </Section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Avinect Group. All rights reserved.
          </p>
        </div>
      </footer>
    </PageLayout>
  )
}
