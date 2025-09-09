'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Nomsa M.', text: 'Professional, responsive, and results-driven. Their solutions made a real difference for our business.' },
  { name: 'David L.', text: 'Reliable and high-quality work. The team is knowledgeable and easy to work with.' },
  { name: 'Emily K.', text: 'Great communication and execution from start to finish. Highly recommended.' },
 
  { name: 'Ayesha R.', text: 'Impressive attention to detail and commitment to excellence.' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index)  => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}