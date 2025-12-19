import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface AnimatedCollapseProps {
  show: boolean
  children: React.ReactNode
  className?: string
  duration?: number
}

export default function AnimatedCollapse({ 
  show, 
  children, 
  className = '',
  duration = 0.25, 
}: AnimatedCollapseProps) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -8, height: 0 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            height: 'auto',
            transition: {
              duration,
              ease: [0.4, 0.0, 0.2, 1],
              opacity: { duration: duration * 0.6, delay: duration * 0.2 },
              y: { duration: duration * 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
              height: { duration, ease: [0.4, 0.0, 0.2, 1] },
            },
          }}
          exit={{ 
            opacity: 0, 
            y: -8, 
            height: 0,
            transition: {
              duration: duration * 0.8,
              ease: [0.4, 0.0, 1, 1],
              opacity: { duration: duration * 0.4 },
              y: { duration: duration * 0.5 },
              height: { duration: duration * 0.7, delay: duration * 0.1 },
            },
          }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
} 