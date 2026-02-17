import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  items?: NavItem[]
  showBack?: boolean
  transparent?: boolean
}

export default function Navigation({ items = [], showBack, transparent }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${transparent ? '' : 'bg-primary/80 backdrop-blur-xl border-b border-white/5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo / Back */}
        <div className="flex items-center gap-4">
          {showBack ? (
            <Link
              to="/"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {t('common.backToHome')}
            </Link>
          ) : (
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Wonbery" className="h-8 w-8" />
              <span className="font-display font-bold text-lg">
                {t('common.companyName')}
              </span>
            </Link>
          )}
        </div>

        {/* Center: Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Language + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
