'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryItems = [
  { id: 1, title: 'Strategic Planning', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, title: 'Financial Analysis', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, title: 'Market Research', image: '/placeholder.svg?height=400&width=600' },
  { id: 4, title: 'Process Optimization', image: '/placeholder.svg?height=400&width=600' },
  { id: 5, title: 'Digital Transformation', image: '/placeholder.svg?height=400&width=600' },
  { id: 6, title: 'Leadership Development', image: '/placeholder.svg?height=400&width=600' },
]

export default function GalleryGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryItems.map((item) => (
        <motion.div
          key={item.id}
          className="relative overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: item.id * 0.1 }}
          onHoverStart={() => setHoveredId(item.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white text-2xl font-bold text-center px-4">{item.title}</h3>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

