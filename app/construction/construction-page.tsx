'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"


const GoldmanConstructionPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/construction/hero-bg.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-8">
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Goldman Construction
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl mb-6"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            Building the Future, One Project at a Time
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button className="bg-orange-500 text-white px-10 py-4 text-2xl rounded-lg shadow-lg hover:bg-orange-600 transition-all">Learn More</Button>
          </motion.div>
        </div>
      </section>
      
      {/* Company Overview Section */}
      <section className="py-20 bg-white text-center px-6 md:px-20">
        <motion.h2 
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          Company Overview
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Goldman Construction, a subsidiary of Goldman Holding, is a leading construction company specializing in building, civil engineering, and project management services. We deliver high-quality construction solutions that exceed our clients&apos; expectations.
        </motion.p>
      </section>

      {/* Our History Section */}
      <section className="py-20 bg-gray-100 px-6 md:px-20">
        <motion.h2 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          Our History
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-700 text-center"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Goldman Construction has established itself as a trusted and reliable partner in the construction industry. Our experienced professionals have a proven track record of successfully completing projects on time, within budget, and to the highest standards of quality.
        </motion.p>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white px-6 md:px-20">
        <motion.h2 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-700 text-center"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          To deliver exceptional construction solutions that exceed our clients&apos; expectations, while maintaining the highest standards of quality, safety, and sustainability.
        </motion.p>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-orange-500 text-white text-center px-6 md:px-20">
        <motion.h2 
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          Ready to Build Your Future with Us?
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <Button className="bg-white text-orange-500 px-10 py-4 text-2xl rounded-lg shadow-lg hover:bg-gray-100 transition-all">Get in Touch</Button>
        </motion.div>
      </section>
    </div>
  )
}

export default GoldmanConstructionPage
