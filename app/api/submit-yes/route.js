import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();

        const GHL_ACCESS_TOKEN = process.env.GHL_ACCESS_TOKEN;
        const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

        if (!GHL_ACCESS_TOKEN || !GHL_LOCATION_ID) {
            console.error('GHL Credentials missing in environment');
            return NextResponse.json({ success: false, error: 'Configuration Error' }, { status: 500 });
        }

        // Prepare GHL API Request
        // We'll use the upsert contact pattern (create or update)
        // API v2 endpoint: https://services.leadconnectorhq.com/contacts/upsert
        const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GHL_ACCESS_TOKEN}`,
                'Version': '2021-07-28'
            },
            body: JSON.stringify({
                locationId: GHL_LOCATION_ID,
                firstName: data.name.split(' ')[0],
                lastName: data.name.split(' ').slice(1).join(' ') || '',
                email: data.email,
                phone: data.phone,
                companyName: data.businessName,
                tags: ['smartsite_yes']
            }),
        });

        if (ghlResponse.ok) {
            return NextResponse.json({ success: true });
        } else {
            const errorData = await ghlResponse.json();
            console.error('GHL API Submission Failed:', JSON.stringify(errorData));
            return NextResponse.json({ success: false, error: 'API submission failed' }, { status: ghlResponse.status });
        }
    } catch (error) {
        console.error('Bridge API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
