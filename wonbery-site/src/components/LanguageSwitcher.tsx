import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('zh') ? 'zh' : 'en'

  const toggle = () => {
    i18n.changeLanguage(currentLang === 'zh' ? 'en' : 'zh')
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
    >
      {currentLang === 'zh' ? 'EN' : '中文'}
    </button>
  )
}
