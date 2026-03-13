import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import PlatformPreview from '../components/PlatformPreview'
import AudienceSection from '../components/AudienceSection'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#060610' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PlatformPreview />
        <AudienceSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
