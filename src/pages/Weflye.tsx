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
  ShoppingBag,
  Star,
  Users,
  ArrowRight,
  Smartphone,
  Zap,
  Play,
  MessageSquare,
  Gift,
  Layers,
  Crown,
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
  { label: '旅客旅程', href: '#journey' },
  { label: '平台功能', href: '#platform' },
  { label: 'STARRY SKY', href: '#starrysky' },
  { label: 'AI 内容工厂', href: '#ai' },
  { label: '低空经济', href: '#evtol' },
  { label: '联系我们', href: '#contact' },
]

const journeySteps = [
  {
    icon: Wifi,
    label: '连接 WiFi',
    sublabel: 'WiFi Portal',
    color: '#42A5F5',
  },
  {
    icon: Film,
    label: '浏览内容',
    sublabel: '短剧 / 游戏 / 资讯',
    color: '#42A5F5',
  },
  {
    icon: ShoppingBag,
    label: '机上商城',
    sublabel: '空中零售',
    color: '#42A5F5',
  },
  {
    icon: Star,
    label: 'STARRY SKY',
    sublabel: '高端甄选',
    color: '#C5A55A',
  },
  {
    icon: MessageSquare,
    label: '私域运营',
    sublabel: '微信企业域',
    color: '#42A5F5',
  },
]

const platformFeatures = [
  {
    icon: Wifi,
    title: 'WiFi Portal',
    subtitle: '空中入口',
    description:
      '旅客连接机载 WiFi 的第一触点，品牌展示与服务入口的统一门户，承载内容分发与流量引导',
    features: ['品牌定制门户', '智能内容推荐', '流量分发引擎'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Film,
    title: '内容平台',
    subtitle: '短剧 / 游戏 / 资讯',
    description:
      '覆盖旅客全航程的娱乐内容生态，短剧追更、休闲游戏、实时资讯一站式体验',
    features: ['AI 短剧内容', '休闲游戏矩阵', '实时新闻资讯'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShoppingBag,
    title: '机上商城',
    subtitle: '空中零售 Mall',
    description:
      '万米高空的购物体验，航司联名、目的地特产、免税精选，让旅途成为消费场景',
    features: ['航线特色商品', '目的地好物', '免税精选频道'],
    gradient: 'from-orange-500 to-red-500',
  },
]

const aiCapabilities = [
  {
    icon: Bot,
    title: 'AI 剧本生成',
    description: '基于大语言模型的智能剧本创作，批量产出高质量短剧脚本',
  },
  {
    icon: Sparkles,
    title: 'AI 语音合成',
    description: '多语种、多音色 AI 配音技术，让内容触达全球旅客',
  },
  {
    icon: Film,
    title: 'AI 视频生成',
    description: '从文字到画面的自动化视频流水线，日产百条优质短剧',
  },
  {
    icon: Gamepad2,
    title: 'AI 游戏内容',
    description: '智能生成休闲游戏与互动内容，丰富机上娱乐生态',
  },
]

const starryFeatures = [
  {
    icon: Crown,
    title: '航司联名系列',
    description: '与各大航空公司深度合作，推出专属联名产品，打造差异化高端旅行体验',
  },
  {
    icon: Star,
    title: '匠心甄选好物',
    description: '全球买手精心挑选，每一件商品都经过严格品控，只为旅途中的品质之选',
  },
  {
    icon: Gift,
    title: '礼遇系列',
    description: '商务馈赠、旅行纪念，精心设计的礼品套装，让每一份心意都恰到好处',
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

export default function Weflye() {
  return (
    <PageLayout className="bg-weflye-primary">
      <ParticleField color="#42A5F5" count={500} />
      <FloatingOrbs colors={['#1565C0', '#42A5F5', '#0A1E3D']} />
      <Navigation
        brand="WeFlye"
        brandColor="#42A5F5"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-weflye-accent/10 border border-weflye-accent/20 mb-8"
          >
            <Plane size={16} className="text-weflye-accent" />
            <span className="text-weflye-accent text-sm">B2C</span>
            <span className="text-white/30">|</span>
            <span className="text-weflye-accent text-sm">旅客数字平台</span>
          </motion.div>

          <AnimatedText
            text="WeFlye"
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold justify-center mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-weflye-accent mb-4"
          >
            旅客空中体验平台
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-white/50 mb-8 max-w-2xl mx-auto"
          >
            WiFi 连接 x 内容娱乐 x 空中商城 x 私域运营
            <br />
            <span className="text-white/30">
              覆盖旅客全航程的数字化体验闭环
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#journey"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-weflye-secondary to-weflye-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              探索旅程
            </a>
            <a
              href="#starrysky"
              className="px-8 py-4 rounded-xl border border-starry-gold/40 text-starry-gold hover:bg-starry-gold/10 transition-colors flex items-center gap-2"
            >
              <Star size={20} />
              STARRY SKY
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
          <div className="aspect-video rounded-3xl bg-gradient-to-br from-weflye-secondary/20 to-weflye-accent/10 border border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central phone symbol */}
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
                <Smartphone size={80} className="text-weflye-accent" />
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
                      className="text-weflye-accent/60"
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
                  className="absolute w-24 h-24 rounded-full border border-weflye-accent"
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
            value="5"
            label="旅客旅程触点"
            accentColor="#42A5F5"
            delay={0}
          />
          <StatsCard
            value="100"
            suffix="+"
            label="AI 生成内容/月"
            accentColor="#42A5F5"
            delay={0.1}
          />
          <StatsCard
            value="30"
            suffix="+"
            label="航司合作伙伴"
            accentColor="#C5A55A"
            delay={0.2}
          />
          <StatsCard
            value="1000"
            suffix="万+"
            label="服务旅客"
            accentColor="#42A5F5"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Passenger Journey */}
      <Section id="journey" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            旅客全旅程体验
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            从连接 WiFi 的第一刻起，到下机后的持续互动，
            WeFlye 打造完整的旅客数字化旅程闭环
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {journeySteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}15)`,
                      border: `1px solid ${step.color}40`,
                    }}
                  >
                    <step.icon size={28} style={{ color: step.color }} />
                  </div>
                  <span className="text-sm font-semibold mb-1">
                    {step.label}
                  </span>
                  <span className="text-xs text-white/40">{step.sublabel}</span>
                </motion.div>
                {index < journeySteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.06 }}
                    className="hidden md:flex items-center"
                  >
                    <ArrowRight
                      size={20}
                      className="text-weflye-accent/40"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Repurchase loop annotation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-weflye-accent/10 border border-weflye-accent/20">
              <Users size={14} className="text-weflye-accent" />
              <span className="text-weflye-accent text-xs">
                私域复购 -- 持续运营闭环
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Platform Features */}
      <Section id="platform" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            平台核心功能
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            WiFi 门户 x 内容平台 x 空中商城，三大板块构建旅客完整体验
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, index) => (
            <GlowCard
              key={feature.title}
              glowColor="rgba(66, 165, 245, 0.3)"
              delay={index * 0.15}
              className="h-full"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
              >
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">
                {feature.title}
              </h3>
              <p className="text-weflye-accent text-sm mb-4">
                {feature.subtitle}
              </p>
              <p className="text-white/60 mb-6">{feature.description}</p>
              <div className="space-y-2">
                {feature.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm text-white/50"
                  >
                    <Zap size={14} className="text-weflye-accent" />
                    {f}
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* STARRY SKY Premium Section */}
      <Section id="starrysky" className="border-t border-white/5 relative">
        {/* Deep blue overlay with gold glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-starry-dark/80 via-starry-primary/60 to-starry-dark/80 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-starry-gold/5 blur-[120px] pointer-events-none" />

        <div className="relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
              style={{
                background:
                  'linear-gradient(135deg, rgba(197,165,90,0.15), rgba(197,165,90,0.05))',
                border: '1px solid rgba(197,165,90,0.3)',
              }}
            >
              <Star size={16} className="text-starry-gold" />
              <span
                className="text-sm font-semibold tracking-wider"
                style={{ color: '#C5A55A' }}
              >
                PREMIUM
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            >
              <span style={{ color: '#C5A55A' }}>STARRY SKY</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-2"
              style={{ color: '#D4B96E' }}
            >
              高端甄选产品线
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 max-w-2xl mx-auto"
            >
              WeFlye 旗下高端零售品牌，以航空为纽带，甄选全球好物，
              为旅客打造独一无二的空中购物体验
            </motion.p>
          </div>

          {/* Starry feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {starryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                  style={{ background: 'rgba(197,165,90,0.2)' }}
                />
                <div
                  className="relative p-6 md:p-8 rounded-2xl overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(197,165,90,0.08), rgba(10,30,61,0.9))',
                    border: '1px solid rgba(197,165,90,0.2)',
                  }}
                >
                  {/* Subtle gold shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(197,165,90,0.1), transparent)',
                      }}
                    />
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(197,165,90,0.2), rgba(197,165,90,0.05))',
                      border: '1px solid rgba(197,165,90,0.3)',
                    }}
                  >
                    <feature.icon size={28} style={{ color: '#C5A55A' }} />
                  </div>
                  <h3
                    className="text-xl font-display font-bold mb-3"
                    style={{ color: '#D4B96E' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gold accent divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12"
          >
            <div
              className="h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #C5A55A, transparent)',
              }}
            />
          </motion.div>

          {/* Starry SKY value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div
              className="inline-block p-8 md:p-12 rounded-3xl max-w-3xl mx-auto"
              style={{
                background:
                  'linear-gradient(135deg, rgba(197,165,90,0.06), rgba(10,30,61,0.95))',
                border: '1px solid rgba(197,165,90,0.15)',
              }}
            >
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Star
                  size={48}
                  className="mx-auto mb-6"
                  style={{ color: '#C5A55A' }}
                />
              </motion.div>
              <p
                className="text-lg md:text-xl font-display leading-relaxed"
                style={{ color: '#D4B96E' }}
              >
                "在万米高空，遇见星空般的美好"
              </p>
              <p className="text-white/40 text-sm mt-4">
                航司联名 / 匠心甄选 / 礼遇系列 -- STARRY SKY 高端产品线
              </p>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-weflye-accent/10 border border-weflye-accent/20 mb-6"
          >
            <Sparkles size={16} className="text-weflye-accent" />
            <span className="text-weflye-accent text-sm">AI-Powered</span>
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
            从 AI 剧本到 AI 视频，自动化内容生产流水线为 WeFlye 平台源源不断地输出优质内容
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
              className="glass-card p-6 text-center group hover:border-weflye-accent/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-weflye-secondary/30 to-weflye-accent/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <cap.icon size={28} className="text-weflye-accent" />
              </div>
              <h3 className="font-semibold mb-2">{cap.title}</h3>
              <p className="text-white/50 text-sm">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Production Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 mb-8"
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-weflye-secondary to-weflye-accent flex items-center justify-center mb-2">
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
                    className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-weflye-accent to-transparent"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

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
                className="px-4 py-2 rounded-full bg-white/5 text-white/70 font-mono text-sm hover:bg-weflye-accent/20 hover:text-weflye-accent transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Low-altitude Economy / eVTOL */}
      <Section id="evtol" className="border-t border-white/5">
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
              <span className="text-weflye-accent">新赛道</span>
            </h2>
            <p className="text-white/60 mb-6">
              随着 eVTOL（电动垂直起降飞行器）技术的成熟，城市空中交通即将迎来爆发式增长。
              WeFlye 的技术积累与旅客运营经验，将无缝延伸至低空出行场景。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Radio size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">eVTOL 通信模块</h4>
                  <p className="text-white/50 text-sm">
                    自主研发的轻量化、高可靠通信设备，适配各类 eVTOL 机型
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
                    构建低空通信网络，确保空地一体化无缝连接
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Layers size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">旅客体验延伸</h4>
                  <p className="text-white/50 text-sm">
                    将 WeFlye 的内容与零售能力引入低空出行，打造全场景旅客平台
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
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Rocket size={120} className="text-cyan-400" />
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
              <span className="text-cyan-400 font-mono text-sm">
                eVTOL Ready
              </span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section id="contact" className="border-t border-white/5">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            共创旅客体验未来
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            无论是航司合作、内容共创、品牌联名，还是低空经济探索，
            我们期待与您携手，为每一位旅客带来更美好的空中体验
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-weflye-secondary to-weflye-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Sparkles size={20} />
              contact@avinect.com
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer companyName="WeFlye" accentColor="#42A5F5" />
    </PageLayout>
  )
}
