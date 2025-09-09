"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FRQ() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* FAQ Section */}
            <section className="pt-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl  md:text-3xl font-bold mb-3 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-[20px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What types of industries does Goldman Holdings serve?</AccordionTrigger>
                            <AccordionContent>
                                Goldman Holdings serves a wide range of industries, focusing on construction, environmental, and manufacturing businesses. Our diverse expertise allows us to provide tailored consulting services to meet the specific needs of each sector.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How does Goldman Holdings support sustainability in its consulting services?</AccordionTrigger>
                            <AccordionContent>
                                Sustainability is a core principle in all our consulting services. We emphasize eco-friendly practices, promote energy-efficient solutions, and support clients in adopting sustainable methods within their operations. Our consultants stay updated on the latest green technologies and industry best practices.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can Goldman Holdings assist with both strategic planning and operational implementation?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we offer comprehensive consulting services that cover both strategic planning and operational implementation. Our team works closely with clients to develop actionable strategies and supports them throughout the execution process, ensuring smooth transitions and successful outcomes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>What sets Goldman Holdings apart from other consulting firms?</AccordionTrigger>
                            <AccordionContent>
                                Goldman Holdings stands out due to our industry-specific focus, customized approach, and commitment to sustainability. Our deep knowledge of the construction, environmental, and manufacturing sectors allows us to provide insights and solutions that other firms may not offer. We prioritize personalized service and measurable results.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Does Goldman Holdings offer industry-specific consulting services?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we provide expert consulting services tailored to the construction, environmental, and manufacturing industries. Our consultants have extensive experience in these sectors, allowing us to offer specialized guidance and actionable strategies that address each industry&apos;s unique challenges.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

        </div>
    )
}
