import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HelpCircle, ArrowRight } from 'lucide-react'

export default function GuidanceCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 mb-24 mt-12 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-8 sm:p-10 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(30,27,75,0.4) 0%, rgba(17,24,39,0.4) 100%)',
          boxShadow: 'inset 0 0 40px rgba(99,102,241,0.05)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-[50px]"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-20 blur-[50px]"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }} />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 z-10">
          <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <HelpCircle size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Looks confused? Need guidance?</h3>
            <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed">
              Not sure which course is right for you or have questions about our curriculum? Drop us a message and our career experts will help you out.
            </p>
          </div>
        </div>

        <Link 
          to="/contact" 
          className="z-10 flex-shrink-0 group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white btn-gradient shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 whitespace-nowrap transition-all duration-300"
        >
          Enquire Now
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  )
}
