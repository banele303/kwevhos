"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

export default function GoldmanConstruction() {
  const sections = {
    overview: [
      {
        title: 'About Us',
        description:
          'Goldman Construction, a subsidiary of Goldman Holding, is a leading construction company specializing in building, civil engineering, and project management services. We deliver high-quality construction solutions that exceed our clients\' expectations.\n\nGoldman Construction has established itself as a trusted and reliable partner in the construction industry. Our experienced professionals have a proven track record of successfully completing projects on time, within budget, and to the highest standards of quality.\n\nOur mission is to deliver exceptional construction solutions that exceed our clients\' expectations, while maintaining the highest standards of quality, safety, and sustainability.',
        ourhisotry: "Goldman Construction has established itself as a trusted and reliable partner in the construction industry. Our experienced professionals have a proven track record of successfully completing projects on time, within budget, and to the highest standards of quality.",
        mission: "To deliver exceptional construction solutions that exceed our clients' expectations, while maintaining the highest standards of quality, safety, and sustainability. "
      },
    ],
    services: [
      {
        title: 'Building Construction',
  image: '/pest11.jpeg'
     

      },
      {
        title: 'Civil Engineering',
  image: '/pest13.jpeg'
       
      },
      {
        title: 'Civil Engineering',
  image: '/pest10.jpeg'
       
      },
      {
        title: 'Civil Engineering',
  image: '/pest12.jpeg'
       
      },
      {
        title: 'Civil Engineering',
  image: '/pest9.jpeg'
       
      },
      {
        title: 'Civil Engineering',
  image: '/pest8.jpeg'
       
      },
      {
        title: 'Project Management',
  image: '/pest7.jpeg'
      
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <main className="container mx-auto px-4 py-12">


        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                 
                </CardContent>
             
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Projects</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside">
              <li>Residential developments: Luxury apartments, condominiums, and single-family homes.</li>
              <li>Commercial buildings: Office buildings, retail centers, and restaurants.</li>
              <li>Industrial facilities: Manufacturing plants, warehouses, and distribution centers.</li>
              <li>Infrastructure projects: Roads, bridges, and public transportation systems.</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Safety</h3>
              <p>Prioritizing the safety of our employees, clients and the general public.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p>Striving for excellence in every project.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p>Operating with transparency, honesty, and ethics.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p>Minimizing our environmental footprint in every project.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
