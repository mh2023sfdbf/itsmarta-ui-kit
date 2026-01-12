import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createSignedDownloadUrl } from '@/lib/r2';

/**
 * API Route: GET /api/download-link
 * 
 * Verifies a Stripe checkout session and returns a signed R2 download URL
 * Compatible with Cloudflare Pages Functions
 * 
 * Query params:
 *   - session_id: Stripe checkout session ID
 * 
 * Returns:
 *   - 200: { url: string } - Signed download URL
 *   - 400: Missing or invalid session_id
 *   - 403: Payment not completed or invalid session
 *   - 500: Server error
 */
export async function GET(request: NextRequest) {
  try {
    // Extract session_id from query parameters
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    // Validate session_id exists
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id parameter' },
        { status: 400 }
      );
    }

    // Retrieve the Stripe checkout session
    let session;
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch (error) {
      console.error('Stripe session retrieval error:', error);
      return NextResponse.json(
        { error: 'Invalid or expired session_id' },
        { status: 403 }
      );
    }

    // Verify payment status and mode
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 403 }
      );
    }

    if (session.mode !== 'payment') {
      return NextResponse.json(
        { error: 'Invalid session mode - must be one-time payment' },
        { status: 403 }
      );
    }

    // TODO: (Optional but recommended) Validate specific product/price
    // Retrieve line items and verify the correct product was purchased:
    //
    // const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
    // const expectedPriceId = process.env.STRIPE_PRICE_ID; // e.g., "price_1ABC..."
    // const purchasedPriceId = lineItems.data[0]?.price?.id;
    // 
    // if (purchasedPriceId !== expectedPriceId) {
    //   return NextResponse.json(
    //     { error: 'Invalid product purchased' },
    //     { status: 403 }
    //   );
    // }

    // Get R2 object key from environment (or could be dynamic based on product)
    const r2Key = process.env.R2_KEY || 'ui-kit-ver1.zip';

    // Generate signed download URL (expires in 10 minutes = 600 seconds)
    const signedUrl = await createSignedDownloadUrl(r2Key, 600);

    return NextResponse.json({ url: signedUrl });

  } catch (error) {
    console.error('Download link generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Specify edge runtime for Cloudflare Pages compatibility
export const runtime = 'edge';

