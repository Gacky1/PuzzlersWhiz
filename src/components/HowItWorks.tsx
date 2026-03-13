import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserPlus, PlayCircle, Trophy } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Join a Batch',
    description: 'Enroll in a batch assigned by your institute or teacher and get instant access to curated learning content tailored to your track.',
    color: '#6366f1',
    gradientLine: 'from-indigo-500 to-purple-500',
    glow: 'rgba(99,102,241,0.2)',
    delay: 0,
  },
  {
    num: '02',
    icon: PlayCircle,
    title: 'Learn & Practice',
    description: 'Watch HD lectures, read structured notes, and get hands-on experience in interactive SQL and cloud labs designed to build real skills.',
    color: '#8b5cf6',
    gradientLine: 'from-purple-500 to-cyan-500',
    glow: 'rgba(139,92,246,0.2)',
    delay: 0.18,
  },
  {
    num: '03',
    icon: Trophy,
    title: 'Test & Track',
    description: 'Take timed quizzes to validate your knowledge, see detailed analytics, and monitor your learning growth over time on a personal dashboard.',
    color: '#06b6d4',
    gradientLine: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.2)',
    delay: 0.36,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="howitworks" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #070712 0%, #060610 100%)' }}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)' }} />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full opacity-10 float-2"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 60%)' }} />
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full opacity-8 float-3"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 60%)' }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 text-xs font-medium text-purple-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Simple process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-5">
            Start learning in{' '}
            <span className="gradient-text">three steps</span>
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            A structured approach that ensures you build real skills industry professionals use every day.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6 lg:gap-10">
          {/* Animated connecting line — desktop */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 origin-left"
            />
            {/* Animated traveling dot */}
            {inView && (
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 2.4, delay: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_2px_rgba(99,102,241,0.8)]"
              />
            )}
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: step.delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative z-10 rounded-2xl p-7 border-glow bg-white/[0.025] overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 0% 0%, ${step.glow} 0%, transparent 60%)` }} />

              {/* Icon + Number badge */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${step.color}cc, ${step.color})`, boxShadow: `0 6px 24px ${step.glow}` }}
                >
                  <step.icon size={22} />
                </div>
                <span className="text-5xl font-black heading-xl select-none"
                  style={{ color: 'rgba(255,255,255,0.04)', WebkitTextStroke: '1px rgba(255,255,255,0.07)' }}>
                  {step.num}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white heading-xl mb-3">{step.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{step.description}</p>

              {/* Bottom gradient accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${step.gradientLine}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
