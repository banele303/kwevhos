import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'

export default function Secondcleaning() {
  const [, setActiveTab] = useState('residential')

  const services = [
    {
      id: 'residential',
      title: 'Residential',
      description: 'We offer a wide range of residential services to keep your home looking its best.',
      items: [
        'Driveway Cleaning and Sealing',
        'Patio and Deck Restoration',
        'Roof Cleaning and Coating',
        'Exterior House Washing',
        'Window Cleaning',
        'Gutter Cleaning'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Our commercial services are designed to maintain the professional appearance of your business.',
      items: [
        'Building Exterior Cleaning',
        'Parking Lot Cleaning and Striping',
        'Graffiti Removal',
        'Awning Cleaning',
        'Pressure Washing',
        'Window Cleaning'
      ]
    },
    {
      id: 'industrial',
      title: 'Industrial',
      description: 'We provide specialized cleaning solutions for industrial facilities and equipment.',
      items: [
        'Heavy Equipment Cleaning',
        'Warehouse Floor Cleaning',
        'Tank and Silo Cleaning',
        'Industrial Painting and Coating',
        'Rust Removal',
        'High-Pressure Water Jetting'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">


      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Modern Renovetor, we provide top-notch cleaning and restoration services for residential, commercial, and industrial properties.
          </p>
        </section>

        <Tabs defaultValue="residential" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{service.title} Services</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Modern Renovetor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Experienced Team', description: 'Our skilled professionals have years of experience in the industry.' },
              { title: 'Eco-Friendly Solutions', description: 'We use environmentally friendly cleaning products and methods.' },
              { title: 'Cutting-Edge Equipment', description: 'Our state-of-the-art equipment ensures efficient and effective cleaning.' },
              { title: 'Customized Services', description: 'We tailor our services to meet your specific needs and requirements.' },
              { title: 'Competitive Pricing', description: 'We offer high-quality services at competitive and transparent prices.' },
              { title: 'Customer Satisfaction', description: 'Your satisfaction is our top priority, and we strive for excellence in every job.' }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-6">Contact us today for a free consultation and quote. Let&apos;s bring your surfaces back to life!</p>
            <div className=" flex justify-center">

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

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Consultation', description: 'We discuss your needs and assess the project requirements.' },
              { title: 'Planning', description: 'We create a tailored plan and provide a detailed quote.' },
              { title: 'Execution', description: 'Our team carries out the cleaning or restoration work efficiently.' },
              { title: 'Follow-up', description: 'We ensure your complete satisfaction with the results.' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Service Information */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Comprehensive Services</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Residential Services</h3>
              <p className="mb-4">We offer a wide range of residential services to keep your home looking its best. Our team of experts uses the latest techniques and equipment to ensure that your property is cleaned thoroughly and efficiently.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Driveway Cleaning and Sealing: Restore the appearance of your driveway and protect it from future damage.</li>
                <li>Patio and Deck Restoration: Bring new life to your outdoor living spaces.</li>
                <li>Roof Cleaning and Coating: Remove unsightly stains and protect your roof from the elements.</li>
                <li>Exterior House Washing: Improve your home&apos;s curb appeal with a thorough exterior cleaning.</li>
                <li>Window Cleaning: Enjoy crystal-clear views with our professional window cleaning services.</li>
                <li>Gutter Cleaning: Prevent water damage by keeping your gutters clear and functioning properly.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Commercial Services</h3>
              <p className="mb-4">Our commercial services are designed to maintain the professional appearance of your business. We understand the importance of a clean and well-maintained commercial property in making a positive impression on your clients and customers.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Building Exterior Cleaning: Keep your commercial building looking its best with our thorough cleaning services.</li>
                <li>Parking Lot Cleaning and Striping: Maintain a safe and attractive parking area for your customers and employees.</li>
                <li>Graffiti Removal: Quickly and effectively remove unwanted graffiti from your property.</li>
                <li>Awning Cleaning: Restore the appearance of your business awnings and extend their lifespan.</li>
                <li>Pressure Washing: Remove built-up dirt, grime, and stains from various surfaces.</li>
                <li>Window Cleaning: Ensure your commercial windows are sparkling clean, inside and out.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Industrial Services</h3>
              <p className="mb-4">We provide specialized cleaning solutions for industrial facilities and equipment. Our industrial services are designed to meet the unique challenges of manufacturing plants, warehouses, and other industrial settings.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Heavy Equipment Cleaning: Keep your machinery in top condition with our specialized cleaning services.</li>
                <li>Warehouse Floor Cleaning: Maintain a safe and clean working environment with our industrial floor cleaning solutions.</li>
                <li>Tank and Silo Cleaning: Ensure the cleanliness and efficiency of your storage tanks and silos.</li>
                <li>Industrial Painting and Coating: Protect your equipment and structures with our high-quality painting and coating services.</li>
                <li>Rust Removal: Extend the life of your metal surfaces with our effective rust removal techniques.</li>
                <li>High-Pressure Water Jetting: Remove tough stains and buildup with our powerful water jetting services.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Commitment to Quality</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Modern Renovetor, we are committed to delivering the highest quality cleaning and restoration services. Our team of skilled professionals is trained in the latest techniques and uses state-of-the-art equipment to ensure superior results every time.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We understand that every property is unique, which is why we offer customized solutions tailored to your specific needs. Whether you&apos;re a homeowner looking to refresh your property&apos;s appearance or a business owner maintaining a professional image, we have the expertise to exceed your expectations.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our eco-friendly approach means that we use environmentally responsible cleaning products and methods whenever possible, ensuring that our services are not only effective but also safe for your family, employees, and the environment.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get Started Today</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Ready to experience the Modern Renovetor difference? Contact us today to schedule your free consultation and quote. Let us show you how we can transform your surfaces and exceed your expectations.
          </p>
          <div className="flex justify-center">
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
      </main>


    </div>
  )
}