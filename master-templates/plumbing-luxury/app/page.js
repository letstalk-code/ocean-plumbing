import LuxuryHero from '../master-templates/plumbing-luxury/components/LuxuryHero';
import LuxuryDetails from '../master-templates/plumbing-luxury/components/LuxuryDetails';
import BentoServices from '../master-templates/plumbing-luxury/components/BentoServices';
import Footer from '../components/Footer';

// TIP: In a real app, we would use a dynamic switch based on the client name.
export default function Home() {
    return (
        <main style={{ backgroundColor: '#fff' }}>
            {/* Loading the Luxury Plumbing Template */}
            <LuxuryHero />
            <LuxuryDetails />
            <BentoServices />

            {/* Reusing the universal footer */}
            <Footer />

            {/* Modern Serif Font for this template */}
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        </main>
    );
}
