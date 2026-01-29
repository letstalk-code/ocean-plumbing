import { siteConfig } from '../config/site-config';
import { Search, Globe, Phone, ArrowRight } from 'lucide-react';

export default function CoolHero() {
    return (
        <section style={{ height: '100vh', position: 'relative', backgroundColor: '#7AB1ED', color: '#fff', overflow: 'hidden' }}>
            {/* Premium Navigation */}
            <nav style={{ padding: '30px 0', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.3)', padding: '8px 15px', borderRadius: '50px', fontSize: '0.8rem' }}>
                        <Globe size={14} /> EN / FR
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '700' }}>
                        <div style={{ width: '24px', height: '24px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', backgroundColor: '#fff' }}></div>
                            <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '100%', height: '2px', backgroundColor: '#fff' }}></div>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg)', width: '2px', height: '100%', backgroundColor: '#fff' }}></div>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', width: '2px', height: '100%', backgroundColor: '#fff' }}></div>
                        </div>
                        CoolFix
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', opacity: 0.8 }}>
                            <Phone size={16} /> {siteConfig.phoneNumber}
                        </div>
                        <button style={{ backgroundColor: '#fff', color: '#7AB1ED', padding: '12px 25px', borderRadius: '50px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }}>
                            Book a Repair
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -85%)', width: '80%', opacity: 0.1, fontSize: '20rem', fontWeight: '900', userSelect: 'none' }}>
                    CoolFix
                </div>

                <img
                    src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1200"
                    alt="AC Unit"
                    style={{ width: '700px', marginBottom: '40px', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.2))' }}
                />

                <h1 style={{ fontSize: '5rem', fontWeight: '600', maxWidth: '900px', lineHeight: '1', marginBottom: '20px' }}>
                    {siteConfig.heroTitle}
                </h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '40px' }}>
                    {siteConfig.heroSubtitle}
                </p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <button style={{ backgroundColor: '#fff', color: '#000', padding: '18px 40px', borderRadius: '50px', border: 'none', fontWeight: '600', fontSize: '1.1rem' }}>Book a Repair</button>
                    <button style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', padding: '18px 40px', borderRadius: '50px', border: 'none', fontWeight: '600', fontSize: '1.1rem', backdropFilter: 'blur(10px)' }}>Get Estimate</button>
                </div>
            </div>
        </section>
    );
}
