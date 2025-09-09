"use client";

import Image from "next/image";

import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ManufacturingHero() {
  return (
    <section className="relative bg-gray-700 md:h-[70vh] text-white">
      <div className="absolute inset-0 overflow-hidden ">
        <Image
          src="/manu/manu.jpeg"
          alt="Manufacturing industry in action"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 pt-8 md:pt-[4rem] relative z-10 md:max-w-6xl md:px-[4rem]">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 pt-[6rem]">Professional Manufacturing Industry Services</h1>
        <p className="text-xl md:text-2xl mb-8">Manufacturing, Industrial Solutions, and Production Consulting</p>
        <Button size="lg" className="bg-white text-blue-600 font-bold hover:bg-black">
          Get In Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
