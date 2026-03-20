import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const values = [
  { emoji: '🎯', title: 'Mission-Driven', desc: 'Every feature we build is driven by one question: does this help a student learn better?' },
  { emoji: '🔬', title: 'Research-Backed', desc: 'Our curriculum and assessment methods are grounded in proven pedagogical research.' },
  { emoji: '🤝', title: 'Community First', desc: 'We believe great learning happens together — not in isolation.' },
  { emoji: '🚀', title: 'Always Improving', desc: 'We ship fast, learn from feedback, and iterate relentlessly.' },
]

const team = [
  { name: 'Aryan Mehta', role: 'Co-Founder & CEO', emoji: '👨‍💼' },
  { name: 'Priya Sharma', role: 'Co-Founder & CTO', emoji: '👩‍💻' },
  { name: 'Rohan Gupta', role: 'Head of Product', emoji: '👨‍🎨' },
  { name: 'Sneha Patel', role: 'Head of Curriculum', emoji: '👩‍🏫' },
  { name: 'Karan Singh', role: 'Lead Engineer', emoji: '👨‍🔧' },
  { name: 'Ananya Joshi', role: 'Growth & Marketing', emoji: '👩‍📊' },
]

export default function AboutUs() {
  useSEO({
    title: 'About Us – PuzzlersWhiz',
    description: 'Learn about PuzzlersWhiz — our mission to democratise quality education in India, the team behind the platform, and the values that drive us.',
    canonical: 'https://puzzlerswhiz.com/about',
  })
  return (
    <div className="min-h-screen" style={{ background: '#060610' }}>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden text-center px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)' }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Our story
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white heading-xl mb-6">
              Built for{' '}
              <span className="gradient-text">real learners</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              PuzzlersWhiz was born out of frustration with traditional education — slow, siloed, and disconnected from what the industry actually needs. We set out to fix that.
            </p>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 md:p-16 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed heading-xl">
                "We believe every student deserves access to world-class learning tools — regardless of where they come from or which institute they attend."
              </p>
              <p className="mt-6 text-slate-500 text-sm">— The PuzzlersWhiz Team</p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-white text-center heading-xl mb-14">What we stand for</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-7 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{v.emoji}</div>
                  <h3 className="text-white font-bold heading-xl mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-white text-center heading-xl mb-14">Meet the team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex items-center gap-4 hover:border-indigo-500/25 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {member.emoji}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[15px]">{member.name}</p>
                    <p className="text-slate-500 text-[12px] mt-0.5">{member.role}</p>
                  </div>
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
