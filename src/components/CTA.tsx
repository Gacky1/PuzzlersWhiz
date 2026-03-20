import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, UserPlus, LogIn, Sparkles, Shield, Zap, Globe } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#060610' }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />

      {/* CTA card container */}
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden text-center p-12 lg:p-20"
          style={{
            background: 'linear-gradient(135deg, #0f0f28 0%, #12102a 50%, #0d0d22 100%)',
            border: '1px solid rgba(99,102,241,0.25)',
            boxShadow: '0 0 0 1px rgba(99,102,241,0.1), 0 40px 120px rgba(0,0,0,0.6), inset 0 0 80px rgba(99,102,241,0.04)',
          }}
        >
          {/* Animated blobs inside card */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-20 float-1"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 60%)' }} />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full opacity-15 float-2"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 60%)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] opacity-10"
              style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, transparent 60%)' }} />
          </div>

          {/* Grid inside card */}
          <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-8"
            >
              <Sparkles size={12} className="text-yellow-400" />
              Join 2,000+ learners on PuzzlersWhiz
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white heading-xl mb-6"
            >
              Start your learning
              <br />
              <span className="gradient-text">journey today.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="text-[17px] text-slate-400 max-w-lg mx-auto leading-relaxed mb-10"
            >
              Join a community mastering cloud, databases, and real-world tech skills — one structured lesson at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.36, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://app.puzzlerswhiz.com"
                id="cta-create-account"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white btn-gradient shadow-lg shadow-indigo-500/25"
              >
                <UserPlus size={16} />
                Create Account
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <motion.a
                href="https://app.puzzlerswhiz.com"
                id="cta-login"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-slate-300 bg-white/[0.05] border border-white/[0.1] hover:border-white/[0.17] hover:bg-white/[0.08] transition-all duration-200"
              >
                <LogIn size={16} />
                Login to Platform
              </motion.a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-6 justify-center"
            >
              {[
                { icon: Zap, text: 'Free to get started' },
                { icon: Shield, text: 'Secure & private' },
                { icon: Globe, text: 'Access from anywhere' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                  <t.icon size={12} className="text-indigo-500" />
                  {t.text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
