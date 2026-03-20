import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useSEO } from '../hooks/useSEO'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@puzzlerswhiz.com', href: 'mailto:hello@puzzlerswhiz.com' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Address', value: 'Mumbai, Maharashtra, India', href: '#' },
]

export default function Contact() {
  useSEO({
    title: 'Contact Us – PuzzlersWhiz',
    description: 'Get in touch with the PuzzlersWhiz team. Send us a message, reach us by email or phone, or visit us in Mumbai, India.',
    canonical: 'https://puzzlerswhiz.com/contact',
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Course Inquiry',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submitData = new FormData()
    submitData.append("access_key", "e3cc6dc4-f2cf-4471-b18a-974ac819dbe2")
    submitData.append("subject", `New Inquiry: ${formData.topic}`)
    submitData.append("Name", formData.name)
    submitData.append("Email", formData.email)
    submitData.append("Phone Number", formData.phone)
    submitData.append("Topic", formData.topic)
    submitData.append("Message", formData.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      })
      const data = await response.json()
      if (data.success) {
        setSent(true)
      } else {
        alert("Submission failed. Please try again.")
      }
    } catch (error) {
      alert("Error submitting form. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[12px] text-slate-400 font-medium mb-2 uppercase tracking-wider">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[12px] text-slate-400 font-medium mb-2 uppercase tracking-wider">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-[12px] text-slate-400 font-medium mb-2 uppercase tracking-wider">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="topic" className="block text-[12px] text-slate-400 font-medium mb-2 uppercase tracking-wider">Inquiry Topic</label>
                      <div className="relative">
                        <select
                          id="topic"
                          required
                          value={formData.topic}
                          onChange={(e) => setFormData({...formData, topic: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-[#121220] border border-white/[0.08] text-white text-sm appearance-none focus:outline-none focus:border-indigo-500/50 focus:bg-[#1a1a2e] transition-all duration-200 cursor-pointer"
                        >
                          <option value="Course Inquiry">Course Inquiry</option>
                          <option value="Career Guidance">Career Guidance</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Payment Issue">Payment Issue</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[12px] text-slate-400 font-medium mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us how we can help..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 ${
                      isSubmitting 
                        ? 'bg-slate-700 cursor-not-allowed opacity-80' 
                        : 'btn-gradient shimmer-effect hover:opacity-90 shadow-lg shadow-indigo-500/20'
                    }`}
                  >
                    {!isSubmitting && <Send size={15} />}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
