import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();

        // GHL Webhook URL from environment variables
        const GHL_WEBHOOK_URL = process.env.GHL_YES_WEBHOOK_URL;

        if (!GHL_WEBHOOK_URL) {
            console.error('GHL_YES_WEBHOOK_URL is not defined in .env');
            return NextResponse.json({ success: false, error: 'Configuration Error' }, { status: 500 });
        }

        // Forward data to GHL
        const response = await fetch(GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                tag: 'smartsite_yes',
                source: 'Smart Website Funnel'
            }),
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            const errorText = await response.text();
            console.error('GHL Submission Failed:', errorText);
            return NextResponse.json({ success: false, error: 'GHL submission failed' }, { status: 500 });
        }
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
