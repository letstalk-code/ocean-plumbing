import { siteConfig } from '../config/site-config';
import { ArrowUpRight } from 'lucide-react';

export default function HectorDetails() {
    return (
        <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

                    <div>
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', color: '#666' }}>OUR SERVICE</span>
                        <h2 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1', marginTop: '20px' }}>WHY YOU <br /> CHOOSE HECTOR</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '60px' }}>
                            <FeatureCard title="Factory-Trained Installers" icon="user" />
                            <FeatureCard title="High Quality Materials" icon="box" />
                            <FeatureCard title="Effective Communication" icon="message" />
                            <FeatureCard title="Prioritizing Safety" icon="shield" />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '60px' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: '#E6A519', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>★</div>
                            <div style={{ width: '80px', height: '80px', backgroundColor: '#1A2A3A', borderRadius: '50%' }}></div>
                            <p style={{ maxWidth: '300px', fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
                                Since 1978, we have built our reputation as Florida's premier electrical company, focusing on delivering quality products.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
                            {siteConfig.stats.map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#666', borderTop: '2px solid #E6A519', paddingTop: '10px', marginTop: '10px' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, icon }) {
    return (
        <div style={{ border: '1px solid #eee', padding: '30px', borderRadius: '4px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#F8F8F8', borderRadius: '50%', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Icon placeholder */}
            </div>
            <h4 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '10px' }}>{title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>Who said owning a home was expensive? Certainly not someone who owns a home.</p>
        </div>
    );
}
