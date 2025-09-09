"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

export default function GoldmanManufacturing() {
  const sections = {
    overview: [
      {
        title: 'Manufacturing Overview',
        description:
          'GREEN  SHIELD SOLUTIONS a subsidiary of Goldman Holding, is a leading manufacturer of a diverse range of products, including detergents, bricks, rebars, blocks, paint, and waterproofing solutions.',
      },
    ],
    products: [
      {
        title: 'Detergents',
        description: 'We manufacture a wide range of detergents.',
        image: '/images/detergents.jpg'
      },
      {
        title: 'Bricks',
        description: 'Our bricks are made from high-quality material and are suitable for use in construction projects.',
        image: '/images/bricks.jpg'
      },
      {
        title: 'Slab',
        description: 'Our rib and block/polystyrene slabs are designed for use in the construction industry, providing a lightweight, insulating, and cost-effective solution for building roofs.',
        image: '/images/slabs.jpg'
      },
      {
        title: 'Paint',
        description: 'We manufacture a wide range of paints, including decorative paints, industrial paints, and specialized coatings.',
        image: '/images/paint.jpg'
      },
      {
        title: 'Waterproofing Solutions',
        description: 'Our waterproofing solutions are designed to protect buildings and structures from water damage and are suitable for use in a wide range of applications.',
        image: '/images/waterproofing.jpg'
      },
    ],
    process: [
      {
        title: 'Raw Material Sourcing',
        description: 'We source high-quality raw materials from reputable suppliers.'
      },
      {
        title: 'Quality Control',
        description: 'We conduct regular quality control checks to ensure that our products meet our high standards.'
      },
      {
        title: 'Manufacturing',
        description: 'We use state-of-the-art manufacturing equipment to produce our products.'
      },
      {
        title: 'Testing and Inspection',
        description: 'We conduct regular testing and inspection to ensure that our products meet our high standards.'
      },
    ],
    sustainability: [
      {
        title: 'Sustainability Commitment',
        description: 'At Goldman Manufacturing, we are committed to sustainability and reducing our environmental impact. We have implemented several initiatives to reduce our energy consumption, water usage, and waste generation.'
      },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <main className="container mx-auto px-4 py-12">

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Manufacturing Overview</h2>
          {sections.overview.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Products</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.products.map((product, index) => (
              <Card key={index}>
                <Image src={product.image} alt={product.title} width={300} height={200} className="w-full h-40 object-cover rounded-t-md" />
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Manufacturing Process</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside">
              {sections.process.map((step, index) => (
                <li key={index}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sustainability</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {sections.sustainability.map((value, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
