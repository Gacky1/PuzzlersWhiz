import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GuidanceCTA from '../components/GuidanceCTA'
import { useSEO } from '../hooks/useSEO'

const faqs = [
  {
    question: "Do I need prior coding experience to join these courses?",
    answer: "Our courses are designed to take you from fundamentals to advanced concepts. While prior experience is helpful for Big Data and AI/ML, our GCP course is very beginner-friendly. All courses start with essential foundations."
  },
  {
    question: "Are the certifications included in the course fee?",
    answer: "No, official vendor certifications (like Google Cloud Certification) require separate exams booked with the provider. However, our courses provide comprehensive preparation and practice exams to guarantee you pass."
  },
  {
    question: "Do you offer placement assistance?",
    answer: "Yes! Completing our premium courses gives you access to our career services, which include resume reviews, interview preparation, and direct referrals to our hiring partners."
  },
  {
    question: "How long do I have access to the course content?",
    answer: "You get lifetime access to the video lectures and course materials. The interactive hands-on cloud labs are accessible for 12 months from the date of purchase."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee. If you realize the course isn't a good fit within the first week of purchase, you can request a full refund, no questions asked."
  },
  {
    question: "Can I upgrade my course later?",
    answer: "Absolutely. If you start with individual modules, you can later upgrade to full bundle packages. Reach out to our support team and we will subtract the amount you've already paid."
  }
]

export default function FAQ() {
  useSEO({
    title: 'FAQ – PuzzlersWhiz',
    description: 'Find answers to frequently asked questions about PuzzlersWhiz courses, certifications, placement assistance, and more.',
    canonical: 'https://puzzlerswhiz.com/faq',
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen text-slate-300 font-sans" style={{ background: '#060610' }}>
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
            <MessageCircle size={14} className="text-indigo-400" />
            Support Center
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Questions</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Everything you need to know about the product, courses, and billing. Can't find the answer you're looking for? Reach out to our team.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'bg-white/[0.04] border-indigo-500/30 shadow-[0_4px_20px_rgba(99,102,241,0.1)]' : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.03]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-white/[0.05] ${isOpen ? 'bg-indigo-500/20 text-indigo-400' : 'text-slate-400'}`}>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/[0.05] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </main>

      <GuidanceCTA />
      <Footer />
    </div>
  )
}
