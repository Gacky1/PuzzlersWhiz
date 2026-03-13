import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rachit Avasthi',
    role: 'Student · Cloud Computing',
    initials: 'RA',
    rating: 5,
    text: 'This platform makes learning cloud technologies simple and practical. The hands-on labs are exactly what I needed to land my first internship at a top tech company.',
    color: 'from-indigo-500 to-violet-600',
    accent: '#6366f1',
  },
  {
    name: 'Priya Nair',
    role: 'Student · Database Management',
    initials: 'PN',
    rating: 5,
    text: 'The structured quizzes helped me identify weak spots and improve systematically. I went from a 60% average to 90% in just four weeks. Absolutely love PuzzlersWhiz!',
    color: 'from-purple-500 to-pink-600',
    accent: '#a855f7',
  },
  {
    name: 'Rahul Verma',
    role: 'Teacher · AWS & DevOps',
    initials: 'RV',
    rating: 5,
    text: "As a teacher, I can upload lectures and create quizzes with incredible ease. The student analytics let me pinpoint exactly who needs help — it's transformed my teaching.",
    color: 'from-cyan-500 to-blue-600',
    accent: '#06b6d4',
  },
  {
    name: 'Meena Iyer',
    role: 'Director · TechLearn Mumbai',
    initials: 'MI',
    rating: 5,
    text: 'We manage 15 batches across 3 departments on PuzzlersWhiz. The admin panel is powerful, reporting is detailed, and our student satisfaction scores are at an all-time high.',
    color: 'from-blue-500 to-indigo-600',
    accent: '#3b82f6',
  },
  {
    name: 'Karthik Reddy',
    role: 'Student · Full Stack + Cloud',
    initials: 'KR',
    rating: 5,
    text: 'The lab environment is next level. I practiced real SQL and AWS commands without any setup. By the time I sat for interviews, I felt like a pro. PuzzlersWhiz is a game changer.',
    color: 'from-emerald-500 to-teal-600',
    accent: '#10b981',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="relative py-28" style={{ background: '#060610' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.2), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 60%)' }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 text-xs font-medium text-amber-300 mb-6">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            Loved by learners
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-4">
            What our{' '}
            <span className="gradient-text">community says</span>
          </h2>
          <p className="text-[17px] text-slate-500">
            Join thousands of students, teachers, and institutes who trust PuzzlersWhiz.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.div
                  key={`${t.name}-${current}`}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className={`relative rounded-2xl p-6 bg-white/[0.025] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 overflow-hidden ${i === 2 ? 'hidden lg:block' : ''}`}
                >
                  {/* Glow */}
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ background: t.accent }} />

                  <Quote size={24} className="text-white/[0.08] mb-4" />

                  <p className="text-[13px] text-slate-400 leading-[1.75] mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-white heading-xl truncate">{t.name}</p>
                      <p className="text-[11px] text-slate-600 truncate">{t.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button id="testimonials-prev" onClick={prev}
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/[0.14] hover:bg-white/[0.07] transition-all duration-200">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-1.5 bg-indigo-400' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <button id="testimonials-next" onClick={next}
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/[0.14] hover:bg-white/[0.07] transition-all duration-200">
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
