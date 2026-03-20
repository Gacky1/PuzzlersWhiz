import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, Database, Bot, CheckCircle, X, Upload } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GuidanceCTA from '../components/GuidanceCTA'
import { useSEO } from '../hooks/useSEO'

const courseList = [
  {
    id: 'gcp',
    title: 'Google Cloud Platform (GCP)',
    description: 'Master cloud architecture, deployment, and management on Google Cloud Platform with hands-on labs.',
    price: 4999, // Adjusting price to a realistic INR value for courses, e.g. 4999
    icon: Cloud,
    gradient: 'from-blue-500 to-blue-700',
    iconBg: 'bg-blue-500/15 border-blue-500/25',
    iconColor: 'text-blue-400',
    features: ['Real-world GCP Projects', 'Certification Preparation', '24/7 Lab Access', 'Expert Mentorship'],
  },
  {
    id: 'bigdata',
    title: 'Big Data Engineering',
    description: 'Learn Hadoop, Spark, Kafka, and build highly scalable, resilient end-to-end data pipelines.',
    price: 5499,
    icon: Database,
    gradient: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-500/15 border-orange-500/25',
    iconColor: 'text-orange-400',
    features: ['Hadoop & Spark Ecosystem', 'Complex Data Pipelines', 'Interview Preparation', 'Resume Reviews'],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    description: 'Deep dive into neural networks, natural language processing, computer vision, and generative AI.',
    price: 6999,
    icon: Bot,
    gradient: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-500/15 border-purple-500/25',
    iconColor: 'text-purple-400',
    features: ['Hands-on ML Models', 'Deep Learning Labs', 'Deploy AI Applications', 'Capstone Project'],
  }
];

const VALID_COUPONS: Record<string, number> = {
  'WELCOME10': 0.10, // 10% Percentage discount
  'FLAT500': 500,    // 500 INR fixed discount
};

export default function Courses() {
  useSEO({
    title: 'Courses – PuzzlersWhiz',
    description: 'Explore our premium courses in GCP, Big Data, and AI/ML. Master the skills needed to accelerate your tech career.',
    canonical: 'https://puzzlerswhiz.com/courses',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedCourse, setSelectedCourse] = useState<typeof courseList[0] | null>(null)
  
  // Modal states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    coupon: ''
  })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Calculate dynamic price based on coupon
  const appliedCoupon = formData.coupon.trim().toUpperCase()
  let discountAmount = 0
  if (selectedCourse && VALID_COUPONS[appliedCoupon] !== undefined) {
    const value = VALID_COUPONS[appliedCoupon]
    discountAmount = value < 1 ? selectedCourse.price * value : value
  }
  const finalPrice = selectedCourse ? Math.max(0, selectedCourse.price - discountAmount) : 0

  const handleOpenModal = (course: typeof courseList[0]) => {
    setSelectedCourse(course)
    setIsSubmitted(false)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', whatsapp: '', coupon: '' })
    setScreenshot(null)
  }

  const handleCloseModal = () => {
    setSelectedCourse(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Using Web3Forms for simple submission to email with file attachments
    const submitData = new FormData()
    // IMPORTANT: User must replace YOUR_ACCESS_KEY_HERE with their key from web3forms.com
    submitData.append("access_key", "e3cc6dc4-f2cf-4471-b18a-974ac819dbe2")
    submitData.append("subject", `New Course Purchase: ${selectedCourse?.title}`)
    submitData.append("Course", selectedCourse?.title || "Unknown")
    submitData.append("Name", formData.name)
    submitData.append("Email", formData.email)
    submitData.append("WhatsApp", formData.whatsapp)
    if (formData.coupon) {
      submitData.append("Coupon_Applied", formData.coupon)
    }
    submitData.append("Amount_Paid", `₹${finalPrice.toLocaleString('en-IN')}`)
    if (screenshot) {
      submitData.append("Payment_Screenshot", screenshot)
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      })
      const data = await response.json()
      if (data.success) {
        setIsSubmitted(true)
      } else {
        console.error("Form submission failed", data)
        alert("Submission failed. The Access Key may not be configured properly.")
      }
    } catch (error) {
      console.error("Error submitting form", error)
      alert("Error submitting form. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen text-slate-300 font-sans" style={{ background: '#060610' }}>
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Empower Your Future
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Accelerate your career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Premium Courses</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose from our industry-leading programs designed to get you hired. Learn from experts, build real-world projects, and master highly sought-after skills.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative group rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 hover:border-indigo-500/30 transition-all duration-300 flex flex-col"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none rounded-2xl bg-gradient-to-br ${course.gradient} transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl border ${course.iconBg} flex items-center justify-center mb-6`}>
                <course.icon size={28} className={course.iconColor} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">{course.description}</p>
              
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
                <div className="text-2xl font-bold text-white">
                  ₹{course.price.toLocaleString('en-IN')}
                </div>
                <button 
                  onClick={() => handleOpenModal(course)}
                  className="px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-sm transition-all border border-white/[0.1] hover:border-white/[0.2] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                >
                  Purchase
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <GuidanceCTA />
      <Footer />

      {/* Checkout Modal */}
      <AnimatePresence>
        {selectedCourse && (
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0f0f1a] border border-white/[0.1] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] p-2 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
                  
                  {/* Left Side: Course Info & QR Code */}
                  <div className="md:w-5/12 p-8 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/[0.05] flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300 mb-6">
                        Checkout
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">{selectedCourse.title}</h2>
                      <p className="text-sm text-slate-400 mb-6">{selectedCourse.description}</p>
                      
                      <div className="bg-[#0a0a10] border border-white/[0.08] rounded-xl p-4 mb-8">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-slate-400">Course Price</span>
                          <span className="text-sm font-medium text-white">₹{selectedCourse.price.toLocaleString('en-IN')}</span>
                        </div>
                        {discountAmount > 0 && (
                          <div className="flex justify-between items-center mb-2 text-emerald-400">
                            <span className="text-sm">Discount ({appliedCoupon})</span>
                            <span className="text-sm font-medium">-₹{discountAmount.toLocaleString('en-IN')}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-slate-400">Taxes</span>
                          <span className="text-sm font-medium text-white">Included</span>
                        </div>
                        <div className="border-t border-white/[0.05] pt-3 flex justify-between items-center">
                          <span className="text-base font-medium text-slate-300">Total</span>
                          <span className="text-2xl font-bold text-indigo-400">₹{finalPrice.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="bg-white p-4 rounded-2xl flex flex-col items-center shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                      <p className="text-xs font-bold text-slate-800 mb-3 uppercase tracking-wider">Scan to Pay via UPI</p>
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`upi://pay?pa=yoru@slc&pn=PuzzlersWhiz&am=${finalPrice}&cu=INR`)}`} 
                        alt="UPI Payment QR Code"
                        className="w-40 h-40 object-cover"
                      />
                      <p className="text-xs font-medium text-slate-500 mt-3 bg-slate-100 px-3 py-1 rounded-full">UPI ID: yoru@slc</p>
                    </div>
                  </div>

                  {/* Right Side: Form */}
                  <div className="md:w-7/12 p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Registration Details</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-400">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-[#0a0a10] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-400">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full bg-[#0a0a10] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400">WhatsApp Number (for updates & credentials)</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-[#0a0a10] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600"
                          placeholder="+91 7014286828"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400">Coupon Code (Optional)</label>
                        <input 
                          type="text" 
                          className="w-full bg-[#0a0a10] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600"
                          placeholder="ENTER CODE"
                          value={formData.coupon}
                          onChange={(e) => setFormData({...formData, coupon: e.target.value})}
                        />
                      </div>

                      <div className="space-y-1.5 pt-2">
                        <label className="text-xs font-medium text-slate-400">Payment Screenshot</label>
                        <div className="relative border border-dashed border-white/[0.2] hover:border-indigo-500/50 rounded-xl p-6 flex flex-col items-center justify-center transition-colors bg-[#0a0a10]">
                          <input 
                            required
                            type="file" 
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={(e) => {
                              if (e.target.files && e.target.files.length > 0) {
                                setScreenshot(e.target.files[0])
                              }
                            }}
                          />
                          <Upload className="w-8 h-8 text-slate-500 mb-2" />
                          <p className="text-sm font-medium text-slate-300">
                            {screenshot ? screenshot.name : "Click to upload screenshot"}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 5MB</p>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full mt-4 py-3.5 rounded-xl font-bold text-sm text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] ${
                          isSubmitting 
                            ? 'bg-slate-700 cursor-not-allowed opacity-75' 
                            : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5'
                        }`}
                      >
                        {isSubmitting ? 'Processing...' : 'Complete Purchase'}
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                // Success State
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", damping: 15, delay: 0.2 }}
                    className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-4">Payment Received!</h3>
                  <p className="text-slate-400 text-lg max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for purchasing <span className="text-white font-semibold">{selectedCourse.title}</span>. 
                    We are verifying your transaction. We will be sharing your credentials to access the course shortly via email and WhatsApp.
                  </p>
                  <button 
                    onClick={handleCloseModal}
                    className="px-8 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white font-medium hover:bg-white/[0.1] transition-all"
                  >
                    Return to Courses
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
