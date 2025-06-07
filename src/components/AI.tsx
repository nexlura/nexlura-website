'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'


function Robot({
                   src,
                   top,
                   offset,
                   delay,
                   divSize,
                   imgSize,
               }: {
    src: string
    top: number
    offset: number
    delay: number
    divSize: number
    imgSize: number
}) {
    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        whileHover={{ y: -20 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{ '--offset': `${offset}px`, top } as React.CSSProperties}
        className={`absolute left-[calc(50%+var(--offset))] size-[${divSize}px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]`}
      >
        <img
          alt=""
          src={src}
          className={`absolute top-[4px] left-[7px] size-[${imgSize}px]`}
        />
      </motion.div>
    )
}

const AIDevelopment = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState({
        head: false,
        leftArm: false,
        rightArm: false,
        core: false,
        circuit: false
    })

    const checkImage = (path: string) => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve(true)
            img.onerror = () => reject(false)
            img.src = path
        })
    }

    useEffect(() => {
        const checkImages = async () => {
            try {
                const head = await checkImage('/ai/robot-head.svg')
                const leftArm = await checkImage('/ai/robot-arm-left.svg')
                const rightArm = await checkImage('/ai/robot-arm-right.svg')
                const core = await checkImage('/ai/robot-core.svg')
                const circuit = await checkImage('/ai/circuit-overlay.svg')
                
                setImagesLoaded({
                    head: !!head,
                    leftArm: !!leftArm,
                    rightArm: !!rightArm,
                    core: !!core,
                    circuit: !!circuit
                })
            } catch (error) {
                console.error('Error loading images:', error)
            }
        }
        
        checkImages()
    }, [])

    return (
        <div 
            className="relative h-80 bg-gradient-to-br from-[#1a237e] via-[#311b92] to-[#4a148c] overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/ai/grid.svg')] opacity-20" />
            
            {/* Robot Head */}
            <motion.div
                animate={{ 
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -5 : 0
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut"
                }}
                className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 border border-blue-400 bg-blue-900/20"
            >
                <img
                    alt="Robot Head"
                    src="/ai/robot-head.svg"
                    className="w-32 h-32 object-contain"
                />
            </motion.div>

            {/* Left Arm */}
            <motion.div
                animate={{ 
                    x: isHovered ? [-10, 0] : -10,
                    y: isHovered ? [-5, 0] : -5,
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="absolute left-[30%] top-[50%] border border-blue-400 bg-blue-900/20"
            >
                <img
                    alt="Robot Left Arm"
                    src="/ai/robot-arm-left.svg"
                    className="w-24 h-24 object-contain"
                />
            </motion.div>

            {/* Right Arm */}
            <motion.div
                animate={{ 
                    x: isHovered ? [10, 0] : 10,
                    y: isHovered ? [-5, 0] : -5,
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="absolute right-[30%] top-[50%] border border-blue-400 bg-blue-900/20"
            >
                <img
                    alt="Robot Right Arm"
                    src="/ai/robot-arm-right.svg"
                    className="w-24 h-24 object-contain"
                />
            </motion.div>

            {/* Body Core */}
            <motion.div
                animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="absolute left-1/2 top-[60%] -translate-x-1/2 border border-blue-400 bg-blue-900/20"
            >
                <img
                    alt="Robot Core"
                    src="/ai/robot-core.svg"
                    className="w-36 h-36 object-contain"
                />
            </motion.div>

            {/* Circuit Overlay */}
            <motion.div
                animate={{ 
                    rotate: 360,
                    scale: isHovered ? 1.1 : 1
                }}
                transition={{
                    rotate: {
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    },
                    scale: {
                        duration: 1
                    }
                }}
                className="absolute inset-0"
            >
                <img
                    alt="Circuit Pattern"
                    src="/ai/circuit-overlay.svg"
                    className="w-full h-full object-cover opacity-30"
                />
            </motion.div>

            {/* Debug Info */}
            <div className="absolute bottom-2 right-2 text-xs text-white opacity-50">
                Images loaded: {Object.entries(imagesLoaded).map(([key, value]) => (
                    `${key}: ${value ? '✓' : '✗'} `
                ))}
            </div>
        </div>
    )
}

export default AIDevelopment