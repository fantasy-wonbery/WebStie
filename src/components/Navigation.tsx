import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  brand: string
  brandColor?: string
  items?: { label: string; href: string }[]
  showBack?: boolean
}

export default function Navigation({
  brand,
  brandColor = '#ffffff',
  items = [],
  showBack = false,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-4">
            {showBack && (
              <Link
                to="/"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">返回总览</span>
              </Link>
            )}
            <span
              className="font-display font-bold text-xl"
              style={{ color: brandColor }}
            >
              {brand}
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-white ${
                  location.hash === item.href
                    ? 'text-white'
                    : 'text-white/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-card p-4"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-white/60 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
