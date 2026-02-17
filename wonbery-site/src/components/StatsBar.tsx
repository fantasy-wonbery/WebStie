import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function StatsBar() {
  const { t } = useTranslation()

  const stats = [
    { key: 'airlines', value: t('common.stats.airlinesValue') },
    { key: 'aircraft', value: t('common.stats.aircraftValue') },
    { key: 'employees', value: t('common.stats.employeesValue') },
    { key: 'years', value: t('common.stats.yearsValue') },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
            {stat.value}
          </div>
          <div className="text-white/50 text-sm">
            {t(`common.stats.${stat.key}`)}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
