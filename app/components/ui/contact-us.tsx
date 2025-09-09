
"use client"
import { Phone, Mail, MapPin, } from 'lucide-react'
import Form from './form'

export default function ContactForm() {
    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
            <div className='max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 items-start'>

                <div className='px-0'>
                  <h2 className="text-3xl font-bold text-start mb-3 text-emerald-600">We're here to help</h2>
              <p className="font-medium text-start text-[16px] text-gray-800">
                              Use the form or details below to get in touch
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center">
                            <Phone className="w-6 h-6 text-blue-600 mr-2" />
                            <span>+27 63 458 2860</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-6 h-6 text-blue-600 mr-2" />
                            <span>info@kwevhos.co.za</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                            <span>Gauteng, South Africa</span>
                        </div>
                    </div>


                </div>





                <div className="px-0">
                    <Form />

                </div>


            </div>

        </section>
    )
}