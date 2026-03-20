import { useState } from 'react'
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
  { name: 'Dani', role: 'Co-Founder & CEO', image: 'https://media.licdn.com/dms/image/v2/D5603AQFn02T1tqzw1Q/profile-displayphoto-crop_800_800/B56ZvRSg70KwAI-/0/1768742852449?e=1775692800&v=beta&t=bO7OEF54q50YI1Sza-_ucQ96wMdwOh5Z7hOSob_-ad0' },
  { name: 'Rachit Avasthi', role: 'Co-Founder & CTO', image: 'https://rachitavasthi.com/card3.png' },
  { name: 'Neelanchal', role: 'Co-Founder & CPO', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sugumar', role: 'Co-Founder & CMO', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80' },
  // { name: 'Karan Singh', role: 'Lead Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
  // { name: 'Ananya Joshi', role: 'Growth & Marketing', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=800&q=80' },
]

export default function AboutUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)
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

        {/* Team Section (Dynamic Expansion Layout) */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white text-center heading-xl mb-4">Meet the team</h2>
            <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">Hover or tap on our team members to reveal their profile.</p>
            
            <div className="flex flex-col md:flex-row h-[700px] md:h-[600px] w-full gap-3 sm:gap-4">
              {team.map((member, i) => {
                const isHovered = hoveredIndex === null ? i === 0 : hoveredIndex === i;
                
                return (
                  <motion.div
                    key={member.name}
                    onHoverStart={() => setHoveredIndex(i)}
                    className={`relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden cursor-pointer flex-1 group shadow-[0_0_20px_rgba(0,0,0,0.4)] ${isHovered ? 'md:flex-[4]' : 'md:flex-1'}`}
                    animate={{ flex: isHovered ? 4 : 1 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    style={{ minWidth: '80px', minHeight: '80px' }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-105 filter-none grayscale-0' : 'scale-100 grayscale hover:grayscale-0'}`}
                    />
                    
                    {/* Shadow overlay for text readability */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${isHovered ? 'from-[#060610]/95 via-[#060610]/20 to-transparent opacity-100' : 'from-[#060610]/60 via-[#060610]/10 to-transparent opacity-80 group-hover:opacity-100'}`} 
                    />
                    
                    {/* Active State Details */}
                    <motion.div 
                      className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col justify-end"
                    >
                      <motion.div 
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: isHovered ? 0.3 : 0 }}
                        className={`overflow-hidden whitespace-nowrap ${!isHovered && 'hidden md:block md:invisible'}`}
                      >
                        <h3 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight drop-shadow-lg">{member.name}</h3>
                        <div className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-indigo-300 text-sm sm:text-base font-medium shadow-xl">
                          {member.role}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Inactive Vertical Title (Desktop Only) */}
                    <motion.div
                      animate={{ opacity: !isHovered ? 1 : 0 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center p-2"
                      style={{ pointerEvents: isHovered ? 'none' : 'auto' }}
                    >
                      <p className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs -rotate-90 origin-bottom whitespace-nowrap drop-shadow-md">
                        {member.name.split(' ')[0]}
                      </p>
                    </motion.div>
                    
                    {/* Inactive Title (Mobile Only) */}
                    <motion.div
                      animate={{ opacity: !isHovered ? 1 : 0 }}
                      className="absolute inset-0 flex items-center justify-center md:hidden"
                      style={{ pointerEvents: isHovered ? 'none' : 'auto' }}
                    >
                      <h3 className="text-xl font-bold text-white tracking-wide shadow-black drop-shadow-xl">{member.name.split(' ')[0]}</h3>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
