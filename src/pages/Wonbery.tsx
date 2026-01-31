import { motion } from 'framer-motion'
import {
  Radio,
  Monitor,
  Phone,
  Video,
  Mic,
  Shield,
  Server,
  Cpu,
  Activity,
  MapPin,
  Zap,
  Lock,
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
  ParticleField,
} from '../components'

const navItems = [
  { label: '关于我们', href: '#about' },
  { label: '产品方案', href: '#products' },
  { label: '技术能力', href: '#tech' },
  { label: '联系我们', href: '#contact' },
]

const products = [
  {
    icon: Monitor,
    title: 'AOC 运行控制系统',
    description: '面向航空公司运行控制中心的综合管理平台',
    features: [
      '航班监控与调度',
      '气象信息集成',
      '资源调配优化',
      '应急指挥协调',
    ],
  },
  {
    icon: Phone,
    title: '指挥通信终端',
    description: '专业级航空通信终端，保障运行指挥畅通',
    features: [
      '多方语音会议',
      '优先级调度',
      '录音存档',
      '加密传输',
    ],
  },
  {
    icon: Video,
    title: '视频会议系统',
    description: '高可靠性视频会议系统，支持多场景协作',
    features: [
      '高清视频传输',
      '屏幕共享',
      '多终端接入',
      '会议管理',
    ],
  },
  {
    icon: Mic,
    title: 'AI 语音识别',
    description: '基于深度学习的航空语音识别与分析系统',
    features: [
      '实时语音转写',
      '关键词检测',
      '情感分析',
      '合规审计',
    ],
  },
]

const techCapabilities = [
  {
    icon: Cpu,
    title: '自主研发',
    description: '核心系统完全自主研发，掌握关键技术',
  },
  {
    icon: Shield,
    title: '安全可控',
    description: '符合航空行业安全标准，支持信创环境',
  },
  {
    icon: Server,
    title: '高可用架构',
    description: '分布式部署，99.99% 可用性保障',
  },
  {
    icon: Activity,
    title: '实时处理',
    description: '毫秒级响应，支持大规模并发',
  },
]

const features = [
  { label: '语音通信', icon: Phone },
  { label: '视频会议', icon: Video },
  { label: 'AI 识别', icon: Mic },
  { label: '数据加密', icon: Lock },
  { label: '实时监控', icon: Activity },
  { label: '高可用', icon: Zap },
]

export default function Wonbery() {
  return (
    <PageLayout className="bg-wonbery-primary">
      <ParticleField color="#5FA8D3" count={400} />
      <FloatingOrbs colors={['#1B4965', '#5FA8D3', '#CAE9FF']} />
      <Navigation
        brand="Wonbery"
        brandColor="#5FA8D3"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wonbery-accent/10 border border-wonbery-accent/20 mb-6"
            >
              <MapPin size={16} className="text-wonbery-accent" />
              <span className="text-wonbery-accent text-sm">北京</span>
            </motion.div>

            <AnimatedText
              text="Wonbery"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl font-display font-bold text-wonbery-accent mb-4"
            >
              网博科技
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/40 mb-8 max-w-lg"
            >
              专注航空 AOC 技术服务，提供运行控制中心系统、指挥通信终端、
              AI 语音识别等专业解决方案，助力航空运行安全高效。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#products"
                className="px-6 py-3 rounded-xl bg-wonbery-accent text-wonbery-primary font-semibold hover:bg-wonbery-accent/90 transition-colors"
              >
                产品方案
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                技术咨询
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-wonbery-secondary/30 to-wonbery-accent/20 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Command center visualization */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative">
                  {/* Central hub */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-32 h-32 rounded-full border-2 border-wonbery-accent/30 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full border border-wonbery-accent/20 flex items-center justify-center">
                      <Radio size={40} className="text-wonbery-accent" />
                    </div>
                  </motion.div>

                  {/* Orbiting elements */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={angle}
                      animate={{ rotate: [angle, angle + 360] }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.5,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transformOrigin: 'center' }}
                    >
                      <div
                        className="w-8 h-8 rounded-full bg-wonbery-accent/20 flex items-center justify-center"
                        style={{ transform: `translateX(80px)` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-wonbery-accent" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Grid lines */}
              <div className="absolute inset-0 tech-grid opacity-30" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-wonbery-accent/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-wonbery-secondary/10 blur-xl" />
          </motion.div>
        </div>
      </Hero>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value="99"
            suffix=".99%"
            label="系统可用性"
            accentColor="#5FA8D3"
            delay={0}
          />
          <StatsCard
            value="10"
            suffix="+"
            label="年行业深耕"
            accentColor="#5FA8D3"
            delay={0.1}
          />
          <StatsCard
            value="50"
            suffix="ms"
            label="语音识别延迟"
            accentColor="#5FA8D3"
            delay={0.2}
          />
          <StatsCard
            value="100"
            suffix="%"
            label="自主可控"
            accentColor="#5FA8D3"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Feature tags */}
      <Section className="py-12">
        <div className="flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <feature.icon size={16} className="text-wonbery-accent" />
              <span className="text-sm">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section id="products" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            产品方案
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            面向航空运行控制的专业技术解决方案
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <GlowCard
              key={product.title}
              glowColor="rgba(95, 168, 211, 0.3)"
              delay={index * 0.1}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-wonbery-accent/10">
                  <product.icon size={28} className="text-wonbery-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-white/60 mb-4">{product.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-wonbery-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Tech Capabilities */}
      <Section id="tech" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            技术能力
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            深耕航空通信领域，构建安全可靠的技术底座
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCapabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-wonbery-accent/10 flex items-center justify-center mx-auto mb-4">
                <cap.icon size={28} className="text-wonbery-accent" />
              </div>
              <h3 className="font-semibold mb-2">{cap.title}</h3>
              <p className="text-white/50 text-sm">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Security & Compliance */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-wonbery-accent/10">
              <Shield size={28} className="text-wonbery-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">安全与合规</h3>
              <p className="text-white/60 mb-4">
                我们深知航空运行数据的敏感性，严格遵循行业安全标准与监管要求，
                为客户提供安全可靠的技术解决方案。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400">
                  数据加密传输
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400">
                  等保三级认证
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400">
                  行业合规认证
                </span>
              </div>
            </div>
          </div>
        </motion.div>
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
            技术咨询
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            专业团队为您提供 AOC 系统建设与通信解决方案咨询
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="mailto:tech@wonbery.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-wonbery-accent text-wonbery-primary font-semibold hover:bg-wonbery-accent/90 transition-colors"
            >
              tech@wonbery.com
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName="Wonbery 网博科技" accentColor="#5FA8D3" />
    </PageLayout>
  )
}
