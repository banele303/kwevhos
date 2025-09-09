import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-[20px]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What types of industries does Goldman Holdings Consulting serve?</AccordionTrigger>
                        <AccordionContent>
                            Goldman Holdings Consulting serves a wide range of industries, including but not limited to manufacturing, energy, construction, infrastructure, telecommunications, and transportation. Our diverse expertise allows us to tackle complex engineering challenges across various sectors.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How does Goldman Holdings Consulting integrate sustainability into its projects?</AccordionTrigger>
                        <AccordionContent>
                            Sustainability is a core principle in all our projects. We incorporate energy-efficient designs, use eco-friendly materials when possible, and optimize systems to reduce resource consumption. Our team stays updated on the latest green technologies and sustainable practices to ensure we&apos;re always offering the most environmentally responsible solutions.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can Goldman Holdings Consulting handle both design and implementation of engineering projects?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we offer end-to-end engineering services. Our team can handle every phase of a project, from initial concept and design to implementation, testing, and ongoing maintenance. This comprehensive approach ensures seamless project execution and allows us to maintain high-quality standards throughout the entire process.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What sets Goldman Holdings Consulting apart from other engineering firms?</AccordionTrigger>
                        <AccordionContent>
                            Goldman Holdings Consulting stands out due to our innovative approach, multidisciplinary expertise, and commitment to sustainability. We combine cutting-edge technology with creative problem-solving to deliver unique solutions. Our team&apos;s diverse skills in both electrical and mechanical engineering allow us to tackle complex, integrated projects that other firms might struggle with.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Does Goldman Holdings Consulting offer consulting services?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide expert consulting services in both electrical and mechanical engineering. Our consultants can assist with project planning, feasibility studies, system optimization, and technical audits. We work closely with clients to understand their needs and provide tailored advice to help them make informed decisions and achieve their goals.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
