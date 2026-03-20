import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using PuzzlersWhiz ("the Platform"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use the Platform. These terms apply to all users, including students, teachers, institute administrators, and visitors.`,
  },
  {
    title: '2. Account Registration',
    content: `To access most features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account. You must notify us immediately of any unauthorised use of your account.`,
  },
  {
    title: '3. Permitted Use',
    content: `You may use the Platform solely for lawful, educational purposes in accordance with these Terms. You agree not to: reproduce, distribute, or create derivative works from our content without authorisation; use the Platform to transmit spam or harmful content; attempt to gain unauthorised access to any part of the Platform; use automated tools to scrape or extract Platform data; or impersonate any person or entity.`,
  },
  {
    title: '4. Intellectual Property',
    content: `All content on the Platform, including course materials, videos, text, graphics, logos, and software, is the exclusive property of PuzzlersWhiz or its content suppliers and is protected by Indian and international intellectual property laws. Your subscription grants you a limited, non-exclusive, non-transferable licence to access and use the content for personal educational purposes only.`,
  },
  {
    title: '5. Payment Terms',
    content: `Certain features of the Platform are available only with a paid subscription. All fees are quoted in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. Payments are processed securely through our payment partners. Subscription fees are billed in advance and are non-refundable except as outlined in our Refund Policy.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    content: `The Platform is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components. Your use of the Platform is at your sole risk.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, PuzzlersWhiz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of the Platform, even if we have been advised of the possibility of such damages.`,
  },
  {
    title: '8. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.`,
  },
  {
    title: '9. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or a prominent notice on the Platform. Your continued use of the Platform after changes take effect constitutes acceptance of the revised Terms.`,
  },
  {
    title: '10. Contact',
    content: `For questions about these Terms of Service, please contact us at legal@puzzlerswhiz.com.`,
  },
]

export default function TermsOfService() {
  useSEO({
    title: 'Terms of Service – PuzzlersWhiz',
    description: 'Read the Terms of Service for PuzzlersWhiz. These terms govern your use of our platform, courses, and educational materials.',
    canonical: 'https://puzzlerswhiz.com/terms-of-service',
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
              <h1 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-4">Terms of Service</h1>
              <p className="text-slate-500 text-sm mb-2">Last updated: March 20, 2026</p>
              <p className="text-slate-400 leading-relaxed mt-6 mb-12">
                Please read these Terms of Service carefully before using the PuzzlersWhiz platform. By using the platform you agree to be bound by these terms.
              </p>
              <div className="space-y-10">
                {sections.map((section, i) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
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
