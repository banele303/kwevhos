import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutManufacturingIndustry() {
    return (
        <div className="mx-auto  py-8">
            <h1 className="text-3xl  font-bold text-center mb-2">Goldman Manufacturing</h1>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>

            <p className="text-center mb-12 px-4" >
            ECOMAX MANUFACTURING, a subsidiary of Goldman Holding,
                 is a leading manufacturer of a diverse range of products, 
                 including detergents, bricks, rebars, blocks, paint and waterproofing solutions. Our commitment to quality and innovation drives us to deliver products that meet the highest standards for our customers in the construction, cleaning, and industrial sectors.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/manu/manu.jpeg"
                        alt="Detergents"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Detergents</h3>
                    <ul className="list-disc list-inside">
                        <li>Wide range of household and industrial detergents</li>
                        <li>Eco-friendly formulations</li>
                        <li>Customizable solutions for various cleaning needs</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/manu/menu1.jpeg"
                        alt="Bricks"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Bricks</h3>
                    <ul className="list-disc list-inside">
                        <li>High-quality, durable bricks for construction projects</li>
                        <li>Suitable for residential and commercial buildings</li>
                        <li>Variety of sizes and finishes available</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/manu/manu3.jpeg"
                        alt="Slabs"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Slabs</h3>
                    <ul className="list-disc list-inside">
                        <li>Rib and block/polystyrene slabs for construction</li>
                        <li>Lightweight, cost-effective, and insulating solution</li>
                        <li>Ideal for both residential and commercial projects</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Paint</h2>
            <div className="p-4 border rounded-lg shadow">
                <Image
                    src="/manu/menu4.jpeg"
                    alt="Paint"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                />
                <ul className="list-disc list-inside">
                    <li>Decorative, industrial and specialized coatings</li>
                    <li>High-quality, long-lasting finishes</li>
                    <li>Wide range of colors and finishes available</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Waterproofing Solutions</h2>
            <div className="p-4 border rounded-lg shadow">
                <Image
                    src="/pest9.jpeg"
                    alt="Waterproofing Solutions"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                />
                <ul className="list-disc list-inside">
                    <li>Protect buildings and structures from water damage</li>
                    <li>Versatile applications for both commercial and residential projects</li>
                    <li>Durable and reliable waterproofing solutions</li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Our Manufacturing Process</h2>
            <p className="mb-6">
                We use state-of-the-art manufacturing equipment and techniques to ensure that our products are of the highest quality. Our process includes:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Raw material sourcing from reputable suppliers</li>
                <li>Regular quality control checks to ensure standards are met</li>
                <li>Use of advanced manufacturing equipment for precision</li>
                <li>Testing and inspection to guarantee product quality</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Sustainability</h2>
            <p className="mb-6">
                At Goldman Manufacturing, we are committed to sustainability and reducing our environmental impact. We have implemented several initiatives to reduce our energy consumption, water usage, and waste generation. Our goal is to create products that not only meet industry standards but also contribute to a healthier environment.
            </p>

            <Button className="w-full md:w-auto">Contact Us for Your Next Project →</Button>
        </div>
    );
}
