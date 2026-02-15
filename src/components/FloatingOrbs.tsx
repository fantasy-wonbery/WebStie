import { motion } from 'framer-motion'

interface OrbProps {
  color: string
  size: number
  top: string
  left: string
  delay?: number
  duration?: number
}

function Orb({ color, size, top, left, delay = 0, duration = 8 }: OrbProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
      }}
      animate={{
        opacity: [0.15, 0.35, 0.2, 0.4, 0.15],
        scale: [1, 1.15, 0.95, 1.1, 1],
        x: [0, 40, -20, 30, 0],
        y: [0, -30, 20, -40, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
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
      <Orb color={colors[0]} size={500} top="5%" left="5%" delay={0} duration={10} />
      <Orb color={colors[1]} size={400} top="55%" left="65%" delay={1.5} duration={12} />
      <Orb color={colors[2] || colors[0]} size={450} top="30%" left="35%" delay={3} duration={14} />
      <Orb color={colors[0]} size={300} top="70%" left="15%" delay={2} duration={9} />
      <Orb color={colors[1]} size={350} top="15%" left="75%" delay={4} duration={11} />
    </div>
  )
}
