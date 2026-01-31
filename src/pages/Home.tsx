import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  Plane,
  Radio,
  Wifi,
  ArrowRight,
  Globe,
  TrendingUp,
} from 'lucide-react'
import {
  PageLayout,
  Hero,
  Section,
  GlowCard,
  AnimatedText,
  ParticleField,
} from '../components'

const companies = [
  {
    name: 'Avinect Holding',
    nameCn: '艾维科技控股',
    description: '香港控股平台 · 国际业务实体',
    path: '/avinect',
    icon: Building2,
    color: '#00BCD4',
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['品牌授权', '技术服务输出', '海外市场'],
  },
  {
    name: '天宇科技',
    nameCn: 'Tianyu Technology',
    description: '国内航司辅营服务主体',
    path: '/tianyu',
    icon: Plane,
    color: '#FF6F00',
    gradient: 'from-orange-500 to-amber-600',
    tags: ['客舱销售', '业务系统', '供应链'],
  },
  {
    name: 'Wonbery',
    nameCn: '网博科技',
    description: '航空 AOC 技术服务商',
    path: '/wonbery',
    icon: Radio,
    color: '#5FA8D3',
    gradient: 'from-blue-500 to-indigo-600',
    tags: ['运行控制', '指挥通信', 'AI 语音'],
  },
  {
    name: '飞途科技',
    nameCn: 'Feitu Technology',
    description: '机载通信 · 内容运营创新平台',
    path: '/feitu',
    icon: Wifi,
    color: '#E040FB',
    gradient: 'from-purple-500 to-pink-600',
    tags: ['机载 WiFi', '低空经济', 'AI 内容'],
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
              Vincent Business Portfolio
            </span>
          </motion.div>

          <AnimatedText
            text="构建航空科技生态"
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
            <span className="text-white/40">打造全链路航空科技服务体系</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-white/40">
              <Globe size={20} />
              <span>香港 · 北京 · 天津</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <TrendingUp size={20} />
              <span>4 家企业 · 多业务协同</span>
            </div>
          </motion.div>
        </div>
      </Hero>

      {/* Companies Grid */}
      <Section id="companies">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            业务版图
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            四大业务板块，覆盖航空科技全产业链
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

      {/* Architecture Section */}
      <Section className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            股权架构
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            优化的控股结构，实现税务效率与业务灵活性的平衡
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="font-mono text-sm md:text-base leading-relaxed">
            <div className="text-white/80">Vincent（个人）</div>
            <div className="text-white/40">│</div>
            <div className="flex items-start gap-2">
              <span className="text-white/40">├──</span>
              <div>
                <span className="text-cyan-400">Avinect Holding</span>
                <span className="text-white/40">（香港）── 100% 持股</span>
                <div className="text-white/40 ml-4 mt-1">
                  <div>├── 持股 天宇科技 30%</div>
                  <div>├── 持股 飞途科技 30%</div>
                  <div>└── 国际业务实体</div>
                </div>
              </div>
            </div>
            <div className="text-white/40">│</div>
            <div className="flex items-start gap-2">
              <span className="text-white/40">├──</span>
              <span className="text-orange-400">天宇科技</span>
              <span className="text-white/40">（天津）── 个人 70% / Avinect 30%</span>
            </div>
            <div className="text-white/40">│</div>
            <div className="flex items-start gap-2">
              <span className="text-white/40">├──</span>
              <span className="text-blue-400">Wonbery 网博科技</span>
              <span className="text-white/40">（北京）── 个人 100%</span>
            </div>
            <div className="text-white/40">│</div>
            <div className="flex items-start gap-2">
              <span className="text-white/40">└──</span>
              <span className="text-purple-400">飞途科技</span>
              <span className="text-white/40">（天津）── 个人 70% / Avinect 30%</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Vincent Business Portfolio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </PageLayout>
  )
}
