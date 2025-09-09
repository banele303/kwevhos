
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/ui/Navbar";
import Footer from "./components/ui/footer";
import HeroSlider from "./components/home-slider";
import ContactForm from "./components/ui/contact-us";
import Testimonials from "./components/ui/testimonial-section";
import { Button } from "@/components/ui/button";
import FRQ from "./components/ui/FRQ";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSlider />

      {/* Welcome blurb */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Kwevhos Business Enterprise</h2>
          <p className="text-gray-600 text-lg">
            Where expertise meets innovation. We&apos;re your trusted partner for tailored business solutions, driven by a passion for
            excellence and a commitment to your success. Let&apos;s build a brighter future together.
          </p>
        </div>
      </section>

      {/* Solid picture (show full image, not full width) */}
      <section className="py-8 bg-white">
        <div className="relative mx-auto h-[40vh] md:h-[60vh] w-[92%] md:w-[70%] max-w-5xl rounded-xl overflow-hidden border border-gray-200">
          <Image
            src="/pest13.jpeg"
            alt="Kwevhos Solid Visual"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Expertise</h2>
          <p className="text-gray-700 text-lg text-center">
            We craft solutions that meet each client&apos;s unique needs, driving growth through optimized operations and strategic
            expertise. Our commitment to excellence shines through in every project—our expertise is your catalyst for growth.
          </p>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
            <Button asChild variant="outline" className="hidden md:inline-flex text-emerald-700">
              <Link href="/services">View all</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{t:'Pest Inspections',i:'/pest6.jpeg'},{t:'Treatments',i:'/pest7.jpeg'},{t:'Prevention',i:'/pest8.jpeg'},{t:'Emergency 24/7',i:'/pest9.jpeg'}].map((c)=>(
              <div key={c.t} className="rounded-xl overflow-hidden bg-white border shadow-sm">
                <div className="relative h-40"><Image src={c.i} alt={c.t} fill className="object-cover"/></div>
                <div className="p-4"><h3 className="font-semibold">{c.t}</h3></div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:hidden flex">
            <Button asChild variant="outline" className="w-full text-emerald-700">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

  {/* Featured Industry section removed; Environmental content moved under About Us */}

      

      {/* Our Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Partners</h2>
          <p className="text-gray-600 mb-8">We collaborate with reputable organizations to deliver end-to-end value.</p>
          <div className="mx-auto grid grid-cols-1 place-items-center">
            <div className="relative h-16 w-56">
              <Image src="/ghlogo.jpeg" alt="GH Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

  {/* Frequently Asked Questions */}
  <FRQ />

  {/* Careers CTA removed */}

      {/* Contacts */}
      <ContactForm />
      <Footer />
    </div>
  );
}
