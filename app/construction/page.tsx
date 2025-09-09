import { Navbar } from "../components/ui/Navbar";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "../components/ui/footer";
import SecondTestimonials from "../pressure-washing/second-testimonials";
import ContactButtons from "../components/ui/contact-bottons";

import AboutGoldmanConstruction from "./about-construction";
import FAQSection from "./FRQ-Construction";
import Gallery from "./gallary-section";


export default function Home() {
    return (
        <div>
            <Navbar />

            <Gallery />


            <AboutGoldmanConstruction />
            {/* <GoldmanConstruction /> */}
            {/* <PortFolio /> */}



            <SecondTestimonials />

            <section className="px-[2rem] md:px-[5rem]">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ready to Transform Your Company?</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Schedule Your Free Consultation</CardTitle>
                        <CardDescription>Take the first step towards your dream Business</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border rounded-md"
                            />
                            <textarea
                                placeholder="Tell us about your project"
                                className="w-full p-2 border rounded-md"
                                rows={4}
                            ></textarea>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Get Started</Button>
                    </CardFooter>
                </Card>
            </section>


            <FAQSection />
            <ContactButtons />
            <Footer />

        </div>
    );
}