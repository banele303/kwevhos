'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const images = [
  {
    src: '/manu/cimg.jpg',
    alt: 'Project 1',
  },
  {
    src: '/manu/cimg2.jpg',
    alt: 'Project 1',
  },
  {
    src: '/manu/cimg3.jpg',
    alt: 'Project 1',
  },
  {
    src: '/manu/cmg4.jpg',
    alt: 'Project 1',
  },
  {
    src: '/manu/img3.jpeg',
    alt: 'Project 3',
  },
  {
    src: '/manu/img.jpeg',
    alt: 'Project 4',
  },
  {
    src: '/manu/img.jpeg',
    alt: 'Project 5',
  }
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <div className="relative px-[1rem] w-full max-w-4xl mx-auto overflow-hidden">

        <h3 className="py-4 text-2xl text-center">Gallary Section</h3>
      <div className="relative aspect-video">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0  "
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

