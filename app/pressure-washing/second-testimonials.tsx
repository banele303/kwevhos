"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

export default function SecondTestimonials() {
  return (
    <div className="">
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John D.",
                location: "Camps Bay",
                quote: "Goldman Holdings Consulting exceeded our expectations with their attention to detail and professionalism. Highly recommended!",
                rating: 5,
              },
              {
                name: "Nkosana L.",
                location: "Constantia",
                quote: "Their civil engineering expertise is unmatched. The project was completed on time and with impeccable quality.",
                rating: 5,
              },
              {
                name: "Minenhle D.",
                location: "Stellenbosch",
                quote: "From design to execution, Goldman Holdings Consulting delivered excellence. The team was a pleasure to work with!",
                rating: 4.5,
              },
              {
                name: "Sarah M.",
                location: "Durbanville",
                quote: "The waterproofing services were outstanding. Our basement is now completely dry even after heavy rains!",
                rating: 5,
              },
              {
                name: "Michael R.",
                location: "Green Point",
                quote: "The general building services were top-notch. The team worked efficiently and maintained high standards throughout.",
                rating: 5,
              },
              {
                name: "Lindiwe N.",
                location: "Newlands",
                quote: "Goldman Holdings Consulting's aluminium services transformed our shopfront beautifully. Highly professional work!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(testimonial.rating) ? (
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        ) : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? (
                          <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
                        ) : (
                          <Star className="w-5 h-5 text-gray-300" />
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-2">
                      {testimonial.name[0]}
                    </div>
                    <p className="font-semibold">{testimonial.name}, {testimonial.location}</p>
                  </div>
                  <p className="mb-4 italic pt-3">&#34;{testimonial.quote}&#34;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
