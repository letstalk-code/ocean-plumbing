import Hero from '../master-templates/hvac-professional/components/Hero';
import About from '../master-templates/hvac-professional/components/About';
import FeaturedServices from '../master-templates/hvac-professional/components/FeaturedServices';
import Testimonials from '../master-templates/hvac-professional/components/Testimonials';
import ServiceAreas from '../master-templates/hvac-professional/components/ServiceAreas';
import Team from '../master-templates/hvac-professional/components/Team';
import Footer from '../master-templates/hvac-professional/components/Footer';
import Navigation from '../master-templates/hvac-professional/components/Navigation';

export default function Home() {
    return (
        <main style={{ backgroundColor: '#fff' }}>
            <Navigation />
            <Hero />
            <About />
            <FeaturedServices />
            <Testimonials />
            <Team />
            <ServiceAreas />
            <Footer />

            {/* Inter and Outfit Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet" />
        </main>
    );
}

