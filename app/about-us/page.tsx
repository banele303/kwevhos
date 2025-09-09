"use client"
import Footer from "../components/ui/footer"
import FRQ from "../components/ui/FRQ"
import { Navbar } from "../components/ui/Navbar"
import AboutHero from "./about-hero"
import AboutUs from "./about-us-main"
import AboutEnvironmentalSolutions from "../environmental/environ-section"

export default function Home (){
    return(
        <div>
<Navbar/>
<AboutHero/>
<AboutUs/>
<section id="environmental" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Environmental Services</h2>
        <div className="rounded-2xl border border-emerald-200 bg-white shadow-sm">
            <AboutEnvironmentalSolutions />
        </div>
    </div>
</section>
{/* <Featured/> */}
<FRQ/>
<Footer/>

        </div>

    )
}