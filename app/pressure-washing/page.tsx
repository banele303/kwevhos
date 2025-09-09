"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ArrowRight, Droplets, Home, Shield, ChevronDown, ChevronUp } from 'lucide-react'

import Footer from '../components/ui/footer'

import Secondcleaning from './second-section'
import SecondTestimonials from './second-testimonials'
import ContactButtons from '../components/ui/contact-bottons'
import LandingNav from './landing-nav'


export default function RoofCleanHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }
  const faqItems = [
    {
      question: "How often should I have my house or driveway cleaned?",
      answer: "The frequency of cleaning depends on factors like the type of surface, surrounding environment, and local climate. We generally recommend having your driveway or house exterior cleaned once a year. However, if you notice significant buildup of dirt, moss, or algae, it might be beneficial to schedule a cleaning sooner."
    },
    {
      question: "Is your cleaning process safe for all types of driveways and paving?",
      answer: "Yes, our cleaning process is safe for various types of driveways and paving, including concrete, pavers, asphalt, and brick. We use specialized equipment and eco-friendly solutions that are tough on grime but gentle on your surfaces. Our team is trained to clean different surface materials safely and effectively."
    },
    {
      question: "How long does a typical driveway or house wash take?",
      answer: "The duration of a driveway or house washing job depends on the size and condition of the area. On average, a standard residential driveway cleaning takes 1-2 hours, while a house wash may take a bit longer. For larger areas or those with heavy buildup, it may take additional time. We'll provide you with a time estimate before starting the job."
    },
    {
      question: "Do you offer any guarantees on your work?",
      answer: "Yes, we stand behind the quality of our work. We offer a satisfaction guarantee on all our services. If you're not completely satisfied with the results, we'll return to address any issues at no additional cost. We also provide a 6-month guarantee against the regrowth of moss and algae on paved surfaces."
    }
  ];
  
  return (
    <div className="">
      <LandingNav/>
      <ContactButtons />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-blue-300 h-[80vh] md:h-[70vh] text-white">
          <div className="absolute inset-0 overflow-hidden ">
            <Image
              src="/cleaning/cement cleaning.png"
              alt="Roof cleaning in action"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
          </div>
          <div className="container mx-auto px-4  pt-[4rem] relative z-10 md:max-w-6xl md:px-[4rem]">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 pt-[6rem]">Professional Pressure washing Services in Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8">Restore your home beauty and extend its lifespan with our expert cleaning solutions.</p>
            <div className="">

              <a
                href="https://wa.me/27631995124" // Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 max-w-[12rem] hover:bg-green-700 text-white p-3 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-105"
                aria-label="WhatsApp"
              > Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></a>


            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Welcome to Modern Renovator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">At Modern Renovator we specialize in high-quality pressure washing services to revitalize your driveway, walls, pool areas, and cement surfaces. Our team uses advanced equipment and techniques to effectively remove dirt, grime, and tough stains, restoring your surfaces to their original beauty and brightness.
             </p>
                <p className="mb-4">We understand how important a clean, well-maintained property is for curb appeal and long-term value. Whether its years of buildup on your driveway or algae growth around your pool, our experienced technicians are equipped to handle all types of challenges safely and efficiently. We prioritize customer satisfaction and go the extra mile to ensure sparkling results with every job.</p>
                <p>Transform your property with professional pressure washing that you can trust. Contact us today to schedule a service and discover the difference a thorough cleaning can make to your homes exterior!</p>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/cleaning/paving cleaning.png"
                  alt="Roof Clean team at work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Roof Cleaning",
                  icon: Home,
                  image: "/cleaning/roofp1.png",
                  description: "We clean all types of roofs, removing moss, algae, and debris. Our gentle yet effective process preserves your roof's integrity while restoring its appearance."
                },
                {
                  title: "High-Pressure Cleaning",
                  icon: Droplets,
                  image: "/cleaning/cement cleaning.png",
                  description: "Our high-pressure cleaning service is perfect for driveways, walls, and other hard surfaces. We adjust our equipment to provide the right pressure for each surface type."
                },
                {
                  title: "High-Pressure Cleaning",
                  icon: Droplets,
                  image: "/cleaning/dckingcleaning.png",
                  description: "Our high-pressure cleaning service is perfect for driveways, walls, and other hard surfaces. We adjust our equipment to provide the right pressure for each surface type."
                },
                {
                  title: "Tiles and Swimming Pools Cleaning",
                  icon: Droplets,
                  image: "/cleaning/poolcleaning.png",
                  description: "Our high-pressure cleaning service is perfect for driveways, walls, and other hard surfaces. We adjust our equipment to provide the right pressure for each surface type."
                },
                {
                  title: "Wall Cleaning",
                  icon: Droplets,
                  image: "/cleaning/wallcleaning.png",
                  description: "Our high-pressure cleaning service is perfect for driveways, walls, and other hard surfaces. We adjust our equipment to provide the right pressure for each surface type."
                },
                {
                  title: "And More Cleaning",
                  icon: Shield,
                  image: "/cleaning/more.png",
                  description: "We clear your gutters of leaves and debris to prevent water damage. Our thorough process includes checking downpipes to ensure proper water flow."
                }
              ].map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <service.icon className="h-6 w-6 mr-2 text-blue-600" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>

                    <div className="relative h-48 w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>

                    <p className='pt-5'>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ol className="list-decimal list-inside space-y-4">
                  <li className="">Initial Inspection: We thoroughly assess your house condition and identify any potential cleaning issues.</li>
                  <li className="">Preparation: We protect surrounding areas and vegetation from cleaning runoff.</li>
                  <li className="">Pre-treatment: We apply a specialized cleaning solution to loosen dirt, moss, and algae.</li>
                  <li className="">Gentle Cleaning: Using our soft wash system, we clean your house without damaging the surface.</li>
                  <li className="">Rinse and Inspection: We thoroughly rinse your space and perform a final inspection.</li>
                  <li className="">Clean-up: We ensure all surrounding areas are clean and tidy before we leave.</li>
                </ol>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/cleaning/poolcleaning2.png"
                  alt="Roof cleaning process"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {/* <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Roof Clean?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Over 10 years of experience in roof cleaning",
                "Certified and insured professionals",
                "Use of eco-friendly cleaning solutions",
                "State-of-the-art soft wash system",
                "Competitive pricing with no hidden fees",
                "100% satisfaction guarantee",
                "Serving all areas in Cape Town and surrounds",
                "Free, no-obligation quotes"
              ].map((reason, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 text-green-500 flex-shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <Secondcleaning />

        {/* Testimonials */}
        {/* <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "John D., Camps Bay", quote: "Roof Clean did an excellent job on our tiled roof. It looks brand new and the team was professional throughout." },
                { name: "Sarah M., Constantia", quote: "I was impressed by their attention to detail. They even noticed and repaired a small leak during the cleaning process!" },
                { name: "Michael R., Stellenbosch", quote: "Great service at a competitive price. Our gutters have never been cleaner, and they completed the job faster than expected." }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="mb-4 italic">"{testimonial.quote}"</p>
                    <p className="">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
        <SecondTestimonials />
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold">{item.question}</span>
                    {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-gray-50">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Call-to-Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Refresh  Your Roof?</h2>
            <p className="text-xl mb-8">Contact us today for a free quote on our professional roof cleaning services.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

