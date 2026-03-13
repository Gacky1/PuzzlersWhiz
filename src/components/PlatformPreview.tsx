import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Brain, Play, BarChart3, ChevronRight, CheckCircle, Users, Zap, BookOpen, Trophy } from 'lucide-react'

const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    accent: '#6366f1',
    content: (
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-white heading-xl">Student Dashboard</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Batch: Cloud & AWS · Semester 3</p>
          </div>
          <span className="px-2 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-semibold">Active</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Modules', value: '12/18', icon: BookOpen },
            { label: 'Score', value: '88%', icon: Trophy },
            { label: 'Labs', value: '7', icon: Zap },
            { label: 'Streak', value: '14d', icon: CheckCircle },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-2.5 bg-white/[0.04] border border-white/[0.06] text-center">
              <s.icon size={12} className="text-indigo-400 mx-auto mb-1" />
              <div className="text-sm font-bold text-white heading-xl">{s.value}</div>
              <div className="text-[9px] text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06] space-y-3">
          <p className="text-[11px] font-semibold text-slate-400">Course Progress</p>
          {[
            { name: 'GCP Cloud Fundamentals', p: 72, c: '#6366f1' },
            { name: 'MySQL Advanced Queries', p: 45, c: '#8b5cf6' },
            { name: 'DevOps Essentials', p: 88, c: '#06b6d4' },
          ].map((c) => (
            <div key={c.name}>
              <div className="flex justify-between mb-1">
                <span className="text-[11px] text-slate-400">{c.name}</span>
                <span className="text-[11px] font-bold" style={{ color: c.c }}>{c.p}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${c.p}%`, background: `linear-gradient(90deg, ${c.c}88, ${c.c})` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { icon: CheckCircle, text: 'Completed Quiz: EC2 Basics', time: '2h ago', color: 'text-emerald-400' },
            { icon: Play, text: 'Watched: S3 Bucket Policies', time: '5h ago', color: 'text-indigo-400' },
            { icon: Users, text: 'New batch members joined', time: '1d ago', color: 'text-purple-400' },
          ].map((a) => (
            <div key={a.text} className="flex items-center gap-2 text-[11px]">
              <a.icon size={12} className={a.color} />
              <span className="text-slate-400 flex-1">{a.text}</span>
              <span className="text-slate-600">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'quiz',
    label: 'Quiz',
    icon: Brain,
    accent: '#8b5cf6',
    content: (
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-white heading-xl">Quiz: EC2 & Auto Scaling</p>
            <p className="text-[11px] text-slate-500">10 questions · 15 minutes</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-bold">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 pulse-glow" />
            12:45
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold transition-all ${i < 4 ? 'bg-emerald-500/25 border border-emerald-500/40 text-emerald-400' : i === 4 ? 'bg-indigo-500/30 border border-indigo-400/60 text-white ring-2 ring-indigo-500/30' : 'bg-white/[0.04] border border-white/[0.08] text-slate-600'}`}>
              {i + 1}
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06]">
          <p className="text-[10px] text-slate-600 mb-1">Question 5 of 10</p>
          <p className="text-sm font-semibold text-white mb-4">Which EC2 pricing model is best for unpredictable, fault-tolerant workloads?</p>
          <div className="space-y-2">
            {['Reserved Instances', 'On-Demand', 'Spot Instances', 'Dedicated Hosts'].map((opt, i) => (
              <div key={opt} className={`px-3 py-2 rounded-lg border text-[12px] font-medium cursor-pointer transition-all ${i === 2 ? 'border-indigo-500/50 bg-indigo-500/15 text-indigo-300' : 'border-white/[0.06] text-slate-500 hover:border-white/[0.12] hover:text-slate-300'}`}>
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'lecture',
    label: 'Lecture',
    icon: Play,
    accent: '#06b6d4',
    content: (
      <div className="p-5 space-y-4">
        <div>
          <p className="text-sm font-bold text-white heading-xl">S3 Bucket Policies</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Module 3 · Lecture 5 · 24 min</p>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-[#080818] border border-white/[0.06] aspect-video flex items-center justify-center">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15), rgba(6,182,212,0.1))' }} />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all cursor-pointer">
              <Play size={18} className="text-white ml-1" fill="white" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-1.5">
              <div className="h-full w-1/3 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] text-white/40">
              <span>8:12</span><span>24:00</span>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          {['Intro to S3 Policies', 'Bucket-Level Permissions', 'IAM vs Bucket Policy', 'Cross-account Access', 'Best Practices'].map((item, i) => (
            <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] transition-all ${i === 2 ? 'bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-semibold' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${i < 3 ? 'bg-emerald-500' : 'bg-white/10'}`} />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    accent: '#4f46e5',
    content: (
      <div className="p-5 space-y-4">
        <p className="text-sm font-bold text-white heading-xl">Performance Analytics</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Quizzes', value: '18', delta: '+3 this week' },
            { label: 'Avg Score', value: '84%', delta: '+7% improved' },
            { label: 'Rank', value: '#8', delta: '↑4 positions' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-3 bg-white/[0.04] border border-white/[0.06] text-center">
              <div className="text-[10px] text-slate-600">{s.label}</div>
              <div className="text-lg font-black text-white heading-xl">{s.value}</div>
              <div className="text-[9px] text-emerald-400 font-semibold">{s.delta}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06]">
          <p className="text-[11px] font-semibold text-slate-500 mb-3">Weekly Quiz Scores</p>
          <div className="flex items-end gap-1.5 h-16">
            {[65, 72, 58, 88, 76, 92, 84].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-sm transition-all"
                  style={{ height: `${(h / 100) * 100}%`, background: i === 5 ? 'linear-gradient(to top, #4f46e5, #8b5cf6)' : 'rgba(99,102,241,0.25)' }} />
                <div className="text-[8px] text-slate-600">{['M','T','W','T','F','S','S'][i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2.5">
          {[{ s: 'AWS Fundamentals', v: 92 }, { s: 'MySQL Queries', v: 78 }, { s: 'Networking', v: 65 }].map((s) => (
            <div key={s.s}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-400">{s.s}</span>
                <span className="text-indigo-400 font-bold">{s.v}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: `${s.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function PlatformPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  return (
    <section id="platform" className="relative py-28" style={{ background: '#060610' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.25), transparent)' }} />

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 60%)' }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-xs font-medium text-cyan-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Live platform preview
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-5">
            See PuzzlersWhiz{' '}
            <span className="gradient-text">in action</span>
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            Explore the key screens that power the PuzzlersWhiz learning experience.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex gap-1 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
            {screens.map((s, i) => (
              <button
                key={s.id}
                id={`preview-tab-${s.id}`}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-250 ${
                  active === i
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${s.accent}33, ${s.accent}20)`, border: `1px solid ${s.accent}44` }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <s.icon size={14} className={`relative z-10 ${active === i ? 'opacity-100' : 'opacity-50'}`} style={active === i ? { color: s.accent } : {}} />
                <span className="relative z-10 hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Screen */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.03)] bg-[#0c0c1d]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0a0a1a]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-white/[0.05] rounded-full px-3 py-1 text-[11px] text-slate-600 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  app.PuzzlersWhiz.com/{screens[active].id}
                </div>
              </div>
              <ChevronRight size={12} className="text-slate-700" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {screens[active].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
