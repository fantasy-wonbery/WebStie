import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  items?: NavItem[]
  showBack?: boolean
}

export default function Navigation({ items = [], showBack }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === ''

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.operations'), path: '/operations' },
    { label: t('nav.airport'), path: '/airport' },
    { label: t('nav.aocSolutions'), path: '/aoc-solutions' },
    { label: t('nav.flightCrew'), path: '/flight-crew' },
    { label: t('nav.serviceSupport'), path: '/service' },
    { label: t('nav.about'), path: '/about' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : isHome
            ? 'bg-transparent'
            : 'bg-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {showBack && (
            <ArrowLeft size={18} className={scrolled ? 'text-gray-600' : 'text-white/70'} />
          )}
          <img
            src={import.meta.env.BASE_URL + (scrolled ? 'images/real-110.png' : 'images/wonbery-gray-89.png')}
            alt="Wonbery"
            className="h-7"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {(isHome ? items : navLinks).map((item) => {
            const href = 'href' in item ? item.href : ('path' in item ? item.path : '')
            const isLink = 'path' in item
            const Comp = isLink ? Link : 'a'
            const props = isLink ? { to: href } : { href }
            return (
              <Comp
                key={href}
                {...(props as any)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  scrolled
                    ? 'text-gray-600 hover:text-primary hover:bg-primary-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Comp>
            )
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher dark={scrolled} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${scrolled ? 'text-gray-600' : 'text-white/80'}`}
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
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
