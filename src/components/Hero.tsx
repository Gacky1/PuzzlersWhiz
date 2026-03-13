import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Play, CheckCircle, BookOpen, Zap, BarChart3, Users, Trophy } from 'lucide-react'

/* ─── Animated Dashboard Mockup ─────────────────────────────────────── */
function DashboardMockup() {
  const courses = [
    { name: 'GCP Cloud Fundamentals', progress: 72, color: '#6366f1' },
    { name: 'MySQL Advanced Queries', progress: 45, color: '#8b5cf6' },
    { name: 'DevOps Essentials', progress: 88, color: '#06b6d4' },
  ]

  return (
    <div className="w-full">
      {/* Browser chrome */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] bg-[#0c0c1d]">
        {/* Top bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-[#0a0a1a]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white/[0.06] rounded-full px-3 py-1.5 text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              app.PuzzlersWhiz.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-5 space-y-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm heading-xl">Good morning, Rachit 👋</p>
              <p className="text-slate-500 text-xs mt-0.5">Batch: Cloud & GCP · Semester 4</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <Zap size={14} className="text-indigo-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">A</div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Courses', value: '8', icon: BookOpen },
              { label: 'Points', value: '1.2K', icon: Trophy },
              { label: 'Streak', value: '14d', icon: Zap },
              { label: 'Rank', value: '#12', icon: BarChart3 },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-3 bg-white/[0.04] border border-white/[0.06] text-center">
                <s.icon size={13} className="text-indigo-400 mx-auto mb-1.5" />
                <div className="text-white font-bold text-base heading-xl">{s.value}</div>
                <div className="text-slate-600 text-[10px]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Progress bars */}
          <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06] space-y-3.5">
            <p className="text-xs font-semibold text-slate-400">Course Progress</p>
            {courses.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-slate-400">{c.name}</span>
                  <span className="text-xs font-bold" style={{ color: c.color }}>{c.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.progress}%` }}
                    transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${c.color}99, ${c.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="space-y-2">
            {[
              { icon: CheckCircle, text: 'Completed Quiz: EC2 Basics', time: '2h ago', color: 'text-emerald-400' },
              { icon: Play, text: 'Watched: S3 Bucket Policies', time: '5h ago', color: 'text-indigo-400' },
              { icon: Users, text: 'New batch members joined', time: '1d ago', color: 'text-purple-400' },
            ].map((a) => (
              <div key={a.text} className="flex items-center gap-2.5 text-xs">
                <a.icon size={13} className={a.color} />
                <span className="text-slate-400 flex-1">{a.text}</span>
                <span className="text-slate-600">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -left-8 glass rounded-2xl px-3.5 py-2.5 border border-white/[0.1] shadow-xl shadow-black/40"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <CheckCircle size={13} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Quiz Passed!</p>
            <p className="text-[10px] text-slate-500">Score: 95% · EC2</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-5 -right-8 glass rounded-2xl px-3.5 py-2.5 border border-white/[0.1] shadow-xl shadow-black/40"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-indigo-500/20 flex items-center justify-center">
            <Trophy size={13} className="text-indigo-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Rank #12</p>
            <p className="text-[10px] text-slate-500">Top 5% this week</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ─── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: '#060610' }}
    >
      {/* ── deep background radial ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-20 float-1"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 60%)' }} />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-15 float-2"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-10 float-3"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 60%)' }} />
      </div>

      {/* ── grid pattern ── */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />

      {/* ── horizontal separator lines ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[25, 50, 75].map((p) => (
          <div key={p} className="absolute w-full h-px"
            style={{ top: `${p}%`, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.04), rgba(99,102,241,0.08), rgba(99,102,241,0.04), transparent)' }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 pulse-glow" />
              India's Modern EdTech Platform
              <span className="text-indigo-500">·</span>
              <span className="text-indigo-400">2,000+ learners</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-[72px] font-black text-white heading-xl"
            >
              Learn.{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Practice.</span>
              <br className="hidden sm:block" />
              Master.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
              className="text-[17px] text-slate-400 leading-[1.7] max-w-md mx-auto lg:mx-0"
            >
              A modern platform for learning cloud technologies, databases, and real-world skills through structured courses, quizzes, and hands-on labs.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white btn-gradient shadow-lg shadow-indigo-500/20"
              >
                Get Started Free
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#platform"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200"
              >
                <Play size={13} className="text-indigo-400" fill="currentColor" />
                See Platform
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[
                  ['A', '#6366f1', '#8b5cf6'],
                  ['P', '#8b5cf6', '#a855f7'],
                  ['R', '#06b6d4', '#0284c7'],
                  ['K', '#4f46e5', '#6366f1'],
                  ['S', '#7c3aed', '#9333ea'],
                ].map(([char, from, to], i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#060610] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${from}, ${to})`, zIndex: 5 - i }}
                  >
                    {char}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500">
                <span className="text-white font-semibold">2,000+</span> students already learning
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block px-10"
          >
            <DashboardMockup />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/[0.12] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-400 opacity-80" />
          </motion.div>
          <span className="text-[11px] text-slate-600 tracking-widest uppercase">Scroll</span>
        </motion.div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #060610, transparent)' }} />
    </section>
  )
}
