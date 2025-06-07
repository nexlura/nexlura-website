'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const QATesting = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className="relative h-80 bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#14b8a6] overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Testing Grid */}
            <div className="absolute inset-0 bg-[url('/qa/test-grid.svg')] opacity-20" />
            
            {/* Main Testing Dashboard */}
            <motion.div
                animate={{ 
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -5 : 0
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut"
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]"
            >
                <img
                    alt="Testing Dashboard"
                    src="/qa/dashboard.svg"
                    className="w-full"
                />
            </motion.div>

            {/* Test Cases */}
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
                className="absolute left-[20%] top-[30%]"
            >
                <img
                    alt="Test Cases"
                    src="/qa/test-cases.svg"
                    className="w-24 h-24"
                />
            </motion.div>

            {/* Bug Report */}
            <motion.div
                animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="absolute right-[20%] bottom-[30%]"
            >
                <img
                    alt="Bug Report"
                    src="/qa/bug-report.svg"
                    className="w-24 h-24"
                />
            </motion.div>

            {/* Testing Flow */}
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
                    alt="Testing Flow"
                    src="/qa/testing-flow.svg"
                    className="w-full h-full object-cover opacity-30"
                />
            </motion.div>
        </div>
    )
}

export default QATesting 