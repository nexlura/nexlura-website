'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TechnicalSupport = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className="relative h-80 bg-gradient-to-br from-[#1e40af] via-[#1d4ed8] to-[#3b82f6] overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Support Grid */}
            <div className="absolute inset-0 bg-[url('/support/support-grid.svg')] opacity-20" />
            
            {/* Main Support Dashboard */}
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
                    alt="Support Dashboard"
                    src="/support/dashboard.svg"
                    className="w-full"
                />
            </motion.div>

            {/* Support Tickets */}
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
                    alt="Support Tickets"
                    src="/support/tickets.svg"
                    className="w-24 h-24"
                />
            </motion.div>

            {/* Live Chat */}
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
                    alt="Live Chat"
                    src="/support/chat.svg"
                    className="w-24 h-24"
                />
            </motion.div>

            {/* Support Network */}
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
                    alt="Support Network"
                    src="/support/network.svg"
                    className="w-full h-full object-cover opacity-30"
                />
            </motion.div>
        </div>
    )
}

export default TechnicalSupport 