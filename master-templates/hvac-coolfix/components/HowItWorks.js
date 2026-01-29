import { siteConfig } from '../config/site-config';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
    return (
        <section style={{ padding: '120px 0', backgroundColor: '#F2F6FA' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7AB1ED', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7AB1ED' }}></div>
                        How It Works
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: '600', lineHeight: '1.1' }}>From Call To<br />Cool In 5 Steps</h2>
                        <p style={{ color: '#666', marginTop: '20px', maxWidth: '400px', marginLeft: 'auto' }}>Getting your AC back on track is easier than you think — just five simple steps and comfort returns.</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                    {siteConfig.steps.map((step, i) => (
                        <div key={i} style={{
                            backgroundColor: step.active ? '#7AB1ED' : '#fff',
                            color: step.active ? '#fff' : '#111',
                            padding: '40px 30px',
                            borderRadius: '12px',
                            height: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.5 }}>{step.id}. {step.title}</div>
                            <div>
                                {step.active && (
                                    <div style={{ border: '1px solid rgba(255,255,255,0.5)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
                                        <div style={{ width: '15px', height: '15px', border: '2px solid #fff', position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#fff' }}></div>
                                        </div>
                                    </div>
                                )}
                                <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>{step.active ? 'We fix it fast' : step.title}</h4>
                                <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.5' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
