
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from 'next/image';

export default function GoldmanEnvironmentalProjects() {
  const sections = {
    overview: [
      {
        title: 'About Us',
        description:
          'Goldman Environmental, a subsidiary of Goldman Holding, is a leading provider of environmental solutions specializing in sustainability, waste management, renewable energy, and ecosystem restoration. Our commitment is to support eco-friendly practices and create a healthier planet for future generations.',
        ourhistory: "Goldman Environmental has established itself as a trusted and reliable partner in the environmental industry. Our experienced professionals have a proven track record of successfully completing projects on time, within budget, and to the highest environmental standards.",
        mission: "To deliver exceptional environmental solutions that prioritize sustainability, eco-friendly practices, and the well-being of our planet and communities alike."
      },
    ],
    services: [
      {
        title: 'Environmental Consulting',
  image: '/pest7.jpeg'
      },
      {
        title: 'Waste Management',
  image: '/pest6.jpeg'
      },
      {
        title: 'Renewable Energy Solutions',
  image: '/pest5.jpeg'
      },
      {
        title: 'Sustainability Planning',
  image: '/pest4.jpeg'
      },
      {
        title: 'Ecosystem Restoration',
  image: '/pest3.jpeg'
      },
      {
        title: 'Environmental Remediation',
  image: '/pest2.jpeg'
      },
      {
        title: 'Soil and Groundwater Remediation',
  image: '/pest1.jpeg'
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
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Types of Environmental Projects</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside">
              <li>Renewable energy projects: Solar, wind, and hybrid energy systems.</li>
              <li>Waste reduction and recycling initiatives: Composting, material recovery, and circular economy projects.</li>
              <li>Eco-restoration projects: Reforestation, wetland restoration, and biodiversity conservation.</li>
              <li>Infrastructure for sustainable development: Green building projects and eco-friendly construction.</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Environmental Stewardship</h3>
              <p>Prioritizing actions that protect and preserve natural ecosystems.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p>Ensuring that all our projects support a sustainable future.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p>Operating with transparency, honesty, and ethical business practices.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p>Developing new, eco-friendly solutions for environmental challenges.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
