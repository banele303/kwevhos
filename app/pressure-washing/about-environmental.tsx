
import { Card, CardHeader, CardTitle } from "@/components/ui/card";


export default function GoldmanEnvironmental() {
  const sections = {
    overview: [
      {
        title: 'Environmental Overview',
        description: 
          'Goldman Environmental, a subsidiary of Goldman Holding, is a leading provider of environmental solutions and services. Our mission is to deliver innovative and sustainable solutions that minimize environmental impact and promote eco-friendly practices.',
      },
    ],
    services: [
      {
        title: 'Environmental Consulting',
      },
      {
        title: 'Waste Management',
      },
      {
        title: 'Renewable Energy',
      },
      {
        title: 'Sustainability Planning',
      },
      {
        title: 'Environmental Remediation',
      },
      {
        title: 'Ecosystem Restoration',
      },
      {
        title: 'Soil and Groundwater Remediation',
      },
      {
        title: 'Environmental Management System',
      },
      {
        title: 'Environmental Training and Awareness',
      },
    ],
    projects: [
      {
        title: 'Waste-to-Energy Facility',
        description: 'Development of a waste-to-energy facility that converts waste into electricity.'
      },
      {
        title: 'Solar Farm',
        description: 'Construction of a solar farm that generates renewable energy.'
      },
      {
        title: 'Environmental Cleanup',
        description: 'Remediation of a contaminated industrial site.'
      },
      {
        title: 'Sustainable Development',
        description: 'Development of a sustainable community with green buildings and renewable energy.'
      },
      {
        title: 'Eco-Friendly Infrastructure',
        description: 'Design and construction of eco-friendly infrastructure, such as green roofs and rainwater harvesting systems.'
      },
    ],
    values: [
      {
        title: 'Environmental Stewardship',
        description: 'Commitment to protecting the environment and promoting sustainability.'
      },
      {
        title: 'Innovation',
        description: 'Encouragement of innovative solutions and technologies.'
      },
      {
        title: 'Collaboration',
        description: 'Partnership with clients, communities, and stakeholders to achieve environmental goals.'
      },
      {
        title: 'Integrity',
        description: 'Operation with transparency, honesty, and ethics.'
      },
      {
        title: 'Accountability',
        description: 'Taking responsibility for our environmental impact and actions.'
      },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <main className="container mx-auto px-4 py-12">

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Environmental Overview</h2>
          {sections.overview.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Projects</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside">
              {sections.projects.map((project, index) => (
                <li key={index}>
                  <strong>{project.title}:</strong> {project.description}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {sections.values.map((value, index) => (
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
