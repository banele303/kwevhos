import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: "/building/about-hero.jpg",
    title: "Toilet Repair",
  },
  {
    icon: "/kitchenr/k7.jpeg",
    title: "Plumber",
  },
  {
    icon: "/barthrooms/bb3.jpg",
    title: "Geyser",
  },

 
  {
    icon: "/kitchenr/k11.jpeg",
    title: "Kitchen Renovation",
  },
  {
    icon: "/barthrooms/bb5.jpg",
    title: "Bathroom Remodeling",
  },
  {
    icon: "/kitchenr/k12.jpeg",
    title: "Kitchen Installation",
  },
  {
    icon: "/building/roof-painting.jpeg",
    title: "Roof Painting",
  },
]

export default function Gallery() {
  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-secondary/10">
                <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 space-y-6 text-muted-foreground">
        <h3 className="text-2xl font-bold text-primary">Serving South Africa Since 2005</h3>
        <p>
          Modern Builder was founded with a vision to provide top-quality plumbing services to homes and businesses
          across South Africa. Our journey began in a small workshop in Johannesburg, fueled by passion and dedication
          to the craft of plumbing.
        </p>
        <p>
          Over the years, we&apos;ve grown from a local operation to a trusted name in the industry, serving clients in
          major cities and rural areas alike. Our commitment to excellence, integrity, and customer satisfaction has
          been the cornerstone of our success.
        </p>
        <p>
          Today, we&apos;re proud to be one of the leading plumbing companies in South Africa, with a team of skilled
          professionals ready to tackle any plumbing challenge. Our story is one of growth, learning, and unwavering
          commitment to our craft and our customers.
        </p>
      </div>
    </section>
  )
}