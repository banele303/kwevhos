"use state"

import Image from 'next/image'



export default function PortFolio() {

const portfolioItems = [
    { title: 'Modern Bathroom Oasis', image: '/barthrooms/bb3.jpg' },
    { title: 'Sleek Kitchen Renovation', image: '/kitchenr/k5.jpeg' },
    { title: 'Luxurious Master Bath', image: '/barthrooms/k&b.jpg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k10.jpeg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/kitchen-remodeling1.jpg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k12.jpeg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/kitchen-remodeling3.jpg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/kbath1.heic' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k9.jpeg' },
    { title: 'Gourmet Chef\'s Kitchen', image: '/kitchenr/k8.jpeg' },
  

  ]


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
     

      

      

      

      {/* Portfolio Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Portfolio</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      
    </div>
  )
}