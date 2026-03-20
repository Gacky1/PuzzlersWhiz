import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Twitter, Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import logoImg from '../assets/LogoTp.png'

const footerLinks: Record<string, { label: string; to?: string; href?: string }[]> = {
  Platform: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#howitworks' },
    { label: 'Platform Preview', href: '#platform' },
    { label: 'Pricing', href: '#cta' },
  ],
  Learn: [
    { label: 'Courses', to: '/courses' },
    { label: 'Labs', href: '#' },
    { label: 'Quizzes', href: '#' },
    { label: 'Analytics', href: '#' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms-of-service' },
    { label: 'Cookie Policy', to: '/cookie-policy' },
    { label: 'Refund Policy', to: '/refund-policy' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
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
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <img
                src={logoImg}
                alt="PuzzlersWhiz"
                className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-[15px] font-bold text-white heading-xl">PuzzlersWhiz</span>
            </Link>

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
                  href={s.href}
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
            <nav key={title} aria-label={`${title} navigation`}>
              <h4 className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest mb-4 heading-xl">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-[13px] text-slate-600 hover:text-slate-300 transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[13px] text-slate-600 hover:text-slate-300 transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
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
