
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import ContactButtons from './ui/contact-bottons'
import SmartList from "./smart-list"
import Link from "next/link"

const items = [
  "Collaborations Built on Trust",
  "Delivering Outstanding Outcomes",
  "Consistent Track Record of Success ",
  "Commitment to Excellence and Quality ",
  "Anticipating Trends, Embracing Innovation ",
]

export default function Featured() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactButtons />

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-[4rem]">
            <div>
              <p className="mb-1">
                At Kwevhos Business Enterprise, we&apos;re fueled by a passion for innovation and a commitment to excellence. Our unique
                blend of expertise, experience, and core values enables us to deliver outstanding results and build enduring
                relationships with our clients.
                <br />
                <br />
                We stay ahead of the curve by leveraging the latest advancements and investing in continuous improvement. This ensures
                our clients benefit from cutting-edge solutions tailored to their needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-center mt-[-2rem] font-semibold mb-4">Why Choose Us</h3>
              <SmartList items={items} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industry: Environmental */}
      <section className="pb-16 mt-[-2rem]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Industry</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>ENVIRONMENTAL</CardTitle>
                </CardHeader>
                <CardContent>
            <Image src="/pest7.jpeg" alt="Environmental" width={600} height={320} className="w-full h-auto rounded-md object-cover" />
                  <div className="mt-3 items-start flex justify-start ">
                    <Link href="/about-us#environmental">
              <button className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <p className="text-gray-700">
                Our Environmental services focus on sustainable, compliant, and efficient solutions tailored to client needs across
                sectors. We combine expertise and innovation to deliver measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 my-[-2rem] bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8">Contact us today for tailored business solutions.</p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}