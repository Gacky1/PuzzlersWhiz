import { motion } from 'framer-motion'
import { IndianRupee, Clock, CheckCircle, XCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const eligibility = [
  { icon: CheckCircle, color: 'text-green-400', text: 'Refund requested within 7 days of payment' },
  { icon: CheckCircle, color: 'text-green-400', text: 'Less than 20% of course content consumed' },
  { icon: CheckCircle, color: 'text-green-400', text: 'Technical issue preventing access that our team could not resolve within 72 hours' },
  { icon: XCircle, color: 'text-red-400', text: 'Refund requested after 7 days of purchase' },
  { icon: XCircle, color: 'text-red-400', text: 'More than 20% of course or batch content consumed' },
  { icon: XCircle, color: 'text-red-400', text: 'Account suspended due to violation of Terms of Service' },
  { icon: XCircle, color: 'text-red-400', text: 'Subscription renewed (auto-renewal cancellation must be done before renewal date)' },
]

const steps = [
  { step: '01', title: 'Submit a Request', desc: 'Email refunds@puzzlerswhiz.com with your registered email, order ID, and reason for refund.' },
  { step: '02', title: 'Review Period', desc: 'Our team will review your request within 3 business days and may reach out for additional information.' },
  { step: '03', title: 'Decision Notification', desc: 'You will receive an email with the outcome of your refund request.' },
  { step: '04', title: 'Refund Processing', desc: 'If approved, the refund will be credited to your original payment method within 5–10 business days.' },
]

const sections = [
  {
    title: 'Partial Refunds',
    content: `In cases where a full refund is not applicable, we may offer a partial refund or platform credits at our discretion, based on the proportion of the service consumed and the specific circumstances of the request.`,
  },
  {
    title: 'Institute & Batch Plans',
    content: `Refund requests for institute-level or batch-level subscriptions must be submitted by the authorised administrator of the institute. Individual students enrolled under an institute plan are not eligible to independently request refunds; refunds are handled at the institute level.`,
  },
  {
    title: 'Promotional & Discounted Purchases',
    content: `Purchases made through special promotions, discount codes, or bundled offers may be subject to modified refund terms as specified at the time of purchase. Please review the promotional terms carefully before purchasing.`,
  },
  {
    title: 'Changes to This Policy',
    content: `PuzzlersWhiz reserves the right to modify this Refund Policy at any time. Updates will be posted on this page with a revised "last updated" date. Continued use of the platform after changes constitutes acceptance of the revised policy.`,
  },
]

export default function RefundPolicy() {
  useSEO({
    title: 'Refund Policy – PuzzlersWhiz',
    description: 'Read our Refund Policy. Learn about your eligibility for refunds, partial refunds, and our 7-day money-back process.',
    canonical: 'https://puzzlerswhiz.com/refund-policy',
  })
  return (
    <div className="min-h-screen" style={{ background: '#060610' }}>
      <Navbar />
      <main className="pt-24">
        <section className="relative py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Legal
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-4">Refund Policy</h1>
              <p className="text-slate-500 text-sm mb-2">Last updated: March 20, 2026</p>
              <p className="text-slate-400 leading-relaxed mt-6 mb-12">
                We want you to be completely satisfied with PuzzlersWhiz. If you're not happy, here's how our refund process works.
              </p>

              {/* Key info chips */}
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { icon: Clock, label: '7-day refund window' },
                  { icon: IndianRupee, label: 'Original payment method' },
                  { icon: CheckCircle, label: '5–10 business days processing' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] text-sm text-slate-400">
                    <item.icon size={14} className="text-indigo-400" />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="text-lg font-bold text-white heading-xl mb-5">Refund Eligibility</h2>
                <div className="space-y-3">
                  {eligibility.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                    >
                      <item.icon size={16} className={`${item.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-400 text-[14px] leading-relaxed">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-lg font-bold text-white heading-xl mb-6">How to Request a Refund</h2>
                <div className="space-y-4">
                  {steps.map((s, i) => (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-5 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                    >
                      <span className="text-3xl font-black heading-xl flex-shrink-0"
                        style={{ color: 'rgba(255,255,255,0.06)', WebkitTextStroke: '1px rgba(99,102,241,0.4)' }}>
                        {s.step}
                      </span>
                      <div>
                        <h3 className="text-white font-semibold text-[15px] mb-1">{s.title}</h3>
                        <p className="text-slate-500 text-[13px] leading-relaxed">{s.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                {sections.map((section, i) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <h2 className="text-lg font-bold text-white heading-xl mb-3">{section.title}</h2>
                    <p className="text-slate-500 leading-relaxed text-[15px]">{section.content}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-center">
                <p className="text-slate-400 text-[14px]">
                  Have a question about a refund?{' '}
                  <a href="mailto:refunds@puzzlerswhiz.com" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                    refunds@puzzlerswhiz.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
