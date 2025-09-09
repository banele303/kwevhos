import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ManuFAQSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-[20px]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What types of products does Goldman Manufacturing produce?</AccordionTrigger>
                        <AccordionContent>
                            Goldman Manufacturing produces a diverse range of products, including detergents, bricks, slabs, paint, and waterproofing solutions. Our manufacturing capabilities cater to various industries, particularly in construction, cleaning, and industrial applications.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How does Goldman Manufacturing ensure product quality?</AccordionTrigger>
                        <AccordionContent>
                            Quality is at the core of our manufacturing process. We conduct regular quality control checks at every stage of production, from raw material sourcing to final testing and inspection. Our team uses state-of-the-art equipment and rigorous testing procedures to ensure that all our products meet the highest industry standards.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Does Goldman Manufacturing offer custom products?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we offer customizable solutions for various products, such as detergents, bricks, slabs, and paints. We work closely with our clients to understand their specific needs and create products that meet their requirements, ensuring the best possible outcomes for their projects.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How does Goldman Manufacturing prioritize sustainability?</AccordionTrigger>
                        <AccordionContent>
                            At Goldman Manufacturing, we are committed to sustainability. We focus on reducing our environmental impact by optimizing energy consumption, minimizing waste, and using eco-friendly materials whenever possible. Our manufacturing processes are designed to be as efficient and environmentally responsible as possible.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Can Goldman Manufacturing handle large-scale orders?</AccordionTrigger>
                        <AccordionContent>
                            Yes, Goldman Manufacturing is fully equipped to handle both small and large-scale orders. Our advanced production facilities and experienced team ensure that we can meet high demand without compromising on product quality or delivery timelines. We have the capacity to support large construction projects and industrial needs.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
