export const theme = {
    colors: {
        primary: '#7AB1ED', // "Cool Blue" from images
        secondary: '#000000', // Pitch Black for FAQ/Contrast
        accent: '#F2F6FA', // Light Ice Blue
        background: '#FFFFFF',
        text: '#111111',
        white: '#FFFFFF'
    },
    borderRadius: '20px',
    fonts: {
        heading: '"Inter", sans-serif',
        body: '"Inter", sans-serif'
    }
};

export const siteConfig = {
    businessName: 'CoolFix',
    phoneNumber: '(877) 232 7465',
    email: 'hello@coolfix.com',
    heroTitle: 'Fast AC Repair — When You Need It Most.',
    heroSubtitle: 'Same-day service. Certified technicians. 100% satisfaction guarantee.',
    steps: [
        { id: '01', title: 'CONTACT US', desc: 'Reach out via phone or our booking form.', icon: 'phone' },
        { id: '02', title: 'PICK A TIME', desc: 'Choose a slot that fits your busy schedule.', icon: 'calendar' },
        { id: '03', title: 'GET A SERVICE', desc: 'A certified technician arrives on time and fixes the issue.', active: true, icon: 'tool' },
        { id: '04', title: 'PAY SAFELY', desc: 'Secure payment through our digital portal.', icon: 'credit-card' },
        { id: '05', title: 'READY?', desc: 'Your home is cool again. Enjoy the comfort!', icon: 'check' }
    ],
    faq: [
        { q: 'Is there a service call fee?', a: 'We offer transparent pricing with competitive call rates.' },
        { q: 'Do you offer warranties?', a: 'Yes, all our repairs come with a 12-month guarantee.' },
        { q: 'Do you offer regular maintenance?', a: 'Our subscription plans keep your AC running all year round.' },
        { q: 'Do you work on all AC brands?', a: 'Our technicians are certified for all major manufacturers.' }
    ]
};
