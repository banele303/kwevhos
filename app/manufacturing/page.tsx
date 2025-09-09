import Footer from "../components/ui/footer";
import { Navbar } from "../components/ui/Navbar";
import AboutManufacturing from "./about-manu";
import ManuGallery from "./gallary";
import ManuFAQSection from "./manu-frq";


export default function Home() {
    return (
        <div>
            <Navbar />
            <ManuGallery />
            <AboutManufacturing />
            <ManuFAQSection />
            <Footer />

        </div>
    );
}