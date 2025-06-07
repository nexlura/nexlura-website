'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const SoftwareDevelopment = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className="relative h-80 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Code Grid Background */}
            <div className="absolute inset-0 bg-[url('/software/code-grid.svg')] opacity-20" />
            
            {/* Main Window Frame */}
            <motion.div
                animate={{ 
                    y: isHovered ? -5 : 0,
                    scale: isHovered ? 1.02 : 1
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut"
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%]"
            >
                <img
                    alt="Window Frame"
                    src="/software/window-frame.svg"
                    className="w-full h-full"
                />
            </motion.div>

            {/* Code Blocks */}
            <motion.div
                animate={{ 
                    x: isHovered ? [-5, 0] : -5,
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="absolute left-[20%] top-[30%]"
            >
                <img
                    alt="Code Block"
                    src="/software/code-block.svg"
                    className="w-32 h-32"
                />
            </motion.div>

            {/* Architecture Diagram */}
            <motion.div
                animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="absolute right-[20%] top-[30%]"
            >
                <img
                    alt="Architecture"
                    src="/software/architecture.svg"
                    className="w-32 h-32"
                />
            </motion.div>

            {/* UI Elements */}
            <motion.div
                animate={{ 
                    y: isHovered ? [0, -5, 0] : 0,
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute left-1/2 bottom-[20%] -translate-x-1/2"
            >
                <img
                    alt="UI Elements"
                    src="/software/ui-elements.svg"
                    className="w-40 h-24"
                />
            </motion.div>

            {/* Floating Elements */}
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
                    alt="Development Elements"
                    src="/software/dev-elements.svg"
                    className="w-full h-full object-cover opacity-30"
                />
            </motion.div>
        </div>
    )
}

export default SoftwareDevelopment 