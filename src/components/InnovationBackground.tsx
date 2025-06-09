'use client';

import { motion } from 'framer-motion';

const CirclePattern = () => (
  <motion.div
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 0.3 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: '#4c1d95', stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>
      
      {/* Animated circles */}
      <motion.circle
        cx="20"
        cy="20"
        r="15"
        fill="url(#grad1)"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="80"
        cy="80"
        r="25"
        fill="url(#grad2)"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </motion.div>
);

const FlowingLines = () => (
  <motion.div
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    transition={{ duration: 1 }}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <motion.path
        d="M0,50 Q25,45 50,50 T100,50"
        stroke="url(#grad1)"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,30 Q25,35 50,30 T100,30"
        stroke="url(#grad2)"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.path
        d="M0,70 Q25,65 50,70 T100,70"
        stroke="url(#grad1)"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </svg>
  </motion.div>
);

const GridPattern = () => (
  <motion.div
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3 }}
    transition={{ duration: 1 }}
  >
    <div className="w-full h-full bg-[conic-gradient(from_45deg,transparent_0_45deg,rgba(59,130,246,0.1)_45deg_135deg,transparent_135deg_225deg,rgba(124,58,237,0.1)_225deg_315deg,transparent_315deg)] bg-[length:50px_50px]" />
  </motion.div>
);

export function InnovationBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GridPattern />
      <CirclePattern />
      <FlowingLines />
      <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/50 via-transparent to-neutral-950/50" />
    </div>
  );
} 