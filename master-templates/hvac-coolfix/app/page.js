import CoolHero from '../master-templates/hvac-coolfix/components/CoolHero';
import HowItWorks from '../master-templates/hvac-coolfix/components/HowItWorks';
import CoolFAQ from '../master-templates/hvac-coolfix/components/CoolFAQ';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <CoolHero />
            <HowItWorks />

            {/* Services Section Placeholder for now */}
            <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <img
                        src="https://images.unsplash.com/photo-1513694490325-24b4ef582191?q=80&w=800"
                        style={{ width: '100%', borderRadius: '24px' }}
                        alt="Floor Plan"
                    />
                    <div>
                        <h2 style={{ fontSize: '4rem', fontWeight: '600', marginBottom: '30px' }}>Everything Your AC Could Ever Need</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>From sudden breakdowns to seasonal checkups — we handle it all. Explore our expert AC services designed to get your cool back.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <ServiceItem label="Diagnostics & Repairs" />
                            <ServiceItem label="Installation & Replacement" active />
                            <ServiceItem label="Seasonal Maintenance" />
                        </div>
                    </div>
                </div>
            </section>

            <CoolFAQ />
            <Footer />
        </main>
    );
}

function ServiceItem({ label, active }) {
    return (
        <div style={{ padding: '25px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600', fontSize: '1.1rem' }}>
            {label}
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', border: active ? 'none' : '1px solid #ddd', backgroundColor: active ? '#7AB1ED' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: active ? '#fff' : '#ddd' }}></div>
            </div>
        </div>
    );
}
