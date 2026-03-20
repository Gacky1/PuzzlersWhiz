import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@puzzlerswhiz.com', href: 'mailto:hello@puzzlerswhiz.com' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Address', value: 'Mumbai, Maharashtra, India', href: '#' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen" style={{ background: '#060610' }}>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 text-center px-4">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)' }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
              <MessageSquare size={12} />
              Get in touch
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white heading-xl mb-5">
              We'd love to <span className="gradient-text">hear from you</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Have a question, feedback, or partnership idea? Drop us a message and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-black text-white heading-xl mb-2">Contact Information</h2>
                <p className="text-slate-500 text-sm leading-relaxed">Reach out through any of the channels below.</p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:bg-indigo-600/30 transition-all">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-600 uppercase tracking-widest">{item.label}</p>
                      <p className="text-white text-[14px] font-medium mt-0.5">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center rounded-2xl border border-indigo-500/25 bg-indigo-500/5 p-10">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-white font-bold text-xl heading-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-[12px] text-slate-400 font-medium mb-2 uppercase tracking-wider">{field.label}</label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-[12px] text-slate-400 font-medium mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white btn-gradient shimmer-effect transition-all duration-200 hover:opacity-90"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
