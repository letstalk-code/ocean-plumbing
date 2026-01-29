import { siteConfig } from '../config/site-config';
import { Menu, ArrowRight, Phone } from 'lucide-react';

export default function HectorHero() {
    return (
        <section style={{ padding: '40px 0', backgroundColor: '#fff' }}>
            <div className="container">
                {/* Nav */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', fontSize: '1.5rem' }}>
                        <div style={{ width: '35px', height: '35px', backgroundColor: '#1A2A3A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '15px', height: '15px', border: '3px solid #E6A519', borderRadius: '50%' }}></div>
                        </div>
                        HECTOR
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '1rem', color: '#111' }}>
                            <Phone size={18} color="#E6A519" fill="#E6A519" /> {siteConfig.phoneNumber}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <Menu size={20} /> MENU
                        </div>
                    </div>
                </div>

                {/* Hero Body */}
                <div style={{ position: 'relative' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto 60px auto', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '5.5rem', fontWeight: '800', letterSpacing: '-2px', lineHeight: '0.9', marginBottom: '40px' }}>
                            FIND THE BEST <br />
                            <span style={{ color: '#E6A519' }}>★</span> ELECTRICAL SOLUTIONS
                        </h1>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', alignItems: 'flex-start' }}>

                        {/* Left Side: Images */}
                        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '20px' }}>
                            <div style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1621905252507-b352220730d8?q=80&w=800" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} />
                                <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '40px', height: '40px', backgroundColor: '#1A2A3A', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>i</div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }} />
                                <div style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: '#E6A519', padding: '15px', borderRadius: '8px', color: '#fff' }}>
                                    <div style={{ width: '25px', height: '25px', border: '2px solid #fff', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Quick Contact Form */}
                        <div style={{ backgroundColor: '#F8F8F8', padding: '40px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>Quick Estimate</h3>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '0.9rem' }}>Get a response within 15 minutes.</p>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={inputGroupStyle}>
                                    <input type="text" placeholder="Your Name" style={fieldStyle} />
                                </div>
                                <div style={inputGroupStyle}>
                                    <input type="text" placeholder="Phone Number" style={fieldStyle} />
                                </div>
                                <div style={inputGroupStyle}>
                                    <select style={fieldStyle}>
                                        <option>Select Service</option>
                                        <option>Panel Upgrade</option>
                                        <option>EV Charger</option>
                                        <option>Smart Lighting</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <button style={{ backgroundColor: '#1A2A3A', color: '#fff', padding: '18px', border: 'none', borderRadius: '4px', fontWeight: '800', fontSize: '1rem', cursor: 'pointer', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    GET FREE QUOTE <ArrowRight size={18} color="#E6A519" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scrolling Ticker */}
            <div style={{ backgroundColor: '#1A2A3A', color: '#fff', padding: '20px 0', marginTop: '60px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                <div style={{ display: 'inline-block', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '2px' }}>
                    {siteConfig.scrollingText} ★ {siteConfig.scrollingText} ★ {siteConfig.scrollingText}
                </div>
            </div>
        </section>
    );
}

const inputGroupStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '12px 15px'
};

const fieldStyle = {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    fontFamily: 'inherit'
};
