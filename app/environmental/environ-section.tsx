import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutEnvironmentalSolutions() {
    return (
        <div className="mx-auto px-[2rem] py-8">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Pest Control Services</h1>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>

            <p className="md:text-center text-[18px] mb-12">
                We specialize in comprehensive pest control solutions tailored to protect homes, businesses, and properties from unwanted pests. With expert technicians, friendly methods, and a commitment to customer satisfaction, we ensure safe and effective pest management.
            </p>

            {/* Our Services */}
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
                <li><strong>Inspection:</strong> Identifying pest issues and assessing damage.</li>
                <li><strong>Treatment:</strong> Using chemical and biological methods to eliminate pests.</li>
                <li><strong>Prevention:</strong> Implementing measures to prevent future infestations (sealing entry points and sanitation).</li>
            </ul>

            {/* Methods Used */}
            <h2 className="text-2xl font-bold mb-4">Methods Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">Chemical Methods</h3>
                    <ul className="list-disc list-inside">
                        <li>Fumigation: Treating infestations or specific pests</li>
                        <li>Rodenticides: Baits to control rodents</li>
                    </ul>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">Non-Chemical Methods</h3>
                    <ul className="list-disc list-inside">
                        <li>Traps: Mechanical devices</li>
                        <li>Exclusion: Sealing entry points to prevent pests from entering</li>
                        <li>Heat Treatment: Using high temperatures to eliminate pests</li>
                        <li>Cryonite Treatment: Freezing pests with CO2 snow</li>
                    </ul>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">Environmental Modifications</h3>
                    <ul className="list-disc list-inside">
                        <li>Sanitation: Reducing food and water sources for pests</li>
                    </ul>
                </div>
            </div>

            {/* Group of Pests */}
            <h2 className="text-2xl font-bold mb-4">Group of Pests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="font-semibold mb-2">Insects</h3>
                    <p className="text-sm">Ants, cockroaches, termites, bed bugs</p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="font-semibold mb-2">Rodents</h3>
                    <p className="text-sm">Mice, rats</p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="font-semibold mb-2">Wildlife</h3>
                    <p className="text-sm">Squirrels and bats</p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="font-semibold mb-2">Termites</h3>
                    <p className="text-sm">Colony structure and targeted treatments</p>
                </div>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
                <li><strong>Proven Results:</strong> Trusted by clients across sectors.</li>
                <li><strong>Friendly Options:</strong> Safe, sustainable methods for your property.</li>
                <li><strong>24/7 Emergency Service:</strong> Pests don’t wait—neither do we!</li>
            </ul>

            <Button className="w-full md:w-auto">
                <Link href="tel:+27728960780">Call Now for Assistance →</Link>
            </Button>
        </div>
    );
}
