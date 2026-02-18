import { useTranslation } from 'react-i18next'

interface Props {
  dark?: boolean
}

export default function LanguageSwitcher({ dark }: Props) {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('zh') ? 'zh' : 'en'

  const toggle = () => {
    i18n.changeLanguage(currentLang === 'zh' ? 'en' : 'zh')
  }

  return (
    <button
      onClick={toggle}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
        dark
          ? 'bg-gray-100 border border-gray-200 text-gray-600 hover:text-primary hover:bg-primary-50'
          : 'bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20'
      }`}
    >
      {currentLang === 'zh' ? 'EN' : '中文'}
    </button>
  )
}
