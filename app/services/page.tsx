"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/ui/Navbar";
import Footer from "../components/ui/footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Pest Inspections",
    desc: "Thorough site assessments to detect and quantify pest issues.",
    image: "/inspecion.jpeg",
  },
  {
    title: "Treatments",
    desc: "Targeted chemical and non-chemical eradication methods.",
    image: "/treatments.jpeg",
  },
  {
    title: "Prevention",
    desc: "Seal entry points and sanitation to prevent return.",
    image: "/pest3.jpeg",
  },
  {
    title: "24/7 Emergency",
    desc: "Rapid-response support when you need it most.",
    image: "/pest9.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <Image src="/pest12.jpeg" alt="Services" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Services</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Professional, safe and effective pest control for Residential, Commercial and Industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl overflow-hidden bg-white border shadow-sm">
                <div className="relative h-40">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h4 className="font-bold mb-2">Chemical Methods</h4>
            <p className="text-sm text-gray-600">Fumigation and rodenticides for targeted elimination.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h4 className="font-bold mb-2">Non-Chemical Methods</h4>
            <p className="text-sm text-gray-600">Traps, exclusion, heat and cryonite treatments.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h4 className="font-bold mb-2">Environmental Mods</h4>
            <p className="text-sm text-gray-600">Sanitation and habitat adjustments to deter pests.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Help Now?</h2>
          <p className="mb-6 text-lg">Call us for fast and effective  solutions.</p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-white/90">
              <Link href="tel:+27728960780">Call Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
