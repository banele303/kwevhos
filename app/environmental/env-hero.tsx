"use client";

import Image from "next/image";

import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function EnvHero() {
  return (
    <section className="relative bg-slate-400 md:h-[70vh] text-white">
      <div className="absolute inset-0 overflow-hidden ">
        <Image
          src="/pest7.jpeg"
          alt="Environmental consulting in action"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 p-8 md:pt-[4rem] relative z-10 md:max-w-6xl md:px-[4rem]">
  <h1 className="text-3xl md:text-5xl font-bold mb-4 md:pt-[6rem]">Comprehensive Pest Control Services</h1>
  <p className="text-xl md:text-2xl mb-8">Safe, effective, and sustainable solutions for homes and businesses</p>
        <Button size="lg" className="bg-white text-green-600 font-bold hover:bg-black">
          Get In Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
