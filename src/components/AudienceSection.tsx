import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpenCheck, Building2, ArrowRight, CheckCircle } from 'lucide-react'

const audiences = [
  {
    icon: GraduationCap,
    role: 'Students',
    tagline: 'Learn at your pace,\nmaster at scale.',
    description: 'Access structured courses, interactive quizzes, and real practice labs. Track progress and compete on your batch leaderboard.',
    benefits: [
      'Batch-based structured learning paths',
      'Hands-on SQL & cloud lab environments',
      'Timed quizzes with instant feedback',
      'Personal analytics dashboard',
      'Downloadable notes and resources',
    ],
    accentColor: '#6366f1',
    gradientFrom: 'rgba(99,102,241,0.15)',
    borderHover: '#6366f1',
    badge: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-300',
    iconBg: 'from-indigo-500 to-indigo-700',
    delay: 0,
  },
  {
    icon: BookOpenCheck,
    role: 'Teachers',
    tagline: 'Create. Teach.\nInspire.',
    description: 'Upload lectures, notes, and quizzes with ease. Monitor student performance in real-time and provide targeted feedback.',
    benefits: [
      'Upload HD lectures & structured notes',
      'Create and schedule timed quizzes',
      'Monitor student performance live',
      'Manage batch enrollment & access',
      'Announcements and chat tools',
    ],
    accentColor: '#8b5cf6',
    gradientFrom: 'rgba(139,92,246,0.15)',
    borderHover: '#8b5cf6',
    badge: 'bg-purple-500/15 border-purple-500/25 text-purple-300',
    iconBg: 'from-purple-500 to-violet-700',
    delay: 0.15,
  },
  {
    icon: Building2,
    role: 'Institutes',
    tagline: 'Manage. Scale.\nExcel.',
    description: 'Create and manage multiple batches, oversee all teachers and students, and deliver courses at scale with powerful admin tools.',
    benefits: [
      'Manage multiple batches & courses',
      'Comprehensive admin analytics panel',
      'Institute-wide performance reports',
      'Role-based access for staff',
      'Branded learning environment',
    ],
    accentColor: '#06b6d4',
    gradientFrom: 'rgba(6,182,212,0.12)',
    borderHover: '#06b6d4',
    badge: 'bg-cyan-500/15 border-cyan-500/25 text-cyan-300',
    iconBg: 'from-cyan-500 to-blue-600',
    delay: 0.3,
  },
]

export default function AudienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="audience" className="relative py-28"
      style={{ background: 'linear-gradient(180deg, #070712 0%, #060610 100%)' }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)' }} />

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%)' }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-xs font-medium text-violet-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Built for everyone
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-5">
            The entire{' '}
            <span className="gradient-text">education ecosystem</span>
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            Whether you're a student, teacher, or institute — PuzzlersWhiz has purpose-built tools for your role.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {audiences.map((aud) => (
            <motion.div
              key={aud.role}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: aud.delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group relative rounded-2xl p-7 bg-white/[0.025] overflow-hidden cursor-default"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${aud.accentColor}44`
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${aud.accentColor}18, 0 20px 60px rgba(0,0,0,0.4)`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              {/* BG glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 0% 0%, ${aud.gradientFrom} 0%, transparent 60%)` }} />

              {/* Role badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-semibold mb-6 ${aud.badge}`}>
                <aud.icon size={12} />
                For {aud.role}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${aud.iconBg} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                style={{ boxShadow: `0 8px 24px ${aud.gradientFrom}` }}>
                <aud.icon size={22} />
              </div>

              <h3 className="text-2xl font-black text-white heading-xl mb-1">{aud.role}</h3>
              <p className="text-[13px] font-medium mb-3" style={{ color: aud.accentColor }}>
                {aud.tagline.replace('\n', ' ')}
              </p>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-6">{aud.description}</p>

              {/* Benefits */}
              <ul className="space-y-2 mb-7">
                {aud.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-slate-500">
                    <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: aud.accentColor }} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA arrow */}
              <a href="#cta" className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 group/link"
                style={{ color: aud.accentColor }}>
                Get Started
                <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${aud.accentColor}88, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
