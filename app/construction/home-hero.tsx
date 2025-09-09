"use client"

import Image from "next/image";


import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function BathroomHero() {

  return (

    <section className="relative bg-orange-400 md:h-[70vh] text-white">
      <div className="absolute inset-0 overflow-hidden ">
        <Image
          src="/pest12.jpeg"
          alt="Roof cleaning in action"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 py-[2rem]  md:pt-[4rem] relative z-10 md:max-w-6xl md:px-[4rem]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:pt-[6rem]">Professional Consulting Services</h1>
        <p className="text-xl md:text-2xl mb-8">Construction , Environmental and Manufacturing Consulting</p>
        <Button size="lg" className="bg-white text-blue-600 font-bold  hover:bg-black">
          Get a In Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}