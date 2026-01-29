import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesBar from '../components/ServicesBar';
import About from '../components/About';
import FeaturedServices from '../components/FeaturedServices';
import ServiceAreas from '../components/ServiceAreas';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navigation />
            <Hero />
            <ServicesBar />
            <About />
            <FeaturedServices />
            <ServiceAreas />

            {/* CTA Banner Area */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ backgroundColor: '#111', borderRadius: '32px', padding: '60px', color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1517646272486-a2c99afd953a?q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Get The Best Heating & Air Conditioning Services</h2>
                        </div>
                        <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '15px' }}>
                            <input type="email" placeholder="Enter Email" style={{ padding: '15px 25px', borderRadius: '50px', border: 'none', width: '100%', outline: 'none' }} />
                            <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <Team />

            {/* Logos Strip */}
            <section style={{ padding: '60px 0', borderTop: '1px solid #eee' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, filter: 'grayscale(1)' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" height="30" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" height="30" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" height="30" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" height="30" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tesla_Motors.svg" height="30" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
