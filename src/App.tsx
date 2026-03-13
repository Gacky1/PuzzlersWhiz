import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Home from './pages/Home'

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: '#060610' }}
    >
      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="relative mb-8"
      >
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-3 rounded-2xl border border-indigo-500/30"
          style={{ borderTopColor: '#6366f1', borderRadius: '16px' }}
        />
        <div className="w-16 h-16 rounded-2xl animated-gradient flex items-center justify-center glow-indigo">
          <span className="text-white text-2xl font-black" style={{ fontFamily: 'Space Grotesk' }}>A</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-slate-500 text-sm tracking-widest uppercase font-medium">PuzzlersWhiz</p>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="load-dot w-1.5 h-1.5 rounded-full bg-indigo-400" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  return <motion.div id="scroll-progress" style={{ scaleX }} />
}

function App() {
  const [loading, setLoading] = useState(true)

  // Force dark mode permanently
  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  if (loading) {
    return <LoadingScreen onDone={() => setLoading(false)} />
  }

  return (
    <>
      <ScrollProgress />
      <Home />
    </>
  )
}

export default App
