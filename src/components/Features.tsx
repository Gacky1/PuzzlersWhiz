import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Brain, FlaskConical, Users, BarChart3, Shield } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Structured Courses',
    description: 'Watch lectures and access organized learning content in a clear, progressive curriculum designed by experts.',
    gradient: 'from-indigo-500 to-indigo-700',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25',
    iconColor: 'text-indigo-400',
    delay: 0,
  },
  {
    icon: Brain,
    title: 'Interactive Quizzes',
    description: 'Test your knowledge with timed quizzes and get instant, detailed feedback on every answer.',
    gradient: 'from-purple-500 to-purple-700',
    iconBg: 'bg-purple-500/15 border-purple-500/25',
    iconColor: 'text-purple-400',
    delay: 0.08,
  },
  {
    icon: FlaskConical,
    title: 'Hands-on Labs',
    description: 'Practice SQL queries and cloud services in real sandboxed environments — no setup required.',
    gradient: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25',
    iconColor: 'text-cyan-400',
    delay: 0.16,
  },
  {
    icon: Users,
    title: 'Batch Based Learning',
    description: 'Students get curated content aligned to their batch and learning track with guided progression.',
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-500/15 border-violet-500/25',
    iconColor: 'text-violet-400',
    delay: 0.24,
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track progress, quiz scores, and learning insights with beautiful, real-time dashboards.',
    gradient: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-500/15 border-blue-500/25',
    iconColor: 'text-blue-400',
    delay: 0.32,
  },
  {
    icon: Shield,
    title: 'Secure Learning Platform',
    description: 'Protected videos, notes, and course materials with enterprise-grade DRM and access control.',
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/15 border-emerald-500/25',
    iconColor: 'text-emerald-400',
    delay: 0.40,
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="relative py-28" style={{ background: '#060610' }}>
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Everything you need
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-5">
            Built for real{' '}
            <span className="gradient-text">learning outcomes</span>
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            A comprehensive ecosystem for students, teachers, and institutes — from first lecture to final certification.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: f.delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-6 border-glow bg-white/[0.02] overflow-hidden cursor-default"
            >
              {/* Hover gradient shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 0% 0%, rgba(${i < 2 ? '99,102,241' : i < 4 ? '139,92,246' : '6,182,212'},0.06) 0%, transparent 60%)` }} />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border ${f.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <f.icon size={20} className={f.iconColor} />
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-white mb-2 heading-xl">{f.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{f.description}</p>

              {/* Bottom subtle gradient line on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${f.gradient}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
