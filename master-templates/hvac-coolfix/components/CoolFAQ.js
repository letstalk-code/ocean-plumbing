import { siteConfig } from '../config/site-config';
import { Plus } from 'lucide-react';

export default function CoolFAQ() {
    return (
        <section style={{ padding: '120px 0', backgroundColor: '#000', color: '#fff' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7AB1ED', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7AB1ED' }}></div>
                        FAQ
                    </div>
                    <div style={{ width: '60%' }}>
                        <h2 style={{ fontSize: '5rem', fontWeight: '600', marginBottom: '40px', lineHeight: '1' }}>Frequently<br />Asked Questions</h2>
                        <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '80px', maxWidth: '500px' }}>
                            Getting your AC back on track is easier than you think — just five simple steps and comfort returns.
                        </p>

                        <div style={{ borderTop: '1px solid #333' }}>
                            {siteConfig.faq.map((item, i) => (
                                <div key={i} style={{ padding: '40px 0', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', gap: '40px' }}>
                                        <span style={{ color: '#555', fontSize: '0.9rem', fontWeight: '600' }}>0{i + 1}</span>
                                        <span style={{ fontSize: '1.8rem', fontWeight: '500' }}>{item.q}</span>
                                    </div>
                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Plus size={20} color="#555" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
