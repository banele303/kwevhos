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

        <Button className="w-full md:w-auto">
                <Link href="tel:+27728960780">Call Now for Assistance →</Link>
            </Button>
        </div>
    );
}
