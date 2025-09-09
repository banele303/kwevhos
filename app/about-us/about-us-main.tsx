"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Shield, ThumbsUp, Wrench } from "lucide-react"


export default function AboutUs() {
  return (
    <div className="">
      <main className="container mx-auto px-4 py-12 space-y-24">

        {/* About Us Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">ABOUT US</h2>
            <p className="text-gray-600">
              At Kwevho&apos;s Business Enterprise, we&apos;ve established ourselves as a trusted partner for businesses since 2003, leveraging our
              expertise to deliver high-quality services and tailored solutions that meet the distinct needs of our clients in different
              industries.
            </p>
            <p className="text-gray-600">
              With over two decades of experience, we&apos;ve built strong relationships with our clients, founded on trust, professionalism
              and a deep understanding of their needs.
            </p>
            <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to provide innovative solutions that meet the unique needs of our clients, while fostering long-term
              relationships built on trust and excellence.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-[-2rem] mt-[-4rem]">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <ThumbsUp className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-center text-gray-800">Integrity</h3>
                <p className="text-gray-600">We operate with transparency and honesty in all our dealings.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Shield className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-center text-gray-800">Professionalism</h3>
                <p className="text-gray-600">We maintain the highest standards of professionalism in our work.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Wrench className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-center text-gray-800">Customer Satisfaction</h3>
                <p className="text-gray-600">We strive to deliver exceptional service and solutions that meet the evolving needs of our clients.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Why Choose Us</h2>
          <div className="text-gray-600 space-y-2">
            <p>Proven Track Record: We&apos;ve built a reputation for delivering high-quality work and exceeding client expectations.</p>
            <p>Long-Term Partnerships: We&apos;re committed to fostering long-term relationships with our clients.</p>
            <p>Our Team: Our experts work closely with clients to understand their needs and deliver tailored solutions.</p>
          </div>
        </section>

      </main>
    </div>
  )
}
