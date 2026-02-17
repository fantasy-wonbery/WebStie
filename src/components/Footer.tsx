import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface FooterProps {
  companyName: string
  accentColor?: string
}

export default function Footer({
  companyName,
  accentColor = '#00BCD4',
}: FooterProps) {
  const { t } = useTranslation()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="font-display font-bold"
            style={{ color: accentColor }}
          >
            {companyName}
          </span>
        </div>

        <div className="text-white/40 text-sm">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors text-sm"
          >
            {t('common.privacyPolicy')}
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors text-sm"
          >
            {t('common.contactUs')}
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
