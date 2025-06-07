'use client'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <div className="relative h-80 bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000011_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Central Circle */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative size-32 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 shadow-lg"
        >
          <div className="absolute inset-1 rounded-full bg-white/90 backdrop-blur-sm" />
        </motion.div>

        {/* Orbiting Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * -1.5
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '140px',
              height: '2px',
              transformOrigin: '0% 50%'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
              className="absolute right-0 size-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            />
          </motion.div>
        ))}

        {/* Floating Shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            animate={{
              y: [0, -15, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              rotate: [0, i % 2 === 0 ? 45 : -45, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className={`absolute size-8 ${
              i === 0 ? 'bg-teal-400' : i === 1 ? 'bg-emerald-400' : 'bg-green-400'
            } ${
              i === 0 ? 'rounded-lg' : i === 1 ? 'rounded-full' : 'rounded-tr-2xl'
            }`}
            style={{
              top: `${120 + i * 40}px`,
              left: `${120 + i * 40}px`,
              opacity: 0.8
            }}
          />
        ))}
      </motion.div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 100 100 Q 150 50, 200 100 T 300 100"
          stroke="rgba(16, 185, 129, 0.2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  )
}

export default Mission 