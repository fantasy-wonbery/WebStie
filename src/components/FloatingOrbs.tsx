import { motion } from 'framer-motion'

interface OrbProps {
  color: string
  size: number
  top: string
  left: string
  delay?: number
}

function Orb({ color, size, top, left, delay = 0 }: OrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
        opacity: 0.3,
      }}
    >
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
        className="w-full h-full"
      />
    </motion.div>
  )
}

interface FloatingOrbsProps {
  colors?: string[]
}

export default function FloatingOrbs({
  colors = ['#00BCD4', '#1E88E5', '#7C4DFF'],
}: FloatingOrbsProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <Orb color={colors[0]} size={400} top="10%" left="10%" delay={0} />
      <Orb color={colors[1]} size={300} top="60%" left="70%" delay={0.5} />
      <Orb color={colors[2] || colors[0]} size={350} top="40%" left="40%" delay={1} />
    </div>
  )
}
