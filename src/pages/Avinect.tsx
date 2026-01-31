import { motion } from 'framer-motion'
import {
  Globe,
  Shield,
  TrendingUp,
  Building,
  CreditCard,
  Users,
  MapPin,
  CheckCircle2,
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
  { label: '核心业务', href: '#services' },
  { label: '优势', href: '#advantages' },
  { label: '联系', href: '#contact' },
]

const services = [
  {
    icon: Globe,
    title: '国际业务拓展',
    description: '面向东南亚、中东、港澳市场，提供航空科技服务的国际化通道',
  },
  {
    icon: Shield,
    title: '品牌授权',
    description: '为集团旗下企业提供统一的品牌管理与知识产权授权服务',
  },
  {
    icon: CreditCard,
    title: '支付解决方案',
    description: 'Antom 支付集成方案，支持 SoftPOS / mPOS 多场景应用',
  },
  {
    icon: TrendingUp,
    title: '税务优化',
    description: '利用香港税制优势，优化集团整体税务结构与资金流转效率',
  },
]

const advantages = [
  '香港公司注册，享受简单税制',
  '股息分红预提税优惠（10%→5%）',
  '无外汇管制，资金自由流动',
  '国际化品牌形象',
  '便捷的银行开户与贸易金融',
  '连接内地与国际市场的桥梁',
]

const targetMarkets = [
  { region: '东南亚', countries: '新加坡、马来西亚、泰国、越南' },
  { region: '中东', countries: '阿联酋、沙特阿拉伯、卡塔尔' },
  { region: '港澳', countries: '香港、澳门' },
]

export default function Avinect() {
  return (
    <PageLayout className="bg-avinect-primary">
      <FloatingOrbs colors={['#00BCD4', '#1E88E5', '#0A2540']} />
      <Navigation
        brand="Avinect Holding"
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
              text="Avinect Holding Limited"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 mb-2"
            >
              艾维科技控股有限公司
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-white/40 mb-8 max-w-lg"
            >
              以香港为基地，连接内地与国际市场的航空科技控股平台，
              致力于为集团企业提供国际化发展通道与资本运营支持。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-avinect-accent text-avinect-primary font-semibold hover:bg-avinect-accent/90 transition-colors"
              >
                了解服务
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
                <Building size={120} className="text-avinect-accent mx-auto mb-6 opacity-80" />
                <div className="text-6xl font-display font-bold text-avinect-accent mb-2">
                  HK
                </div>
                <div className="text-white/60">Holding Platform</div>
              </div>
            </div>

            {/* Decorative elements */}
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
            label="目标市场区域"
            accentColor="#00BCD4"
            delay={0}
          />
          <StatsCard
            value="30"
            suffix="%"
            label="内地公司持股"
            accentColor="#00BCD4"
            delay={0.1}
          />
          <StatsCard
            value="5"
            suffix="%"
            label="分红预提税率"
            accentColor="#00BCD4"
            delay={0.2}
          />
          <StatsCard
            value="0"
            suffix="%"
            label="香港股息税"
            accentColor="#00BCD4"
            delay={0.3}
          />
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
            核心业务
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            作为集团控股平台，Avinect 提供多元化的国际业务支持服务
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <GlowCard
              key={service.title}
              glowColor="rgba(0, 188, 212, 0.3)"
              delay={index * 0.1}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-avinect-accent/10">
                  <service.icon size={24} className="text-avinect-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/60">{service.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Target Markets */}
      <Section className="border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              目标市场
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 mb-8"
            >
              立足香港，辐射亚太及中东地区，为航空科技服务的国际化扩张提供战略支撑
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
                    <Globe size={20} className="text-avinect-accent" />
                    <span className="font-semibold">{market.region}</span>
                  </div>
                  <p className="text-white/60 text-sm ml-8">{market.countries}</p>
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
              <Users size={24} className="text-avinect-accent" />
              当前合作洽谈
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                <div>
                  <div className="font-medium">香港航空</div>
                  <div className="text-white/40 text-sm">Hong Kong Airlines</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-amber-500/20 text-amber-400">
                  洽谈中
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-white/60 text-sm mb-2">项目内容</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-avinect-accent" />
                    Antom 支付集成方案
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-avinect-accent" />
                    SoftPOS / mPOS 选型
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-avinect-accent" />
                    机上销售系统对接
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Advantages */}
      <Section id="advantages" className="border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            香港平台优势
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
            期待与您探讨国际业务合作机会
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

      <Footer companyName="Avinect Holding Limited" accentColor="#00BCD4" />
    </PageLayout>
  )
}
