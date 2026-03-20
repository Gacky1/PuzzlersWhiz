import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const cookieTypes = [
  {
    name: 'Strictly Necessary',
    purpose: 'Required for the platform to function. Includes session management, security tokens, and login state.',
    duration: 'Session / 1 year',
    canDisable: 'No',
  },
  {
    name: 'Performance & Analytics',
    purpose: 'Helps us understand how users interact with the platform so we can improve it. Includes page views and feature usage.',
    duration: '2 years',
    canDisable: 'Yes',
  },
  {
    name: 'Functional',
    purpose: 'Remembers your preferences such as language, theme, and video playback settings.',
    duration: '1 year',
    canDisable: 'Yes',
  },
  {
    name: 'Marketing',
    purpose: 'Used to deliver relevant advertisements and track the effectiveness of our campaigns.',
    duration: '90 days',
    canDisable: 'Yes',
  },
]

const sections = [
  {
    title: 'What Are Cookies?',
    content: `Cookies are small text files stored on your device when you visit a website. They allow the website to remember your actions and preferences over time, so you don't have to re-enter information every time you return or navigate between pages.`,
  },
  {
    title: 'How We Use Cookies',
    content: `PuzzlersWhiz uses cookies to keep you logged in, remember your preferences, analyse how you use the platform, and deliver relevant content. We use both session cookies (deleted when you close your browser) and persistent cookies (which remain on your device for a set period).`,
  },
  {
    title: 'Third-Party Cookies',
    content: `Some cookies on our platform are set by trusted third-party services such as analytics providers (e.g., Google Analytics) and payment processors. These third parties have their own privacy policies, which we encourage you to review.`,
  },
  {
    title: 'Managing Cookies',
    content: `You can control and/or delete cookies at any time through your browser settings. Deleting cookies means that any preferences you have set on our website will need to be set again. Most browsers allow you to block all cookies or only third-party cookies. Note that disabling strictly necessary cookies will affect the functionality of the platform.`,
  },
  {
    title: 'Updates to This Policy',
    content: `We may update this Cookie Policy periodically to reflect changes in technology or our use of cookies. We will notify you of material changes through the platform or via email.`,
  },
]

export default function CookiePolicy() {
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
              <h1 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-4">Cookie Policy</h1>
              <p className="text-slate-500 text-sm mb-2">Last updated: March 20, 2026</p>
              <p className="text-slate-400 leading-relaxed mt-6 mb-12">
                This Cookie Policy explains how PuzzlersWhiz uses cookies and similar tracking technologies on our platform.
              </p>

              {/* Cookie Table */}
              <div className="mb-12">
                <h2 className="text-lg font-bold text-white heading-xl mb-5">Types of Cookies We Use</h2>
                <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                        <th className="text-left px-5 py-3.5 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Type</th>
                        <th className="text-left px-5 py-3.5 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Purpose</th>
                        <th className="text-left px-5 py-3.5 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Duration</th>
                        <th className="text-left px-5 py-3.5 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Opt-Out</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieTypes.map((row, i) => (
                        <tr key={row.name} className={`border-b border-white/[0.04] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                          <td className="px-5 py-4 text-white font-medium text-[13px] whitespace-nowrap">{row.name}</td>
                          <td className="px-5 py-4 text-slate-500 text-[13px] leading-relaxed">{row.purpose}</td>
                          <td className="px-5 py-4 text-slate-500 text-[13px] whitespace-nowrap">{row.duration}</td>
                          <td className="px-5 py-4">
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${row.canDisable === 'Yes' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                              {row.canDisable}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
