interface WaveDividerProps {
  color?: string
  flip?: boolean
  className?: string
}

export default function WaveDivider({ color = '#f9fafb', flip = false, className = '' }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 80C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
