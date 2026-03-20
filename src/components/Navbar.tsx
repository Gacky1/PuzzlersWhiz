import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#howitworks' },
  { label: 'Platform', href: '#platform' },
  { label: 'For You', href: '#audience' },
  { label: 'Reviews', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060610]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-8 h-8 rounded-xl animated-gradient flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Zap size={15} className="text-white" />
              <div className="absolute inset-0 rounded-xl glow-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-[15px] font-bold text-white tracking-tight heading-xl">
              PuzzlersWhiz
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-indigo-400 group-hover:w-4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#cta"
              className="px-3.5 py-2 text-[13px] font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              Login
            </a>
            <a
              href="#cta"
              className="relative px-4 py-2 text-[13px] font-semibold text-white rounded-xl btn-gradient overflow-hidden shimmer-effect"
            >
              Get Started →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={menuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden relative bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-white/[0.06]">
                <a href="#cta" onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-medium text-slate-400 border border-white/[0.08] rounded-xl hover:bg-white/[0.04] transition-all">
                  Login
                </a>
                <a href="#cta" onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-semibold text-white rounded-xl btn-gradient">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
