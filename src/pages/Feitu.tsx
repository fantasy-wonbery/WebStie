import { motion } from 'framer-motion'
import {
  Wifi,
  Plane,
  Sparkles,
  Film,
  Gamepad2,
  Bot,
  Radio,
  Cloud,
  Rocket,
  MapPin,
  Play,
  Layers,
  Zap,
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
  { label: '关于飞途', href: '#about' },
  { label: '业务板块', href: '#business' },
  { label: 'AI 内容工厂', href: '#ai' },
  { label: '联系我们', href: '#contact' },
]

const businessAreas = [
  {
    icon: Wifi,
    title: '机载 WiFi',
    subtitle: '连接万米高空',
    description: '自主研发的机载 WiFi 设备与解决方案，为航空公司提供稳定、高速的空中互联网服务',
    features: ['高通量卫星通信', '机载设备研发', '运营服务支持'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: '低空经济',
    subtitle: 'eVTOL 通信方案',
    description: '面向城市空中交通（UAM）和 eVTOL 飞行器的通信系统解决方案',
    features: ['飞行器通信模块', '地面网络基建', '空中交通管理'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Film,
    title: '机上娱乐',
    subtitle: '内容运营平台',
    description: '打造机上娱乐内容生态，包括游戏、短剧、互动内容等多元化娱乐产品',
    features: ['游戏内容', '短剧内容', '互动娱乐'],
    gradient: 'from-orange-500 to-red-500',
  },
]

const aiCapabilities = [
  {
    icon: Bot,
    title: 'AI 剧本生成',
    description: '基于大语言模型的智能剧本创作系统',
  },
  {
    icon: Sparkles,
    title: 'AI 配音',
    description: '多语种、多音色的 AI 语音合成技术',
  },
  {
    icon: Film,
    title: 'AI 视频生成',
    description: '从文字到画面的自动化视频生产流水线',
  },
  {
    icon: Gamepad2,
    title: 'AI 游戏内容',
    description: '智能生成的休闲游戏与互动内容',
  },
]

const techStack = [
  'Stable Diffusion',
  'GPT-4',
  'Sora',
  'ElevenLabs',
  'Runway',
  'Midjourney',
]

export default function Feitu() {
  return (
    <PageLayout className="bg-feitu-primary">
      <ParticleField color="#E040FB" count={500} />
      <FloatingOrbs colors={['#7B2CBF', '#E040FB', '#2D1B69']} />
      <Navigation
        brand="飞途科技"
        brandColor="#E040FB"
        items={navItems}
        showBack
      />

      {/* Hero */}
      <Hero>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-feitu-accent/10 border border-feitu-accent/20 mb-8"
          >
            <MapPin size={16} className="text-feitu-accent" />
            <span className="text-feitu-accent text-sm">天津</span>
            <span className="text-white/30">|</span>
            <span className="text-feitu-accent text-sm">创新平台</span>
          </motion.div>

          <AnimatedText
            text="飞途科技"
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold justify-center mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-feitu-accent mb-4"
          >
            Feitu Technology
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-white/50 mb-8 max-w-2xl mx-auto"
          >
            机载通信 × 内容创新 × 低空经济
            <br />
            <span className="text-white/30">
              打造硬件+内容的闭环生态，抢占 eVTOL 低空经济先机
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#business"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-feitu-secondary to-feitu-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              探索业务
            </a>
            <a
              href="#ai"
              className="px-8 py-4 rounded-xl border border-feitu-accent/30 text-white hover:bg-feitu-accent/10 transition-colors flex items-center gap-2"
            >
              <Sparkles size={20} />
              AI 内容工厂
            </a>
          </motion.div>
        </div>

        {/* Animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 relative max-w-3xl mx-auto"
        >
          <div className="aspect-video rounded-3xl bg-gradient-to-br from-feitu-secondary/20 to-feitu-accent/10 border border-white/10 overflow-hidden relative">
            {/* Animated elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central wifi symbol */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Wifi size={80} className="text-feitu-accent" />
              </motion.div>

              {/* Orbiting planes */}
              {[0, 120, 240].map((angle) => (
                <motion.div
                  key={angle}
                  animate={{ rotate: [angle, angle + 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div style={{ transform: `translateX(150px)` }}>
                    <Plane
                      size={24}
                      className="text-feitu-accent/60"
                      style={{ transform: 'rotate(90deg)' }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Wave rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [0.3, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeOut',
                  }}
                  className="absolute w-24 h-24 rounded-full border border-feitu-accent"
                />
              ))}
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 tech-grid opacity-20" />
          </div>
        </motion.div>
      </Hero>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCard
            value="3"
            label="核心业务板块"
            accentColor="#E040FB"
            delay={0}
          />
          <StatsCard
            value="100"
            suffix="+"
            label="AI 生成内容/月"
            accentColor="#E040FB"
            delay={0.1}
          />
          <StatsCard
            value="2025"
            label="eVTOL 商用元年"
            accentColor="#E040FB"
            delay={0.2}
          />
          <StatsCard
            value="∞"
            label="创新可能"
            accentColor="#E040FB"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Business Areas */}
      <Section id="business" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            三大业务板块
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            硬件 × 内容 × 生态，构建空中互联网完整闭环
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {businessAreas.map((area, index) => (
            <GlowCard
              key={area.title}
              glowColor="rgba(224, 64, 251, 0.3)"
              delay={index * 0.15}
              className="h-full"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-6`}
              >
                <area.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">
                {area.title}
              </h3>
              <p className="text-feitu-accent text-sm mb-4">{area.subtitle}</p>
              <p className="text-white/60 mb-6">{area.description}</p>
              <div className="space-y-2">
                {area.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-white/50"
                  >
                    <Zap size={14} className="text-feitu-accent" />
                    {feature}
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Low-altitude Economy */}
      <Section className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400 mb-4">
              战略布局
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              低空经济
              <span className="text-feitu-accent">新赛道</span>
            </h2>
            <p className="text-white/60 mb-6">
              随着 eVTOL（电动垂直起降飞行器）技术的成熟，城市空中交通（UAM）即将迎来爆发式增长。
              飞途科技提前布局低空通信领域，为未来的空中出行提供关键技术支撑。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Radio size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">飞行器通信模块</h4>
                  <p className="text-white/50 text-sm">
                    为 eVTOL 提供轻量化、高可靠的通信解决方案
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Cloud size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">地面网络基建</h4>
                  <p className="text-white/50 text-sm">
                    构建低空通信网络，确保空地一体化连接
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Layers size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">空中交通管理</h4>
                  <p className="text-white/50 text-sm">
                    参与 UTM 系统建设，助力低空空域管理
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Rocket size={120} className="text-cyan-400" />
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
              <span className="text-cyan-400 font-mono text-sm">eVTOL Ready</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* AI Content Factory */}
      <Section id="ai" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-feitu-accent/10 border border-feitu-accent/20 mb-6"
          >
            <Sparkles size={16} className="text-feitu-accent" />
            <span className="text-feitu-accent text-sm">AI-Powered</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            AI 内容工厂
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            从 AI 剧本到 AI 视频，打造全自动化内容生产流水线
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiCapabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-feitu-accent/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-feitu-secondary/30 to-feitu-accent/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <cap.icon size={28} className="text-feitu-accent" />
              </div>
              <h3 className="font-semibold mb-2">{cap.title}</h3>
              <p className="text-white/50 text-sm">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">技术栈</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-white/5 text-white/70 font-mono text-sm hover:bg-feitu-accent/20 hover:text-feitu-accent transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Production Pipeline */}
      <Section className="border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            AI 内容生产流水线
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: '1', label: 'AI 剧本', icon: Bot },
              { step: '2', label: 'AI 配音', icon: Sparkles },
              { step: '3', label: 'AI 画面', icon: Film },
              { step: '4', label: '自动合成', icon: Play },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-feitu-secondary to-feitu-accent flex items-center justify-center mb-2">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.1 }}
                    className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-feitu-accent to-transparent"
                  />
                )}
              </div>
            ))}
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
            共创未来
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            无论是机载 WiFi 合作、低空通信探索，还是 AI 内容共创，我们期待与您携手
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="mailto:hello@feitu.tech"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-feitu-secondary to-feitu-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Sparkles size={20} />
              hello@feitu.tech
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName="飞途科技" accentColor="#E040FB" />
    </PageLayout>
  )
}
