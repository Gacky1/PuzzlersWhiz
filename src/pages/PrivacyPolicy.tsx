import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you create an account, enroll in courses, or contact support. This includes your name, email address, phone number, and payment details. We also automatically collect usage data such as pages visited, features used, and time spent on the platform, as well as device and browser information through cookies and similar technologies.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to: provide, maintain, and improve our services; process transactions and send related information; send administrative information such as account confirmations and updates; respond to your comments and questions; monitor and analyse usage patterns to improve the platform; detect and prevent fraudulent transactions and other illegal activities; and comply with legal obligations.`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following cases: with service providers who assist us in operating our platform (bound by confidentiality agreements); when required by law or to protect our rights; in connection with a merger, acquisition, or sale of assets (with prior notice); or with your explicit consent.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures including SSL/TLS encryption for data in transit, AES-256 encryption for data at rest, regular security audits, and strict access controls. While we take all reasonable precautions, no method of transmission over the internet is 100% secure. We encourage you to use strong, unique passwords and to contact us immediately if you suspect any unauthorised access.`,
  },
  {
    title: '5. Cookies & Tracking Technologies',
    content: `We use cookies and similar technologies to maintain your session, remember your preferences, and analyse how our platform is used. You can control cookie settings through your browser. For full details, please review our Cookie Policy. Disabling certain cookies may limit your ability to use some features of the platform.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us at hello@puzzlerswhiz.com. We will respond to such requests within 30 days, subject to legal retention obligations.`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `Our platform is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected information from a child under 13 without parental consent, we will promptly delete it. Parents or guardians who believe their child has provided us with personal information may contact us at hello@puzzlerswhiz.com.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a prominent notice on our website. Your continued use of the platform after changes take effect constitutes your acceptance of the revised policy. We encourage you to review this policy periodically.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer at hello@puzzlerswhiz.com or write to us at PuzzlersWhiz, Mumbai, Maharashtra, India.`,
  },
]

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy – PuzzlersWhiz',
    description: 'Learn how PuzzlersWhiz handles your data. Read our Privacy Policy to understand what information we collect and how we use it to provide educational services.',
    canonical: 'https://puzzlerswhiz.com/privacy-policy',
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
              <h1 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-4">Privacy Policy</h1>
              <p className="text-slate-500 text-sm mb-2">Last updated: March 20, 2026</p>
              <p className="text-slate-400 leading-relaxed mt-6 mb-12">
                At PuzzlersWhiz, your privacy is important to us. This policy explains what data we collect, how we use it, and the choices available to you.
              </p>
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
