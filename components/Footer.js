import { siteConfig } from '../config/site-config';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #eee', padding: '100px 0 40px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>

                    <div>
                        <div style={{ fontWeight: '700', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '25px' }}>
                            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '8px' }}></div>
                            {siteConfig.businessName}
                        </div>
                        <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '30px', maxWidth: '300px' }}>
                            Providing premium home services since 1975. Our team is dedicated to your comfort and satisfaction.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <SocialIcon Icon={Facebook} />
                            <SocialIcon Icon={Twitter} />
                            <SocialIcon Icon={Instagram} />
                            <SocialIcon Icon={Linkedin} />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Company</h4>
                        <FooterLinks links={['About Us', 'Blog', 'Service', 'Careers', 'Contact']} />
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Services</h4>
                        <FooterLinks links={['Cooling Services', 'Air Conditioning', 'Indoor Air Quality', 'Gas Furnace Heating', 'Refrigeration Install']} />
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <ContactItem Icon={MapPin} text="700 S. Austin Ave, Austin, TX 90033" />
                            <ContactItem Icon={Phone} text={siteConfig.phoneNumber} />
                            <ContactItem Icon={Mail} text={siteConfig.email} />
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #eee', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '0.9rem' }}>
                    <p>Licensed & Insured. Made with ❤️ Copyright © EZ HVAC. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <span>Terms and Conditions</span>
                        <span>Our Terms</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SocialIcon = ({ Icon }) => (
    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
        <Icon size={18} color="#333" />
    </div>
);

const FooterLinks = ({ links }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {links.map((link, i) => (
            <a key={i} href="#" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>{link}</a>
        ))}
    </div>
);

const ContactItem = ({ Icon, text }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#666' }}>
        <Icon size={18} color="var(--primary)" />
        <span>{text}</span>
    </div>
);
