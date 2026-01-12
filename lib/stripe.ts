import Stripe from 'stripe';

/**
 * Get Stripe client configured with secret key and latest API version
 * Factory function to avoid initializing at module scope (build-time safe)
 * 
 * @throws Error if STRIPE_SECRET_KEY is not set
 */
export function getStripe(): Stripe {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  
  if (!apiKey) {
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
  }

  return new Stripe(apiKey, {
    apiVersion: '2025-02-24.acacia',
    typescript: true,
  });
}

