import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Wonbery" className="h-6 w-6 opacity-60" />
            <span className="text-white/40 text-sm">
              {t('common.copyright', { year })}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:service@wonbery.com"
              className="text-white/40 hover:text-accent text-sm transition-colors"
            >
              service@wonbery.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
