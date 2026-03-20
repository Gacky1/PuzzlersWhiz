import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cloud, Database, Bot, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const popularCourses = [
  {
    id: 'gcp',
    title: 'Google Cloud Platform (GCP)',
    description: 'Master cloud architecture, deployment, and management on Google Cloud.',
    price: 4999,
    icon: Cloud,
    gradient: 'from-blue-500 to-blue-700',
    iconBg: 'bg-blue-500/15 border-blue-500/25',
    iconColor: 'text-blue-400',
  },
  {
    id: 'bigdata',
    title: 'Big Data Engineering',
    description: 'Learn Hadoop, Spark, Kafka, and build highly scalable data pipelines.',
    price: 5499,
    icon: Database,
    gradient: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-500/15 border-orange-500/25',
    iconColor: 'text-orange-400',
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    description: 'Deep dive into neural networks, NLP, and computer vision.',
    price: 6999,
    icon: Bot,
    gradient: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-500/15 border-purple-500/25',
    iconColor: 'text-purple-400',
  }
];

export default function PopularCourses() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="popular-courses" className="relative py-28" style={{ background: '#0a0a1a' }}>
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)' }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Upskill Faster
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white heading-xl mb-5">
              Explore Our <span className="gradient-text">Top Courses</span>
            </h2>
            <p className="text-[17px] text-slate-400 leading-relaxed">
              Accelerate your career with premium, industry-aligned programs.
            </p>
          </div>
          
          <Link 
            to="/courses"
            className="inline-flex flex-shrink-0 items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] text-white font-medium transition-all group"
          >
            Explore All Courses
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative group rounded-2xl p-6 bg-[#0f0f20] border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                style={{ background: `radial-gradient(circle at top right, rgba(99,102,241,0.06) 0%, transparent 60%)` }} />
              
              <div className="flex justify-between items-start mb-6 w-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${course.iconBg}`}>
                  <course.icon size={24} className={course.iconColor} />
                </div>
                <div className="text-xl font-bold text-white">
                  ₹{course.price.toLocaleString('en-IN')}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{course.description}</p>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${course.gradient}`} />
              
              <Link to="/courses" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                View Details <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
