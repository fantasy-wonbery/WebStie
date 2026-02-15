import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  Plane,
  Radio,
  Wifi,
  ArrowRight,
  Globe,
  Award,
  Users,
  Zap,
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

const companies = [
  {
    name: 'Avinect',
    nameCn: '艾维科技',
    description: '国际航空科技服务商，为全球航空公司提供数字化解决方案',
    path: '/avinect',
    icon: Building2,
    color: '#00BCD4',
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['国际业务', '数字化方案', '支付集成'],
  },
  {
    name: '天宇科技',
    nameCn: 'Tianyu Tech',
    description: '航空辅营服务专家，提供客舱销售全链条解决方案',
    path: '/tianyu',
    icon: Plane,
    color: '#FF6F00',
    gradient: 'from-orange-500 to-amber-600',
    tags: ['客舱销售', '供应链', '系统服务'],
  },
  {
    name: 'Wonbery',
    nameCn: '网博科技',
    description: '航空运行控制技术专家，赋能航司安全高效运营',
    path: '/wonbery',
    icon: Radio,
    color: '#5FA8D3',
    gradient: 'from-blue-500 to-indigo-600',
    tags: ['AOC系统', '指挥通信', 'AI语音'],
  },
  {
    name: '飞途科技',
    nameCn: 'Feitu Tech',
    description: '空中互联网创新者，打造下一代机上体验',
    path: '/feitu',
    icon: Wifi,
    color: '#E040FB',
    gradient: 'from-purple-500 to-pink-600',
    tags: ['机载WiFi', '低空经济', 'AI内容'],
  },
]

const capabilities = [
  {
    icon: Globe,
    title: '全球服务网络',
    description: '业务覆盖亚太、中东等多个地区，服务国内外航空公司',
  },
  {
    icon: Zap,
    title: '技术创新驱动',
    description: '持续投入研发，以AI、大数据等前沿技术赋能航空业',
  },
  {
    icon: Users,
    title: '专业服务团队',
    description: '拥有丰富行业经验的专家团队，提供端到端解决方案',
  },
  {
    icon: Award,
    title: '行业深耕积累',
    description: '多年航空科技领域深耕，深刻理解行业需求与痛点',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Home() {
  return (
    <PageLayout className="bg-black">
      <ParticleField color="#ffffff" count={300} />
      <FloatingOrbs colors={['#00BCD4', '#7B2CBF', '#E040FB']} />

      {/* Hero Section */}
      <Hero>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/60">
              Avinect Group · Aviation Technology Solutions
            </span>
          </motion.div>

          <AnimatedText
            text="Avinect 航空科技集团"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold justify-center mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12"
          >
            从航空辅营到机载通信，从运行控制到内容创新
            <br />
            <span className="text-white/40">为航空公司提供全方位数字化解决方案</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#companies"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors"
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
          <StatsCard
            value="20"
            suffix="+"
            label="服务航司"
            accentColor="#00BCD4"
            delay={0}
          />
          <StatsCard
            value="1000"
            suffix="+"
            label="覆盖飞机"
            accentColor="#FF6F00"
            delay={0.1}
          />
          <StatsCard
            value="10000"
            suffix="+"
            label="赋能员工"
            accentColor="#5FA8D3"
            delay={0.2}
          />
          <StatsCard
            value="5"
            suffix="+"
            label="覆盖地区"
            accentColor="#E040FB"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Companies Grid */}
      <Section id="companies">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            业务板块
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            四大专业板块，覆盖航空科技全产业链
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {companies.map((company) => (
            <motion.div key={company.path} variants={itemVariants}>
              <Link to={company.path}>
                <GlowCard
                  glowColor={`${company.color}40`}
                  className="h-full"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${company.gradient}`}
                    >
                      <company.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold mb-1">
                        {company.name}
                      </h3>
                      <p className="text-white/40 text-sm mb-2">
                        {company.nameCn}
                      </p>
                      <p className="text-white/60 mb-4">{company.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {company.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        className="flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: company.color }}
                      >
                        <span>了解更多</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
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
            className="text-white/60 max-w-2xl mx-auto"
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
              <p className="text-white/50 text-sm">{cap.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            开启合作
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            无论您是航空公司、机场还是行业合作伙伴，我们期待与您共同探索航空科技的无限可能
          </p>
          <a
            href="mailto:contact@avinect.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors"
          >
            联系我们
          </a>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Avinect Group. All rights reserved.
          </p>
        </div>
      </footer>
    </PageLayout>
  )
}
