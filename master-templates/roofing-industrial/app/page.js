import HectorHero from '../master-templates/electrician-industrial/components/HectorHero';
import HectorDetails from '../master-templates/electrician-industrial/components/HectorDetails';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main style={{ backgroundColor: '#fff' }}>
            <HectorHero />
            <HectorDetails />

            {/* Portfolio Section Placeholder */}
            <section style={{ padding: '100px 0', backgroundColor: '#1A2A3A', color: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: '800' }}>PROJECT <br /> PORTFOLIO</h2>
                        <button style={{ backgroundColor: '#E6A519', color: '#fff', border: 'none', padding: '15px 30px', fontWeight: '700' }}>Explore More Work</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                        <PortfolioCard title="Modern Electric Panel" label="Residential" img="https://images.unsplash.com/photo-1544724569-5f546fa66275?q=80&w=400" />
                        <PortfolioCard title="Smart Lighting Hub" label="Commercial" img="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400" />
                        <PortfolioCard title="EV Charging System" label="Utility" img="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400" />
                    </div>
                </div>
            </section>

            <Footer />

            {/* Syne Font for this template */}
            <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
        </main>
    );
}

function PortfolioCard({ title, label, img }) {
    return (
        <div style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '4px' }}>
            <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '30px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px', color: '#E6A519' }}>{label}</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{title}</h4>
            </div>
        </div>
    );
}
