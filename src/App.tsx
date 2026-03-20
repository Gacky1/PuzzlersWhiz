import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import RefundPolicy from './pages/RefundPolicy'
import logoImg from './assets/LogoTp.png'

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    // Stay for at least 5500ms to fully cover the 5‑second gif
    const t = setTimeout(onDone, 5500)
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
      {/* Background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
      />

      {/* Logo container */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="relative mb-10 flex items-center justify-center"
      >
        {/* Slow outer spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute"
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: '#6366f1',
            borderRightColor: '#8b5cf6',
          }}
        />
        {/* Fast inner spinning ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute"
          style={{
            width: '116px',
            height: '116px',
            borderRadius: '50%',
            border: '1.5px solid transparent',
            borderBottomColor: '#a78bfa',
            borderLeftColor: '#6366f1',
          }}
        />
        {/* Pulsing glow behind logo */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-24 h-24 rounded-full"
          style={{ background: 'radial-gradient(circle, #6366f170, transparent)' }}
        />
        {/* Logo image */}
        <motion.img
          src={logoImg}
          alt="PuzzlersWhiz Logo"
          className="relative z-10 w-20 h-20 object-contain drop-shadow-2xl"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 18px #6366f188)' }}
        />
      </motion.div>

      {/* Text + dots */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col items-center gap-5"
      >
        <p
          className="text-slate-400 text-sm tracking-[0.25em] uppercase font-semibold"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          PuzzlersWhiz
        </p>
        {/* Bouncing dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-indigo-400"
              animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.18,
              }}
            />
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
    <BrowserRouter>
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
