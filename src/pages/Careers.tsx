import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const openRoles = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Remote / Mumbai', type: 'Full-time' },
  { title: 'Product Designer (UI/UX)', dept: 'Design', location: 'Remote', type: 'Full-time' },
  { title: 'Content & Curriculum Lead', dept: 'Education', location: 'Mumbai', type: 'Full-time' },
  { title: 'Growth Marketing Manager', dept: 'Marketing', location: 'Remote / Mumbai', type: 'Full-time' },
  { title: 'Customer Success Manager', dept: 'Operations', location: 'Mumbai', type: 'Full-time' },
]

const perks = [
  { emoji: '🌍', title: 'Remote-friendly', desc: 'Work from anywhere in India, or from our Mumbai office.' },
  { emoji: '📈', title: 'Equity', desc: 'ESOPs for all full-time employees — we win together.' },
  { emoji: '🎓', title: 'Learning Budget', desc: '₹30,000/year for courses, books, and conferences.' },
  { emoji: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical coverage for you and your family.' },
  { emoji: '🕓', title: 'Flexible Hours', desc: 'Results matter more to us than when you work.' },
  { emoji: '🎉', title: 'Team Offsites', desc: 'Quarterly team retreats and monthly team dinners.' },
]

export default function Careers() {
  useSEO({
    title: 'Careers – PuzzlersWhiz',
    description: 'Join the PuzzlersWhiz team! Explore open roles in engineering, design, education, and marketing. We\'re building the future of EdTech in India.',
    canonical: 'https://puzzlerswhiz.com/careers',
  })
  return (
    <div className="min-h-screen" style={{ background: '#060610' }}>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 text-center px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)' }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
              <Briefcase size={12} />
              We're hiring
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white heading-xl mb-5">
              Join the <span className="gradient-text">PuzzlersWhiz</span> team
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Help us build the future of education in India. We're looking for passionate people who want their work to matter.
            </p>
          </motion.div>
        </section>

        {/* Open Roles */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-white heading-xl mb-8">Open Positions</h2>
            <div className="space-y-3">
              {openRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group flex items-center justify-between p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-200 cursor-pointer"
                >
                  <div>
                    <h3 className="text-white font-semibold text-[15px] group-hover:text-indigo-300 transition-colors">{role.title}</h3>
                    <div className="flex items-center gap-4 mt-1.5">
                      <span className="text-[11px] text-indigo-400 font-medium">{role.dept}</span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-600">
                        <MapPin size={10} />{role.location}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Clock size={10} />{role.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@puzzlerswhiz.com?subject=Application for ${role.title}`}
                    className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-white rounded-xl btn-gradient opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 ml-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Apply <ArrowRight size={12} />
                  </a>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-slate-600 text-sm mt-8">
              Don't see a role that fits? Email us at{' '}
              <a href="mailto:careers@puzzlerswhiz.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                careers@puzzlerswhiz.com
              </a>
            </p>
          </div>
        </section>

        {/* Perks */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-white text-center heading-xl mb-12">Why work here?</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="text-2xl mb-3">{perk.emoji}</div>
                  <h3 className="text-white font-bold mb-1.5 heading-xl text-[15px]">{perk.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
