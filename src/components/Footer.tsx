import { motion } from 'framer-motion'
import { Zap, Twitter, Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Platform: ['Features', 'How It Works', 'Platform Preview', 'Pricing'],
  Learn: ['Courses', 'Labs', 'Quizzes', 'Analytics'],
  Company: ['About Us', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
}

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Github, label: 'GitHub' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative" style={{ background: '#04040e' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-xl animated-gradient flex items-center justify-center transition-transform group-hover:scale-110">
                <Zap size={15} className="text-white" />
              </div>
              <span className="text-[15px] font-bold text-white heading-xl">PuzzlersWhiz</span>
            </a>

            <p className="text-[13px] text-slate-600 leading-relaxed max-w-[220px]">
              A modern EdTech platform helping students, teachers, and institutes achieve real-world learning outcomes.
            </p>

            <div className="space-y-2.5">
              {[
                { icon: Mail, text: 'hello@PuzzlersWhiz.com' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: MapPin, text: 'Mumbai, India' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-[12px] text-slate-600">
                  <item.icon size={12} className="text-indigo-500 flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  whileHover={{ scale: 1.12, y: -2 }}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-600 hover:text-white hover:bg-indigo-600/30 hover:border-indigo-500/40 transition-all duration-200"
                >
                  <s.icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest mb-4 heading-xl">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-slate-600 hover:text-slate-300 transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-700">
            © {new Date().getFullYear()} PuzzlersWhiz. All rights reserved.
          </p>
          <p className="text-[12px] text-slate-700">
            Built with ❤️ for learners
          </p>
        </div>
      </div>
    </footer>
  )
}
