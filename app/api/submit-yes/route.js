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

        // Clean phone number (GHL API v2 is strict)
        // Removes all non-numeric characters except +
        const rawPhone = data.phone || '';
        const cleanPhone = rawPhone.replace(/[^\d+]/g, '');

        // Prepare GHL API Request
        // API v2 endpoint: https://services.leadconnectorhq.com/contacts/upsert
        const contactPayload = {
            locationId: GHL_LOCATION_ID,
            firstName: data.name ? data.name.split(' ')[0] : 'New',
            lastName: data.name ? data.name.split(' ').slice(1).join(' ') : 'Lead',
            email: data.email,
            phone: cleanPhone,
            companyName: data.businessName || '',
            tags: ['smartsite_yes']
        };

        console.log('Sending to GHL:', JSON.stringify(contactPayload));

        const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GHL_ACCESS_TOKEN}`,
                'Version': '2021-07-28'
            },
            body: JSON.stringify(contactPayload),
        });

        const responseData = await ghlResponse.json();

        if (ghlResponse.ok) {
            console.log('GHL Success:', JSON.stringify(responseData));
            return NextResponse.json({ success: true, data: responseData });
        } else {
            console.error('GHL API Submission Failed:', JSON.stringify(responseData));
            return NextResponse.json({
                success: false,
                error: responseData.message || 'API submission failed',
                details: responseData
            }, { status: ghlResponse.status });
        }
    } catch (error) {
        console.error('Bridge API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
